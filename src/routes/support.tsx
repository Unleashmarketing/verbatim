import { Link } from "react-router-dom";
import { LegalHeader } from "@/components/LegalPage";
import { Button } from "@/components/ui/button";
import { Mail, LifeBuoy, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const SUPPORT_EMAIL = "support@verbatim.app";

const FAQ = [
  { q: "Wie funktioniert die Analyse einer Urkunde?", a: "Sie legen einen Fall an, laden Ihre Scans oder PDFs hoch und starten die Analyse. Die KI transkribiert, übersetzt bei Bedarf und liefert ein strukturiertes Dossier mit Plausibilitätsprüfung." },
  { q: "Welche Dateiformate werden unterstützt?", a: "Unterstützt werden gängige Bildformate (JPG, PNG, TIFF) sowie PDF-Dokumente. Mehrseitige PDFs werden Seite für Seite verarbeitet." },
  { q: "Was kostet eine Seite und wie wird abgerechnet?", a: "Die ersten 5 Seiten sind kostenlos. Danach kostet eine Seite 4,80 € inkl. MwSt. Abrechnung strikt pro Seite, keine Pakete." },
  { q: "Wie sicher sind meine hochgeladenen Dokumente?", a: "Alle Übertragungen erfolgen verschlüsselt via HTTPS. Dokumente werden in der EU-Region gespeichert. Durch Row-Level Security kann ausschließlich Ihr Konto auf Ihre Dokumente zugreifen." },
  { q: "Werden meine Dokumente zum KI-Training verwendet?", a: "Nein. Die Inhalte werden ausschließlich zur Erstellung Ihrer Analyse an den KI-Anbieter (Anthropic) übermittelt und dort gemäß Commercial Terms nicht für Trainingszwecke gespeichert." },
  { q: "Wie zuverlässig sind die KI-Ergebnisse?", a: "Die KI liefert hochwertige Transkriptionen, ist aber nicht unfehlbar. Bei rechtlich oder finanziell relevanten Entscheidungen empfehlen wir eine Prüfung durch Fachleute." },
  { q: "Kann ich Dokumente und mein Konto löschen?", a: "Ja. Einzelne Dokumente und Vorgänge können Sie jederzeit in der Anwendung löschen. Für die vollständige Kontolöschung senden Sie uns eine E-Mail." },
  { q: "Wie erhalte ich eine Rechnung?", a: "Rechnungen werden nach jeder kostenpflichtigen Analyse automatisch per E-Mail zugestellt." },
];

export default function Support() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-archive-border bg-paper/70 px-3 py-1 text-xs text-muted-foreground mb-5">
          <LifeBuoy className="h-3.5 w-3.5 text-sepia" />
          Support & Hilfe
        </div>
        <h1 className="font-serif text-4xl text-primary mb-3">Wie können wir helfen?</h1>
        <p className="text-muted-foreground mb-10">Antworten auf die häufigsten Fragen — oder schreiben Sie uns direkt.</p>

        <div className="rounded-2xl border border-archive-border bg-paper/40 p-6 md:p-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-sepia mb-2">
              <Mail className="h-3.5 w-3.5" /> Direkter Kontakt
            </div>
            <h2 className="font-serif text-2xl text-primary">Schreiben Sie uns eine E-Mail</h2>
            <p className="text-sm text-muted-foreground mt-1">Wir antworten in der Regel innerhalb von 24 Stunden (Mo–Fr).</p>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Antwortzeit: i.d.R. unter 24 Stunden
            </p>
          </div>
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Support-Anfrage%20Verbatim`}>
            <Button size="lg" className="rounded-full px-6 whitespace-nowrap">
              <Mail className="h-4 w-4" /> {SUPPORT_EMAIL}
            </Button>
          </a>
        </div>

        <h2 className="font-serif text-2xl text-primary mb-4">Häufige Fragen (FAQ)</h2>
        <div className="rounded-xl border border-archive-border bg-background divide-y divide-archive-border/60 px-5">
          {FAQ.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              >
                <span className="font-serif text-base text-primary text-left group-hover:text-sepia transition-colors">
                  {item.q}
                </span>
                <ChevronDown className={`h-5 w-5 text-sepia shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Ihre Frage ist nicht dabei?{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sepia underline">Schreiben Sie uns an {SUPPORT_EMAIL}</a>.
        </p>
      </main>
    </div>
  );
}
