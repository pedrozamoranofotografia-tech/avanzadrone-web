import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { brand } from "@/mocks/home";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Por qué drones", href: "#por-que" },
  { label: "Contacto", href: "#presupuesto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-950/90 backdrop-blur-md border-b border-background-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-300 hover:text-foreground-50 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#presupuesto"
            className="px-4 py-2.5 rounded-md text-sm font-medium text-foreground-100 border border-background-700 hover:border-background-500 hover:bg-background-800/60 transition-all whitespace-nowrap"
          >
            Cuéntanos tu proyecto
          </a>
          <a
            href="#presupuesto"
            className="px-4 py-2.5 rounded-md text-sm font-medium bg-primary-500 text-background-950 hover:bg-primary-400 transition-all whitespace-nowrap"
          >
            Solicitar presupuesto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-foreground-100 border border-background-700"
          aria-label="Abrir menú"
        >
          <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-lg`}></i>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background-950/95 backdrop-blur-md border-b border-background-800/60 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-foreground-200 hover:text-foreground-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#presupuesto"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-md text-center font-medium bg-primary-500 text-background-950"
          >
            Solicitar presupuesto
          </a>
        </div>
      )}
    </header>
  );
}