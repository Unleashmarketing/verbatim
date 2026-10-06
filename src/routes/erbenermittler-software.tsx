import { KeywordLanding, type FAQItem } from "@/components/KeywordLanding";

const FAQS: FAQItem[] = [
  { q: 'Wird Verbatim als „Software" verkauft oder als Service abgerechnet?', a: "Es gibt keine Lizenzgebühr und keine Mindestabnahme. Sie zahlen ausschließlich pro tatsächlich analysierter Seite (4,80 € inkl. MwSt.), die ersten 5 Seiten pro Konto sind kostenlos." },
  { q: "Kann ich die Kosten an den Mandanten weiterberechnen?", a: "Ja. Jede Analyse erzeugt eine Rechnung mit ausgewiesener Seitenzahl. Diese kann eins zu eins als Aufwand im Mandat geltend gemacht werden." },
  { q: "Welche Dokumenttypen sind typisch für Erbenermittlung?", a: "Geburts-, Heirats- und Sterbeurkunden, Kirchenbucheinträge, Auswandererlisten, Grundbuchauszüge der Vorkriegszeit, notarielle Niederschriften, Personenstandsregister." },
  { q: "Wie geht Verbatim mit Personendaten um?", a: "Verarbeitung DSGVO-konform in der EU. Dokumente sind nur dem jeweiligen Konto zugänglich." },
  { q: "Gibt es Team-Konten für Kanzleien?", a: "Auf Anfrage. Bitte über die Support-Seite Kontakt aufnehmen." },
  { q: "Was unterscheidet Verbatim von allgemeiner KI?", a: "Allgemeine Modelle liefern eine geglättete Lesart ohne Hinweis auf Unsicherheiten. Verbatim markiert Unsicherheiten, bietet Alternativlesarten und prüft auf historische Plausibilität." },
];

export default function Page() {
  return (
    <KeywordLanding
      eyebrow="Erbenermittlung · Nachlass · Kanzlei"
      h1={<>Software für Erbenermittler – historische Urkunden in <span className="italic text-sepia">Minuten lesbar</span></>}
      intro="Erbenermittlung steht und fällt mit der Lesbarkeit der Quellen: Kirchenbücher, Personenstandsurkunden, notarielle Niederschriften. Verbatim transkribiert diese Dokumente per KI, prüft Namen, Orte und Daten auf Plausibilität und liefert ein archivtaugliches Dossier – pro Mandat abrechenbar."
      bullets={[
        "Pro Vorgang abgerechnet, ohne Lizenz, ohne Abo",
        "Rechnung pro Analyse, eins zu eins an Mandanten weiterberechenbar",
        "Sütterlin, Kurrent, Latein und osteuropäische Sprachen",
        "Personenstandsurkunden, Kirchenbücher, Notarakten",
        "Plausibilitätsprüfung statt geglätteter KI-Lesung",
        "DSGVO-konform, Verarbeitung in der EU",
      ]}
      faqs={FAQS}
      body={
        <>
          <h2>Das eigentliche Problem in der Erbenermittlung ist nicht die Recherche – es ist die Lesbarkeit</h2>
          <p>Wer Erbenketten über mehrere Generationen rekonstruiert, arbeitet zwangsläufig mit Dokumenten aus dem späten 19. und der ersten Hälfte des 20. Jahrhunderts. Diese Quellen sind beschaffbar – aber für die meisten Sachbearbeiter:innen schlicht unlesbar.</p>
          <h2>Was Verbatim für Erbenermittler konkret leistet</h2>
          <ul>
            <li><strong>Transkription historischer Urkunden:</strong> Geburt, Heirat, Sterbefall.</li>
            <li><strong>Übersetzung fremdsprachiger Quellen:</strong> Latein, Polnisch, Tschechisch, Russisch.</li>
            <li><strong>Plausibilitätsprüfung von Personendaten:</strong> mit ausgewiesenen Alternativen bei Unsicherheit.</li>
            <li><strong>Strukturierte Dossiers pro Mandat:</strong> weitergebbar an Nachlassgerichte und Behörden.</li>
          </ul>
          <h2>Abrechnung, die zum Mandat passt</h2>
          <ul>
            <li><strong>5 Seiten pro Konto gratis</strong> – ohne Karte, ohne Verpflichtung.</li>
            <li><strong>Danach 4,80 € pro Seite</strong> inkl. 19 % MwSt.</li>
            <li><strong>Keine Pakete</strong>, kein verfallendes Guthaben.</li>
            <li><strong>Rechnung nach jeder Analyse</strong> – direkt zuordenbar zum Vorgang.</li>
          </ul>
        </>
      }
    />
  );
}
