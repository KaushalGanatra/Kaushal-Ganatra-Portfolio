import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageBits";
import { businesses } from "@/data/portfolio";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Businesses — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "Companies and clients Kaushal Ganatra has built software for, from logistics to ecommerce.",
      },
      { property: "og:title", content: "Businesses — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Engineering work delivered across logistics, ecommerce, and SaaS.",
      },
    ],
  }),
  component: BizPage,
});

function BizPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Businesses"
        subtitle="Companies and clients I've shipped real software for."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((b) => (
          <div
            key={b.name}
            className="surface-panel-2 p-5 transition-colors hover:border-primary"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary-soft text-sm font-semibold text-primary">
              {b.initials}
            </div>
            <div className="text-base font-semibold text-foreground">{b.name}</div>
            <div className="mt-1.5 text-sm text-muted-foreground">{b.desc}</div>
            <span className="mt-3 inline-block rounded-full border border-primary/30 bg-primary-soft px-2.5 py-0.5 text-[10px] text-primary">
              {b.tag}
            </span>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
