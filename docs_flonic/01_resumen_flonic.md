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

Tras diez días de espera —período en que RansomHub presumiblemente intentó negociar el pago de un rescate con la institución—, el grupo procedió a publicar los datos robados en su sitio web en la **dark web**, cumpliendo su amenaza de doble extorsión.

---

## 2. Volumen y Naturaleza de los Datos Comprometidos

La magnitud de la filtración fue significativa. Se liberaron públicamente **46 gigabytes** de archivos, entre los que se encontraban:

- **Listas en formato Excel** con nombres completos, RUT, sede, carrera y año de ingreso de estudiantes de pregrado y postgrado.
- **Datos de contacto** incluyendo correos electrónicos institucionales y números telefónicos de alumnos y académicos.
- **Base de datos del Centro de Alumnos** de la universidad.
- **Correos electrónicos internos** de la Mesa de Servicios del Departamento de Tecnologías de la Información (DTI), que gestiona requerimientos como cambios de contraseñas institucionales.
- **Listado de más de 2.700 exalumnos deudores** del Fondo Solidario de Crédito Universitario, incluyendo nombres, RUT, correo electrónico y fecha de cobro.

La exposición de RUT en combinación con datos financieros (deudas del crédito universitario) representa un riesgo especial, dado que en Chile el RUT es el identificador único de cada persona y su exposición puede facilitar fraudes, suplantación de identidad y otras formas de delito informático o financiero.

---

## 3. El Actor de Amenaza: RansomHub

RansomHub es un grupo de ciberdelincuentes que opera bajo el modelo de **Ransomware como Servicio (RaaS)**, lo que significa que proporciona su infraestructura y herramientas a afiliados externos, quienes ejecutan los ataques y comparten las ganancias. El grupo emergió en febrero de 2024 y en menos de un año se convirtió en el grupo de ransomware más activo del mundo, superando incluso a LockBit.

Su metodología se basa en la **doble extorsión**:
1. **Primera extorsión:** Cifran los sistemas de la víctima e impiden el acceso, exigiendo un rescate para restaurarlo.
2. **Segunda extorsión:** Amenazan con publicar los datos robados si no se paga. Las víctimas que se niegan ven su información expuesta en la dark web en un plazo de entre 3 y 90 días.

Desde su creación, RansomHub ha atacado a más de 531 organizaciones en todo el mundo, siendo el ataque a la UTFSM parte de una ola más amplia de ataques a instituciones educativas y gubernamentales en Latinoamérica.

---

## 4. Cronología del Incidente

| Fecha | Evento |
|---|---|
| 24 de octubre de 2024 | Ataque ransomware a los sistemas de la UTFSM. La universidad activa protocolos de seguridad. |
| 4 de noviembre de 2024 | RansomHub anuncia públicamente haber robado información de la UTFSM y amenaza con publicarla. |
| ~10-14 de noviembre de 2024 | Vence el plazo de negociación. Al no llegar a acuerdo, RansomHub publica los 46 GB en la dark web. |
| 14-16 de noviembre de 2024 | Medios de comunicación chilenos (FastCheck CL, The Clinic, CNN Chile) dan cobertura al caso. |

---

## 5. Impacto y Consecuencias

### Para los afectados directos
Los estudiantes, exalumnos y académicos cuyos datos fueron expuestos enfrentan riesgos concretos como:
- Suplantación de identidad mediante el uso de RUT y correo institucional.
- Acoso o phishing dirigido utilizando información personalizada.
- Exposición pública de su condición de deudores del crédito universitario, lo que puede afectar su reputación personal y laboral.

### Para la institución
- Daño reputacional significativo para una universidad de alto prestigio nacional e internacional.
- Cuestionamiento de la efectividad de sus medidas de ciberseguridad.
- Posible exposición a sanciones regulatorias bajo la Ley 19.628 de Protección de Datos Personales.
- Necesidad de revisión y refuerzo de todos sus sistemas y protocolos de seguridad informática.

### En el contexto nacional
Este caso se suma a una serie de incidentes de ciberseguridad en instituciones chilenas y latinoamericanas, evidenciando que el sector educativo es un blanco cada vez más frecuente para los grupos de ransomware, debido a la gran cantidad de datos personales que maneja y a infraestructuras de seguridad que históricamente han recibido menor inversión que el sector privado.

---

## 6. Respuesta Institucional

La respuesta oficial de la UTFSM fue calificada por expertos y medios como insuficiente en términos de transparencia. Si bien la universidad reconoció el incidente, minimizó inicialmente su alcance al describirlo como de "impacto controlado", cuando en la práctica decenas de miles de datos personales ya habían sido comprometidos y eventualmente publicados.

No existe registro público de que la institución haya notificado formalmente e individualmente a los afectados, lo cual podría constituir una vulneración de sus obligaciones bajo la normativa vigente de protección de datos.

---

## 7. Relevancia para el Presente Informe

Este caso es relevante para el análisis de la Ley 21.459 de Delitos Informáticos y la Ley 19.628 de Protección de Datos Personales por las siguientes razones:

- Involucra delitos informáticos tipificados (acceso no autorizado, exfiltración de datos, extorsión digital).
- Expone datos personales sensibles de miles de ciudadanos chilenos identificables por su RUT.
- Plantea interrogantes sobre las responsabilidades legales de las instituciones en materia de custodia de datos y notificación de brechas.
- Ilustra el funcionamiento real de grupos criminales internacionales organizados (RansomHub) operando en Chile.

---

*Fuentes: FastCheck CL (14/11/2024), The Clinic (16/11/2024), CNN Chile (16/11/2024), El Mercurio de Valparaíso (16/11/2024), BreachSense Data Breach Report (2024).*