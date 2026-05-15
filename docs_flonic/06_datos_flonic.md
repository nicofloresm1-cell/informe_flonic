# 06 — Datos Personales y Derechos ARCO
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

La Ley N° 19.628 sobre Protección de la Vida Privada establece un régimen de derechos que los titulares de datos personales pueden ejercer frente a quienes los tratan. Este capítulo analiza los tipos de datos comprometidos en el caso UTFSM, distingue entre datos personales ordinarios y sensibles, y examina los cuatro derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) con cita textual de la ley, evaluando su aplicabilidad al caso.

---

## 1. Tipos de Datos Comprometidos en el Caso UTFSM

La filtración de 46 GB por parte de RansomHub expuso al menos **cinco categorías** de datos personales diferenciadas:

### Tipo 1: Datos de identificación personal (Datos ordinarios)
- Nombres completos de estudiantes de pregrado y postgrado.
- Número de RUT (Rol Único Tributario) de alumnos, académicos y exalumnos.
- Sede, carrera y año de ingreso a la universidad.

**Calificación legal:** Datos personales ordinarios conforme al **Artículo 2° letra f) Ley 19.628**:
> *"'Datos de carácter personal' o 'datos personales': los relativos a cualquier información concerniente a personas naturales, identificadas o identificables."*

El RUT es el identificador único de toda persona natural en Chile. Su exposición combinada con nombre, carrera e institución permite la identificación inmediata y precisa de cada afectado, constituyendo un dato de alta utilidad para fraudes de suplantación de identidad.

### Tipo 2: Datos de contacto (Datos ordinarios)
- Correos electrónicos institucionales de alumnos y académicos.
- Números telefónicos personales.

**Calificación legal:** Datos personales ordinarios. Su exposición facilita el phishing dirigido y el acoso telemático.

### Tipo 3: Datos financieros de deudores (Datos sensibles)
- Listado de más de 2.700 exalumnos deudores del Fondo Solidario de Crédito Universitario.
- Información incluida: nombre, RUT, correo electrónico y fecha de cobro de la deuda.

**Calificación legal:** Datos de naturaleza económica y financiera. La **Ley N° 19.628** en su **Artículo 17°** establece una protección especial para este tipo de información:
> *"Los responsables de los registros o bases de datos que contengan los datos a que se refiere el artículo anterior no podrán comunicarlos a terceros, salvo [...] cuando sea necesario para la evaluación de riesgo financiero."*

Adicionalmente, la ley prohíbe expresamente la comunicación pública de las deudas del Fondo Solidario de Crédito Universitario, por lo que su filtración constituye una vulneración especialmente grave de este régimen.

### Tipo 4: Datos de comunicaciones internas (Datos sensibles en contexto)
- Correos electrónicos internos de la Mesa de Servicios del Departamento de Tecnologías de la Información (DTI).
- Requerimientos institucionales internos: solicitudes de cambio de contraseñas, incidencias técnicas, comunicaciones entre funcionarios.

**Calificación legal:** Aunque no son datos "sensibles" en sentido estricto de la ley, constituyen información confidencial de carácter institucional cuya divulgación vulnera el **Artículo 14° bis**:
> *"Toda persona que trabaje en el tratamiento de datos personales [...] estará obligada a guardar secreto sobre los mismos [...] Esta obligación subsistirá aún después que finalice su relación con el titular del registro o base de datos."*

### Tipo 5: Datos de registro académico (Datos ordinarios con impacto reputacional)
- Base de datos completa del Centro de Alumnos de la UTFSM.
- Información sobre participación estudiantil, cargos directivos y representación.

**Calificación legal:** Datos personales ordinarios. Su exposición puede generar daño reputacional para quienes aparecen vinculados a organizaciones estudiantiles.

---

## 2. Distinción: Datos Personales vs. Datos Sensibles

