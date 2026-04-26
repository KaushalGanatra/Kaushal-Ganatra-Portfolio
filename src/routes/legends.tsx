import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader, Panel } from "@/components/PageBits";
import { legends } from "@/data/portfolio";

export const Route = createFileRoute("/legends")({
  head: () => ({
    meta: [
      { title: "Unsung Legends — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "Pioneers in computing whose contributions shaped the internet but rarely get the spotlight.",
      },
      { property: "og:title", content: "Unsung Legends — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "A short tribute to the quiet pioneers of computing.",
      },
    ],
  }),
  component: LegendsPage,
});

function LegendsPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Unsung Legends"
        subtitle="Computer pioneers who shaped everything — and most have never heard of them."
      />
      <Panel>
        {legends.map((l, i) => (
          <div
            key={l.name}
            className={`flex gap-4 py-4 ${
              i !== legends.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary-soft text-sm font-semibold text-primary">
              {l.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-base font-semibold text-foreground">{l.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l.what}</div>
              <div className="mt-1.5 text-xs text-faint">{l.era}</div>
            </div>
          </div>
        ))}
      </Panel>
    </AppLayout>
  );
}
