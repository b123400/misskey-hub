import{_ as u,o as i,c as d,b as a,w as n,a as e,d as t,r}from"./app.798b97f6.js";const f={},c=e("h1",{id:"admin-queue-stats",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-queue-stats","aria-hidden":"true"},"#"),t(),e("code",null,"admin/queue/stats")],-1),p=e("p",null,"Credential required.",-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),b=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function _(C,Q){const l=r("MkApiConsole"),s=r("MkSchemaViewer"),o=r("ClientOnly");return i(),d("div",null,[c,p,a(l,{name:"admin/queue/stats",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{},required:[]},res:{type:"object",optional:!1,nullable:!1,properties:{deliver:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"},inbox:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"},db:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"},objectStorage:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"}},required:["deliver","inbox","db","objectStorage"]},errors:{}}}),h,a(o,null,{default:n(()=>[a(s,{schema:{type:"object",properties:{},required:[]}})]),_:1}),m,a(o,null,{default:n(()=>[a(s,{schema:{type:"object",optional:!1,nullable:!1,properties:{deliver:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"},inbox:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"},db:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"},objectStorage:{optional:!1,nullable:!1,ref:"QueueCount",$ref:"misskey://QueueCount"}},required:["deliver","inbox","db","objectStorage"]}})]),_:1}),b])}var k=u(f,[["render",_],["__file","stats.html.vue"]]);export{k as default};
