# Arquitetura — Site Guedes de Azevedo Síndico Profissional

> Se você não consegue explicar cada peça com as próprias palavras, você não vai conseguir manter
> o sistema. Este arquivo é o teste disso.
>
> Atualize quando entrar uma seção, um recurso de JS ou um fluxo novo.

**Atualizado em:** 2026-08-21

---

## Visão geral

Site institucional estático (sem backend, sem banco de dados) para a Guedes de Azevedo Síndico
Profissional. Apresenta a empresa, os serviços e um formulário de contato. Roda inteiramente no
navegador do visitante, publicado no GitHub Pages.

## Estilo

**Página única (single-page), seções por âncora (`#sobre`, `#servicos`, `#contato`)**

Por quê: escopo do módulo pede 3 a 5 seções, sem necessidade de múltiplas páginas nem roteamento.
Simples de navegar no celular com um menu hambúrguer.

---

## Componentes

| Componente | Responsabilidade | Não é responsabilidade dele |
|---|---|---|
| `index.html` | Estrutura e conteúdo das seções | Estilo e comportamento |
| `css/reset.css` | Zerar estilos padrão do navegador | Estilo visual da marca |
| `css/variaveis.css` | Cores, espaçamentos e tipografia centralizados | Layout de qualquer seção |
| `css/*.css` (um por seção) | Estilo e responsividade daquela seção específica | Estilo de outra seção |
| `js/main.js` | Comportamento do menu mobile (abrir/fechar) | Envio real do formulário |

## Estrutura de pastas

```
guedes-azevedo-sindico/
├── index.html
├── README.md
├── .gitignore
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
├── docs/              (evidências: prints, atas, autorizações)
└── .mentor/           (documentação de acompanhamento do projeto)
```

**A regra que sustenta isso:** cada arquivo CSS cuida de uma seção só. Isso evita que 8 pessoas
mexendo ao mesmo tempo gerem conflito de merge no mesmo arquivo.

---

## Modelo de dados

Não se aplica — site estático sem banco de dados. Se o formulário de contato evoluir para envio
real (v2), avaliar um serviço de terceiros (ex: Formspree) antes de considerar backend próprio.

---

## Fluxo de dados

Visitante abre o `index.html` → navegador carrega os arquivos CSS/JS da mesma pasta → o menu
mobile é controlado por `js/main.js` → o formulário de contato, na v1, não envia dado nenhum (é
só visual/estrutural; ver `ROADMAP.md`, seção "Fora do MVP").

## Autenticação e autorização

Não se aplica — não há login nem área restrita neste projeto.

---

## Integrações externas

| Serviço | Para quê | O que acontece se cair | Custo |
|---|---|---|---|
| GitHub Pages | Hospedar o site | Site fica fora do ar até o GitHub restabelecer | Gratuito para repositórios públicos (verificar plano se o repositório for privado) |

---

## Onde roda

| Ambiente | Onde | Banco | Como sobe |
|---|---|---|---|
| Local | navegador de qualquer integrante | não se aplica | abrir `index.html` direto, ou usar a extensão Live Server do VSCode |
| Produção | GitHub Pages | não se aplica | Settings → Pages → branch `main` → pasta raiz |

## O que ainda não está resolvido

- Conteúdo real da empresa (textos, serviços, imagens) — depende do primeiro contato/entrevista
- Nome definitivo do repositório remoto e conta que vai hospedá-lo
- Se o formulário de contato vai ganhar envio real (ver `ROADMAP.md`)
