import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Spacevibes`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "pUfWMZXuoLj6eQN_NkjT0GwiAJ5GlBAR1FVcWFSr1nY",
      "spaceId": "5yu23wj8vchb"
    }
  }, "gatsby-plugin-styled-components","gatsby-plugin-image"]
};

export default config;
