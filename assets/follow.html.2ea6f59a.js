import{_ as d,o as l,c as i,b as r,w as t,a as e,d as n,r as a}from"./app.798b97f6.js";const h={},_=e("h1",{id:"channels-follow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#channels-follow","aria-hidden":"true"},"#"),n(),e("code",null,"channels/follow")],-1),f=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),n(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),n(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),n(" Errors")],-1),b=e("h3",{id:"no-such-channel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-channel","aria-hidden":"true"},"#"),n(" NO_SUCH_CHANNEL")],-1),C=e("p",null,[n("ID: "),e("code",null,"c0031718-d573-4e85-928e-10039f1fbb68")],-1);function w(x,y){const c=a("MkApiConsole"),o=a("MkSchemaViewer"),s=a("ClientOnly");return l(),i("div",null,[_,f,r(c,{name:"channels/follow",def:{summary:"",description:"",tags:["channels"],requireCredential:!0,req:{type:"object",properties:{channelId:{type:"string",format:"misskey:id"}},required:["channelId"]},res:{},errors:{"c0031718-d573-4e85-928e-10039f1fbb68":{id:"c0031718-d573-4e85-928e-10039f1fbb68",code:"NO_SUCH_CHANNEL",description:""}}}}),p,r(s,null,{default:t(()=>[r(o,{schema:{type:"object",properties:{channelId:{type:"string",format:"misskey:id"}},required:["channelId"]}})]),_:1}),u,r(s,null,{default:t(()=>[r(o,{schema:{}})]),_:1}),m,b,C])}var k=d(h,[["render",w],["__file","follow.html.vue"]]);export{k as default};
