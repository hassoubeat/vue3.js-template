var gulp = require('gulp');
var fs = require('fs');
var ejs = require("gulp-ejs");
var sass = require('gulp-sass')(require('sass'));
var packageImporter = require('node-sass-package-importer');
var rename = require('gulp-rename')
var plumber = require('gulp-plumber')
var minimist = require("minimist")
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

// EJSのコンパイル
gulp.task('ejs', () => {

  // 環境情報の取得
  // gulp ejs --env development | production　で入力
  var input = minimist(process.argv.slice(2));
  var env = input.env;

  // 指定がなければdevelopment
  if (env != "production") {
    env = "development"
  }

  var var_file_path = "src/ejs/_var/" + env + "/var.json";
  var input_ejs_path = 'src/ejs/_page/*.ejs';
  var output_html_path = 'dist/html/';

  console.log("build [" + env + "]");

  var json = JSON.parse(fs.readFileSync(var_file_path));
  return gulp.src([input_ejs_path])
    .pipe(plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
  }))
  // 出力ファイルに変数群を渡す
  .pipe(ejs(json))
  // 出力ファイルの拡張子変更
  .pipe(rename({extname: '.html'}))
  // 指定フォルダにビルド
  .pipe(gulp.dest(output_html_path));
});

// ejsの自動コンパイル
gulp.task('ejs-watch', function(){
  var targets = [
    'src/ejs/**/*.ejs',
    'src/ejs/**/*.json'
  ];
  gulp.watch(targets, gulp.series('ejs'));
});

// Saasのコンパイル
gulp.task('sass', () => {
  return gulp.src('src/sass/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      importer: packageImporter({
        extensions: ['.scss', '.css']
      })
    }))
    .pipe(gulp.dest('dist/css/'));
});

// JSのバンドル
gulp.task("webpack", () => {
  const webpackConfig = require("./webpack.config");
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("dist"));
});

// 全ビルド処理の実行
gulp.task("build", gulp.series("webpack", "sass", "ejs"));

// ファイルの監視を実行
gulp.task('watch', function(){
  gulp.watch('src/ejs/**/*', gulp.series('ejs'));
  gulp.watch('src/sass/**/*', gulp.series('sass'));
  gulp.watch('src/js/**/*', gulp.series('webpack'));
});
