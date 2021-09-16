"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[90],{607:(e,i,t)=>{t.r(i),t.d(i,{default:()=>a});const r=(0,t(6252).uE)('<h1 id="プラグインの作成" tabindex="-1"><a class="header-anchor" href="#プラグインの作成" aria-hidden="true">#</a> プラグインの作成</h1><p>Misskey Webクライアントのプラグイン機能を使うと、クライアントを拡張し、様々な機能を追加できます。 ここではプラグインの作成にあたってのメタデータ定義や、AiScript APIリファレンスを掲載します。</p><h2 id="メタデータ" tabindex="-1"><a class="header-anchor" href="#メタデータ" aria-hidden="true">#</a> メタデータ</h2><p>プラグインは、AiScriptのメタデータ埋め込み機能を使って、デフォルトとしてプラグインのメタデータを定義する必要があります。 メタデータは次のプロパティを含むオブジェクトです。</p><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>プラグイン名</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><p>プラグイン作者</p><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>プラグインバージョン。数値を指定してください。</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><p>プラグインの説明</p><h3 id="permissions" tabindex="-1"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> permissions</h3><p>プラグインが要求する権限。MisskeyAPIにリクエストする際に用いられます。</p><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>プラグインの設定情報を表すオブジェクト。 キーに設定名、値に以下のプロパティを含めます。</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><p>設定値の種類を表す文字列。以下から選択します。 string number boolean</p><h4 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h4><p>ユーザーに表示する設定名</p><h4 id="description-1" tabindex="-1"><a class="header-anchor" href="#description-1" aria-hidden="true">#</a> description</h4><p>設定の説明</p><h4 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h4><p>設定のデフォルト値</p><h2 id="apiリファレンス" tabindex="-1"><a class="header-anchor" href="#apiリファレンス" aria-hidden="true">#</a> APIリファレンス</h2><p>AiScript標準で組み込まれているAPIは掲載しません。</p><h3 id="mk-dialog-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-dialog-title-text-type" aria-hidden="true">#</a> Mk:dialog(title text type)</h3><p>ダイアログを表示します。typeには以下の値が設定できます。 info success warn error question 省略すると info になります。</p><h3 id="mk-confirm-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-confirm-title-text-type" aria-hidden="true">#</a> Mk:confirm(title text type)</h3><p>確認ダイアログを表示します。typeには以下の値が設定できます。 info success warn error question 省略すると question になります。 ユーザーが&quot;OK&quot;を選択した場合は true を、&quot;キャンセル&quot;を選択した場合は false が返ります。</p><h3 id="mk-api-endpoint-params" tabindex="-1"><a class="header-anchor" href="#mk-api-endpoint-params" aria-hidden="true">#</a> Mk:api(endpoint params)</h3><p>Misskey APIにリクエストします。第一引数にエンドポイント名、第二引数にパラメータオブジェクトを渡します。</p><h3 id="mk-save-key-value" tabindex="-1"><a class="header-anchor" href="#mk-save-key-value" aria-hidden="true">#</a> Mk:save(key value)</h3><p>任意の値に任意の名前を付けて永続化します。永続化した値は、AiScriptコンテキストが終了しても残り、Mk:loadで読み取ることができます。</p><h3 id="mk-load-key" tabindex="-1"><a class="header-anchor" href="#mk-load-key" aria-hidden="true">#</a> Mk:load(key)</h3><p>Mk:saveで永続化した指定の名前の値を読み取ります。</p><h3 id="plugin-register-post-form-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-post-form-action-title-fn" aria-hidden="true">#</a> Plugin:register_post_form_action(title fn)</h3><p>投稿フォームにアクションを追加します。第一引数にアクション名、第二引数にアクションが選択された際のコールバック関数を渡します。 コールバック関数には、第一引数に投稿フォームオブジェクトが渡されます。</p><h3 id="plugin-register-note-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-action-title-fn" aria-hidden="true">#</a> Plugin:register_note_action(title fn)</h3><p>ノートメニューに項目を追加します。第一引数に項目名、第二引数に項目が選択された際のコールバック関数を渡します。 コールバック関数には、第一引数に対象のノートオブジェクトが渡されます。</p><h3 id="plugin-register-user-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-user-action-title-fn" aria-hidden="true">#</a> Plugin:register_user_action(title fn)</h3><p>ユーザーメニューに項目を追加します。第一引数に項目名、第二引数に項目が選択された際のコールバック関数を渡します。 コールバック関数には、第一引数に対象のユーザーオブジェクトが渡されます。</p><h3 id="plugin-register-note-view-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-view-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_view_interruptor(fn)</h3><p>UIに表示されるノート情報を書き換えます。 コールバック関数には、第一引数に対象のノートオブジェクトが渡されます。 コールバック関数の返り値でノートが書き換えられます。</p><h3 id="plugin-register-note-post-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-post-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_post_interruptor(fn)</h3><p>ノート投稿時にノート情報を書き換えます。 コールバック関数には、第一引数に対象のノートオブジェクトが渡されます。 コールバック関数の返り値でノートが書き換えられます。</p><h3 id="plugin-open-url-url" tabindex="-1"><a class="header-anchor" href="#plugin-open-url-url" aria-hidden="true">#</a> Plugin:open_url(url)</h3><p>第一引数に渡されたURLをブラウザの新しいタブで開きます。</p><h3 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config" aria-hidden="true">#</a> Plugin:config</h3><p>プラグインの設定が格納されるオブジェクト。プラグイン定義のconfigで設定したキーで値が入ります。</p>',50),a={render:function(e,i){return r}}},3931:(e,i,t)=>{t.r(i),t.d(i,{data:()=>r});const r={key:"v-25d16a67",path:"/docs/advanced/create-plugin.html",title:"プラグインの作成",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"メタデータ",slug:"メタデータ",children:[{level:3,title:"name",slug:"name",children:[]},{level:3,title:"author",slug:"author",children:[]},{level:3,title:"version",slug:"version",children:[]},{level:3,title:"description",slug:"description",children:[]},{level:3,title:"permissions",slug:"permissions",children:[]},{level:3,title:"config",slug:"config",children:[]}]},{level:2,title:"APIリファレンス",slug:"apiリファレンス",children:[{level:3,title:"Mk:dialog(title text type)",slug:"mk-dialog-title-text-type",children:[]},{level:3,title:"Mk:confirm(title text type)",slug:"mk-confirm-title-text-type",children:[]},{level:3,title:"Mk:api(endpoint params)",slug:"mk-api-endpoint-params",children:[]},{level:3,title:"Mk:save(key value)",slug:"mk-save-key-value",children:[]},{level:3,title:"Mk:load(key)",slug:"mk-load-key",children:[]},{level:3,title:"Plugin:register_post_form_action(title fn)",slug:"plugin-register-post-form-action-title-fn",children:[]},{level:3,title:"Plugin:register_note_action(title fn)",slug:"plugin-register-note-action-title-fn",children:[]},{level:3,title:"Plugin:register_user_action(title fn)",slug:"plugin-register-user-action-title-fn",children:[]},{level:3,title:"Plugin:register_note_view_interruptor(fn)",slug:"plugin-register-note-view-interruptor-fn",children:[]},{level:3,title:"Plugin:register_note_post_interruptor(fn)",slug:"plugin-register-note-post-interruptor-fn",children:[]},{level:3,title:"Plugin:open_url(url)",slug:"plugin-open-url-url",children:[]},{level:3,title:"Plugin:config",slug:"plugin-config",children:[]}]}],filePathRelative:"docs/advanced/create-plugin.md",git:{updatedTime:1631291596e3,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:1}]}}}}]);