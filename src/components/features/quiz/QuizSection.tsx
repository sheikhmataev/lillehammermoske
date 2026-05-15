'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import type { QuizSection as QuizSectionType } from '@/lib/quizzes/types';

interface QuizSectionProps {
  section: QuizSectionType;
  sectionIndex: number;
  totalSections: number;
  initialAnswers: Record<number, string>;
  isLast: boolean;
  onAdvance: (answers: Record<number, string>) => void;
  isSubmitting?: boolean;
}

export function QuizSection({
  section,
  sectionIndex,
  totalSections,
  initialAnswers,
  isLast,
  onAdvance,
  isSubmitting = false,
}: QuizSectionProps) {
  const [answers, setAnswers] = useState<Record<number, string>>(initialAnswers);
  const [error, setError] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAnswers(initialAnswers);
    setError(null);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [sectionIndex, initialAnswers]);

  const handleSelect = (questionNumber: number, letter: string) => {
    setAnswers((prev) => ({ ...prev, [questionNumber]: letter }));
    if (error) setError(null);
  };

  const handleNext = () => {
    const missing = section.questions.find((q) => !answers[q.number]);
    if (missing) {
      setError(`Spørsmål ${missing.number} er ikke besvart.`);
      const el = document.getElementById(`question-${missing.number}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    onAdvance(answers);
  };

  const answeredCount = section.questions.filter((q) => answers[q.number]).length;
  const progressPct = Math.round(((sectionIndex + 1) / totalSections) * 100);

  return (
    <div className="mx-auto max-w-3xl" ref={topRef}>
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-emerald-900">
            Del {sectionIndex + 1} av {totalSections}
          </span>
          <span className="text-gray-600">
            {answeredCount} / {section.questions.length} besvart
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-emerald-50">
          <div
            className="h-full rounded-full bg-emerald-700 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl">
        {section.title}
      </h2>

      <ol className="mt-8 space-y-6">
        {section.questions.map((q) => (
          <li
            key={q.number}
            id={`question-${q.number}`}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-emerald-900 px-2 text-sm font-bold text-white">
                {q.number}
              </span>
              <h3 className="text-base font-semibold leading-snug text-gray-900 sm:text-lg">
                {q.text}
              </h3>
            </div>
            <fieldset className="mt-4">
              <legend className="sr-only">Svaralternativer for spørsmål {q.number}</legend>
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const selected = answers[q.number] === opt.letter;
                  return (
                    <label
                      key={opt.letter}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors sm:p-4 ${
                        selected
                          ? 'border-emerald-700 bg-emerald-50'
                          : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.number}`}
                        value={opt.letter}
                        checked={selected}
                        onChange={() => handleSelect(q.number, opt.letter)}
                        className="mt-1 h-4 w-4 accent-emerald-700"
                      />
                      <span className="flex-1">
                        <span className="font-bold text-emerald-900">{opt.letter})</span>{' '}
                        <span className="text-gray-800">{opt.text}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      {error && (
        <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex justify-end">
        <Button
          type="button"
          size="lg"
          onClick={handleNext}
          disabled={isSubmitting}
        >
          {isLast
            ? isSubmitting
              ? 'Sender inn…'
              : 'Lever inn svarene'
            : 'Neste del'}
        </Button>
      </div>
    </div>
  );
}
