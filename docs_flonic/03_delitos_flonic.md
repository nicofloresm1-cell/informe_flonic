# 03 — Delitos y Artículos Ley 21.459
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

El ataque de RansomHub a la UTFSM no fue un acto único: fue una **cadena de conductas delictivas** ejecutadas en secuencia, cada una tipificada de manera independiente por la Ley N° 21.459. Este capítulo analiza en detalle cada delito cometido, su descripción legal, las penas asociadas y su aplicación concreta a los hechos del caso, incluyendo el problema del concurso de delitos cuando varias figuras se superponen en una misma conducta.

---

## 1. Estructura del Ataque y Delitos Involucrados

El ataque de RansomHub puede dividirse en las siguientes fases, cada una con su correspondiente calificación jurídica:

| Fase del ataque | Conducta | Delito — Artículo |
|---|---|---|
| **1. Acceso inicial** | Intrusión no autorizada a los sistemas de la UTFSM | Acceso ilícito — Art. 2° |
| **2. Exfiltración** | Extracción de 46 GB de datos personales | Interceptación ilícita — Art. 3° |
| **3. Cifrado** | Ransomware bloquea sistemas universitarios | Sabotaje informático — Art. 1° / Ataque a integridad de datos — Art. 4° |
| **4. Extorsión** | Exigencia de rescate a cambio de no publicar datos | Fraude informático — Art. 7° |
| **5. Publicación** | Filtración de datos en la dark web | Receptación informática — Art. 6° |
| **6. Herramienta** | Uso de software ransomware diseñado para atacar | Abuso de dispositivos — Art. 8° |

---

## 2. Análisis Artículo por Artículo

---

### Artículo 1° — Sabotaje Informático (Ataque a la integridad de sistemas)

**Texto legal:**
> *"El que obstaculice o impida el normal funcionamiento, total o parcial, de un sistema informático, a través de la introducción, transmisión, daño, deterioro, alteración o supresión de los datos informáticos, será castigado con la pena de presidio menor en sus grados medio a máximo."*

**Pena:** Presidio menor en grados medio a máximo → **541 días a 5 años**.

**Bien jurídico protegido:** La disponibilidad e integridad de los sistemas informáticos.

**Aplicación al caso UTFSM:**

El ransomware desplegado por RansomHub cifró los archivos de los sistemas de la universidad, haciendo inaccesibles sus datos y obstaculizando el funcionamiento normal de sus servicios. La UTFSM reconoció en su comunicado oficial que el ataque generó "un impacto controlado en sus servicios", lo que equivale a reconocer que el normal funcionamiento fue interrumpido.

El ransomware es precisamente el ejemplo más claro de este tipo penal: introduce código malicioso que altera y suprime la disponibilidad de los datos, bloqueando al titular del sistema hasta que se pague un rescate.

> **Importante:** Según el artículo 10° de la ley, si el ataque afecta **servicios esenciales** (salud, educación, infraestructura crítica), la pena se eleva en un grado. Una universidad de la envergadura de la UTFSM presta servicios educativos a miles de personas, lo que podría fundamentar esta agravante.

---

### Artículo 2° — Acceso Ilícito

**Texto legal:**
> *"El que, sin autorización o excediendo la autorización que posea y superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema informático será castigado con la pena de presidio menor en su grado mínimo o multa de once a veinte unidades tributarias mensuales."*
>
> *"Si el acceso fuere realizado con el ánimo de apoderarse o usar la información contenida en el sistema informático, se aplicará la pena de presidio menor en sus grados mínimo a medio."*
>
> *"En caso de ser una misma persona la que hubiere obtenido y divulgado la información, se aplicará la pena de presidio menor en sus grados medio a máximo."*

**Penas según modalidad:**

| Modalidad | Pena |
|---|---|
| Acceso simple sin autorización | Presidio menor grado mínimo (61–540 días) o multa 11–20 UTM |
| Acceso con ánimo de apoderarse de datos | Presidio menor grados mínimo a medio (61 días–3 años) |
| Acceso + divulgación por la misma persona | Presidio menor grados medio a máximo (541 días–5 años) |

