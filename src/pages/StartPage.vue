<template>
  <AppLayout>
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
      <section class="app-card overflow-hidden p-6 sm:p-8">
        <div class="max-w-2xl space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-app-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-app-secondary">
            Развлекательный тест
          </div>

          <div class="space-y-4">
            <h1 class="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Найди своё тотемное животное
            </h1>
            <p class="max-w-xl text-base leading-7 text-app-muted sm:text-lg">
              Ответь на 28 вопросов о привычках, реакции на хаос и стиле общения. В конце миниапп
              соберёт твой игровой профиль и сохранит результат на этом устройстве.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <button class="app-button-primary" type="button" @click="goToTest">
              {{ primaryActionLabel }}
            </button>
            <button class="app-button-secondary" type="button" @click="goToResult" v-if="hasResult">
              Посмотреть результат
            </button>
            <button class="app-button-ghost" type="button" @click="resetSession" v-if="hasSession">
              Сбросить сессию
            </button>
          </div>

          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-3xl border border-app-border bg-white/70 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-app-secondary">Формат</p>
              <p class="mt-2 text-sm leading-6 text-app-text">
                Один вопрос за раз, без лишней спешки.
              </p>
            </div>
            <div class="rounded-3xl border border-app-border bg-white/70 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-app-secondary">Результат</p>
              <p class="mt-2 text-sm leading-6 text-app-text">
                Подбор ближайшего архетипа по 7 шкалам.
              </p>
            </div>
            <div class="rounded-3xl border border-app-border bg-white/70 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-app-secondary">Сохранение</p>
              <p class="mt-2 text-sm leading-6 text-app-text">
                Ответы и результат лежат только в localStorage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <aside class="space-y-4">
        <section class="app-panel p-5 sm:p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-app-secondary">Что внутри</p>
          <ul class="mt-4 space-y-3 text-sm leading-6 text-app-text">
            <li class="flex gap-3">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-app-primary" />
              28 вопросов, собранных из документации проекта.
            </li>
            <li class="flex gap-3">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-app-secondary" />
              40 животных с весами по 7 шкалам.
            </li>
            <li class="flex gap-3">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-app-accent" />
              Подсчёт результата прямо в браузере без backend.
            </li>
          </ul>
        </section>

        <section class="app-panel p-5 sm:p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-app-secondary">Статус</p>
          <div class="mt-4 space-y-3">
            <div class="flex items-center justify-between gap-3 rounded-2xl border border-app-border bg-white/75 px-4 py-3 text-sm">
              <span class="text-app-muted">Пройдено ответов</span>
              <span class="font-semibold text-app-text">{{ answeredCount }}/{{ totalQuestions }}</span>
            </div>
            <div class="flex items-center justify-between gap-3 rounded-2xl border border-app-border bg-white/75 px-4 py-3 text-sm">
              <span class="text-app-muted">Сохранённая сессия</span>
              <span class="font-semibold" :class="hasSession ? 'text-app-success' : 'text-app-muted'">
                {{ hasSession ? 'есть' : 'нет' }}
              </span>
            </div>
            <div class="flex items-center justify-between gap-3 rounded-2xl border border-app-border bg-white/75 px-4 py-3 text-sm">
              <span class="text-app-muted">Результат</span>
              <span class="font-semibold" :class="hasResult ? 'text-app-success' : 'text-app-muted'">
                {{ hasResult ? 'сохранён' : 'не готов' }}
              </span>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppLayout from '@/components/AppLayout.vue';
import { useTestStore } from '@/stores/testStore';
import { hasStoredResult, clearAllStorage } from '@/storage/resultStorage';

const router = useRouter();
const testStore = useTestStore();

onMounted(() => {
  testStore.hydrate();
});

const hasResult = computed(() => Boolean(testStore.completedResult) || hasStoredResult());
const hasSession = computed(() => testStore.hasSession);
const answeredCount = computed(() => testStore.answeredCount);
const totalQuestions = computed(() => testStore.totalQuestions);

const primaryActionLabel = computed(() =>
  hasSession.value && !hasResult.value ? 'Продолжить тест' : 'Начать тест',
);

function goToTest() {
  if (!testStore.startedAt) {
    testStore.startFresh();
  }

  router.push({ name: 'test' });
}

function goToResult() {
  router.push({ name: 'result' });
}

function resetSession() {
  clearAllStorage();
  testStore.reset();
}
</script>
