import{_ as l,o as d,c as m,b as r,w as i,a as e,d as t,r as s}from"./app.798b97f6.js";const c={},f=e("h1",{id:"federation-followers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#federation-followers","aria-hidden":"true"},"#"),t(),e("code",null,"federation/followers")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function _(y,w){const n=s("MkApiConsole"),a=s("MkSchemaViewer"),o=s("ClientOnly");return d(),m("div",null,[f,r(n,{name:"federation/followers",def:{summary:"",description:"",tags:["federation"],requireCredential:!1,req:{type:"object",properties:{host:{type:"string"},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10}},required:["host"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Following",$ref:"misskey://Following"}},errors:{}}}),p,r(o,null,{default:i(()=>[r(a,{schema:{type:"object",properties:{host:{type:"string"},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10}},required:["host"]}})]),_:1}),h,r(o,null,{default:i(()=>[r(a,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Following",$ref:"misskey://Following"}}})]),_:1}),u])}var g=l(c,[["render",_],["__file","followers.html.vue"]]);export{g as default};
