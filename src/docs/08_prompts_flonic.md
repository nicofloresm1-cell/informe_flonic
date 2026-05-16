# 08 — Bitácora de Uso de Inteligencia Artificial
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

Este documento registra el uso de herramientas de Inteligencia Artificial durante el desarrollo del presente informe jurídico. Se detallan los prompts más relevantes utilizados, las correcciones realizadas a las respuestas de la IA, la justificación de cada decisión y una reflexión final sobre el uso de la IA como agente de investigación versus chatbot.

**Herramienta principal utilizada:** Claude (Anthropic) — Claude Sonnet 4.6 (web) y Claude Haiku 4.5 (Claude Code / VS Code)
**Período de uso:** Mayo 2025

---

## 1. Prompts Utilizados en el Desarrollo del Informe

### Secciones 01 a 07 — Redacción e Investigación Jurídica

Para la redacción de cada sección del informe (resumen ejecutivo, marco legal, delitos, comparación, responsabilidades, datos personales y conclusiones), se utilizó el siguiente tipo de prompt de forma iterativa:

**Prompt general aplicado a cada sección:**
> *"Mejora la redacción de esta investigación, asegurando que el contenido sea claro, preciso y cumpla con los criterios de análisis jurídico. Incorpora citas textuales de los artículos correspondientes, vincula cada norma a un hecho concreto del caso UTFSM y asegura que se identifiquen al menos los elementos exigidos por la rúbrica."*

**Por qué se usó este enfoque:** Cada sección fue revisada con este tipo de prompt para elevar la calidad del análisis desde un nivel descriptivo a un nivel de argumentación jurídica con respaldo normativo explícito. La IA actuó como asistente de redacción y estructuración, mientras el estudiante definía qué criterios debían cumplirse según la rúbrica.

**Qué se aceptó:** La estructuración de los contenidos, las citas textuales de artículos legales, las tablas comparativas y el análisis de aplicabilidad al caso.

**Qué se corrigió:** En varias secciones las respuestas iniciales eran demasiado generales. Se solicitó en cada caso vincular explícitamente cada norma a un hecho concreto del caso UTFSM, añadir citas textuales en formato blockquote y completar los elementos mínimos exigidos por cada criterio de la rúbrica.

---

## 2. Prompts Utilizados en el Desarrollo de la Aplicación Web

### Prompt 1 — Construcción inicial de la aplicación

**Prompt utilizado:**
> *"Tengo una app React con Vite, Tailwind CSS y react-markdown instalados. Estructura de archivos a generar: src/docs/ con 8 archivos .md que son la fuente de contenido. src/pages/ con 8 componentes .jsx, uno por sección. Cada uno importa su .md con import contenido from '../docs/01_resumen.md?raw' y lo renderiza con react-markdown. Aplicar estilos Tailwind a los elementos renderizados via components prop de react-markdown con diseño oscuro coherente. src/App.jsx como landing page completa con: todo en pantalla sin scrollbars, layout fijo h-screen overflow-hidden, panel izquierdo fijo con navegación de 8 botones con ícono y número, panel derecho que muestra el componente de la sección activa con scroll solo en este panel, hero/header superior con título del caso y datos clave, sin react-router-dom usando useState."*

**Por qué se usó:** Se necesitaba construir desde cero la estructura completa de la aplicación informativa que presentara el informe de forma interactiva, organizada en 8 secciones navegables.

**Qué se aceptó:** La estructura de carpetas `src/docs/` y `src/pages/`, los 8 componentes con react-markdown, el sistema de navegación por useState sin react-router-dom, y el diseño oscuro con colores diferenciados por sección.

**Qué se corrigió:** La primera versión generada tenía scrollbars visibles en el sidebar y el contenido se centraba en lugar de alinearse a la izquierda. Se solicitó reescribir el layout con overflow-hidden en el sidebar y max-w-none en el contenido del panel derecho.

---

### Prompt 2 — Corrección del layout y sidebar

**Prompt utilizado:**
> *"El layout debe ser h-screen overflow-hidden flex sin ninguna scrollbar visible en ningún contenedor excepto el panel de contenido. Sidebar izquierdo (w-56 máximo, flex-shrink-0): logo/título compacto en 2 líneas pequeñas que no se corte, botones de navegación compactos con ícono pequeño (20px), número en text-[10px], nombre en text-xs, sin padding excesivo (py-2 px-3), overflow-hidden en el sidebar, los 8 botones deben caber en pantalla sin scroll. Panel derecho (flex-1 overflow-y-auto): header de sección pegado arriba (sticky top-0), contenido alineado a la izquierda no centrado, máximo ancho del texto max-w-none para usar toda la pantalla disponible, padding interno px-8 py-6. Markdown renderizado: h1, h2, h3 alineados a la izquierda, tablas con w-full sin centrado, listas con bullet visible."*

