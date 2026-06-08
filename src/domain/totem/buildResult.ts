import { animals } from '@/config/animals';
import { questions } from '@/config/questions';
import { calculateUserTraits } from './calculateUserTraits';
import { matchAnimal } from './matchAnimal';
import type {
  SelectedAnswer,
  SelectedAnswerSnapshot,
  StoredResult,
} from './types';

function resolveAnswers(choices: SelectedAnswer[]): SelectedAnswerSnapshot[] {
  const questionMap = new Map(questions.map((question) => [question.code, question]));

  return choices.flatMap((choice) => {
    const question = questionMap.get(choice.questionCode);

    if (!question) {
      return [];
    }

    const answer = question.answers.find((item) => item.code === choice.answerCode);

    if (!answer) {
      return [];
    }

    return [
      {
        questionCode: choice.questionCode,
        answerCode: choice.answerCode,
        questionText: question.question,
        answerText: answer.text,
        weights: answer.weights,
      },
    ];
  });
}

export function buildResult(selectedAnswers: SelectedAnswer[]): StoredResult {
  const resolvedAnswers = resolveAnswers(selectedAnswers);
  const profile = calculateUserTraits(resolvedAnswers);
  const animal = matchAnimal(profile);

  return {
    completedAt: new Date().toISOString(),
    totalQuestions: questions.length,
    profile,
    animal: {
      ...animal,
      imagePath: animals.find((item) => item.code === animal.code)?.imagePath ?? animal.imagePath,
    },
    answers: resolvedAnswers,
  };
}
