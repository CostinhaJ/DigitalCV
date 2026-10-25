import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada ficheiro .md em src/content/projects/ é um projeto do portfólio.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Imagem escolhida por si, guardada em src/assets/projects/
      image: image(),
      imageAlt: z.string().optional(),
      // Link do vídeo privado ou do website (se ainda estiver online)
      link: z.url(),
      // "video" -> botão "Ver vídeo" | "website" -> botão "Visitar website"
      linkType: z.enum(['video', 'website']).default('video'),
      tags: z.array(z.string()).default([]),
      // Ano do projeto (usado para ordenar, mais recente primeiro)
      year: z.number().int(),
      // Opcional: projetos em destaque aparecem primeiro
      featured: z.boolean().default(false),
      // Opcional: true para esconder o projeto sem o apagar
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
