import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader, Panel } from "@/components/PageBits";
import { experiences, education, certifications, achievements } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "Work history of Kaushal Ganatra — software engineering across .NET Core, React, Golang, and Shopify.",
      },
      { property: "og:title", content: "Experience — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Engineering roles at ez enRoute, Improwised, and freelance clients.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperienceCard({ e, index }: { e: (typeof experiences)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div
          className={`mt-1 h-4 w-4 flex-shrink-0 rounded-full border-2 shadow-sm transition-colors ${e.current
              ? "border-primary bg-primary"
              : "border-border-strong bg-surface-2"
            }`}
        />
        {/* Connector line — shown for all but show nothing for last via CSS */}
        <div className="mt-1 w-0.5 flex-1 bg-border" />
      </div>

      {/* Card */}
      <div className="mb-6 min-w-0 flex-1 pb-1">
        {/* <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left"
          aria-expanded={open}
        > */}
          <div
            className={`surface-panel rounded-xl border p-4 transition-all sm:p-5 border-border hover:border-primary/30 hover:shadow-md`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {e.current && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                      Current
                    </span>
                  )}
                  <span className="text-[11px] text-faint">{e.period}</span>
                </div>
                <div className="mt-1.5 text-base font-semibold text-foreground">
                  {e.role}
                </div>
                <div className="mt-0.5 text-sm text-primary">{e.company}</div>
                <div className="mt-0.5 text-xs text-faint">{e.location}</div>
              </div>
              {/* <div
                className={`mt-1 flex-shrink-0 rounded-full border border-border bg-surface-2 p-1 transition-transform ${open ? "rotate-180" : ""
                  }`}
              >
                <ChevronDown size={14} className="text-muted-foreground" />
              </div> */}
            </div>

            {/* {!open && (
              <p className="mt-2 text-xs text-faint italic">
                Click to see what I built here →
              </p>
            )} */}
          </div>
        {/* </button> */}

        {/* <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-3 space-y-2 rounded-xl border border-border bg-surface-2 px-4 py-4 text-sm text-muted-foreground">
                {e.detail.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <span className="mt-0.5 flex-shrink-0 text-primary">▸</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <AppLayout>
      <PageHeader
        title="Experience"
        subtitle="Roles across product engineering, backend systems, and freelance work."
      />

      <Panel title="Timeline" className="mb-4">
        <div className="pt-2">
          {experiences.map((e, i) => (
            <ExperienceCard key={e.role + e.period} e={e} index={i} />
          ))}
        </div>
      </Panel>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel title="Education">
          <div className="space-y-4">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="border-b border-border pb-4 last:border-none last:pb-0"
              >
                <div className="text-xs text-faint">{ed.period}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {ed.degree}
                </div>
                <div className="text-xs text-muted-foreground">{ed.institution}</div>
                <div className="mt-1 text-xs text-primary">{ed.score}</div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Certifications &amp; Achievements">
          <div className="mb-4">
            <div className="mb-2 text-[11px] uppercase tracking-wider text-faint">
              Certifications
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-primary">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-wider text-faint">
              Achievements
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-primary">★</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Panel>
      </div>
    </AppLayout>
  );
}
