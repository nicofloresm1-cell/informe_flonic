# 06 — Datos Personales y Derechos ARCO
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

La Ley N° 19.628 sobre Protección de la Vida Privada establece un régimen de derechos que los titulares de datos personales pueden ejercer frente a quienes los tratan.

---

## 1. Tipos de Datos Comprometidos

La filtración de 46 GB por parte de RansomHub expuso al menos **cinco categorías** de datos personales diferenciadas:

### Tipo 1: Datos de identificación personal (Datos ordinarios)
- Nombres completos de estudiantes de pregrado y postgrado.
- Número de RUT (Rol Único Tributario) de alumnos, académicos y exalumnos.
- Sede, carrera y año de ingreso a la universidad.

**Calificación legal:** Datos personales ordinarios conforme al **Artículo 2° letra f) Ley 19.628**.

El RUT es el identificador único de toda persona natural en Chile. Su exposición facilita fraudes de suplantación de identidad.

### Tipo 2: Datos de contacto (Datos ordinarios)
- Correos electrónicos institucionales de alumnos y académicos.
- Números telefónicos personales.

Su exposición facilita phishing dirigido y acoso telemático.

### Tipo 3: Datos financieros de deudores (Datos sensibles)
- Listado de más de 2.700 exalumnos deudores del Fondo Solidario.
- Información incluida: nombre, RUT, correo electrónico y fecha de cobro.

**Calificación legal:** Datos de naturaleza económica y financiera. La **Ley N° 19.628** establece una protección especial en el **Artículo 17°**.

La ley prohíbe expresamente la comunicación pública de las deudas del Fondo Solidario, por lo que su filtración constituye una vulneración especialmente grave.

### Tipo 4: Datos de comunicaciones internas (Datos sensibles en contexto)
- Correos electrónicos internos de la Mesa de Servicios del DTI.
- Requerimientos institucionales: solicitudes de cambio de contraseñas, incidencias técnicas.

**Calificación legal:** Información confidencial institucional cuya divulgación vulnera el **Artículo 14° bis**.

### Tipo 5: Datos de registro académico (Datos ordinarios con impacto reputacional)
- Base de datos completa del Centro de Alumnos de la UTFSM.
- Información sobre participación estudiantil, cargos directivos.

Su exposición puede generar daño reputacional.

---

## 2. Distinción: Datos Personales vs. Datos Sensibles

| Categoría | Tipo de dato | Afectados | ¿Sensible? | Norma |
|---|---|---|---|---|
| Identificación (nombre, RUT, carrera) | Ordinario | Todos los estudiantes | No, pero de alta utilidad para fraude | Art. 2° |
| Contacto (email, teléfono) | Ordinario | Alumnos y académicos | No | Art. 2° |
| Deudas Fondo Solidario | Financiero sensible | +2.700 exalumnos | **Sí** | Art. 17° |
| Comunicaciones internas DTI | Confidencial institucional | Funcionarios | En contexto | Art. 14° bis |
| Registro Centro de Alumnos | Ordinario + reputación | Dirigentes estudiantiles | No | Art. 2° |

---

## 3. Derechos ARCO y Aplicabilidad al Caso UTFSM

---

### Derecho 1: Derecho de Acceso

**Artículo 12° Ley 19.628:**
> *"Toda persona tiene derecho a exigir a quien sea responsable de un banco, que se dedique en forma pública o privada al tratamiento de datos personales, información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus datos son transmitidos regularmente."*

**Aplicación al caso UTFSM:**
Los estudiantes y exalumnos pueden solicitar a la UTFSM que les informe:
- Qué datos suyos estaban almacenados en las bases de datos afectadas.
- Con quién fueron compartidos antes y después del incidente.
- Qué medidas tomó la universidad para proteger esa información.

---

### Derecho 2: Derecho de Rectificación

**Artículo 12° inciso 2° Ley 19.628:**
> *"Toda persona tiene derecho a que los datos personales a su respecto, sean modificados cuando ellos no sean correctos, no estén actualizados o sean inexactos."*

**Aplicación al caso UTFSM:**
Este derecho tiene relevancia particular en el listado de deudores del Fondo Solidario: si algún exalumno figuraba erróneamente en ese listado o su deuda ya había sido pagada, tenía derecho a exigir la rectificación.

---

### Derecho 3: Derecho de Cancelación (Supresión)

**Artículo 12° Ley 19.628:**
> *"Toda persona tiene derecho a que sean eliminados de los registros o bases de datos los datos personales que le conciernan cuando su almacenamiento carezca de fundamento legal o cuando estuvieren caducos, y a oponerse a su transmisión."*

**Aplicación al caso UTFSM:**
Los exalumnos cuyas deudas del Fondo Solidario ya fueron pagadas o prescritas tienen derecho a exigir que la UTFSM elimine ese dato. Sin embargo, esta situación es especialmente grave porque incluso si la UTFSM elimina los datos, la información ya publicada en la dark web es imposible de cancelar.

---

### Derecho 4: Derecho de Oposición

**Artículo 12° Ley 19.628:**
> *"Toda persona tiene derecho a oponerse al tratamiento de sus datos, en particular cuando estos se utilicen con fines de lucro."*

**Aplicación al caso UTFSM:**
Los afectados pueden oponerse a que la UTFSM continúe tratando sus datos con ciertos propósitos, aunque esta oposición es limitada en casos donde existe fundamento legal para el tratamiento.

---

## 4. Limitaciones de los Derechos ARCO

Una limitación crítica: La Ley 19.628 no define plazos máximos de respuesta a solicitudes ARCO, ni contempla sanciones específicas por negativa injustificada. Esta laguna legal deja a los afectados sin herramientas de enforcement inmediato.

Adicionalmente, los derechos ARCO operan solo frente al responsable del tratamiento (la UTFSM), no frente a terceros que ya descargaron los datos de la dark web. Esto los vuelve ilusorios para datos ya publicados.

---

## Conclusión

Los derechos ARCO reconocidos por la Ley 19.628 son teóricamente robustos, pero prácticamente limitados en casos de filtración masiva como el de la UTFSM. La ausencia de plazos máximos de respuesta y la inaplicabilidad a terceros reduce significativamente su efectividad.
