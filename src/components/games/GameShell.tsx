import type { ReactNode } from "react";

export function GameShell({
  title,
  goal,
  score,
  children,
}: {
  title: string;
  goal: string;
  score?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="panel p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{goal}</p>
        </div>
        {score ? <div className="math text-sm text-primary">{score}</div> : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