**Por qué se usó:** El layout generado en el Prompt 1 tenía el sidebar con scroll visible y botones demasiado grandes. Era necesario un control preciso del espacio para que los 8 botones cupieran sin desplazamiento y el contenido usara todo el ancho disponible.

**Qué se aceptó:** Los botones compactos con py-2 px-3 y text-xs, el sidebar con overflow-hidden, y los 8 botones visibles sin scroll. El contenido del markdown alineado a la izquierda en todas las páginas.

**Qué se corrigió:** Persistía una barra de scroll horizontal en el panel derecho. Se identificó que faltaba min-w-0 en el elemento flex-1 y overflow-x-hidden en el div de contenido.

---

### Prompt 3 — Corrección del desbordamiento horizontal

**Prompt utilizado:**
> *"Tengo una app React con Vite y Tailwind CSS. El contenido se desborda horizontalmente y aparece una barra de scroll en la parte inferior. Necesito que lo corrijas. El problema: el texto del markdown renderizado se sale del viewport hacia la derecha. Lo que necesito: en index.html dentro del head agrega: html, body, #root con overflow-x: hidden y max-width: 100vw. En cada archivo src/pages/*.jsx el div contenedor del ReactMarkdown debe tener overflow-x-hidden break-words w-full. En App.jsx el div de contenido debe ser flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 min-w-0 w-full. Dame los archivos corregidos: index.html, App.jsx y todos los src/pages/*.jsx."*

**Por qué se usó:** El texto del markdown renderizado se salía del viewport hacia la derecha generando una barra de scroll horizontal que arruinaba el layout. Era necesario un fix específico y preciso en todos los archivos afectados simultáneamente.

**Qué se aceptó:** Los cambios en index.html con overflow-x: hidden y los classNames overflow-x-hidden break-words w-full en cada componente de página.

**Qué se corrigió:** Se identificó que el problema persistía por el CSS heredado del template original de Vite en index.css, que tenía width: 1126px y text-align: center en #root. Se limpió el index.css dejando solo @import "tailwindcss" y el reset mínimo necesario, lo que finalmente resolvió el problema.

---

### Prompt 4 — Ajuste final del contenido visible

**Prompt utilizado:**
> *"En mi app React con Tailwind, el contenido del panel derecho se corta horizontalmente — el texto no llega al borde derecho de la pantalla aunque hay espacio disponible. Fix necesario en cada página: el div que envuelve ReactMarkdown debe tener w-full max-w-none overflow-x-hidden break-words. Fix en App.jsx: el div de contenido debe tener flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 min-w-0 w-full max-w-none. Fix en index.html: html, body, #root con overflow-x: hidden, width: 100%, max-width: 100%. Aplica estos cambios en todos los archivos src/pages/*.jsx y en App.jsx. No cambies la lógica ni el contenido, solo los classNames del contenedor y agrega w-full break-words whitespace-normal al componente p del ReactMarkdown."*

**Por qué se usó:** Tras los fixes anteriores, el texto seguía cortándose antes del borde derecho del panel, desperdiciando espacio visible. Se necesitaba forzar que el contenido usara el 100% del ancho disponible sin desbordarse.

**Qué se aceptó:** Los classNames w-full max-w-none en los wrappers de cada página y el atributo whitespace-normal en los párrafos renderizados por react-markdown.

**Qué se corrigió:** La propiedad max-w-none no era suficiente por sí sola. Se combinó con box-sizing: border-box vía style inline en los contenedores principales para que el navegador calculara correctamente el ancho disponible independientemente de la barra lateral del browser utilizado.

---

## 3. Tabla Resumen de Correcciones

| Prompt | Sección | Problema detectado | Corrección aplicada |
|---|---|---|---|
| Redacción general | 01–07 | Contenido genérico sin citas textuales | Solicitar vinculación explícita al caso y citas en blockquote |
| Prompt 1 | App web | Scrollbar en sidebar, contenido centrado | overflow-hidden en sidebar, max-w-none en contenido |
| Prompt 2 | App web | Botones demasiado grandes, layout desbordado | py-2 px-3, text-xs, min-w-0 en flex-1 |
| Prompt 3 | App web | Barra scroll horizontal, CSS de Vite interfiriendo | Limpiar index.css, overflow-x-hidden en todos los pages |
| Prompt 4 | App web | Texto cortado antes del borde derecho | w-full max-w-none + box-sizing: border-box inline |

