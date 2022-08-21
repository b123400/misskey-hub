import{_ as o,o as d,c as u,b as t,w as n,a as e,d as a,r}from"./app.798b97f6.js";const m={},c=e("h1",{id:"admin-show-users",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-show-users","aria-hidden":"true"},"#"),a(),e("code",null,"admin/show-users")],-1),p=e("p",null,"Credential required.",-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function y(b,g){const i=r("MkApiConsole"),l=r("MkSchemaViewer"),s=r("ClientOnly");return d(),u("div",null,[c,p,t(i,{name:"admin/show-users",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0},sort:{type:"string",enum:["+follower","-follower","+createdAt","-createdAt","+updatedAt","-updatedAt"]},state:{type:"string",enum:["all","alive","available","admin","moderator","adminOrModerator","silenced","suspended"],default:"all"},origin:{type:"string",enum:["combined","local","remote"],default:"combined"},username:{type:"string",nullable:!0,default:null},hostname:{type:"string",nullable:!0,default:null,description:"The local host is represented with `null`."}},required:[]},res:{type:"array",nullable:!1,optional:!1,items:{type:"object",nullable:!1,optional:!1,ref:"UserDetailed",$ref:"misskey://UserDetailed"}},errors:{}}},null,8,["def"]),h,t(s,null,{default:n(()=>[t(l,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0},sort:{type:"string",enum:["+follower","-follower","+createdAt","-createdAt","+updatedAt","-updatedAt"]},state:{type:"string",enum:["all","alive","available","admin","moderator","adminOrModerator","silenced","suspended"],default:"all"},origin:{type:"string",enum:["combined","local","remote"],default:"combined"},username:{type:"string",nullable:!0,default:null},hostname:{type:"string",nullable:!0,default:null,description:"The local host is represented with `null`."}},required:[]}},null,8,["schema"])]),_:1}),f,t(s,null,{default:n(()=>[t(l,{schema:{type:"array",nullable:!1,optional:!1,items:{type:"object",nullable:!1,optional:!1,ref:"UserDetailed",$ref:"misskey://UserDetailed"}}})]),_:1}),_])}var x=o(m,[["render",y],["__file","show-users.html.vue"]]);export{x as default};
