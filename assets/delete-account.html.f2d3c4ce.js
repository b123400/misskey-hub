import{_ as c,o as i,c as l,b as r,w as o,a as e,d as t,r as a}from"./app.798b97f6.js";const h={},u=e("h1",{id:"admin-delete-account",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-delete-account","aria-hidden":"true"},"#"),t(),e("code",null,"admin/delete-account")],-1),_=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function x(y,k){const d=a("MkApiConsole"),s=a("MkSchemaViewer"),n=a("ClientOnly");return i(),l("div",null,[u,_,r(d,{name:"admin/delete-account",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{},errors:{}}}),m,r(n,null,{default:o(()=>[r(s,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),p,r(n,null,{default:o(()=>[r(s,{schema:{}})]),_:1}),f])}var b=c(h,[["render",x],["__file","delete-account.html.vue"]]);export{b as default};
