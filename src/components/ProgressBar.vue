<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between gap-3 text-sm text-app-muted">
      <span>{{ label }}</span>
      <span>{{ percent }}%</span>
    </div>
    <div
      class="h-3 overflow-hidden rounded-full bg-app-surfaceMuted/70"
      role="progressbar"
      :aria-valuenow="current"
      :aria-valuemin="0"
      :aria-valuemax="total"
    >
      <div
        class="h-full rounded-full bg-app-secondary transition-all duration-300"
        :style="{ width: `${percent}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  current: number;
  total: number;
  label?: string;
}>();

const percent = computed(() =>
  Math.max(0, Math.min(100, Math.round((props.current / Math.max(1, props.total)) * 100))),
);

const label = computed(() => props.label ?? 'Прогресс');
</script>
