import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, MapPin } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  profile,
  stats,
  experiences,
  techGroups,
  personalWriting,
  currently,
  interests,
} from "@/data/portfolio";
import profileImg from "@/assets/profile.png";
import profilePersonalImg from "@/assets/profile-personal.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaushal Ganatra — Software Engineer Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Kaushal Ganatra — Software Engineer specializing in .NET Core, React, Golang, and AI-assisted development.",
      },
      { property: "og:title", content: "Kaushal Ganatra — Software Engineer" },
      {
        property: "og:description",
        content: "Building scalable web apps. Backend, frontend, and AI-assisted dev.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { mode } = usePortfolio();
  return (
    <AppLayout>{mode === "pro" ? <ProHome /> : <PersonalHome />}</AppLayout>
  );
}

function ProfilePhoto({ mode }: { mode: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mx-auto flex-shrink-0"
    >
      <div className="absolute -inset-2 rounded-3xl bg-primary opacity-20 blur-2xl" />
      <div className="relative h-44 w-44 overflow-hidden rounded-3xl border-2 border-primary/40 shadow-elegant md:h-56 md:w-56">
        <img
          src={mode === "pro" ? profileImg : profilePersonalImg}
          alt={`${profile.name} portrait`}
          className="h-full w-full object-cover"
          width={384}
          height={384}
        />
      </div>
      <div className="absolute -bottom-2 -right-2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground shadow-lg">
        {mode === "pro" ? "Full-Stack Software Engineer" : "Curious Human"}
      </div>
    </motion.div>
  );
}

function ProHome() {
  return (
    <div className="space-y-5">
      <div className="surface-panel hero-glow relative overflow-hidden p-6 md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
          <ProfilePhoto mode="pro" />
          <div className="min-w-0 flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-[11px] text-primary"
            >
              <Sparkles size={11} />
              available for opportunities
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Turning <span className="text-primary">ideas</span> into <span className="text-primary">scalable,
                <br />
                production-ready systems</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:mx-0 md:text-base"
            >
              I design and build backend-heavy applications with performance and maintainability in mind.
              Exploring AI-driven development and smarter engineering workflows.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <a
                href="/Kaushal_Ganatra_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download size={14} /> Download CV
              </a>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-2 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View Experience <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* COMMENTED OUT: 4 stats cards (years exp, companies, projects, certifications)
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="surface-panel-2 p-4 text-center"
          >
            <div className="text-2xl font-semibold text-primary md:text-3xl">{s.n}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-faint">
              {s.l}
            </div>
          </motion.div>
        ))}
      </div>
      */}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="surface-panel min-w-0 p-5 md:p-6">
          <div className="mb-4 text-[10px] font-medium uppercase tracking-wider text-faint">
            Recent Experience
          </div>
          <div className="space-y-3">
            {experiences.slice(0, 3).map((e) => (
              <div
                key={e.role + e.period}
                className="flex flex-col gap-1 border-b border-border pb-3 sm:flex-row sm:gap-3 last:border-none last:pb-0"
              >
                <div className="text-[11px] text-faint sm:min-w-[80px] sm:pt-1">{e.period}</div>
                <div className="hidden mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary sm:block" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary sm:hidden" />
                    {e.role}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2 sm:truncate sm:line-clamp-none">
                    {e.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel min-w-0 p-5 md:p-6">
          <div className="mb-4 text-[10px] font-medium uppercase tracking-wider text-faint">
            Top Tech
          </div>
          <div className="flex flex-wrap gap-2">
            {techGroups
              .flatMap((g) => g.levels[0]?.chips ?? [])
              .slice(0, 12)
              .map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/30 bg-primary-soft px-3 py-1.5 text-xs text-primary"
                >
                  {t}
                </span>
              ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={12} /> {profile.location}
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalHome() {
  return (
    <div className="space-y-5">
      <div className="surface-panel hero-glow p-6 md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
          <ProfilePhoto mode="personal" />
          <div className="min-w-0 flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Beyond the code —
              <br />a <span className="text-primary">curious human</span>{" "}
              from Rajkot.
            </motion.h1>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:mx-0 md:text-base">
              Outside work I read, write, and chase ideas across psychology, philosophy,
              and the craft of building things.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border-strong bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="surface-panel p-5 md:p-6">
          <div className="mb-4 text-[10px] font-medium uppercase tracking-wider text-faint">
            Recent Writing
          </div>
          <div className="flex min-h-[120px] flex-col items-center justify-center py-6 text-center">
            <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              Still writing
              <span className="flex gap-1 px-1">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
                  className="h-1 w-1 rounded-full bg-primary"
                />
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
                  className="h-1 w-1 rounded-full bg-primary"
                />
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
                  className="h-1 w-1 rounded-full bg-primary"
                />
              </span>
            </div>
            <p className="mt-2 text-xs text-faint italic">Curating thoughts on code and life.</p>
          </div>
          {/* COMMENTED OUT: Recent Writing items
          {personalWriting.slice(0, 3).map((p) => (
            <div
              key={p.title}
              className="border-b border-border py-3 last:border-none last:pb-0"
            >
              <div className="mb-1 inline-block rounded-full border border-primary/30 bg-primary-soft px-2 py-0.5 text-[10px] text-primary">
                {p.cat}
              </div>
              <div className="text-sm font-medium text-foreground">{p.title}</div>
              <div className="mt-0.5 text-xs text-faint">{p.meta}</div>
            </div>
          ))}
          */}
        </div>
        <div className="surface-panel p-5 md:p-6">
          <div className="mb-4 text-[10px] font-medium uppercase tracking-wider text-faint">
            Currently
          </div>
          <div className="flex min-h-[120px] flex-col items-center justify-center py-6 text-center">
            <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              Building section
              <span className="flex gap-1 px-1">
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
                  className="h-1 w-1 rounded-full bg-primary"
                />
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                  className="h-1 w-1 rounded-full bg-primary"
                />
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                  className="h-1 w-1 rounded-full bg-primary"
                />
              </span>
            </div>
            <p className="mt-2 text-xs text-faint italic">Live updates coming soon.</p>
          </div>
          {/* COMMENTED OUT: Currently items
          <div className="space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-faint">Reading</span>
              <span className="text-right text-foreground">{currently.reading}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-faint">Watching</span>
              <span className="text-right text-foreground">{currently.watching}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-faint">Listening</span>
              <span className="text-right text-foreground">{currently.listening}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-faint">Building</span>
              <span className="text-right text-foreground">{currently.building}</span>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
