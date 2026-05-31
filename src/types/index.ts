// src/types/index.ts

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface UnsurItem {
  id: string;
  nama: string;
  simbol: string;
  deskripsi: string;
  detail: string;
}

export interface FormulaItem {
  label: string;
  formula: string;
  keterangan: string[];
}

export interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  submitted: boolean[];
  isFinished: boolean;
  score: number;
}
