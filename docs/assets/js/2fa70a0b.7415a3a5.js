"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[1220],{4323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(6070),o=t(7468);const s={sidebar_position:6},a="cMixx codename and external identities",r={id:"haven-user-guide/identity_external",title:"cMixx codename and external identities",description:"In previous section we talked about the native, portable xx Network identity from cMixx.",source:"@site/docs/haven-user-guide/identity_external.md",sourceDirName:"haven-user-guide",slug:"/haven-user-guide/identity_external",permalink:"/docs/haven-user-guide/identity_external",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Identity",permalink:"/docs/haven-user-guide/identity"},next:{title:"Use cases",permalink:"/docs/haven-user-guide/use-cases"}},d={},c=[{value:"Do you need that link",id:"do-you-need-that-link",level:2},{value:"Prove ownership of xx Network cMixx identity using xx Network Wallet",id:"prove-ownership-of-xx-network-cmixx-identity-using-xx-network-wallet",level:2},{value:"Prove ownership of xx Network cMixx identity using xx Network on-chain identity",id:"prove-ownership-of-xx-network-cmixx-identity-using-xx-network-on-chain-identity",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cmixx-codename-and-external-identities",children:"cMixx codename and external identities"}),"\n",(0,i.jsx)(n.p,{children:"In previous section we talked about the native, portable xx Network identity from cMixx."}),"\n",(0,i.jsx)(n.p,{children:"This section gives some pointers about linking your Haven identity with external identities."}),"\n",(0,i.jsx)(n.h2,{id:"do-you-need-that-link",children:"Do you need that link"}),"\n",(0,i.jsx)(n.p,{children:"The first thing to think about is do you really need that link?"}),"\n",(0,i.jsx)(n.p,{children:"It's a privacy risk, but here's why people normally do it:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prove ownership of external resource (xx Network wallet address, ENS, or other identity)."}),"\n",(0,i.jsx)(n.li,{children:"Prove ownership of xx Network cMixx identity (this works in the opposite direction, i.e. they use an external identity to announce their cMixx codename)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's take a look at some basic ways to do that."}),"\n",(0,i.jsx)(n.p,{children:"I'll mention just two to give you an idea."}),"\n",(0,i.jsx)(n.h2,{id:"prove-ownership-of-xx-network-cmixx-identity-using-xx-network-wallet",children:"Prove ownership of xx Network cMixx identity using xx Network Wallet"}),"\n",(0,i.jsx)(n.p,{children:"This works the same way on other chains, e.g. all Polkadot-based (Substrate) chains have this function in their wallet."}),"\n",(0,i.jsxs)(n.p,{children:["Go to xx Network wallet, ",(0,i.jsx)(n.code,{children:"Developer"})," > ",(0,i.jsx)(n.code,{children:"Sign"})," and sign your Haven codename (e.g. ",(0,i.jsx)(n.code,{children:"mrEngelbertHumperdinck"}),") using one of your wallet addresses (you may generate a new one, without any balance - please refer to Polkadot and xx Network wallet documentation)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign in xx Network wallet",src:t(5292).A+"",width:"970",height:"426"})}),"\n",(0,i.jsx)(n.p,{children:"Now these 3 things - the address that signed, the signed data, and the signature - can be shared with Bob via DM or in a Space."}),"\n",(0,i.jsxs)(n.p,{children:["To verify, Bob goes to ",(0,i.jsx)(n.code,{children:"Developer"})," > ",(0,i.jsx)(n.code,{children:"Verify"}),", pastes ",(0,i.jsx)(n.strong,{children:"Alice's"})," wallet address (because that's what was used to sign), ",(0,i.jsx)(n.code,{children:"mrEngelbertHumperdinck"})," and ",(0,i.jsx)(n.code,{children:"0x5c4677fbaa951341877f278c23fb77cb9ce67a64dbe974a8fa18b4b0947e056803332f1e13214224aaa53a21fb229f25d0e11191f4feba0582f8378c1b3c0981"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If it checks out, the green checkmark appears."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Validate signature in xx Network wallet",src:t(4257).A+"",width:"970",height:"426"})}),"\n",(0,i.jsx)(n.h2,{id:"prove-ownership-of-xx-network-cmixx-identity-using-xx-network-on-chain-identity",children:"Prove ownership of xx Network cMixx identity using xx Network on-chain identity"}),"\n",(0,i.jsxs)(n.p,{children:["You can put ",(0,i.jsx)(n.code,{children:"Haven: mrEngelbertHumperdinck"})," in your X profile, or some other place (Ethereum Name System, xx Network on-chain identity...)."]}),"\n",(0,i.jsx)(n.p,{children:"Note that xx Network's identity modal available in xx Network wallet does not have a key for xx Network identity."}),"\n",(0,i.jsxs)(n.p,{children:["Since all of the fields except ",(0,i.jsx)(n.code,{children:"display Name"})," are stored on xx chain, you can use any general text field you want, such as ",(0,i.jsx)(n.code,{children:"legal name"})," (you won't be able to use ",(0,i.jsx)(n.code,{children:"email"})," due to format validity checks)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"on-chain identity",src:t(548).A+"",width:"905",height:"636"})}),"\n",(0,i.jsx)(n.p,{children:"You need a small balance on your owning address to use this feature (a deposit plus a small xx chain transaction fee)."}),"\n",(0,i.jsxs)(n.p,{children:["In this case users can check your on chain identity by looking up the address. I am not sure if ",(0,i.jsx)(n.strong,{children:"duplicate"})," identities are allowed, so if I wanted to use this approach I'd try to create a duplicate one to make sure duplicates aren't allowed, or else I'd share my full wallet address to avoid confusion."]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},548:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/xx_network_on-chain_identity-455db79921c6056b2d6423ab9764f461.png"},5292:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/xx_screenshot_sign_link-1dc09cf4a5ffc6c55217335dfb2c6ef8.png"},4257:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/xx_screenshot_validate_signature-9518f9d61dd606acd88320fbc5679285.png"},7468:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(758);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);