import{_ as i,o as c,c as h,b as a,w as o,a as e,d as t,r as n}from"./app.798b97f6.js";const p={},l=e("h1",{id:"admin-federation-update-instance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-federation-update-instance","aria-hidden":"true"},"#"),t(),e("code",null,"admin/federation/update-instance")],-1),u=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function b(x,y){const d=n("MkApiConsole"),r=n("MkSchemaViewer"),s=n("ClientOnly");return c(),h("div",null,[l,u,a(d,{name:"admin/federation/update-instance",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{host:{type:"string"},isSuspended:{type:"boolean"}},required:["host","isSuspended"]},res:{},errors:{}}}),_,a(s,null,{default:o(()=>[a(r,{schema:{type:"object",properties:{host:{type:"string"},isSuspended:{type:"boolean"}},required:["host","isSuspended"]}})]),_:1}),m,a(s,null,{default:o(()=>[a(r,{schema:{}})]),_:1}),f])}var k=i(p,[["render",b],["__file","update-instance.html.vue"]]);export{k as default};
