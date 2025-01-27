"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[7032],{8229:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(6070),a=o(7468);const i={slug:"2025/01/23/xx-network-armchairancap-pool-elected",title:"First anti-pool pool node elected",authors:["armchairancap"],tags:["xx network","xx chain","economics"],description:"First anti-pool node has been elected, see what happens next",keywords:["xx network","economics","validator","stake","nominating","recommendation","pool","ethics"]},s=void 0,l={permalink:"/blog/2025/01/23/xx-network-armchairancap-pool-elected",source:"@site/blog/2025-01-23-xx-network-armchairancap-pool-first-elected.md",title:"First anti-pool pool node elected",description:"First anti-pool node has been elected, see what happens next",date:"2025-01-23T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"},{label:"economics",permalink:"/blog/tags/economics"}],readingTime:3.235,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2025/01/23/xx-network-armchairancap-pool-elected",title:"First anti-pool pool node elected",authors:["armchairancap"],tags:["xx network","xx chain","economics"],description:"First anti-pool node has been elected, see what happens next",keywords:["xx network","economics","validator","stake","nominating","recommendation","pool","ethics"]},unlisted:!1,prevItem:{title:"Update on pool-blocking progress",permalink:"/blog/2025/01/27/xx-network-armchairancap-pool-blocking-update"},nextItem:{title:"An attempt to address validator centralization problem",permalink:"/blog/2025/01/06/xx-network-armchairancap-pool"}},r={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Details",id:"details",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Economics",id:"economics",level:2},{value:"Summary",id:"summary",level:2},{value:"Appendix A - Updates",id:"appendix-a---updates",level:2},{value:"Update 1",id:"update-1",level:3},{value:"Update 2",id:"update-2",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["As described ",(0,t.jsx)(n.a,{href:"/blog/2025/01/06/xx-network-armchairancap-pool",children:"here"}),", xx Network community has a socialism problem, so Plan B is needed."]}),"\n",(0,t.jsx)(n.p,{children:"To that end I'm standing up own validator nodes that block pool nodes on xx Network."}),"\n",(0,t.jsxs)(n.p,{children:["It took me longer than planned, but ",(0,t.jsx)(n.a,{href:"https://wallet.xx.network/#/staking/query/6ZtD5PG1AEHiKiVWWGJkLU9jG4wemR7kzwVJVxcRf7pmVNYp",children:"the first node"})," has been elected for era 1162 (which starts in approximately four hours)."]}),"\n",(0,t.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The node (",(0,t.jsx)(n.code,{children:"6ZtD5PG1AEHiKiVWWGJkLU9jG4wemR7kzwVJVxcRf7pmVNYp"}),") is expected to earn less than usual due to blocking its peers, but I plan to lower commission to compensate for that"]}),"\n",(0,t.jsx)(n.li,{children:"I don't know if it can actually work (we'll find out once next era begins), so nominations may be blocked for an hour or two until I confirm it's running fine"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The second node is ",(0,t.jsx)(n.code,{children:"6VwagCwDNYm7TqeBESxEwW6C7PG21zybos645GwetmZ154nE"}),", currently in Waiting."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Update:\nNomination on both nodes are now open, as the first node seems fine and the second one, configured the same way, should be okay as well."})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"I want to see the first node work properly, which may require some troubleshooting once next era begins."}),"\n",(0,t.jsx)(n.p,{children:"I plan to let this node run for 1-2 eras to calibrate it and estimate its earnings."}),"\n",(0,t.jsx)(n.p,{children:"In parallel, I'll gather a list of pool nodes my node will be blocking. Their IPs will be published in a Github repository together with instructions on how those who may be interested can block and unblock such nodes on their node and. This will also serve as my main transparency tool for ethical nominators."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Update:\nI've checked and concluded it's not advisable to publish IPs, so the repository will start with on-chain node names and cMix IDs. See Updates below for repository information."})}),"\n",(0,t.jsx)(n.p,{children:"Then blocking will be introduced and I'll find an apropriate level of validator commission for my node."}),"\n",(0,t.jsx)(n.p,{children:"Finally, the node will have its on-chain identity and link to this blog published and unblock nominations."}),"\n",(0,t.jsx)(n.p,{children:"Depending on nominations (or a lack thereof), I may nominate the second node myself."}),"\n",(0,t.jsx)(n.h2,{id:"economics",children:"Economics"}),"\n",(0,t.jsx)(n.p,{children:"Ideally I will block as many pool nodes as possible while staying at ~15% yield, but if I cannot block all of them I'll block as many as I can while making the pool nomination-worthy."}),"\n",(0,t.jsx)(n.p,{children:"The idea is to grow the pool rather than block all pools right away. With just one or two validators, you can't block 50 validators and expect to be nomination-worthy. But I can have a low commission (say, 5%), block 10 validators, and remain commission worthy, and grow to more nodes which can then block more pool members."}),"\n",(0,t.jsx)(n.p,{children:"After deducting my expenses, all earnigns will be unbound and sold at market price so that I can fund as many nodes as possible for as long as the community allows pools to operate (including my own). I've never sold xx coins I earned (which is why I have enough to nominate nodes on my own), but I can't scale the pool without funding its operations."}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:'The xx Network community is dominated by a cohort of "Marxxists" and a Validator Industrial Complex, so ethical community members have to find a way to stop them.'}),"\n",(0,t.jsx)(n.p,{children:"I'll post small updates on the first node below, and a new post once there's some progress regarding next steps above."}),"\n",(0,t.jsxs)(n.p,{children:["Follow me on ",(0,t.jsx)(n.a,{href:"https://x.com/armchairancap",children:"X"})," or revisit this blog for updates on this matter."]}),"\n",(0,t.jsx)(n.h2,{id:"appendix-a---updates",children:"Appendix A - Updates"}),"\n",(0,t.jsx)(n.h3,{id:"update-1",children:"Update 1"}),"\n",(0,t.jsx)(n.p,{children:"I encountered minor problems (firewall, of course) and it took me 30 minutes to start, but the node is performing well."}),"\n",(0,t.jsx)(n.p,{children:"Additional nodes may be deployed sooner than expected. CHARLIE is awaiting nominations, and I've started working on BRAVO and DELTA."}),"\n",(0,t.jsx)(n.h3,{id:"update-2",children:"Update 2"}),"\n",(0,t.jsxs)(n.p,{children:["I put online a guide for blocking large centralized pools. Find it at ",(0,t.jsx)(n.a,{href:"https://github.com/armchairancap/xx-pool-notes",children:"https://github.com/armchairancap/xx-pool-notes"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"I plan to use it myself, but anyone who finds validation with 5 or more nodes objectionable can use it as a guide to easy and safe blocking of such bad actors."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7468:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(758);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);