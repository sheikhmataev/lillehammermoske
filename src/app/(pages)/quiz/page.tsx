import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getAllQuizzes } from '@/lib/quizzes';

export const metadata: Metadata = {
  title: 'Quiz – Lillehammer Moske',
  description:
    'Quizer for elever ved Lillehammer Moske – test kunnskapen om Quran, tajweed, profetenes historier og Islams søyler.',
  alternates: { canonical: 'https://lillehammermoske.no/quiz/' },
  robots: { index: false, follow: true },
};

export default function QuizIndexPage() {
  const quizzes = getAllQuizzes();

  return (
    <div className="min-h-screen bg-cream/40">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 px-4 py-16 text-white sm:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              <BookOpen className="h-4 w-4" />
              <span>Lillehammer Moske – Quranskole</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Quiz
            </h1>
            <p className="mt-4 text-lg text-emerald-100">
              Velg en quiz for å teste hva du har lært. Skriv inn navn og alder, så får du
              en fasit på slutten.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16">
        <div className="container-custom">
          {quizzes.length === 0 ? (
            <p className="mx-auto max-w-xl text-center text-gray-600">
              Ingen quizer er publisert ennå. Kom tilbake senere!
            </p>
          ) : (
            <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {quizzes.map((quiz) => (
                <li key={quiz.slug}>
                  <Link
                    href={`/quiz/${quiz.slug}`}
                    className="group block h-full rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                  >
                    <div className="flex h-full flex-col">
                      <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900">
                        {quiz.totalQuestions} spørsmål
                      </span>
                      <h2 className="mt-3 text-lg font-bold text-emerald-900 sm:text-xl">
                        {quiz.title}
                      </h2>
                      {quiz.intro && (
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{quiz.intro}</p>
                      )}
                      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-emerald-700 group-hover:text-emerald-900">
                        Start quiz
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
