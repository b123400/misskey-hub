"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[656],{2199:(e,s,n)=>{n.r(s),n.d(s,{default:()=>R});var a=n(6252);const l=(0,a._)("h1",{id:"misskey構築の手引き",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#misskey構築の手引き","aria-hidden":"true"},"#"),(0,a.Uk)(" Misskey構築の手引き")],-1),t=(0,a._)("p",null,"Misskeyサーバーの構築にご関心をお寄せいただきありがとうございます！ このガイドではMisskeyのインストール・セットアップ方法について解説します。",-1),i=(0,a.Uk)("英語版もあります - English version also available"),r=(0,a.Uk)("简体中文版同样可用 - Simplified Chinese version also available"),p=(0,a.uE)('<hr><h2 id="_1-misskeyユーザーの作成" tabindex="-1"><a class="header-anchor" href="#_1-misskeyユーザーの作成" aria-hidden="true">#</a> <em>1.</em> Misskeyユーザーの作成</h2><p>Misskeyはrootユーザーで実行しない方がよいため、代わりにユーザーを作成します。 Debianの例:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser --disabled-password --disabled-login misskey\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-依存関係をインストールする" tabindex="-1"><a class="header-anchor" href="#_2-依存関係をインストールする" aria-hidden="true">#</a> <em>2.</em> 依存関係をインストールする</h2><p>これらのソフトウェアをインストール・設定してください:</p><h4 id="依存関係" tabindex="-1"><a class="header-anchor" href="#依存関係" aria-hidden="true">#</a> 依存関係 📦</h4>',7),o={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("Node.js"),u=(0,a.Uk)(" (12.x, 14.x)"),d={href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("PostgreSQL"),m=(0,a.Uk)(" (10以上)"),h={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("Redis"),b=(0,a._)("h5",{id:"オプション",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#オプション","aria-hidden":"true"},"#"),(0,a.Uk)(" オプション")],-1),_={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("Yarn"),v=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("セキュリティの観点から推奨されます。 yarn をインストールしない方針の場合は、文章中の "),(0,a._)("code",null,"yarn"),(0,a.Uk)(" を適宜 "),(0,a._)("code",null,"npx yarn"),(0,a.Uk)(" と読み替えてください。")])],-1),f={href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("Elasticsearch"),U=(0,a._)("ul",null,[(0,a._)("li",null,"検索機能を有効にするためにはインストールが必要です。")],-1),M={href:"https://www.ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("FFmpeg"),w=(0,a._)("h2",{id:"_3-misskeyのインストール",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_3-misskeyのインストール","aria-hidden":"true"},"#"),(0,a.Uk)(),(0,a._)("em",null,"3."),(0,a.Uk)(" Misskeyのインストール")],-1),N=(0,a._)("li",null,[(0,a._)("p",null,"misskeyユーザーを使用"),(0,a._)("p",null,[(0,a._)("code",null,"su - misskey")])],-1),S=(0,a._)("li",null,[(0,a._)("p",null,"masterブランチからMisskeyレポジトリをクローン"),(0,a._)("p",null,[(0,a._)("code",null,"git clone -b master git://github.com/misskey-dev/misskey.git")])],-1),W=(0,a._)("li",null,[(0,a._)("p",null,"misskeyディレクトリに移動"),(0,a._)("p",null,[(0,a._)("code",null,"cd misskey")])],-1),D={href:"https://github.com/misskey-dev/misskey/releases/latest",target:"_blank",rel:"noopener noreferrer"},O=(0,a.Uk)("最新のリリース"),V=(0,a.Uk)("を確認"),j=(0,a._)("p",null,[(0,a._)("code",null,"git checkout master")],-1),C=(0,a._)("li",null,[(0,a._)("p",null,"Misskeyの依存パッケージをインストール"),(0,a._)("p",null,[(0,a._)("code",null,"yarn install")])],-1),L=(0,a.uE)('<h2 id="_4-設定ファイルを作成する" tabindex="-1"><a class="header-anchor" href="#_4-設定ファイルを作成する" aria-hidden="true">#</a> <em>4.</em> 設定ファイルを作成する</h2><ol><li><p><code>.config/example.yml</code>をコピーし名前を<code>default.yml</code>にする。</p><p><code>cp .config/example.yml .config/default.yml</code></p></li><li><p><code>default.yml</code> を編集する。</p></li></ol><h2 id="_5-misskeyのビルド" tabindex="-1"><a class="header-anchor" href="#_5-misskeyのビルド" aria-hidden="true">#</a> <em>5.</em> Misskeyのビルド</h2><p>次のコマンドでMisskeyをビルドしてください:</p><p><code>NODE_ENV=production yarn build</code></p><p>Debianをお使いであれば、<code>build-essential</code>パッケージをインストールする必要があります。</p><p>何らかのモジュールでエラーが発生する場合はnode-gypを使ってください:</p><ol><li><code>npx node-gyp configure</code></li><li><code>npx node-gyp build</code></li><li><code>NODE_ENV=production yarn build</code></li></ol><h2 id="_6-データベースを初期化" tabindex="-1"><a class="header-anchor" href="#_6-データベースを初期化" aria-hidden="true">#</a> <em>6.</em> データベースを初期化</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> run init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-以上です" tabindex="-1"><a class="header-anchor" href="#_7-以上です" aria-hidden="true">#</a> <em>7.</em> 以上です！</h2><p>お疲れ様でした。これでMisskeyを動かす準備は整いました。</p><h3 id="通常起動" tabindex="-1"><a class="header-anchor" href="#通常起動" aria-hidden="true">#</a> 通常起動</h3><p><code>NODE_ENV=production yarn start</code>するだけです。GLHF!</p><h3 id="systemdを用いた起動" tabindex="-1"><a class="header-anchor" href="#systemdを用いた起動" aria-hidden="true">#</a> systemdを用いた起動</h3><ol><li><p>systemdサービスのファイルを作成</p><p><code>/etc/systemd/system/misskey.service</code></p></li><li><p>エディタで開き、以下のコードを貼り付けて保存:</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">Misskey daemon</span>\n\n<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>\n<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>\n<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/npm start</span>\n<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/home/misskey/misskey</span>\n<span class="token key attr-name">Environment</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">NODE_ENV=production</span>&quot;</span>\n<span class="token key attr-name">TimeoutSec</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>\n<span class="token key attr-name">StandardOutput</span><span class="token punctuation">=</span><span class="token value attr-value">syslog</span>\n<span class="token key attr-name">StandardError</span><span class="token punctuation">=</span><span class="token value attr-value">syslog</span>\n<span class="token key attr-name">SyslogIdentifier</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>\n<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">always</span>\n\n<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>CentOSで1024以下のポートを使用してMisskeyを使用する場合は<code>ExecStart=/usr/bin/sudo /usr/bin/npm start</code>に変更する必要があります。</p></li><li><p>systemdを再読み込みしmisskeyサービスを有効化</p><p><code>systemctl daemon-reload; systemctl enable misskey</code></p></li><li><p>misskeyサービスの起動</p><p><code>systemctl start misskey</code></p></li></ol><p><code>systemctl status misskey</code>と入力すると、サービスの状態を調べることができます。</p><h3 id="misskeyを最新バージョンにアップデートする方法" tabindex="-1"><a class="header-anchor" href="#misskeyを最新バージョンにアップデートする方法" aria-hidden="true">#</a> Misskeyを最新バージョンにアップデートする方法:</h3><ol><li><code>git checkout master</code></li><li><code>git pull</code></li><li><code>git submodule update --init</code></li><li><code>yarn install</code></li><li><code>NODE_ENV=production yarn build</code></li><li><code>yarn migrate</code></li></ol><p>なにか問題が発生した場合は、<code>yarn clean</code>または<code>yarn cleanall</code>すると直る場合があります。</p><hr><p>なにかお困りのことがありましたらお気軽にご連絡ください。</p>',22),R={render:function(e,s){const n=(0,a.up)("RouterLink"),R=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,t,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(n,{to:"/docs/install/setup.en.html"},{default:(0,a.w5)((()=>[i])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(n,{to:"/docs/install/setup.zh.html"},{default:(0,a.w5)((()=>[r])),_:1})])]),p,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("strong",null,[(0,a._)("a",o,[c,(0,a.Wm)(R)])]),u]),(0,a._)("li",null,[(0,a._)("strong",null,[(0,a._)("a",d,[k,(0,a.Wm)(R)])]),m]),(0,a._)("li",null,[(0,a._)("strong",null,[(0,a._)("a",h,[y,(0,a.Wm)(R)])])])]),b,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",_,[g,(0,a.Wm)(R)]),v]),(0,a._)("li",null,[(0,a._)("a",f,[x,(0,a.Wm)(R)]),U]),(0,a._)("li",null,[(0,a._)("a",M,[E,(0,a.Wm)(R)])])]),w,(0,a._)("ol",null,[N,S,W,(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",D,[O,(0,a.Wm)(R)]),V]),j]),C]),L],64)}}},8085:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-14efbef8",path:"/docs/install/manual.html",title:"Misskey構築の手引き",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. Misskeyユーザーの作成",slug:"_1-misskeyユーザーの作成",children:[]},{level:2,title:"2. 依存関係をインストールする",slug:"_2-依存関係をインストールする",children:[]},{level:2,title:"3. Misskeyのインストール",slug:"_3-misskeyのインストール",children:[]},{level:2,title:"4. 設定ファイルを作成する",slug:"_4-設定ファイルを作成する",children:[]},{level:2,title:"5. Misskeyのビルド",slug:"_5-misskeyのビルド",children:[]},{level:2,title:"6. データベースを初期化",slug:"_6-データベースを初期化",children:[]},{level:2,title:"7. 以上です！",slug:"_7-以上です",children:[{level:3,title:"通常起動",slug:"通常起動",children:[]},{level:3,title:"systemdを用いた起動",slug:"systemdを用いた起動",children:[]},{level:3,title:"Misskeyを最新バージョンにアップデートする方法:",slug:"misskeyを最新バージョンにアップデートする方法",children:[]}]}],filePathRelative:"docs/install/manual.md",git:{updatedTime:16318111e5,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:2}]}}}}]);