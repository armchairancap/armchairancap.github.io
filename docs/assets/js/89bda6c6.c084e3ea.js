"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),y=n,k=d["".concat(p,".").concat(y)]||d[y]||u[y]||s;return a?r.createElement(k,o(o({ref:t},l),{},{components:a})):r.createElement(k,o({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:2},o="Privacy and security",i={unversionedId:"speakeasy-admin-guide/privacy-and-security",id:"speakeasy-admin-guide/privacy-and-security",title:"Privacy and security",description:"Speakeasy administrators need to consider the privacy and security implications for their users.",source:"@site/docs/speakeasy-admin-guide/privacy-and-security.md",sourceDirName:"speakeasy-admin-guide",slug:"/speakeasy-admin-guide/privacy-and-security",permalink:"/docs/speakeasy-admin-guide/privacy-and-security",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/speakeasy-admin-guide/privacy-and-security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get started for Speakeasy admins",permalink:"/docs/speakeasy-admin-guide/get-started"},next:{title:"Deploy and maintain Speakeasy",permalink:"/docs/speakeasy-admin-guide/deploy-and-maintain"}},p={},c=[{value:"Speakeasy from user&#39;s perspective",id:"speakeasy-from-users-perspective",level:2},{value:"Client&#39;s outgoing network connections",id:"clients-outgoing-network-connections",level:2},{value:"Protect Speakeasy Web server from being compromised or taken over",id:"protect-speakeasy-web-server-from-being-compromised-or-taken-over",level:2},{value:"Avoid excessive logging",id:"avoid-excessive-logging",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"privacy-and-security"},"Privacy and security"),(0,n.kt)("p",null,"Speakeasy administrators need to consider the privacy and security implications for their users."),(0,n.kt)("p",null,"Some of the main objectives and concerns are shared below."),(0,n.kt)("p",null,"But before that, let's see how our deployment choices reflect on Speakeasy users."),(0,n.kt)("h2",{id:"speakeasy-from-users-perspective"},"Speakeasy from user's perspective"),(0,n.kt)("p",null,"From a user's perspective, Speakeasy infrastructure consists of two types of servers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Speakeasy Web server (can be self-hosted, doesn't handle and not in path of messaaging data)"),(0,n.kt)("li",{parentName:"ul"},"xx Network nodes (hundreds of community-run gateway nodes (see the ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.xx.network"},"xx Dashboard"),"), handle client-side encrypted data)")),(0,n.kt)("p",null,"Connecting to both of these is required to be able to send and receive messages on the xx Network."),(0,n.kt)("p",null,"How do different approaches compare?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3rd party Speakeasy Web server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Regular approach: exposes client's IP to the Web server operator and to xx Network gateways."),(0,n.kt)("li",{parentName:"ul"},"High privacy approach: client may use Socks5 proxy to access Speakeasy Web app ",(0,n.kt)("em",{parentName:"li"},"and")," the xx Network gateways. This option hides the client's IP from the Web server operator and also from the community-operated xx Network gateways."))),(0,n.kt)("li",{parentName:"ul"},"Self-hosted Speakeasy Web server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enhanced privacy: this is better than regular approach because the client's IP is known only to community-operated xx Network gateways."),(0,n.kt)("li",{parentName:"ul"},"Top privacy: host own Web server instance ",(0,n.kt)("em",{parentName:"li"},"and")," access the xx Network gateways through the The Onion Router (aka Tor; more secure, but slower) or a VPN (less secure, but faster). This doesn't identify you to Speakeasy Web site owner or 3rd parties as a Speakeasy user and also hides your client IP from the xx Network gateways. Because all traffic is routed via Tor (or Arti) or a VPN, user experience may be impacted depending on use case and network overheads.")))),(0,n.kt)("p",null,"If you recall this diagram, a proxy or VPN don't need to encrypt your data (it is encrypted client-side in Speakeasy) or hide connections between your chat buddies (that's done by xx Network) - it only hides your IP from xx Network and Speakeasy Web app server."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Speakeasy clients, servers and xx Network",src:a(9337).Z,width:"501",height:"282"})),(0,n.kt)("p",null,"As Speakeasy administrator, we can check user's requirements and preferences and deploy what's best for our user."),(0,n.kt)("p",null,"What else do Speakeasy admins need to consider?"),(0,n.kt)("h2",{id:"clients-outgoing-network-connections"},"Client's outgoing network connections"),(0,n.kt)("p",null,"Speakeasy client needs to connect to Speakeasy Web server to download the app (normally, tcp/443 to reverse HTTPS proxy) and then only outgoing connections to xx Network (normally the gateway servers running at tcp/22480, perhaps intially to cMix permissioning, tcp/443)."),(0,n.kt)("p",null,"These may be viewed in the browser or at OS level."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Speakeasy client&#39;s netwwork connections",src:a(8718).Z,width:"753",height:"556"})),(0,n.kt)("p",null,"If Socks5 proxy or VPN proxy is used to protect client's IP address, one or both of these connection types may exist only between that proxy and Speakeasy (or xx Network), while client may open several connections to its Socks5 proxy."),(0,n.kt)("h2",{id:"protect-speakeasy-web-server-from-being-compromised-or-taken-over"},"Protect Speakeasy Web server from being compromised or taken over"),(0,n.kt)("p",null,"The OS and application administrator(s) aim to keep Speakeasy Web server from being compromised or taken over."),(0,n.kt)("p",null,"A compromised server may result in code tampering and be used to attack the clients, but also leak the clients' IP addresses."),(0,n.kt)("h2",{id:"avoid-excessive-logging"},"Avoid excessive logging"),(0,n.kt)("p",null,"Excessive logging of client IP addresses doesn't protect their privacy."),(0,n.kt)("p",null,"While that doesn't leak data, it exposes metadata (IP addresses) and may help identify Speakeasy users. (This is still not enough to determine participants in a conversation or its contents, but increases the risk of identification and targeted attacks.)"),(0,n.kt)("p",null,"Client IP addresses may be logged by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OS (firewall)"),(0,n.kt)("li",{parentName:"ul"},"HTTPS (reverse proxy)"),(0,n.kt)("li",{parentName:"ul"},"Speakeasy Web application"),(0,n.kt)("li",{parentName:"ul"},"Log, analytics, observability applications (if any logs are forwarded)")),(0,n.kt)("p",null,"Do what you can to minimize or eliminate those."),(0,n.kt)("p",null,"Remember that each Speakeasy client can use a different (including own) Speakeasy Web server instance, which minimizes the blast radius."),(0,n.kt)("p",null,"One way to lessen the risk of client IP leaks is to run a public Speakeasy Web server, which means more traffic and potentially other risks, but creates additional noise in terms of clients' IP addresses."),(0,n.kt)("p",null,"Another is to encourage channel participants to use different Speakeasy servers."))}u.isMDXComponent=!0},8718:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/speakeasy-client-network-connections-88f6e52ef1d476a1647e36a1c81aeef4.png"},9337:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/speakeasy-network-6efbf44564ddb966e01b1b2da0637914.png"}}]);