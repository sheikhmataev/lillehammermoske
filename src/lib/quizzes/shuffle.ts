import type { QuizSection } from './types';

/** Fisher–Yates shuffle on a copy of the input. */
function shuffled<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Randomises the question order inside each section and numbers the questions
 * 1..n in the order the pupil will see them. The underlying `number` stays
 * untouched, so scoring, the review and the submitted answer sheet keep
 * referring to the same question regardless of the order it was shown in.
 *
 * Sections keep their original order so the thematic headings still make sense.
 */
export function shuffleQuestions(sections: QuizSection[]): QuizSection[] {
  let displayNumber = 0;
  return sections.map((section) => ({
    ...section,
    questions: shuffled(section.questions).map((question) => ({
      ...question,
      displayNumber: ++displayNumber,
    })),
  }));
}
