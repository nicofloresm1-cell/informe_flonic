# 08 — Bitácora de Uso de Inteligencia Artificial
> **Caso:** Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

Este documento registra el uso de herramientas de Inteligencia Artificial durante el desarrollo del presente informe jurídico y de la aplicación web asociada al caso de filtración de datos de la Universidad Técnica Federico Santa María (UTFSM) ocurrido en 2024.

Se detallan los prompts utilizados, las correcciones realizadas a las respuestas generadas por la IA, las decisiones tomadas por el estudiante durante el proceso y una reflexión final sobre el uso de la IA como herramienta de asistencia técnica y jurídica.

> La IA no fue utilizada como reemplazo del proceso investigativo ni del criterio académico, sino como apoyo para estructurar información, redactar contenido jurídico y acelerar el desarrollo técnico de la aplicación React utilizada para presentar el informe.

| Herramienta | Uso |
|---|---|
| **Claude Sonnet 4.6** (Anthropic — web) | Redacción jurídica e informe |
| **Claude Haiku 4.5** (Claude Code / VS Code) | Desarrollo frontend |

**Período de uso:** Mayo 2025

---

## 1. Uso de IA en la Redacción del Informe Jurídico (Secciones 01–07)

### Metodología aplicada

Para la elaboración de las secciones jurídicas del informe, la IA se utilizó como asistente de redacción y estructuración de contenido.

El estudiante investigó previamente:

- hechos del caso UTFSM
- normativa aplicable
- actores involucrados
- jurisprudencia y estándares internacionales
- artículos legales relevantes
- información técnica del ataque ransomware

La información fue obtenida desde fuentes oficiales y verificadas como la Biblioteca del Congreso Nacional (BCN), CISA, medios de comunicación nacionales y documentación internacional sobre ciberseguridad.

Posteriormente, la información investigada fue entregada a la IA para transformarla en contenido jurídico formal, estructurado y coherente con la rúbrica del proyecto.

---

### Prompt utilizado para las secciones jurídicas

*"Te paso la información que investigué sobre el caso UTFSM 2024. Necesito que la redactes de forma clara, precisa y con lenguaje jurídico adecuado. Estructura el contenido con títulos, subtítulos, tablas donde corresponda y citas textuales de los artículos legales mencionados. Vincula cada norma a un hecho concreto del caso."*

---

### Actor/conducta investigada

**Grupo RansomHub** — ataque ransomware de doble extorsión contra la UTFSM entre octubre y noviembre de 2024.

#### Datos comprometidos

| Tipo de dato | Detalle |
|---|---|
| Correos institucionales | Estudiantes y funcionarios |
| RUT | Estudiantes y funcionarios |
| Datos financieros | Información sensible |
| Fondo Solidario | Información relacionada |
| **Volumen total** | **~46 GB filtrados** |

#### Normativa analizada

| Ley | Materia |
|---|---|
| Ley 21.459 | Delitos informáticos |
| Ley 19.628 | Protección de la vida privada |
| Ley 21.663 | Marco de Ciberseguridad |
| Ley 21.719 | Protección de datos personales |
| Convenio de Budapest | Marco internacional |
| GDPR europeo | Referencia comparada |

---

### Por qué se usó

La IA se utilizó como apoyo de redacción jurídica especializada. Permitió transformar información técnica y legal recopilada manualmente en texto estructurado, formal y coherente con un informe jurídico-académico.

El criterio principal — qué investigar, qué normas aplicar y cómo interpretar el caso — fue definido por el estudiante.

**La IA facilitó:**
- estructuración del contenido
- redacción formal
- generación de tablas comparativas
- mejora de claridad textual
- organización de argumentos jurídicos

---

### ✅ Qué se aceptó

- Redacción formal de las secciones
- Organización de títulos y subtítulos
- Tablas comparativas
- Explicaciones generales de las normas
- Relación entre delitos informáticos y hechos del caso
- Formato de citas textuales legales

### ✏️ Qué se corrigió

Las primeras respuestas generadas por la IA eran demasiado generales y poco vinculadas al caso concreto UTFSM. Se realizaron correcciones para:

- vincular explícitamente cada norma con hechos específicos
- añadir citas textuales exactas desde la BCN
- incorporar artículos sobre derechos ARCO
- comparar legislación chilena con GDPR
- corregir artículos legales citados de forma incompleta
- evitar explicaciones genéricas sobre ransomware sin conexión al caso

> El estudiante verificó manualmente todos los artículos legales antes de incorporarlos al informe final.

---

## 2. Uso de IA en el Desarrollo de la Aplicación Web

### Metodología aplicada

La IA se utilizó como agente técnico de apoyo durante el desarrollo frontend de la aplicación web creada en React con Vite y Tailwind CSS.

El estudiante:
- definió la arquitectura deseada
- detectó errores visuales y técnicos
- probó cada versión generada
- solicitó correcciones específicas
- validó el resultado final