| Categoría | Tipo de dato | Afectados | ¿Sensible? | Norma específica |
|---|---|---|---|---|
| Identificación (nombre, RUT, carrera) | Ordinario | Todos los estudiantes filtrados | No, pero de alta utilidad para fraude | Art. 2° letra f) |
| Contacto (email, teléfono) | Ordinario | Alumnos y académicos | No | Art. 2° letra f) |
| Deudas Fondo Solidario | Financiero sensible | +2.700 exalumnos | **Sí** — protección especial | Art. 17° Ley 19.628 |
| Comunicaciones internas DTI | Confidencial institucional | Funcionarios y usuarios del DTI | En contexto | Art. 14° bis |
| Registro Centro de Alumnos | Ordinario con impacto reputacional | Dirigentes estudiantiles | No en sentido estricto | Art. 2° letra f) |

---

## 3. Derechos ARCO y su Aplicabilidad al Caso UTFSM

La Ley N° 19.628 reconoce cuatro derechos fundamentales a los titulares de datos personales. A continuación se analiza cada uno con su texto legal y aplicación al caso.

---

### Derecho 1: Derecho de Acceso

**Artículo 12° Ley 19.628:**
> *"Toda persona tiene derecho a exigir a quien sea responsable de un banco, que se dedique en forma pública o privada al tratamiento de datos personales, información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus datos son transmitidos regularmente."*

**Aplicación al caso UTFSM:**

Los estudiantes, académicos y exalumnos cuuyos datos fueron comprometidos tienen derecho a solicitar a la UTFSM que les informe:
- Qué datos suyos estaban almacenados en las bases de datos afectadas.
- Con quién fueron compartidos esos datos antes y después del incidente.
- Qué medidas tomó la universidad para proteger esa información.

**Limitación identificada:** La Ley 19.628 no establece un plazo máximo de respuesta claro para ejercer este derecho, ni contempla sanciones específicas por negativa injustificada. Esta laguna legal deja a los afectados sin herramienta efectiva de enforcement inmediato.

---

### Derecho 2: Derecho de Rectificación

**Artículo 12° inciso 2° Ley 19.628:**
> *"Toda persona tiene derecho a que los datos personales a su respecto, sean modificados cuando ellos no sean correctos, no estén actualizados o sean inexactos."*

**Artículo 13° Ley 19.628:**
> *"Los derechos de las personas a solicitar información, modificación, cancelación u oposición respecto de los datos personales son personalísimos y deberán ser ejercidos por el propio titular de los datos."*

**Aplicación al caso UTFSM:**

Este derecho tiene relevancia particular en el contexto del listado de deudores del Fondo Solidario: si algún exalumno figuraba erróneamente en ese listado o su deuda ya había sido pagada, tenía derecho a exigir la rectificación de esa información. La filtración pública de datos incorrectos o desactualizados potencia el daño reputacional de manera irreversible, ya que la información ya circula en la dark web y no puede ser "desrectificada" una vez publicada.

---

### Derecho 3: Derecho de Cancelación (Supresión)

**Artículo 12° Ley 19.628:**
> *"Toda persona tiene derecho a que sean eliminados de los registros o bases de datos los datos personales que le conciernan cuando su almacenamiento carezca de fundamento legal o cuando estuvieren caducos, y a oponerse a su transmisión."*

**Artículo 12° inciso 3°:**
> *"En el caso de datos cuya inexactitud no pueda ser establecida con claridad, o cuya eliminación o modificación sea impedida por no conocerse su fuente de error, el responsable del banco de datos, a solicitud del titular, debe bloquear los datos, haciéndolos inaccesibles."*

**Aplicación al caso UTFSM:**

Los exalumnos cuyas deudas del Fondo Solidario ya fueron pagadas o prescritas tienen derecho a exigir que la UTFSM elimine ese dato de sus registros. La situación generada por la filtración es especialmente grave porque incluso si la UTFSM elimina los datos de sus bases internas, la información ya publicada en la dark web es imposible de cancelar o suprimir, lo que convierte este derecho en ilusorio para las víctimas de la filtración.

