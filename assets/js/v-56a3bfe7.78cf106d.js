"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[984],{7485:(n,s,a)=>{a.r(s),a.d(s,{default:()=>D});var e=a(6252);const l=(0,e.uE)('<h1 id="テーマ" tabindex="-1"><a class="header-anchor" href="#テーマ" aria-hidden="true">#</a> テーマ</h1><p>テーマを設定して、Misskeyクライアントの見た目を変更できます。</p><h2 id="テーマの設定" tabindex="-1"><a class="header-anchor" href="#テーマの設定" aria-hidden="true">#</a> テーマの設定</h2><p>設定 &gt; テーマ</p><h2 id="テーマを作成する" tabindex="-1"><a class="header-anchor" href="#テーマを作成する" aria-hidden="true">#</a> テーマを作成する</h2><p>テーマコードはJSON5で記述されたテーマオブジェクトです。 テーマは以下のようなオブジェクトです。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\tid<span class="token operator">:</span> <span class="token string">&#39;17587283-dd92-4a2c-a22c-be0637c9e22a&#39;</span><span class="token punctuation">,</span>\n\n\tname<span class="token operator">:</span> <span class="token string">&#39;Danboard&#39;</span><span class="token punctuation">,</span>\n\tauthor<span class="token operator">:</span> <span class="token string">&#39;syuilo&#39;</span><span class="token punctuation">,</span>\n\n\tbase<span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>\n\n\tprops<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\taccent<span class="token operator">:</span> <span class="token string">&#39;rgb(218, 141, 49)&#39;</span><span class="token punctuation">,</span>\n\t\tbg<span class="token operator">:</span> <span class="token string">&#39;rgb(218, 212, 190)&#39;</span><span class="token punctuation">,</span>\n\t\tfg<span class="token operator">:</span> <span class="token string">&#39;rgb(115, 108, 92)&#39;</span><span class="token punctuation">,</span>\n\t\tpanel<span class="token operator">:</span> <span class="token string">&#39;rgb(236, 232, 220)&#39;</span><span class="token punctuation">,</span>\n\t\trenote<span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>\n\t\tlink<span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>\n\t\tmention<span class="token operator">:</span> <span class="token string">&#39;@accent&#39;</span><span class="token punctuation">,</span>\n\t\thashtag<span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>\n\t\theader<span class="token operator">:</span> <span class="token string">&#39;rgba(239, 227, 213, 0.75)&#39;</span><span class="token punctuation">,</span>\n\t\tnavBg<span class="token operator">:</span> <span class="token string">&#39;rgb(216, 206, 182)&#39;</span><span class="token punctuation">,</span>\n\t\tinputBorder<span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.1)&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li><code>id</code> ... テーマの一意なID。UUIDをおすすめします。</li><li><code>name</code> ... テーマ名</li><li><code>author</code> ... テーマの作者</li><li><code>desc</code> ... テーマの説明(オプション)</li><li><code>base</code> ... 明るいテーマか、暗いテーマか <ul><li><code>light</code>にすると明るいテーマになり、<code>dark</code>にすると暗いテーマになります。</li><li>テーマはここで設定されたベーステーマを継承します。</li></ul></li><li><code>props</code> ... テーマのスタイル定義。これから説明します。</li></ul><h3 id="テーマのスタイル定義" tabindex="-1"><a class="header-anchor" href="#テーマのスタイル定義" aria-hidden="true">#</a> テーマのスタイル定義</h3>',9),t=(0,e._)("code",null,"props",-1),p=(0,e.Uk)("下にはテーマのスタイルを定義します。 キーがCSSの変数名になり、バリューで中身を指定します。 なお、この"),o=(0,e._)("code",null,"props",-1),r=(0,e.Uk)("オブジェクトはベーステーマから継承されます。 ベーステーマは、このテーマの"),c=(0,e._)("code",null,"base",-1),i=(0,e.Uk)("が"),u=(0,e._)("code",null,"light",-1),d=(0,e.Uk)("なら"),b={href:"https://github.com/misskey-dev/misskey/blob/develop/src/client/themes/_light.json5",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("_light.json5"),h=(0,e.Uk)("で、"),g=(0,e._)("code",null,"dark",-1),m=(0,e.Uk)("なら"),f={href:"https://github.com/misskey-dev/misskey/blob/develop/src/client/themes/_dark.json5",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("_dark.json5"),v=(0,e.Uk)("です。 つまり、このテーマ内の"),U=(0,e._)("code",null,"props",-1),y=(0,e.Uk)("に"),S=(0,e._)("code",null,"panel",-1),j=(0,e.Uk)("というキーが無くても、そこにはベーステーマの"),x=(0,e._)("code",null,"panel",-1),C=(0,e.Uk)("があると見なされます。"),w=(0,e.uE)('<h4 id="バリューで使える構文" tabindex="-1"><a class="header-anchor" href="#バリューで使える構文" aria-hidden="true">#</a> バリューで使える構文</h4><ul><li>16進数で表された色 <ul><li>例: <code>#00ff00</code></li></ul></li><li><code>rgb(r, g, b)</code>形式で表された色 <ul><li>例: <code>rgb(0, 255, 0)</code></li></ul></li><li><code>rgb(r, g, b, a)</code>形式で表された透明度を含む色 <ul><li>例: <code>rgba(0, 255, 0, 0.5)</code></li></ul></li><li>他のキーの値の参照 <ul><li><code>@{キー名}</code>と書くと他のキーの値の参照になります。<code>{キー名}</code>は参照したいキーの名前に置き換えます。</li><li>例: <code>@panel</code></li></ul></li><li>定数(後述)の参照 <ul><li><code>${定数名}</code>と書くと定数の参照になります。<code>{定数名}</code>は参照したい定数の名前に置き換えます。</li><li>例: <code>$main</code></li></ul></li><li>関数(後述) <ul><li><code>:{関数名}&lt;{引数}&lt;{色}</code></li></ul></li></ul><h4 id="定数" tabindex="-1"><a class="header-anchor" href="#定数" aria-hidden="true">#</a> 定数</h4><p>「CSS変数として出力はしたくないが、他のCSS変数の値として使いまわしたい」値があるときは、定数を使うと便利です。 キー名を<code>$</code>で始めると、そのキーはCSS変数として出力されません。</p><h4 id="関数" tabindex="-1"><a class="header-anchor" href="#関数" aria-hidden="true">#</a> 関数</h4><p>wip</p>',6),D={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("p",null,[t,p,o,r,c,i,u,d,(0,e._)("a",b,[k,(0,e.Wm)(a)]),h,g,m,(0,e._)("a",f,[_,(0,e.Wm)(a)]),v,U,y,S,j,x,C]),w],64)}}},1751:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-56a3bfe7",path:"/docs/features/theme.html",title:"テーマ",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"テーマの設定",slug:"テーマの設定",children:[]},{level:2,title:"テーマを作成する",slug:"テーマを作成する",children:[{level:3,title:"テーマのスタイル定義",slug:"テーマのスタイル定義",children:[]}]}],filePathRelative:"docs/features/theme.md",git:{updatedTime:1631291596e3,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:1}]}}}}]);