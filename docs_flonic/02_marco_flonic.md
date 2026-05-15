# 02 — Marco Legal Aplicable
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

El ataque de ransomware sufrido por la UTFSM en octubre de 2024 activa al menos **cuatro cuerpos normativos** del ordenamiento jurídico chileno e internacional: la Ley N° 21.459 (delitos informáticos), la Ley N° 19.628 (protección de datos personales), la Ley N° 21.663 (ciberseguridad) y el Convenio de Budapest (tratado internacional). A continuación se explica el contenido de cada norma y su aplicabilidad directa a los hechos del caso.

---

## 1. Ley N° 21.459 — Ley de Delitos Informáticos (2022)

**Norma:** Ley N° 21.459, publicada en el Diario Oficial el 20 de junio de 2022.

**Origen:** Reemplazó a la Ley N° 19.223 de 1993 para adecuar la legislación chilena al Convenio de Budapest sobre ciberdelincuencia.

### Artículos aplicables al caso UTFSM

**Artículo 2° — Acceso ilícito:**
> *"El que, sin autorización o excediendo la autorización que posea y superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema informático será castigado con la pena de presidio menor en su grado mínimo o multa de once a veinte unidades tributarias mensuales. En caso de ser una misma persona la que hubiere obtenido y divulgado la información, se aplicará la pena de presidio menor en sus grados medio a máximo."*

**Aplicación al caso:** RansomHub accedió sin autorización a los servidores de la UTFSM superando sus sistemas de autenticación y firewalls, y luego divulgó los datos en la dark web. Aplica la pena máxima de este artículo: presidio menor en grados medio a máximo (541 días — 5 años).

**Artículo 1° — Sabotaje informático:**
> *"El que obstaculice o impida el normal funcionamiento, total o parcial, de un sistema informático, a través de la introducción, transmisión, daño, deterioro, alteración o supresión de los datos informáticos, será castigado con la pena de presidio menor en sus grados medio a máximo."*

**Aplicación al caso:** El ransomware cifró los archivos de los sistemas de la UTFSM, obstaculizando el normal funcionamiento de su infraestructura tecnológica. La propia universidad reconoció "un impacto controlado en sus servicios", confirmando la interrupción.

**Artículo 7° — Fraude informático:**
> *"El que, causando perjuicio a otro, con la finalidad de obtener un beneficio económico para sí o para un tercero, manipule un sistema informático, mediante la introducción, alteración, daño o supresión de datos informáticos [...] será penado con presidio menor en sus grados medio a máximo y multa de once a quince UTM, si el valor del perjuicio excediera de cuarenta UTM."*

**Aplicación al caso:** RansomHub cifró los sistemas de la UTFSM con el fin explícito de obtener pago de rescate (beneficio económico), causando un perjuicio que excede ampliamente los 40 UTM. Configura la penalidad máxima del artículo.

**Artículo 6° — Receptación informática:**
> *"El que conociendo su origen o no pudiendo menos que conocerlo comercialice, transfiera o almacene con el mismo objeto u otro fin ilícito, a cualquier título, datos informáticos, provenientes de la realización de las conductas descritas en los artículos 2°, 3° y 5°, sufrirá la pena asignada a los respectivos delitos, rebajada en un grado."*

**Aplicación al caso:** Al publicar los 46 GB de datos en su sitio de la dark web, RansomHub transfirió datos de origen ilícito, configurando este tipo. Además, cualquier tercero que descargó esos datos conociendo su origen ilícito también incurre en este delito.

---

## 2. Ley N° 19.628 — Protección de la Vida Privada / Datos Personales (1999)

**Norma:** Ley N° 19.628, sobre protección de la vida privada, vigente con sus modificaciones al momento del incidente.

### Artículos aplicables al caso UTFSM

**Artículo 11° — Deber de cuidado:**
> *"El responsable de los registros o bases de datos personales deberá cuidar de ellos con la debida diligencia, haciéndose responsable de los daños que se produzcan."*

**Aplicación al caso:** La UTFSM es responsable de las bases de datos de estudiantes, académicos y exalumnos. La filtración de 46 GB de información personal evidencia que no se cumplió con la debida diligencia exigida por este artículo, configurando su responsabilidad civil por los daños causados a los afectados.

**Artículo 14° bis — Deber de secreto:**
> *"Toda persona que trabaje en el tratamiento de datos personales, tanto en organismos públicos como privados, estará obligada a guardar secreto sobre los mismos, cuando éstos provengan o hayan sido recolectados de fuentes no accesibles al público, como asimismo sobre los demás datos e informaciones que haya conocido en el ejercicio de sus funciones. Esta obligación subsistirá aún después que finalice su relación con el titular del registro o base de datos."*

**Aplicación al caso:** La exposición pública de datos de alumnos, académicos y deudores del Fondo Solidario vulnera directamente este deber de secreto. La información era confidencial y de acceso restringido.

**Artículo 9° — Principio de finalidad y calidad:**
> *"Los datos personales deben ser exactos, actualizados y pertinentes en relación con el objetivo de la base de datos. Los datos no podrán usarse para finalidades distintas o incompatibles con las que motivaron su recolección."*

**Aplicación al caso:** La divulgación masiva de datos personales a través de la dark web constituye un uso absolutamente incompatible con los fines para los que la UTFSM los recolectó (fines académicos e institucionales).

