import{_ as d,o as i,c as h,b as s,w as n,a as e,d as o,r as t}from"./app.798b97f6.js";const l={},_=e("h1",{id:"notes-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-show","aria-hidden":"true"},"#"),o(),e("code",null,"notes/show")],-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),o(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),o(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),o(" Errors")],-1),u=e("h3",{id:"no-such-note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-note","aria-hidden":"true"},"#"),o(" NO_SUCH_NOTE")],-1),b=e("p",null,[o("ID: "),e("code",null,"24fcbfc6-2e37-42b6-8388-c29b3861a08d")],-1);function y(N,k){const c=t("MkApiConsole"),r=t("MkSchemaViewer"),a=t("ClientOnly");return i(),h("div",null,[_,s(c,{name:"notes/show",def:{summary:"",description:"",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]},res:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"},errors:{"24fcbfc6-2e37-42b6-8388-c29b3861a08d":{id:"24fcbfc6-2e37-42b6-8388-c29b3861a08d",code:"NO_SUCH_NOTE",description:""}}}}),f,s(a,null,{default:n(()=>[s(r,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]}})]),_:1}),p,s(a,null,{default:n(()=>[s(r,{schema:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}})]),_:1}),m,u,b])}var x=d(l,[["render",y],["__file","show.html.vue"]]);export{x as default};
