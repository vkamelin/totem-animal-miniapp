# VK Mini App «Тотемное животное» — проектная спецификация

## 1. Назначение проекта

«Тотемное животное» — развлекательный VK Mini App на TypeScript и Vue 3, в котором пользователь проходит короткий тест, отвечает на вопросы о поведении, привычках и реакциях в разных ситуациях, после чего получает результат: тотемное животное, изображение и описание характера.

Проект не является психодиагностикой, клиническим опросником или научной классификацией личности. Это игровая типология, построенная на шкалах характера. Методологический ориентир — логика Big Five / Five-Factor Model: экстраверсия, открытость опыту, самоконтроль / добросовестность, доброжелательность и эмоциональная устойчивость. Дополнительно используются две продуктовые игровые шкалы: доминантность и адаптивность.

Цель MVP — сделать лёгкий, быстрый и понятный миниапп без backend и без базы данных. Если пользователь уже проходил тест, при новом входе приложение должно восстановить ранее рассчитанный результат из `localStorage`, а не заставлять проходить тест заново.

## 2. Ключевые продуктовые требования

Пользовательский сценарий:

1. Пользователь открывает VK Mini App.
2. Vue-приложение проверяет `localStorage`.
3. Если в `localStorage` есть флаг завершённого теста и сохранённый результат, пользователь сразу видит экран результата.
4. Если результата нет, пользователь видит стартовый экран теста.
5. Пользователь проходит тест.
6. После завершения теста приложение рассчитывает профиль пользователя на клиенте.
7. Приложение подбирает ближайшее тотемное животное из конфигурационного файла.
8. Приложение собирает snapshot результата.
9. Приложение сохраняет в `localStorage`:
   - флаг, что пользователь прошёл тест;
   - рассчитанный результат;
   - пользовательский профиль по шкалам;
   - выбранные ответы;
   - дату прохождения.
10. При последующих входах пользователь видит тот же сохранённый результат.

Важно: идентификатор пользователя больше не нужен. Не используются `public_id`, `client_id`, `vk_user_id`, backend-сессии, VK Storage и база данных.

## 3. Технологический стек

Рекомендуемый frontend-стек:

```text
TypeScript
Vue 3
Vite
Vue Router
Pinia
Tailwind CSS
@vitejs/plugin-vue
```

Backend для MVP не используется.

База данных не используется.

Все справочные данные, которые раньше предполагалось хранить в БД, должны находиться в TypeScript-конфигах внутри проекта:

```text
src/config/animals.ts
src/config/questions.ts
```

Все данные, характерные для конкретного пользователя, должны храниться только в `localStorage`.

## 4. Архитектура приложения

Рекомендуемая структура проекта:

```text
miniapp/
  index.html
  package.json
  tsconfig.json
  vite.config.ts
  tailwind.config.ts
  postcss.config.js

  public/
    images/
      animals/
        lion.webp
        wolf.webp
        fox.webp
        ...

  src/
    app/
      App.vue
      main.ts
      router.ts

    assets/
      styles/
        main.css

    config/
      animals.ts
      questions.ts

    domain/
      totem/
        types.ts
        calculateUserTraits.ts
        matchAnimal.ts
        buildResult.ts
        analyzeQuestionsCoverage.ts

    storage/
      localStorageKeys.ts
      resultStorage.ts

    stores/
      testStore.ts

    pages/
      StartPage.vue
      TestPage.vue
      ResultPage.vue

    components/
      AppLayout.vue
      QuestionCard.vue
      AnswerButton.vue
      ProgressBar.vue
      ResultCard.vue
```

Основная логика должна быть вынесена из компонентов в чистые TypeScript-функции.

Компоненты Vue отвечают за отображение, пользовательский ввод и переходы между экранами.

## 5. Основные экраны

### 5.1. Стартовый экран

Назначение:

- показать название теста;
- кратко объяснить, что это развлекательный тест;
- дать кнопку начала прохождения.

Логика:

- если результат уже есть в `localStorage`, приложение может сразу перенаправить пользователя на экран результата;
- если результата нет, показывается кнопка начала теста.

