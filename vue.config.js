const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('pug')
      .oneOf('vue-loader')
      .use('pug-bem')
      .loader('pug-bem-plain-loader')
      .options({
          b: true
      })
      .end()

    config.module
      .rule('pug')
      .oneOf('raw-pug-files')


      .use('pug-bem')
      .loader('pug-bem-plain-loader')
      .options({
          b: true
      })
      .end()
  }
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.vue$/,
  //         loader: 'vue-loader',
  //         options: {
  //           loaders: {
  //             'pug': {
  //               loader: 'pug-bem-plain-loader',
  //               options: {
  //                 e: '__', // element separator, default: __
  //                 m: '--'  // modifier separator, default: --
  //               }
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
})
