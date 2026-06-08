<template>
  <AppLayout>
    <div class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-app-secondary">Результат</p>
          <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Твой тотем найден</h1>
        </div>

        <div class="flex flex-wrap gap-3">
          <button class="app-button-secondary" type="button" @click="restart">
            Пройти заново
          </button>
          <button class="app-button-ghost" type="button" @click="goToStart">
            На старт
          </button>
        </div>
      </div>

      <ResultCard
        v-if="result"
        :animal="result.animal"
        :profile="result.profile"
        :completed-at="result.completedAt"
        :total-questions="result.totalQuestions"
      />
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppLayout from '@/components/AppLayout.vue';
import ResultCard from '@/components/ResultCard.vue';
import { useTestStore } from '@/stores/testStore';
import { loadResult } from '@/storage/resultStorage';

const router = useRouter();
const quiz = useTestStore();

onMounted(() => {
  quiz.hydrate();
});

const result = computed(() => quiz.completedResult ?? loadResult());

function restart() {
  quiz.reset();
  router.push({ name: 'start' });
}

function goToStart() {
  router.push({ name: 'start' });
}
</script>
