const path = require('path');
const glob = require("glob");

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { htmlWebpackPluginTemplateCustomizer } = require("template-ejs-loader");

const MODE = "development";
const srcPath = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // メインのJS
  entry: "./src/js/main.js",
  // 出力ファイル
  output: {
    filename: "js/bundle.js",
    path: distPath
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
      // EJSのビルド
      {
        test: /\.ejs$/i,
        include: srcPath,
        use: ['html-loader','template-ejs-loader']
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          // vue-style-loaderをMiniCssExtractPlugin.loaderに変更
          MiniCssExtractPlugin.loader,
          // "style-loader",
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue' ],
    alias: {
      // 以下のパス指定時に~で絶対パスでの指定が可能
      // import { ROUTING_PATH } from "~/const";
      '~': path.resolve(__dirname, 'src/js'),
    },
  },
  plugins: [
    ...getEJSEntrys(srcPath),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/js_output.css'
    }),
  ]
}



// EJSのエントリーポイント一覧を取得
function getEJSEntrys(srcPath) {
  return glob
    .sync(`**/*.ejs`, {
      // _から始まるEJSファイルはエントリーファイルと扱わない
      ignore: "**/_*.ejs",
      cwd: srcPath,
    })
    .map((file) => {
      return new HtmlWebpackPlugin({
        filename: `${path.dirname(file)}/${path.basename(file, ".ejs")}.html`,
        //ejsファイルの読み込み
        template: htmlWebpackPluginTemplateCustomizer({
          templatePath: `${srcPath}/${file}`,
          htmlLoaderOption: {
            //ファイル自動読み込みと圧縮を無効化
            sources: false,
            minimize: false
          },
          templateEjsLoaderOption:{
            root:'',
            data: require(`${srcPath}/ejs/_var/${MODE}/var.js`)
          }
        }),
        //JS・CSS自動出力と圧縮を無効化
        inject: false,
        minify: false,
      });
    });
}