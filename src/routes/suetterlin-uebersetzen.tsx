import { KeywordLanding, type FAQItem, type ShowcaseSection } from "@/components/KeywordLanding";

// TODO: Bild-URLs anpassen — Lovable-Assets auf eigenen Storage migrieren
const SHOWCASE: ShowcaseSection[] = [
  {
    eyebrow: "Was ist Sütterlin?",
    title: "Eine deutsche Schrift von 1915 bis 1941",
    text: "Sütterlin wurde 1911 vom Berliner Grafiker Ludwig Sütterlin entworfen und ab 1915 als Standard-Schulschrift eingeführt. 1941 brach die Ausbildung mit dem sogenannten Normalschrifterlass ab – ab da wurde die lateinische Ausgangsschrift verbindlich. Wer nach 1945 zur Schule ging, hat Sütterlin in der Regel nie gelernt.",
    bullets: [
      "1911 von Ludwig Sütterlin als modernisierte deutsche Schrift entworfen",
      "Standard-Schulschrift in Deutschland von 1915 bis 1941",
      "Runder und aufrechter als die ältere, eckige Kurrentschrift",
      "Millionen Briefe, Kirchenbücher und Akten liegen bis heute in Sütterlin vor",
    ],
    image: "/images/suetterlin-vorher-nachher.jpg",
    imageAlt: "Sütterlin-Alphabet – vollständige Buchstabenübersicht",
  },
];

const STATS = [
  { value: "5 Seiten", label: "gratis pro Konto" },
  { value: "4,80 €", label: "pro Seite" },
  { value: "DSGVO", label: "Server in der EU" },
  { value: "ohne Abo", label: "kein Paket" },
];

const FAQS: FAQItem[] = [
  { q: "Was kostet es, Sütterlin übersetzen zu lassen?", a: "Die ersten 5 Seiten pro Konto sind kostenlos. Danach 4,80 € pro Seite inkl. 19 % MwSt. – ohne Abo, ohne Paket, ohne verfallendes Guthaben. Abgerechnet wird strikt pro tatsächlich analysierter Seite." },
  { q: "Wie genau ist die KI-Übersetzung von Sütterlin?", a: "Verbatim wurde mit Historikern auf typischen Sütterlin-Vorlagen (19./20. Jh.) trainiert. Unsichere Stellen werden klar markiert, häufig mit Alternativlesarten. Eigennamen, Daten und Orte werden auf historische Plausibilität geprüft." },
  { q: "Welche Dokumente kann ich hochladen?", a: "PDFs und gängige Bildformate (JPG, PNG). Auch mehrseitige Scans und mehrere Dokumente gleichzeitig. Wichtig ist eine ausreichende Auflösung – als Faustregel ≥ 300 dpi." },
  { q: "Was passiert mit meinen Dokumenten?", a: "Ihre Uploads werden DSGVO-konform verarbeitet und nur Ihrem Konto zugänglich gemacht. Details stehen in der Datenschutzerklärung." },
  { q: "Ist das Ergebnis eine reine Transkription oder auch eine Übersetzung?", a: "Beides. Sie erhalten die zeichengetreue Transkription der Sütterlin-Vorlage und, falls die Quelle nicht-deutsch ist (z. B. Latein in Kirchenbüchern), zusätzlich eine Übertragung ins moderne Deutsch." },
  { q: "Eignet sich Verbatim auch für Familienforschung?", a: "Ja. Briefe, Geburts-, Heirats- und Sterbeurkunden, Kirchenbucheinträge und Tagebücher sind typische Anwendungsfälle. Pro Fall entsteht ein Dossier, das Sie weitergeben oder archivieren können." },
];

export default function Page() {
  return (
    <KeywordLanding
      eyebrow="Sütterlin · Altdeutsche Schrift"
      h1={<>Sütterlin übersetzen – per KI in <span className="italic text-sepia">Minuten</span></>}
      intro="Verbatim entschlüsselt Sütterlinschrift aus Briefen, Tagebüchern, Urkunden und Kirchenbüchern. Sie laden ein PDF oder einen Scan hoch und erhalten eine zeichengetreue Transkription samt moderner deutscher Lesefassung – inklusive Hinweisen auf unsichere Stellen."
      bullets={[
        "Sütterlin, Kurrent und deutsche Kanzleischrift",
        "Briefe, Urkunden, Tagebücher, Kirchenbücher",
        "Unsichere Stellen mit Alternativlesarten",
        "Eigennamen, Orte, Daten plausibilitätsgeprüft",
        "5 Seiten pro Konto gratis, danach 4,80 €/Seite",
        "DSGVO-konform, Server in der EU",
      ]}
      stats={STATS}
      showcase={SHOWCASE}
      faqs={FAQS}
      body={
        <>
          <h2>Warum Sütterlin heute kaum noch jemand lesen kann</h2>
          <p>Die Sütterlinschrift wurde 1911 von Ludwig Sütterlin entworfen und ab 1915 an deutschen Schulen unterrichtet. 1941 verfügten die Nationalsozialisten den sogenannten „Normalschrifterlass" – ab diesem Zeitpunkt wurde die lateinische Ausgangsschrift verbindlich. Damit bricht das Können binnen einer Generation ab: Wer nach 1945 zur Schule ging, hat Sütterlin in der Regel nie gelernt.</p>
          <p>Das Problem zeigt sich heute überall dort, wo familiärer oder amtlicher Nachlass auftaucht: Feldpostbriefe, Tagebücher der Großeltern, Geburts- und Sterbeurkunden, Grundbuchauszüge, Notarakten. Die Schrift ist da, der Text bleibt stumm.</p>
          <h2>Was Verbatim leistet</h2>
          <p>Verbatim ist kein generischer OCR-Dienst. Das System wurde gemeinsam mit Historikern auf typischen Sütterlin- und Kurrent-Vorlagen trainiert – inklusive der eckigen Kanzleivarianten des 19. Jahrhunderts und der eher rundlichen Sütterlin-Schulschrift des frühen 20. Jahrhunderts.</p>
          <ul>
            <li><strong>Transkription:</strong> zeichengetreue Übertragung der Vorlage in moderne lateinische Schrift.</li>
            <li><strong>Übersetzung:</strong> wenn die Quelle nicht deutsch ist, wird zusätzlich ins moderne Deutsch übertragen.</li>
            <li><strong>Plausibilitätsprüfung:</strong> Eigennamen, Orte und Datumsangaben werden auf historische Schlüssigkeit geprüft.</li>
            <li><strong>Dossier:</strong> Pro Vorgang entsteht ein strukturiertes, archivtaugliches Dokument.</li>
          </ul>
          <h2>Typische Anwendungsfälle</h2>
          <h3>Privater Nachlass</h3>
          <p>Liebes- und Feldpostbriefe, Tagebücher, handgeschriebene Rezeptbücher, Stammbaumeinträge.</p>
          <h3>Genealogie und Familienforschung</h3>
          <p>Kirchenbücher, Geburts-, Heirats- und Sterbeurkunden, Auswandererlisten.</p>
          <h3>Erbenermittlung und Nachlassverwaltung</h3>
          <p>Historische Personenstandsurkunden, notarielle Niederschriften, Grundbuchauszüge der Vorkriegszeit – pro Vorgang abrechenbar.</p>
        </>
      }
    />
  );
}
