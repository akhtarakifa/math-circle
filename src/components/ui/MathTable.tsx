// src/components/ui/MathTable.tsx
import { motion } from 'framer-motion';

interface TableRow {
  col1: string;
  col2: string;
  col3?: string;
}

interface MathTableProps {
  headers: string[];
  rows: TableRow[];
}

export function MathTable({ headers, rows }: MathTableProps) {
  return (
    <motion.div
      className="overflow-x-auto rounded-xl border border-[var(--border)] my-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full text-sm font-sans">
        <thead>
          <tr className="bg-[var(--text-primary)] text-white">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-5 py-3 text-left font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-secondary)]'}
            >
              <td className="px-5 py-3 font-mono text-[var(--text-primary)] font-medium border-t border-[var(--border)]">
                {row.col1}
              </td>
              <td className="px-5 py-3 text-[var(--text-secondary)] border-t border-[var(--border)]">{row.col2}</td>
              {row.col3 !== undefined && (
                <td className="px-5 py-3 text-[var(--text-secondary)] border-t border-[var(--border)]">{row.col3}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
