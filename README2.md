# <font color="Seablue">cat_app</font>

***TypeScript／Next.jsで猫画像アプリを作る学習***

***参考サイト***

https://www.youtube.com/watch?v=MZclBqhCB6A

https://qiita.com/kenRp01/items/e4a5b08d7968aba855e1

https://www.commte.co.jp/learn-nextjs/next-head

https://commte.net/nextjs-google-font


- TypeScriptをメイン言語、フレームワークをNext.jsとして、アプリケーションを作っていきます。
- 任意のディレクトリに移動して、
- Next.jsの導入コマンドを叩いていきます。
- 今回はTypeScriptも一緒にインストールするオプションをつけてコマンドを実行します。
- アプリ名は参考動画と同じにします。`cat_app`
- 今回はTypeScript以外のインストールで質問された項目は全てNoにしました。
- TailwindCSSや、srcディレクトリおよびApp routeも採用していません。
- 2022年9月の動画なので、1年以上経過していて若干古いです。
- が、まずはTypeScriptをメインに開発していく過程を学ぶのが主目的であるため、
- これで進めようと思います。
- また、今回は`npx`コマンドでプロジェクトを作成しました。
- ローカルのサーバーを確認するには、コマンド`npm rnn dev`で起動します。




<br>

***作業の記録***

```terminal
$ cd ~/workspace/create
$ npx create-next-app@latest --typescript
$ npm run dev
$ git remote add origin git@github.com:******/cat_app.git
$ git branch -M main
$ git push -u origin main
$ git checkout -b development
$ git add .
$ git commit -m "【Add】ファイルシステムルーティングを確認"
$ git push
$ git push --set-upstream origin development
$ git log
$ プルリクエスト
$ リモートでマージ
$ git checkout main
$ git pull origin main
$ git checkout development
$ Vercelへデプロイ
$ デプロイ先本番環境のサーバーからWebページを確認
```







<br>

## <font color="Seablue">開発環境</font>


- `Next.js 14.0.4`





<br>

## <font color="Seablue">よく使うタグ</font>

`## <font color="seablue">シーブルー</font>`

`#### <font color="salmon">サーモンピンク</font>`

`<img src="" alt="代替テキスト" width=50% height=50%>`

`<a href="" target="_blank">テキスト</a>`

`***<font color="orange">動画00分00秒付近から</font>***`


