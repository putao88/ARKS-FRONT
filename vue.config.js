module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  lintOnSave: false,
  transpileDependencies: [
    "vuetify",
    "@wagmi/core",
    "@web3modal",
    "@web3modal",
    "ethers",
    "@wagmi/connectors",
    "@walletconnect",
  ],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
};
