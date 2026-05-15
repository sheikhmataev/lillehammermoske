'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface StartFormProps {
  quizTitle: string;
  intro?: string;
  totalQuestions: number;
  onStart: (info: { name: string; age: string }) => void;
}

export function StartForm({ quizTitle, intro, totalQuestions, onStart }: StartFormProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedAge = age.trim();
    if (!trimmedName) {
      setError('Skriv inn navnet ditt.');
      return;
    }
    if (!trimmedAge || !/^\d{1,2}$/.test(trimmedAge)) {
      setError('Skriv inn alderen din (tall, 1–99).');
      return;
    }
    const ageNum = parseInt(trimmedAge, 10);
    if (ageNum < 1 || ageNum > 99) {
      setError('Skriv inn en gyldig alder.');
      return;
    }
    setError(null);
    onStart({ name: trimmedName, age: trimmedAge });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-medium uppercase tracking-wide text-gold-600">
          Quiz
        </p>
        <h1 className="mt-2 text-2xl font-bold text-emerald-900 sm:text-3xl">
          {quizTitle}
        </h1>
        {intro && (
          <p className="mt-3 text-base text-gray-700 leading-relaxed">{intro}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-900">
            {totalQuestions} spørsmål
          </span>
          <span className="inline-flex items-center rounded-full bg-cream px-3 py-1 font-medium text-charcoal">
            Ingen tidsfrist
          </span>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="quiz-name" className="block text-sm font-medium text-gray-800">
              Hva heter du?
            </label>
            <Input
              id="quiz-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ditt navn"
              autoComplete="off"
              className="mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="quiz-age" className="block text-sm font-medium text-gray-800">
              Hvor gammel er du?
            </label>
            <Input
              id="quiz-age"
              type="number"
              inputMode="numeric"
              min={1}
              max={99}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Alder"
              autoComplete="off"
              className="mt-1"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">{error}</p>
          )}

          <Button type="submit" size="lg" className="w-full">
            Start quiz
          </Button>
        </form>

        <p className="mt-6 text-xs text-gray-500 leading-relaxed">
          Navnet, alderen og svarene dine lagres i et regneark som kun moskéen har tilgang til.
          Vi bruker det kun til å se hvordan elevene gjør det på prøven.
        </p>
      </div>
    </div>
  );
}
