import type { Quiz, QuizOption, QuizQuestion, QuizSection } from './types';

export class QuizParseError extends Error {
  constructor(message: string, public line?: number) {
    super(line ? `Line ${line}: ${message}` : message);
  }
}

interface Frontmatter {
  title: string;
  slug: string;
  intro?: string;
  visible: boolean;
}

function parseFrontmatter(source: string): { fm: Frontmatter; rest: string; restStartLine: number } {
  const lines = source.split('\n');
  if (lines[0].trim() !== '---') {
    throw new QuizParseError('Quiz file must start with --- frontmatter', 1);
  }
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      end = i;
      break;
    }
  }
  if (end === -1) {
    throw new QuizParseError('Frontmatter must be closed with ---');
  }
  const data: Record<string, string> = {};
  for (let i = 1; i < end; i++) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    data[key] = value;
  }
  if (!data.title) throw new QuizParseError('Frontmatter missing required field: title');
  if (!data.slug) throw new QuizParseError('Frontmatter missing required field: slug');
  if (!/^[a-z0-9-]+$/.test(data.slug)) {
    throw new QuizParseError(`Slug "${data.slug}" must be lowercase letters, digits, and dashes only`);
  }
  let visible = true;
  if (data.visible !== undefined) {
    const v = data.visible.toLowerCase();
    if (v === 'false' || v === 'no') visible = false;
    else if (v === 'true' || v === 'yes') visible = true;
    else throw new QuizParseError(`Field "visible" must be true or false, got "${data.visible}"`);
  }
  return {
    fm: {
      title: data.title,
      slug: data.slug,
      intro: data.intro || undefined,
      visible,
    },
    rest: lines.slice(end + 1).join('\n'),
    restStartLine: end + 2,
  };
}

const QUESTION_RE = /^(\d+)\.\s+(.*\S)\s*$/;
const OPTION_RE = /^-\s+([A-Z])\)\s+(.*\S?)\s*$/;
const SECTION_RE = /^##\s+(.+?)\s*$/;

export function parseQuiz(source: string): Quiz {
  const { fm, rest, restStartLine } = parseFrontmatter(source);
  const lines = rest.split('\n');

  const sections: QuizSection[] = [];
  let currentSection: QuizSection | null = null;
  let currentQuestion: QuizQuestion | null = null;
  const seenNumbers = new Set<number>();
  let lastNumber = 0;

  const finalizeQuestion = (lineNo: number) => {
    if (!currentQuestion) return;
    if (currentQuestion.options.length < 2) {
      throw new QuizParseError(
        `Question ${currentQuestion.number} must have at least 2 options`,
        lineNo,
      );
    }
    const correctCount = currentQuestion.options.filter((o) => o.correct).length;
    if (correctCount === 0) {
      throw new QuizParseError(
        `Question ${currentQuestion.number} has no correct answer (mark one option with " *")`,
        lineNo,
      );
    }
    if (correctCount > 1) {
      throw new QuizParseError(
        `Question ${currentQuestion.number} has multiple correct answers; only one allowed`,
        lineNo,
      );
    }
    currentSection!.questions.push(currentQuestion);
    currentQuestion = null;
  };

  const ensureSection = () => {
    if (!currentSection) {
      currentSection = { title: '', questions: [] };
      sections.push(currentSection);
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trimEnd();
    const lineNo = restStartLine + i;
    if (!line.trim()) continue;

    const sectionMatch = SECTION_RE.exec(line);
    if (sectionMatch) {
      finalizeQuestion(lineNo);
      currentSection = { title: sectionMatch[1], questions: [] };
      sections.push(currentSection);
      continue;
    }

    const questionMatch = QUESTION_RE.exec(line);
    if (questionMatch) {
      finalizeQuestion(lineNo);
      ensureSection();
      const number = parseInt(questionMatch[1], 10);
      if (seenNumbers.has(number)) {
        throw new QuizParseError(`Duplicate question number ${number}`, lineNo);
      }
      seenNumbers.add(number);
      if (number !== lastNumber + 1) {
        throw new QuizParseError(
          `Question numbers must be consecutive; got ${number} after ${lastNumber}`,
          lineNo,
        );
      }
      lastNumber = number;
      currentQuestion = { number, text: questionMatch[2], options: [] };
      continue;
    }

    const optionMatch = OPTION_RE.exec(line);
    if (optionMatch) {
      if (!currentQuestion) {
        throw new QuizParseError('Option found outside of a question', lineNo);
      }
      const letter = optionMatch[1];
      let text = optionMatch[2];
      const correct = / \*$/.test(text);
      if (correct) text = text.replace(/\s*\*$/, '').trim();
      if (currentQuestion.options.some((o) => o.letter === letter)) {
        throw new QuizParseError(
          `Question ${currentQuestion.number}: duplicate option letter ${letter}`,
          lineNo,
        );
      }
      const opt: QuizOption = { letter, text, correct };
      currentQuestion.options.push(opt);
      continue;
    }

    throw new QuizParseError(`Unrecognized line: "${line}"`, lineNo);
  }

  finalizeQuestion(restStartLine + lines.length);

  if (sections.length === 0 || sections.every((s) => s.questions.length === 0)) {
    throw new QuizParseError('Quiz has no questions');
  }

  const totalQuestions = sections.reduce((sum, s) => sum + s.questions.length, 0);

  return {
    slug: fm.slug,
    title: fm.title,
    intro: fm.intro,
    visible: fm.visible,
    sections: sections.filter((s) => s.questions.length > 0),
    totalQuestions,
  };
}
