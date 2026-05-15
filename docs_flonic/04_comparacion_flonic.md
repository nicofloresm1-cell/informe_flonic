# 04 — Comparación de Marcos Regulatorios por Industria
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

Para evaluar la suficiencia del marco legal chileno aplicado al caso UTFSM, es necesario compararlo con otros marcos regulatorios relevantes. Este capítulo presenta una tabla comparativa con **tres marcos normativos** y **tres ejes de análisis**, con aplicabilidad explícita al caso en cada celda.

---

## 1. Marcos Regulatorios Analizados

| Marco | Tipo | Jurisdicción | Aplicabilidad al caso |
|---|---|---|---|
| **Ley 19.628 + Ley 21.459 + Ley 21.663 (Chile)** | Nacional — Penal, Civil y Administrativa | Chile | Marco directamente aplicable: regula el delito, los datos y la ciberseguridad institucional de la UTFSM |
| **GDPR — Reglamento General de Protección de Datos (UE)** | Supranacional — Administrativa | Unión Europea | Marco de referencia internacional; Chile lo toma como modelo en la Ley 21.719 (futura) |
| **ISO/IEC 27001 — Sistema de Gestión de Seguridad de la Información** | Estándar técnico internacional | Global (certificación voluntaria) | Estándar técnico que la UTFSM podría haber implementado para prevenir el ataque |

---

## 2. Tabla Comparativa: 3 Marcos × 3 Ejes

### Eje 1: Alcance del sujeto obligado y tipo de sanción

| Criterio | Chile (Ley 19.628 / 21.459 / 21.663) | GDPR (UE) | ISO 27001 |
|---|---|---|---|
| **¿Quién está obligado?** | Responsables de bases de datos personales públicos y privados; instituciones que presten servicios esenciales | Cualquier organización que trate datos de ciudadanos de la UE, sin importar dónde esté radicada | Cualquier organización que voluntariamente adopte el estándar; no hay imposición legal directa |
| **Sanción máxima** | Multa + penas de presidio (Ley 21.459); infracciones graves Ley 21.663 con multas proporcionales | Hasta €20 millones o el 4% de la facturación anual global, lo que sea mayor | No aplica (es certificación; la sanción es la pérdida de la certificación o daño reputacional) |
| **Aplicación al caso UTFSM** | La UTFSM enfrenta responsabilidad civil (Art. 11° Ley 19.628), posibles infracciones administrativas (Ley 21.663) y los atacantes, responsabilidad penal (Ley 21.459) | Si la UTFSM tratara datos de ciudadanos europeos (p. ej. alumnos de intercambio), el GDPR podría aplicarse extraterritorialmente y las multas serían significativamente más altas | La UTFSM no contaba con certificación ISO 27001, lo que habría sido un indicador preventivo clave |

---

### Eje 2: Obligación de notificación de brechas de seguridad

| Criterio | Chile (Ley 21.663, Art. 9°) | GDPR (Art. 33 y 34) | ISO 27001 (Control A.16) |
|---|---|---|---|
| **Plazo de notificación a la autoridad** | Máximo **3 horas** desde que se toma conocimiento del incidente (al CSIRT Nacional) | Máximo **72 horas** desde que se detecta la brecha (a la autoridad supervisora nacional) | No define plazo legal; recomienda un procedimiento documentado de gestión de incidentes |
| **Obligación de notificar a afectados** | No existe aún obligación explícita de notificación individual a afectados en la Ley 19.628 actual | **Sí**, cuando la brecha suponga un alto riesgo para los derechos y libertades de las personas (Art. 34 GDPR), la notificación debe ser "sin dilación indebida" | Recomienda comunicación, pero no la impone legalmente |
| **Aplicación al caso UTFSM** | La UTFSM posiblemente incumplió el plazo de 3 horas al CSIRT Nacional. No notificó individualmente a los afectados, lo que bajo el marco chileno actual no genera sanción directa | Bajo el GDPR, no notificar a los +2.700 exalumnos deudores expuestos habría constituido una infracción sancionable con multa de hasta €10 millones | La ausencia de un protocolo ISO 27001 de gestión de incidentes explica en parte la respuesta institucional tardía y opaca |

---

### Eje 3: Medidas de seguridad exigidas al responsable del tratamiento

