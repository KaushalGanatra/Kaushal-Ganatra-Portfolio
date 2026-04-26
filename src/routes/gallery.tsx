import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader, Panel } from "@/components/PageBits";
import { galleryItems } from "@/data/portfolio";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kaushal Ganatra" },
      {
        name: "description",
        content: "Snapshots from college, work, and life around Rajkot.",
      },
      { property: "og:title", content: "Gallery — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Moments from the journey — work, study, and life.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <AppLayout>
      <PageHeader title="Gallery" subtitle="Moments from work, college, and life." />
      <Panel>
        <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:grid-cols-3 md:auto-rows-[140px]">
          {galleryItems.map((g, i) => (
            <div
              key={i}
              style={{ background: g.color }}
              className={`flex items-end rounded-2xl p-3 transition-opacity hover:opacity-90 ${
                g.tall ? "row-span-2" : ""
              }`}
            >
              <span className="rounded-md bg-black/35 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </Panel>
    </AppLayout>
  );
}