Este es el mayor vacío del sistema chileno frente al GDPR, que tiene en el "derecho al olvido" (Art. 17 GDPR) un mecanismo más robusto aunque igualmente limitado ante filtraciones masivas.

---

### Derecho 4: Derecho de Oposición

**Artículo 12° Ley 19.628:**
> *"Toda persona tiene el derecho de oponerse al tratamiento de los datos que le conciernan y exigir que se eliminen, cuando [...] provengan de fuentes accesibles al público, siempre que cuente para ello con motivos fundados que se refieran a su situación personal."*

**Artículo 16° Ley 19.628:**
> *"El titular de los datos tendrá derecho a oponerse a que el banco de datos en que estén incluidos sus datos sea accesible al público en general, sea a través de internet o de cualquier otro medio de comunicación. Hecha la oposición formal por el titular, el responsable del banco de datos debe impedir el acceso público a sus datos dentro del plazo de tres días hábiles, bajo sanción de multa."*

**Aplicación al caso UTFSM:**

El derecho de oposición, tal como está redactado en la Ley 19.628, opera frente al responsable del tratamiento (la UTFSM), pero no frente a terceros que ya poseen los datos. En el contexto del caso:

- Los afectados pueden oponerse formalmente a la UTFSM para que bloquee cualquier difusión adicional de sus datos desde sus sistemas propios.
- Sin embargo, RansomHub ya publicó los datos en la dark web: este derecho no tiene alcance sobre los datos que ya están fuera del control de la UTFSM.
- Bajo el GDPR, el derecho de oposición tiene un alcance más amplio y contempla mecanismos de respuesta ante brechas ya consumadas.

---

## 4. Vacíos Legales Evidenciados por el Caso

| Derecho ARCO | Estado en Ley 19.628 | Brecha identificada | ¿El GDPR lo resuelve? |
|---|---|---|---|
| Acceso | Reconocido (Art. 12°) | Sin plazo de respuesta ni sanción por negativa | Sí: GDPR establece plazo de 30 días y sanción |
| Rectificación | Reconocido (Art. 12°) | No contempla qué ocurre si los datos erróneos ya fueron publicados | Parcialmente |
| Cancelación | Reconocido (Art. 12°) | Ilusorio ante datos ya publicados en dark web; no hay mecanismo de enforcement externo | Parcialmente (derecho al olvido, Art. 17 GDPR) |
| Oposición | Reconocido (Art. 16°) | Solo opera frente al responsable del tratamiento, no frente a terceros | Sí: GDPR contempla oposición más amplia |
| **Notificación de brecha** | **No existe** en Ley 19.628 actual | **Los afectados no tienen derecho a ser informados de la filtración** | Sí: Art. 34 GDPR obliga a notificar a los afectados |

---

## 5. Conclusión: El Caso UTFSM como Argumento para la Reforma

El análisis de los datos comprometidos y los derechos ARCO aplicables muestra que el sistema chileno, aun reconociendo estos derechos formalmente, carece de mecanismos efectivos para hacerlos valer ante una filtración masiva de la magnitud del caso UTFSM. Los afectados:

- **No fueron notificados** individualmente por la UTFSM.
- **No pueden ejercer** su derecho de cancelación frente a RansomHub.
- **No cuentan** con una autoridad de control de datos personales con facultades sancionatorias efectivas (la Ley 21.719, que crea el Consejo para la Transparencia con nuevas facultades, aún no entraba plenamente en vigor).

Esto refuerza la urgencia de que Chile acelere la implementación plena de la Ley N° 21.719 de Protección de Datos Personales, aprobada en 2024, que incorpora derechos más robustos y una autoridad de control con mayores atribuciones.

---

*Fuentes: Ley N° 19.628 (BCN), Ley N° 21.719 (BCN), GDPR — Reglamento (UE) 2016/679, ANCI (2024), FastCheck CL (14/11/2024).*