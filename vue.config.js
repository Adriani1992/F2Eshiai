module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/F2Eshiai/'
    : '/'

};

