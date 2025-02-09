"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[2669],{98219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(86070),s=n(27468);const a={slug:"2023/05/08/xx-network-wallet-sign-verify",title:"Sign and verify messages using xx Network wallet",authors:["armchairancap"],tags:["xx network","sign","verify","wallet"],description:"Use the official xx Network Web wallet to sign and verify messages",keywords:["xx network","cryptographically","sign","message","validate","signature"]},r="Sign and verify messages using xx Network wallet",l={permalink:"/blog/2023/05/08/xx-network-wallet-sign-verify",source:"@site/blog/2023-05-08-xx-network-wallet-sign-verify/index.md",title:"Sign and verify messages using xx Network wallet",description:"Use the official xx Network Web wallet to sign and verify messages",date:"2023-05-08T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"sign",permalink:"/blog/tags/sign"},{label:"verify",permalink:"/blog/tags/verify"},{label:"wallet",permalink:"/blog/tags/wallet"}],readingTime:1.085,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2023/05/08/xx-network-wallet-sign-verify",title:"Sign and verify messages using xx Network wallet",authors:["armchairancap"],tags:["xx network","sign","verify","wallet"],description:"Use the official xx Network Web wallet to sign and verify messages",keywords:["xx network","cryptographically","sign","message","validate","signature"]},unlisted:!1,prevItem:{title:"Case for xx Network chat link in security.txt",permalink:"/blog/2023/06/05/xx-network-chat-security-dot-txt"},nextItem:{title:"Install xx Network Haven",permalink:"/blog/2023/04/30/install-xx-network-haven"}},o={authorsImageUrls:[void 0]},c=[{value:"Sign",id:"sign",level:2},{value:"Verify",id:"verify",level:2},{value:"Non-deterministic signatures",id:"non-deterministic-signatures",level:2}];function d(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"sign",children:"Sign"}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.code,{children:"Developer"})," > ",(0,i.jsx)(t.code,{children:"Sign and Verify"})," > ",(0,i.jsx)(t.code,{children:"Sign message"})]}),"\n",(0,i.jsxs)(t.p,{children:['Pick an address ("wallet") to use and enter a message or other data you wish to sign with your wallet key to ',(0,i.jsx)(t.code,{children:"sign the following data"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This may be any text such as your Speakeasy codename, email address, etc."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Sign message from xx Network wallet",src:n(51471).A+"",width:"710",height:"402"})}),"\n",(0,i.jsxs)(t.p,{children:["Click on the copy icon to copy the signature (",(0,i.jsx)(t.code,{children:"signature of supplied data"}),") to clipboard."]}),"\n",(0,i.jsx)(t.h2,{id:"verify",children:"Verify"}),"\n",(0,i.jsxs)(t.p,{children:["To verify, go to ",(0,i.jsx)(t.code,{children:"Verify signature"})," rather than ",(0,i.jsx)(t.code,{children:"Sign and Verify"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Verify using address"})," means the signer's wallet address (so, usually not your own)."]}),"\n",(0,i.jsxs)(t.p,{children:["You need to provide the same wallet and message that you got, and if everything checks out, the icon next to ",(0,i.jsx)(t.code,{children:"the supplied signature"})," will become a green check mark."]}),"\n",(0,i.jsx)(t.p,{children:"Bad signatures will fail to verify."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Bad signature fails to verify",src:n(41780).A+"",width:"710",height:"402"})}),"\n",(0,i.jsx)(t.p,{children:"Bad data will also fail to verify against a correct signature."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Correct signature and content verify",src:n(62046).A+"",width:"710",height:"402"})}),"\n",(0,i.jsx)(t.p,{children:"To be successful, verification requires the same wallet, message data and signature that were used to generate the signature."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Correct verification",src:n(11479).A+"",width:"710",height:"402"})}),"\n",(0,i.jsx)(t.h2,{id:"non-deterministic-signatures",children:"Non-deterministic signatures"}),"\n",(0,i.jsx)(t.p,{children:"xx Network uses Schnorrkel (sr25519) which doesn't create deterministic signatures."}),"\n",(0,i.jsx)(t.p,{children:"For example, I created two additional signatures. Each time I got a valid, but different, signature to what I got in the first attempt."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"0x2a40ed0.......3187"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"0xdec0ed9.......b78f"})}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},51471:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/xx-network-wallet-sign-8da08f66d9202f2b160d42ac4464eff5.png"},41780:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/xx-network-wallet-verify-bad-hash-0663fee410bf7df525709e93e80dfa63.png"},62046:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/xx-network-wallet-verify-incomplete-f059411c8c7f93b658bd86ccde36d043.png"},11479:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/xx-network-wallet-verify-f61496bae4a508271925217cf5c3356e.png"},27468:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(30758);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);