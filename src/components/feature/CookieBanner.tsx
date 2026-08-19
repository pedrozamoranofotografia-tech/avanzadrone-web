import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_consent");
    if (!accepted) {
      // pequeño retraso para no mostrarlo inmediatamente al cargar
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", "all");
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie_consent", "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-background-950/95 backdrop-blur-md border-t border-background-800/60 px-4 md:px-8 py-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground-200 leading-relaxed">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
            Algunas son necesarias para el funcionamiento básico; otras nos
            ayudan a entender cómo se utiliza la web. Puede aceptar todas las
            cookies o gestionar sus preferencias. Consulte nuestra{" "}
            <Link
              to="/cookies"
              className="text-primary-400 hover:text-primary-300 transition-colors underline"
            >
              Política de Cookies
            </Link>{" "}
            para más información.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={acceptNecessary}
            className="px-4 py-2.5 rounded-md border border-background-600 text-foreground-200 text-sm font-medium hover:bg-background-800/60 transition-all whitespace-nowrap"
          >
            Solo necesarias
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="px-4 py-2.5 rounded-md bg-primary-500 text-background-950 text-sm font-medium hover:bg-primary-400 transition-all whitespace-nowrap"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}