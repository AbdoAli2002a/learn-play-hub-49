import { useMemo, useState } from "react";
import { GameShell } from "./GameShell";

const sets: [number, number, number][] = [
  [9, 5, 4],
  [7, 6, 5],
  [10, 5, 2],
  [10, 6, 5],
  [8, 4, 4],
  [12, 3, 6],
  [3, 4, 5],
  [11, 4, 6],
];

function possible([a, b, c]: [number, number, number]) {
  const s = [a, b, c].sort((m, n) => m - n);
  return s[0] + s[1] > s[2];
}

export function SortingActivity() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const correct = useMemo(
    () => Object.entries(answers).filter(([i, v]) => possible(sets[Number(i)]) === v).length,
    [answers],
  );

  return (
    <GameShell
      title="Game 4 — Can It Be a Triangle?"
      goal="Sort each set of lengths (in cm). Add the two shortest sides and compare with the longest."
      score={`${correct}/${Object.keys(answers).length || 0} correct`}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {sets.map((s, i) => {
          const answered = answers[i] !== undefined;
          const right = answered && answers[i] === possible(s);
          return (
            <div
              key={i}
              className={`flex items-center justify-between gap-3 rounded-md border p-3 ${
                !answered ? "border-border" : right ? "border-success/60" : "border-destructive/60"
              }`}
            >
              <span className="math text-sm">
                {s[0]} , {s[1]} , {s[2]} cm
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setAnswers((a) => ({ ...a, [i]: true }))}
                  className="rounded border border-border px-3 py-1 text-xs font-semibold transition-colors hover:border-success hover:text-success"
                >
                  Yes
                </button>
                <button
                  onClick={() => setAnswers((a) => ({ ...a, [i]: false }))}
                  className="rounded border border-border px-3 py-1 text-xs font-semibold transition-colors hover:border-destructive hover:text-destructive"
                >
                  No
                </button>
              </div>
              {answered ? (
                <span className={`math text-xs ${right ? "text-success" : "text-destructive"}`}>
                  {[...s].sort((m, n) => m - n)[0] + [...s].sort((m, n) => m - n)[1]} vs{" "}
                  {[...s].sort((m, n) => m - n)[2]}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setAnswers({})}
        className="mt-4 rounded-md border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
      >
        Reset
      </button>
    </GameShell>
  );
}
