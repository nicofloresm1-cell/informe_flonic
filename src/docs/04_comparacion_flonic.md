# 04 — Comparación de Marcos Regulatorios por Industria
## Caso: Filtración de Datos de la Universidad Técnica Federico Santa María (UTFSM) — 2024

---

## Introducción

Para evaluar la suficiencia del marco legal chileno aplicado al caso UTFSM, es necesario compararlo con otros marcos regulatorios relevantes.

---

## 1. Marcos Regulatorios Analizados

| Marco | Tipo | Jurisdicción | Aplicabilidad al caso |
|---|---|---|---|
| **Ley 19.628 + Ley 21.459 + Ley 21.663 (Chile)** | Nacional — Penal, Civil y Administrativa | Chile | Marco directamente aplicable |
| **GDPR — Reglamento General de Protección de Datos (UE)** | Supranacional — Administrativa | Unión Europea | Marco de referencia internacional |
| **ISO/IEC 27001 — Sistema de Gestión de Seguridad de la Información** | Estándar técnico internacional | Global | Estándar técnico preventivo |

---

## 2. Tabla Comparativa: 3 Marcos × 3 Ejes

### Eje 1: Alcance y Sanciones

| Criterio | Chile | GDPR | ISO 27001 |
|---|---|---|---|
| **¿Quién está obligado?** | Responsables de bases de datos; instituciones de servicios esenciales | Cualquier organización que trate datos de ciudadanos de la UE | Cualquier organización que voluntariamente adopte el estándar |
| **Sanción máxima** | Multa + presidio (Ley 21.459); infracciones graves Ley 21.663 | Hasta €20 millones o 4% de facturación anual global | Pérdida de certificación o daño reputacional |
| **Aplicación al caso UTFSM** | La UTFSM enfrenta responsabilidad civil; los atacantes, penal | Si tratara datos de ciudadanos europeos, multas serían significativamente más altas | La UTFSM no contaba con certificación ISO 27001 |

---

### Eje 2: Obligación de Notificación de Brechas

| Criterio | Chile | GDPR | ISO 27001 |
|---|---|---|---|
| **Plazo de notificación a la autoridad** | Máximo **3 horas** al CSIRT Nacional | Máximo **72 horas** a la autoridad supervisora | No define plazo legal |
| **Obligación de notificar a afectados** | No existe aún en Ley 19.628 | **Sí**, si hay alto riesgo | Recomienda comunicación |
| **Aplicación al caso UTFSM** | UTFSM posiblemente incumplió plazo de 3 horas | No notificó a +2.700 exalumnos deudores (sería sancionable) | Ausencia de protocolo ISO 27001 explica respuesta tardía |

---

### Eje 3: Medidas de Seguridad Exigidas

| Criterio | Chile | GDPR | ISO 27001 |
|---|---|---|---|
| **Estándar de seguridad** | "Debida diligencia" (vago) + protocolos ANCI para OIV | "Medidas técnicas y organizativas apropiadas" + privacy by design | 93 controles en 4 dominios |
| **¿Se exige cifrado en reposo?** | No explícitamente en Ley 19.628 | Sí, para datos sensibles | Sí, Control A.8.24 |
| **¿Se exige evaluación de riesgos?** | La Ley 21.663 exige auditorías para OIV | Sí, Evaluación de Impacto (DPIA) para alto riesgo | Sí, es el núcleo del estándar |
| **Aplicación al caso UTFSM** | Marco no exigía cifrado, facilitó exfiltración | Habría obligado cifrado + DPIA + notificación a afectados | Implementación habría dificultado significativamente el ataque |

---

## 3. Análisis por Industria

| Sector | Marco específico en Chile | Nivel de exigencia | ¿Mejor que educación? |
|---|---|---|---|
| **Bancario/Financiero** | CMF — Normas de ciberseguridad específicas | Alto: auditorías obligatorias, planes de continuidad, CISO designado | Sí, significativamente |
| **Salud** | Ley 19.628 + normas MINSAL sobre datos sensibles | Medio-alto: datos de salud son sensibles por ley | Sí, mayor protección |
| **Educación superior** | Ley 19.628 genérica + Ley 21.663 (si aplica OIV) | **Bajo**: no existe marco sectorial específico | **No**, es el menos protegido |
| **Infraestructura crítica** | Ley 21.663 — OIV con deberes reforzados | Alto: si se califica como OIV | Sí, pero condicionado |

---

## 4. Brechas Regulatorias Evidenciadas

1. **Ausencia de obligación de notificación individual:** A diferencia del GDPR, la Ley 19.628 no obliga a notificar a los afectados cuando sus datos son comprometidos.

2. **Estándar de seguridad vago:** La Ley 19.628 solo exige "debida diligencia", sin definir medidas técnicas concretas.

3. **Sector educativo desprotegido:** No existe un marco sectorial específico equivalente a las normas CMF o del MINSAL.

---

## Conclusión

El caso UTFSM revela que el marco legal chileno es menos exigente que el GDPR europeo e insuficiente comparado con estándares internacionales como ISO 27001. El sector educativo es el más desprotegido normativamente.