**Artículo especial — Datos de deudores del Fondo Solidario:**
La ley establece que las deudas contraídas con instituciones de educación superior en virtud de leyes de crédito universitario no pueden ser comunicadas públicamente. La filtración del listado de más de 2.700 exalumnos deudores con sus RUT y montos constituye una infracción especialmente grave de esta norma.

---

## 3. Ley N° 21.663 — Ley Marco de Ciberseguridad (2024)

**Norma:** Ley N° 21.663, publicada el 8 de abril de 2024. Sus disposiciones más exigentes entraron en vigor el 1 de marzo de 2025, con vigencia progresiva que alcanzó al período de investigación del incidente.

### Artículos aplicables al caso UTFSM

**Artículo 7° — Deberes generales de ciberseguridad:**
> *"Las instituciones deberán aplicar de manera continua las medidas para prevenir, reportar y resolver incidentes de ciberseguridad, aplicando las medidas idóneas para reducir el impacto y la probabilidad de que ocurran, conforme a los protocolos y estándares que establezca la Agencia."*

**Aplicación al caso:** La UTFSM tenía el deber legal de aplicar medidas preventivas continuas. La filtración exitosa de 46 GB de datos indica que dichas medidas no fueron suficientes.

**Artículo 9° — Deber de reporte de incidentes:**
> *"Las instituciones obligadas deberán reportar al CSIRT Nacional los ciberataques e incidentes de ciberseguridad que puedan tener efectos significativos, conforme al plazo y procedimiento que establezca el reglamento, el que no podrá exceder de tres horas desde que se tome conocimiento del incidente."*

**Aplicación al caso:** La UTFSM comunicó el incidente mediante un comunicado institucional general, pero no existe registro público de haber notificado formalmente al CSIRT Nacional dentro del plazo de 3 horas que la norma contempla, lo que podría constituir una infracción grave.

**Artículo 8° — Deberes de los Operadores de Importancia Vital (OIV):**
> *"Sin perjuicio de las obligaciones generales [...] los operadores de importancia vital deberán: implementar un sistema de gestión de seguridad de la información; mantener un registro de las acciones ejecutadas; elaborar e implementar planes de continuidad operacional y ciberseguridad; realizar ejercicios de revisión; y contar con programas de capacitación y certificación en ciberseguridad para sus trabajadores."*

**Aplicación al caso:** Si la UTFSM es calificada como OIV por la ANCI (criterio aún pendiente de resolución), las obligaciones reforzadas de este artículo elevarían significativamente su responsabilidad regulatoria por no haber implementado un sistema de gestión de seguridad de la información.

---

## 4. Convenio de Budapest sobre Ciberdelincuencia (Tratado Internacional)

**Norma:** Convenio de Budapest del Consejo de Europa sobre la Ciberdelincuencia (2001), al cual Chile adhirió, convirtiéndose en uno de los pocos países latinoamericanos en hacerlo.

**Relevancia para el caso:** RansomHub es un grupo de operación internacional con sede presumiblemente en Europa del Este o Rusia. La persecución penal de sus integrantes requiere cooperación entre Estados, y el Convenio de Budapest es el principal instrumento legal que la habilita.

**Artículo 29 — Preservación urgente de datos:**
> *"Cada Parte podrá solicitar a otra Parte que ordene o de otro modo garantice la preservación urgente de datos almacenados mediante un sistema informático [...] durante un período de tiempo tan largo como sea posible, por un máximo de noventa días."*

**Aplicación al caso:** Mediante este artículo, el Ministerio Público chileno puede solicitar a otros países que preserven los datos de tráfico y registros asociados a los servidores utilizados por RansomHub, incluso antes de iniciar un proceso formal de extradición o asistencia judicial.

**Artículo 35 — Red 24/7:**
> *"Cada Parte designará un punto de contacto disponible veinticuatro horas al día, siete días a la semana, con el fin de garantizar la prestación de ayuda inmediata para los fines de las investigaciones o procedimientos relativos a infracciones penales relacionadas con sistemas y datos informáticos."*

**Aplicación al caso:** Chile cuenta con su punto de contacto en la PDI (Policía de Investigaciones), lo que habilita la coordinación directa con los organismos equivalentes en los países donde operen los integrantes de RansomHub.

---

## 5. Cuadro Resumen: Cuatro Normas Aplicables al Caso UTFSM

| Norma | Tipo | Artículo clave | Hecho del caso que activa la norma |
|---|---|---|---|
| Ley 21.459 | Nacional — Penal | Art. 1°, 2°, 6°, 7° | Intrusión, cifrado, exfiltración, extorsión y publicación de datos |
| Ley 19.628 | Nacional — Civil/Administrativa | Art. 9°, 11°, 14° bis | Exposición de datos personales de estudiantes y deudores |
| Ley 21.663 | Nacional — Administrativa | Art. 7°, 8°, 9° | Falta de medidas preventivas y posible omisión de reporte al CSIRT |
| Conv. Budapest | Internacional | Art. 29, 35 | Persecución transfronteriza de RansomHub como grupo extranjero |

---

*Fuentes: Biblioteca del Congreso Nacional (BCN), Agencia Nacional de Ciberseguridad (ANCI), Convenio de Budapest (Consejo de Europa), Carey Abogados, DER Ediciones (2024).*