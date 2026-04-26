import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader, Panel } from "@/components/PageBits";
import { education, certifications, achievements } from "@/data/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "MCA from Marwadi University and Gold-Medalist BCA from Christ College, Rajkot.",
      },
      { property: "og:title", content: "Education — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Academic journey, certifications, and achievements.",
      },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <AppLayout>
      <PageHeader title="Education" subtitle="Where I learned the foundations." />
      <Panel title="Degrees" className="mb-4">
        <div className="space-y-4">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="border-b border-border pb-4 last:border-none last:pb-0"
            >
              <div className="text-xs text-faint">{ed.period}</div>
              <div className="mt-1 text-base font-semibold text-foreground">
                {ed.degree}
              </div>
              <div className="text-sm text-muted-foreground">{ed.institution}</div>
              <div className="mt-1 text-sm text-primary">{ed.score}</div>
            </div>
          ))}
        </div>
      </Panel>
      <div className="grid gap-4 md:grid-cols-2">
        <Panel title="Certifications">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-primary">•</span>
                {c}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Achievements">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-primary">★</span>
                {a}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </AppLayout>
  );
}
