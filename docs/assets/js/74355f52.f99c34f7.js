"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[940],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=n.createContext({}),d=function(e){var t=n.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(A.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,A=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,y=u["".concat(A,".").concat(p)]||u[p]||c[p]||o;return a?n.createElement(y,i(i({ref:t},l),{},{components:a})):n.createElement(y,i({ref:t},l))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5},i="Identity",s={unversionedId:"speakeasy-user-guide/identity",id:"speakeasy-user-guide/identity",title:"Identity",description:"Create identity",source:"@site/docs/speakeasy-user-guide/identity.md",sourceDirName:"speakeasy-user-guide",slug:"/speakeasy-user-guide/identity",permalink:"/docs/speakeasy-user-guide/identity",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/speakeasy-user-guide/identity.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Channels",permalink:"/docs/speakeasy-user-guide/channels"},next:{title:"Use cases",permalink:"/docs/speakeasy-user-guide/use-cases"}},A={},d=[{value:"Create identity",id:"create-identity",level:2},{value:"Backup identity",id:"backup-identity",level:2},{value:"Restore identity",id:"restore-identity",level:2},{value:"Login",id:"login",level:2},{value:"Clear browser cache and identity traces",id:"clear-browser-cache-and-identity-traces",level:2}],l={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"identity"},"Identity"),(0,r.kt)("h2",{id:"create-identity"},"Create identity"),(0,r.kt)("p",null,"You may create an unlimited number of identities, but most users would have one or two."),(0,r.kt)("p",null,"To create a ",(0,r.kt)("strong",{parentName:"p"},"new")," Speakeasy identity (codename):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"access Speakeasy from a browser for the first time ever, or "),(0,r.kt)("li",{parentName:"ul"},"clear cache of a browser you used to access Speakeasy before, or"),(0,r.kt)("li",{parentName:"ul"},"create a new profile in your main browser and create identity to be used from that profile, or"),(0,r.kt)("li",{parentName:"ul"},"access a new Speakseasy server (URL)")),(0,r.kt)("p",null,"When a Speakeasy site is accessed without browser cache, the user is asked to create a password and (next step) pick a codename, which is a unique identity on xx Network."),(0,r.kt)("p",null,"Speakeasy identity should be protected with a ",(0,r.kt)("a",{parentName:"p",href:"https://duckduckgo.com/?q=password+complexity+recommendations"},"strong")," password."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pick a password to protect codename",src:a(4191).Z,width:"332",height:"194"})),(0,r.kt)("p",null,"In the next step you're given a choice of randomly selected codenames. You can move forward (",(0,r.kt)("inlineCode",{parentName:"p"},"Discover more"),") to view additional choices, but cannot go back."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pick a codename",src:a(5708).Z,width:"963",height:"674"})),(0,r.kt)("p",null,"When the browser determines an encrypted identity cache exists for the site, it will simply prompt the user to enter a password. "),(0,r.kt)("p",null,"If you don't want that, log in with existing identity, and log out using application menu (which clears application cache). Or manually clear browser cache and try again."),(0,r.kt)("h2",{id:"backup-identity"},"Backup identity"),(0,r.kt)("p",null,"To backup a Speakeasy identity, go to application settings (gear wheel icon) and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Export my codename"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Export my codename",src:a(5960).Z,width:"607",height:"304"})),(0,r.kt)("p",null,"That will export your identity to a JSON file. Identity files should be protected with a strong password."),(0,r.kt)("p",null,"If you use a very strong password (example: 24 alphanumeric characters with mixed case letters), it is safe to keep the identity file on your personal S3 bucket or filesystem."),(0,r.kt)("p",null,"If you use a weak password (example: 10 digits), even sending the JSON file to yourself by email may be risky."),(0,r.kt)("p",null,"It is recommended to store exported identity in a password manager and not leave identity file on a system not under your exclusive control."),(0,r.kt)("h2",{id:"restore-identity"},"Restore identity"),(0,r.kt)("p",null,"To restore an identity, load the identity file and enter the identity file password to decrypt it."),(0,r.kt)("p",null,"It is not currently possible to load multiple identities in one and the same browser session."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To use two or more Speakeasy identities, access Speakeasy from mutiple browsers. Same browser with different profiles may also work.")),(0,r.kt)("p",null,"Identities are portable across Speakeasy servers, so one can change the server without creating another identity."),(0,r.kt)("h2",{id:"login"},"Login"),(0,r.kt)("p",null,"If you close the browser without clearing its cache, next time you access the site you'll be prompted to provide a password to decrypt data stored in browser cache and restore codename. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enter password to decrypt browser cache and restore codename",src:a(5341).Z,width:"343",height:"204"})),(0,r.kt)("p",null,"If you want to make regaining access to Speakeasy and its data harder, read on!"),(0,r.kt)("h2",{id:"clear-browser-cache-and-identity-traces"},"Clear browser cache and identity traces"),(0,r.kt)("p",null,"Speakeasy data is encrypted in browser storage, so as long as the password used to protect your identity is ",(0,r.kt)("a",{parentName:"p",href:"https://duckduckgo.com/?q=password+complexity+recommendations"},"strong")," you may simply close the browser when done."),(0,r.kt)("p",null,"For best security (especially on systems not under your control), log out of Speakeasy before closing the browser by clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Logout")," in application settings. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logout",src:a(5960).Z,width:"607",height:"304"})),(0,r.kt)("p",null,"Downsides of this approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the next time you use Speakeasy you will need to restore your identity (upload your decrypted identity file) and add each channel"),(0,r.kt)("li",{parentName:"ul"},"chat history of each channel has to be downloaded again")),(0,r.kt)("p",null,"If away from your home, it may be safer to log out. But you may not have your private chat links with you."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Store channel links and passphrases in your password manager.")))}c.isMDXComponent=!0},5708:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/codename-choices-5c9c588ae94e26a1bc741ec30dc85d3a.png"},5960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/export-my-codename-b94767a8eb561ebf86d5c16071df6b75.png"},4191:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},5341:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);