import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader, Panel } from "@/components/PageBits";
import { personalWriting } from "@/data/portfolio";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "Personal essays on psychology, philosophy, books, and life from a small city.",
      },
      { property: "og:title", content: "Writing — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Essays on curiosity, philosophy, and being a builder.",
      },
    ],
  }),
  component: WritingPage,
});

function WritingPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Writing"
        subtitle="Essays on curiosity, philosophy, and the messy business of being a person."
      />
      <Panel>
        {personalWriting.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col gap-1 py-4 ${
              i !== personalWriting.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="inline-block w-fit rounded-full border border-primary/30 bg-primary-soft px-2 py-0.5 text-[10px] text-primary">
              {p.cat}
            </span>
            <div className="mt-1 text-base font-medium text-foreground transition-colors hover:text-primary">
              {p.title}
            </div>
            <div className="text-xs text-faint">{p.meta}</div>
          </div>
        ))}
      </Panel>
    </AppLayout>
  );
}
