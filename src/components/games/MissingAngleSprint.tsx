import { useCallback, useEffect, useState } from "react";
import { GameShell } from "./GameShell";

type Round = { a: number; b: number; missing: number };

function makeRound(): Round {
  const a = 20 + Math.floor(Math.random() * 90);
  const b = 20 + Math.floor(Math.random() * (150 - a));
  return { a, b, missing: 180 - a - b };
}

export function MissingAngleSprint() {
  const [round, setRound] = useState<Round>({ a: 60, b: 70, missing: 50 });
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "right" | "wrong">("idle");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => setRound(makeRound()), []);

  useEffect(() => {
    if (!running) return;
    if (time <= 0) {
      setRunning(false);
      return;
    }
    const id = setTimeout(() => setTime((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [running, time]);

  const start = useCallback(() => {
    setScore(0);
    setAttempts(0);
    setTime(60);
    setRunning(true);
    setStatus("idle");
    setValue("");
    setRound(makeRound());
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!running) return;
    const ok = Number(value) === round.missing;
    setAttempts((n) => n + 1);
    setStatus(ok ? "right" : "wrong");
    if (ok) {
      setScore((s) => s + 1);
      setTimeout(() => {
        setRound(makeRound());
        setValue("");
        setStatus("idle");
      }, 500);
    }
  }

  return (
    <GameShell
      title="Game 1 — Missing Angle Sprint"
      goal="Two interior angles are shown. Type the third one before the clock runs out."
      score={`Score ${score}/${attempts} · ${time}s`}
    >
      <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
        <svg viewBox="0 0 260 170" className="w-full max-w-[260px] text-accent" role="img" aria-label="Triangle with two known angles">
          <polygon points="30,140 230,140 120,25" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="46" y="130" className="math" fontSize="14" fill="var(--primary)">{round.a}°</text>
          <text x="186" y="130" className="math" fontSize="14" fill="var(--primary)">{round.b}°</text>
          <text x="112" y="55" className="math" fontSize="16" fill="var(--accent)">?</text>
        </svg>

        <div>
          {!running && time === 0 ? (
            <p className="mb-3 text-sm text-primary">
              Time! Final score: {score} correct out of {attempts}.
            </p>
          ) : null}
          <form onSubmit={submit} className="flex flex-wrap gap-3">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              inputMode="numeric"
              placeholder="Angle in degrees"
              disabled={!running}
              className="math w-44 rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm outline-none focus:border-primary disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!running}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50"
            >
              Check
            </button>
            <button
              type="button"
              onClick={start}
              className="rounded-md border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              {running ? "Restart" : "Start 60s"}
            </button>
          </form>
          {status === "right" ? (
            <p className="mt-3 text-sm text-success">Correct — 180° − {round.a}° − {round.b}° = {round.missing}°</p>
          ) : null}
          {status === "wrong" ? (
            <p className="mt-3 text-sm text-destructive">
              Not yet. Remember: subtract both known angles from 180°.
            </p>
          ) : null}
        </div>
      </div>
    </GameShell>
  );
}