### 5.2. Экран теста

Назначение:

- показывать вопросы по одному;
- показывать варианты ответов;
- сохранять выбранные ответы в состоянии приложения;
- отображать прогресс прохождения.

Логика:

- вопросы берутся из `src/config/questions.ts`;
- для MVP можно показывать все 28 вопросов;
- после ответа на последний вопрос приложение рассчитывает результат и сохраняет его в `localStorage`.

### 5.3. Экран результата

Назначение:

- показать выбранное тотемное животное;
- показать изображение;
- показать заголовок результата;
- показать описание;
- при необходимости показать числовой профиль пользователя.

Логика:

- результат читается из `localStorage`;
- если результата нет, пользователь возвращается на стартовый экран.

## 6. Шкалы характера

Используются 7 шкал:

| Шкала | Смысл |
|---|---|
| `extraversion` | социальная энергия, контактность, тяга к людям |
| `openness` | любопытство, нестандартность, тяга к новому |
| `self_control` | дисциплина, порядок, планирование, устойчивость к хаосу |
| `agreeableness` | мягкость, эмпатия, готовность сотрудничать |
| `emotional_stability` | спокойствие, стрессоустойчивость, способность держать удар |
| `dominance` | напор, лидерство, контроль ситуации, готовность давить |
| `adaptability` | гибкость, хитрость, ситуативность, умение выкручиваться |

TypeScript-тип шкалы:

```ts
export type TraitKey =
  | 'extraversion'
  | 'openness'
  | 'self_control'
  | 'agreeableness'
  | 'emotional_stability'
  | 'dominance'
  | 'adaptability';

export type TraitVector = Record<TraitKey, number>;
```

## 7. Животные

Используется 40 животных. Каждое животное имеет:

```text
code
name
title
description
imagePath
traits
isActive
sortOrder
```

Список животных:

| code | Животное |
|---|---|
| `lion` | Лев |
| `wolf` | Волк |
| `fox` | Лиса |
| `bear` | Медведь |
| `eagle` | Орёл |
| `cat` | Кот |
| `dog` | Пёс |
| `owl` | Сова |
| `raven` | Ворон |
| `dolphin` | Дельфин |
| `raccoon` | Енот |
| `tiger` | Тигр |
| `panda` | Панда |
| `otter` | Выдра |
| `turtle` | Черепаха |
| `deer` | Олень |
| `bull` | Бык |
| `monkey` | Обезьяна |
| `snake` | Змея |
| `horse` | Лошадь |
| `hedgehog` | Ёж |
| `shark` | Акула |
| `chameleon` | Хамелеон |
| `capybara` | Капибара |
| `lemur` | Лемур |
| `lynx` | Рысь |
| `swan` | Лебедь |
| `ant` | Муравей |
| `spider` | Паук |
| `elephant` | Слон |
| `hyena` | Гиена |
| `parrot` | Попугай |
| `octopus` | Осьминог |
| `badger` | Барсук |
| `rabbit` | Кролик |
| `goat` | Коза |
| `beaver` | Бобр |
| `peacock` | Павлин |
| `frog` | Лягушка |
| `moose` | Лось |

Изображение животного хранится по соглашению:

```text
/images/animals/{code}.webp
```

Поле `description` — пользовательское описание результата. Оно должно отражать и архетип животного, и характер пользователя, который получил этот результат. Описание должно быть живым, понятным, немного ироничным, без мистического пафоса и без псевдонаучных заявлений.

TypeScript-структура животного:

```ts
import type { TraitVector } from '@/domain/totem/types';

export interface AnimalConfig {
  code: string;
  name: string;
  title: string;
  description: string;
  imagePath: string;
  traits: TraitVector;
  isActive: boolean;
  sortOrder: number;
}
```

Пример записи в `src/config/animals.ts`:

