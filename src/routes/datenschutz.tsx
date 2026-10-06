import { LegalHeader, Section } from "@/components/LegalPage";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-2">Stand: 28.05.2026 · Verbatim</p>
        <h1 className="font-serif text-4xl text-primary mb-10">Datenschutzerklärung</h1>

        <Section title="1. Verantwortlicher">
          <p>Verantwortlicher im Sinne der DSGVO ist:</p>
          <p className="font-medium text-foreground mt-3">Unleash – Dung Nguyen, Einzelunternehmen</p>
          <p>Kerschensteinerstr. 36<br />67071 Ludwigshafen<br />E-Mail: info@verbatim-tool.de</p>
        </Section>

        <Section title="2. Überblick der Datenverarbeitung">
          <p>Verbatim ist ein webbasierter Dienst zur Transkription und Analyse historischer Handschriften mithilfe von KI.</p>
        </Section>

        <Section title="3. Erhobene Daten und Verarbeitungszwecke">
          <h3 className="font-serif text-lg text-primary mt-4 mb-2">3.1 Kontodaten</h3>
          <p>E-Mail-Adresse, verschlüsseltes Passwort, Erstellungsdatum des Kontos.</p>
          <p className="mt-3">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Speicherdauer: Bis zur Löschung des Kontos.</p>

          <h3 className="font-serif text-lg text-primary mt-6 mb-2">3.2 Hochgeladene Dokumente</h3>
          <p>Speicherort: Supabase Cloud Storage (EU-Region). Nutzer können Dokumente jederzeit löschen.</p>
          <p className="mt-3">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

          <h3 className="font-serif text-lg text-primary mt-6 mb-2">3.3 Nutzungs- und Abrechnungsdaten</h3>
          <p>Seitenanzahl, Zeitpunkt, Rechnungsbetrag, Stripe-IDs.</p>
          <p className="mt-3">Rechtsgrundlage: Art. 6 Abs. 1 lit. b und c DSGVO (10 Jahre Aufbewahrung).</p>
        </Section>

        <Section title="4. Auftragsverarbeiter">
          <h3 className="font-serif text-lg text-primary mt-4 mb-1">Supabase Inc.</h3>
          <p>Datenbank, Authentifizierung, Dateispeicher. EU-Region (Frankfurt). <a className="text-sepia underline" href="https://supabase.com/privacy">supabase.com/privacy</a></p>
          <h3 className="font-serif text-lg text-primary mt-4 mb-1">Anthropic PBC</h3>
          <p>KI-Analyse via API. Keine Speicherung zum Training. <a className="text-sepia underline" href="https://www.anthropic.com/privacy">anthropic.com/privacy</a></p>
          <h3 className="font-serif text-lg text-primary mt-4 mb-1">Stripe Payments Europe, Ltd.</h3>
          <p>Zahlungsabwicklung. PCI-DSS-konform. <a className="text-sepia underline" href="https://stripe.com/de/privacy">stripe.com/de/privacy</a></p>
        </Section>

        <Section title="5. Speicherdauer">
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Kontodaten: bis zur Löschung.</li>
            <li>Dokumente und Analysen: bis zur aktiven Löschung durch den Nutzer.</li>
            <li>Abrechnungsdaten: 10 Jahre gemäß § 147 AO.</li>
            <li>Server-Logs: 30 Tage.</li>
          </ul>
        </Section>

        <Section title="6–10. Weitere Bestimmungen">
          <p>Keine automatisierte Entscheidungsfindung. HTTPS und Row-Level Security. Nur technisch notwendige Cookies.</p>
          <p className="mt-3">Betroffenenrechte: Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch.</p>
          <p className="mt-3">Kontakt: info@verbatim-tool.de</p>
          <p className="mt-3">Aufsichtsbehörde: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz, <a className="text-sepia underline" href="https://www.datenschutz.rlp.de">www.datenschutz.rlp.de</a></p>
          <p className="italic mt-4">Stand: 28.05.2026</p>
        </Section>
      </main>
    </div>
  );
}
