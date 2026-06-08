<template>
  <button
    type="button"
    class="group flex w-full items-start gap-3 rounded-3xl border px-4 py-4 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg"
    :class="isSelected ? selectedClasses : unselectedClasses"
    @click="emit('select')"
  >
    <span
      class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition"
      :class="isSelected ? selectedBadgeClasses : unselectedBadgeClasses"
    >
      {{ codeLabel }}
    </span>
    <span class="text-sm leading-6 sm:text-[15px]">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'select'): void;
}>();

const props = defineProps<{
  text: string;
  codeLabel: string;
  isSelected?: boolean;
}>();

const selectedClasses = 'border-app-primary bg-app-primarySoft/20 shadow-[0_12px_24px_rgba(217,107,50,0.12)]';
const unselectedClasses = 'border-app-border bg-white/70 hover:border-app-secondarySoft hover:bg-white';
const selectedBadgeClasses = 'bg-app-primary text-app-inverse';
const unselectedBadgeClasses = 'bg-app-surfaceMuted text-app-muted group-hover:bg-app-secondarySoft group-hover:text-app-text';

const { text, codeLabel, isSelected } = props;
</script>
