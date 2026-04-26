import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageBits";
import { motion } from "framer-motion";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "Languages, frameworks, and infrastructure tools Kaushal works with.",
      },
      { property: "og:title", content: "Technologies — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Tools and tech stack across backend, frontend, and DevOps.",
      },
    ],
  }),
  component: TechPage,
});

type TechItem = {
  name: string;
  logo: string;
  url: string;
  /** shown as a badge on the card — only a few select items */
  badge?: "proficient";
  color: string;
  /** true = shown in "Daily Drivers" section */
  daily: boolean;
  /** short initials shown as fallback if the logo fails to load */
  initials: string;
};

const TECH: TechItem[] = [
  // ── Daily Drivers ──────────────────────────────────────────────────────────
  {
    name: "C#",
    logo: "https://cdn.simpleicons.org/csharp",
    url: "https://learn.microsoft.com/dotnet/csharp/",
    badge: "proficient",
    color: "#68217a",
    daily: true,
    initials: "C#",
  },
  {
    name: "Go",
    logo: "https://cdn.simpleicons.org/go",
    url: "https://go.dev",
    color: "#00acd7",
    daily: false,
    initials: "Go",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript",
    url: "https://www.typescriptlang.org",
    color: "#3178c6",
    daily: true,
    initials: "TS",
  },
  {
    name: ".NET Core",
    logo: "https://cdn.simpleicons.org/dotnet",
    url: "https://dotnet.microsoft.com",
    badge: "proficient",
    color: "#512bd4",
    daily: true,
    initials: ".N",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react",
    url: "https://react.dev",
    badge: "proficient",
    color: "#61dafb",
    daily: true,
    initials: "Re",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql",
    url: "https://www.postgresql.org",
    badge: "proficient",
    color: "#336791",
    daily: true,
    initials: "PG",
  },
  {
    name: "Docker",
    logo: "https://cdn.simpleicons.org/docker",
    url: "https://www.docker.com",
    color: "#2496ed",
    daily: true,
    initials: "Do",
  },
  {
    name: "Linux",
    logo: "https://cdn.simpleicons.org/linux",
    url: "https://kernel.org",
    color: "#fcc624",
    daily: false,
    initials: "Lx",
  },

  // ── Also in my toolkit ─────────────────────────────────────────────────────
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python",
    url: "https://www.python.org",
    color: "#3572a5",
    daily: false,
    initials: "Py",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#f7df1e",
    daily: false,
    initials: "JS",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.simpleicons.org/vuedotjs",
    url: "https://vuejs.org",
    color: "#42b883",
    daily: false,
    initials: "Vu",
  },
  {
    name: "Nuxt.js",
    logo: "https://cdn.simpleicons.org/nuxtdotjs",
    url: "https://nuxt.com",
    color: "#00dc82",
    daily: false,
    initials: "Nx",
  },
  {
    name: "Go Fiber",
    logo: "https://gofiber.io/assets/images/logo.svg",
    url: "https://gofiber.io",
    color: "#00acd7",
    daily: false,
    initials: "GF",
  },
  {
    name: "Terraform",
    logo: "https://cdn.simpleicons.org/terraform",
    url: "https://www.terraform.io",
    color: "#7b42bc",
    daily: false,
    initials: "Tf",
  },
  {
    name: "GitHub Actions",
    logo: "https://cdn.simpleicons.org/githubactions",
    url: "https://github.com/features/actions",
    color: "#2088ff",
    daily: false,
    initials: "GA",
  },
  {
    name: "MySQL",
    logo: "https://cdn.simpleicons.org/mysql",
    url: "https://www.mysql.com",
    color: "#00758f",
    daily: false,
    initials: "My",
  },
  {
    name: "SQLite",
    logo: "https://cdn.simpleicons.org/sqlite",
    url: "https://sqlite.org",
    color: "#003b57",
    daily: false,
    initials: "SQ",
  },
];

function TechCard({ tech, i }: { tech: TechItem; i: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.a
      href={tech.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.04 * i, duration: 0.35 }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-5"
    >
      {/* Proficient badge — absolute positioned in top right */}
      {tech.badge === "proficient" && (
        <span
          className="absolute right-2.5 top-2.5 rounded-full bg-primary px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary-foreground shadow-sm"
        >
          Proficient
        </span>
      )}

      {/* Logo with glow */}
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-110"
        style={{ background: `${tech.color}22` }}
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-60"
          style={{ background: tech.color }}
        />
        {imgFailed ? (
          <span
            className="relative text-sm font-bold"
            style={{ color: tech.color }}
          >
            {tech.initials}
          </span>
        ) : (
          <img
            src={tech.logo}
            alt={`${tech.name} logo`}
            className="relative h-6 w-6 object-contain"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      {/* Name */}
      <div className="w-full">
        <div className="text-sm font-semibold text-foreground">{tech.name}</div>
        <div className="mt-0.5 text-[10px] text-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Visit site ↗
        </div>
      </div>
    </motion.a>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        <div className="flex-1 border-t border-border" />
      </div>
      <p className="mt-1 text-xs text-faint">{subtitle}</p>
    </div>
  );
}

function TechPage() {
  const daily = TECH.filter((t) => t.daily).sort((a, b) => {
    if (a.badge === "proficient" && b.badge !== "proficient") return -1;
    if (a.badge !== "proficient" && b.badge === "proficient") return 1;
    return 0;
  });
  const toolkit = TECH.filter((t) => !t.daily);

  return (
    <AppLayout>
      <PageHeader
        title="Technologies"
        subtitle="Tools I work with — split by how often they show up in my day."
      />

      {/* Daily Drivers */}
      <div className="surface-panel mb-5 p-5 sm:p-6">
        <SectionHeader
          title="Daily Drivers"
          subtitle="These open on my screen before my first sip of chai."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {daily.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} i={i} />
          ))}
        </div>
      </div>

      {/* Also in my toolkit */}
      <div className="surface-panel p-5 sm:p-6">
        <SectionHeader
          title="Also in my toolkit"
          subtitle="Technologies I've shipped with — might not be daily, but I know my way around."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {toolkit.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} i={i} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
