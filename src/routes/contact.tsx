import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Send, Globe, Laugh } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader, Panel } from "@/components/PageBits";
import { profile } from "@/data/portfolio";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kaushal Ganatra" },
      {
        name: "description",
        content:
          "Get in touch with Kaushal Ganatra for software engineering work, consulting, or a chat.",
      },
      { property: "og:title", content: "Contact — Kaushal Ganatra" },
      {
        property: "og:description",
        content: "Open to engineering work, consulting, and good conversations.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    const subject = encodeURIComponent(`Portfolio: message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  }

  return (
    <AppLayout>
      <PageHeader
        title="Get in Touch"
        subtitle="Open to opportunities, freelance work, and a good conversation."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Panel title="Send a message">
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="mb-1 block text-xs text-faint">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-faint">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-faint">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or just say hi…"
                rows={5}
                className="w-full resize-y rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send size={14} /> Send Message
            </button>
          </form>
        </Panel>

        <Panel title="Find me elsewhere">
          <div className="space-y-1">
            <ContactRow
              icon={<Mail size={14} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={<MapPin size={14} />}
              label="Location"
              value={profile.location}
            />
            <ContactRow
              icon={<Github size={14} />}
              label="GitHub"
              value="@KaushalGanatra"
              href={profile.github}
            />
            <ContactRow
              icon={<Linkedin size={14} />}
              label="LinkedIn"
              value="/in/kaushal-ganatra"
              href={profile.linkedin}
            />
            {/* Website — humorous row */}
            <div className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/30 bg-primary-soft text-primary">
                <Globe size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-faint">Website</div>
                <div className="text-sm text-foreground">{profile.website}</div>
                <div className="mt-1 flex items-center gap-1 text-[11px] italic text-muted-foreground">
                  <span style={{ fontFamily: ' "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Android Emoji", EmojiSymbols, sans-serif' }} className="text-sm not-italic">😂</span>
                  You're literally on it right now.
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </AppLayout>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-3 transition-colors hover:border-border hover:bg-surface-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/30 bg-primary-soft text-primary">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-faint">{label}</div>
        <div className="truncate text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