| Criterio | Chile (Ley 19.628, Art. 11° / Ley 21.663, Art. 7° y 8°) | GDPR (Art. 32) | ISO 27001 (Anexo A — Controles) |
|---|---|---|---|
| **Estándar de seguridad exigido** | "Debida diligencia" (estándar genérico, Ley 19.628). La Ley 21.663 exige protocolos ANCI, auditorías y planes de continuidad para OIV | "Medidas técnicas y organizativas apropiadas" considerando el estado de la técnica, los costos y la naturaleza de los datos. Principio de protección desde el diseño (*privacy by design*) | 93 controles organizados en 4 dominios: organizacionales, personas, físicos y tecnológicos. Incluye gestión de accesos, cifrado, continuidad y respuesta a incidentes |
| **¿Se exige cifrado de datos en reposo?** | No explícitamente en Ley 19.628; la Ley 21.663 lo contempla dentro de los protocolos ANCI | Sí, como medida apropiada cuando los datos son sensibles (Considerando 83 GDPR) | Sí, Control A.8.24: uso de criptografía para proteger información sensible |
| **¿Se exige evaluación de riesgos previa?** | La Ley 21.663 exige auditorías para OIV, pero no de forma general | Sí, el GDPR exige Evaluación de Impacto de Protección de Datos (EIPD/DPIA) para tratamientos de alto riesgo (Art. 35) | Sí, es el núcleo del estándar: la organización debe identificar, evaluar y tratar todos los riesgos de seguridad de la información |
| **Aplicación al caso UTFSM** | El marco chileno no exigía cifrado de los datos de estudiantes, lo que facilitó su exfiltración. La exigencia de "debida diligencia" es vaga y dificulta la determinación de responsabilidad | Bajo el GDPR, la UTFSM habría estado obligada a cifrar los datos de estudiantes, realizar una EIPD antes del tratamiento y notificar a los afectados. El monto de la multa podría alcanzar millones de euros | La implementación de ISO 27001 habría requerido controles de acceso robustos, gestión de vulnerabilidades y pruebas de penetración periódicas que habrían dificultado significativamente el ataque de RansomHub |

---

## 3. Análisis por Industria: Sector Educativo vs. Otros Sectores

El caso UTFSM permite evaluar cómo el sector educativo es regulado en comparación con sectores con marcos más exigentes:

| Sector | Marco específico en Chile | Nivel de exigencia | ¿Mejor que educación? |
|---|---|---|---|
| **Bancario/Financiero** | CMF (Comisión para el Mercado Financiero) — Normas de ciberseguridad específicas, Circular N° 2884 | Alto: auditorías obligatorias, planes de continuidad, CISO designado | Sí, significativamente más robusto |
| **Salud** | Ley 19.628 + normas del MINSAL sobre datos sensibles | Medio-alto: datos de salud son sensibles por ley, restricción de uso más fuerte | Sí, mayor protección de los datos |
| **Educación superior** | Ley 19.628 genérica + Ley 21.663 (si aplica OIV) | Bajo: no existe un marco sectorial específico. Mismas reglas que cualquier empresa | No, es el sector más desprotegido normativamente |
| **Infraestructura crítica** | Ley 21.663 — OIV con deberes reforzados | Alto: si la UTFSM es calificada como OIV, aplican los deberes del Art. 8° | Sí, pero solo si se logra la calificación |

---

## 4. Brechas Regulatorias Evidenciadas por el Caso UTFSM

El análisis comparativo revela al menos tres brechas estructurales del marco chileno que el caso UTFSM pone en evidencia:

1. **Ausencia de obligación de notificación individual:** A diferencia del GDPR, la Ley 19.628 no obliga a notificar a los afectados cuando sus datos son comprometidos. Los más de 2.700 exalumnos deudores expuestos no tienen derecho legal garantizado a ser informados.

2. **Estándar de seguridad vago:** La Ley 19.628 solo exige "debida diligencia", sin definir medidas técnicas concretas. El GDPR y la ISO 27001 exigen evaluaciones de impacto, cifrado y auditorías periódicas. Esta vaguedad dificulta la imputación de responsabilidad civil a la UTFSM.

3. **Ausencia de marco sectorial para educación:** El sector financiero en Chile tiene normas de ciberseguridad específicas de la CMF. El sector educativo carece de equivalente, lo que lo convierte en el sector con menor protección normativa pese a manejar datos personales masivos de población joven.

---

*Fuentes: Ley 19.628 (BCN), Ley 21.663 (BCN), GDPR — Reglamento (UE) 2016/679, ISO/IEC 27001:2022, CMF Circular N° 2884, ANCI (2024).*