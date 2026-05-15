'use client';

import { useMemo, useState } from 'react';
import { StartForm } from './StartForm';
import { QuizSection } from './QuizSection';
import { QuizReview } from './QuizReview';
import { submitQuiz } from '@/lib/quizzes/submit';
import type { AnswerEntry, Quiz } from '@/lib/quizzes/types';

interface QuizRunnerProps {
  quiz: Quiz;
}

type Phase =
  | { kind: 'start' }
  | { kind: 'taking'; sectionIndex: number }
  | { kind: 'review'; score: number; answers: AnswerEntry[]; submitError: string | null };

export function QuizRunner({ quiz }: QuizRunnerProps) {
  const [phase, setPhase] = useState<Phase>({ kind: 'start' });
  const [participant, setParticipant] = useState<{ name: string; age: string } | null>(null);
  const [allAnswers, setAllAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const correctAnswerMap = useMemo(() => {
    const map = new Map<number, { letter: string; text: string; questionText: string; options: Map<string, string> }>();
    for (const section of quiz.sections) {
      for (const q of section.questions) {
        const correct = q.options.find((o) => o.correct)!;
        const optMap = new Map(q.options.map((o) => [o.letter, o.text]));
        map.set(q.number, {
          letter: correct.letter,
          text: correct.text,
          questionText: q.text,
          options: optMap,
        });
      }
    }
    return map;
  }, [quiz]);

  const handleStart = (info: { name: string; age: string }) => {
    setParticipant(info);
    setAllAnswers({});
    setPhase({ kind: 'taking', sectionIndex: 0 });
  };

  const buildAnswerEntries = (final: Record<number, string>): AnswerEntry[] => {
    const entries: AnswerEntry[] = [];
    for (const section of quiz.sections) {
      for (const q of section.questions) {
        const meta = correctAnswerMap.get(q.number)!;
        const selectedLetter = final[q.number] ?? null;
        const selectedText = selectedLetter ? meta.options.get(selectedLetter) ?? null : null;
        entries.push({
          questionNumber: q.number,
          questionText: q.text,
          selectedLetter,
          selectedText,
          correctLetter: meta.letter,
          correctText: meta.text,
          isCorrect: selectedLetter === meta.letter,
        });
      }
    }
    return entries;
  };

  const handleAdvance = async (sectionAnswers: Record<number, string>) => {
    if (phase.kind !== 'taking') return;
    const merged = { ...allAnswers, ...sectionAnswers };
    setAllAnswers(merged);

    const isLast = phase.sectionIndex === quiz.sections.length - 1;
    if (!isLast) {
      setPhase({ kind: 'taking', sectionIndex: phase.sectionIndex + 1 });
      return;
    }

    if (!participant) return;
    setIsSubmitting(true);
    const entries = buildAnswerEntries(merged);
    const score = entries.filter((e) => e.isCorrect).length;

    let submitError: string | null = null;
    try {
      await submitQuiz({
        quizSlug: quiz.slug,
        quizTitle: quiz.title,
        name: participant.name,
        age: participant.age,
        submittedAt: new Date().toISOString(),
        score,
        totalQuestions: quiz.totalQuestions,
        answers: entries,
      });
    } catch (err) {
      submitError = err instanceof Error ? err.message : 'Ukjent feil.';
    }

    setIsSubmitting(false);
    setPhase({ kind: 'review', score, answers: entries, submitError });
  };

  if (phase.kind === 'start') {
    return (
      <StartForm
        quizTitle={quiz.title}
        intro={quiz.intro}
        totalQuestions={quiz.totalQuestions}
        onStart={handleStart}
      />
    );
  }

  if (phase.kind === 'taking') {
    const section = quiz.sections[phase.sectionIndex];
    const sectionAnswers: Record<number, string> = {};
    for (const q of section.questions) {
      if (allAnswers[q.number]) sectionAnswers[q.number] = allAnswers[q.number];
    }
    return (
      <QuizSection
        section={section}
        sectionIndex={phase.sectionIndex}
        totalSections={quiz.sections.length}
        initialAnswers={sectionAnswers}
        isLast={phase.sectionIndex === quiz.sections.length - 1}
        onAdvance={handleAdvance}
        isSubmitting={isSubmitting}
      />
    );
  }

  return (
    <QuizReview
      quiz={quiz}
      name={participant?.name ?? ''}
      score={phase.score}
      answers={phase.answers}
      submitError={phase.submitError}
    />
  );
}
