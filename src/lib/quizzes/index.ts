import fs from 'fs';
import path from 'path';
import { parseQuiz } from './parser';
import type { Quiz, QuizSummary } from './types';

const QUIZZES_DIR = path.join(process.cwd(), 'content', 'quizzes');

let cached: Quiz[] | null = null;

function loadAll(): Quiz[] {
  if (cached) return cached;
  if (!fs.existsSync(QUIZZES_DIR)) {
    cached = [];
    return cached;
  }
  const files = fs.readdirSync(QUIZZES_DIR).filter((f) => f.endsWith('.md'));
  const quizzes: Quiz[] = [];
  const seenSlugs = new Set<string>();
  for (const file of files) {
    const source = fs.readFileSync(path.join(QUIZZES_DIR, file), 'utf-8');
    let quiz: Quiz;
    try {
      quiz = parseQuiz(source);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(`Failed to parse ${file}: ${msg}`);
    }
    if (seenSlugs.has(quiz.slug)) {
      throw new Error(`Duplicate quiz slug "${quiz.slug}" in ${file}`);
    }
    seenSlugs.add(quiz.slug);
    quizzes.push(quiz);
  }
  quizzes.sort((a, b) => a.title.localeCompare(b.title, 'nb'));
  cached = quizzes;
  return cached;
}

export function getAllQuizzes(): QuizSummary[] {
  return loadAll()
    .filter((q) => q.visible)
    .map((q) => ({
      slug: q.slug,
      title: q.title,
      intro: q.intro,
      totalQuestions: q.totalQuestions,
    }));
}

export function getQuizBySlug(slug: string): Quiz | null {
  const quiz = loadAll().find((q) => q.slug === slug);
  if (!quiz || !quiz.visible) return null;
  return quiz;
}

export function getAllQuizSlugs(): string[] {
  return loadAll().filter((q) => q.visible).map((q) => q.slug);
}
