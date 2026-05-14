import { useState } from "react";

const SECTIONS = [
  {
    id: "resumen",
    title: "Resumen Ejecutivo",
    icon: "📋",
    color: "from-blue-500 to-blue-600",
    content: {
      date: "24 de octubre de 2024",
      victim: "Universidad Técnica Federico Santa María (UTFSM)",
      attacker: "Grupo RansomHub",
      type: "Ransomware - Doble extorsión",
      dataExposed: "46 GB",
      highlights: [
        "Listas de estudiantes con RUT y datos personales",
        "Correos internos de la Mesa de Servicios",
        "2,700+ deudores del Fondo Solidario",
        "Datos de académicos y Centro de Alumnos"
      ],
      about_attacker: {
        name: "RansomHub",
        model: "Ransomware como Servicio (RaaS)",
        founded: "Febrero de 2024",
        rank: "Grupo de ransomware más activo del mundo",
        victims: "531+ organizaciones atacadas",
        strategy: "Modelo de afiliados con compartición de ganancias"
      },
      timeline: [
        { date: "24 oct 2024", event: "Ataque ransomware a sistemas UTFSM" },
        { date: "4 nov 2024", event: "RansomHub anuncia públicamente el robo" },
        { date: "14 nov 2024", event: "Publicación de 46 GB en dark web" },
        { date: "16 nov 2024", event: "Cobertura mediática nacional" }
      ],
      impact: {
        title: "Impacto y Consecuencias",
        direct: "Riesgo de suplantación de identidad y fraude financiero para afectados",
        institutional: "Daño reputacional a institución de alto prestigio nacional e internacional",
        regulatory: "Exposición a sanciones bajo Ley 19.628 de Protección de Datos",
        national: "Evidencia de vulnerabilidad del sector educativo chileno"
      }
    }
  },
  {
    id: "marco",
    title: "Marco Legal",
    icon: "⚖️",
    color: "from-purple-500 to-purple-600",
    content: {
      laws: [
        {
          name: "Ley 21.459",
          desc: "Ley de Delitos Informáticos (2022)",
          details: "Reemplazó Ley 19.223 (1993). Adecua legislación a Convenio de Budapest. Tipifica acceso ilícito, interceptación, sabotaje, fraude, receptación y abuso de dispositivos informáticos.",
          enfoque: "Delitos informáticos y ciberseguridad"
        },
        {
          name: "Ley 19.628",
          desc: "Protección de Datos Personales (1999)",
          details: "Norma fundamental sobre tratamiento de datos personales. Establece principios de seguridad, confidencialidad, finalidad y cuidado del responsable.",
          enfoque: "Privacidad y derechos de titulares de datos"
        },
        {
          name: "Ley 21.663",
          desc: "Ley Marco de Ciberseguridad (2024)",
          details: "Crea Agencia Nacional de Ciberseguridad (ANCI) y CSIRT Nacional. Obliga a reportar incidentes en máximo 3 horas. Sanciones desde leve hasta gravísima.",
          enfoque: "Regulación y coordinación institucional"
        }
      ],
      principles: [
        { title: "Seguridad de sistemas", desc: "Protección contra acceso no autorizado e ilícito" },
        { title: "Confidencialidad de datos", desc: "Deber de mantener secreto información personal" },
        { title: "Reporte de incidentes", desc: "Máximo 3 horas desde conocimiento del incidente" },
        { title: "Responsabilidad de custodia", desc: "Responsabilidad civil del titular de sistemas" }
      ],
      obligations: [
        "Implementar medidas de seguridad apropiadas al tipo de datos",
        "Reportar brechas de seguridad en plazo máximo de 3 horas",
        "Notificar a afectados sobre exposición de datos personales",
        "Mantener registros de acceso y tratamiento de información",
        "Cumplir con auditorías de seguridad periódicas"
      ]
    }
  },
  {
    id: "delitos",
    title: "Delitos Cometidos",
    icon: "⚠️",
    color: "from-red-500 to-red-600",
    content: {
      intro: "El ataque a la UTFSM constituye múltiples delitos independientes que pueden ser imputados simultáneamente en concurso real de delitos.",
      crimes: [
        {
          art: "Art. 1°",
          name: "Sabotaje Informático",
          pena: "541 días a 5 años (+1 grado si afecta servicios esenciales)",
          bien_juridico: "Disponibilidad e integridad de sistemas",
          aplicacion: "Ransomware cifró archivos, interrumpiendo servicios educativos de la universidad"
        },
        {
          art: "Art. 2°",
          name: "Acceso Ilícito",
          pena: "61-540 días o multa (con ánimo de apoderarse: 541 días-3 años; si divulga: 541 días-5 años)",
          bien_juridico: "Confidencialidad e integridad de sistemas",
          aplicacion: "RansomHub superó barreras técnicas de seguridad para acceder a sistemas internos con ánimo de robo de datos"
        },
        {
          art: "Art. 3°",
          name: "Interceptación Ilícita",
          pena: "541 días a 3-5 años (según modalidad)",
          bien_juridico: "Confidencialidad de comunicaciones e información",
          aplicacion: "Exfiltración no autorizada de 46 GB de datos personales contenidos en sistemas de la UTFSM"
        },
        {
          art: "Art. 4°",
          name: "Ataque a Integridad de Datos",
          pena: "541 días a 3 años (si daño es grave)",
          bien_juridico: "Integridad de datos informáticos",
          aplicacion: "Cifrado de datos con ransomware alteró y suprimió funcionalmente la disponibilidad de información"
        },
        {
          art: "Art. 6°",
          name: "Receptación Informática",
          pena: "Pena del delito base rebajada en un grado",
          bien_juridico: "Cierre del circuito delictivo",
          aplicacion: "Transferencia y publicación de datos ilícitamente obtenidos en dark web"
        },
        {
          art: "Art. 7°",
          name: "Fraude Informático",
          pena: "541 días-5 años + multa (según monto del perjuicio)",
          bien_juridico: "Patrimonio e indemnidad económica",
          aplicacion: "Exigencia de rescate económico a cambio de no publicar datos robados (manipulación con fines de lucro)"
        },
        {
          art: "Art. 8°",
          name: "Abuso de Dispositivos",
          pena: "61-540 días o multa 11-20 UTM",
          bien_juridico: "Prevención de herramientas delictivas",
          aplicacion: "Uso de software ransomware diseñado específicamente para cifrar sistemas y extorsionar"
        }
      ],
      concurso: "Todas estas conductas constituyen un concurso real de delitos que permite acumular penas jurídicamente, potencialmente superando los 5 años de presidio."
    }
  },
  {
    id: "comparacion",
    title: "Comparación",
    icon: "🔍",
    color: "from-green-500 to-green-600",
    content: {
      placeholder: "Contenido en construcción"
    }
  },
  {
    id: "responsabilidades",
    title: "Responsabilidades",
    icon: "👥",
    color: "from-yellow-500 to-yellow-600",
    content: {
      placeholder: "Contenido en construcción"
    }
  },
  {
    id: "datos",
    title: "Análisis de Datos",
    icon: "📊",
    color: "from-indigo-500 to-indigo-600",
    content: {
      placeholder: "Contenido en construcción"
    }
  },
  {
    id: "conclusiones",
    title: "Conclusiones",
    icon: "✅",
    color: "from-emerald-500 to-emerald-600",
    content: {
      placeholder: "Contenido en construcción"
    }
  },
  {
    id: "prompts",
    title: "Prompts Utilizados",
    icon: "🤖",
    color: "from-pink-500 to-pink-600",
    content: {
      placeholder: "Contenido en construcción"
    }
  }
];

