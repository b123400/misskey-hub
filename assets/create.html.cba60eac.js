import{_ as o,o as d,c,b as t,w as l,a as e,d as r,r as s}from"./app.798b97f6.js";const p={},m=e("h1",{id:"gallery-posts-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gallery-posts-create","aria-hidden":"true"},"#"),r(),e("code",null,"gallery/posts/create")],-1),h=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function _(b,g){const n=s("MkApiConsole"),a=s("MkSchemaViewer"),i=s("ClientOnly");return d(),c("div",null,[m,h,t(n,{name:"gallery/posts/create",def:{summary:"",description:"",tags:["gallery"],requireCredential:!0,req:{type:"object",properties:{title:{type:"string",minLength:1},description:{type:"string",nullable:!0},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:32,items:{type:"string",format:"misskey:id"}},isSensitive:{type:"boolean",default:!1}},required:["title","fileIds"]},res:{type:"object",optional:!1,nullable:!1,ref:"GalleryPost",$ref:"misskey://GalleryPost"},errors:{}}}),u,t(i,null,{default:l(()=>[t(a,{schema:{type:"object",properties:{title:{type:"string",minLength:1},description:{type:"string",nullable:!0},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:32,items:{type:"string",format:"misskey:id"}},isSensitive:{type:"boolean",default:!1}},required:["title","fileIds"]}})]),_:1}),f,t(i,null,{default:l(()=>[t(a,{schema:{type:"object",optional:!1,nullable:!1,ref:"GalleryPost",$ref:"misskey://GalleryPost"}})]),_:1}),y])}var k=o(p,[["render",_],["__file","create.html.vue"]]);export{k as default};
