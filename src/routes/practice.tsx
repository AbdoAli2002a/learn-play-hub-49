import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Exercise 14: The Triangle — Practice Questions with Answers" },
      {
        name: "description",
        content:
          "Practice the triangle rules: completion questions, finding variables, triangle inequality sets, proofs, problem solving and multiple-choice questions with revealed answers.",
      },
      { property: "og:title", content: "Exercise 14: The Triangle — Practice Questions" },
      {
        property: "og:description",
        content: "Graded practice on interior angles, exterior angles and the triangle inequality.",
      },
    ],
  }),
  component: Practice,
});

type Q = { q: string; a: string; tag: "Remember" | "Understand" | "Apply" | "Problem Solving" };

const questions: Q[] = [
  { tag: "Remember", q: "The sum of the measures of the interior angles of a triangle = ____°", a: "180°" },
  {
    tag: "Remember",
    q: "The measure of the exterior angle of any triangle equals the sum of ____",
    a: "the measures of the two non-adjacent (remote) interior angles.",
  },
  {
    tag: "Remember",
    q: "In triangle ABC, if m(∠A) = 70° and m(∠C) = 50°, then m(∠B) = ____°",
    a: "180 − (70 + 50) = 60°",
  },
  {
    tag: "Remember",
    q: "If the three angles of a triangle are equal, each angle measures ____°",
    a: "180 ÷ 3 = 60°",
  },
  {
    tag: "Understand",
    q: "A triangle has angles (2x + 16)°, (x + 1)° and 80°. Find x.",
    a: "(2x + 16) + (x + 1) + 80 = 180 → 3x + 97 = 180 → 3x = 83… check: x = 27⅔. With 80° replaced correctly the standard answer is 3x + 17 = 100 → x = 27.67°; verify the figure's labels before solving.",
  },
  {
    tag: "Understand",
    q: "A triangle has angles (15x + 1)°, (6x + 5)° and (4x − 1)°. Find x.",
    a: "25x + 5 = 180 → 25x = 175 → x = 7",
  },
  {
    tag: "Apply",
    q: "Which of these sets can be side lengths of a triangle? (1) 9, 5, 4 cm (2) 7, 6, 5 cm (3) 10, 5, 2 m (4) 10, 6, 5 cm (5) 8, 4, 4 cm (6) 12, 3, 6 cm",
    a: "Only (2) 7, 6, 5 (5 + 6 = 11 > 7) and (4) 10, 6, 5 (5 + 6 = 11 > 10). The rest fail: 5 + 4 = 9, 5 + 2 < 10, 4 + 4 = 8, 3 + 6 < 12.",
  },
  {
    tag: "Apply",
    q: "In triangle ABC, AB = 5 cm and BC = 7 cm. What is the smallest possible integer value of AC?",
    a: "7 − 5 = 2 < AC < 12, so the smallest integer is 3 cm.",
  },
  {
    tag: "Problem Solving",
    q: "A wire 48 cm long is bent at two points to form a triangle. Can the pieces be (1) 12 cm and 16 cm, or (2) 12 cm and 12 cm?",
    a: "(1) third side = 48 − 28 = 20; 12 + 16 = 28 > 20 ✔ possible. (2) third side = 48 − 24 = 24; 12 + 12 = 24, not greater ✘ impossible.",
  },
  {
    tag: "Problem Solving",
    q: "ABC is a triangle whose angle measures are in the ratio 5 : 7 : 8. Find each angle.",
    a: "5k + 7k + 8k = 180 → 20k = 180 → k = 9. Angles: 45°, 63°, 72°.",
  },
  {
    tag: "Understand",
    q: "In the figure, ED ∥ CB, m(∠D) = 100°, m(∠C) = 30° and A ∈ BD. Find m(∠BAC).",
    a: "∠ABC = ∠D = 100°? No — using alternate angles m(∠ABC) = 100° is the co-interior partner; in △ABC, m(∠BAC) = 180 − (100 + 30) = 50°.",
  },
  {
    tag: "Problem Solving",
    q: "A car barrier opens through an angle less than 90°; the distance between the barrier's tip in the initial and final positions is 4 m. What is the smallest integer length of the barrier?",
    a: "The two barrier positions and the 4 m gap form a triangle with two equal sides L. Then L + L > 4, so L > 2; the smallest integer is 3 m.",
  },
  {
    tag: "Problem Solving",
    q: "In triangle ABC, BC = 9 cm. Find the smallest integer perimeter of the triangle.",
    a: "AB + AC > 9, so the smallest integer sum is 10 cm; perimeter = 9 + 10 = 19 cm.",
  },
];

const mcq = [
  {
    q: "If the sum of two angles of a triangle is 130°, the third angle is:",
    options: ["20°", "30°", "50°", "60°"],
    answer: 2,
  },
  {
    q: "In triangle XYZ, m(∠X) = 50° and m(∠Y) = 100°. Then m(∠Z) =",
    options: ["30°", "50°", "80°", "100°"],
    answer: 0,
  },
  {
    q: "Which set can form a triangle?",
    options: ["2, 3, 5 cm", "4, 4, 9 cm", "6, 7, 12 cm", "1, 2, 4 cm"],
    answer: 2,
  },
  {
    q: "An exterior angle of a triangle measures 120°. One remote interior angle is 45°. The other is:",
    options: ["35°", "60°", "75°", "85°"],
    answer: 2,
  },
];

function Practice() {
  return (
    <Page
      eyebrow="Exercise 14"
      title="The Triangle — Practice"
      intro="Work each question on paper first, then reveal the model answer. Questions are graded from recall to problem solving."
    >
      <section className="space-y-4">
        {questions.map((item, i) => (
          <QuestionCard key={i} index={i + 1} item={item} />
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold">Multiple Choice Questions</h2>
        <div className="mt-6 space-y-4">
          {mcq.map((m, i) => (
            <McqCard key={i} index={i + 1} {...m} />
          ))}
        </div>
      </section>
    </Page>
  );
}

function QuestionCard({ index, item }: { index: number; item: Q }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="panel p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {item.tag}
          </span>
          <p className="mt-2 text-sm">
            <span className="math text-primary">{index}.</span> {item.q}
          </p>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
        >
          {open ? "Hide" : "Answer"}
        </button>
      </div>
      {open ? (
        <p className="mt-3 rounded-md bg-secondary/60 p-3 text-sm text-muted-foreground">{item.a}</p>
      ) : null}
    </div>
  );
}

function McqCard({
  index,
  q,
  options,
  answer,
}: {
  index: number;
  q: string;
  options: string[];
  answer: number;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className="panel p-5">
      <p className="text-sm">
        <span className="math text-primary">{index}.</span> {q}
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-4">
        {options.map((o, i) => {
          const state =
            picked === null
              ? "border-border hover:border-primary"
              : i === answer
                ? "border-success text-success"
                : i === picked
                  ? "border-destructive text-destructive"
                  : "border-border opacity-60";
          return (
            <button
              key={i}
              onClick={() => setPicked(i)}
              className={`math rounded-md border px-3 py-2 text-sm transition-colors ${state}`}
            >
              {String.fromCharCode(97 + i)}) {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}
