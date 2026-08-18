import { useState } from "react";
import { GameShell } from "./GameShell";

type Task = { known: number; exterior: number; ask: "exterior" | "interior"; remote2: number };

function makeTask(): Task {
  const known = 25 + Math.floor(Math.random() * 70);
  const remote2 = 25 + Math.floor(Math.random() * (150 - known));
  const ask = Math.random() > 0.5 ? "exterior" : "interior";
  return { known, remote2, exterior: known + remote2, ask };
}

export function ExteriorAngleChallenge() {
  const [task, setTask] = useState<Task>({ known: 37, remote2: 62, exterior: 99, ask: "exterior" });
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);

  const target = task.ask === "exterior" ? task.exterior : task.remote2;

  function check(e: React.FormEvent) {
    e.preventDefault();
    if (Number(value) === target) {
      setStreak((s) => s + 1);
      setFeedback(`Correct — ${task.known}° + ${task.remote2}° = ${task.exterior}°`);
      setTimeout(() => {
        setTask(makeTask());
        setValue("");
        setFeedback(null);
      }, 800);
    } else {
      setStreak(0);
      setFeedback("Exterior angle = sum of the two remote interior angles. Try again.");
    }
  }

  return (
    <GameShell
      title="Game 3 — Exterior Angle Challenge"
      goal="Use the exterior angle rule to find the missing measure. Keep your streak alive."
      score={`Streak ${streak}`}
    >
      <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
        <svg viewBox="0 0 300 180" className="w-full max-w-[300px] text-accent" role="img" aria-label="Triangle with an exterior angle">
          <line x1="15" y1="140" x2="285" y2="140" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeDasharray="5 5" />
          <polygon points="100,140 265,140 175,35" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="52" y="132" className="math" fontSize="14" fill="var(--primary)">
            {task.ask === "exterior" ? "?" : `${task.exterior}°`}
          </text>
          <text x="168" y="66" className="math" fontSize="13" fill="var(--accent)">{task.known}°</text>
          <text x="228" y="132" className="math" fontSize="13" fill="var(--accent)">
            {task.ask === "interior" ? "?" : `${task.remote2}°`}
          </text>
          <text x="22" y="160" fontSize="13" fill="currentColor">D</text>
          <text x="96" y="160" fontSize="13" fill="currentColor">B</text>
          <text x="268" y="160" fontSize="13" fill="currentColor">C</text>
          <text x="172" y="28" fontSize="13" fill="currentColor">A</text>
        </svg>
        <div>
          <p className="text-sm text-muted-foreground">
            {task.ask === "exterior"
              ? "Find the measure of the exterior angle ∠ABD."
              : "Find the missing remote interior angle at C."}
          </p>
          <form onSubmit={check} className="mt-3 flex flex-wrap gap-3">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              inputMode="numeric"
              placeholder="Degrees"
              className="math w-40 rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              Check
            </button>
            <button
              type="button"
              onClick={() => {
                setTask(makeTask());
                setValue("");
                setFeedback(null);
              }}
              className="rounded-md border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              New figure
            </button>
          </form>
          {feedback ? (
            <p className={`mt-3 text-sm ${streak > 0 ? "text-success" : "text-destructive"}`}>{feedback}</p>
          ) : null}
        </div>
      </div>
    </GameShell>
  );
}
