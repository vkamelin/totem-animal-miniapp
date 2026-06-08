import { traitKeys, type SelectedAnswerSnapshot, type TraitVector } from './types';

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function createTraitVector(value = 0): TraitVector {
  return traitKeys.reduce((acc, trait) => {
    acc[trait] = value;
    return acc;
  }, {} as TraitVector);
}

export function calculateUserTraits(selectedAnswers: SelectedAnswerSnapshot[]): TraitVector {
  const userTraits = createTraitVector(50);
  const traitDeltas = createTraitVector(0);
  const traitCounts = createTraitVector(0);

  for (const answer of selectedAnswers) {
    for (const [trait, delta] of Object.entries(answer.weights) as [keyof TraitVector, number][]) {
      traitDeltas[trait] += delta;
      traitCounts[trait] += 1;
    }
  }

  for (const trait of traitKeys) {
    if (traitCounts[trait] > 0) {
      const averageDelta = traitDeltas[trait] / traitCounts[trait];
      userTraits[trait] = userTraits[trait] + averageDelta * 3.2;
    }

    userTraits[trait] = Math.round(clamp(userTraits[trait], 0, 100));
  }

  return userTraits;
}
