import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Spacevibes',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: 'pUfWMZXuoLj6eQN_NkjT0GwiAJ5GlBAR1FVcWFSr1nY',
      spaceId: '5yu23wj8vchb',
    },
  },
  {
    resolve: 'gatsby-plugin-alias-imports',
    options: {
      alias: {
        '@components': 'src/views/components',
      },
      extensions: [
        'tsx',
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-prettier-eslint',
    options: {
      prettier: {
        patterns: [
          // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
          '**/*.{css,scss,less}',
          '**/*.{json,json5}',
          '**/*.{graphql}',
          '**/*.{md,mdx}',
          '**/*.{html}',
          '**/*.{yaml,yml}',
        ],
      },
      eslint: {
        patterns: '**/*.{js,jsx,ts,tsx}',
        customOptions: {
          fix: true,
          cache: true,
        },
      },
    },
  },
  'gatsby-plugin-styled-components', 'gatsby-plugin-image'],
};

export default config;
