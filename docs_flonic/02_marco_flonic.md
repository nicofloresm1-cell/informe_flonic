# 02 — Marco Legal Aplicable
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

El ataque de ransomware sufrido por la UTFSM en octubre de 2024 no es únicamente un incidente técnico: es un hecho jurídicamente relevante que activa múltiples normas del ordenamiento legal chileno. Para analizarlo correctamente, es necesario conocer las leyes que regulan tanto los delitos informáticos como la protección de datos personales y la ciberseguridad en Chile. Este capítulo presenta el marco normativo vigente al momento del incidente, explicando el contenido de cada cuerpo legal y su aplicabilidad directa al caso.

---

## 1. Ley N° 21.459 — Ley de Delitos Informáticos (2022)

### 1.1 Origen y contexto

Publicada en el Diario Oficial el 20 de junio de 2022, la Ley N° 21.459 reemplazó a la antigua Ley N° 19.223 de 1993, que era considerada insuficiente frente a la evolución del cibercrimen. Su objetivo fue adecuar la legislación chilena al **Convenio de Budapest** (Convenio sobre la Ciberdelincuencia), el tratado internacional más importante en materia de delitos informáticos, al que Chile adhirió.

Esta ley representa un salto cualitativo: pasó de cuatro artículos básicos a una normativa robusta que tipifica una amplia gama de conductas delictivas, incorpora reglas procesales específicas y establece circunstancias modificatorias de responsabilidad penal.

### 1.2 Estructura general

La ley se organiza en tres títulos:
- **Título I:** Delitos informáticos y sus sanciones.
- **Título II:** Del procedimiento (reglas procesales especiales).
- **Título III:** Disposiciones finales.

### 1.3 Delitos tipificados relevantes para el caso UTFSM

#### Artículo 2° — Acceso ilícito a sistemas informáticos
Sanciona a quien, **sin autorización y superando barreras técnicas o medidas de seguridad**, acceda a un sistema informático. Las penas van desde presidio menor en grado mínimo (multa) hasta presidio menor en grado máximo, dependiendo de si el acceso tuvo como fin apoderarse de información o si se divulgó lo obtenido.

> *Aplicación al caso:* RansomHub accedió de manera no autorizada a los sistemas internos de la UTFSM, superando sus medidas de seguridad. Este es el delito de entrada que habilitó todo lo demás.

#### Artículo 3° — Interceptación ilícita de datos
Penaliza la intercepción, interrupción o interferencia de transmisiones de datos en sistemas informáticos por medios técnicos, sin autorización.

> *Aplicación al caso:* La exfiltración de 46 GB de datos desde los servidores de la UTFSM implica la captura no autorizada de información que circulaba o se almacenaba en sus sistemas.

#### Artículo 4° — Ataque a la integridad de los datos
Sanciona a quien **altere, dañe o suprima datos informáticos** sin autorización, cuando ello cause daño grave al titular.

> *Aplicación al caso:* El ransomware cifró los datos de la universidad, lo que equivale a una alteración que dejó inaccesible la información. Esto configura este tipo delictivo.

#### Artículo 5° — Ataque a la integridad de sistemas informáticos (Sabotaje informático)
Penaliza a quien **obstaculice o impida el normal funcionamiento** de un sistema informático, total o parcialmente, mediante la introducción, transmisión, daño, deterioro, alteración o supresión de datos. La pena es presidio menor en sus grados medio a máximo.

> *Aplicación al caso:* Al cifrar los sistemas de la UTFSM con ransomware, RansomHub impidió el funcionamiento normal de la infraestructura tecnológica de la universidad, encuadrando esta conducta directamente en este artículo.

#### Artículo 6° — Receptación informática
Sanciona a quien, **conociendo su origen ilícito**, comercialice, transfiera o almacene datos informáticos provenientes de los delitos anteriores.

> *Aplicación al caso:* La publicación de los datos robados en la dark web por parte de RansomHub constituye una transferencia de datos de origen ilícito, lo que podría activar este tipo penal respecto de quienes descarguen o comercialicen dicha información.

#### Artículo 7° — Fraude informático
Penaliza a quien, **causando perjuicio a otro y con fin de obtener beneficio económico**, manipule un sistema informático mediante la introducción, alteración o supresión de datos. Las penas varían según el monto del perjuicio.

> *Aplicación al caso:* La exigencia de rescate económico a la UTFSM a cambio de no publicar los datos configura una manipulación con fines de beneficio económico que puede encuadrarse en este artículo.

