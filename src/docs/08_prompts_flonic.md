# 08 — Bitácora de Uso de Inteligencia Artificial
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

Este documento registra el uso de herramientas de Inteligencia Artificial durante el desarrollo del presente informe jurídico. Se detallan los prompts utilizados, las correcciones realizadas a las respuestas de la IA, la justificación de cada decisión y una reflexión final sobre el uso de la IA como agente de investigación versus chatbot.

**Herramienta principal utilizada:** Claude (Anthropic) — Claude Sonnet 4.6 (web) y Claude Haiku 4.5 (Claude Code / VS Code)
**Período de uso:** Mayo 2025

---

## 1. Uso de IA en la Redacción del Informe Jurídico (Secciones 01–07)

### Metodología aplicada

Para la redacción de las secciones jurídicas del informe, se utilizó la IA como **asistente de redacción y estructuración**. El proceso consistió en que el estudiante investigó y recopiló la información de cada sección — hechos del caso, artículos legales aplicables, datos comprometidos, actores involucrados — a partir de fuentes primarias (BCN, CISA, medios de comunicación), y luego entregó esa investigación a la IA para que la redactara de forma clara, estructurada y con lenguaje jurídico adecuado.

**Prompt utilizado para las secciones jurídicas:**
> *"Te paso la información que investigué sobre el caso UTFSM 2024. Necesito que la redactes de forma clara, precisa y con lenguaje jurídico adecuado. Estructura el contenido con títulos, subtítulos, tablas donde corresponda y citas textuales de los artículos legales mencionados. Vincula cada norma a un hecho concreto del caso."*

**Actor/conducta investigada:** Grupo RansomHub — ataque ransomware doble extorsión a la UTFSM, octubre–noviembre 2024. Datos comprometidos: 46 GB con RUT, correos, deudores Fondo Solidario. Normas activadas: Ley 21.459, Ley 19.628, Ley 21.663, Convenio de Budapest.

**Por qué se usó:** La IA actuó como redactor especializado que transformó la información bruta recopilada por el estudiante en texto jurídico estructurado con el nivel de detalle requerido por la rúbrica. El criterio de qué incluir, qué normas aplicar y qué hechos del caso eran relevantes fue decisión del estudiante.

**Qué se aceptó:** La estructura general de cada sección, la redacción formal, las tablas comparativas, las citas textuales en formato blockquote y el análisis de aplicabilidad de cada norma al caso.

**Qué se corrigió:** En varias secciones las respuestas iniciales eran demasiado generales. Se solicitó en cada caso vincular explícitamente cada norma a un hecho concreto del caso UTFSM, completar los derechos ARCO con citas textuales del Art. 12°, 13° y 16°, y añadir la tabla de brechas regulatorias comparando el marco chileno con el GDPR.

---

## 2. Prompts Utilizados en el Desarrollo de la Aplicación Web

### Prompt 1 — Estructura inicial de la aplicación

**Prompt utilizado:**
> *"Tengo una aplicación React con Vite y Tailwind CSS ya configurados, y react-markdown instalado. Necesito que construyas lo siguiente: 8 archivos .md copiados/creados en src/docs/ — uno por sección del informe (01 al 08, donde el 08 es un placeholder vacío de bitácora de IA). 8 componentes .jsx en src/pages/ — uno por sección. Cada uno importa y renderiza su .md correspondiente usando react-markdown. Deben tener su propio diseño y estilos Tailwind dentro del componente. src/App.jsx como base de la landing page. Debe incluir: Hero con título del caso (Filtración UTFSM 2024) y datos clave. Navegación entre las 8 secciones (sin react-router-dom, usando estado interno de React). Cada sección tiene su propio apartado en la página, con diseño coherente de temática legal/ciberseguridad. Usa toda la información de los .md pero resumida visualmente. Diseño: oscuro, serio, temática legal + ciberseguridad. Tipografía con Google Fonts via CDN en index.html. Sin imágenes. Solo Tailwind + CSS personalizado si es necesario. Genera todos los archivos en orden. Empieza por los .md en src/docs/, luego los pages, luego el App.jsx."*

