import{_ as d,o as c,c as l,b as t,w as i,a as e,d as r,r as a}from"./app.798b97f6.js";const h={},m=e("h1",{id:"admin-send-email",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-send-email","aria-hidden":"true"},"#"),r(),e("code",null,"admin/send-email")],-1),_=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function x(b,y){const o=a("MkApiConsole"),s=a("MkSchemaViewer"),n=a("ClientOnly");return c(),l("div",null,[m,_,t(o,{name:"admin/send-email",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{to:{type:"string"},subject:{type:"string"},text:{type:"string"}},required:["to","subject","text"]},res:{},errors:{}}}),p,t(n,null,{default:i(()=>[t(s,{schema:{type:"object",properties:{to:{type:"string"},subject:{type:"string"},text:{type:"string"}},required:["to","subject","text"]}})]),_:1}),u,t(n,null,{default:i(()=>[t(s,{schema:{}})]),_:1}),f])}var g=d(h,[["render",x],["__file","send-email.html.vue"]]);export{g as default};
