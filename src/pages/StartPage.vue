<template>
  <AppLayout>
    <div class="">
      <section class="app-card overflow-hidden p-6 sm:p-8">
        <div class="max-w-2xl space-y-6">
          <div class="space-y-4">
            <h1 class="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Найди своё тотемное животное
            </h1>
            <p class="max-w-xl text-base leading-7 text-app-muted sm:text-lg">
              Ответь на вопросы и узнай какое у тебя тотемное животное.
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
        </div>
      </section>
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
