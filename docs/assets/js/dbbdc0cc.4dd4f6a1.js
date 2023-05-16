"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[51],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,f=g["".concat(o,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const i={slug:"2023/05/08/xx-network-wallet-sign-verify",title:"Sign and verify messages using xx Network wallet",authors:["armchairancap"],tags:["xx network","sign","verify","wallet"],description:"Use the official xx Network Web wallet to sign and verify messages",keywords:["xx network","cryptographically","sign","message","validate","signature"]},l="Sign and verify messages using xx Network wallet",s={permalink:"/blog/2023/05/08/xx-network-wallet-sign-verify",source:"@site/blog/2023-05-08-xx-network-wallet-sign-verify/index.md",title:"Sign and verify messages using xx Network wallet",description:"Use the official xx Network Web wallet to sign and verify messages",date:"2023-05-08T00:00:00.000Z",formattedDate:"May 8, 2023",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"sign",permalink:"/blog/tags/sign"},{label:"verify",permalink:"/blog/tags/verify"},{label:"wallet",permalink:"/blog/tags/wallet"}],readingTime:1.085,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2023/05/08/xx-network-wallet-sign-verify",title:"Sign and verify messages using xx Network wallet",authors:["armchairancap"],tags:["xx network","sign","verify","wallet"],description:"Use the official xx Network Web wallet to sign and verify messages",keywords:["xx network","cryptographically","sign","message","validate","signature"]},nextItem:{title:"Install own xx Network Speakeasy Web server",permalink:"/blog/2023/04/30/install-xx-network-speakeasy"}},o={authorsImageUrls:[void 0]},c=[{value:"Sign",id:"sign",level:2},{value:"Verify",id:"verify",level:2},{value:"Non-deterministic signatures",id:"non-deterministic-signatures",level:2}],p={toc:c},g="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(g,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sign"},"Sign"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign and Verify")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign message")),(0,r.kt)("p",null,'Pick an address ("wallet") to use and enter a message or other data you wish to sign with your wallet key to ',(0,r.kt)("inlineCode",{parentName:"p"},"sign the following data"),". "),(0,r.kt)("p",null,"This may be any text such as your Speakeasy codename, email address, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign message from xx Network wallet",src:n(7744).Z,width:"710",height:"402"})),(0,r.kt)("p",null,"Click on the copy icon to copy the signature (",(0,r.kt)("inlineCode",{parentName:"p"},"signature of supplied data"),") to clipboard. "),(0,r.kt)("h2",{id:"verify"},"Verify"),(0,r.kt)("p",null,"To verify, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Verify signature")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign and Verify"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Verify using address")," means the signer's wallet address (so, usually not your own)."),(0,r.kt)("p",null,"You need to provide the same wallet and message that you got, and if everything checks out, the icon next to ",(0,r.kt)("inlineCode",{parentName:"p"},"the supplied signature")," will become a green check mark."),(0,r.kt)("p",null,"Bad signatures will fail to verify."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bad signature fails to verify",src:n(6910).Z,width:"710",height:"402"})),(0,r.kt)("p",null,"Bad data will also fail to verify against a correct signature."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Correct signature and content verify",src:n(4932).Z,width:"710",height:"402"})),(0,r.kt)("p",null,"To be successful, verification requires the same wallet, message data and signature that were used to generate the signature."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Correct verification",src:n(4938).Z,width:"710",height:"402"})),(0,r.kt)("h2",{id:"non-deterministic-signatures"},"Non-deterministic signatures"),(0,r.kt)("p",null,"xx Network uses Schnorrkel (sr25519) which doesn't create deterministic signatures."),(0,r.kt)("p",null,"For example, I created two additional signatures. Each time I got a valid, but different, signature to what I got in the first attempt."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x2a40ed0.......3187")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0xdec0ed9.......b78f"))))}u.isMDXComponent=!0},7744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xx-network-wallet-sign-8da08f66d9202f2b160d42ac4464eff5.png"},6910:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xx-network-wallet-verify-bad-hash-0663fee410bf7df525709e93e80dfa63.png"},4932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xx-network-wallet-verify-incomplete-f059411c8c7f93b658bd86ccde36d043.png"},4938:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xx-network-wallet-verify-f61496bae4a508271925217cf5c3356e.png"}}]);