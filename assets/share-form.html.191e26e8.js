import{_ as n,o as d,c as r,a as e,b as i,w as s,e as o,d as t,r as c}from"./app.3acb0863.js";const l={},h=o('<h1 id="share-form" tabindex="-1"><a class="header-anchor" href="#share-form" aria-hidden="true">#</a> Share Form</h1><p>When you open <code>/share</code> in Misskey Web, you open a sharing submission form. This sharing form is useful if you want users to share the content of your page with Misskey from an external web page.</p><p>You can specify a number of options in the URL, including the shared content, as a query parameters.</p><h2 id="query-parameters" tabindex="-1"><a class="header-anchor" href="#query-parameters" aria-hidden="true">#</a> Query Parameters</h2><div class="custom-container tip"><i class="fas fa-info"></i><p>All parameters are <strong>optional</strong>.</p></div><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>title</code></td><td>title, will be inserted before the main body in brackets</td></tr><tr><td><code>text</code></td><td>main body</td></tr><tr><td><code>url</code></td><td>URL, inserted after the main body</td></tr></tbody></table><h3 id="reply-information" tabindex="-1"><a class="header-anchor" href="#reply-information" aria-hidden="true">#</a> Reply Information</h3><p>You can make the note being composed a reply to a given note by specifying one of the following.</p><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>replyId</code></td><td>ID of the note you are replying to</td></tr><tr><td><code>replyUri</code></td><td>URL to reply to (specify the remote note object)</td></tr></tbody></table><h3 id="renote-information" tabindex="-1"><a class="header-anchor" href="#renote-information" aria-hidden="true">#</a> Renote Information</h3><p>You can make the note being composed a renote of a given note by specifying one of the following.</p><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>renoteId</code></td><td>ID of the note to renote</td></tr><tr><td><code>renoteUri</code></td><td>URL of the note to renote (specify the remote note object)</td></tr></tbody></table><h3 id="publication-scope" tabindex="-1"><a class="header-anchor" href="#publication-scope" aria-hidden="true">#</a> Publication Scope</h3><p>The following options allow to select a scope.</p>',14),u=e("thead",null,[e("tr",null,[e("th",null,"name"),e("th",null,"description")])],-1),p=e("tr",null,[e("td",null,[e("code",null,"visibility")]),e("td",null,[t("one of "),e("code",null,"public"),t(", "),e("code",null,"home"),t(", "),e("code",null,"followers"),t(", "),e("code",null,"specified")])],-1),f=e("tr",null,[e("td",null,[e("code",null,"localOnly")]),e("td",null,"0(false) or 1(true)")],-1),m=e("tr",null,[e("td",null,[e("code",null,"visibleUserIds")]),e("td",null,"target user IDs")],-1),b=e("td",null,[e("code",null,"visibleAccts")],-1),y=t("target user "),_=t("acct"),g=t("s (comma separated)"),v=o('<div class="custom-container warning"><i class="fas fa-exclamation"></i><p>If <code>visibility</code> is set to <code>specified</code>, either <code>visibleUserIds</code> or <code>visibleAccts</code> must be set too.</p></div><h3 id="attachments" tabindex="-1"><a class="header-anchor" href="#attachments" aria-hidden="true">#</a> Attachments</h3><p>You can specify attachments with the following options.</p><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>fileIds</code></td><td>IDs of files to be attached (comma separated)</td></tr></tbody></table>',4);function w(x,I){const a=c("RouterLink");return d(),r("div",null,[h,e("table",null,[u,e("tbody",null,[p,f,m,e("tr",null,[b,e("td",null,[y,i(a,{to:"/en/docs/glossary.html#acct"},{default:s(()=>[_]),_:1}),g])])])]),v])}var R=n(l,[["render",w],["__file","share-form.html.vue"]]);export{R as default};
