import { createFileRoute, Link } from "@tanstack/react-router";
import { InteriorAnglesFigure, Figure } from "@/components/geometry/Figures";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Triangle — Lesson 4 Interactive Geometry Guide" },
      {
        name: "description",
        content:
          "Learn the sum of interior angles, the exterior angle rule and the triangle inequality with worked examples, diagrams, exercises and learning games.",
      },
      { property: "og:title", content: "The Triangle — Lesson 4 Interactive Geometry Guide" },
      {
        property: "og:description",
        content:
          "Interior angles, exterior angles and the triangle inequality explained with diagrams, worked examples and games.",
      },
    ],
  }),
  component: Index,
});

const sections = [
  {
    to: "/interior-angles" as const,
    title: "Sum of Interior Angles",
    desc: "Why every triangle's angles add to 180°, with the parallel-lines proof and worked examples.",
  },
  {
    to: "/exterior-angle" as const,
    title: "The Exterior Angle",
    desc: "What counts as an exterior angle, and why it equals the sum of the two non-adjacent interior angles.",
  },
  {
    to: "/triangle-inequality" as const,
    title: "Triangle Inequality",
    desc: "When three lengths can form a triangle — ruler-and-compass activity and the quick test.",
  },
  {
    to: "/practice" as const,
    title: "Exercise 14",
    desc: "Full exercise set: complete, find the variable, proofs, problem solving and multiple choice.",
  },
  {
    to: "/activities" as const,
    title: "Activities & Games",
    desc: "Missing Angle Sprint, Triangle Builder, Exterior Angle Challenge and a quiz arena.",
  },
];

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Unit 3 · Geometry and Measurement · Lesson Four
          </p>
          <h1 className="mt-3 text-5xl font-bold leading-tight">The Triangle</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Three rules govern every triangle you will ever draw: its angles always total 180°, each
            exterior angle equals the two far interior angles, and its three sides must satisfy the
            triangle inequality. This site explains each one with diagrams, proofs, examples and games.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/interior-angles"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start the lesson
            </Link>
            <Link
              to="/activities"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Play the games
            </Link>
          </div>
        </div>
        <Figure caption="Interior angles of any triangle sum to 180°">
          <InteriorAnglesFigure />
        </Figure>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-xl font-semibold">Learning Outcomes</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Deduce the sum of the interior angles of a triangle.</li>
            <li>• Learn the concept of the exterior angle of a triangle.</li>
            <li>• Deduce the relationship between an exterior angle and the interior angles.</li>
            <li>• Learn the concept of the triangle inequality.</li>
          </ul>
        </div>
        <div className="panel p-6">
          <h2 className="text-xl font-semibold">Vocabulary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-primary">Interior angle</dt>
              <dd className="text-muted-foreground">An angle formed inside the triangle by two of its sides.</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Exterior angle</dt>
              <dd className="text-muted-foreground">
                The angle between one side and the extension of an adjacent side.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Triangle inequality</dt>
              <dd className="text-muted-foreground">
                The sum of any two side lengths is greater than the third side length.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Lesson Map</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Link key={s.to} to={s.to} className="panel group block p-6 transition-colors hover:border-primary">
              <span className="math text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-1 text-lg font-semibold group-hover:text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
