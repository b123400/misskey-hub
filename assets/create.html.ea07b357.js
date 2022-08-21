import{_ as c,o as l,c as d,b as r,w as o,a as e,d as a,r as t}from"./app.798b97f6.js";const p={},h=e("h1",{id:"admin-accounts-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-accounts-create","aria-hidden":"true"},"#"),a(),e("code",null,"admin/accounts/create")],-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(y,b){const i=t("MkApiConsole"),s=t("MkSchemaViewer"),n=t("ClientOnly");return l(),d("div",null,[h,r(i,{name:"admin/accounts/create",def:{summary:"",description:"",tags:["admin"],requireCredential:!1,req:{type:"object",properties:{username:{type:"string",pattern:"^\\w{1,20}$"},password:{type:"string",minLength:1}},required:["username","password"]},res:{type:"object",optional:!1,nullable:!1,ref:"User",properties:{token:{type:"string",optional:!1,nullable:!1}},required:["token"],$ref:"misskey://User"},errors:{}}}),m,r(n,null,{default:o(()=>[r(s,{schema:{type:"object",properties:{username:{type:"string",pattern:"^\\w{1,20}$"},password:{type:"string",minLength:1}},required:["username","password"]}})]),_:1}),u,r(n,null,{default:o(()=>[r(s,{schema:{type:"object",optional:!1,nullable:!1,ref:"User",properties:{token:{type:"string",optional:!1,nullable:!1}},required:["token"],$ref:"misskey://User"}})]),_:1}),_])}var w=c(p,[["render",f],["__file","create.html.vue"]]);export{w as default};
