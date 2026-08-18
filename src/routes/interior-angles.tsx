import { createFileRoute } from "@tanstack/react-router";
import { Page, Rule, Worked, Steps, Note } from "@/components/site/SiteChrome";
import {
  Figure,
  InteriorAnglesFigure,
  ParallelProofFigure,
  ParallelInsideFigure,
} from "@/components/geometry/Figures";

export const Route = createFileRoute("/interior-angles")({
  head: () => ({
    meta: [
      { title: "Sum of the Interior Angles of a Triangle — 180° Rule" },
      {
        name: "description",
        content:
          "Proof that the interior angles of any triangle sum to 180°, using parallel lines and alternate angles, plus worked examples with algebraic angles.",
      },
      { property: "og:title", content: "Sum of the Interior Angles of a Triangle" },
      {
        property: "og:description",
        content: "The 180° rule proved with parallel lines, plus worked examples and practice.",
      },
    ],
  }),
  component: InteriorAngles,
});

function InteriorAngles() {
  return (
    <Page
      eyebrow="Section 01"
      title="Sum of Measures of the Interior Angles"
      intro="Every triangle — big, small, thin or wide — has interior angles that add up to exactly 180°. Here is why, and how to use it."
    >
      <Rule>The sum of the measures of the interior angles of any triangle is 180°.</Rule>

      <div className="grid gap-6 md:grid-cols-2">
        <Figure caption="Angles 1, 2 and 3 are the interior angles of triangle ABC">
          <InteriorAnglesFigure />
        </Figure>
        <Figure caption="Proof: line m through A is parallel to line n through BC">
          <ParallelProofFigure />
        </Figure>
      </div>

      <Worked title="The Proof">
        <p>
          Straight lines <span className="math">m</span> and <span className="math">n</span> are parallel.
          Line <span className="math">k</span> cuts them at A and B, and line <span className="math">p</span>{" "}
          cuts them at A and C.
        </p>
        <Steps
          items={[
            "∵ ∠4, ∠1 and ∠5 together form a straight angle at A",
            "∴ m(∠4) + m(∠1) + m(∠5) = 180°",
            "∵ m(∠4) = m(∠2)   (alternate interior angles)",
            "∵ m(∠5) = m(∠3)   (alternate interior angles)",
            "∴ m(∠2) + m(∠1) + m(∠3) = 180°   ∎",
          ]}
        />
      </Worked>

      <Worked title="Example 1 — Angles written as expressions">
        <p>
          The three interior angles of a triangle measure{" "}
          <span className="math text-primary">(3x − 1)°</span>,{" "}
          <span className="math text-primary">(4x − 2)°</span> and{" "}
          <span className="math text-primary">(2x + 21)°</span>. Find the value of x.
        </p>
        <Steps
          items={[
            "∵ The sum of the interior angles = 180°",
            "∴ (3x − 1) + (4x − 2) + (2x + 21) = 180",
            "∴ 9x + 18 = 180",
            "∴ 9x = 162",
            "∴ x = 162 ÷ 9 = 18",
          ]}
        />
        <p className="text-muted-foreground">
          Check: 53° + 70° + 57° = 180° ✔
        </p>
      </Worked>

      <div className="grid gap-6 md:grid-cols-2">
        <Worked title="Example 2 — With parallel lines">
          <p>
            In triangle ABC, <span className="math">DE ∥ BC</span>, m(∠A) = 75° and m(∠C) = 60°. Find, with
            proof, m(∠ADE).
          </p>
          <Steps
            items={[
              "∵ DE ∥ BC and AC is a transversal",
              "∴ m(∠AED) = m(∠ACB) = 60°   (corresponding angles)",
              "In △ADE: sum of interior angles = 180°",
              "∴ m(∠ADE) = 180° − (75° + 60°) = 45°",
            ]}
          />
        </Worked>
        <Figure caption="DE is parallel to BC, so corresponding angles are equal">
          <ParallelInsideFigure />
        </Figure>
      </div>

      <Note title="Try it yourself">
        <ol className="ml-4 list-decimal space-y-2">
          <li>
            A triangle has angles of measure y°, (y + 20)° and (2y − 8)°. Find y.{" "}
            <span className="text-muted-foreground">(Answer: y = 42)</span>
          </li>
          <li>
            In triangle ABC, m(∠A) = 70° and m(∠C) = 50°. Find m(∠B).{" "}
            <span className="text-muted-foreground">(Answer: 60°)</span>
          </li>
          <li>
            If all three angles are equal, what is each one?{" "}
            <span className="text-muted-foreground">(Answer: 60°)</span>
          </li>
        </ol>
      </Note>
    </Page>
  );
}
