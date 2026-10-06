import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown, Lock, Server, Wallet } from "lucide-react";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { APP_URL } from "@/config";

export interface FAQItem {
  q: string;
  a: string;
}

export interface ShowcaseSection {
  eyebrow?: string;
  title: string;
  text: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export interface KeywordLandingProps {
  eyebrow: string;
  h1: React.ReactNode;
  intro: string;
  bullets: string[];
  body: React.ReactNode;
  faqs: FAQItem[];
  ctaText?: string;
  showcase?: ShowcaseSection[];
  stats?: { label: string; value: string }[];
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-archive-border/60">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-5 text-left group"
          >
            <span className="font-serif text-base md:text-lg text-primary leading-snug group-hover:text-sepia transition-colors">
              {f.q}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-sepia shrink-0 mt-0.5 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function Showcase({ section, index }: { section: ShowcaseSection; index: number }) {
  const imageRight =
    (section.imagePosition ?? (index % 2 === 0 ? "right" : "left")) === "right";
  return (
    <section className="border-t border-archive-border/40">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className={imageRight ? "md:order-1" : "md:order-2"}>
          {section.eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-3 font-medium">
              {section.eyebrow}
            </p>
          )}
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight leading-[1.15]">
            {section.title}
          </h2>
          <p className="mt-5 text-muted-foreground leading-[1.8]">{section.text}</p>
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {section.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 items-start text-sm text-foreground">
                  <Check className="h-4 w-4 text-sepia mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={imageRight ? "md:order-2" : "md:order-1"}>
          <div className="rounded-xl overflow-hidden border border-archive-border bg-paper/60 shadow-sm">
            <img
              src={section.image}
              alt={section.imageAlt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyStrip() {
  const cards = [
    {
      icon: Lock,
      title: "Ihre Daten gehören Ihnen",
      text: "Dokumente und Analysen sind ausschließlich Ihrem Konto zugänglich. Jederzeit löschbar.",
    },
    {
      icon: Server,
      title: "Verarbeitung in der EU",
      text: "Alle Uploads werden DSGVO-konform auf Servern in der Europäischen Union verarbeitet.",
    },
    {
      icon: Wallet,
      title: "Keine versteckten Kosten",
      text: "Die ersten 5 Seiten pro Konto gratis. Danach strikt pro Seite. Kein Abo, kein Paket.",
    },
  ];
  return (
    <section className="border-t border-archive-border/60 bg-paper/40">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-2 text-center">
          Vertrauen & Datenschutz
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-primary tracking-tight text-center mb-12">
          Ihre Dokumente bleiben privat
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-lg border border-archive-border bg-paper/70 p-6"
            >
              <div className="h-10 w-10 rounded-md bg-sepia/12 border border-sepia/30 grid place-items-center mb-4">
                <Icon className="h-4 w-4 text-sepia" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsStrip({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <section className="border-t border-archive-border/60 bg-paper/70">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-2xl md:text-3xl text-primary">{s.value}</div>
            <div className="text-xs uppercase tracking-[0.14em] text-sepia mt-1.5">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function KeywordLanding({
  eyebrow,
  h1,
  intro,
  bullets,
  body,
  faqs,
  ctaText = "Kostenlos starten – 5 Seiten gratis",
  showcase,
  stats,
}: KeywordLandingProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-archive-border/60">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 15% 0%, color-mix(in oklab, var(--sepia) 22%, transparent), transparent 50%), radial-gradient(ellipse at 85% 40%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 50%)",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sepia/30 to-transparent" />
          <div className="max-w-4xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-24">
            <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-5 font-medium">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-primary max-w-3xl">
              {h1}
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {intro}
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm max-w-2xl">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2.5 items-start">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-sepia/15 border border-sepia/30 flex items-center justify-center shrink-0">
                    <Check className="h-2.5 w-2.5 text-sepia" />
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={`${APP_URL}/login`}>
                <Button size="lg" className="rounded-full px-7 h-12 shadow-md">
                  {ctaText} <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </a>
              <Link to="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 h-12 border-archive-border hover:border-sepia/60"
                >
                  Mehr über Verbatim
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {stats && stats.length > 0 && <StatsStrip stats={stats} />}

        {showcase?.map((s, i) => <Showcase key={s.title} section={s} index={i} />)}

        <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 border-t border-archive-border/40">
          <div
            className="space-y-6 text-foreground leading-relaxed
            [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-primary [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:first:mt-0
            [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-primary [&_h3]:mt-8 [&_h3]:mb-2
            [&_p]:text-muted-foreground [&_p]:leading-[1.8]
            [&_li]:text-muted-foreground [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2
            [&_li]:flex [&_li]:gap-2.5 [&_li]:items-start
            [&_strong]:text-foreground [&_strong]:font-medium
            [&_em]:text-sepia [&_em]:not-italic [&_em]:font-medium"
          >
            {body}
          </div>
        </section>

        <PrivacyStrip />

        <section className="border-t border-archive-border/60 bg-paper/60">
          <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-1">Preise</p>
              <p className="font-serif text-xl text-primary">Erste 5 Seiten gratis</p>
              <p className="text-sm text-muted-foreground mt-1">
                Danach 4,80 € pro Seite · ohne Abo · ohne Pakete
              </p>
            </div>
            <a href={`${APP_URL}/login`}>
              <Button className="rounded-full px-6 whitespace-nowrap" variant="outline">
                Jetzt testen <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </a>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-2">Häufige Fragen</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight mb-10">
            FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="border-t border-archive-border/60 bg-paper/40">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full border border-sepia/30 bg-sepia/8 text-sepia text-xs uppercase tracking-widest mb-6">
              Unverbindlich testen
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
              Jetzt loslegen
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Die ersten 5 Seiten pro Konto sind kostenlos – keine Karte nötig, kein Abo.
            </p>
            <div className="mt-8">
              <a href={`${APP_URL}/login`}>
                <Button size="lg" className="rounded-full px-8 h-12 shadow-md">
                  {ctaText} <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export function buildFaqJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
