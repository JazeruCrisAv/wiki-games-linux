import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Wiki Games Linux',
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Guías Básicas',
          items: [
            // El link debe coincidir con la ruta de tu archivo, sin el .mdx
            { label: 'Introducción', link: '/guias/introduccion/' },
          ],
        },
        {
          label: 'Catálogo de Juegos',
          items: [
            // Aquí agregaremos juegos individuales más adelante
          ],
        }
      ],
    }),
  ],
});
