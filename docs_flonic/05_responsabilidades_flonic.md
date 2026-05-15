# 05 — Responsabilidades Legales de los Actores
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

El caso UTFSM involucra múltiples actores con distintos grados y tipos de responsabilidad legal. Este capítulo identifica **cuatro actores principales**, analiza para cada uno al menos **dos tipos de responsabilidad** (penal, civil y/o administrativa) y cita la norma específica que sustenta cada atribución.

---

## 1. Actor 1: Grupo RansomHub (Los Atacantes)

### Descripción del actor
RansomHub es el grupo criminal internacional que ejecutó el ataque de ransomware. Opera bajo el modelo Ransomware como Servicio (RaaS), con una estructura central que provee la infraestructura y afiliados externos que ejecutan los ataques.

### Tipo 1: Responsabilidad Penal

RansomHub incurre en múltiples delitos de la Ley N° 21.459:

**a) Acceso ilícito agravado — Art. 2° inciso 3°:**
> *"En caso de ser una misma persona la que hubiere obtenido y divulgado la información, se aplicará la pena de presidio menor en sus grados medio a máximo."*

RansomHub accedió sin autorización a los sistemas de la UTFSM y luego divulgó los 46 GB en la dark web: aplica la pena máxima de este artículo (541 días — 5 años).

**b) Sabotaje informático — Art. 1°:**
> *"El que obstaculice o impida el normal funcionamiento, total o parcial, de un sistema informático, a través de la introducción, transmisión, daño, deterioro, alteración o supresión de los datos informáticos, será castigado con la pena de presidio menor en sus grados medio a máximo."*

El cifrado ransomware obstaculizó el funcionamiento de los sistemas universitarios.

**c) Fraude informático — Art. 7° N°1:**
> *"Con presidio menor en sus grados medio a máximo y multa de once a quince UTM, si el valor del perjuicio excediera de cuarenta UTM."*

La exigencia de rescate económico supera los 40 UTM, configurando la pena máxima.

**d) Receptación informática — Art. 6°:**
> *"El que conociendo su origen o no pudiendo menos que conocerlo comercialice, transfiera o almacene [...] datos informáticos, provenientes de la realización de las conductas descritas en los artículos 2°, 3° y 5°, sufrirá la pena asignada a los respectivos delitos, rebajada en un grado."*

La publicación de los datos robados en la dark web configura este tipo penal.

**Agravante — Servicios esenciales (Art. 10° Ley 21.459):**
> *"Si con ocasión de la comisión de alguno de los delitos previstos en esta ley se afectaren servicios de utilidad pública [...] las penas señaladas se aumentarán en un grado."*

La UTFSM presta servicios educativos esenciales, lo que eleva la pena en un grado.

### Tipo 2: Responsabilidad de Personas Jurídicas

Conforme a la **Ley N° 20.393 sobre Responsabilidad Penal de las Personas Jurídicas**, modificada para incluir los delitos de la Ley 21.459, si RansomHub opera a través de una estructura societaria (empresa fachada o entidad legal), dicha persona jurídica puede ser perseguida con:
- Multas de hasta el doble del beneficio económico obtenido.
- Prohibición de celebrar actos o contratos con el Estado.
- Disolución o cancelación de la personalidad jurídica en casos graves.

---

## 2. Actor 2: Universidad Técnica Federico Santa María (La Institución Víctima-Responsable)

### Descripción del actor
La UTFSM es simultáneamente víctima del ataque y responsable legal del tratamiento de los datos personales comprometidos. Esta dualidad genera obligaciones y posibles responsabilidades propias, independientes del actuar de RansomHub.

### Tipo 1: Responsabilidad Civil

**Artículo 11° Ley 19.628:**
> *"El responsable de los registros o bases de datos personales deberá cuidar de ellos con la debida diligencia, haciéndose responsable de los daños que se produzcan."*

La UTFSM, como responsable de las bases de datos de estudiantes, exalumnos y académicos, responde civilmente por los daños patrimoniales y morales causados a los afectados por la filtración. Los afectados pueden demandar indemnización de perjuicios en sede civil, acreditando el daño sufrido (suplantación de identidad, daño reputacional, etc.).

**Artículo 23° Ley 19.628:**
> *"La persona natural o jurídica privada o el organismo público responsable del banco de datos personales deberá indemnizar el daño patrimonial y moral que causare por el tratamiento indebido de los datos."*

Este artículo establece expresamente la obligación de indemnizar tanto el daño patrimonial como el moral, sin requerir dolo, bastando la negligencia en el cuidado de los datos.

### Tipo 2: Responsabilidad Administrativa

**Artículo 9° Ley 21.663 — Incumplimiento del deber de reporte:**
> *"Las instituciones obligadas deberán reportar al CSIRT Nacional los ciberataques e incidentes de ciberseguridad que puedan tener efectos significativos [...] el que no podrá exceder de tres horas desde que se tome conocimiento del incidente."*

No existe registro público de que la UTFSM haya notificado al CSIRT Nacional dentro del plazo legal de 3 horas. Este incumplimiento configura una infracción grave bajo el Título VII de la Ley 21.663, sancionable con multa.