```ts
import type { AnimalConfig } from '@/domain/totem/types';

export const animals: AnimalConfig[] = [
  {
    code: 'lion',
    name: 'Лев',
    title: 'Твоё тотемное животное — Лев',
    description: '...',
    imagePath: '/images/animals/lion.webp',
    traits: {
      extraversion: 82,
      openness: 42,
      self_control: 66,
      agreeableness: 38,
      emotional_stability: 78,
      dominance: 96,
      adaptability: 38,
    },
    isActive: true,
    sortOrder: 10,
  },
];
```

## 8. Вопросы

В наборе используется 28 вопросов. Для MVP можно показывать все 28 вопросов, чтобы результат был более устойчивым. Позже можно показывать 20 вопросов из 28 с балансировкой покрытия шкал.

Каждый вопрос имеет:

```text
code
text
answers[]
```

Каждый ответ имеет:

```text
code
text
weights
```

Веса ответов находятся в диапазоне от `-14` до `14`.

| Диапазон | Смысл |
|---|---|
| `-14..-10` | сильное снижение признака |
| `-9..-5` | умеренное снижение признака |
| `-4..4` | слабое влияние |
| `5..9` | умеренное усиление признака |
| `10..14` | сильное усиление признака |

TypeScript-структура вопроса:

```ts
import type { TraitKey } from '@/domain/totem/types';

export interface AnswerConfig {
  code: string;
  text: string;
  weights: Partial<Record<TraitKey, number>>;
}

export interface QuestionConfig {
  code: string;
  text: string;
  answers: AnswerConfig[];
}
```

Пример записи в `src/config/questions.ts`:

```ts
import type { QuestionConfig } from '@/domain/totem/types';

export const questions: QuestionConfig[] = [
  {
    code: 'q01_unknown_company',
    text: 'Ты попадаешь в незнакомую компанию. Что делаешь?',
    answers: [
      {
        code: 'a',
        text: 'Быстро нахожу, с кем поговорить, и вливаюсь в движ',
        weights: {
          extraversion: 12,
          agreeableness: 6,
          adaptability: 5,
        },
      },
    ],
  },
];
```

## 9. Алгоритм расчёта профиля

Начальное значение каждой шкалы:

```ts
import type { TraitVector } from '@/domain/totem/types';

export const defaultTraits: TraitVector = {
  extraversion: 50,
  openness: 50,
  self_control: 50,
  agreeableness: 50,
  emotional_stability: 50,
  dominance: 50,
  adaptability: 50,
};
```

Рекомендуемый алгоритм — считать среднее смещение по каждой шкале, а не простую сумму всех весов. Это предотвращает слишком быстрый уход значений в 0 или 100.

```ts
import type { AnswerConfig, TraitKey, TraitVector } from '@/domain/totem/types';

const traitKeys: TraitKey[] = [
  'extraversion',
  'openness',
  'self_control',
  'agreeableness',
  'emotional_stability',
  'dominance',
  'adaptability',
];

const baseTraits: TraitVector = {
  extraversion: 50,
  openness: 50,
  self_control: 50,
  agreeableness: 50,
  emotional_stability: 50,
  dominance: 50,
  adaptability: 50,
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function calculateUserTraits(selectedAnswers: AnswerConfig[]): TraitVector {
  const traitDeltas: TraitVector = { ...baseTraits };
  const traitCounts: TraitVector = { ...baseTraits };

  for (const trait of traitKeys) {
    traitDeltas[trait] = 0;
    traitCounts[trait] = 0;
  }

  for (const answer of selectedAnswers) {
    for (const [trait, delta] of Object.entries(answer.weights)) {
      const traitKey = trait as TraitKey;

      traitDeltas[traitKey] += delta;
      traitCounts[traitKey] += 1;
    }
  }

  const userTraits: TraitVector = { ...baseTraits };

  for (const trait of traitKeys) {
    if (traitCounts[trait] > 0) {
      const averageDelta = traitDeltas[trait] / traitCounts[trait];

      userTraits[trait] = baseTraits[trait] + averageDelta * 3.2;
    }

    userTraits[trait] = clamp(Math.round(userTraits[trait]), 0, 100);
  }

  return userTraits;
}
```

