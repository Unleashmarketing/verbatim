import { Link } from "react-router-dom";
import { LegalHeader, Section } from "@/components/LegalPage";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-2">Stand: 28.05.2026 · Verbatim</p>
        <h1 className="font-serif text-4xl text-primary mb-2">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-muted-foreground mb-10">Verbatim — KI-gestützte Sütterlin-Analyse</p>

        <Section title="§ 1 Geltungsbereich">
          <p>(1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen dem Betreiber des Dienstes „Verbatim":</p>
          <p className="mt-2 font-medium text-foreground">Unleash – Dung Nguyen, Einzelunternehmen<br />Kerschensteinerstr. 36, 67071 Ludwigshafen<br />E-Mail: info@verbatim-tool.de</p>
          <p className="mt-2">und dem Nutzer über die Nutzung des webbasierten Dienstes unter https://verbatim-tool.de.</p>
          <p>(2) Entgegenstehende oder abweichende Bedingungen des Nutzers werden nicht anerkannt.</p>
        </Section>

        <Section title="§ 2 Leistungsbeschreibung und KI-Hinweise">
          <p>(1) Der Verbatim ist ein webbasierter SaaS-Dienst zur Transkription und Analyse historischer Handschriftendokumente (insbesondere Sütterlin) mithilfe eines KI-Sprachmodells (Claude von Anthropic).</p>
          <p>(2) Der Dienst wird ohne Verfügbarkeitsgarantie bereitgestellt.</p>
          <h3 className="font-serif text-lg text-primary mt-5 mb-2">KI-generierte Inhalte — Wichtige Hinweise</h3>
          <p>(3) <strong>Keine Garantie für Richtigkeit.</strong> Die durch das KI-System erzeugten Transkriptionen und Analysen können unvollständig, veraltet oder inhaltlich unzutreffend sein.</p>
          <p>(4) <strong>Eigenverantwortliche Prüfung erforderlich.</strong> Der Nutzer ist allein verantwortlich für die Bewertung der Vollständigkeit, Richtigkeit und rechtlichen Verwertbarkeit der Analyseergebnisse.</p>
          <p>(5) <strong>Keine Nutzung für rechtlich oder finanziell bedeutsame Entscheidungen</strong> ohne vorherige fachkundige Überprüfung.</p>
          <p>(6) <strong>Keine Meinungsäußerung des Anbieters.</strong> Die generierten Inhalte werden algorithmisch erzeugt.</p>
          <p>(7) Der Anbieter übernimmt keine Haftung für Schäden, die aus der Verwendung KI-generierter Ergebnisse entstehen, soweit diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.</p>
        </Section>

        <Section title="§ 3 Vertragsschluss und Registrierung">
          <p>(1) Für die Nutzung ist eine Registrierung mit E-Mail und Passwort erforderlich.</p>
          <p>(2) Der Vertrag kommt mit der Aktivierung des Nutzerkontos zustande. Je Nutzer ist nur ein Konto erlaubt.</p>
        </Section>

        <Section title="§ 4 Preise, Freikontingent und Pay-per-Page-Abrechnung">
          <p>(1) Der Preis beträgt <strong>4,80 € pro Seite (inkl. 19 % gesetzlicher USt.)</strong>.</p>
          <p>(2) Pro Konto sind die <strong>ersten 5 analysierten Seiten kostenlos</strong>.</p>
          <p>(3) Es gibt kein Guthaben-, Credit- oder Paketmodell.</p>
          <p>(4) Vor jeder Analyse werden dem Nutzer die zu analysierende Seitenanzahl, der Freianteil sowie der Endbetrag angezeigt.</p>
          <p>(5) Schlägt eine Analyse fehl, erfolgt keine Abbuchung.</p>
        </Section>

        <Section title="§ 5 Zahlungsabwicklung">
          <p>(1) Zahlungen werden über Stripe Payments Europe, Ltd. abgewickelt.</p>
          <p>(2) Zur Nutzung muss der Nutzer eine Zahlungsmethode hinterlegen.</p>
          <p>(3) Die Abbuchung erfolgt automatisch nach Abschluss jeder Analyse. Rechnung per E-Mail.</p>
        </Section>

        <Section title="§ 6 Widerrufsrecht">
          <p>(1) Verbrauchern steht grundsätzlich ein 14-tägiges Widerrufsrecht zu.</p>
          <p>(2) Mit Bestätigung der Analyse verliert der Nutzer sein Widerrufsrecht hinsichtlich dieser konkreten Leistung gemäß § 356 Abs. 4 BGB.</p>
        </Section>

        <Section title="§ 7–13 Weitere Bestimmungen">
          <p>Vollständige Fassung auf Anfrage unter info@verbatim-tool.de.</p>
          <p>(1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).</p>
          <p>Plattform zur Online-Streitbeilegung: <a className="text-sepia underline" href="https://ec.europa.eu/consumers/odr">ec.europa.eu/consumers/odr</a>.</p>
          <p className="italic mt-4">Stand: 28.05.2026</p>
        </Section>
      </main>
    </div>
  );
}
