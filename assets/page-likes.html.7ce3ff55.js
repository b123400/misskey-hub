import{_ as l,o as d,c as p,b as a,w as n,a as e,d as t,r}from"./app.798b97f6.js";const c={},m=e("h1",{id:"i-page-likes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-page-likes","aria-hidden":"true"},"#"),t(),e("code",null,"i/page-likes")],-1),f=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function y(g,k){const o=r("MkApiConsole"),i=r("MkSchemaViewer"),s=r("ClientOnly");return d(),p("div",null,[m,f,a(o,{name:"i/page-likes",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},page:{type:"object",optional:!1,nullable:!1,ref:"Page",$ref:"misskey://Page"}},required:["id","page"]}},errors:{}}}),u,a(s,null,{default:n(()=>[a(i,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),h,a(s,null,{default:n(()=>[a(i,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},page:{type:"object",optional:!1,nullable:!1,ref:"Page",$ref:"misskey://Page"}},required:["id","page"]}}})]),_:1}),_])}var x=l(c,[["render",y],["__file","page-likes.html.vue"]]);export{x as default};
