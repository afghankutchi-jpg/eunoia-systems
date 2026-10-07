import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { company, services } from "@/lib/site";
import { useScrollProgress } from "@/components/site/motion";

const links = [
  { to: "/services", label: "Services" },
  { to: "/who-we-serve", label: "Practices" },
  { to: "/specialties", label: "Specialties" },
  { to: "/process", label: "The cycle" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
] as const;

export function SiteFrame({ children }: { children: ReactNode }) {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-copper" style={{ width: `${progress * 100}%` }} />
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-pine text-pine">
              <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
                <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M16 6.5a9.5 9.5 0 0 1 0 19" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="16" cy="16" r="2" fill="currentColor" />
              </svg>
            </span>
            <span>
              <span className="display block text-xl leading-none">Eunoia</span>
              <span className="text-xs tracking-wide text-muted">Systems</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted hover:text-ink"
                activeProps={{ className: "text-sm text-ink" }}
                activeOptions={{ exact: false }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              search={{ interest: "" }}
              className="tap hidden min-h-11 items-center rounded-full bg-pine px-4 text-sm font-medium text-paper sm:inline-flex"
            >
              Request a review
            </Link>
            <button
              type="button"
              className="tap grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-paper px-5 pt-24 pb-16 lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-2" aria-label="Mobile">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="display text-4xl" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <p className="mt-8 text-sm font-medium tracking-wide text-signal">Services</p>
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="text-lg text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {service.title}
              </Link>
            ))}
            <Link to="/contact" search={{ interest: "" }} className="tap mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-pine text-paper" onClick={() => setOpen(false)}>
              Request a review
            </Link>
          </nav>
        </div>
      ) : null}
      <main id="content">{children}</main>
      <footer className="border-t border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="display text-3xl">Eunoia Systems</p>
            <p className="mt-3 max-w-xs text-ink-soft">{company.tagline}</p>
            <p className="mt-6 text-sm text-ink-soft">
              {company.address}
              <br />
              {company.city}
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-medium tracking-wide text-signal">Services</p>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to="/services/$slug" params={{ slug: service.slug }} className="text-ink-soft hover:text-ink">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-medium tracking-wide text-signal">Practice</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              <li><Link to="/who-we-serve" className="hover:text-ink">Who we serve</Link></li>
              <li><Link to="/specialties" className="hover:text-ink">Specialties</Link></li>
              <li><Link to="/technology" className="hover:text-ink">Technology</Link></li>
              <li><Link to="/process" className="hover:text-ink">The cycle</Link></li>
              <li><Link to="/compliance" className="hover:text-ink">Compliance</Link></li>
              <li><Link to="/results" className="hover:text-ink">Results</Link></li>
              <li><Link to="/about" className="hover:text-ink">About</Link></li>
              <li><Link to="/insights" className="hover:text-ink">Insights</Link></li>
              <li><Link to="/contact" search={{ interest: "" }} className="hover:text-ink">Contact</Link></li>
            </ul>
            <p className="mt-6 text-sm">
              <a href={company.phoneHref} className="font-medium text-ink">{company.phone}</a>
              <br />
              <a href={`mailto:${company.email}`} className="text-ink-soft">{company.email}</a>
            </p>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-muted">
            © {new Date().getFullYear()} Eunoia Systems. Austin, Texas. Revenue cycle management for healthcare practices.
          </p>
        </div>
      </footer>
    </div>
  );
}
