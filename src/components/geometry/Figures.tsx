import type { ReactNode } from "react";

export function Figure({
  caption,
  children,
  className = "",
}: {
  caption?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={`panel p-4 ${className}`}>
      <div className="flex justify-center">{children}</div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

const stroke = "currentColor";

/** Triangle with the three interior angles marked. */
export function InteriorAnglesFigure() {
  return (
    <svg viewBox="0 0 320 200" className="w-full max-w-sm text-accent" role="img" aria-label="Triangle ABC with interior angles 1, 2 and 3">
      <polygon points="40,170 280,170 130,30" fill="none" stroke={stroke} strokeWidth="2.5" />
      <path d="M40 170 A 34 34 0 0 0 72 156" fill="none" stroke="var(--primary)" strokeWidth="2" />
      <path d="M280 170 A 34 34 0 0 1 249 155" fill="none" stroke="var(--primary)" strokeWidth="2" />
      <path d="M130 30 A 30 30 0 0 0 108 62" fill="none" stroke="var(--primary)" strokeWidth="2" />
      <text x="76" y="160" className="math" fontSize="14" fill="var(--primary)">1</text>
      <text x="232" y="159" className="math" fontSize="14" fill="var(--primary)">3</text>
      <text x="126" y="62" className="math" fontSize="14" fill="var(--primary)">2</text>
      <text x="24" y="188" fontSize="15" fill="currentColor">B</text>
      <text x="284" y="188" fontSize="15" fill="currentColor">C</text>
      <text x="126" y="22" fontSize="15" fill="currentColor">A</text>
      <text x="118" y="196" fontSize="13" fill="var(--muted-foreground)">m∠1 + m∠2 + m∠3 = 180°</text>
    </svg>
  );
}

/** Parallel-line proof of the 180° rule. */
export function ParallelProofFigure() {
  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-md text-accent" role="img" aria-label="Proof using two parallel lines and a transversal">
      <line x1="20" y1="50" x2="320" y2="50" stroke="var(--muted-foreground)" strokeWidth="2" strokeDasharray="6 5" />
      <line x1="20" y1="180" x2="320" y2="180" stroke="var(--muted-foreground)" strokeWidth="2" strokeDasharray="6 5" />
      <text x="324" y="54" fontSize="13" fill="var(--muted-foreground)">m</text>
      <text x="324" y="184" fontSize="13" fill="var(--muted-foreground)">n</text>
      <line x1="170" y1="50" x2="80" y2="180" stroke={stroke} strokeWidth="2.5" />
      <line x1="170" y1="50" x2="265" y2="180" stroke={stroke} strokeWidth="2.5" />
      <line x1="80" y1="180" x2="265" y2="180" stroke={stroke} strokeWidth="2.5" />
      <circle cx="170" cy="50" r="3.5" fill="var(--primary)" />
      <circle cx="80" cy="180" r="3.5" fill="var(--primary)" />
      <circle cx="265" cy="180" r="3.5" fill="var(--primary)" />
      <text x="166" y="40" fontSize="14" fill="currentColor">A</text>
      <text x="66" y="196" fontSize="14" fill="currentColor">B</text>
      <text x="268" y="196" fontSize="14" fill="currentColor">C</text>
      <text x="140" y="68" className="math" fontSize="13" fill="var(--primary)">4</text>
      <text x="167" y="70" className="math" fontSize="13" fill="var(--primary)">1</text>
      <text x="192" y="68" className="math" fontSize="13" fill="var(--primary)">5</text>
      <text x="92" y="170" className="math" fontSize="13" fill="var(--primary)">2</text>
      <text x="243" y="170" className="math" fontSize="13" fill="var(--primary)">3</text>
    </svg>
  );
}

/** Exterior angle figure: triangle ABC with CB extended to D. */
export function ExteriorAngleFigure() {
  return (
    <svg viewBox="0 0 340 200" className="w-full max-w-md text-accent" role="img" aria-label="Triangle ABC with exterior angle ABD">
      <line x1="20" y1="160" x2="300" y2="160" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeDasharray="5 5" />
      <polygon points="110,160 290,160 190,40" fill="none" stroke={stroke} strokeWidth="2.5" />
      <path d="M110 160 A 30 30 0 0 1 80 160" fill="none" stroke="var(--primary)" strokeWidth="2" />
      <path d="M110 160 A 26 26 0 0 0 132 143" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <text x="86" y="150" className="math" fontSize="14" fill="var(--primary)">4</text>
      <text x="120" y="150" className="math" fontSize="12" fill="var(--accent)">1</text>
      <text x="186" y="70" className="math" fontSize="13" fill="var(--accent)">2</text>
      <text x="262" y="152" className="math" fontSize="13" fill="var(--accent)">3</text>
      <text x="30" y="178" fontSize="14" fill="currentColor">D</text>
      <text x="104" y="180" fontSize="14" fill="currentColor">B</text>
      <text x="294" y="180" fontSize="14" fill="currentColor">C</text>
      <text x="186" y="32" fontSize="14" fill="currentColor">A</text>
      <text x="60" y="196" fontSize="13" fill="var(--muted-foreground)">m∠4 = m∠2 + m∠3</text>
    </svg>
  );
}

/** Triangle with three labelled side lengths, for the inequality. */
export function SidesFigure({ a, b, c }: { a: number; b: number; c: number }) {
  return (
    <svg viewBox="0 0 300 180" className="w-full max-w-xs text-accent" role="img" aria-label="Triangle with labelled side lengths">
      <polygon points="40,150 260,150 130,30" fill="none" stroke={stroke} strokeWidth="2.5" />
      <text x="140" y="170" className="math" fontSize="14" fill="var(--primary)">{c} cm</text>
      <text x="58" y="82" className="math" fontSize="14" fill="var(--primary)">{a} cm</text>
      <text x="204" y="82" className="math" fontSize="14" fill="var(--primary)">{b} cm</text>
      <text x="28" y="168" fontSize="14" fill="currentColor">A</text>
      <text x="262" y="168" fontSize="14" fill="currentColor">B</text>
      <text x="126" y="22" fontSize="14" fill="currentColor">C</text>
    </svg>
  );
}

/** Parallel line DE inside triangle ABC (Example 2). */
export function ParallelInsideFigure() {
  return (
    <svg viewBox="0 0 300 200" className="w-full max-w-xs text-accent" role="img" aria-label="Triangle ABC with DE parallel to BC">
      <polygon points="150,20 40,170 260,170" fill="none" stroke={stroke} strokeWidth="2.5" />
      <line x1="95" y1="95" x2="205" y2="95" stroke="var(--primary)" strokeWidth="2.5" />
      <text x="146" y="14" fontSize="14" fill="currentColor">A</text>
      <text x="28" y="186" fontSize="14" fill="currentColor">B</text>
      <text x="264" y="186" fontSize="14" fill="currentColor">C</text>
      <text x="78" y="99" fontSize="14" fill="currentColor">D</text>
      <text x="210" y="99" fontSize="14" fill="currentColor">E</text>
      <text x="132" y="46" className="math" fontSize="13" fill="var(--primary)">75°</text>
      <text x="222" y="164" className="math" fontSize="13" fill="var(--primary)">60°</text>
      <text x="100" y="118" className="math" fontSize="13" fill="var(--accent)">?</text>
    </svg>
  );
}
