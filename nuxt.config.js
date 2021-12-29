const gigs = require("./data/gigs.json");

module.exports = {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: "Luca Marchesini, Conteur",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Luca Marchesini - Conteur"
      },
      {
        "http-equiv": "Accept-CH",
        content: "DPR, Viewport-Width, Width"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  css: ["@/assets/belta-regular.css", "@assets/custom-awesome.css"],
  styleResources: {
    scss: "./assets/variables.scss"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
    }
  },
  modules: [
    '@nuxtjs/style-resources',
    "bootstrap-vue/nuxt",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-56607741-1"
      }
    ]
  ],
  bootstrapVue: {
    components: [
      'BRow', 'BCol', 'BButton', 'BTable', 'BBadge', 'BImg',
      'BNav', 'BNavbarToggle', 'BCollapse', 'BNavbarBrand',
      'BNavItem', 'BNavbarNav', 'BNavbar', 'BIcon', 'BIconEnvelope',
      'BIconPhone', 'BIconChatRightQuote'
    ],
  },
  generate: {
    routes: gigs.map(gig => `/gig/${gig.id}`)
  }
};