---

## 4. Reflexión Final: IA como Agente vs. Chatbot

### Uso como chatbot (reactivo)
En las primeras interacciones, la IA se usó de forma reactiva: se pedía una sección y se aceptaba la respuesta sin análisis crítico. Esto producía contenido funcional pero genérico, sin citas textuales y sin vinculación explícita al caso. El resultado no alcanzaba el nivel "Destacado" de la rúbrica.

### Uso como agente (iterativo y dirigido)
La calidad mejoró significativamente al usar la IA de forma iterativa: proporcionando la rúbrica como criterio de evaluación, señalando exactamente qué faltaba en cada respuesta y solicitando correcciones con justificación específica. Este modo convierte a la IA en un agente de investigación que refina su output en función de criterios externos precisos.

### Limitaciones identificadas
- Los textos literales de artículos legales deben contrastarse con la Biblioteca del Congreso Nacional (BCN) antes de ser citados en un documento jurídico formal.
- Las respuestas iniciales tienden a la generalidad: sin instrucciones específicas, la IA produce resúmenes que no alcanzan el nivel de detalle requerido en análisis jurídico.
- El código generado requiere revisión: los componentes React necesitaron cuatro rondas de corrección antes de quedar correctos.

### Conclusión
La IA fue útil como acelerador de investigación y estructuración, pero no como sustituto del criterio jurídico. Cada sección generada requirió revisión, corrección y ampliación. El valor real estuvo en generar borradores completos rápidamente, permitiendo dedicar más tiempo al análisis crítico y verificación de fuentes.

---

## 5. Referencias y Fuentes Consultadas

### Caso UTFSM — Cobertura Mediática
- FastCheck CL — *Hackeo a la UTFSM: RansomHub filtró 46 GB de datos* (14/11/2024)
  https://www.fastcheck.cl/2024/11/14/utfsm-ransomhub/
- The Clinic — *Filtración de datos UTFSM* (16/11/2024)
  https://www.theclinic.cl/2024/11/16/hackeo-utfsm/
- El Mercurio de Valparaíso — *Datos de estudiantes UTFSM expuestos* (16/11/2024)
  https://www.mercuriovalpo.cl/2024/11/16/utfsm-datos-filtrados/
- CNN Chile — *RansomHub publica datos robados de la UTFSM* (16/11/2024)
  https://www.cnnchile.com/pais/ransomhub-datos-utfsm/

### Leyes Chilenas — Biblioteca del Congreso Nacional (BCN)
- **Ley N° 21.459** — Establece normas sobre delitos informáticos (2022)
  https://www.bcn.cl/leychile/navegar?idNorma=1177865
- **Ley N° 19.628** — Sobre protección de la vida privada (1999)
  https://www.bcn.cl/leychile/navegar?idNorma=141599
- **Ley N° 21.663** — Ley Marco de Ciberseguridad (2024)
  https://www.bcn.cl/leychile/navegar?idNorma=1196636
- **Ley N° 21.719** — Nueva Ley de Protección de Datos Personales (2024)
  https://www.bcn.cl/leychile/navegar?idNorma=1196308
- **Ley N° 20.393** — Responsabilidad Penal de las Personas Jurídicas
  https://www.bcn.cl/leychile/navegar?idNorma=1008668
- **Código Penal de Chile**
  https://www.bcn.cl/leychile/navegar?idNorma=1984

### Marco Internacional
- **GDPR** — Reglamento (UE) 2016/679 (texto oficial en español)
  https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679
- **Convenio de Budapest** — Convenio sobre la Ciberdelincuencia (Consejo de Europa, 2001)
  https://www.coe.int/en/web/cybercrime/the-budapest-convention
- **ISO/IEC 27001:2022** — Information Security Management Systems
  https://www.iso.org/standard/82875.html

### Ciberseguridad
- **CISA Advisory AA24-242A** — *#StopRansomware: RansomHub Ransomware* (2024)
  https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-242a
- **ANCI** — Agencia Nacional de Ciberseguridad de Chile
  https://www.anci.gob.cl
- **CMF Circular N° 2884** — Normas de ciberseguridad para entidades financieras
  https://www.cmfchile.cl/portal/principal/613/w3-article-27224.html