**Artículo 7° Ley 21.663 — Incumplimiento de medidas preventivas:**
> *"Las instituciones deberán aplicar de manera continua las medidas para prevenir, reportar y resolver incidentes de ciberseguridad."*

La exitosa exfiltración de 46 GB de datos evidencia que la UTFSM no aplicó medidas preventivas suficientes, lo que puede fundamentar una sanción administrativa por parte de la ANCI.

---

## 3. Actor 3: Afiliados de RansomHub (Los Ejecutores Directos del Ataque)

### Descripción del actor
RansomHub opera bajo el modelo RaaS: la organización central provee el software y la infraestructura, mientras que afiliados independientes ejecutan los ataques y comparten las ganancias. Los afiliados son personas o grupos distintos al núcleo central que realizaron materialmente la intrusión a los sistemas de la UTFSM.

### Tipo 1: Responsabilidad Penal Directa

Los afiliados que ejecutaron el ataque son autores directos de los delitos de la Ley 21.459:

**Artículo 2° — Acceso ilícito:**
Son los autores materiales que accedieron sin autorización a los sistemas de la UTFSM, superando sus barreras de seguridad.

**Artículo 3° — Interceptación ilícita:**
> *"El que indebidamente intercepte, interrumpa o interfiera, por medios técnicos, la transmisión no pública de información en un sistema informático [...] será castigado con la pena de presidio menor en su grado medio."*

Los afiliados ejecutaron materialmente la exfiltración de los 46 GB de datos, configurando este tipo penal.

### Tipo 2: Responsabilidad Penal como Coautores o Partícipes

Conforme al **Artículo 15 del Código Penal**, son autores los que participan en la ejecución del hecho de manera directa o quienes inducen a otro a ejecutarlo. Los afiliados de RansomHub pueden ser imputados como coautores del fraude informático (Art. 7°) y del sabotaje (Art. 1°) junto al núcleo central del grupo.

Adicionalmente, el **Artículo 292 del Código Penal** (asociación ilícita) puede aplicarse si se acredita que los afiliados forman parte de una organización estructurada con el propósito permanente de cometer delitos, lo que agrava su situación procesal.

---

## 4. Actor 4: Terceros que Descargaron y Usaron los Datos Filtrados

### Descripción del actor
Tras la publicación de los 46 GB en la dark web, diversas personas —potenciales compradores, curiosos, estafadores— pudieron haber descargado, almacenado o utilizado los datos personales de estudiantes y exalumnos de la UTFSM.

### Tipo 1: Responsabilidad Penal — Receptación Informática

**Artículo 6° Ley 21.459:**
> *"El que conociendo su origen o no pudiendo menos que conocerlo comercialice, transfiera o almacene con el mismo objeto u otro fin ilícito, a cualquier título, datos informáticos, provenientes de la realización de las conductas descritas en los artículos 2°, 3° y 5°, sufrirá la pena asignada a los respectivos delitos, rebajada en un grado."*

Cualquier persona que, conociendo el origen ilícito de los datos de la UTFSM publicados por RansomHub, los haya descargado para usarlos en fraudes, phishing o suplantación de identidad, incurre en receptación informática. La pena es la misma del delito base (acceso ilícito o interceptación), rebajada en un grado.

### Tipo 2: Responsabilidad Civil por Daños a los Afectados

**Artículo 2.314 del Código Civil:**
> *"El que ha cometido un delito o cuasidelito que ha inferido daño a otro, es obligado a la indemnización."*

Un tercero que utilice los datos filtrados de la UTFSM para cometer fraude, phishing o suplantación de identidad responde civilmente por los daños patrimoniales y morales causados a las víctimas, con independencia de la responsabilidad penal que también pueda corresponderle.

---

## 5. Tabla Resumen: Actores y Responsabilidades

| Actor | Tipo de responsabilidad | Norma aplicable | Sanción posible |
|---|---|---|---|
| **RansomHub (grupo)** | Penal | Ley 21.459, Arts. 1°, 2°, 6°, 7°, 10° | Presidio menor grados medio a máximo; concurso real puede superar 5 años |
| **RansomHub (persona jurídica)** | Penal empresarial | Ley 20.393 | Multas, prohibición de contratar con el Estado, disolución |
| **UTFSM** | Civil | Ley 19.628, Arts. 11° y 23° | Indemnización de daño patrimonial y moral a cada afectado |
| **UTFSM** | Administrativa | Ley 21.663, Arts. 7° y 9° | Multa por infracción grave (omisión de reporte al CSIRT) |
| **Afiliados de RansomHub** | Penal directa y coautoría | Ley 21.459, Arts. 2°, 3°; CP Art. 15° y 292° | Penas equivalentes a las del grupo central; posible asociación ilícita |
| **Terceros descargadores** | Penal | Ley 21.459, Art. 6° | Pena del delito base rebajada en un grado |
| **Terceros descargadores** | Civil | Código Civil, Art. 2.314° | Indemnización a las víctimas de fraude o suplantación |

---

*Fuentes: Ley N° 21.459 (BCN), Ley N° 19.628 (BCN), Ley N° 21.663 (BCN), Ley N° 20.393 (BCN), Código Penal Chile, Código Civil Chile, ANCI (2024).*