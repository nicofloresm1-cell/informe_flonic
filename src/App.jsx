import { useState } from 'react';
import Resumen from './pages/Resumen';
import Marco from './pages/Marco';
import Delitos from './pages/Delitos';
import Comparacion from './pages/Comparacion';
import Responsabilidades from './pages/Responsabilidades';
import Datos from './pages/Datos';
import Conclusiones from './pages/Conclusiones';
import Bitacora from './pages/Bitacora';

const SECTIONS = [
  {
    id: 0,
    number: '01',
    title: 'Resumen Ejecutivo',
    icon: '📋',
    color: 'text-amber-400',
    component: Resumen
  },
  {
    id: 1,
    number: '02',
    title: 'Marco Legal',
    icon: '⚖️',
    color: 'text-blue-400',
    component: Marco
  },
  {
    id: 2,
    number: '03',
    title: 'Delitos Cometidos',
    icon: '⚠️',
    color: 'text-red-400',
    component: Delitos
  },
  {
    id: 3,
    number: '04',
    title: 'Comparación',
    icon: '🔍',
    color: 'text-purple-400',
    component: Comparacion
  },
  {
    id: 4,
    number: '05',
    title: 'Responsabilidades',
    icon: '👥',
    color: 'text-green-400',
    component: Responsabilidades
  },
  {
    id: 5,
    number: '06',
    title: 'Datos y ARCO',
    icon: '📊',
    color: 'text-cyan-400',
    component: Datos
  },
  {
    id: 6,
    number: '07',
    title: 'Conclusiones',
    icon: '✅',
    color: 'text-yellow-400',
    component: Conclusiones
  },
  {
    id: 7,
    number: '08',
    title: 'Bitácora IA',
    icon: '🤖',
    color: 'text-slate-400',
    component: Bitacora
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  const CurrentComponent = SECTIONS[activeSection].component;

  return (
    <div className="flex h-screen w-screen bg-slate-950 overflow-hidden">
      {/* PANEL IZQUIERDO - NAVEGACION FIJA */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col overflow-hidden">
        {/* Logo/Titulo */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚔️</span>
            <div>
              <h1 className="text-sm font-bold text-amber-300">INFORME FLONIC</h1>
              <p className="text-xs text-slate-500">UTFSM 2024</p>
            </div>
          </div>
        </div>

        {/* Navegacion - Scroll interno */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group
                ${activeSection === section.id
                  ? `bg-gradient-to-r ${section.id === 0 ? 'from-amber-500 to-amber-600' : 
                                       section.id === 1 ? 'from-blue-500 to-blue-600' :
                                       section.id === 2 ? 'from-red-500 to-red-600' :
                                       section.id === 3 ? 'from-purple-500 to-purple-600' :
                                       section.id === 4 ? 'from-green-500 to-green-600' :
                                       section.id === 5 ? 'from-cyan-500 to-cyan-600' :
                                       section.id === 6 ? 'from-yellow-500 to-yellow-600' :
                                       'from-slate-600 to-slate-700'} text-slate-950 font-semibold shadow-lg`
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{section.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold opacity-75">{section.number}</p>
                  <p className="text-sm font-medium truncate">{section.title}</p>
                </div>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2024</p>
          <p>Análisis Jurídico</p>
        </div>
      </aside>

      {/* PANEL DERECHO - CONTENIDO */}
      <main className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
        {/* HEADER - Fijo */}
        <header className="border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 px-8 py-6 flex-shrink-0">
          <div className="max-w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{SECTIONS[activeSection].icon}</span>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                  Sección {SECTIONS[activeSection].number}
                </p>
                <h2 className={`text-2xl font-bold ${SECTIONS[activeSection].color}`}>
                  {SECTIONS[activeSection].title}
                </h2>
              </div>
            </div>

            {/* Hero Data - visible solo en seccion 01 */}
            {activeSection === 0 && (
              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-slate-700">
                <div className="bg-slate-800/50 rounded px-3 py-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Fecha</p>
                  <p className="text-sm font-semibold text-amber-300">24 oct 2024</p>
                </div>
                <div className="bg-slate-800/50 rounded px-3 py-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Datos Expuestos</p>
                  <p className="text-sm font-semibold text-amber-300">46 GB</p>
                </div>
                <div className="bg-slate-800/50 rounded px-3 py-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Atacante</p>
                  <p className="text-sm font-semibold text-amber-300">RansomHub</p>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* CONTENIDO - Con scroll interno */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-4xl">
            <CurrentComponent />
          </div>
        </div>
      </main>
    </div>
  );
}