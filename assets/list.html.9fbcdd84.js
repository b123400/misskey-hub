import{_ as o,o as p,c as d,b as t,w as r,a as e,d as l,r as a}from"./app.798b97f6.js";const u={},m=e("h1",{id:"admin-emoji-list",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-emoji-list","aria-hidden":"true"},"#"),l(),e("code",null,"admin/emoji/list")],-1),f=e("p",null,"Credential required.",-1),c=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),l(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),l(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),l(" Errors")],-1);function _(b,g){const n=a("MkApiConsole"),i=a("MkSchemaViewer"),s=a("ClientOnly");return p(),d("div",null,[m,f,t(n,{name:"admin/emoji/list",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{query:{type:"string",nullable:!0,default:null},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},aliases:{type:"array",optional:!1,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},name:{type:"string",optional:!1,nullable:!1},category:{type:"string",optional:!1,nullable:!0},host:{type:"null",optional:!1,description:"The local host is represented with `null`. The field exists for compatibility with other API endpoints that return files."},url:{type:"string",optional:!1,nullable:!1}},required:["id","aliases","name","category","host","url"]}},errors:{}}},null,8,["def"]),c,t(s,null,{default:r(()=>[t(i,{schema:{type:"object",properties:{query:{type:"string",nullable:!0,default:null},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),h,t(s,null,{default:r(()=>[t(i,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},aliases:{type:"array",optional:!1,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},name:{type:"string",optional:!1,nullable:!1},category:{type:"string",optional:!1,nullable:!0},host:{type:"null",optional:!1,description:"The local host is represented with `null`. The field exists for compatibility with other API endpoints that return files."},url:{type:"string",optional:!1,nullable:!1}},required:["id","aliases","name","category","host","url"]}}},null,8,["schema"])]),_:1}),y])}var k=o(u,[["render",_],["__file","list.html.vue"]]);export{k as default};
