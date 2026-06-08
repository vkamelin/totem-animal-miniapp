<template>
  <section class="app-card p-5 sm:p-6">
    <div class="mb-5 flex flex-wrap items-start justify-between gap-4">
      <div class="space-y-2">
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-app-secondary">Вопрос</p>
        <h1 class="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-app-text sm:text-2xl">
          {{ question.question }}
        </h1>
      </div>

      <div class="rounded-full border border-app-border bg-white/75 px-4 py-2 text-sm font-medium text-app-muted">
        {{ progressLabel }}
      </div>
    </div>

    <div class="grid gap-3 sm:grid-cols-2">
      <AnswerButton
        v-for="answer in question.answers"
        :key="`${question.code}-${answer.code}`"
        :text="answer.text"
        :code-label="answer.code.toUpperCase()"
        :is-selected="selectedAnswerCode === answer.code"
        @select="emit('select', answer.code)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import AnswerButton from './AnswerButton.vue';
import type { Question } from '@/domain/totem/types';

const emit = defineEmits<{
  (event: 'select', answerCode: string): void;
}>();

defineProps<{
  question: Question;
  selectedAnswerCode: string | null;
  progressLabel: string;
}>();
</script>
