import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader, Panel } from "@/components/PageBits";
import { techBlog } from "@/data/portfolio";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Tech Blog — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "Writing on backend systems, AI-assisted development, PostgreSQL, Go, React, and Docker.",
      },
      { property: "og:title", content: "Tech Blog — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Notes on backend, AI-assisted development, and modern web stacks.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Tech Blog"
        subtitle="Notes from the trenches — backend, AI tooling, and the craft of shipping."
      />
      <Panel>
        {techBlog.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col gap-1 py-4 ${
              i !== techBlog.length - 1 ? "border-b border-border" : ""
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
