# Guedes de Azevedo Síndico Profissional — Site Institucional

Site institucional responsivo, desenvolvido como Projeto Bootcamp Extensionista do módulo
Desenvolvimento Web Responsivo (UNISAGRADO), atendendo à demanda real da empresa Guedes de
Azevedo Síndico Profissional.

## O problema

_[Preencher após a reunião com a empresa: qual necessidade real esse site resolve — ex.: a
empresa não tem presença digital e perde contatos de clientes em potencial.]_

## O que ele faz

- Apresenta a empresa e seus serviços de síndico profissional
- Formulário de contato para solicitação de orçamento
- Totalmente responsivo (mobile, tablet, desktop)

## Tecnologias

| | |
|---|---|
| Linguagem | HTML5, CSS3, JavaScript (vanilla) |
| Framework | Nenhum — CSS e JS escritos manualmente (ver `.mentor/DECISIONS.md`, ADR-001) |
| Hospedagem | GitHub Pages |

## Como rodar localmente

Não precisa instalar nada. Duas opções:

1. Abrir o arquivo `index.html` direto no navegador; ou
2. No VSCode, instalar a extensão **Live Server** e clicar em "Go Live" (recarrega
   automaticamente a cada alteração).

## Testando a responsividade

Abra o DevTools do navegador (tecla `F12`) → ative o modo de dispositivo móvel → teste nestes
breakpoints:

- 375px — mobile
- 768px — tablet
- 1024px+ — desktop

## Estrutura de pastas

```
guedes-azevedo-sindico/
├── index.html
├── css/
│   ├── reset.css
│   ├── variaveis.css
│   ├── header.css
│   ├── hero.css
│   ├── sobre.css
│   ├── servicos.css
│   ├── contato.css
│   └── footer.css
├── js/
│   └── main.js
├── assets/
│   ├── img/
│   └── icons/
└── docs/       (evidências do projeto extensionista: prints, atas, autorizações)
```

## Fluxo de trabalho no Git

- `main` = versão estável
- Cada integrante trabalha em uma branch própria (`feature/nome-da-parte`)
- Merge via Pull Request

## Publicar (deploy)

GitHub → Settings → Pages → Source: branch `main` → pasta raiz (`/`). O site fica disponível em
`https://<usuario>.github.io/<nome-do-repositorio>/`.

## Integrantes do grupo

_[Nome completo — e-mail institucional]_ (repetir para os 8 integrantes)

## Documentação do projeto

| Arquivo | O quê |
|---|---|
| `.mentor/PROJECT_STATE.md` | onde o projeto está agora |
| `.mentor/ROADMAP.md` | marcos e o que falta |
| `.mentor/DECISIONS.md` | por que as coisas são do jeito que são (ex.: por que sem framework) |
| `.mentor/ARCHITECTURE.md` | as peças do site e como se conectam |
| `.mentor/TASKS.md` | tarefas em andamento e concluídas |
| `docs/` | evidências do contato com a instituição, exigidas pelo Guia de Orientações |
