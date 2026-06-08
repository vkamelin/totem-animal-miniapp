import { defineStore } from 'pinia';
import { questions } from '@/config/questions';
import { buildResult } from '@/domain/totem/buildResult';
import { clearAllStorage, loadSession, saveResult, saveSession } from '@/storage/resultStorage';
import type { SelectedAnswer, StoredResult, StoredSession } from '@/domain/totem/types';

type TestState = {
  initialized: boolean;
  currentIndex: number;
  startedAt: string | null;
  answersByQuestion: Record<string, string>;
  completedResult: StoredResult | null;
};

function createInitialState(): TestState {
  return {
    initialized: false,
    currentIndex: 0,
    startedAt: null,
    answersByQuestion: {},
    completedResult: null,
  };
}

function toSession(state: TestState): StoredSession {
  const answers = questions
    .filter((question) => state.answersByQuestion[question.code])
    .map<SelectedAnswer>((question) => ({
      questionCode: question.code,
      answerCode: state.answersByQuestion[question.code],
    }));

  return {
    startedAt: state.startedAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    currentIndex: state.currentIndex,
    answers,
  };
}

export const useTestStore = defineStore('test', {
  state: createInitialState,
  getters: {
    totalQuestions: () => questions.length,
    currentQuestion(state) {
      return questions[state.currentIndex] ?? null;
    },
    isFirstQuestion(state) {
      return state.currentIndex <= 0;
    },
    isLastQuestion(state) {
      return state.currentIndex >= questions.length - 1;
    },
    answeredCount(state) {
      return Object.keys(state.answersByQuestion).length;
    },
    selectedAnswers(state): SelectedAnswer[] {
      return questions
        .filter((question) => state.answersByQuestion[question.code])
        .map((question) => ({
          questionCode: question.code,
          answerCode: state.answersByQuestion[question.code],
        }));
    },
    selectedAnswerForCurrent(state) {
      const question = questions[state.currentIndex];
      if (!question) {
        return null;
      }
      return state.answersByQuestion[question.code] ?? null;
    },
    hasSession(state) {
      return Object.keys(state.answersByQuestion).length > 0;
    },
  },
  actions: {
    hydrate() {
      if (this.initialized) {
        return;
      }

      this.initialized = true;

      const session = loadSession();

      if (!session) {
        return;
      }

      this.startedAt = session.startedAt;
      this.currentIndex = Math.min(session.currentIndex, questions.length - 1);
      this.answersByQuestion = session.answers.reduce<Record<string, string>>((acc, answer) => {
        acc[answer.questionCode] = answer.answerCode;
        return acc;
      }, {});
    },
    startFresh() {
      this.startedAt = new Date().toISOString();
      this.currentIndex = 0;
      this.answersByQuestion = {};
      this.completedResult = null;
      saveSession(toSession(this));
    },
    chooseAnswer(answerCode: string) {
      const question = this.currentQuestion;

      if (!question) {
        return;
      }

      this.answersByQuestion[question.code] = answerCode;

      const nextIndex = Math.min(this.currentIndex + 1, questions.length - 1);
      this.currentIndex = nextIndex;
      this.startedAt ??= new Date().toISOString();

      saveSession(toSession(this));

      if (Object.keys(this.answersByQuestion).length === questions.length) {
        this.finish();
      }
    },
    goBack() {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
      saveSession(toSession(this));
    },
    goToIndex(index: number) {
      this.currentIndex = Math.max(0, Math.min(index, questions.length - 1));
      saveSession(toSession(this));
    },
    finish() {
      const selectedAnswers = questions
        .filter((question) => this.answersByQuestion[question.code])
        .map((question) => ({
          questionCode: question.code,
          answerCode: this.answersByQuestion[question.code],
        }));

      this.completedResult = buildResult(selectedAnswers);
      saveResult(this.completedResult);
      clearAllStorage();
      saveResult(this.completedResult);
    },
    reset() {
      this.initialized = false;
      this.currentIndex = 0;
      this.startedAt = null;
      this.answersByQuestion = {};
      this.completedResult = null;
      clearAllStorage();
    },
    getAnswerCode(questionCode: string) {
      return this.answersByQuestion[questionCode] ?? null;
    },
  },
});
