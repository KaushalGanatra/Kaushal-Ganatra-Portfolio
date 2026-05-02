import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageBits";
import { motion } from "framer-motion";
import { clientWorks, type ClientWork } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/client-work")({
  head: () => ({
    meta: [
      { title: "Client Work — Kaushal Ganatra" },
      {
        name: "description",
        content: "A premium showcase of real-world freelance and product work.",
      },
    ],
  }),
  component: ClientWorkPage,
});

function ClientCard({ work, i }: { work: ClientWork; i: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const isLongText = work.description.length > 110;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elegant overflow-hidden"
    >
      {/* Subtle background glow on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="relative flex flex-shrink-0 items-center justify-start min-h-[48px]">
            {imgFailed ? (
              <span className="text-2xl font-bold text-primary tracking-tight">
                {work.name.substring(0, 2).toUpperCase()}
              </span>
            ) : (
              <img
                src={work.logo}
                alt={`${work.name} logo`}
                className="max-h-12 w-auto max-w-[160px] object-contain rounded-sm"
                loading="lazy"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>
          {work.link && (
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-primary-soft p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label={`Visit ${work.name}`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-faint">
          {work.projectType}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {work.name}
        </h3>
        <div className="mb-6">
          <p
            className={`text-sm text-muted-foreground transition-all duration-200 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {work.description}
          </p>
          {isLongText && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1.5 cursor-pointer text-[11px] font-semibold tracking-wide uppercase text-primary/80 transition-colors hover:text-primary"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      <div>
        <div className="mt-auto border-t border-border pt-4">
          {work.link ? (
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-surface-2 px-4 py-2 text-xs font-medium text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            >
              View Project <ExternalLink size={12} />
            </a>
          ) : (
            <div className="w-full text-center text-xs text-faint italic">
              {work.isPrivate ? "Private internal project" : "Details available on request"}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ClientWorkPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Client Work"
        subtitle="A few things I’ve built across freelance and product work."
      />

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {clientWorks.map((work, i) => (
          <ClientCard key={work.name} work={work} i={i} />
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-muted-foreground italic border-t border-border pt-6">
        Projects include independent work as well as collaborative contributions.
      </div>
    </AppLayout>
  );
}