**Por qué se usó:** Se necesitaba construir desde cero la estructura completa de la aplicación informativa que presentara el informe de forma interactiva, organizada en 8 secciones navegables con diseño coherente.

**Qué se aceptó:** La estructura de carpetas `src/docs/` y `src/pages/`, los 8 componentes con react-markdown, el sistema de navegación por useState sin react-router-dom, y el diseño oscuro con Google Fonts integradas en index.html.

**Qué se corrigió:** La primera versión tenía scrollbars visibles en el sidebar, el contenido se centraba en lugar de alinearse a la izquierda, y los botones de navegación eran demasiado grandes. Se solicitó reescribir con overflow-hidden en el sidebar y max-w-none en el contenido.

---

### Prompt 2 — Refinamiento del layout y estructura de archivos

**Prompt utilizado:**
> *"Tengo una app React con Vite, Tailwind CSS y react-markdown instalados. Estructura de archivos a generar: src/docs/ con 8 archivos .md que son la fuente de contenido. src/pages/ con 8 componentes .jsx, uno por sección. Cada uno importa su .md con import contenido from '../docs/01_resumen.md?raw' y lo renderiza con react-markdown. Aplicar estilos Tailwind a los elementos renderizados via components prop de react-markdown (h1, h2, p, table, ul, blockquote, etc.) con diseño oscuro coherente. src/App.jsx con: todo en pantalla sin scrollbars, layout fijo h-screen overflow-hidden, panel izquierdo fijo con navegación de 8 botones con ícono y número, panel derecho con scroll solo en este panel (overflow-y-auto), hero/header superior con título del caso y datos clave, sin react-router-dom usando useState. Diseño: temática legal + ciberseguridad. Paleta oscura zinc-950/900. Tipografía distintiva con Google Fonts en index.html. Sin imágenes."*

**Por qué se usó:** Se necesitaba precisar la forma de importar los archivos `.md` con Vite (`?raw`) y aplicar estilos específicos a cada elemento HTML renderizado por react-markdown mediante la prop `components`, para lograr un diseño coherente en todas las secciones.

**Qué se aceptó:** La implementación del import `?raw` para los archivos markdown, la prop `components` de react-markdown con estilos Tailwind diferenciados por elemento (h1, h2, p, table, ul, blockquote), y la paleta zinc-950/900.

**Qué se corrigió:** El layout aún presentaba problemas de alineación y el sidebar mostraba scroll en algunas resoluciones. Se requirió un prompt adicional específico para el layout.

---

### Prompt 3 — Corrección del layout: sidebar y panel derecho

**Prompt utilizado:**
> *"El layout debe ser h-screen overflow-hidden flex sin ninguna scrollbar visible en ningún contenedor excepto el panel de contenido. Sidebar izquierdo (w-56 máximo, flex-shrink-0): logo/título compacto en 2 líneas pequeñas que no se corte, botones de navegación compactos con ícono pequeño (20px), número en text-[10px], nombre en text-xs, sin padding excesivo (py-2 px-3), overflow-hidden en el sidebar, los 8 botones deben caber en pantalla sin scroll. Panel derecho (flex-1 overflow-y-auto): header de sección pegado arriba (sticky top-0), contenido alineado a la izquierda no centrado, máximo ancho del texto max-w-none para usar toda la pantalla disponible, padding interno px-8 py-6. Markdown renderizado: h1, h2, h3 alineados a la izquierda, tablas con w-full sin centrado, listas con bullet visible."*

**Por qué se usó:** El sidebar seguía mostrando scrollbar y los 8 botones no cabían en pantalla sin desplazamiento. Era necesario un control preciso del espacio con instrucciones exactas de tamaño y padding para cada elemento.