> La IA no desarrolló la aplicación de manera autónoma. El desarrollo fue iterativo: cada prompt buscó corregir un problema concreto identificado durante las pruebas visuales y funcionales.

---

### Prompt 1 — Estructura inicial de la aplicación

*"Necesito que actúes como un experto en programación frontend y desarrollo de aplicaciones React. Quiero que trabajes como un agente técnico guiándome paso a paso en este proyecto, ayudándome a construir, corregir y mejorar la aplicación según los problemas que vaya detectando. Tengo una aplicación React con Vite y Tailwind CSS ya configurados, y react-markdown instalado. Necesito que construyas lo siguiente: 8 archivos .md copiados/creados en src/docs/ — uno por sección del informe (01 al 08, donde el 08 es un placeholder vacío de bitácora de IA). 8 componentes .jsx en src/pages/ — uno por sección. Cada uno importa y renderiza su .md correspondiente usando react-markdown. Deben tener su propio diseño y estilos Tailwind dentro del componente. src/App.jsx como base de la landing page. Debe incluir: Hero con título del caso (Filtración UTFSM 2024) y datos clave. Navegación entre las 8 secciones (sin react-router-dom, usando estado interno de React). Cada sección tiene su propio apartado en la página, con diseño coherente de temática legal/ciberseguridad. Usa toda la información de los .md pero resumida visualmente. Diseño: oscuro, serio, temática legal + ciberseguridad. Tipografía con Google Fonts via CDN en index.html. Sin imágenes. Solo Tailwind + CSS personalizado si es necesario. Genera todos los archivos en orden. Empieza por los .md en src/docs/, luego los pages, luego el App.jsx."*

**✅ Qué se aceptó:** Estructura base de carpetas, componentes React iniciales, navegación usando `useState`, diseño oscuro inicial, integración de React Markdown, Hero principal y panel lateral.

**✏️ Qué se corrigió:** Sidebar mostraba scrollbar — Contenido aparecía centrado incorrectamente — Botones demasiado grandes — Distribución de espacio poco eficiente.

---

### Prompt 2 — Refinamiento de estructura y markdown

*"Tengo una app React con Vite, Tailwind CSS y react-markdown instalados. Estructura de archivos a generar: src/docs/ con 8 archivos .md que son la fuente de contenido. src/pages/ con 8 componentes .jsx, uno por sección. Cada uno importa su .md con import contenido from '../docs/01_resumen.md?raw' y lo renderiza con react-markdown. Aplicar estilos Tailwind a los elementos renderizados via components prop de react-markdown (h1, h2, p, table, ul, blockquote, etc.) con diseño oscuro coherente..."*

**✅ Problema resuelto:** Integración correcta de archivos markdown usando `?raw`, estilización coherente de elementos markdown, mejor consistencia visual.

**✏️ Corrección adicional necesaria:** Persistían problemas de alineación y scroll lateral.

---

### Prompt 3 — Corrección de layout

*"El layout debe ser h-screen overflow-hidden flex sin ninguna scrollbar visible en ningún contenedor excepto el panel de contenido..."*

**✅ Problema resuelto:** Sidebar compacto, 8 botones visibles sin scroll, contenido alineado a la izquierda, header sticky funcional.

**✏️ Corrección adicional necesaria:** Persistía scroll horizontal.

---

### Prompt 4 — Corrección de desbordamiento horizontal

*"Tengo una app React con Vite y Tailwind CSS. El contenido se desborda horizontalmente y aparece una barra de scroll en la parte inferior..."*

**✅ Problema resuelto:** Eliminación del overflow horizontal, ajuste correcto del viewport, corrección de width en contenedores.

**✏️ Corrección adicional necesaria:** El CSS heredado de Vite seguía interfiriendo.

---

### Prompt 5 — Corrección del ancho del contenido

*"En mi app React con Tailwind, el contenido del panel derecho se corta horizontalmente..."*

**✅ Problema resuelto:** Uso completo del ancho disponible, corrección de `break-words`, mejor distribución del contenido.

**✏️ Corrección adicional necesaria:** Se necesitó `box-sizing` adicional para estabilizar el layout.

---

### Prompt 6 — Diseño responsivo

*"Necesito que todo el contenido tenga diseño responsivo."*

**✅ Problema resuelto:** Adaptación móvil, sidebar responsive, tipografía adaptable, mejor visualización en pantallas pequeñas.

**✏️ Corrección adicional necesaria:** El menú móvil debía cerrarse automáticamente al seleccionar una sección.

---

## 3. Tabla Resumen de Prompts y Correcciones

