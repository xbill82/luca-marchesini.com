module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Luca Marchesini, storyteller",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Luca Marchesini - Storyteller"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  css: ["@/assets/belta-regular.css", "@/assets/sitewise.scss"],
  /*
  ** Build configuration
  */
  build: {
    styleResources: {
      scss: "./assets/variables.scss"
    },
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
      // vueLoader.options.transformToRequire = {
      //   img: "src",
      //   image: "xlink:href",
      //   "b-img": "src",
      //   "b-img-lazy": ["src", "blank-src"],
      //   "b-card": "img-src",
      //   "b-card-img": "img-src",
      //   "b-carousel-slide": "img-src",
      //   "b-embed": "src"
      // };
    }
  },
  modules: ["bootstrap-vue/nuxt"]
};
