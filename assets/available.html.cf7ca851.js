import{_ as i,o as c,c as d,b as a,w as n,a as e,d as r,r as s}from"./app.798b97f6.js";const p={},u=e("h1",{id:"username-available",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#username-available","aria-hidden":"true"},"#"),r(),e("code",null,"username/available")],-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function b(f,v){const o=s("MkApiConsole"),t=s("MkSchemaViewer"),l=s("ClientOnly");return c(),d("div",null,[u,a(o,{name:"username/available",def:{summary:"",description:"",tags:["users"],requireCredential:!1,req:{type:"object",properties:{username:{type:"string",pattern:"^\\w{1,20}$"}},required:["username"]},res:{type:"object",optional:!1,nullable:!1,properties:{available:{type:"boolean",optional:!1,nullable:!1}},required:["available"]},errors:{}}}),h,a(l,null,{default:n(()=>[a(t,{schema:{type:"object",properties:{username:{type:"string",pattern:"^\\w{1,20}$"}},required:["username"]}})]),_:1}),m,a(l,null,{default:n(()=>[a(t,{schema:{type:"object",optional:!1,nullable:!1,properties:{available:{type:"boolean",optional:!1,nullable:!1}},required:["available"]}})]),_:1}),_])}var x=i(p,[["render",b],["__file","available.html.vue"]]);export{x as default};
