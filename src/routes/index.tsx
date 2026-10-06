import { Link } from "react-router-dom";
import { SiteHeader, SiteFooter, APPLICATIONS } from "@/components/SiteChrome";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/config";
import {
  FileSearch,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
  BookOpen,
  Languages,
  Users,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

// TODO: Bild-URL anpassen, wenn du die Bilder selbst hostest
const SUETTERLIN_BEISPIEL = "/images/suetterlin-vorher-nachher.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <StatsStrip />
        <Applications />
        <Features />
        <HowItWorks />
        <ShowcasePreview />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, color-mix(in oklab, var(--sepia) 18%, transparent), transparent 55%), radial-gradient(ellipse at 80% 30%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 55%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-archive-border bg-paper/70 px-3 py-1 text-xs text-muted-foreground mb-6">
          <Sparkles className="h-3.5 w-3.5 text-sepia" />
          Urkundenanalyse für Erbenermittler
        </div>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-primary">
          Sütterlin, Kurrent & altdeutsche Urkunden
          <br className="hidden md:block" />
          <span className="italic text-sepia"> per KI übersetzen</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          Laden Sie Ihre Urkunden hoch und erhalten Sie in Minuten präzise Transkriptionen,
          Übersetzungen und genealogische Auswertungen – archivtauglich aufbereitet.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={`${APP_URL}/login`}>
            <Button size="lg" className="rounded-full px-7 h-12">
              Jetzt starten <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#pricing">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 border-archive-border"
            >
              Preise ansehen
            </Button>
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Die ersten <strong>5 Seiten gratis</strong> · danach 4,80 € pro Seite inkl. MwSt. ·
          Karte erst bei Bedarf hinterlegen.
        </p>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { value: "5 Seiten", label: "gratis pro Konto" },
    { value: "4,80 €", label: "pro Seite danach" },
    { value: "DSGVO", label: "Server in der EU" },
    { value: "ohne Abo", label: "keine Pakete" },
  ];
  return (
    <section className="border-y border-archive-border/60 bg-paper/70">
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

function Applications() {
  return (
    <section id="applications" className="border-b border-archive-border/60">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-2">Anwendungen</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
            Wofür Verbatim eingesetzt wird
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vier typische Aufgaben, für die Erbenermittler, Kanzleien und Familienforscher
            Verbatim nutzen. Jede mit eigenem Ablauf und Beispielen.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {APPLICATIONS.map((app) => (
            <Link
              key={app.to}
              to={app.to}
              className="group block rounded-xl border border-archive-border bg-paper/60 p-6 hover:border-sepia/60 hover:bg-paper transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl text-primary group-hover:text-sepia transition-colors">
                    {app.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {app.desc}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-sepia shrink-0 mt-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: ScrollText, title: "Präzise Transkription", text: "Handgeschriebene und gedruckte Urkunden in altdeutscher Schrift werden zeichengetreu erfasst – inklusive Namen, Daten und Orten." },
  { icon: Languages, title: "Mehrsprachige Übersetzung", text: "Latein, Französisch, Polnisch, Tschechisch oder Russisch – Dokumente werden direkt ins Deutsche übertragen." },
  { icon: ShieldCheck, title: "Plausibilitätsprüfung", text: "Namen, Orte und Daten werden auf historische Plausibilität geprüft. Unsicherheiten werden klar mit Alternativen gekennzeichnet." },
  { icon: BookOpen, title: "Referenz-Bibliothek", text: "Mit Historikern entwickelt: trainierte Beispiele und Vergleichsdokumente fließen automatisch in jede Analyse ein – für konsistente Ergebnisse." },
  { icon: FileSearch, title: "Strukturierte Dossiers", text: "Pro Fall entstehen archivtaugliche Dossiers mit Quellenangaben, ideal zur Weitergabe an Behörden und Gerichte." },
  { icon: Users, title: "Geeignet für Nachlassverwalter", text: "Geeignet für Erbenermittler, Nachlassverwalter und Kanzleien – pro Vorgang abrechenbar." },
];

function Features() {
  return (
    <section id="features" className="border-b border-archive-border/60 bg-paper/30">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-2">Funktionen</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
            Vom verblassten Original zum verwertbaren Dokument
          </h2>
          <p className="mt-4 text-muted-foreground">
            Eine Werkzeugkiste für alles, was zwischen Archivfund und Erbenermittlung steht.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border border-archive-border bg-paper/70 p-6">
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

function HowItWorks() {
  const steps = [
    { n: "01", title: "Fall anlegen", text: "Erstellen Sie einen Fall und benennen Sie die Familie oder den Erblasser." },
    { n: "02", title: "Urkunden hochladen", text: "PDFs oder Scans hochladen – auch mehrere Dokumente gleichzeitig." },
    { n: "03", title: "Analyse erhalten", text: "Transkription, Übersetzung und Plausibilitätsprüfung – als sauberes Dossier." },
  ];
  return (
    <section id="how" className="border-b border-archive-border/60">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-2">Ablauf</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
            In drei Schritten zur fertigen Analyse
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-serif text-5xl text-sepia/40 mb-2">{s.n}</div>
              <h3 className="font-serif text-xl text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcasePreview() {
  return (
    <section className="border-b border-archive-border/60 bg-paper/30">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-3">Beispiel</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight leading-[1.15]">
            Aus verblasster Sütterlinschrift wird lesbarer Text
          </h2>
          <p className="mt-5 text-muted-foreground leading-[1.8]">
            Verbatim übernimmt Handschriften zeichengetreu und markiert unsichere Stellen
            statt sie stillschweigend zu glätten. Namen, Orte und Daten werden auf historische
            Plausibilität geprüft — mit Alternativlesarten, wo die Vorlage mehrdeutig ist.
          </p>
          <div className="mt-6">
            <Link to="/suetterlin-uebersetzen">
              <Button variant="outline" className="rounded-full">
                Zum Sütterlin-Übersetzer <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-archive-border bg-paper/60 shadow-sm">
          <img
            src={SUETTERLIN_BEISPIEL}
            alt="Sütterlin-Vorlage links, transkribierte Fassung rechts"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const benefits = [
    "Die ersten 5 Seiten pro Konto kostenlos — ohne Karte, ohne Abo",
    "Danach strikt pro Seite — keine Pakete, kein verfallendes Guthaben",
    "Karte erst hinterlegen, wenn die Freiseiten verbraucht sind",
    "Automatische Rechnung per E-Mail nach jeder kostenpflichtigen Analyse",
    "Pro Vorgang abrechenbar und weiterberechenbar",
    "Volle Plausibilitätsprüfung und Korrekturhinweise inklusive",
    "Mehrsprachige Übersetzung (Latein, Französisch, Polnisch u. a.)",
  ];
  return (
    <section id="pricing" className="border-b border-archive-border/60">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-2">Preis</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
            Seitengenau abgerechnet
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ein einziger, transparenter Preis. Keine Pakete, kein Abo, kein verfallendes Guthaben.
          </p>
        </div>

        <div className="rounded-2xl border border-archive-border bg-paper/70 p-8 md:p-12">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-3">Start gratis</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-serif text-6xl md:text-7xl text-primary">5 Seiten</span>
              <span className="text-muted-foreground">gratis</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Die ersten 5 Seiten pro Konto sind kostenlos. Keine Karte nötig.
            </p>
            <div className="mt-6 inline-flex items-baseline gap-2 rounded-full border border-archive-border bg-paper/60 px-5 py-2">
              <span className="text-xs uppercase tracking-[0.18em] text-sepia">Danach</span>
              <span className="font-serif text-2xl text-primary">4,80&nbsp;€</span>
              <span className="text-sm text-muted-foreground">/ Seite · inkl. 19 % MwSt.</span>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-archive-border bg-paper/60 p-5 text-sm">
            <p className="font-medium text-primary mb-2">So funktioniert die Abrechnung</p>
            <ol className="space-y-1.5 text-muted-foreground list-decimal list-inside">
              <li>Konto anlegen und sofort die ersten 5 Seiten kostenlos analysieren – ohne Zahlungsmethode.</li>
              <li>Sind die Freiseiten verbraucht: Karte im Profil hinterlegen (Stripe).</li>
              <li>Vor jeder kostenpflichtigen Analyse: Seitenzahl, Freianteil und Endbetrag werden angezeigt und ausdrücklich bestätigt.</li>
              <li>Nach erfolgreicher Analyse erfolgt die Abbuchung. Rechnung per E-Mail.</li>
            </ol>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {benefits.map((t) => (
              <li key={t} className="flex gap-2">
                <Check className="h-4 w-4 text-sepia mt-0.5 shrink-0" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <a href={`${APP_URL}/login`}>
              <Button size="lg" className="rounded-full px-8 h-12">
                Konto anlegen <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          Schlägt eine Analyse fehl, fällt keine Gebühr an. Bei verbrauchsrelevanten Verträgen
          erlischt das Widerrufsrecht mit Start der jeweiligen Analyse — die Zustimmung holen wir
          vor jeder Abbuchung erneut ein.
        </p>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  { q: "Was kostet die Nutzung von Verbatim?", a: "Die ersten 5 Seiten pro Konto sind vollständig kostenlos – ohne Kreditkarte. Danach zahlen Sie 4,80 € pro analysierter Seite inkl. 19 % MwSt. Kein Abo, keine Pakete, kein verfallenes Guthaben." },
  { q: "Welche Dokumente kann ich hochladen?", a: "PDFs und gängige Bildformate (JPG, PNG). Mehrseitige Scans und mehrere Dokumente gleichzeitig sind möglich. Wir empfehlen mindestens 300 dpi für beste Ergebnisse." },
  { q: "Wie gut ist die Erkennung bei unleserlichen Stellen?", a: "Verbatim markiert unsichere Stellen klar und bietet Alternativlesarten an – statt eine geglättete Variante zu erzwingen. So behalten Sie immer die Kontrolle über die Interpretation." },
  { q: "Sind meine Dokumente sicher?", a: "Ja. Alle Daten werden DSGVO-konform in der EU verarbeitet. Ihre Dokumente sind ausschließlich für Ihr Konto zugänglich. Details finden Sie in unserer Datenschutzerklärung." },
  { q: "Welche Schriften und Sprachen werden erkannt?", a: "Sütterlin, Kurrent und deutsche Kanzleischrift (17.–20. Jh.), lateinische Kanzleischrift sowie Latein, Französisch, Polnisch, Tschechisch und Russisch in handschriftlichen Vorlagen." },
  { q: "Kann ich die Analysen weiterberechnen?", a: "Ja. Jede Analyse erzeugt eine Rechnung mit ausgewiesener Seitenzahl, die direkt als Aufwand im Mandat oder Auftrag geltend gemacht werden kann." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="border-b border-archive-border/60 bg-paper/30">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-sepia mb-2 font-medium">Häufige Fragen</p>
        <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight mb-10">
          Was Sie wissen möchten
        </h2>
        <div className="divide-y divide-archive-border/60">
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              >
                <span className="font-serif text-base md:text-lg text-primary leading-snug group-hover:text-sepia transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-sepia shrink-0 mt-0.5 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
          Bereit für die nächste Urkunde?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Legen Sie in unter einer Minute Ihren ersten Fall an.
        </p>
        <div className="mt-8">
          <a href={`${APP_URL}/login`}>
            <Button size="lg" className="rounded-full px-8 h-12">
              Jetzt starten <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
