import{_ as i,o as c,c as h,b as r,w as s,a as e,d as t,r as a}from"./app.798b97f6.js";const _={},l=e("h1",{id:"notes-thread-muting-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-thread-muting-create","aria-hidden":"true"},"#"),t(),e("code",null,"notes/thread-muting/create")],-1),u=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1),b=e("h3",{id:"no-such-note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-note","aria-hidden":"true"},"#"),t(" NO_SUCH_NOTE")],-1),x=e("p",null,[t("ID: "),e("code",null,"5ff67ada-ed3b-2e71-8e87-a1a421e177d2")],-1);function C(y,k){const d=a("MkApiConsole"),n=a("MkSchemaViewer"),o=a("ClientOnly");return c(),h("div",null,[l,u,r(d,{name:"notes/thread-muting/create",def:{summary:"",description:"",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]},res:{},errors:{"5ff67ada-ed3b-2e71-8e87-a1a421e177d2":{id:"5ff67ada-ed3b-2e71-8e87-a1a421e177d2",code:"NO_SUCH_NOTE",description:""}}}}),m,r(o,null,{default:s(()=>[r(n,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]}})]),_:1}),p,r(o,null,{default:s(()=>[r(n,{schema:{}})]),_:1}),f,b,x])}var N=i(_,[["render",C],["__file","create.html.vue"]]);export{N as default};
