<template>
  <div
    class="relative isolate flex aspect-square w-full items-end overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br shadow-[0_16px_40px_rgba(70,47,28,0.14)]"
    :style="styleVars"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_52%)]" />
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(43,36,28,0.12))]" />
    <div class="absolute left-4 top-4 h-16 w-16 rounded-full bg-white/20 blur-xl" />
    <div class="absolute right-6 top-8 h-24 w-24 rounded-full bg-white/12 blur-2xl" />
    <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_64%)]" />

    <div class="relative flex w-full flex-col gap-4 p-5 text-app-inverse">
      <div class="flex items-center justify-between">
        <span class="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
          Тотем
        </span>
        <span class="text-sm font-semibold text-white/80">{{ animalCode }}</span>
      </div>

      <div class="mt-auto flex items-end justify-between gap-4">
        <div>
          <p class="text-5xl font-black leading-none tracking-tight sm:text-6xl">
            {{ animalInitial }}
          </p>
          <p class="mt-2 text-sm font-medium text-white/85">{{ animalName }}</p>
        </div>

        <div class="h-24 w-24 rounded-[28px] border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
          <div class="grid h-full w-full place-items-center rounded-[22px] bg-white/10 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            <span class="leading-4">{{ animalTitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  animalCode: string;
  animalName: string;
  animalTitle: string;
}>();

const palette = [
  ['#D96B32', '#F2B279'],
  ['#2F6F5E', '#BFD8C8'],
  ['#8A5E3B', '#F0C59A'],
  ['#B94A3A', '#F6B58A'],
  ['#9A7838', '#F2D06C'],
  ['#5D6D7A', '#A6C8D6'],
] as const;

const styleVars = computed(() => {
  const index = Array.from(props.animalCode).reduce((sum, char) => sum + char.charCodeAt(0), 0) % palette.length;
  const [from, to] = palette[index];
  return {
    backgroundImage: `linear-gradient(145deg, ${from}, ${to})`,
  };
});

const animalInitial = computed(() => props.animalName.slice(0, 1));
</script>