#### Artículo 8° — Abuso de dispositivos
Sanciona la producción, adquisición, tenencia o distribución de herramientas diseñadas principalmente para cometer delitos informáticos.

> *Aplicación al caso:* RansomHub opera con un software de ransomware diseñado específicamente para cifrar sistemas y extorsionar víctimas, lo que califica como dispositivo abusivo bajo esta norma.

#### Artículo 9° — Circunstancia atenuante especial
Establece que la cooperación eficaz con la investigación puede rebajar la pena hasta en un grado. Esto es relevante si en algún momento algún miembro o afiliado de RansomHub cooperara con las autoridades.

### 1.4 Reglas procesales destacadas (Título II)

La ley incorpora disposiciones especiales para la investigación de estos delitos, incluyendo la posibilidad de requerir a proveedores de servicios la conservación y entrega de datos de tráfico y de contenido, lo que facilita el trabajo del Ministerio Público en la identificación de los atacantes.

---

## 2. Ley N° 19.628 — Ley de Protección de Datos Personales (1999, con modificaciones)

### 2.1 Contexto y vigencia

La Ley N° 19.628, sobre protección de la vida privada, es la norma fundamental en materia de datos personales en Chile. Si bien data de 1999 y ha recibido críticas por su antigüedad frente a los estándares internacionales actuales, sigue siendo la principal norma que regula el tratamiento de datos personales en el país al momento del incidente.

> **Nota:** En 2024 se promulgó la Ley N° 21.719 que moderniza sustancialmente esta ley, aunque su entrada en vigencia está programada de forma progresiva, por lo que la Ley 19.628 en su versión vigente es la aplicable al caso UTFSM.

### 2.2 Principios relevantes

#### Principio de seguridad
El responsable del tratamiento de datos personales debe **garantizar estándares adecuados de seguridad**, protegiéndolos contra el tratamiento no autorizado o ilícito, y contra su pérdida, filtración, daño accidental o destrucción. Las medidas deben ser apropiadas y acordes con el tipo de tratamiento realizado.

> *Aplicación al caso:* La UTFSM, como responsable del tratamiento de datos de miles de estudiantes, académicos y exalumnos, tenía la obligación legal de proteger esa información. La filtración sugiere que las medidas de seguridad implementadas no fueron suficientes.

#### Principio de confidencialidad (Artículo 14° bis — Deber de secreto)
El responsable de datos está obligado a **mantener secreto o confidencialidad** acerca de los datos personales, obligación que subsiste aún después de concluida la relación con el titular. Todas las personas que participen en el tratamiento quedan igualmente obligadas.

> *Aplicación al caso:* La exposición pública de datos de alumnos, académicos y deudores del Fondo Solidario constituye una vulneración directa de este deber.

#### Artículo 9° — Principio de finalidad
Los datos personales deben utilizarse **sólo para los fines para los cuales fueron recolectados**. La difusión masiva de estos datos a través de la dark web viola absolutamente este principio.

#### Artículo 11° — Deber de cuidado del responsable
El responsable de los registros o bases de datos donde se almacenen datos personales **deberá cuidar de ellos con la debida diligencia**, haciéndose responsable de los daños que se produzcan.

> *Aplicación al caso:* Este artículo es central para determinar la responsabilidad civil de la UTFSM frente a los afectados.

### 2.3 Datos especialmente sensibles expuestos

La ley considera como especialmente protegidos los datos de naturaleza económica y financiera. En el caso UTFSM, se filtró un listado de más de 2.700 exalumnos deudores del Fondo Solidario de Crédito Universitario, con nombres, RUT, correo y fechas de cobro. Esta información tiene una naturaleza económica sensible que merece protección reforzada.

Adicionalmente, la ley establece que las deudas contraídas con instituciones de educación superior en virtud de leyes de crédito universitario **no pueden ser comunicadas públicamente**, lo que hace aún más grave la filtración de este listado específico.

---

## 3. Ley N° 21.663 — Ley Marco de Ciberseguridad (2024)

### 3.1 Contexto y promulgación

Publicada el 8 de abril de 2024 en el Diario Oficial, la Ley N° 21.663 es la norma más reciente y representa el instrumento más moderno del ordenamiento jurídico chileno en materia de ciberseguridad. Su entrada en vigencia fue progresiva: algunas disposiciones clave (artículos 5°, 8°, 9° y Título VII de sanciones) entraron en plena vigencia el **1 de marzo de 2025**.

