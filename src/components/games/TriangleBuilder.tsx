import { useMemo, useState } from "react";
import { GameShell } from "./GameShell";

function points(a: number, b: number, c: number) {
  // c is the base (AB). A at origin, B at (c, 0). C found by intersection of circles.
  const x = (c * c + b * b - a * a) / (2 * c);
  const y2 = b * b - x * x;
  if (y2 <= 0) return null;
  return { x, y: Math.sqrt(y2) };
}

export function TriangleBuilder() {
  const [a, setA] = useState(5); // BC
  const [b, setB] = useState(4); // AC
  const [c, setC] = useState(6); // AB

  const valid = a + b > c && a + c > b && b + c > a;
  const geom = useMemo(() => (valid ? points(a, b, c) : null), [a, b, c, valid]);

  const sorted = [a, b, c].sort((m, n) => m - n);
  const scale = 240 / Math.max(a, b, c, 1);

  return (
    <GameShell
      title="Game 2 — Triangle Builder"
      goal="Drag the three side lengths. The triangle only appears when the inequality is satisfied."
      score={valid ? "Valid triangle ✔" : "Impossible ✘"}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          {[
            { label: "BC (side a)", v: a, set: setA },
            { label: "AC (side b)", v: b, set: setB },
            { label: "AB (side c)", v: c, set: setC },
          ].map((s) => (
            <label key={s.label} className="block">
              <span className="flex justify-between text-sm">
                <span>{s.label}</span>
                <span className="math text-primary">{s.v} cm</span>
              </span>
              <input
                type="range"
                min={1}
                max={14}
                value={s.v}
                onChange={(e) => s.set(Number(e.target.value))}
                className="mt-2 w-full accent-[var(--primary)]"
              />
            </label>
          ))}
          <div
            className={`rounded-md border p-4 text-sm ${valid ? "border-success/50 bg-success/10 text-success" : "border-destructive/50 bg-destructive/10 text-destructive"}`}
          >
            <span className="math">
              {sorted[0]} + {sorted[1]} = {sorted[0] + sorted[1]} {valid ? ">" : sorted[0] + sorted[1] === sorted[2] ? "=" : "<"}{" "}
              {sorted[2]}
            </span>
            <p className="mt-1">
              {valid
                ? "The two shorter sides reach past the longest side, so the triangle closes."
                : "The two shorter sides cannot reach across the longest side, so no triangle exists."}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-lg border border-border bg-secondary/30 p-4">
          <svg viewBox="0 0 280 220" className="w-full text-accent" role="img" aria-label="Live triangle preview">
            {geom ? (
              <>
                <polygon
                  points={`20,190 ${20 + c * scale * 0.9},190 ${20 + geom.x * scale * 0.9},${190 - geom.y * scale * 0.9}`}
                  fill="color-mix(in oklab, var(--accent) 15%, transparent)"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <text x="14" y="206" fontSize="13" fill="currentColor">A</text>
                <text x={20 + c * scale * 0.9} y="206" fontSize="13" fill="currentColor">B</text>
                <text x={20 + geom.x * scale * 0.9} y={182 - geom.y * scale * 0.9} fontSize="13" fill="currentColor">C</text>
              </>
            ) : (
              <>
                <line x1="20" y1="150" x2={20 + c * scale * 0.9} y2="150" stroke="currentColor" strokeWidth="2.5" />
                <path
                  d={`M ${20 + a * scale * 0.9} 150 A ${a * scale * 0.9} ${a * scale * 0.9} 0 0 0 ${20} 150`}
                  fill="none"
                  stroke="var(--destructive)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  transform={`translate(${(c - a) * scale * 0.9},0)`}
                />
                <path
                  d={`M ${20} 150 A ${b * scale * 0.9} ${b * scale * 0.9} 0 0 1 ${20 + b * scale * 0.9} 150`}
                  fill="none"
                  stroke="var(--destructive)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text x="20" y="190" fontSize="13" fill="var(--destructive)">
                  The arcs never meet — no triangle.
                </text>
              </>
            )}
          </svg>
        </div>
      </div>
    </GameShell>
  );
}
