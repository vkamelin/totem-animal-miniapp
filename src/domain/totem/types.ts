export const traitKeys = [
  'extraversion',
  'openness',
  'self_control',
  'agreeableness',
  'emotional_stability',
  'dominance',
  'adaptability',
] as const;

export type TraitKey = (typeof traitKeys)[number];

export type TraitVector = Record<TraitKey, number>;

export type TraitWeights = Partial<TraitVector>;

export type Answer = {
  code: string;
  text: string;
  weights: TraitWeights;
};

export type Question = {
  code: string;
  question: string;
  answers: Answer[];
};

export type SelectedAnswer = {
  questionCode: string;
  answerCode: string;
};

export type SelectedAnswerSnapshot = SelectedAnswer & {
  questionText: string;
  answerText: string;
  weights: TraitWeights;
};

export type AnimalProfile = {
  code: string;
  name: string;
  title: string;
  description: string;
  imagePath: string;
  traits: TraitVector;
  isActive: boolean;
  sortOrder: number;
};

export type AnimalMatchResult = {
  code: string;
  name: string;
  title: string;
  description: string;
  imagePath: string;
  traits: TraitVector;
  distance: number;
  similarity: number;
};

export type StoredSession = {
  startedAt: string;
  updatedAt: string;
  currentIndex: number;
  answers: SelectedAnswer[];
};

export type StoredResult = {
  completedAt: string;
  totalQuestions: number;
  profile: TraitVector;
  animal: AnimalMatchResult;
  answers: SelectedAnswerSnapshot[];
};

export type CoverageItem = {
  mentions: number;
  positive: number;
  negative: number;
  sum: number;
};

export type Coverage = Partial<Record<TraitKey, CoverageItem>>;