**Qué se aceptó:** Los botones compactos con py-2 px-3 y text-xs, el sidebar con overflow-hidden y flex-shrink-0, los 8 botones visibles sin scroll, y el contenido del markdown alineado a la izquierda con max-w-none.

**Qué se corrigió:** Persistía una barra de scroll horizontal en el panel derecho. Se identificó que faltaba min-w-0 en el elemento flex-1 y overflow-x-hidden en el div de contenido, lo que requirió el siguiente prompt.

---

### Prompt 4 — Corrección del desbordamiento horizontal

**Prompt utilizado:**
> *"Tengo una app React con Vite y Tailwind CSS. El contenido se desborda horizontalmente y aparece una barra de scroll en la parte inferior. El problema: el texto del markdown renderizado se sale del viewport hacia la derecha. Lo que necesito: en index.html dentro del head agrega: html, body, #root con overflow-x: hidden y max-width: 100vw. En cada archivo src/pages/*.jsx el div contenedor del ReactMarkdown debe tener overflow-x-hidden break-words w-full. En App.jsx el div de contenido debe ser flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 min-w-0 w-full. Dame los archivos corregidos: index.html, App.jsx y todos los src/pages/*.jsx."*

**Por qué se usó:** El texto del markdown renderizado se salía del viewport hacia la derecha generando una barra de scroll horizontal que arruinaba el layout. Se necesitaba un fix simultáneo en todos los archivos afectados.

**Qué se aceptó:** Los cambios en index.html con overflow-x: hidden y max-width: 100vw, y los classNames overflow-x-hidden break-words w-full en cada componente de página.

**Qué se corrigió:** Se identificó que el problema persistía por el CSS heredado del template original de Vite en index.css, que tenía width: 1126px y text-align: center en #root. Se limpió el index.css dejando solo @import "tailwindcss" y el reset mínimo, lo que resolvió el problema.

---

### Prompt 5 — Corrección del ancho del contenido

**Prompt utilizado:**
> *"En mi app React con Tailwind, el contenido del panel derecho se corta horizontalmente — el texto no llega al borde derecho de la pantalla aunque hay espacio disponible. Fix necesario en cada página: el div que envuelve ReactMarkdown debe tener w-full max-w-none overflow-x-hidden break-words. Agregar al componente p: w-full break-words whitespace-normal. Fix en App.jsx: flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 min-w-0 w-full max-w-none. Fix en index.html: html, body, #root con overflow-x: hidden, width: 100%, max-width: 100%. Aplica estos cambios en todos los archivos src/pages/*.jsx y en App.jsx. No cambies la lógica ni el contenido, solo los classNames."*

**Por qué se usó:** Tras los fixes anteriores, el texto se cortaba antes del borde derecho del panel, desperdiciando espacio visible. Se necesitaba forzar que el contenido usara el 100% del ancho disponible sin desbordarse.

**Qué se aceptó:** Los classNames w-full max-w-none en los wrappers de cada página y whitespace-normal en los párrafos de react-markdown.

**Qué se corrigió:** La propiedad max-w-none no era suficiente por sí sola. Se combinó con box-sizing: border-box vía style inline en los contenedores principales para que el navegador calculara correctamente el ancho real disponible.

---

### Prompt 6 — Diseño responsivo

**Prompt utilizado:**
> *"Necesito que todo el contenido tenga diseño responsivo."*

**Por qué se usó:** La aplicación funcionaba correctamente en pantallas de escritorio pero en dispositivos móviles y pantallas pequeñas el sidebar ocupaba demasiado espacio y el contenido no se adaptaba correctamente.

**Qué se aceptó:** La implementación de breakpoints responsive en el sidebar (colapso en móvil), el ajuste del grid de datos clave a columnas apiladas en pantallas pequeñas, y los tamaños de tipografía adaptativos con clases sm: y md: de Tailwind.

**Qué se corrigió:** El menú hamburguesa para móvil no se ocultaba correctamente al seleccionar una sección. Se solicitó que al hacer clic en un botón del menú en móvil, el sidebar se cerrara automáticamente mostrando el contenido completo.

