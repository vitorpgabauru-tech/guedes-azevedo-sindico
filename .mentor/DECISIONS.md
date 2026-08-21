# Decisões técnicas — Site Guedes de Azevedo Sindico Profissional

> Uma entrada por decisão cara de reverter. **Não apague as antigas**: quando uma decisão muda, a
> antiga vira `substituída` e ganha um link para a nova. O registro do que foi abandonado e por quê
> é mais útil que o registro do que ficou.
>
> Uma decisão errada e registrada é recuperável. Uma decisão certa e não registrada vira, em três
> meses, uma discussão do zero — inclusive com você mesmo.
>
> Registre quando: linguagem, banco, framework, arquitetura, modelo de dados, ter ou não login,
> hospedagem, ou qualquer coisa que custaria uma semana para desfazer.
>
> **Não** registre: nome de variável, biblioteca de gráfico, formatação. Isso é ruído.

**Atualizado em:** 2026-08-21

---

## Índice

| # | Decisão | Status | Data |
|---|---|---|---|
| 001 | Sem framework CSS/JS - HTML+CSS+JS puro | aceita | 2026-08-21 |

Status possíveis: `aceita`, `substituída por ADR-XXX`, `revogada`.

---

## ADR-001 — Sem framework CSS/JS - HTML+CSS+JS puro

**Data:** 2026-08-21
**Status:** aceita

**Contexto**

O módulo Bootcamp Desenvolvimento Web Responsivo avalia especificamente a capacidade de aplicar
responsividade com CSS puro (media queries, Flexbox, Grid). O documento de orientações do módulo
cita nominalmente: "Responsividade sem depender de frameworks (Bootstrap pode ser estudado depois,
mas o foco é entender o CSS)". Um integrante sugeriu React; outro cogitou Bootstrap.

**Opções**

- HTML + CSS puro + JS vanilla — sem build, deploy direto no GitHub Pages, alinhado ao que o
  guia do módulo pede avaliar. Mais lento para escrever no início.
- Bootstrap — acelera o layout, mas quem escreve as media queries e o grid é a biblioteca, não o
  grupo. Contraria a orientação explícita do módulo.
- React — exige Node/npm, JSX, build step antes de publicar, e um segundo deploy (GitHub Pages
  sozinho não basta). Curva de aprendizado alta para um grupo de 8 com níveis heterogêneos e
  prazo de ~3 semanas até a Entrega 1.

**Decisão**

HTML5 + CSS3 (mobile-first, `min-width`) + JavaScript vanilla quando houver interatividade.

**Justificativa**

É o que o módulo avalia diretamente. Reduz risco de alguém do grupo de 8 ficar sem conseguir
contribuir por falta de conhecimento prévio na tecnologia. Deploy trivial via GitHub Pages, sem
etapa de build.

**Consequências**

Ganha: alinhamento total com o critério de avaliação, colaboração mais simples entre 8 pessoas
(menos conflito de merge, menos ferramenta para configurar), deploy imediato.
Perde: mais linhas de CSS escritas à mão do que seria com Bootstrap; sem componentização como em
React.

**Revisar se**

O professor confirmar por escrito que framework é aceito e será avaliado da mesma forma — o que,
pelas orientações já lidas, não é o caso.

---

<!--
Modelo para copiar em uma decisão nova:

## ADR-00X — [título curto: o quê, não por quê]

**Data:** AAAA-MM-DD
**Status:** aceita

**Contexto**

**Opções**
-
-

**Decisão**

**Justificativa**

**Consequências**
Ganha:
Perde:

**Revisar se**
-->