**Bien jurídico protegido:** La confidencialidad e integridad de los sistemas informáticos.

**Elemento clave — Superación de barreras técnicas:** La ley exige expresamente que el acceso se haya realizado superando barreras técnicas o medidas tecnológicas de seguridad (contraseñas, firewalls, autenticación, etc.). RansomHub es conocido por explotar vulnerabilidades específicas en sistemas como Apache ActiveMQ, Fortinet FortiOS y Citrix ADC para obtener acceso inicial, lo que cumple plenamente este requisito.

**Aplicación al caso UTFSM:**

RansomHub accedió sin autorización a los sistemas internos de la UTFSM, superando sus defensas tecnológicas. Dado que el acceso se realizó con el ánimo explícito de apoderarse de los datos (los 46 GB exfiltrados lo acreditan) y además esos datos fueron divulgados públicamente en la dark web, correspondería aplicar la modalidad más grave: **presidio menor en grados medio a máximo**.

**Excepción — Hacking ético (inciso final Art. 2°):**
La ley contempla una excepción para investigadores de seguridad registrados en la ANCI que reportan vulnerabilidades de buena fe, siempre que no exista ánimo de apoderarse de la información. Esta excepción no aplica en absoluto al caso RansomHub, que actuó con dolo directo y ánimo de lucro.

---

### Artículo 3° — Interceptación Ilícita

**Texto legal:**
> *"El que indebidamente intercepte, interrumpa o interfiera, por medios técnicos, la transmisión no pública de información en un sistema informático o entre dos o más de aquellos, será castigado con la pena de presidio menor en su grado medio."*
>
> *"El que, sin contar con la debida autorización, capte, por medios técnicos, datos contenidos en sistemas informáticos a través de las emisiones electromagnéticas provenientes de éstos, será castigado con la pena de presidio menor en sus grados medio a máximo."*

**Pena:** Presidio menor en grado medio → **541 días a 3 años** (o hasta 5 años en la modalidad electromagnética).

**Bien jurídico protegido:** La confidencialidad de las comunicaciones e información transmitida o almacenada en sistemas informáticos.

**Aplicación al caso UTFSM:**

La exfiltración de los 46 GB de datos implica la captura técnica de información contenida en los sistemas de la universidad sin autorización. Esto configura la interceptación de datos almacenados en sistemas informáticos, abarcando los correos electrónicos de la Mesa de Servicios, las bases de datos de estudiantes y el listado de deudores del Fondo Solidario.

---

### Artículo 4° — Ataque a la Integridad de los Datos Informáticos

**Texto legal:**
> *"El que indebidamente altere, dañe o suprima datos informáticos, será castigado con presidio menor en su grado medio, siempre que con ello se cause un daño grave al titular de estos mismos."*

**Pena:** Presidio menor en grado medio → **541 días a 3 años** (condicionado a que el daño sea grave).

**Bien jurídico protegido:** La integridad de los datos informáticos.

**Aplicación al caso UTFSM:**

El cifrado de datos mediante ransomware constituye una **alteración y supresión funcional** de los datos: aunque los archivos físicamente siguen en los servidores, son inaccesibles para su titular sin la clave de descifrado, lo que equivale a una supresión práctica de su disponibilidad. El daño causado a la UTFSM fue claramente grave: afectó el funcionamiento de sus sistemas institucionales y expuso información de miles de personas.

---

### Artículo 5° — Falsificación Informática

**Texto legal:**
> *"El que indebidamente introduzca, altere, dañe o suprima datos informáticos con la intención de que sean tomados como auténticos o utilizados para generar documentos auténticos, será sancionado con la pena de presidio menor en sus grados medio a máximo."*

**Pena:** Presidio menor en grados medio a máximo → **541 días a 5 años**.

**Aplicación al caso UTFSM:**

Este artículo tiene menor aplicación directa al caso, pero es relevante si RansomHub hubiera alterado registros internos para encubrir su acceso o si hubiera manipulado datos antes de publicarlos para hacerlos parecer auténticos. En el análisis del caso se menciona de forma complementaria.

---

### Artículo 6° — Receptación Informática

