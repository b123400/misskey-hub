import{_ as c,o as i,c as h,b as r,w as s,a as e,d as n,r as a}from"./app.798b97f6.js";const u={},_=e("h1",{id:"i-read-announcement",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-read-announcement","aria-hidden":"true"},"#"),n(),e("code",null,"i/read-announcement")],-1),l=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),n(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),n(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),n(" Errors")],-1),b=e("h3",{id:"no-such-announcement",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-announcement","aria-hidden":"true"},"#"),n(" NO_SUCH_ANNOUNCEMENT")],-1),N=e("p",null,[n("ID: "),e("code",null,"184663db-df88-4bc2-8b52-fb85f0681939")],-1);function C(x,y){const d=a("MkApiConsole"),t=a("MkSchemaViewer"),o=a("ClientOnly");return i(),h("div",null,[_,l,r(d,{name:"i/read-announcement",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{announcementId:{type:"string",format:"misskey:id"}},required:["announcementId"]},res:{},errors:{"184663db-df88-4bc2-8b52-fb85f0681939":{id:"184663db-df88-4bc2-8b52-fb85f0681939",code:"NO_SUCH_ANNOUNCEMENT",description:""}}}}),m,r(o,null,{default:s(()=>[r(t,{schema:{type:"object",properties:{announcementId:{type:"string",format:"misskey:id"}},required:["announcementId"]}})]),_:1}),p,r(o,null,{default:s(()=>[r(t,{schema:{}})]),_:1}),f,b,N])}var E=c(u,[["render",C],["__file","read-announcement.html.vue"]]);export{E as default};
