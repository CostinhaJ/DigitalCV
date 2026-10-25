// @ts-check
import { defineConfig } from 'astro/config';

// No GitHub Actions, a variável GITHUB_REPOSITORY tem o formato "utilizador/repositorio".
// Assim o `site` e o `base` ficam configurados automaticamente, sem editar nada.
//  - repositório "utilizador.github.io"  -> https://utilizador.github.io/
//  - qualquer outro repositório "xpto"   -> https://utilizador.github.io/xpto/
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

// Domínio próprio? Defina SITE_URL no workflow (ou aqui) e o base passa a "/".
const customSite = process.env.SITE_URL;

export default defineConfig({
  site: customSite ?? (owner ? `https://${owner}.github.io` : undefined),
  base: customSite || !repo || isUserSite ? '/' : `/${repo}`,
  trailingSlash: 'ignore',
});