Коэффициент `3.2` подобран для развлекательного теста: профиль заметно двигается, но не становится слишком экстремальным.

## 10. Алгоритм выбора животного

Профиль пользователя сравнивается с профилем каждого животного по 7 шкалам. Базовый алгоритм — евклидово расстояние:

```ts
import type { AnimalConfig, TraitKey, TraitVector } from '@/domain/totem/types';

const traitKeys: TraitKey[] = [
  'extraversion',
  'openness',
  'self_control',
  'agreeableness',
  'emotional_stability',
  'dominance',
  'adaptability',
];

export function calculateDistance(userTraits: TraitVector, animalTraits: TraitVector): number {
  let sum = 0;

  for (const trait of traitKeys) {
    const userValue = userTraits[trait];
    const animalValue = animalTraits[trait] ?? 50;

    sum += (userValue - animalValue) ** 2;
  }

  return Math.sqrt(sum);
}

export interface AnimalMatch {
  animal: AnimalConfig;
  distance: number;
}

export function matchAnimal(userTraits: TraitVector, animals: AnimalConfig[]): AnimalMatch {
  const activeAnimals = animals.filter((animal) => animal.isActive);

  if (activeAnimals.length === 0) {
    throw new Error('No active animals configured.');
  }

  let bestMatch: AnimalMatch | null = null;

  for (const animal of activeAnimals) {
    const distance = calculateDistance(userTraits, animal.traits);

    if (bestMatch === null || distance < bestMatch.distance) {
      bestMatch = {
        animal,
        distance,
      };
    }
  }

  return bestMatch;
}
```

Побеждает животное с минимальным расстоянием.

## 11. Хранение данных

База данных не используется.

Все справочные данные хранятся в файлах конфигов:

```text
src/config/animals.ts
src/config/questions.ts
```

Все пользовательские данные хранятся в `localStorage`.

### 11.1. Ключи localStorage

```ts
export const localStorageKeys = {
  testCompleted: 'totem_animal.test_completed',
  result: 'totem_animal.result',
} as const;
```

### 11.2. Что хранить в localStorage

В `localStorage` должно храниться:

```text
totem_animal.test_completed
totem_animal.result
```

`totem_animal.test_completed`:

```json
"true"
```

`totem_animal.result`:

```json
{
  "completedAt": "2026-06-08T00:00:00.000Z",
  "animal": {
    "code": "lion",
    "name": "Лев",
    "title": "Твоё тотемное животное — Лев",
    "description": "...",
    "imagePath": "/images/animals/lion.webp",
    "traits": {
      "extraversion": 82,
      "openness": 42,
      "self_control": 66,
      "agreeableness": 38,
      "emotional_stability": 78,
      "dominance": 96,
      "adaptability": 38
    }
  },
  "userTraits": {
    "extraversion": 80,
    "openness": 44,
    "self_control": 67,
    "agreeableness": 40,
    "emotional_stability": 76,
    "dominance": 91,
    "adaptability": 42
  },
  "distance": 12.3456,
  "answers": [
    {
      "questionCode": "q01_unknown_company",
      "answerCode": "a"
    }
  ]
}
```

### 11.3. TypeScript-структура результата

```ts
import type { TraitVector } from '@/domain/totem/types';

export interface SavedAnswer {
  questionCode: string;
  answerCode: string;
}

export interface ResultAnimalSnapshot {
  code: string;
  name: string;
  title: string;
  description: string;
  imagePath: string;
  traits: TraitVector;
}

export interface TotemResult {
  completedAt: string;
  animal: ResultAnimalSnapshot;
  userTraits: TraitVector;
  distance: number;
  answers: SavedAnswer[];
}
```

### 11.4. Сервис хранения результата

