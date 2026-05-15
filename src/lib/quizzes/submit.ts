import type { QuizSubmission } from './types';

const SUBMIT_URL = process.env.NEXT_PUBLIC_QUIZ_SUBMIT_URL || '';
const SUBMIT_SECRET = process.env.NEXT_PUBLIC_QUIZ_SUBMIT_SECRET || '';

export async function submitQuiz(payload: Omit<QuizSubmission, 'secret'>): Promise<void> {
  if (!SUBMIT_URL) {
    throw new Error(
      'Innsending er ikke konfigurert. Sett NEXT_PUBLIC_QUIZ_SUBMIT_URL i miljøvariablene.',
    );
  }
  const body: QuizSubmission = { ...payload, secret: SUBMIT_SECRET };
  const res = await fetch(SUBMIT_URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    redirect: 'follow',
  });
  if (!res.ok) {
    throw new Error(`Innsending feilet (HTTP ${res.status}).`);
  }
  const text = await res.text();
  try {
    const data = JSON.parse(text);
    if (data && data.ok === false) {
      throw new Error(data.error || 'Innsending feilet.');
    }
  } catch {
    // Apps Script sometimes returns plain text on redirect; if not JSON, trust HTTP 200.
  }
}

export function isSubmitConfigured(): boolean {
  return Boolean(SUBMIT_URL);
}