**Texto legal:**
> *"El que conociendo su origen o no pudiendo menos que conocerlo comercialice, transfiera o almacene con el mismo objeto u otro fin ilícito, a cualquier título, datos informáticos, provenientes de la realización de las conductas descritas en los artículos 2°, 3° y 5°, sufrirá la pena asignada a los respectivos delitos, rebajada en un grado."*

**Pena:** La misma que el delito de origen (acceso ilícito, interceptación), rebajada en un grado.

**Bien jurídico protegido:** Cierre del circuito delictivo; evitar que terceros se beneficien de datos ilícitamente obtenidos.

**Aplicación al caso UTFSM:**

Este artículo es relevante en dos dimensiones:

1. **RansomHub mismo:** Al publicar y transferir los datos a través de su sitio en la dark web, transfiere datos de origen ilícito (provenientes de los delitos de los artículos 2° y 3°), lo que configura receptación informática en concurso con los delitos anteriores.

2. **Terceros que descargaron los datos:** Cualquier persona que, conociendo el origen ilícito de los datos publicados por RansomHub, los haya descargado, almacenado o utilizado para cualquier fin, puede ser imputada por receptación informática. Esto incluye potenciales compradores de la información en el mercado negro.

---

### Artículo 7° — Fraude Informático

**Texto legal:**
> *"El que, causando perjuicio a otro, con la finalidad de obtener un beneficio económico para sí o para un tercero, manipule un sistema informático, mediante la introducción, alteración, daño o supresión de datos informáticos o a través de cualquier interferencia en el funcionamiento de un sistema informático, será penado:*
> *1) Con presidio menor en sus grados medio a máximo y multa de once a quince UTM, si el valor del perjuicio excediera de cuarenta UTM.*
> *2) Con presidio menor en su grado medio y multa de seis a diez UTM, si el valor del perjuicio excediere de cuatro UTM y no pasare de cuarenta UTM.*
> *3) Con presidio menor en su grado mínimo y multa de cinco a diez UTM, si el valor del perjuicio no excediere de cuatro UTM."*

**Penas según monto del perjuicio:**

| Perjuicio (UTM) | Pena privativa | Multa |
|---|---|---|
| Más de 40 UTM (~$3.000.000 CLP) | Presidio menor medio a máximo (541 días–5 años) | 11–15 UTM |
| Entre 4 y 40 UTM | Presidio menor grado medio (541 días–3 años) | 6–10 UTM |
| Menos de 4 UTM | Presidio menor grado mínimo (61–540 días) | 5–10 UTM |

**Bien jurídico protegido:** El patrimonio y la indemnidad económica de las víctimas.

**Aplicación al caso UTFSM:**

La conducta de RansomHub encuadra perfectamente en este tipo: cifró los sistemas de la UTFSM (interferencia en el funcionamiento) con el fin explícito de obtener un beneficio económico (el pago del rescate). El perjuicio causado a la universidad —en costos de recuperación, pérdida de operatividad y daño reputacional— excede ampliamente los umbrales de la figura más grave, configurando la penalidad del numeral 1°: **presidio menor en grados medio a máximo más multa**.

---

### Artículo 8° — Abuso de Dispositivos

**Texto legal:**
> *"El que, con el ánimo de cometer los delitos previstos en esta ley, produzca, adquiera, importe, facilite o posea programas computacionales, credenciales o dispositivos diseñados principalmente para perpetrar dichos delitos, será sancionado con presidio menor en su grado mínimo o multa de once a veinte unidades tributarias mensuales."*

**Pena:** Presidio menor grado mínimo (61–540 días) o multa de 11–20 UTM.

**Aplicación al caso UTFSM:**

RansomHub opera con un software de ransomware propio, desarrollado en los lenguajes Golang y C++, diseñado específicamente para cifrar sistemas y facilitar la extorsión. Esta herramienta es un "programa computacional diseñado principalmente" para cometer delitos informáticos, configurando el tipo del artículo 8°. Este delito opera como un **tipo autónomo** que puede imputarse independientemente de si el ataque principal se consuma o no.

---

## 3. Concurso de Delitos

