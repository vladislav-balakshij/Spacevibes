import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Spacevibes',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    {
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
          '@sections': 'src/views/sections',
          '@elements': 'src/views/elements',
          '@layouts': 'src/views/layouts',
          '@icons': 'src/assets/icons',
          '@images': 'src/assets/images',
          '@state': 'src/states',
          '@styles': 'src/styles',
        },
        extensions: [
          'tsx',
        ],
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
};

export default config;