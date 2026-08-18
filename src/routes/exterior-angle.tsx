import { createFileRoute } from "@tanstack/react-router";
import { Page, Rule, Worked, Steps, Note } from "@/components/site/SiteChrome";
import { Figure, ExteriorAngleFigure } from "@/components/geometry/Figures";

export const Route = createFileRoute("/exterior-angle")({
  head: () => ({
    meta: [
      { title: "The Exterior Angle of a Triangle — Rule and Examples" },
      {
        name: "description",
        content:
          "Definition of an exterior angle of a triangle, the proof that it equals the sum of the two non-adjacent interior angles, and worked examples.",
      },
      { property: "og:title", content: "The Exterior Angle of a Triangle" },
      {
        property: "og:description",
        content: "Exterior angle rule proved step by step, with diagrams and solved problems.",
      },
    ],
  }),
  component: ExteriorAngle,
});

function ExteriorAngle() {
  return (
    <Page
      eyebrow="Section 02"
      title="The Exterior Angle of a Triangle"
      intro="Extend one side of a triangle and a new angle appears outside it. That angle carries information about the two angles farthest from it."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-xl font-semibold">What counts as an exterior angle?</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            If ABC is a triangle and D lies on ray CB but outside segment CB (that is,{" "}
            <span className="math">D ∈ CB→</span> and <span className="math">D ∉ CB</span>), then{" "}
            <span className="math text-primary">∠ABD</span> is an exterior angle of triangle ABC.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Careful: an angle drawn outside the triangle is <em>not</em> automatically an exterior angle. It
            must be formed by one side and the <strong>extension</strong> of an adjacent side. So if D is not
            on the ray BC, then ∠ACD is not an exterior angle of the triangle.
          </p>
        </div>
        <Figure caption="Side CB extended to D creates the exterior angle ∠ABD (angle 4)">
          <ExteriorAngleFigure />
        </Figure>
      </div>

      <Rule>
        The measure of an exterior angle of any triangle equals the sum of the measures of the two
        non-adjacent (remote) interior angles.
      </Rule>

      <Worked title="The Proof">
        <Steps
          items={[
            "∵ m(∠1) + m(∠2) + m(∠3) = 180°   (interior angles of the triangle) … (1)",
            "∵ ∠1 and ∠4 form a straight angle",
            "∴ m(∠1) + m(∠4) = 180°   … (2)",
            "From (1) and (2): m(∠4) = m(∠2) + m(∠3)   ∎",
          ]}
        />
        <p className="text-muted-foreground">
          In words: the exterior angle at B equals the sum of the interior angles at A and C.
        </p>
      </Worked>

      <Worked title="Example 3 — Two quick applications">
        <p className="font-semibold text-primary">1) Exterior angle unknown</p>
        <p>
          In triangle ABC the interior angles at A and B are 37° and 62°, and ∠ACD is an exterior angle of
          measure x°.
        </p>
        <Steps items={["∵ ∠ACD is an exterior angle of △ABC", "∴ x = 37 + 62 = 99"]} />

        <p className="mt-4 font-semibold text-primary">2) Interior angles unknown</p>
        <p>
          ∠ABD is an exterior angle of measure 74°, while the two remote interior angles are (4x − 1)° and
          (2x + 15)°.
        </p>
        <Steps
          items={[
            "∴ (4x − 1) + (2x + 15) = 74",
            "∴ 6x + 14 = 74",
            "∴ 6x = 60",
            "∴ x = 10",
          ]}
        />
      </Worked>

      <Note title="Try it yourself">
        In triangle LMN, P lies on LN extended. The remote interior angles measure 38° and 78°, and the
        exterior angle measures (5x − 4)°. Find x.{" "}
        <span className="text-muted-foreground">
          (5x − 4 = 38 + 78 = 116, so 5x = 120 and x = 24)
        </span>
      </Note>

      <Note title="Useful consequence">
        Because an exterior angle equals the sum of two positive interior angles, every exterior angle of a
        triangle is <strong>greater than either</strong> of its remote interior angles. This gives you a fast
        sanity check on any answer.
      </Note>
    </Page>
  );
}
