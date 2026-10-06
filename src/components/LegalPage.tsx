import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function LegalHeader() {
  return (
    <header className="border-b border-archive-border/70 bg-paper/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground grid place-items-center font-serif text-lg">
            V
          </div>
          <span className="font-serif text-lg tracking-tight text-primary">Verbatim</span>
        </Link>
        <Link to="/">
          <Button variant="outline" size="sm" className="rounded-full border-archive-border">
            <ArrowLeft className="h-4 w-4" /> Zur Startseite
          </Button>
        </Link>
      </div>
    </header>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 text-muted-foreground leading-relaxed space-y-3">
      <h2 className="font-serif text-2xl text-primary mb-3">{title}</h2>
      {children}
    </section>
  );
}
