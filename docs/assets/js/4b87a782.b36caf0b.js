"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[6708],{6434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var o=t(6070),i=t(7468);const a={slug:"2024/11/11/xx-dapps",title:"Why dApps for xx Network",authors:["armchairancap"],tags:["xx network","xx chain"],description:"xx Network ",keywords:["xx network","chain","dapp","dapps","xx chain","blockchain"]},s=void 0,r={permalink:"/blog/2024/11/11/xx-dapps",source:"@site/blog/2024-11-11-xx-dapps.md",title:"Why dApps for xx Network",description:"xx Network ",date:"2024-11-11T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"}],readingTime:4.115,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/11/11/xx-dapps",title:"Why dApps for xx Network",authors:["armchairancap"],tags:["xx network","xx chain"],description:"xx Network ",keywords:["xx network","chain","dapp","dapps","xx chain","blockchain"]},unlisted:!1,prevItem:{title:"Dump block contents on xx chain with xxblockdumper",permalink:"/blog/2024/11/11/xx-chain-block-dumper"},nextItem:{title:"NFT-gated access on xx Network",permalink:"/blog/2023/11/05/xx-network-asset-gated-access"}},l={authorsImageUrls:[void 0]},h=[{value:"Intro",id:"intro",level:2},{value:"Building blocks",id:"building-blocks",level:2},{value:"Building dApps for xx Network",id:"building-dapps-for-xx-network",level:2},{value:"Good native chain",id:"good-native-chain",level:3},{value:"Native currency",id:"native-currency",level:3},{value:"Building use cases with these building blocks",id:"building-use-cases-with-these-building-blocks",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsxs)(n.p,{children:["As ",(0,o.jsx)(n.a,{href:"/blog/2024/11/01/my-hacktober-2024-activites",children:"Hacktoberfest 2024 just finished"})," and I've churned out some more or less coherent stuff for it, I want to share a few very short additional notes about it here."]}),"\n",(0,o.jsx)(n.h2,{id:"building-blocks",children:"Building blocks"}),"\n",(0,o.jsx)(n.p,{children:"xx Network has a mixnet (which in turn has an SDK called xxDK) which applications use to work with cMixx."}),"\n",(0,o.jsx)(n.p,{children:"xx chain is a Polkadot SDK-based (aka Substrate-based) chain which has its own ecosystem, libraries, API."}),"\n",(0,o.jsxs)(n.p,{children:["Applications can use xxDK to send messages on xx Network for free, so there's no need to write to xx chain or own XX coins. It is expected that only power-users ",(0,o.jsx)(n.a,{href:"/blog/2024/08/16/worldcoin-xx-postage#postage",children:"may have"})," the need to buy XX coin to pay, which is to say casual use should never require anything but xxDK."]}),"\n",(0,o.jsx)(n.p,{children:"What does that mean for dApp authors?"}),"\n",(0,o.jsx)(n.h2,{id:"building-dapps-for-xx-network",children:"Building dApps for xx Network"}),"\n",(0,o.jsx)(n.p,{children:"I think that means xx Network is a good platform for messaging dApps."}),"\n",(0,o.jsx)(n.h3,{id:"good-native-chain",children:"Good native chain"}),"\n",(0,o.jsxs)(n.p,{children:["xx Network is are one of very few networks that provide anonymous messaging ",(0,o.jsx)(n.em,{children:"and"})," have its own L1 chain to work with."]}),"\n",(0,o.jsxs)(n.p,{children:["xx Network has a ",(0,o.jsx)(n.em,{children:"good"})," (Substrate-based), fast, low-cost chain with plenty of features - from assets to governance - so for many purposes entire apps can be written to it."]}),"\n",(0,o.jsx)(n.p,{children:"Most other messaging guys have to write dApps for 3rd party chains - which we can do, too - and we do not. More choice."}),"\n",(0,o.jsxs)(n.p,{children:["The PoC code for ",(0,o.jsx)(n.a,{href:"/blog/2023/11/05/xx-network-asset-gated-access/",children:"XX token- and asset-gating"})," of Web sites shows how easy Polkadot-style dApps can work with xx Network - it wasn't too hard to modify the app for xx Network and add asset-gating. It would also be easy to modify that code to use asset-gating on other Substrate-based channels with asset support."]}),"\n",(0,o.jsx)(n.h3,{id:"native-currency",children:"Native currency"}),"\n",(0,o.jsx)(n.p,{children:"Most other chains don't have a native currency, so they have to pick a wallet and integrate with another chain."}),"\n",(0,o.jsx)(n.p,{children:"xxDK dApps can do that as well, but it's simple enough to use xx chain, especially if you need to handle postage that I mentioned earlier."}),"\n",(0,o.jsx)(n.p,{children:"Once XX coin gets listed on a DEX, it will be easy to acquire XX coin with any major crypto-currency and use it to pay postage (when it becomes available)."}),"\n",(0,o.jsx)(n.h2,{id:"building-use-cases-with-these-building-blocks",children:"Building use cases with these building blocks"}),"\n",(0,o.jsx)(n.p,{children:'I mentioned some of them in the token-gating post, but I\'ll make one additional example here to illustrate why I worked on those "building blocks" recently - we can put them together to build some simple dApps (or semi-dApps).'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["It is easy to download a file, but if you need to do it reasonably privately, you can use ",(0,o.jsx)(n.a,{href:"/blog/2024/10/29/xx-haven-with-tribler/#whats-tribler",children:"Tribler"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The challenge is getting the link equally (or more) privately"}),"\n",(0,o.jsx)(n.li,{children:"Find me in my Haven Space, pay me some coins, and I'll seed the file for you in Tribler (and give you the link). I can automate this completely as I explained in the Hacktoberfest post, or I can make it fully manual (which is necessary for on-demand items), semi-automated, or AI-powered"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"If you need even more privacy for downloads, you can park them on S3 and use an asset-gated Web site in the public cloud"}),"\n",(0,o.jsxs)(n.li,{children:["If you need even more privacy, you can run ",(0,o.jsx)(n.a,{href:"/blog/2024/05/08/can-securedrop-reinvent-the-wheel-probably-not/#how-it-could-be-done",children:"xx Haven container and Web service on Onion network"})]}),"\n",(0,o.jsx)(n.li,{children:"If you want to use a Web3 app without using public cloud, you can create an app that uses xxDK for chat and something like Crust Network to share content"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["With XX chain (or other Substrate-chain) asset-gating we an even serve the same content using ",(0,o.jsx)(n.a,{href:"https://github.com/armchairancap/polkadot-js-tokengated-website/issues/2",children:"different routes (links) for different membership levels"})," all on xx Network."]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"So we have everything you need and there's no need to use any other network, right?"}),"\n",(0,o.jsx)(n.p,{children:"Wrong! I'm not an XX coin maximalist, folks."}),"\n",(0,o.jsx)(n.p,{children:'I\'d never "encourage" you to use or buy XX coin. If you - a user or developer - think that it would help you, use it.'}),"\n",(0,o.jsx)(n.p,{children:"I only want to share why I think xx Network mixnet is quite unique in its approach. It does give you more flexibility and more convenience."}),"\n",(0,o.jsx)(n.p,{children:"Anyone can build for xxDK and use (or not) whatever crypto currency they like in their dApp. They can also use several - for example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"some currency which is their first choice"}),"\n",(0,o.jsx)(n.li,{children:"XX coin for xx Postage"}),"\n",(0,o.jsx)(n.li,{children:"Crust for blob storage"}),"\n",(0,o.jsx)(n.li,{children:"Ethereum for ENS (name and reputation)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Any permutation of these will work, and not having any coin will also work (Haven + Tribler, for example)."}),"\n",(0,o.jsx)(n.p,{children:"With just a couple of building blocks we can build reasonably private dApps."}),"\n",(0,o.jsx)(n.p,{children:"Some other building blocks I'd like to see (not a complete list):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Reputation (maybe through ENS)"}),"\n",(0,o.jsx)(n.li,{children:"Identity (maybe through Polkadot or ENS)"}),"\n",(0,o.jsx)(n.li,{children:"Blob integration (add xxDK chat to Crust app, or run Haven + Crust in the same browser tab)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you have own ideas, check out ",(0,o.jsx)(n.a,{href:"https://xxfoundation.org/xx-grants-program-reboot/",children:"the xx Foundation Grant program"})," or reach out on X or the XX Discord."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},7468:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(758);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);