export interface QuizOption {
  letter: string;
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  number: number;
  text: string;
  options: QuizOption[];
}

export interface QuizSection {
  title: string;
  questions: QuizQuestion[];
}

export interface Quiz {
  slug: string;
  title: string;
  intro?: string;
  sections: QuizSection[];
  totalQuestions: number;
}

export interface QuizSummary {
  slug: string;
  title: string;
  intro?: string;
  totalQuestions: number;
}

export interface AnswerEntry {
  questionNumber: number;
  questionText: string;
  selectedLetter: string | null;
  selectedText: string | null;
  correctLetter: string;
  correctText: string;
  isCorrect: boolean;
}

export interface QuizSubmission {
  secret: string;
  quizSlug: string;
  quizTitle: string;
  name: string;
  age: string;
  submittedAt: string;
  score: number;
  totalQuestions: number;
  answers: AnswerEntry[];
}
