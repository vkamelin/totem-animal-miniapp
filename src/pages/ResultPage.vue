<template>
  <div class="relative min-h-screen overflow-hidden bg-app-radial">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-app-primary/10 blur-3xl" />
      <div class="absolute right-[-5rem] top-6 h-80 w-80 rounded-full bg-app-secondary/12 blur-3xl" />
      <div class="absolute bottom-[-7rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-app-accent/12 blur-3xl" />
    </div>

    <main class="relative mx-auto flex min-h-screen w-full max-w-4xl items-center px-4 py-8 sm:px-6 lg:px-8">
      <article class="grid w-full gap-6 sm:gap-8">
        <AnimalPortrait
          :animal-code="result.animal.code"
          :animal-name="result.animal.name"
          :animal-title="result.animal.title"
          :image-path="result.animal.imagePath"
          minimal
          class="mx-auto max-w-[420px]"
        />

        <div class="mx-auto max-w-2xl space-y-4 text-center">
          <h1 class="text-3xl font-semibold tracking-tight text-app-text sm:text-5xl">
            Твое тотемное животное - {{ result.animal.name }}
          </h1>
          <p class="text-base leading-7 text-app-muted sm:text-lg">
            {{ result.animal.description }}
          </p>
        </div>

        <div class="flex justify-center pt-2">
          <button class="app-button-primary" type="button" @click="restart">
            Начать заново
          </button>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import AnimalPortrait from '@/components/AnimalPortrait.vue';
import { loadResult } from '@/storage/resultStorage';
import { useTestStore } from '@/stores/testStore';

const store = useTestStore();
const router = useRouter();
store.hydrate();

const result = computed(() => store.completedResult ?? loadResult());

if (!result.value) {
  throw new Error('Result page rendered without a stored result.');
}

function restart() {
  store.reset();
  store.startFresh();
  router.push({ name: 'test' });
}
</script>
