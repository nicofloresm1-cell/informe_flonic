# 07 — Conclusiones y Recomendaciones
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

El análisis del caso UTFSM permite extraer conclusiones tanto sobre los hechos específicos del incidente como sobre el estado del marco normativo chileno en materia de ciberseguridad y protección de datos. Este capítulo sintetiza los hallazgos del informe y formula recomendaciones concretas para instituciones educativas, el legislador y los titulares de datos afectados.

---

## 1. Conclusiones sobre los Hechos del Caso

### 1.1 El ataque fue técnicamente sofisticado y jurídicamente complejo

El ataque de RansomHub a la UTFSM no constituyó un delito único, sino una **cadena de al menos seis conductas delictivas independientes** tipificadas en la Ley N° 21.459: acceso ilícito (Art. 2°), interceptación ilícita (Art. 3°), ataque a la integridad de datos (Art. 4°), sabotaje informático (Art. 1°), fraude informático (Art. 7°) y receptación informática (Art. 6°). La concurrencia de estos delitos en concurso real implica que las penas aplicables superan los 5 años de presidio, lo que excluye penas sustitutivas y hace procedente la prisión preventiva.

### 1.2 La respuesta institucional fue insuficiente

La UTFSM describió el incidente como de "impacto controlado", minimizando públicamente su alcance cuando en la práctica 46 GB de datos personales ya habían sido exfiltrados. No existe registro público de:
- Notificación formal al CSIRT Nacional dentro del plazo de 3 horas que exige el Art. 9° de la Ley 21.663.
- Notificación individual a los más de 2.700 exalumnos cuya condición de deudores del Fondo Solidario fue expuesta.
- Plan de respuesta comunicacional hacia la comunidad universitaria afectada.

Esta respuesta opaca no solo vulnera el deber de transparencia, sino que podría configurar una infracción administrativa grave bajo la Ley 21.663.

### 1.3 Los datos más sensibles expuestos fueron los financieros

De todos los tipos de datos comprometidos, el listado de exalumnos deudores del Fondo Solidario de Crédito Universitario es el más grave desde la perspectiva de la Ley 19.628. La norma prohíbe expresamente la comunicación pública de estas deudas (Art. 17°), y su exposición genera un daño reputacional y patrimonial concreto a personas identificables por su RUT. Este subconjunto de datos activa la responsabilidad civil directa de la UTFSM conforme al Art. 23° de la misma ley.

### 1.4 RansomHub opera en una zona gris de persecución efectiva

Aunque los delitos cometidos están claramente tipificados, la persecución penal efectiva de RansomHub enfrenta obstáculos estructurales: el grupo opera internacionalmente, presumiblemente desde jurisdicciones con baja cooperación judicial. El Convenio de Budapest (Arts. 29° y 35°) habilita la cooperación internacional, pero su efectividad depende de que los países donde operan los atacantes sean signatarios del tratado o tengan acuerdos bilaterales con Chile.

---

## 2. Conclusiones sobre el Marco Normativo Chileno

### 2.1 La Ley 21.459 es adecuada en tipificación, pero limitada en aplicación extraterritorial

La Ley N° 21.459 tipifica correctamente todos los delitos cometidos por RansomHub y establece penas proporcionales. Sin embargo, su aplicación efectiva depende de la ubicación de los imputados. Si los atacantes operan desde países sin tratado de extradición con Chile, la ley queda como letra muerta frente a los autores materiales.

### 2.2 La Ley 19.628 es obsoleta para incidentes de esta magnitud

La Ley N° 19.628, vigente desde 1999, presenta tres vacíos críticos evidenciados por este caso:

1. **No obliga a notificar individualmente a los afectados** cuando sus datos son comprometidos.
2. **El estándar de "debida diligencia"** (Art. 11°) es demasiado vago para determinar responsabilidad civil con precisión.
3. **Los derechos ARCO son ilusorios** frente a datos ya publicados en la dark web: el derecho de cancelación (Art. 12°) opera solo frente al responsable del tratamiento (la UTFSM), no frente a RansomHub ni frente a quienes descargaron los datos.

