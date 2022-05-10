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
        '@layouts': 'src/views/layouts',
      },
      extensions: [
        'tsx',
      ],
    },
  },
  'gatsby-plugin-styled-components',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      useResolveUrlLoader: true,
    },
  }
  ],
};

export default config;
