import { KeywordLanding, type FAQItem } from "@/components/KeywordLanding";

const FAQS: FAQItem[] = [
  { q: 'Was bedeutet „archivtauglich"?', a: "Jede Analyse liefert nicht nur einen reinen Text, sondern ein strukturiertes Dossier: Transkription, ggf. Übersetzung, markierte Unsicherheiten und Alternativlesarten." },
  { q: "Welche Schriftarten und Sprachen werden unterstützt?", a: "Deutsche Kurrent und Sütterlin (17.–20. Jh.), lateinische Kanzleischrift, sowie Latein, Französisch, Polnisch, Tschechisch und Russisch in handschriftlichen Quellen." },
  { q: "Kann ich ganze Bestände hochladen?", a: "Ja. Sie können mehrere Dokumente pro Fall hochladen und analysieren lassen. Abgerechnet wird pro tatsächlich analysierter Seite." },
  { q: "Wie geht Verbatim mit unleserlichen Stellen um?", a: "Unleserliche oder mehrdeutige Stellen werden klar markiert. Bei Eigennamen, Orten und Datumsangaben werden, wo möglich, Alternativlesarten angeboten." },
  { q: "Bleibt das Original-Dokument einsehbar?", a: "Ja. Original-Scan und transkribierter Text liegen pro Fall nebeneinander, sodass jede Lesung am Original überprüft werden kann." },
];

export default function Page() {
  return (
    <KeywordLanding
      eyebrow="Urkunden · Handschriften · Digitalisierung"
      h1={<>Urkunden transkribieren mit KI – <span className="italic text-sepia">archivtauglich</span> und nachvollziehbar</>}
      intro="Historische Handschriften zu digitalisieren heißt mehr als sie zu scannen. Verbatim überführt Urkunden, Akten und Korrespondenz aus Sütterlin, Kurrent und Latein in einen modernen, durchsuchbaren Text – und dokumentiert dabei jede unsichere Stelle."
      bullets={[
        "Sütterlin, Kurrent, lateinische Kanzleischrift",
        "Latein, Französisch, Polnisch, Tschechisch, Russisch",
        "Strukturierte Dossiers pro Vorgang",
        "Original-Scan und Transkription nebeneinander",
        "Plausibilitätsprüfung von Namen, Orten, Daten",
        "Pro Seite abgerechnet, keine Pakete",
      ]}
      faqs={FAQS}
      body={
        <>
          <h2>Warum klassisches OCR an Handschriften scheitert</h2>
          <p>Optische Zeichenerkennung wurde für gedruckte Texte mit konstanten Buchstabenformen entwickelt. Bei historischen Handschriften versagt sie: Buchstabenformen wechseln innerhalb eines Dokuments, Tinte verläuft, Papier vergilbt.</p>
          <h2>Was eine Verbatim-Analyse enthält</h2>
          <ul>
            <li><strong>Transkription:</strong> zeichengetreue Übertragung in moderne lateinische Schrift.</li>
            <li><strong>Übersetzung:</strong> bei fremdsprachigen Vorlagen zusätzlich ins moderne Deutsch.</li>
            <li><strong>Unsicherheitsmarkierungen:</strong> jede Stelle, an der das Modell zweifelt, ist erkennbar.</li>
            <li><strong>Alternativlesarten:</strong> insbesondere bei Eigennamen, Orten und Datumsangaben.</li>
            <li><strong>Plausibilitätsprüfung:</strong> Datierungen, Ortsnamen und Personen werden auf historische Schlüssigkeit geprüft.</li>
            <li><strong>Dossier:</strong> alles in einem strukturierten Dokument pro Vorgang.</li>
          </ul>
          <h2>Für wen Verbatim gedacht ist</h2>
          <h3>Archive und Bibliotheken</h3>
          <p>Erschließung von Nachlässen, Brief- und Aktenbeständen. Seitengenau abrechenbar.</p>
          <h3>Genealogen und Familienforscher</h3>
          <p>Kirchenbücher, Personenstandsurkunden, Auswandererlisten – mit verlässlichen Namens- und Datumslesungen.</p>
          <h3>Erbenermittler und Kanzleien</h3>
          <p>Pro Fall abrechenbar, an Mandanten weiterberechenbar, archivtauglich dokumentiert.</p>
        </>
      }
    />
  );
}
