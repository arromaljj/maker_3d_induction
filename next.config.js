const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',

})

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/intro_1', // The route you want to redirect from
        destination: '/',   // Redirect to the index page
        permanent: true,    // Set this to true for a 301 permanent redirect, or false for 302 temporary redirect
      },
    ]
  },
})