La Ley N° 21.719, promulgada en 2024, aborda estos vacíos, pero su implementación progresiva significa que las víctimas del caso UTFSM no se beneficiaron de sus disposiciones más robustas.

### 2.3 El sector educativo es el más desprotegido normativamente

La comparación con el GDPR europeo y la ISO 27001 revela que el sector educativo chileno opera bajo el marco de menor exigencia. El sector financiero cuenta con normas sectoriales específicas de la CMF (Circular N° 2884); el sector salud tiene protecciones reforzadas para datos médicos. La educación superior, que maneja datos personales masivos de población joven, no tiene un marco sectorial equivalente.

---

## 3. Recomendaciones

### Para instituciones educativas

1. **Implementar ISO 27001** como estándar mínimo de gestión de seguridad de la información, incluyendo cifrado de datos en reposo, gestión de accesos con doble factor de autenticación y planes de continuidad operacional.
2. **Designar un responsable de protección de datos (DPO)** que supervise el cumplimiento normativo y coordine la respuesta ante incidentes.
3. **Establecer un protocolo de respuesta a incidentes** que incluya la notificación al CSIRT Nacional dentro de 3 horas y la comunicación proactiva a los afectados, aunque la ley aún no lo exija expresamente.
4. **Realizar auditorías de seguridad periódicas** y pruebas de penetración que identifiquen vulnerabilidades antes de que sean explotadas.
5. **Minimizar los datos almacenados**: aplicar el principio de minimización de datos, conservando solo la información estrictamente necesaria para los fines académicos e institucionales.

### Para el legislador

1. **Acelerar la implementación plena de la Ley 21.719**, especialmente las disposiciones sobre notificación obligatoria de brechas a los afectados y la constitución de la nueva autoridad de control con facultades sancionatorias efectivas.
2. **Desarrollar un marco sectorial de ciberseguridad para la educación superior**, análogo a las normas CMF para el sector financiero.
3. **Fortalecer la cooperación internacional** en materia de ciberdelincuencia, ampliando los acuerdos bilaterales con países que no son parte del Convenio de Budapest.

### Para los titulares de datos afectados

1. **Ejercer el derecho de acceso (Art. 12° Ley 19.628)** ante la UTFSM, solicitando información sobre qué datos suyos fueron comprometidos y qué medidas se adoptaron.
2. **Monitorear activamente** el uso de su RUT y correo electrónico, alertando ante cualquier uso no autorizado que podría indicar suplantación de identidad.
3. **Documentar los daños sufridos** para eventuales acciones civiles de indemnización contra la UTFSM al amparo del Art. 23° de la Ley 19.628.

---

## 4. Reflexión Final

El caso UTFSM no es un incidente aislado: es la expresión más visible en el sector educativo chileno de una tendencia global de ataques de ransomware a instituciones que manejan grandes volúmenes de datos personales con infraestructuras de seguridad históricamente subfinanciadas. La respuesta jurídica existe y es aplicable, pero la persecución efectiva de los atacantes y la reparación real a los afectados dependen de reformas normativas que Chile tiene pendientes y de una cultura institucional de ciberseguridad que aún no ha madurado en el sector educativo.

El derecho puede tipificar el delito y reconocer la responsabilidad. Pero sin mecanismos de enforcement efectivos, sin autoridades de control con dientes y sin un cambio estructural en cómo las universidades gestionan la seguridad de los datos de sus comunidades, casos como el de la UTFSM seguirán ocurriendo.

---

*Fuentes: Ley N° 21.459 (BCN), Ley N° 19.628 (BCN), Ley N° 21.663 (BCN), Ley N° 21.719 (BCN), GDPR Art. 17°, ISO/IEC 27001:2022, ANCI (2024), FastCheck CL (14/11/2024).*