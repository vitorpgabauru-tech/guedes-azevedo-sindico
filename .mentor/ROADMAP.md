# Roadmap — Site Guedes de Azevedo Sindico Profissional

> Marcos, não prazos. Cada marco termina em algo que **roda** e que dá para mostrar para alguém.
>
> Nunca estime em horas ou dias: estime em etapas. Prazo errado vira sensação de fracasso, e
> ninguém acerta prazo de trabalho que nunca fez.
>
> Atualize quando um marco fechar ou o escopo mudar.

**Atualizado em:** 2026-08-21

---

## MVP

O menor sistema que já resolve o problema para uma pessoa real. Máximo 5 essenciais.

| # | Funcionalidade | Prioridade | Status |
|---|---|---|---|
| 1 | Pagina unica com secoes: header, hero, sobre, servicos, contato, footer | essencial | pendente |
| 2 | Responsivo em 3 breakpoints (mobile/tablet/desktop) | essencial | pendente |
| 3 | Deploy publicado no GitHub Pages | essencial | pendente |

### Fora do MVP

Não é "nunca" — é "versão 2". Escrever aqui é o que permite não construir agora.

| Funcionalidade | Quando | Por que não agora |
|---|---|---|
| Formulario de contato funcional (envio real de e-mail) | v2 | exige backend ou servico de terceiros - fora do escopo do modulo |

---

## Marcos

Cada marco tem um critério de conclusão verificável. Sem isso, marco não fecha — fica "quase".

### Marco 1 — Preparação

**Fecha quando:** o repositório existe, o ambiente roda, o "olá mundo" aparece na tela e o primeiro
commit está feito.

- [ ] linguagem instalada e versão verificada com o comando
- [ ] Git instalado e configurado (nome e e-mail)
- [ ] pasta criada, `git init` rodado
- [ ] `.gitignore` criado **antes** do primeiro arquivo
- [ ] ambiente virtual criado e ativado
- [ ] "olá mundo" rodando
- [ ] primeiro commit
- [ ] repositório remoto criado e `push` feito

### Marco 2 — Base

**Fecha quando:** dá para criar uma conta, fazer login, sair, e o dado aparece no banco.

- [ ] banco criado e conectando
- [ ] primeira migration rodada
- [ ] modelos criados
- [ ] cadastro de usuário
- [ ] login e logout funcionando de ponta a ponta
- [ ] senha guardada com hash de biblioteca consagrada
- [ ] `.env` funcionando, e fora do repositório
- [ ] deploy da versão feia, **já no ar** (o deploy tardio é o que mata projeto)

### Marco 3 — Funcionalidades essenciais

**Fecha quando:** as funcionalidades do MVP funcionam de ponta a ponta, na mão de um usuário real.

- [ ] Pagina unica com secoes: header, hero, sobre, servicos, contato, footer
- [ ] Responsivo em 3 breakpoints (mobile/tablet/desktop)
- [ ] Deploy publicado no GitHub Pages
- [ ] permissões: cada usuário só vê o que é dele
- [ ] estados de tela tratados: carregando, vazio, erro, sem permissão

### Marco 4 — Qualidade

**Fecha quando:** os testes dos caminhos críticos passam e o checklist de segurança está limpo.

- [ ] testes das regras de negócio passando
- [ ] teste de permissão (usuário A não vê dado de B)
- [ ] erros tratados, com mensagem que o usuário entende
- [ ] checklist de segurança de `CHECKLISTS.md` percorrido
- [ ] `README.md` escrito e testado por outra pessoa

### Marco 5 — Publicação

**Fecha quando:** está no ar, com HTTPS, backup verificado, e existe um plano de reversão escrito.

- [ ] checklist de publicação de `CHECKLISTS.md` percorrido
- [ ] HTTPS
- [ ] backup automático ligado **e restaurado uma vez, de verdade**
- [ ] logs acessíveis
- [ ] plano de reversão escrito
- [ ] uma pessoa real usou sem ajuda

---

## Versões futuras

| Versão | Conteúdo | Condição para começar |
|---|---|---|
| v2 | Formulario funcional e eventual painel, se a empresa quiser manter o site depois | o MVP estar no ar e ter sido usado por alguém |
