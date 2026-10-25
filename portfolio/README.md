# Portfólio (Astro + GitHub Pages)

Mini-CV e portfólio estático, rápido e sem JavaScript no cliente. O site é
construído com [Astro](https://astro.build) e publicado automaticamente no
GitHub Pages por uma GitHub Action a cada `git push` para a branch `main`.

## Publicar pela primeira vez

1. Crie o repositório no GitHub e envie este projeto para a branch `main`.
2. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Faça push. O separador **Actions** mostra o build; no fim, o endereço aparece em Settings → Pages.

O `site` e o `base` do Astro são calculados sozinhos a partir do nome do
repositório (ver `astro.config.mjs`), por isso não precisa de os editar:

| Repositório            | Endereço                                |
| ---------------------- | --------------------------------------- |
| `utilizador.github.io` | `https://utilizador.github.io/`         |
| `portfolio` (outro)    | `https://utilizador.github.io/portfolio/` |

Domínio próprio: crie `public/CNAME` com o domínio e defina `SITE_URL` no
workflow (há um exemplo comentado em `.github/workflows/deploy.yml`).

## Adicionar um projeto novo (2 passos)

1. Copie a imagem do projeto para `src/assets/projects/` (qualquer tamanho:
   o Astro gera versões otimizadas em WebP; ideal 1600×1000 px, proporção 16:10).
2. Crie um ficheiro em `src/content/projects/`, por exemplo `meu-projeto.md`:

```md
---
title: Nome do projeto
description: Uma ou duas frases sobre o projeto.
image: ../../assets/projects/meu-projeto.png
imageAlt: Descrição da imagem (acessibilidade)   # opcional
link: https://youtu.be/xxxxxxxxxxx                # vídeo privado ou website
linkType: video                                   # video | website
tags: [React, Node]
year: 2025
featured: false      # true = aparece primeiro
draft: false         # true = esconde o projeto sem o apagar
---
```

Faça commit + push e o site atualiza sozinho. Se faltar um campo ou o link
for inválido, o build falha com uma mensagem a indicar o ficheiro e o campo.

- `linkType: video` mostra o botão **Ver vídeo**; `linkType: website` mostra **Visitar website**.
- Quando um website deixar de estar online, mude para `linkType: video` e
  troque o `link` pelo vídeo.
- A ordem é: `featured` primeiro, depois do ano mais recente para o mais antigo.

## Editar o CV

Tudo vem de `src/data/cv.ts` (nome, contactos, experiência, formação, competências).

## Desenvolver localmente

Requer Node.js 22.23.4 ou superior.

```bash
npm install
npm run dev        # http://localhost:4321 com recarregamento automático
npm run build      # gera a pasta dist/
npm run preview    # pré-visualiza o build
```

Nota: se estiver a testar localmente num repositório não-`github.io`, o
`base` fica `/` (a variável `GITHUB_REPOSITORY` só existe no GitHub Actions).

## Estrutura

```
.github/workflows/deploy.yml   build + deploy automáticos
src/assets/projects/           imagens dos projetos
src/content/projects/          um .md por projeto
src/content.config.ts          esquema (validação) dos projetos
src/data/cv.ts                 dados do CV
src/components/                Header, Cv, ProjectCard
src/pages/index.astro          página única
```
