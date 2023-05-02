"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[98],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(y,s(s({ref:t},p),{},{components:r})):a.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},s="Get started for Speakeasy admins",o={unversionedId:"speakeasy-admin-guide/get-started",id:"speakeasy-admin-guide/get-started",title:"Get started for Speakeasy admins",description:"This guide is intended for server administrators - people who manage Speakeasy Web servers.",source:"@site/docs/speakeasy-admin-guide/get-started.md",sourceDirName:"speakeasy-admin-guide",slug:"/speakeasy-admin-guide/get-started",permalink:"/docs/speakeasy-admin-guide/get-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/speakeasy-admin-guide/get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"xx Network Speakeasy Admin's Guide",permalink:"/docs/category/xx-network-speakeasy-admins-guide"},next:{title:"Privacy and security",permalink:"/docs/speakeasy-admin-guide/privacy-and-security"}},d={},l=[{value:"High level overview of admin tasks",id:"high-level-overview-of-admin-tasks",level:2}],p={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-started-for-speakeasy-admins"},"Get started for Speakeasy admins"),(0,n.kt)("p",null,"This guide is intended for server administrators - people who manage Speakeasy Web servers."),(0,n.kt)("p",null,"Individual users may create and administer channels, but user-side administration is covered in User Guide."),(0,n.kt)("p",null,"This documentation is based on Speakeasy v0.3.4."),(0,n.kt)("h2",{id:"high-level-overview-of-admin-tasks"},"High level overview of admin tasks"),(0,n.kt)("p",null,"For administrators, one of the best things about Speakeasy is that it's extremely easy to manage."),(0,n.kt)("p",null,"Common Speakeasy server administrator tasks (excluding system or container platform administration) include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deploy and maintain Node.js or containerized Speakeasy"),(0,n.kt)("li",{parentName:"ul"},"Deploy and manage HTTPS reverse proxy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TLS certificate for Speakeasy"),(0,n.kt)("li",{parentName:"ul"},"HTTPS proxy administration"))),(0,n.kt)("li",{parentName:"ul"},"Deploy and maintain the Speakeasy container or Web application")),(0,n.kt)("p",null,"Before we do this, we need to understand the security, privacy, cost, usability and other requirements of our users."))}c.isMDXComponent=!0}}]);