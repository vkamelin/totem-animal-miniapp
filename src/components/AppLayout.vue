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
      <header
        class="app-panel flex items-center justify-between gap-4 px-4 py-3 sm:px-5"
      >
        <div class="flex items-center gap-3">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-app-primary text-lg font-bold text-app-inverse shadow-[0_10px_22px_rgba(217,107,50,0.25)]"
          >
            ✦
          </div>
          <div>
            <p class="text-sm font-semibold tracking-tight sm:text-base">Тотемное животное</p>
            <p class="text-xs leading-5 text-app-muted sm:text-sm">
              Развлекательный тест с сохранением результата на устройстве
            </p>
          </div>
        </div>

        <div class="hidden items-center gap-2 text-xs font-medium text-app-muted sm:flex">
          <span class="rounded-full border border-app-border bg-white/70 px-3 py-1">28 вопросов</span>
          <span class="rounded-full border border-app-border bg-white/70 px-3 py-1">7 шкал</span>
        </div>
      </header>

      <main class="flex-1 py-6 sm:py-8">
        <slot />
      </main>
    </div>
  </div>
</template>