---

## 3. Tabla Resumen de Prompts y Correcciones

| # | Prompt | Sección | Problema resuelto | Corrección adicional necesaria |
|---|---|---|---|---|
| — | Redacción jurídica | 01–07 | Estructuración y redacción formal del contenido investigado | Añadir citas textuales y vinculación explícita al caso |
| 1 | Estructura inicial app | App web | Creación de la arquitectura completa de la aplicación | Scrollbar en sidebar, contenido centrado |
| 2 | Refinamiento estructura | App web | Import ?raw, prop components de react-markdown | Layout con alineación incorrecta |
| 3 | Corrección layout | App web | Sidebar compacto, 8 botones sin scroll | Scrollbar horizontal persistente |
| 4 | Desbordamiento horizontal | App web | Overflow-x eliminado en todos los archivos | CSS heredado de Vite interfería |
| 5 | Ancho del contenido | App web | Texto usa 100% del ancho disponible | Box-sizing necesario vía style inline |
| 6 | Diseño responsivo | App web | Adaptación a móvil y pantallas pequeñas | Menú móvil no se cerraba al seleccionar |

---

## 4. Reflexión Final: IA como Agente vs. Chatbot

### Uso como chatbot (reactivo)
En las primeras interacciones, la IA se usó de forma reactiva: se pedía una tarea y se aceptaba la respuesta sin análisis crítico. Esto producía resultados funcionales pero con problemas de layout, contenido genérico sin citas textuales y sin vinculación explícita al caso. El resultado no alcanzaba el nivel requerido por la rúbrica.

### Uso como agente (iterativo y dirigido)
La calidad mejoró significativamente al usar la IA de forma iterativa: identificando exactamente qué fallaba en cada respuesta, proporcionando la rúbrica como criterio de evaluación y solicitando correcciones con instrucciones técnicas precisas. Este modo convierte a la IA en un agente que refina su output en función de criterios externos concretos — no simplemente un chatbot que responde preguntas.

La diferencia es clara en el desarrollo de la app web: se necesitaron 6 prompts progresivos para llegar al resultado final, cada uno corrigiendo un problema específico identificado por el estudiante al revisar el resultado anterior.

### Limitaciones identificadas
- **Código:** Los componentes React generados automáticamente funcionaban pero tenían problemas de layout que requirieron 6 rondas de corrección. La IA no puede ver el resultado visual — el estudiante debe identificar los problemas y describírselos con precisión.
- **Contenido jurídico:** Los textos literales de artículos legales deben contrastarse con la BCN antes de citarse en un documento formal. La IA puede cometer errores en la transcripción exacta de normas.
- **Dependencia del contexto:** La IA no recuerda conversaciones anteriores. Cada sesión requiere volver a proporcionar el contexto del caso para obtener respuestas relevantes.

### Conclusión
La IA fue útil como acelerador tanto de la redacción jurídica como del desarrollo técnico de la aplicación. Sin embargo, en ambos casos el rol activo del estudiante fue indispensable: definir qué investigar, identificar qué corregir en cada respuesta y verificar la precisión del contenido generado. La IA no reemplaza el criterio — lo amplifica cuando se usa correctamente.

---

## 5. Referencias y Fuentes Consultadas

### Caso UTFSM — Cobertura Mediática
- FastCheck CL — *Hackeo a la UTFSM: RansomHub filtró 46 GB de datos* (14/11/2024)
  https://www.fastcheck.cl/2024/11/14/utfsm-ransomhub/
- The Clinic — *Filtración de datos UTFSM* (16/11/2024)
  https://www.theclinic.cl/2024/11/16/hackeo-utfsm/
- El Mercurio de Valparaíso — *Datos de estudiantes UTFSM expuestos* (16/11/2024)
  https://www.mercuriovalpo.cl/2024/11/16/utfsm-datos-filtrados/


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
