import { useState } from "react";
import Resumen from "./pages/Resumen";
import Marco from "./pages/Marco";
import Delitos from "./pages/Delitos";
import Comparacion from "./pages/Comparacion";
import Responsabilidades from "./pages/Responsabilidades";
import Datos from "./pages/Datos";
import Conclusiones from "./pages/Conclusiones";
import Bitacora from "./pages/Bitacora";

const SECTIONS_NAV = [
  { id: "home", title: "Inicio", icon: "🏠", component: null },
  { id: "resumen", title: "01 — Resumen Ejecutivo", icon: "📋", component: Resumen },
  { id: "marco", title: "02 — Marco Legal", icon: "⚖️", component: Marco },
  { id: "delitos", title: "03 — Delitos Cometidos", icon: "⚠️", component: Delitos },
  { id: "comparacion", title: "04 — Comparación Regulatoria", icon: "🔍", component: Comparacion },
  { id: "responsabilidades", title: "05 — Responsabilidades", icon: "👥", component: Responsabilidades },
  { id: "datos", title: "06 — Datos y Derechos ARCO", icon: "📊", component: Datos },
  { id: "conclusiones", title: "07 — Conclusiones", icon: "✅", component: Conclusiones },
  { id: "bitacora", title: "08 — Bitácora IA", icon: "🤖", component: Bitacora }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderCurrentSection = () => {
    const section = SECTIONS_NAV.find(s => s.id === currentSection);
    
    if (currentSection === "home") {
      return <HomePage onNavigate={setCurrentSection} />;
    }
    
    if (section && section.component) {
      const Component = section.component;
      return <Component />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* HEADER STICKY */}
      <header className="sticky top-0 z-40 border-b border-slate-700 bg-slate-950/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentSection("home")}
              className="group flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <span className="text-2xl">⚔️</span>
              <div>
                <h1 className="text-lg font-bold text-amber-300">Informe FLONIC</h1>
                <p className="text-xs text-slate-500">UTFSM 2024</p>
              </div>
            </button>
          </div>

          {/* NAVEGACION HORIZONTAL */}
          <nav className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {SECTIONS_NAV.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  currentSection === section.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                }`}
              >
                <span>{section.icon}</span>
                <span className="hidden sm:inline">{section.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>{renderCurrentSection()}</main>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 mt-20 py-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>© 2024 Informe FLONIC • Análisis Jurídico de Ciberseguridad</p>
          <p className="mt-2 text-xs text-slate-600">Filtración UTFSM — Octubre 2024</p>
        </div>
      </footer>
    </div>
  );
}

// COMPONENTE HOME PAGE
function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
              Caso Estudiado: Filtración UTFSM 2024
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            Informe FLONIC
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-4">
            Análisis Jurídico Integral de la Filtración de Datos<br />
            Universidad Técnica Federico Santa María
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-400">46 GB</p>
              <p className="text-sm text-slate-400">de datos expuestos</p>
            </div>
            <div className="w-px h-12 bg-slate-700 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-red-400">2,700+</p>
              <p className="text-sm text-slate-400">deudores identificados</p>
            </div>
            <div className="w-px h-12 bg-slate-700 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400">531+</p>
              <p className="text-sm text-slate-400">víctimas de RansomHub</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-slate-300 mb-4">
              <span className="font-semibold text-white">24 de octubre de 2024:</span> Ataque ransomware a los sistemas de la UTFSM por el grupo criminal RansomHub. La institución fue víctima de doble extorsión: cifrado de sistemas + exfiltración de datos + amenaza de publicación.
            </p>
            <p className="text-xs text-slate-500">
              Este informe analiza los delitos cometidos, el marco legal aplicable, las responsabilidades de los actores involucrados y las brechas regulatorias evidenciadas por el caso.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIONES DESTACADAS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Secciones del Informe</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {SECTIONS_NAV.filter(s => s.id !== "home").map((section, idx) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300 text-left"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{section.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    {[
                      "Descripción general del incidente, datos expuestos y cronología de eventos",
                      "Análisis de normas legales chilenas e internacionales aplicables",
                      "Tipificación de delitos bajo Ley 21.459 de Delitos Informáticos",
                      "Comparación de marcos regulatorios: Chile, UE, ISO 27001",
                      "Responsabilidades de RansomHub, UTFSM, afiliados y terceros",
                      "Tipos de datos comprometidos y derechos ARCO de titulares",
                      "Síntesis de hallazgos y recomendaciones para el futuro",
                      "Notas técnicas del desarrollo del análisis"
                    ][idx]}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CONTEXTO DEL CASO */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-red-900/20 to-red-900/10 border border-red-900/30 rounded-lg">
            <h3 className="text-red-400 font-bold mb-3">🔴 El Atacante</h3>
            <p className="text-sm text-slate-300">
              <strong>RansomHub</strong> — Grupo de cibercriminales que opera bajo modelo RaaS (Ransomware como Servicio). Emergió en febrero de 2024 y se convirtió en el grupo de ransomware más activo del mundo.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-900/30 rounded-lg">
            <h3 className="text-blue-400 font-bold mb-3">🔵 La Víctima</h3>
            <p className="text-sm text-slate-300">
              <strong>UTFSM</strong> — Universidad Técnica Federico Santa María, institución de educación superior de alto prestigio nacional e internacional, con miles de estudiantes y datos personales en sus sistemas.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-amber-900/20 to-amber-900/10 border border-amber-900/30 rounded-lg">
            <h3 className="text-amber-400 font-bold mb-3">🟡 El Impacto</h3>
            <p className="text-sm text-slate-300">
              Doble extorsión: cifrado de sistemas + exfiltración masiva de datos + amenaza de publicación. Expone vulnerabilidades del sector educativo chileno en materia de ciberseguridad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}