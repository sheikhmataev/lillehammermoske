'use client';

import Link from 'next/link';
import { Check, X } from 'lucide-react';
import type { AnswerEntry, Quiz } from '@/lib/quizzes/types';

interface QuizReviewProps {
  quiz: Quiz;
  name: string;
  score: number;
  answers: AnswerEntry[];
  submitError?: string | null;
}

export function QuizReview({ quiz, name, score, answers, submitError }: QuizReviewProps) {
  const total = quiz.totalQuestions;
  const pct = Math.round((score / total) * 100);

  const ribbon =
    pct >= 90
      ? { label: 'Fantastisk!', color: 'bg-emerald-700' }
      : pct >= 70
        ? { label: 'Veldig bra!', color: 'bg-emerald-600' }
        : pct >= 50
          ? { label: 'Bra jobbet!', color: 'bg-gold-500' }
          : { label: 'Fortsett å øve', color: 'bg-charcoal' };

  const answersByNumber = new Map(answers.map((a) => [a.questionNumber, a]));

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span
            className={`inline-flex rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-wide text-white ${ribbon.color}`}
          >
            {ribbon.label}
          </span>
          <h1 className="mt-4 text-2xl font-bold text-emerald-900 sm:text-3xl">
            Bra jobbet, {name}!
          </h1>
          <p className="mt-2 text-gray-700">
            Du fikk{' '}
            <span className="font-bold text-emerald-900">
              {score} av {total}
            </span>{' '}
            riktige svar.
          </p>
          <div className="mt-6 w-full max-w-md">
            <div className="h-3 w-full overflow-hidden rounded-full bg-emerald-50">
              <div
                className="h-full rounded-full bg-emerald-700 transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-2 text-sm font-medium text-emerald-900">{pct}%</p>
          </div>
        </div>

        {submitError && (
          <p className="mt-6 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800" role="alert">
            Svarene dine ble vist, men kunne ikke lagres ({submitError}). Vis denne siden til
            læreren din.
          </p>
        )}
      </div>

      <h2 className="mt-10 text-xl font-bold text-emerald-900">Gjennomgang av svarene dine</h2>

      <div className="mt-4 space-y-8">
        {quiz.sections.map((section) => (
          <section key={section.title}>
            <h3 className="text-base font-semibold uppercase tracking-wide text-gold-600">
              {section.title}
            </h3>
            <ol className="mt-3 space-y-3">
              {section.questions.map((q) => {
                const entry = answersByNumber.get(q.number);
                if (!entry) return null;
                return (
                  <li
                    key={q.number}
                    className={`rounded-xl border p-4 ${
                      entry.isCorrect
                        ? 'border-emerald-200 bg-emerald-50/50'
                        : 'border-red-200 bg-red-50/40'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${
                          entry.isCorrect ? 'bg-emerald-700' : 'bg-red-600'
                        }`}
                        aria-hidden="true"
                      >
                        {entry.isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <span className="font-bold">{q.number}.</span> {q.text}
                        </p>
                        <div className="mt-2 space-y-1 text-sm">
                          <p className={entry.isCorrect ? 'text-emerald-900' : 'text-red-700'}>
                            <span className="font-semibold">Ditt svar:</span>{' '}
                            {entry.selectedLetter
                              ? `${entry.selectedLetter}) ${entry.selectedText}`
                              : 'Ikke besvart'}
                          </p>
                          {!entry.isCorrect && (
                            <p className="text-emerald-900">
                              <span className="font-semibold">Riktig svar:</span>{' '}
                              {entry.correctLetter}) {entry.correctText}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/quiz"
          className="rounded-lg bg-emerald-900 px-6 py-3 font-medium text-white hover:bg-emerald-800"
        >
          Tilbake til quizene
        </Link>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg border-2 border-emerald-900 px-6 py-3 font-medium text-emerald-900 hover:bg-emerald-900 hover:text-white"
        >
          Ta quizen på nytt
        </button>
      </div>
    </div>
  );
}
