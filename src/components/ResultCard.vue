<template>
  <section class="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
    <div class="app-card p-5 sm:p-6">
      <div class="grid gap-5 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
        <AnimalPortrait
          :animal-code="animal.code"
          :animal-name="animal.name"
          :animal-title="animal.title"
        />

        <div class="flex flex-col justify-between gap-5">
          <div class="space-y-3">
            <div class="flex flex-wrap items-center gap-3">
              <span class="rounded-full bg-app-accentSoft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-app-text">
                Совпадение {{ animal.similarity }}%
              </span>
              <span class="rounded-full border border-app-border bg-white/80 px-3 py-1 text-xs font-medium text-app-muted">
                Дата: {{ formattedDate }}
              </span>
            </div>

            <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ animal.name }}
            </h1>

            <p class="max-w-2xl text-base leading-7 text-app-muted">
              {{ animal.title }}
            </p>

            <p class="max-w-2xl text-sm leading-7 text-app-text/90">
              {{ animal.description }}
            </p>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-3xl border border-app-border bg-white/70 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-app-secondary">Результат</p>
              <p class="mt-2 text-lg font-semibold">{{ animal.name }} как архетип поведения</p>
            </div>
            <div class="rounded-3xl border border-app-border bg-white/70 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-app-secondary">Вопросов</p>
              <p class="mt-2 text-lg font-semibold">{{ totalQuestions }} ответов</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <aside class="app-card p-5 sm:p-6">
      <div class="mb-5 flex items-center justify-between gap-3">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-app-secondary">Профиль</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight">7 шкал</h2>
        </div>
        <span class="rounded-full border border-app-border bg-white/75 px-3 py-1 text-xs font-medium text-app-muted">
          0-100
        </span>
      </div>

      <div class="space-y-4">
        <div v-for="item in traitRows" :key="item.key" class="space-y-2">
          <div class="flex items-center justify-between gap-3 text-sm">
            <span class="font-medium text-app-text">{{ item.label }}</span>
            <span class="font-semibold text-app-secondary">{{ item.value }}</span>
          </div>
          <div class="h-3 overflow-hidden rounded-full bg-app-surfaceMuted/70">
            <div class="h-full rounded-full bg-app-secondary transition-all" :style="{ width: `${item.value}%` }" />
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AnimalPortrait from './AnimalPortrait.vue';
import type { AnimalMatchResult, TraitVector } from '@/domain/totem/types';

const props = defineProps<{
  animal: AnimalMatchResult;
  profile: TraitVector;
  completedAt: string;
  totalQuestions: number;
}>();

const traitLabels: Record<keyof TraitVector, string> = {
  extraversion: 'Экстраверсия',
  openness: 'Открытость',
  self_control: 'Самоконтроль',
  agreeableness: 'Доброжелательность',
  emotional_stability: 'Устойчивость',
  dominance: 'Доминантность',
  adaptability: 'Адаптивность',
};

const traitRows = computed(() =>
  (Object.keys(props.profile) as (keyof TraitVector)[]).map((key) => ({
    key,
    label: traitLabels[key],
    value: props.profile[key],
  })),
);

const formattedDate = computed(() =>
  new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(props.completedAt)),
);
</script>
