import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { APP_URL } from "@/config";

export const APPLICATIONS = [
  {
    to: "/suetterlin-uebersetzen",
    label: "Sütterlin übersetzen",
    desc: "Briefe, Tagebücher und Urkunden in Sütterlinschrift entziffern lassen.",
  },
  {
    to: "/kurrent-lesen",
    label: "Kurrent lesen",
    desc: "Deutsche Kurrentschrift aus Akten und Kirchenbüchern lesbar machen.",
  },
  {
    to: "/urkunden-transkribieren-ki",
    label: "Urkunden transkribieren",
    desc: "Historische Handschriften archivtauglich digitalisieren.",
  },
  {
    to: "/erbenermittler-software",
    label: "Für Erbenermittler",
    desc: "Workflow und Abrechnung für Kanzleien und Nachlassverwaltung.",
  },
] as const;

export function SiteHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-archive-border/70 bg-paper/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground grid place-items-center font-serif text-lg">
            V
          </div>
          <span className="font-serif text-lg tracking-tight text-primary">Verbatim</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-paper transition"
            >
              Anwendungen
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[380px] rounded-lg border border-archive-border bg-paper shadow-lg overflow-hidden">
                <div className="p-2">
                  {APPLICATIONS.map((app) => (
                    <Link
                      key={app.to}
                      to={app.to}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2.5 rounded-md hover:bg-sepia/8 transition"
                    >
                      <div className="font-serif text-sm text-primary">{app.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                        {app.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/erbenermittler-software"
            className="px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-paper transition"
          >
            Für Erbenermittler
          </Link>
          <Link
            to="/support"
            className="px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-paper transition"
          >
            Support
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a href={`${APP_URL}/login`}>
            <Button size="sm" variant="ghost" className="rounded-full">
              Anmelden
            </Button>
          </a>
          <a href={`${APP_URL}/login`}>
            <Button size="sm" className="rounded-full px-5">
              Kostenlos starten
            </Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-primary"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-archive-border bg-paper">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            <p className="text-xs uppercase tracking-[0.18em] text-sepia mt-2 mb-2">
              Anwendungen
            </p>
            {APPLICATIONS.map((app) => (
              <Link
                key={app.to}
                to={app.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-foreground hover:bg-sepia/8"
              >
                {app.label}
              </Link>
            ))}
            <div className="h-px bg-archive-border/60 my-3" />
            <Link
              to="/support"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary"
            >
              Support
            </Link>
            <div className="pt-3 flex gap-2">
              <a href={`${APP_URL}/login`} className="flex-1">
                <Button variant="outline" className="w-full rounded-full">
                  Anmelden
                </Button>
              </a>
              <a href={`${APP_URL}/login`} className="flex-1">
                <Button className="w-full rounded-full">Starten</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-archive-border/60 bg-paper/60">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-primary text-primary-foreground grid place-items-center font-serif text-sm">
              V
            </div>
            <span className="font-serif text-base text-primary">Verbatim</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground max-w-sm leading-relaxed">
            KI-gestützte Transkription und Analyse historischer Urkunden für Erbenermittler,
            Nachlassverwalter und Kanzleien. Verarbeitung DSGVO-konform in der EU.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-3">Anwendungen</p>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {APPLICATIONS.map((app) => (
              <li key={app.to}>
                <Link to={app.to} className="hover:text-primary">
                  {app.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-3">Produkt</p>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/#features" className="hover:text-primary">
                Funktionen
              </Link>
            </li>
            <li>
              <Link to="/#how" className="hover:text-primary">
                Ablauf
              </Link>
            </li>
            <li>
              <Link to="/#pricing" className="hover:text-primary">
                Preise
              </Link>
            </li>
            <li>
              <a href={`${APP_URL}/login`} className="hover:text-primary">
                Anmelden
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-sepia mb-3">
            Rechtliches & Hilfe
          </p>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/support" className="hover:text-primary">
                Support & FAQ
              </Link>
            </li>
            <li>
              <Link to="/impressum" className="hover:text-primary">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:text-primary">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link to="/agb" className="hover:text-primary">
                AGB
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-archive-border/60">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Verbatim. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
