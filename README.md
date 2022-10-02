# vue3.js-template
**EJS, Sass, WebPackをGulpで実行するvue.jsアプリケーション制作テンプレート(Vue3バージョン)**  

## 使い方
`gulp build`  
EJS、Sass、WebPackなどの全ビルド処理を実行する。  
ビルド後のコードは`dist`ディレクトリ配下に出力される。  

`gulp watch`  
実行中、各ファイルの変更を検知して応じた処理が実行される。  
(.sassファイルの変更 => sassのコンパイル)

`docker-compose up -d`  
ApacheのDockerコンテナを動作させる。  
起動後、`localhost:8100/html`にアクセスできることを確認。  

`docker-compose down`  
ApacheのDockerコンテナを停止させる。  