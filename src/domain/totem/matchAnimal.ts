import { animals } from '@/config/animals';
import type { AnimalMatchResult, TraitVector } from './types';

function clampSimilarity(distance: number): number {
  return Math.max(0, Math.min(100, Math.round(100 - distance / 2.7)));
}

export function matchAnimal(userTraits: TraitVector): AnimalMatchResult {
  let best: AnimalMatchResult | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const animal of animals) {
    if (!animal.isActive) {
      continue;
    }

    let distance = 0;

    for (const trait of Object.keys(userTraits) as (keyof TraitVector)[]) {
      const delta = userTraits[trait] - animal.traits[trait];
      distance += delta * delta;
    }

    distance = Math.sqrt(distance);

    if (distance < bestDistance) {
      bestDistance = distance;
      best = {
        code: animal.code,
        name: animal.name,
        title: animal.title,
        description: animal.description,
        imagePath: animal.imagePath,
        traits: animal.traits,
        distance,
        similarity: clampSimilarity(distance),
      };
    }
  }

  if (!best) {
    throw new Error('Cannot match animal for the provided trait vector.');
  }

  return best;
}