> *Nota de temporalidad:* El ataque a la UTFSM ocurrió en octubre de 2024, cuando la ley ya había sido promulgada pero sus disposiciones más exigentes aún no estaban completamente en vigor. Esto es relevante para determinar el régimen de responsabilidad aplicable.

### 3.2 Institucionalidad creada

La ley crea la **Agencia Nacional de Ciberseguridad (ANCI)**, primer organismo de este tipo en América Latina, como ente rector, regulador y sancionador en materia de ciberseguridad. Junto a ella se establecen:

- El **CSIRT Nacional** (Equipo de Respuesta a Incidentes de Seguridad Informática): actúa como primer respondiente ante ciberataques con impacto nacional.
- El **Consejo Multisectorial sobre Ciberseguridad**: órgano consultivo estratégico.
- El **Comité Interministerial sobre Ciberseguridad**: coordinación entre ministerios.

### 3.3 Obligaciones clave para instituciones

#### Artículo 7° — Deberes generales
Toda entidad que preste servicios esenciales debe aplicar permanentemente medidas para **prevenir, reportar y resolver** incidentes de ciberseguridad, implementando los protocolos y estándares que establezca la ANCI.

#### Artículo 9° — Deber de reportar incidentes
Las instituciones deben reportar al CSIRT Nacional los ciberataques e incidentes que puedan tener efectos significativos, **dentro de un plazo máximo de tres horas** desde que tomen conocimiento. El reporte se realiza en tres etapas: Alerta Temprana, Segunda Notificación e Informe Final.

> *Aplicación al caso:* La UTFSM comunicó el incidente a través de un comunicado institucional general, pero no hay registro público de haber notificado formalmente al CSIRT Nacional dentro de los plazos que la ley contempla.

#### Artículo 8° — Deberes específicos de los Operadores de Importancia Vital (OIV)
Las entidades calificadas como OIV por la ANCI tienen obligaciones reforzadas: implementar sistemas de gestión de seguridad de la información, realizar auditorías periódicas, contar con planes de continuidad operacional y programas de capacitación para sus trabajadores.

### 3.4 Régimen de sanciones (Título VII)

La ley clasifica las infracciones en tres categorías:

| Categoría | Ejemplo | Sanción |
|---|---|---|
| **Leve** | Entrega fuera de plazo de información no urgente | Amonestación o multa menor |
| **Grave** | Incumplir la obligación de reportar incidentes | Multa significativa |
| **Gravísima** | Entregar información falsa a la ANCI en gestión de incidentes | Multa máxima y medidas correctivas |

---

## 4. Normas Complementarias Aplicables

### Código Penal — Artículo 366 quater y normas sobre extorsión
La conducta de RansomHub de exigir pago a cambio de no publicar los datos robados puede encuadrarse también en las normas generales sobre extorsión del Código Penal chileno, en concurso con los delitos de la Ley 21.459.

### Convenio de Budapest (Tratado internacional)
Chile adhirió al Convenio de Budapest, que establece estándares mínimos para la tipificación de delitos informáticos, la cooperación entre Estados y las facultades de investigación. Esto es especialmente relevante dado que RansomHub es un grupo de operación internacional, lo que requiere cooperación con otros países para su persecución penal.

---

## 5. Cuadro Resumen de Aplicabilidad al Caso UTFSM

| Norma | Conducta cubierta | Aplicación al caso |
|---|---|---|
| Ley 21.459, Art. 2° | Acceso ilícito a sistemas | Intrusión inicial de RansomHub |
| Ley 21.459, Art. 4° | Daño a datos | Cifrado de archivos con ransomware |
| Ley 21.459, Art. 5° | Sabotaje informático | Interrupción de servicios universitarios |
| Ley 21.459, Art. 6° | Receptación informática | Publicación de datos en dark web |
| Ley 21.459, Art. 7° | Fraude informático | Exigencia de rescate económico |
| Ley 19.628, Art. 11° | Deber de cuidado del responsable | Responsabilidad civil de la UTFSM |
| Ley 19.628, Art. 14° bis | Deber de confidencialidad | Vulneración por exposición pública de datos |
| Ley 21.663, Art. 9° | Deber de reporte | Posible incumplimiento de la UTFSM |
| Convenio de Budapest | Cooperación internacional | Persecución de RansomHub como grupo extranjero |

---

*Fuentes: Biblioteca del Congreso Nacional (BCN), Agencia Nacional de Ciberseguridad (ANCI), Carey Abogados, Revista de Estudios de la Justicia UCh, DER Ediciones (2024), Pensamientopenal.com.ar.*