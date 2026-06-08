import type { Coverage, Question, TraitKey } from './types';

export function analyzeQuestionsCoverage(questions: Question[]): Coverage {
  const coverage: Coverage = {};

  for (const question of questions) {
    for (const answer of question.answers) {
      for (const [trait, weight] of Object.entries(answer.weights) as [TraitKey, number][]) {
        if (!coverage[trait]) {
          coverage[trait] = {
            mentions: 0,
            positive: 0,
            negative: 0,
            sum: 0,
          };
        }

        coverage[trait]!.mentions += 1;
        coverage[trait]!.sum += weight;

        if (weight > 0) {
          coverage[trait]!.positive += 1;
        } else if (weight < 0) {
          coverage[trait]!.negative += 1;
        }
      }
    }
  }

  return coverage;
}
