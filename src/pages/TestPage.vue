<template>
  <AppLayout>
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_320px] lg:items-start">
      <div class="space-y-5">
        <ProgressBar
          :current="quizProgress"
          :total="quiz.totalQuestions"
          :label="`Вопрос ${quizProgress} из ${quiz.totalQuestions}`"
        />

        <QuestionCard
          v-if="currentQuestion"
          :question="currentQuestion"
          :selected-answer-code="selectedAnswerCode"
          :progress-label="progressLabel"
          @select="handleSelect"
        />

        <div class="flex flex-wrap items-center gap-3">
          <button class="app-button-secondary" type="button" @click="goBack" :disabled="quiz.isFirstQuestion">
            Назад
          </button>
          <button class="app-button-ghost" type="button" @click="restart">
            Начать заново
          </button>
          <span class="text-sm text-app-muted">
            Можно менять ответ на предыдущем вопросе, если хочется точнее.
          </span>
        </div>
      </div>

      <aside class="space-y-4 lg:sticky lg:top-6">
        <section class="app-panel p-5">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-app-secondary">Подсказка</p>
          <p class="mt-3 text-sm leading-6 text-app-text">
            Отвечай по первому естественному импульсу. Здесь нет правильных и неправильных
            вариантов, есть только твой рабочий стиль.
          </p>
        </section>

        <section class="app-panel p-5">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-app-secondary">Статус</p>
          <div class="mt-4 space-y-3">
            <div class="rounded-2xl border border-app-border bg-white/75 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.18em] text-app-muted">Отвечено</p>
              <p class="mt-1 text-lg font-semibold">{{ quiz.answeredCount }}/{{ quiz.totalQuestions }}</p>
            </div>
            <div class="rounded-2xl border border-app-border bg-white/75 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.18em] text-app-muted">Текущий индекс</p>
              <p class="mt-1 text-lg font-semibold">{{ quiz.currentIndex + 1 }}</p>
            </div>
            <div class="rounded-2xl border border-app-border bg-white/75 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.18em] text-app-muted">Сохранение</p>
              <p class="mt-1 text-sm leading-6 text-app-text">
                После каждого ответа сессия обновляется автоматически.
              </p>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import AppLayout from '@/components/AppLayout.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import QuestionCard from '@/components/QuestionCard.vue';
import { useTestStore } from '@/stores/testStore';
import { hasStoredResult } from '@/storage/resultStorage';

const router = useRouter();
const quiz = useTestStore();

onMounted(() => {
  quiz.hydrate();

  if (hasStoredResult()) {
    router.replace({ name: 'result' });
    return;
  }

  if (!quiz.startedAt) {
    quiz.startFresh();
  }
});

const currentQuestion = computed(() => quiz.currentQuestion);
const selectedAnswerCode = computed(() => quiz.selectedAnswerForCurrent);
const quizProgress = computed(() => Math.min(quiz.currentIndex + 1, quiz.totalQuestions));
const progressLabel = computed(() => `Шаг ${quizProgress.value} из ${quiz.totalQuestions}`);

function handleSelect(answerCode: string) {
  quiz.chooseAnswer(answerCode);

  if (quiz.completedResult) {
    router.replace({ name: 'result' });
  }
}

function goBack() {
  quiz.goBack();
}

function restart() {
  quiz.reset();
  quiz.startFresh();
}

watch(
  () => quiz.completedResult,
  (result) => {
    if (result) {
      router.replace({ name: 'result' });
    }
  },
);
</script>
