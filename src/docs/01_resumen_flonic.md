# 01 — Resumen Ejecutivo
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM)
**Fecha del incidente:** 24 de octubre de 2024  
**Fecha de filtración pública:** 14 de noviembre de 2024  
**Tipo de ataque:** Ransomware — Doble extorsión  
**Actor responsable:** Grupo RansomHub  

---

## 1. Descripción General del Incidente

El 24 de octubre de 2024, la Universidad Técnica Federico Santa María (UTFSM), una de las instituciones de educación superior más prestigiosas de Chile y Latinoamérica, fue víctima de un sofisticado ataque de ransomware perpetrado por el grupo criminal internacional conocido como **RansomHub**.

La universidad emitió un comunicado oficial reconociendo que ese día *"se registró un incidente de seguridad informática, el cual fue detenido a tiempo gracias a los protocolos establecidos para estos casos, generando un impacto controlado en nuestros servicios"*. Sin embargo, esta versión institucional resultó ser parcial: los atacantes ya habían exfiltrado una cantidad masiva de información confidencial antes de que los sistemas fueran detenidos.

Tras diez días de espera, RansomHub procedió a publicar los datos robados en su sitio web en la **dark web**, cumpliendo su amenaza de doble extorsión.

---

## 2. Volumen y Naturaleza de los Datos Comprometidos

La magnitud de la filtración fue significativa. Se liberaron públicamente **46 gigabytes** de archivos, entre los que se encontraban:

- **Listas en formato Excel** con nombres completos, RUT, sede, carrera y año de ingreso de estudiantes de pregrado y postgrado.
- **Datos de contacto** incluyendo correos electrónicos institucionales y números telefónicos de alumnos y académicos.
- **Base de datos del Centro de Alumnos** de la universidad.
- **Correos electrónicos internos** de la Mesa de Servicios del Departamento de Tecnologías de la Información (DTI).
- **Listado de más de 2.700 exalumnos deudores** del Fondo Solidario de Crédito Universitario.

---

## 3. El Actor de Amenaza: RansomHub

RansomHub es un grupo de ciberdelincuentes que opera bajo el modelo de **Ransomware como Servicio (RaaS)**. El grupo emergió en febrero de 2024 y en menos de un año se convirtió en el grupo de ransomware más activo del mundo.

Su metodología se basa en la **doble extorsión**:
1. **Primera extorsión:** Cifran los sistemas y exigen rescate.
2. **Segunda extorsión:** Amenazan con publicar los datos si no se paga.

Desde su creación, RansomHub ha atacado a más de 531 organizaciones en todo el mundo.

---

## 4. Cronología del Incidente

| Fecha | Evento |
|---|---|
| 24 de octubre de 2024 | Ataque ransomware a los sistemas de la UTFSM. |
| 4 de noviembre de 2024 | RansomHub anuncia públicamente haber robado información. |
| 14 de noviembre de 2024 | RansomHub publica los 46 GB en la dark web. |
| 14-16 de noviembre de 2024 | Medios de comunicación chilenos dan cobertura al caso. |

---

## 5. Impacto y Consecuencias

### Para los afectados directos
- Suplantación de identidad mediante el uso de RUT y correo institucional.
- Acoso o phishing dirigido utilizando información personalizada.
- Exposición pública de su condición de deudores del crédito universitario.

### Para la institución
- Daño reputacional significativo.
- Cuestionamiento de la efectividad de sus medidas de ciberseguridad.
- Posible exposición a sanciones regulatorias.

---

## 6. Respuesta Institucional

La respuesta oficial de la UTFSM fue calificada como insuficiente en términos de transparencia. Si bien reconoció el incidente, minimizó inicialmente su alcance al describirlo como de "impacto controlado", cuando decenas de miles de datos personales ya habían sido comprometidos.

---

## 7. Relevancia para el Presente Informe

Este caso es relevante por:
- Involucra delitos informáticos tipificados.
- Expone datos personales sensibles de miles de ciudadanos chilenos.
- Plantea interrogantes sobre responsabilidades legales.
- Ilustra el funcionamiento real de grupos criminales internacionales.