Un aspecto jurídico central en este caso es que **múltiples delitos concurren simultáneamente** en los mismos hechos. El derecho penal chileno distingue:

### Concurso real (material)
Se produce cuando una persona, mediante **distintas acciones**, comete varios delitos. En el caso UTFSM, cada fase del ataque (acceso → exfiltración → cifrado → extorsión → publicación) constituyó una acción separada, por lo que existe un concurso real entre los delitos de los artículos 1°, 2°, 3°, 6°, 7° y 8°.

En el concurso real, se aplica la regla de acumulación jurídica de penas: se impone la pena mayor, aumentada hasta el triple, sin que pueda exceder el máximo legal.

### Concurso ideal (medial)
Se produce cuando **un solo hecho** constituye dos o más delitos. El acceso inicial, por ejemplo, puede configurar simultáneamente el artículo 2° (acceso ilícito) y ser el medio necesario para el artículo 3° (interceptación). En estos casos se aplica la pena mayor asignada al delito más grave.

En un ataque de ransomware concurren múltiples ilícitos sancionados por la Ley 21.459: el acceso ilícito al sistema, el ataque a la integridad de los datos y el delito de extorsión y fraude informático.

---

## 4. Circunstancias Modificatorias de Responsabilidad

### Agravante — Afectación de servicios esenciales (Art. 10°)
La ley contempla que si alguno de los delitos anteriores afecta servicios calificados como esenciales (educación, salud, energía, telecomunicaciones), la pena puede aumentarse en un grado. La UTFSM presta servicios de educación superior a miles de estudiantes, lo que puede fundamentar esta agravante.

### Agravante — Actuación organizada
RansomHub opera como una organización criminal internacional con estructura de afiliados. El Código Penal chileno considera agravante la participación en una asociación criminal organizada para delinquir (artículo 12 N°2 del Código Penal).

### Atenuante — Cooperación eficaz (Art. 9°)
Si algún miembro o afiliado del grupo cooperara eficazmente con la investigación, entregando información que permita identificar a los responsables o prevenir otros delitos, podría obtener una rebaja de hasta un grado en su pena.

---

## 5. Responsabilidad de Personas Jurídicas — Ley 20.393

La Ley 21.459 incorporó expresamente los delitos informáticos al catálogo de la **Ley N° 20.393 sobre Responsabilidad Penal de las Personas Jurídicas**. Esto significa que si RansomHub operara a través de una estructura societaria, dicha entidad también podría ser perseguida penalmente. Las sanciones para personas jurídicas incluyen:

- Multas de hasta el doble del beneficio obtenido.
- Pérdida de beneficios fiscales y subsidios.
- Prohibición de celebrar contratos con el Estado.
- Disolución de la persona jurídica en casos graves.

---

## 6. Tabla Consolidada de Penas Aplicables al Caso UTFSM

| Artículo | Delito | Pena mínima | Pena máxima aplicable |
|---|---|---|---|
| Art. 1° | Sabotaje informático | 541 días | 5 años (+1 grado si hay agravante) |
| Art. 2° | Acceso ilícito + divulgación | 541 días | 5 años |
| Art. 3° | Interceptación ilícita | 541 días | 5 años |
| Art. 4° | Ataque a integridad de datos | 541 días | 3 años |
| Art. 6° | Receptación informática | Pena rebajada del delito base | — |
| Art. 7° | Fraude informático (rescate) | 541 días + multa | 5 años + multa 11–15 UTM |
| Art. 8° | Abuso de dispositivos | 61 días | 540 días o multa 11–20 UTM |

> En virtud del concurso real de delitos, aplicando la regla de acumulación jurídica, RansomHub podría enfrentar penas que en conjunto superen los 5 años de presidio, lo que excluiría la posibilidad de penas sustitutivas y haría procedente la prisión preventiva como medida cautelar durante la investigación.

---

*Fuentes: Ley N° 21.459 (D.O. 20/06/2022), vLex Chile, Revista de Estudios de la Justicia UCh (Bascur y Peña, 2022), Schneider Abogados, blog.redvoiss.net, abogaley.cl.*