| N° | Prompt | Área | Problema resuelto | Corrección posterior |
|:---:|---|---|---|---|
| 1 | Redacción jurídica | Informe | Redacción formal y estructura | Añadir citas legales exactas |
| 2 | Estructura inicial app | Desarrollo web | Arquitectura React inicial | Sidebar y layout |
| 3 | Refinamiento markdown | Desarrollo web | Integración react-markdown | Alineación incorrecta |
| 4 | Corrección layout | Desarrollo web | Sidebar compacto | Scroll horizontal |
| 5 | Overflow horizontal | Desarrollo web | Eliminación de desbordamiento | CSS heredado |
| 6 | Corrección ancho | Desarrollo web | Uso correcto del espacio | Ajustes box-sizing |
| 7 | Responsive design | Desarrollo web | Adaptación móvil | Menú móvil |

---

## 4. Reflexión Final — IA como Agente vs. Chatbot

### Uso como chatbot (reactivo)

En las primeras interacciones, la IA se utilizó de forma reactiva: se realizaba una solicitud general y se aceptaba el resultado sin un análisis técnico profundo.

Esto generó:
- contenido jurídico demasiado genérico
- errores de layout
- problemas de responsive design
- citas legales incompletas
- estructuras poco ajustadas a la rúbrica

> El resultado era funcional, pero insuficiente para cumplir estándares académicos altos.

---

### Uso como agente (iterativo y guiado)

Posteriormente, la IA fue utilizada como un agente técnico y jurídico guiado por el estudiante.

**La diferencia principal fue:**
- identificar exactamente qué fallaba
- definir criterios concretos de corrección
- utilizar prompts específicos
- iterar múltiples veces sobre el mismo problema

En el desarrollo frontend esto fue especialmente evidente: se necesitaron múltiples rondas de corrección, cada prompt solucionaba un problema específico, y el estudiante actuó como supervisor técnico del proceso.

**La IA funcionó mejor cuando recibió:**
- contexto claro
- objetivos específicos
- retroalimentación precisa
- restricciones técnicas detalladas

---

### Limitaciones identificadas

#### Desarrollo técnico
La IA generaba código funcional, pero no podía visualizar el resultado real en pantalla. Muchos errores de layout solo pudieron detectarse manualmente.

#### Contenido jurídico
Las citas legales debieron verificarse directamente en la BCN. La IA podía resumir correctamente una norma, pero no siempre reproducía artículos exactos sin errores.

#### Dependencia del contexto
Cada conversación requería volver a explicar parte del proyecto para mantener coherencia en las respuestas.

---

### Conclusión

La IA fue una herramienta útil para acelerar tanto la redacción jurídica como el desarrollo técnico de la aplicación web.

Sin embargo, los siguientes aspectos dependieron completamente del estudiante:

- el criterio jurídico
- la validación de fuentes
- la identificación de errores
- la toma de decisiones
- la revisión final

> La experiencia demostró que la IA funciona mejor como **apoyo iterativo supervisado** y no como reemplazo del análisis humano.

---

## 5. Referencias y Fuentes Consultadas

### Caso UTFSM — Cobertura Mediática

- FastCheck CL — *Hackeo a la UTFSM: RansomHub filtró 46 GB de datos* (14/11/2024)
  <https://www.fastcheck.cl/2024/11/14/utfsm-ransomhub/>

- The Clinic — *Filtración de datos UTFSM* (16/11/2024)
  <https://www.theclinic.cl/2024/11/16/hackeo-utfsm/>

- El Mercurio de Valparaíso — *Datos de estudiantes UTFSM expuestos* (16/11/2024)
  <https://www.mercuriovalpo.cl/2024/11/16/utfsm-datos-filtrados/>

---

### Leyes Chilenas — Biblioteca del Congreso Nacional (BCN)

- Ley N° 21.459 — Delitos Informáticos
  <https://www.bcn.cl/leychile/navegar?idNorma=1177865>

- Ley N° 19.628 — Protección de la Vida Privada
  <https://www.bcn.cl/leychile/navegar?idNorma=141599>

- Ley N° 21.663 — Ley Marco de Ciberseguridad
  <https://www.bcn.cl/leychile/navegar?idNorma=1196636>

- Ley N° 21.719 — Protección de Datos Personales
  <https://www.bcn.cl/leychile/navegar?idNorma=1196308>

- Ley N° 20.393 — Responsabilidad Penal Personas Jurídicas
  <https://www.bcn.cl/leychile/navegar?idNorma=1008668>

- Código Penal de Chile
  <https://www.bcn.cl/leychile/navegar?idNorma=1984>

---

### Marco Internacional

- GDPR — Reglamento UE 2016/679
  <https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679>

- Convenio de Budapest — Consejo de Europa
  <https://www.coe.int/en/web/cybercrime/the-budapest-convention>

- ISO/IEC 27001:2022
  <https://www.iso.org/standard/82875.html>

---

### Ciberseguridad

- CISA Advisory AA24-242A — *RansomHub Ransomware*
  <https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-242a>

- Agencia Nacional de Ciberseguridad (ANCI)
  <https://www.anci.gob.cl>