import { KeywordLanding, type FAQItem, type ShowcaseSection } from "@/components/KeywordLanding";

const SHOWCASE: ShowcaseSection[] = [
  {
    eyebrow: "Kurrent-Beispiel",
    title: "So sieht typische Kurrent-Handschrift aus",
    text: "Die Aufnahme zeigt eine handschriftliche Seite in deutscher Kurrentschrift. Für heutige Leser sind Buchstaben wie h, k, s und e oft kaum als solche erkennbar. Verbatim überträgt solche Vorlagen Seite für Seite in moderne Schrift.",
    bullets: [
      "Kurrent war die alltägliche deutsche Schreibschrift bis ins 20. Jahrhundert",
      "Sütterlin ist eine spätere, rundere Schulvariante",
      "Verbatim erkennt beide Varianten sowie Kanzleiformen",
    ],
    image: "/images/suetterlin-vorher-nachher.jpg",
    imageAlt: "Handschriftliches Beispiel in deutscher Kurrentschrift",
  },
];

const FAQS: FAQItem[] = [
  { q: "Was ist der Unterschied zwischen Kurrent und Sütterlin?", a: "Kurrent ist der Oberbegriff für die deutsche Schreibschrift, die bis Mitte des 20. Jahrhunderts verwendet wurde. Sütterlin ist eine konkrete, ab 1915 in Schulen unterrichtete Variante davon. Verbatim erkennt beide – inklusive älterer Kanzleiformen aus dem 18. und 19. Jahrhundert." },
  { q: "Kann ich auch einzelne Briefe oder Postkarten lesen lassen?", a: "Ja. Pro Konto sind die ersten 5 Seiten kostenlos. Eine Postkarte oder ein einseitiger Brief zählt typischerweise als eine Seite." },
  { q: "Welche Qualität sollte der Scan haben?", a: "Mindestens 300 dpi, gut belichtet, ohne Knicke quer durch den Text. Handyfotos funktionieren, wenn die Schrift scharf und vollständig im Bild ist." },
  { q: "Werden auch lateinische oder fremdsprachige Passagen erkannt?", a: "Ja. Verbatim erkennt Latein, Französisch, Polnisch, Tschechisch und Russisch in Kurrent-Vorlagen und überträgt sie zusätzlich ins moderne Deutsch." },
  { q: "Wie lange dauert eine Analyse?", a: "In der Regel wenige Minuten pro Seite. Sie können den Tab schließen und werden im Dashboard über das Ergebnis informiert." },
];

export default function Page() {
  return (
    <KeywordLanding
      eyebrow="Kurrent · Deutsche Kanzleischrift"
      h1={<>Kurrent lesen lassen – ohne selbst <span className="italic text-sepia">entziffern</span> zu müssen</>}
      intro="Deutsche Kurrentschrift war über Jahrhunderte die alltägliche Hand- und Kanzleischrift. Heute ist sie für die meisten Menschen unlesbar. Verbatim überträgt Kurrent-Vorlagen aus Briefen, Akten und Urkunden in modernes Deutsch – Seite für Seite, mit Plausibilitätsprüfung."
      bullets={[
        "Deutsche Kurrent vom 17. bis 20. Jahrhundert",
        "Auch Sütterlin und Kanzleivarianten",
        "Geeignet für Briefe, Akten, Urkunden, Tagebücher",
        "Markierte Unsicherheiten statt geglätteter Lesart",
        "5 Seiten pro Konto gratis – keine Karte nötig",
        "Pro Vorgang abrechen- und weiterberechenbar",
      ]}
      faqs={FAQS}
      showcase={SHOWCASE}
      body={
        <>
          <h2>Was Kurrent eigentlich ist</h2>
          <p>„Kurrent" (von lateinisch <em>currere</em> – laufen) ist die laufende, also kursive deutsche Schreibschrift, die seit dem späten Mittelalter im deutschsprachigen Raum üblich war. Ihre Buchstabenformen unterscheiden sich deutlich von der heute gebräuchlichen lateinischen Schreibschrift.</p>
          <p>Sütterlin – die vermutlich bekannteste Variante – ist nur ein vergleichsweise spätes Kapitel dieser Schriftgeschichte. Wer ältere Dokumente vor sich liegen hat, hat es häufig mit der eckigeren, dichter geschriebenen <strong>Kanzleikurrent</strong> des 18. und 19. Jahrhunderts zu tun.</p>
          <h2>Wann Sie Kurrent lesen lassen sollten</h2>
          <ul>
            <li><strong>Familienforschung:</strong> Kirchenbücher, Tauf- und Heiratseinträge, Auswandererlisten.</li>
            <li><strong>Erbschaft und Nachlass:</strong> alte Testamente, notarielle Verzeichnisse, Grundbuchauszüge.</li>
            <li><strong>Wissenschaftliche Arbeit:</strong> Quellenarbeit in Archiven, Editionen historischer Korrespondenz.</li>
            <li><strong>Persönlicher Nachlass:</strong> Tagebücher, Feldpost, Familienchroniken.</li>
          </ul>
          <h2>Wie Verbatim Kurrent entziffert</h2>
          <p>Das Modell ist auf typische Kurrent-Vorlagen aus drei Jahrhunderten trainiert. In Zweifelsfällen werden Alternativlesarten ausgewiesen – insbesondere bei Eigennamen und Daten, wo eine falsche Glättung später teuer werden kann.</p>
        </>
      }
    />
  );
}
