import { LegalHeader, Section } from "@/components/LegalPage";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-2">Anbieterkennzeichnung gemäß § 5 DDG</p>
        <h1 className="font-serif text-4xl text-primary mb-10">Impressum</h1>

        <Section title="Anbieter">
          <p className="font-medium text-foreground">Unleash – Dung Nguyen, Einzelunternehmen</p>
          <p>Kerschensteinerstr. 36<br />67071 Ludwigshafen<br />Deutschland</p>
        </Section>

        <Section title="Kontakt">
          <p>E-Mail: <a className="text-sepia underline" href="mailto:info@verbatim-tool.de">info@verbatim-tool.de</a></p>
        </Section>

        <Section title="Umsatzsteuer">
          <p>Steuernummer: 3836520842</p>
          <p className="mt-2">Es wird die gesetzliche Umsatzsteuer in Höhe von 19 % ausgewiesen (Regelbesteuerung).</p>
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>Dung Nguyen<br />Kerschensteinerstr. 36<br />67071 Ludwigshafen</p>
        </Section>

        <Section title="EU-Streitschlichtung">
          <p>Plattform zur Online-Streitbeilegung: <a className="text-sepia underline" href="https://ec.europa.eu/consumers/odr">ec.europa.eu/consumers/odr</a>.</p>
          <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren teilzunehmen.</p>
        </Section>

        <Section title="Haftungshinweis">
          <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.</p>
        </Section>
      </main>
    </div>
  );
}