```ts
import type { TotemResult } from '@/domain/totem/types';
import { localStorageKeys } from '@/storage/localStorageKeys';

export function hasCompletedTest(): boolean {
  return localStorage.getItem(localStorageKeys.testCompleted) === 'true';
}

export function getSavedResult(): TotemResult | null {
  const rawResult = localStorage.getItem(localStorageKeys.result);

  if (rawResult === null) {
    return null;
  }

  try {
    return JSON.parse(rawResult) as TotemResult;
  } catch {
    return null;
  }
}

export function saveResult(result: TotemResult): void {
  localStorage.setItem(localStorageKeys.testCompleted, 'true');
  localStorage.setItem(localStorageKeys.result, JSON.stringify(result));
}

export function clearResult(): void {
  localStorage.removeItem(localStorageKeys.testCompleted);
  localStorage.removeItem(localStorageKeys.result);
}
```

## 12. Сборка результата

`buildResult` собирает неизменяемый snapshot результата на момент прохождения теста.

```ts
import type {
  AnimalMatch,
  ResultAnimalSnapshot,
  SavedAnswer,
  TotemResult,
  TraitVector,
} from '@/domain/totem/types';

export function buildResult(
  match: AnimalMatch,
  userTraits: TraitVector,
  answers: SavedAnswer[],
): TotemResult {
  const animalSnapshot: ResultAnimalSnapshot = {
    code: match.animal.code,
    name: match.animal.name,
    title: match.animal.title,
    description: match.animal.description,
    imagePath: match.animal.imagePath,
    traits: { ...match.animal.traits },
  };

  return {
    completedAt: new Date().toISOString(),
    animal: animalSnapshot,
    userTraits,
    distance: Number(match.distance.toFixed(4)),
    answers,
  };
}
```

Результат должен сохраняться как snapshot, чтобы при изменении конфигов животных старый результат пользователя не менялся сам по себе.

## 13. Состояние теста

Для состояния теста можно использовать Pinia.

```ts
import { defineStore } from 'pinia';
import { questions } from '@/config/questions';
import { animals } from '@/config/animals';
import type { AnswerConfig, SavedAnswer, TotemResult } from '@/domain/totem/types';
import { calculateUserTraits } from '@/domain/totem/calculateUserTraits';
import { matchAnimal } from '@/domain/totem/matchAnimal';
import { buildResult } from '@/domain/totem/buildResult';
import { saveResult } from '@/storage/resultStorage';

export const useTestStore = defineStore('test', {
  state: () => ({
    currentQuestionIndex: 0,
    selectedAnswers: [] as AnswerConfig[],
    savedAnswers: [] as SavedAnswer[],
    result: null as TotemResult | null,
  }),

  getters: {
    currentQuestion(state) {
      return questions[state.currentQuestionIndex] ?? null;
    },

    progress(state) {
      return {
        current: state.currentQuestionIndex + 1,
        total: questions.length,
      };
    },
  },

  actions: {
    answerCurrentQuestion(answer: AnswerConfig): void {
      const question = questions[this.currentQuestionIndex];

      if (!question) {
        return;
      }

      this.selectedAnswers.push(answer);

      this.savedAnswers.push({
        questionCode: question.code,
        answerCode: answer.code,
      });

      if (this.currentQuestionIndex < questions.length - 1) {
        this.currentQuestionIndex += 1;
        return;
      }

      this.finishTest();
    },

    finishTest(): void {
      const userTraits = calculateUserTraits(this.selectedAnswers);
      const match = matchAnimal(userTraits, animals);
      const result = buildResult(match, userTraits, this.savedAnswers);

      this.result = result;

      saveResult(result);
    },

    resetTestState(): void {
      this.currentQuestionIndex = 0;
      this.selectedAnswers = [];
      this.savedAnswers = [];
      this.result = null;
    },
  },
});
```

## 14. Маршруты

Минимальный набор маршрутов Vue Router:

```text
/         стартовый экран
/test     прохождение теста
/result   результат
```

Пример логики guard:

```ts
import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '@/pages/StartPage.vue';
import TestPage from '@/pages/TestPage.vue';
import ResultPage from '@/pages/ResultPage.vue';
import { getSavedResult, hasCompletedTest } from '@/storage/resultStorage';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: StartPage,
    },
    {
      path: '/test',
      component: TestPage,
    },
    {
      path: '/result',
      component: ResultPage,
    },
  ],
});

router.beforeEach((to) => {
  const hasResult = hasCompletedTest() && getSavedResult() !== null;

  if (to.path === '/' && hasResult) {
    return '/result';
  }

  if (to.path === '/result' && !hasResult) {
    return '/';
  }

  return true;
});
```

