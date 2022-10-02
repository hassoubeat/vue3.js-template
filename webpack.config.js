const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインのJS
  entry: "./src/js/main.js",
  // 出力ファイル
  output: {
    filename: "js/bundle.js"
  },
   // ローダーの設定
   module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: 'babel-loader',
            // ローダーのオプション
            // 今回はbabel-loaderを利用しているため
            // babelのオプションを指定しているという認識で問題ない
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          // vue-style-loaderをMiniCssExtractPlugin.loaderに変更
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Vue: ['vue/dist/vue.esm.js', 'default']
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/js_output.css'
    })
  ]
}
