// src/lib/katex.ts
import katex from 'katex';
import 'katex/dist/katex.min.css';

export function renderInline(formula: string): string {
  try {
    return katex.renderToString(formula, {
      throwOnError: false,
      displayMode: false,
      output: 'html',
      strict: 'ignore',
    });
  } catch {
    return formula;
  }
}

export function renderBlock(formula: string): string {
  try {
    return katex.renderToString(formula, {
      throwOnError: false,
      displayMode: true,
      output: 'html',
      strict: 'ignore',
    });
  } catch {
    return formula;
  }
}
