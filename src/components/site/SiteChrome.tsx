import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Overview" },
  { to: "/interior-angles", label: "Interior Angles" },
  { to: "/exterior-angle", label: "Exterior Angle" },
  { to: "/triangle-inequality", label: "Triangle Inequality" },
  { to: "/practice", label: "Exercises" },
  { to: "/activities", label: "Activities & Games" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" aria-hidden="true">
            <polygon points="12,3 22,21 2,21" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-display text-base font-bold">Lesson 4 · The Triangle</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
        Unit 3: Geometry and Measurement · Lesson Four: The Triangle — interactive study site.
      </div>
    </footer>
  );
}

export function Page({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h1 className="mt-2 text-4xl font-bold">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{intro}</p>
      <div className="mt-10 space-y-10">{children}</div>
    </main>
  );
}

export function Rule({ children }: { children: ReactNode }) {
  return (
    <div className="rule-box rounded-lg p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Rule</p>
      <div className="mt-2 text-lg font-medium">{children}</div>
    </div>
  );
}

export function Note({ title = "Note", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-accent/40 bg-accent/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">{title}</p>
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function Worked({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="panel p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="math space-y-2 border-l-2 border-primary/40 pl-4 text-sm">
      {items.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ol>
  );
}
