import { createFileRoute } from "@tanstack/react-router";
import { Page, Rule, Worked, Steps, Note } from "@/components/site/SiteChrome";
import { Figure, SidesFigure } from "@/components/geometry/Figures";

export const Route = createFileRoute("/triangle-inequality")({
  head: () => ({
    meta: [
      { title: "Triangle Inequality — When Three Lengths Form a Triangle" },
      {
        name: "description",
        content:
          "The triangle inequality explained: the ruler-and-compass activity, the quick two-shortest-sides test, and the range of the third side.",
      },
      { property: "og:title", content: "Triangle Inequality" },
      {
        property: "og:description",
        content: "Decide instantly whether three lengths can build a triangle, with drawings and examples.",
      },
    ],
  }),
  component: TriangleInequality,
});

const activity = [
  {
    title: "6 cm, 5 cm, 4 cm — it works",
    steps: [
      "Use a ruler to draw AB = 6 cm.",
      "Set the compass to 5 cm, put the needle at B and draw an arc.",
      "Set the compass to 4 cm, put the needle at A and draw a second arc; the arcs meet at C.",
      "Join AC and BC. The triangle exists because 4 + 5 = 9 > 6.",
    ],
    verdict: "ok" as const,
  },
  {
    title: "6 cm, 3 cm, 2 cm — impossible",
    steps: [
      "Draw AB = 6 cm.",
      "Arc of 3 cm from B, arc of 2 cm from A.",
      "The arcs never meet — they fall short of each other.",
      "No triangle, because 2 + 3 = 5 < 6.",
    ],
    verdict: "no" as const,
  },
  {
    title: "6 cm, 3 cm, 3 cm — still impossible",
    steps: [
      "Draw AB = 6 cm.",
      "Arc of 3 cm from B, arc of 3 cm from A.",
      "The arcs touch exactly at the midpoint of AB — the three points are collinear.",
      "No triangle, because 3 + 3 = 6 (equal, not greater).",
    ],
    verdict: "no" as const,
  },
];

function TriangleInequality() {
  return (
    <Page
      eyebrow="Section 03"
      title="Triangle Inequality"
      intro="Not every set of three lengths can be bent into a triangle. Two short sides must be able to reach across the longest one."
    >
      <Rule>
        The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
      </Rule>

      <div className="grid gap-6 md:grid-cols-2">
        <Figure caption="In triangle ABC: AB + BC > AC, AB + AC > BC, AC + BC > AB">
          <SidesFigure a={4} b={5} c={6} />
        </Figure>
        <div className="panel p-6 text-sm leading-relaxed">
          <h2 className="text-xl font-semibold">The fast test</h2>
          <p className="mt-3 text-muted-foreground">
            You do not need to check all three inequalities. Add the two <strong>shortest</strong> sides and
            compare with the longest:
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <span className="math text-success">short + short &gt; long</span> → the triangle can be drawn.
            </li>
            <li>
              <span className="math text-destructive">short + short ≤ long</span> → the triangle cannot be
              drawn.
            </li>
          </ul>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold">Activity: draw a triangle from three lengths</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A compass is a drawing tool for circles, and it is also used to transfer exact lengths. Try each set
          on paper.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {activity.map((a) => (
            <div key={a.title} className="panel p-5">
              <h3
                className={`text-base font-semibold ${a.verdict === "ok" ? "text-success" : "text-destructive"}`}
              >
                {a.title}
              </h3>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                {a.steps.map((s, i) => (
                  <li key={i}>
                    <span className="math text-primary">{i + 1}.</span> {s}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <Worked title="Example 4 — Can these be side lengths?">
        <Steps
          items={[
            "3 cm, 4 cm, 5 cm → 3 + 4 = 7 > 5 ✔ triangle can be drawn",
            "4 cm, 6 cm, 11 cm → 4 + 6 = 10 < 11 ✘ triangle cannot be drawn",
            "7 cm, 9 cm, 14 cm → 7 + 9 = 16 > 14 ✔ triangle can be drawn",
          ]}
        />
      </Worked>

      <Note title="The third side always lives in a range">
        The length of any side is <strong>greater than the difference</strong> of the other two and{" "}
        <strong>smaller than their sum</strong>.
      </Note>

      <Worked title="Example 5 — Largest possible third side">
        <p>Two sides of a triangle are 7 cm and 3 cm. What is the largest integer third side?</p>
        <Steps
          items={[
            "7 − 3 = 4 and 7 + 3 = 10",
            "∴ 4 cm < third side < 10 cm",
            "Integer options: 5, 6, 7, 8, 9",
            "∴ the largest integer length is 9 cm",
          ]}
        />
        <p className="text-muted-foreground">
          Try it yourself: in triangle XYZ, XY = 8 cm and YZ = 5 cm. The smallest integer for XZ is 4 cm
          (since 3 &lt; XZ &lt; 13).
        </p>
      </Worked>
    </Page>
  );
}
