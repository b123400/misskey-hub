import{_ as i,o as d,c,b as a,w as n,a as e,d as t,r as s}from"./app.798b97f6.js";const h={},m=e("h1",{id:"hashtags-list",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hashtags-list","aria-hidden":"true"},"#"),t(),e("code",null,"hashtags/list")],-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function U(y,_){const l=s("MkApiConsole"),r=s("MkSchemaViewer"),o=s("ClientOnly");return d(),c("div",null,[m,a(l,{name:"hashtags/list",def:{summary:"",description:"",tags:["hashtags"],requireCredential:!1,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},attachedToUserOnly:{type:"boolean",default:!1},attachedToLocalUserOnly:{type:"boolean",default:!1},attachedToRemoteUserOnly:{type:"boolean",default:!1},sort:{type:"string",enum:["+mentionedUsers","-mentionedUsers","+mentionedLocalUsers","-mentionedLocalUsers","+mentionedRemoteUsers","-mentionedRemoteUsers","+attachedUsers","-attachedUsers","+attachedLocalUsers","-attachedLocalUsers","+attachedRemoteUsers","-attachedRemoteUsers"]}},required:["sort"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Hashtag",$ref:"misskey://Hashtag"}},errors:{}}}),f,a(o,null,{default:n(()=>[a(r,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},attachedToUserOnly:{type:"boolean",default:!1},attachedToLocalUserOnly:{type:"boolean",default:!1},attachedToRemoteUserOnly:{type:"boolean",default:!1},sort:{type:"string",enum:["+mentionedUsers","-mentionedUsers","+mentionedLocalUsers","-mentionedLocalUsers","+mentionedRemoteUsers","-mentionedRemoteUsers","+attachedUsers","-attachedUsers","+attachedLocalUsers","-attachedLocalUsers","+attachedRemoteUsers","-attachedRemoteUsers"]}},required:["sort"]}})]),_:1}),p,a(o,null,{default:n(()=>[a(r,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Hashtag",$ref:"misskey://Hashtag"}}})]),_:1}),u])}var g=i(h,[["render",U],["__file","list.html.vue"]]);export{g as default};