function SectionCard({ section, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="group cursor-pointer transition-all duration-300"
    >
      <div
        className={`bg-gradient-to-r ${section.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{section.icon}</span>
            <h3 className="text-lg font-bold text-white">{section.title}</h3>
          </div>
          <span className="text-2xl text-white transition-transform duration-300">{isOpen ? "−" : "+"}</span>
        </div>
      </div>

      {/* Contenido expandible */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-zinc-900 p-6 border border-t-0 border-zinc-800 rounded-b-lg space-y-4">
          {section.id === "resumen" && (
            <div className="space-y-5 text-sm text-zinc-300">
              {/* Datos básicos */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-zinc-500 text-xs uppercase font-semibold">Fecha del Ataque</p>
                  <p className="text-white">{section.content.date}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase font-semibold">Datos Expuestos</p>
                  <p className="text-white">{section.content.dataExposed}</p>
                </div>
              </div>

              {/* Información sobre el atacante */}
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-zinc-500 text-xs uppercase font-semibold mb-3">Sobre RansomHub</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-zinc-500">Fundado:</span> {section.content.about_attacker.founded}
                  </div>
                  <div>
                    <span className="text-zinc-500">Modelo:</span> {section.content.about_attacker.model}
                  </div>
                  <div>
                    <span className="text-zinc-500">Víctimas:</span> {section.content.about_attacker.victims}
                  </div>
                  <div>
                    <span className="text-zinc-500">Estatus:</span> {section.content.about_attacker.rank}
                  </div>
                </div>
              </div>

              {/* Información comprometida */}
              <div>
                <p className="text-zinc-500 text-xs uppercase font-semibold mb-3">Información Comprometida</p>
                <div className="space-y-2">
                  {section.content.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-zinc-800 p-2 rounded">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                      <span className="text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cronología */}
              <div>
                <p className="text-zinc-500 text-xs uppercase font-semibold mb-3">Cronología del Incidente</p>
                <div className="space-y-2">
                  {section.content.timeline.map((event, i) => (
                    <div key={i} className="flex gap-3 text-xs">
                      <span className="text-blue-400 font-semibold whitespace-nowrap">{event.date}</span>
                      <span className="text-zinc-400">{event.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impacto */}
              <div className="bg-red-900/20 border border-red-800/50 p-4 rounded-lg">
                <p className="text-zinc-500 text-xs uppercase font-semibold mb-3 text-red-400">{section.content.impact.title}</p>
                <div className="space-y-2 text-xs">
                  <div><span className="font-semibold text-zinc-300">Para afectados:</span> {section.content.impact.direct}</div>
                  <div><span className="font-semibold text-zinc-300">Para la institución:</span> {section.content.impact.institutional}</div>
                  <div><span className="font-semibold text-zinc-300">Regulatorio:</span> {section.content.impact.regulatory}</div>
                  <div><span className="font-semibold text-zinc-300">Contexto nacional:</span> {section.content.impact.national}</div>
                </div>
              </div>
            </div>
          )}

          {section.id === "marco" && (
            <div className="space-y-4 text-sm text-zinc-300">
              {/* Marcos Legales */}
              <div>
                <p className="text-zinc-500 text-xs uppercase mb-3 font-semibold">Marcos Legales Aplicables</p>
                <div className="space-y-3">
                  {section.content.laws.map((law, i) => (
                    <div key={i} className="bg-zinc-800 p-4 rounded border border-zinc-700 hover:border-purple-600 transition-colors">
                      <p className="font-semibold text-white text-sm">{law.name}</p>
                      <p className="text-xs text-zinc-400 mb-2">{law.desc}</p>
                      <p className="text-xs text-zinc-300 mb-2">{law.details}</p>
                      <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded inline-block">{law.enfoque}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Principios Clave */}
              <div>
                <p className="text-zinc-500 text-xs uppercase mb-3 font-semibold">Principios Clave</p>
                <div className="grid grid-cols-1 gap-2">
                  {section.content.principles.map((principle, i) => (
                    <div key={i} className="bg-zinc-800 p-3 rounded">
                      <p className="font-semibold text-white text-sm">{principle.title}</p>
                      <p className="text-xs text-zinc-400 mt-1">{principle.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Obligaciones */}
              <div>
                <p className="text-zinc-500 text-xs uppercase mb-3 font-semibold">Obligaciones de Responsables</p>
                <ul className="space-y-2">
                  {section.content.obligations.map((obligation, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                      <span>{obligation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {section.id === "delitos" && (
            <div className="space-y-4 text-sm text-zinc-300">
              <p className="text-zinc-400 text-xs italic bg-zinc-800 p-3 rounded">{section.content.intro}</p>

              {/* Delitos */}
              <div className="space-y-3">
                {section.content.crimes.map((crime, i) => (
                  <div key={i} className="bg-zinc-800 p-4 rounded border border-red-900/30 hover:border-red-600 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-white">{crime.art}: {crime.name}</p>
                      </div>
                      <span className="text-red-400 text-xs font-semibold whitespace-nowrap ml-2 bg-red-900/20 px-2 py-1 rounded">{crime.pena}</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div><span className="text-zinc-500 font-semibold">Bien jurídico:</span> {crime.bien_juridico}</div>
                      <div><span className="text-zinc-500 font-semibold">Aplicación al caso:</span> <span className="text-zinc-200">{crime.aplicacion}</span></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Concurso */}
              <div className="bg-orange-900/20 border border-orange-800/50 p-4 rounded-lg text-xs">
                <p className="font-semibold text-orange-400 mb-2">⚖️ Concurso de Delitos</p>
                <p className="text-zinc-300">{section.content.concurso}</p>
              </div>
            </div>
          )}

          {section.content.placeholder && (
            <div className="flex items-center justify-center py-12 text-zinc-500">
              <p className="text-center text-sm">📝 {section.content.placeholder}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* HEADER */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Informe FLONIC
                </span>
              </h1>
              <p className="text-zinc-500 text-sm mt-1">Caso UTFSM — Análisis de Filtración de Datos 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Secciones del Informe</h2>
          <p className="text-zinc-400 text-sm">Haz clic en cualquier apartado para ver los detalles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SECTIONS.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              isOpen={openSections[section.id] || false}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 mt-16 py-8 text-center text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Informe FLONIC • Caso Universidad Técnica Federico Santa María</p>
        <p className="mt-2 text-xs text-zinc-700">Aplicación interactiva de análisis de ciberseguridad</p>
      </footer>
    </div>
  );
}