## 15. API

API для MVP не используется.

Следующие endpoint'ы больше не нужны:

```http
GET /api/health
GET /api/me
POST /api/test/start
POST /api/test/finish
GET /api/result/{public_id}
```

Причина:

- нет backend;
- нет БД;
- нет анонимного идентификатора пользователя;
- вопросы и животные лежат в TypeScript-конфигах;
- расчёт выполняется на клиенте;
- результат хранится в `localStorage`.

## 16. Восстановление результата

Главное правило:

```text
Результат пользователя восстанавливается из localStorage.
```

При старте приложения:

1. Проверить `totem_animal.test_completed`.
2. Проверить `totem_animal.result`.
3. Если оба значения валидны — показать экран результата.
4. Если результата нет или JSON повреждён — считать, что пользователь ещё не проходил тест.

Результат не должен зависеть от текущих данных `src/config/animals.ts`, потому что описания, изображения или числовые профили животных могут быть изменены после прохождения пользователем теста.

## 17. Проверка покрытия шкал

Перед публикацией набора вопросов нужно проверить, что выбранные вопросы не перекосили шкалы.

```ts
import type { QuestionConfig, TraitKey } from '@/domain/totem/types';

export interface TraitCoverage {
  mentions: number;
  positive: number;
  negative: number;
  sum: number;
}

export type QuestionsCoverage = Partial<Record<TraitKey, TraitCoverage>>;

export function analyzeQuestionsCoverage(questions: QuestionConfig[]): QuestionsCoverage {
  const coverage: QuestionsCoverage = {};

  for (const question of questions) {
    for (const answer of question.answers) {
      for (const [trait, weight] of Object.entries(answer.weights)) {
        const traitKey = trait as TraitKey;

        if (!coverage[traitKey]) {
          coverage[traitKey] = {
            mentions: 0,
            positive: 0,
            negative: 0,
            sum: 0,
          };
        }

        coverage[traitKey].mentions += 1;
        coverage[traitKey].sum += weight;

        if (weight > 0) {
          coverage[traitKey].positive += 1;
        } else if (weight < 0) {
          coverage[traitKey].negative += 1;
        }
      }
    }
  }

  return coverage;
}
```

Для этого набора целевой смысл такой:

```text
extraversion           много прямых социальных вопросов + отдельная проверка центра внимания
openness               вопросы про новые идеи, риск, свободу, нестандартные решения
self_control           вопросы про порядок, планы, решения, ответственность
agreeableness          усилен отдельными вопросами про заботу, доверие, поддержку, команду
emotional_stability    усилен отдельными вопросами про давление, внимание, одиночество, стресс
dominance              вопросы про лидерство, конфликт, статус, управление ситуацией
adaptability           вопросы про хаос, обходные пути, изменение планов, импровизацию
```

## 18. Приватность

Приложение не хранит персональные данные пользователя.

Не хранить:

```text
vk_user_id
first_name
last_name
screen_name
photo_url
raw VK profile payload
raw IP
raw User-Agent
public_id
client_id
```

Допускается хранить только локальный результат теста в браузере пользователя:

```text
totem_animal.test_completed
totem_animal.result
```

Если пользователь очистит `localStorage`, результат будет потерян, и тест можно будет пройти заново.

## 19. Ограничения MVP

Так как backend и база данных не используются:

- результат доступен только в том браузере и окружении, где был сохранён `localStorage`;
- результат не синхронизируется между устройствами;
- невозможно восстановить результат после очистки данных браузера;
- невозможно собирать серверную аналитику прохождений;
- невозможно защитить результат от ручного изменения пользователем в DevTools.

Для текущей версии это допустимо, потому что проект является развлекательным миниаппом без пользовательской авторизации и без серверного хранения данных.
