import{_ as i,o as d,c,b as r,w as n,a as e,d as s,r as a}from"./app.798b97f6.js";const p={},u=e("h1",{id:"users-groups-owned",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-groups-owned","aria-hidden":"true"},"#"),s(),e("code",null,"users/groups/owned")],-1),h=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),s(" Errors")],-1);function b(y,w){const l=a("MkApiConsole"),o=a("MkSchemaViewer"),t=a("ClientOnly");return d(),c("div",null,[u,h,r(l,{name:"users/groups/owned",def:{summary:"",description:"",tags:["groups"],requireCredential:!0,req:{type:"object",properties:{},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserGroup",$ref:"misskey://UserGroup"}},errors:{}}}),_,r(t,null,{default:n(()=>[r(o,{schema:{type:"object",properties:{},required:[]}})]),_:1}),f,r(t,null,{default:n(()=>[r(o,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserGroup",$ref:"misskey://UserGroup"}}})]),_:1}),m])}var k=i(p,[["render",b],["__file","owned.html.vue"]]);export{k as default};
