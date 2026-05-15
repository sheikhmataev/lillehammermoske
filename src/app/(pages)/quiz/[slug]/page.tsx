import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllQuizSlugs, getQuizBySlug } from '@/lib/quizzes';
import { QuizRunner } from '@/components/features/quiz/QuizRunner';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllQuizSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return {};
  return {
    title: `${quiz.title} – Quiz`,
    description: quiz.intro ?? `Quiz: ${quiz.title} (${quiz.totalQuestions} spørsmål)`,
    alternates: { canonical: `https://lillehammermoske.no/quiz/${quiz.slug}/` },
    robots: { index: false, follow: false },
  };
}

export default async function QuizPage({ params }: PageProps) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();

  return (
    <div className="min-h-screen bg-cream/40 px-4 py-10 sm:py-16">
      <div className="container-custom">
        <QuizRunner quiz={quiz} />
      </div>
    </div>
  );
}
