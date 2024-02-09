"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[6098],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(y,s(s({ref:t},p),{},{components:a})):n.createElement(y,s({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const i={sidebar_position:1},s="Get started for Speakeasy admins",o={unversionedId:"speakeasy-admin-guide/get-started",id:"speakeasy-admin-guide/get-started",title:"Get started for Speakeasy admins",description:"This guide is intended for server administrators - people who manage Speakeasy Web servers.",source:"@site/docs/speakeasy-admin-guide/get-started.md",sourceDirName:"speakeasy-admin-guide",slug:"/speakeasy-admin-guide/get-started",permalink:"/docs/speakeasy-admin-guide/get-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"xx Network Speakeasy Admin's Guide",permalink:"/docs/category/xx-network-speakeasy-admins-guide"},next:{title:"Privacy and security",permalink:"/docs/speakeasy-admin-guide/privacy-and-security"}},l={},d=[{value:"Self-hosted vs. 3rd party Web server",id:"self-hosted-vs-3rd-party-web-server",level:2},{value:"High level overview of admin tasks",id:"high-level-overview-of-admin-tasks",level:2},{value:"What does Speakeasy admin not manage",id:"what-does-speakeasy-admin-not-manage",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started-for-speakeasy-admins"},"Get started for Speakeasy admins"),(0,r.kt)("p",null,"This guide is intended for server administrators - people who manage Speakeasy Web servers."),(0,r.kt)("p",null,"Individual users may create and administer channels, but user-side administration is covered in User Guide."),(0,r.kt)("p",null,"This documentation is based on Speakeasy v0.3.4."),(0,r.kt)("h2",{id:"self-hosted-vs-3rd-party-web-server"},"Self-hosted vs. 3rd party Web server"),(0,r.kt)("p",null,"Speakeasy is open source, but unlike with centralized deployments there's no significant distinction here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Self-hosted Web server is presumably more trustworthy (if your skills don't suck) and private (as far as knowing client's IP address is concerned)"),(0,r.kt)("li",{parentName:"ul"},"Speakeasy codename (identity) is global and portable across any endpoint on xx Network"),(0,r.kt)("li",{parentName:"ul"},"All data is client-side encrypted and stored replicated in databases of xx Network cMix gateway servers")),(0,r.kt)("p",null,"This means you can participate in the same conversations by using own Speakeasy Web server one day, friend's server the next, and xx Foundation-operated Speakeasy on weekends."),(0,r.kt)("h2",{id:"high-level-overview-of-admin-tasks"},"High level overview of admin tasks"),(0,r.kt)("p",null,"For administrators, one of the best things about Speakeasy is that it's extremely easy to manage."),(0,r.kt)("p",null,"Common Speakeasy server administrator tasks (excluding system or container platform administration) include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy and maintain Speakeasy Node.js app or Speakeasy container"),(0,r.kt)("li",{parentName:"ul"},"Deploy and manage HTTPS reverse proxy",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TLS certificate for Speakeasy"),(0,r.kt)("li",{parentName:"ul"},"HTTPS proxy administration"))),(0,r.kt)("li",{parentName:"ul"},"Deploy and maintain the Speakeasy container or Web application"),(0,r.kt)("li",{parentName:"ul"},"Generally, prevent tampering with OS, TLS certificate and application code")),(0,r.kt)("p",null,"Before we do this, we need to understand the security, privacy, cost, usability and other requirements of our users."),(0,r.kt)("h2",{id:"what-does-speakeasy-admin-not-manage"},"What does Speakeasy admin not manage"),(0,r.kt)("p",null,"Speakeasy Web server or container does ",(0,r.kt)("strong",{parentName:"p"},"not")," contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data (user or admin accounts, passwords, messages)"),(0,r.kt)("li",{parentName:"ul"},"Settings (application settings, chat channel definitions)")),(0,r.kt)("p",null,'There is no "application server admin" interface.'),(0,r.kt)("p",null,"This is why it is convenient to run Speakeasy: it is a stateless app that won't leak data, won't grow its data footprint, and requires almost zero maintenance."))}c.isMDXComponent=!0}}]);