import { useState, useEffect, useRef } from 'react';

import Resumen from './pages/Resumen';
import Marco from './pages/Marco';
import Delitos from './pages/Delitos';
import Comparacion from './pages/Comparacion';
import Responsabilidades from './pages/Responsabilidades';
import Datos from './pages/Datos';
import Conclusiones from './pages/Conclusiones';
import Bitacora from './pages/Bitacora';

const SECTIONS = [
  { id: 0, number: '01', title: 'Resumen Ejecutivo', icon: '📋', color: 'text-amber-400', component: Resumen },
  { id: 1, number: '02', title: 'Marco Legal', icon: '⚖️', color: 'text-blue-400', component: Marco },
  { id: 2, number: '03', title: 'Delitos Cometidos', icon: '⚠️', color: 'text-red-400', component: Delitos },
  { id: 3, number: '04', title: 'Comparación', icon: '🔍', color: 'text-purple-400', component: Comparacion },
  { id: 4, number: '05', title: 'Responsabilidades', icon: '👥', color: 'text-green-400', component: Responsabilidades },
  { id: 5, number: '06', title: 'Datos y ARCO', icon: '📊', color: 'text-cyan-400', component: Datos },
  { id: 6, number: '07', title: 'Conclusiones', icon: '✅', color: 'text-yellow-400', component: Conclusiones },
  { id: 7, number: '08', title: 'Bitácora IA', icon: '🤖', color: 'text-slate-400', component: Bitacora },
];

const ACTIVE_GRADIENTS = [
  'from-amber-500 to-amber-600',
  'from-blue-500 to-blue-600',
  'from-red-500 to-red-600',
  'from-purple-500 to-purple-600',
  'from-green-500 to-green-600',
  'from-cyan-500 to-cyan-600',
  'from-yellow-500 to-yellow-600',
  'from-slate-600 to-slate-700',
];

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSummaryCards, setShowSummaryCards] = useState(true);

  const contentRef = useRef(null);

  const CurrentComponent = SECTIONS[activeSection].component;

  // Scroll al inicio al cambiar de sección
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    setShowSummaryCards(true);
  }, [activeSection]);

  // Ocultar tarjetas al bajar en móvil
  useEffect(() => {
    const container = contentRef.current;

    if (!container) return;

    const handleScroll = () => {
      if (window.innerWidth < 640) {
        if (container.scrollTop > 80) {
          setShowSummaryCards(false);
        } else {
          setShowSummaryCards(true);
        }
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden">

      {/* ───────── SIDEBAR ───────── */}
      <aside
        className={`fixed sm:relative z-50 h-screen w-56 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 ${
          sidebarOpen
            ? 'translate-x-0'
            : '-translate-x-full sm:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="px-4 py-6 border-b border-slate-800 flex-shrink-0">
          <div className="flex flex-col items-center text-center gap-4">

            <span className="text-2xl">
              ⚔️
            </span>

            <div className="w-full">
              <h1 className="text-4xl font-extrabold text-amber-300 leading-none tracking-tight">
                INFORME
                <br />
                FLONIC
              </h1>

              <p className="text-xs text-slate-500 mt-4">
                UTFSM 2024
              </p>
            </div>

          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 overflow-y-auto px-2 py-3 flex flex-col gap-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3
                ${
                  activeSection === section.id
                    ? `bg-gradient-to-r ${ACTIVE_GRADIENTS[section.id]} text-slate-950 font-semibold shadow-lg`
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                }`}
            >
              <span className="text-lg flex-shrink-0">
                {section.icon}
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold opacity-70 leading-tight">
                  {section.number}
                </p>

                <p className="text-xs font-medium leading-tight break-words">
                  {section.title}
                </p>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-3 border-t border-slate-800 text-center flex-shrink-0">
          <p className="text-[10px] text-slate-500">
            © 2024 · Análisis Jurídico
          </p>
        </div>
      </aside>

      {/* Overlay móvil */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="sm:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* ───────── CONTENIDO ───────── */}
      <main className="flex-1 flex flex-col bg-slate-950 min-w-0 w-full overflow-hidden">

        {/* Header */}
        <header className="sticky top-0 z-30 flex-shrink-0 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 px-4 sm:px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3">

            {/* Botón móvil */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="sm:hidden text-2xl text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>

            <span className="text-3xl flex-shrink-0">
              {SECTIONS[activeSection].icon}
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Sección {SECTIONS[activeSection].number}
              </p>

              <h2
                className={`text-xl sm:text-2xl font-bold break-words ${SECTIONS[activeSection].color}`}
              >
                {SECTIONS[activeSection].title}
              </h2>
            </div>
          </div>

          {/* Datos resumen */}
          {activeSection === 0 && showSummaryCards && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-700 transition-all duration-300">
              {[
                { label: 'Fecha', value: '24 Oct 2024' },
                { label: 'Datos Expuestos', value: '46 GB' },
                { label: 'Atacante', value: 'RansomHub' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-800/50 rounded-lg px-4 py-3"
                >
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                    {item.label}
                  </p>

                  <p className="text-sm font-semibold text-amber-300 break-words">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Contenido */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 w-full"
        >
          <div className="w-full">
            <CurrentComponent />
          </div>
        </div>
      </main>
    </div>
  );
}