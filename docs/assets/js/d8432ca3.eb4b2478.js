"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[8109],{79344:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=o(86070),i=o(27468);const a={slug:"2025/01/06/xx-network-armchairancap-pool",title:"An attempt to address validator centralization problem",authors:["armchairancap"],tags:["xx network","xx chain","economics"],description:"Plan B to annoy and deter",keywords:["xx network","economics","validator","stake","nominating","recommendation","pool","ethics"]},s=void 0,r={permalink:"/blog/2025/01/06/xx-network-armchairancap-pool",source:"@site/blog/2025-01-06-xx-network-armchairancap-pool.md",title:"An attempt to address validator centralization problem",description:"Plan B to annoy and deter",date:"2025-01-06T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"},{label:"economics",permalink:"/blog/tags/economics"}],readingTime:6.915,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2025/01/06/xx-network-armchairancap-pool",title:"An attempt to address validator centralization problem",authors:["armchairancap"],tags:["xx network","xx chain","economics"],description:"Plan B to annoy and deter",keywords:["xx network","economics","validator","stake","nominating","recommendation","pool","ethics"]},unlisted:!1,prevItem:{title:"First anti-pool pool node elected",permalink:"/blog/2025/01/23/xx-network-armchairancap-pool-elected"},nextItem:{title:"First pass of nomination-worthy xx Network validators (2025/01/04)",permalink:"/blog/2025/01/04/xx-network-initial-validator-list-for-due-dilligence"}},l={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Plan B vs Plan A",id:"plan-b-vs-plan-a",level:2},{value:"Success criteria",id:"success-criteria",level:2},{value:"How it&#39;s going to work",id:"how-its-going-to-work",level:2},{value:"Process",id:"process",level:3},{value:"Participation",id:"participation",level:2},{value:"Ethics of blocking (and not)",id:"ethics-of-blocking-and-not",level:2},{value:"Will it work?",id:"will-it-work",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#plan-b-vs-plan-a",children:"Plan B vs Plan A"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#success-criteria",children:"Success criteria"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#how-its-going-to-work",children:"How it's going to work"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#process",children:"Process"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#participation",children:"Participation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ethics-of-blocking-and-not",children:"Ethics of blocking (and not)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#will-it-work",children:"Will it work?"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Recently I've written about various governance issues related to xx Network and other similar DAOs, such as Polkadot."}),"\n",(0,t.jsx)(n.p,{children:"One big problem - not yet critical, but certainly one of the more significant problems on xx Network - is the issue of centralization and validator pools."}),"\n",(0,t.jsx)(n.p,{children:"If you're interested, skim through these."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/blog/2024/12/10/xx-referendum-id-27-min-validator-stake",children:"xx Network referendum (ID 27) on hiking the minimum validator stake"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/blog/2025/01/04/xx-network-initial-validator-list-for-due-dilligence",children:"First pass of nomination-worthy xx Network validators (2025/01/04)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/blog/2024/12/15/why-polkadot-governance-sucks",children:"Why Polkadot governance sucks"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A way to fix some of these problems ",(0,t.jsx)(n.em,{children:"within the community"})," and without attempting to use the useless Democracy feature or hope that the Foundation does something was proposed ",(0,t.jsx)(n.a,{href:"/blog/2024/11/28/xx-validators-shall-we-play-a-game",children:"in this post"}),". I'll refer to it as Plan A."]}),"\n",(0,t.jsx)(n.p,{children:"I'm pleased to report that zero (0) people joined my attempt to execute Plan A. (Just as expected, I might add - it's not that different from Polkadot governance issues described above.)"}),"\n",(0,t.jsx)(n.p,{children:"This is about my next attempt and this time I'll do it myself because both those who are paid to do something about it and xx Network governance have failed me."}),"\n",(0,t.jsx)(n.h2,{id:"plan-b-vs-plan-a",children:"Plan B vs Plan A"}),"\n",(0,t.jsx)(n.p,{children:"With Plan A, I tried to fund others to block IPs of pool nodes. That was actually a great plan, but the community sucks and/or is disengaged."}),"\n",(0,t.jsx)(n.p,{children:"With Plan B, I'm just going to do it myself. The idea is the same: annoy and economically hurt centralizing sock-puppet node farmers. To do that, I need to build a farm of blocking validator nodes."}),"\n",(0,t.jsx)(n.h2,{id:"success-criteria",children:"Success criteria"}),"\n",(0,t.jsx)(n.p,{children:"I won't have enough nodes to make a big impact, so the effects of this won't be significant."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"This is one of the reasons Plan A was great - it seeked to pay other validators who already have validator nodes ready."}),(0,t.jsx)(n.p,{children:"If the Foundation had any sense, they would have not just rejected pools, but also fund a validator compensation program to pay everyone to execute Plan A on their behalf."})]}),"\n",(0,t.jsxs)(n.p,{children:["But I also don't ",(0,t.jsx)(n.em,{children:"need"})," to make a big impact. It's enough to get noticed, so that is key: get noticed and raise awareness about the problem."]}),"\n",(0,t.jsx)(n.p,{children:'If I make some pool runners give up or change node names to "hide" them, that would be even better.'}),"\n",(0,t.jsxs)(n.p,{children:["Blocking and annoying centralizing pools can't ",(0,t.jsx)(n.em,{children:"fix"})," the problem: the moment I stop doing this, they'll start coming back. It has to be fixed through the currently failing governance and the Foundation."]}),"\n",(0,t.jsx)(n.p,{children:"I don't run either of those, so all I can do is make noise about outside the community, because inside I've already tried and failed."}),"\n",(0,t.jsx)(n.p,{children:"I may run this experiment for weeks or months, depending on how I feel about it."}),"\n",(0,t.jsx)(n.h2,{id:"how-its-going-to-work",children:"How it's going to work"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I will stand up one or more validator node(s)"}),"\n",(0,t.jsx)(n.li,{children:"Validator commission will be low (I don't know how low, but likely single-digit)"}),"\n",(0,t.jsxs)(n.li,{children:["Validator nodes will block all ",(0,t.jsx)(n.strong,{children:"obvious"})," pool members (",(0,t.jsx)(n.code,{children:"MONEYTEAM"}),", etc.) so that they fail cMix rounds where my pool nodes participate"]}),"\n",(0,t.jsxs)(n.li,{children:["(TBD) Block all ",(0,t.jsx)(n.strong,{children:"non-obvious"})," pools. It takes time and effort to find them, so this is a low-priority item now. I'll go for the low-hanging fruit first."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Now, one node out of 370 won't matter. At most it will result in slightly more failed rounds (in pre-comp stage, for now at least) than normal and be barely noticeable."}),"\n",(0,t.jsx)(n.p,{children:"But if I get to four active nodes, that's more than one percent of all validators and may become annoying to poo runners. Whether or not I'll get there depends on how many nominations I can get."}),"\n",(0,t.jsx)(n.p,{children:"Eight nodes would be great, but that needs 1.7 MXX so it's harder to achieve. It may be possible if I target just one of the obvious pools (rather than all)."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The new node(s) will have the on-chain ID ",(0,t.jsx)(n.code,{children:"ARMCHAIRANCAP/{NODE_NAME}"})," and be nominated by ",(0,t.jsx)(n.code,{children:"ARMCHAIRANCAP"})," and/or its proxy wallet ",(0,t.jsx)(n.code,{children:"ARMCHAIRANCAP/ArmchairAncap-Proxy-Wallet"})," (",(0,t.jsx)(n.code,{children:"6VMBPjeLHTM5qerw2zJCHs9t3VyeChf2MiE35MesLRxkb1wW"}),")."]}),(0,t.jsx)(n.p,{children:"If I make any changes, I'll update this information."})]}),"\n",(0,t.jsx)(n.h3,{id:"process",children:"Process"}),"\n",(0,t.jsx)(n.p,{children:"I will first stand up one node and run it for an era or two to calibrate it (see how much it earns, etc.)."}),"\n",(0,t.jsx)(n.p,{children:"Then I'll start blocking pools, observe my own earnings, the blocked pools' earnings and adjust my validator commission so that I can break even on hosting costs."}),"\n",(0,t.jsx)(n.p,{children:"I figure that if my nodes fail 25% of all rounds I could break even. Obviously:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"My oppportunity cost is the loss of profits which I would make by normally validating and nominating"}),"\n",(0,t.jsx)(n.li,{children:"I can't have 16 nodes that do that because I can't nominate 16 nodes on my own (that would take close to 3 MXX in nominations)"}),"\n",(0,t.jsx)(n.li,{children:"Even with a very low comission, my nodes may not yield enough to compensate for failed rounds, so I I may or may not attract other nominators"}),"\n",(0,t.jsx)(n.li,{children:"Because there won't be much (or any) profit, I'll sell all earnings the day they're made to pay for hosting"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If my node(s) profit rate for nominators be very low (e.g. 8% APR), then they're unlikely to attract any nominators used to 16% or even higher APR."}),"\n",(0,t.jsx)(n.p,{children:"Maybe I'll get to two or four or more nodes, but it's not likely."}),"\n",(0,t.jsx)(n.h2,{id:"participation",children:"Participation"}),"\n",(0,t.jsxs)(n.p,{children:["In Plan A, I wanted to pay people to block pools. That didn't work, but I'll be checking my ",(0,t.jsx)(n.a,{href:"/xx-directory#armchairancaps-channels",children:"chat space"})," every now and then, to see if anyone wants to reach out."]}),"\n",(0,t.jsxs)(n.p,{children:["Space participants may be asked to ",(0,t.jsx)(n.a,{href:"/blog/2024/11/28/xx-validators-shall-we-play-a-game#how-to-sign-your-wallet-address",children:"sign their Haven handle"})," using their address in xx Network wallet, so that I don't have to guess how many XX tokens you have or if you really are a validator."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Why do I need to know how many tokens you have?"}),(0,t.jsx)(n.p,{children:"I actually don't care, but if you feel the need to discuss something from a validator or nominator perspective, I'll probably ask you to sign your Haven identify from your wallet, so that we can see if you're actually who you are or just an airdrop guy with 147.2753 XX in your wallet."})]}),"\n",(0,t.jsx)(n.p,{children:"Here's what I'm interested in:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prospective nominators (especially with 1 MXX or more) which would allow me to run 8 or more nodes"}),"\n",(0,t.jsx)(n.li,{children:"Help with identifying non-obvious pool runners"}),"\n",(0,t.jsx)(n.li,{children:"Validators and nominators interested in discussing ideas for fixing this problem"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ethics-of-blocking-and-not",children:"Ethics of blocking (and not)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Is it ethical to block pools? Absolutely! They have a negative effect on the security of the network."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["All validators should run less nodes than a cMix round has, which is five. If I get enough nominations, should I run more than four nodes? I think as long as it is obvious that ",(0,t.jsx)(n.em,{children:"others"})," do it without declaring it (run more than 4 nodes, that is), there's no harm in me doing it transparently and with the sole purpose of stopping it. At any rate, I'd like to know what arguments those who don't think centralized pools are bad may have against my pool."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Is it ethical that the Foundation and the Technical Committee are not addressing this problem? I would say not, especially when it comes to ",(0,t.jsx)(n.em,{children:"paid"})," officers of the Foundation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"will-it-work",children:"Will it work?"}),"\n",(0,t.jsx)(n.p,{children:'It doesn\'t matter. To me, the question is "should I try?" and the answer is "of course!"'}),"\n",(0,t.jsxs)(n.p,{children:["That said, if it doesn't work out, this is probably the last thing I'll try before I become a \"passive supporter\" and move on to participating in functioning communities. I don't ",(0,t.jsx)(n.em,{children:"have"})," to be here!"]}),"\n",(0,t.jsx)(n.p,{children:"The Foundation, the Technical Committee and xx coin holders have the right and responsibility to manage the network. The Foundation should actively fight pools and use any means necessary to ban all wallets that belong to individuals with five or more nodes. Sadly, they're not doing it. (I would be less surprised if they banned my pool and I don't mind - that would bring my experiment to conclusion sooner.)"}),"\n",(0,t.jsx)(n.p,{children:'Depending on how this turns out (I don\'t mean "whether I find any nominators", but whether this issue gets addressed by the DAO or the Foundation) this may be the last thing I will do for the project with own money and time.'})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},27468:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(30758);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);