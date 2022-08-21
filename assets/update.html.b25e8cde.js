import{_ as l,o as d,c as p,b as a,w as s,a as e,d as n,e as c,r as t}from"./app.798b97f6.js";const u={},h=e("h1",{id:"i-update",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-update","aria-hidden":"true"},"#"),n(),e("code",null,"i/update")],-1),f=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),n(" Parameters")],-1),y=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),n(" Response")],-1),b=c('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-avatar" tabindex="-1"><a class="header-anchor" href="#no-such-avatar" aria-hidden="true">#</a> NO_SUCH_AVATAR</h3><p>ID: <code>539f3a45-f215-4f81-a9a8-31293640207f</code></p><h3 id="no-such-banner" tabindex="-1"><a class="header-anchor" href="#no-such-banner" aria-hidden="true">#</a> NO_SUCH_BANNER</h3><p>ID: <code>0d8f5629-f210-41c2-9433-735831a58595</code></p><h3 id="avatar-not-an-image" tabindex="-1"><a class="header-anchor" href="#avatar-not-an-image" aria-hidden="true">#</a> AVATAR_NOT_AN_IMAGE</h3><p>ID: <code>f419f9f8-2f4d-46b1-9fb4-49d3a2fd7191</code></p><h3 id="banner-not-an-image" tabindex="-1"><a class="header-anchor" href="#banner-not-an-image" aria-hidden="true">#</a> BANNER_NOT_AN_IMAGE</h3><p>ID: <code>75aedb19-2afd-4e6d-87fc-67941256fa60</code></p><h3 id="no-such-page" tabindex="-1"><a class="header-anchor" href="#no-such-page" aria-hidden="true">#</a> NO_SUCH_PAGE</h3><p>ID: <code>8e01b590-7eb9-431b-a239-860e086c408e</code></p><h3 id="invalid-regexp" tabindex="-1"><a class="header-anchor" href="#invalid-regexp" aria-hidden="true">#</a> INVALID_REGEXP</h3><p>ID: <code>0d786918-10df-41cd-8f33-8dec7d9a89a5</code></p>',13);function g(N,A){const o=t("MkApiConsole"),r=t("MkSchemaViewer"),i=t("ClientOnly");return d(),p("div",null,[h,f,a(o,{name:"i/update",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:50,nullable:!0},description:{type:"string",minLength:1,maxLength:500,nullable:!0},location:{type:"string",minLength:1,maxLength:50,nullable:!0},birthday:{type:"string",pattern:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",nullable:!0},lang:{type:"string",enum:[null,"ach","ady","af","af-NA","af-ZA","ak","ar","ar-AR","ar-MA","ar-SA","ay-BO","az","az-AZ","be-BY","bg","bg-BG","bn","bn-IN","bn-BD","br","bs-BA","ca","ca-ES","cak","ck-US","cs","cs-CZ","cy","cy-GB","da","da-DK","de","de-AT","de-DE","de-CH","dsb","el","el-GR","en","en-GB","en-AU","en-CA","en-IE","en-IN","en-PI","en-SG","en-UD","en-US","en-ZA","en@pirate","eo","eo-EO","es","es-AR","es-419","es-CL","es-CO","es-EC","es-ES","es-LA","es-NI","es-MX","es-US","es-VE","et","et-EE","eu","eu-ES","fa","fa-IR","fb-LT","ff","fi","fi-FI","fo","fo-FO","fr","fr-CA","fr-FR","fr-BE","fr-CH","fy-NL","ga","ga-IE","gd","gl","gl-ES","gn-PY","gu-IN","gv","gx-GR","he","he-IL","hi","hi-IN","hr","hr-HR","hsb","ht","hu","hu-HU","hy","hy-AM","id","id-ID","is","is-IS","it","it-IT","ja","ja-JP","jv-ID","ka-GE","kk-KZ","km","kl","km-KH","kab","kn","kn-IN","ko","ko-KR","ku-TR","kw","la","la-VA","lb","li-NL","lt","lt-LT","lv","lv-LV","mai","mg-MG","mk","mk-MK","ml","ml-IN","mn-MN","mr","mr-IN","ms","ms-MY","mt","mt-MT","my","no","nb","nb-NO","ne","ne-NP","nl","nl-BE","nl-NL","nn-NO","oc","or-IN","pa","pa-IN","pl","pl-PL","ps-AF","pt","pt-BR","pt-PT","qu-PE","rm-CH","ro","ro-RO","ru","ru-RU","sa-IN","se-NO","sh","si-LK","sk","sk-SK","sl","sl-SI","so-SO","sq","sq-AL","sr","sr-RS","su","sv","sv-SE","sw","sw-KE","ta","ta-IN","te","te-IN","tg","tg-TJ","th","th-TH","fil","tlh","tr","tr-TR","tt-RU","uk","uk-UA","ur","ur-PK","uz","uz-UZ","vi","vi-VN","xh-ZA","yi","yi-DE","zh","zh-Hans","zh-Hant","zh-CN","zh-HK","zh-SG","zh-TW","zu-ZA"],nullable:!0},avatarId:{type:"string",format:"misskey:id",nullable:!0},bannerId:{type:"string",format:"misskey:id",nullable:!0},fields:{type:"array",minItems:0,maxItems:16,items:{type:"object",properties:{name:{type:"string"},value:{type:"string"}},required:["name","value"]}},isLocked:{type:"boolean"},isExplorable:{type:"boolean"},hideOnlineStatus:{type:"boolean"},publicReactions:{type:"boolean"},carefulBot:{type:"boolean"},autoAcceptFollowed:{type:"boolean"},noCrawle:{type:"boolean"},isBot:{type:"boolean"},isCat:{type:"boolean"},showTimelineReplies:{type:"boolean"},injectFeaturedNote:{type:"boolean"},receiveAnnouncementEmail:{type:"boolean"},alwaysMarkNsfw:{type:"boolean"},autoSensitive:{type:"boolean"},ffVisibility:{type:"string",enum:["public","followers","private"]},pinnedPageId:{type:"array",items:{type:"string",format:"misskey:id"}},mutedWords:{type:"array"},mutedInstances:{type:"array",items:{type:"string"}},mutingNotificationTypes:{type:"array",items:{type:"string",enum:["follow","mention","reply","renote","quote","reaction","pollVote","pollEnded","receiveFollowRequest","followRequestAccepted","groupInvited","app"]}},emailNotificationTypes:{type:"array",items:{type:"string"}}}},res:{type:"object",optional:!1,nullable:!1,ref:"MeDetailed",$ref:"misskey://MeDetailed"},errors:{"539f3a45-f215-4f81-a9a8-31293640207f":{id:"539f3a45-f215-4f81-a9a8-31293640207f",code:"NO_SUCH_AVATAR",description:""},"0d8f5629-f210-41c2-9433-735831a58595":{id:"0d8f5629-f210-41c2-9433-735831a58595",code:"NO_SUCH_BANNER",description:""},"f419f9f8-2f4d-46b1-9fb4-49d3a2fd7191":{id:"f419f9f8-2f4d-46b1-9fb4-49d3a2fd7191",code:"AVATAR_NOT_AN_IMAGE",description:""},"75aedb19-2afd-4e6d-87fc-67941256fa60":{id:"75aedb19-2afd-4e6d-87fc-67941256fa60",code:"BANNER_NOT_AN_IMAGE",description:""},"8e01b590-7eb9-431b-a239-860e086c408e":{id:"8e01b590-7eb9-431b-a239-860e086c408e",code:"NO_SUCH_PAGE",description:""},"0d786918-10df-41cd-8f33-8dec7d9a89a5":{id:"0d786918-10df-41cd-8f33-8dec7d9a89a5",code:"INVALID_REGEXP",description:""}}}},null,8,["def"]),m,a(i,null,{default:s(()=>[a(r,{schema:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:50,nullable:!0},description:{type:"string",minLength:1,maxLength:500,nullable:!0},location:{type:"string",minLength:1,maxLength:50,nullable:!0},birthday:{type:"string",pattern:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",nullable:!0},lang:{type:"string",enum:[null,"ach","ady","af","af-NA","af-ZA","ak","ar","ar-AR","ar-MA","ar-SA","ay-BO","az","az-AZ","be-BY","bg","bg-BG","bn","bn-IN","bn-BD","br","bs-BA","ca","ca-ES","cak","ck-US","cs","cs-CZ","cy","cy-GB","da","da-DK","de","de-AT","de-DE","de-CH","dsb","el","el-GR","en","en-GB","en-AU","en-CA","en-IE","en-IN","en-PI","en-SG","en-UD","en-US","en-ZA","en@pirate","eo","eo-EO","es","es-AR","es-419","es-CL","es-CO","es-EC","es-ES","es-LA","es-NI","es-MX","es-US","es-VE","et","et-EE","eu","eu-ES","fa","fa-IR","fb-LT","ff","fi","fi-FI","fo","fo-FO","fr","fr-CA","fr-FR","fr-BE","fr-CH","fy-NL","ga","ga-IE","gd","gl","gl-ES","gn-PY","gu-IN","gv","gx-GR","he","he-IL","hi","hi-IN","hr","hr-HR","hsb","ht","hu","hu-HU","hy","hy-AM","id","id-ID","is","is-IS","it","it-IT","ja","ja-JP","jv-ID","ka-GE","kk-KZ","km","kl","km-KH","kab","kn","kn-IN","ko","ko-KR","ku-TR","kw","la","la-VA","lb","li-NL","lt","lt-LT","lv","lv-LV","mai","mg-MG","mk","mk-MK","ml","ml-IN","mn-MN","mr","mr-IN","ms","ms-MY","mt","mt-MT","my","no","nb","nb-NO","ne","ne-NP","nl","nl-BE","nl-NL","nn-NO","oc","or-IN","pa","pa-IN","pl","pl-PL","ps-AF","pt","pt-BR","pt-PT","qu-PE","rm-CH","ro","ro-RO","ru","ru-RU","sa-IN","se-NO","sh","si-LK","sk","sk-SK","sl","sl-SI","so-SO","sq","sq-AL","sr","sr-RS","su","sv","sv-SE","sw","sw-KE","ta","ta-IN","te","te-IN","tg","tg-TJ","th","th-TH","fil","tlh","tr","tr-TR","tt-RU","uk","uk-UA","ur","ur-PK","uz","uz-UZ","vi","vi-VN","xh-ZA","yi","yi-DE","zh","zh-Hans","zh-Hant","zh-CN","zh-HK","zh-SG","zh-TW","zu-ZA"],nullable:!0},avatarId:{type:"string",format:"misskey:id",nullable:!0},bannerId:{type:"string",format:"misskey:id",nullable:!0},fields:{type:"array",minItems:0,maxItems:16,items:{type:"object",properties:{name:{type:"string"},value:{type:"string"}},required:["name","value"]}},isLocked:{type:"boolean"},isExplorable:{type:"boolean"},hideOnlineStatus:{type:"boolean"},publicReactions:{type:"boolean"},carefulBot:{type:"boolean"},autoAcceptFollowed:{type:"boolean"},noCrawle:{type:"boolean"},isBot:{type:"boolean"},isCat:{type:"boolean"},showTimelineReplies:{type:"boolean"},injectFeaturedNote:{type:"boolean"},receiveAnnouncementEmail:{type:"boolean"},alwaysMarkNsfw:{type:"boolean"},autoSensitive:{type:"boolean"},ffVisibility:{type:"string",enum:["public","followers","private"]},pinnedPageId:{type:"array",items:{type:"string",format:"misskey:id"}},mutedWords:{type:"array"},mutedInstances:{type:"array",items:{type:"string"}},mutingNotificationTypes:{type:"array",items:{type:"string",enum:["follow","mention","reply","renote","quote","reaction","pollVote","pollEnded","receiveFollowRequest","followRequestAccepted","groupInvited","app"]}},emailNotificationTypes:{type:"array",items:{type:"string"}}}}},null,8,["schema"])]),_:1}),y,a(i,null,{default:s(()=>[a(r,{schema:{type:"object",optional:!1,nullable:!1,ref:"MeDetailed",$ref:"misskey://MeDetailed"}})]),_:1}),b])}var k=l(u,[["render",g],["__file","update.html.vue"]]);export{k as default};
