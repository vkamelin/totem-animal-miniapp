<template>
  <div class="relative min-h-screen overflow-hidden bg-app-radial">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-app-primary/10 blur-3xl"
      />
      <div
        class="absolute right-[-5rem] top-6 h-80 w-80 rounded-full bg-app-secondary/12 blur-3xl"
      />
      <div
        class="absolute bottom-[-7rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-app-accent/12 blur-3xl"
      />
    </div>

    <div class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
      <main class="flex-1 py-6 sm:py-8">
        <slot />
      </main>
    </div>
  </div>
</template>
