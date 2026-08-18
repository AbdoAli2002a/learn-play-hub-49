import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/SiteChrome";
import { MissingAngleSprint } from "@/components/games/MissingAngleSprint";
import { TriangleBuilder } from "@/components/games/TriangleBuilder";
import { ExteriorAngleChallenge } from "@/components/games/ExteriorAngleChallenge";
import { SortingActivity } from "@/components/games/SortingActivity";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Triangle Activities & Learning Games — Practice Interactively" },
      {
        name: "description",
        content:
          "Interactive triangle games: Missing Angle Sprint, Triangle Builder with live inequality check, Exterior Angle Challenge and a sorting activity.",
      },
      { property: "og:title", content: "Triangle Activities & Learning Games" },
      {
        property: "og:description",
        content: "Four interactive games to master angles and the triangle inequality.",
      },
    ],
  }),
  component: Activities,
});

function Activities() {
  return (
    <Page
      eyebrow="Section 04"
      title="Activities, Training & Learning Games"
      intro="Four interactive drills built on the lesson rules. Everything is scored instantly so you can see where you slip."
    >
      <MissingAngleSprint />
      <TriangleBuilder />
      <ExteriorAngleChallenge />
      <SortingActivity />
    </Page>
  );
}
