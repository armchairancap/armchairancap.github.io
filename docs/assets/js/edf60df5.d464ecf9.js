"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[2587],{60210:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=o(86070),a=o(27468);const s={slug:"2024/08/16/worldcoin-xx-postage",title:"Worldcoin and xx Network postage",authors:["armchairancap"],tags:["xx network"],description:"Thoughts on Worldcoin integrations and xx Network postage",keywords:["xx network","economics","worldcoin","cmix","postage"]},r=void 0,i={permalink:"/blog/2024/08/16/worldcoin-xx-postage",source:"@site/blog/2024-08-16-worldcoin-xx-postage.md",title:"Worldcoin and xx Network postage",description:"Thoughts on Worldcoin integrations and xx Network postage",date:"2024-08-16T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"}],readingTime:10.045,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/08/16/worldcoin-xx-postage",title:"Worldcoin and xx Network postage",authors:["armchairancap"],tags:["xx network"],description:"Thoughts on Worldcoin integrations and xx Network postage",keywords:["xx network","economics","worldcoin","cmix","postage"]},unlisted:!1,prevItem:{title:"A comparison between Nym and xx Network",permalink:"/blog/2024/08/20/nym-vs-xxnetwork"},nextItem:{title:"xx Network client uses CTIDH PQ algo now",permalink:"/blog/2024/06/06/xx-network-client-switches-to-pq-ctidh"}},l={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"Postage",id:"postage",level:2},{value:"Why pay postage",id:"why-pay-postage",level:2},{value:"Node operators and permissionless postage",id:"node-operators-and-permissionless-postage",level:2},{value:"Final thoughts",id:"final-thoughts",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"DISCLAIMER:"})," this is not investment advice. I've no idea what will happen and I don't recommend anything."]}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"xx Network has been around for years and has users, but not very many because:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["many Web3 and coin projects suffer from Not Invented Here syndrome (",(0,n.jsx)(t.a,{href:"http://localhost:3000/blog/2024/05/08/can-securedrop-reinvent-the-wheel-probably-not",children:"example"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"many projects don't know about xx Network"}),"\n",(0,n.jsx)(t.li,{children:"several smart projects know and appreciate xx Network but they're are still in the process of integrating with xx Network (or the other way around)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'Worldcoin is one of those smart projects in "the other way around" situation - xx Network is creating integrations for Worldcoin and this is work in progress (and progressing well).'}),"\n",(0,n.jsxs)(t.p,{children:["Specifically, there are three Worldcoin Foundation grants that were awarded to xx Network-affiliated developers. You can read or listen about it in this interesting interview with ",(0,n.jsx)(t.a,{href:"https://patcrypt.com/worldcoin-xx-network-collaboration-interview-with-mario-yaksetig/",children:"one of the developers"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Meanwhile, Worldcoin is doing their thing. Today I saw ",(0,n.jsx)(t.a,{href:"https://worldcoin.org/blog/announcements/worldcoin-mimos-partnership-bring-digital-proof-humanness-malaysia",children:"this"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"MIMOS Berhad, the applied research and development arm of the Malaysian Government, has signed an MoU with the Worldcoin Foundation, Tools for Humanity (TFH) and MyEG, a leading e-government services provider, to integrate Worldcoin technology into the country\u2019s digital infrastructure."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The intent of the MoU is to leverage the Worldcoin protocol and TFH technologies to improve ongoing and future work related to digital credentials. In doing so, it validates the importance of digital proof of humanness in the age of AI."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Hmm, wait, how many people live in Malaysia? 34 million."}),"\n",(0,n.jsx)(t.p,{children:"Whoa - xx coin will go to the moon!!!"}),"\n",(0,n.jsx)(t.p,{children:"No, it won't. But fine - let's talk about postage!"}),"\n",(0,n.jsx)(t.h2,{id:"postage",children:"Postage"}),"\n",(0,n.jsx)(t.p,{children:'I\'ve blogged about "postage", which is how xx Network plans to charge for its Premium tier suitable for power users.'}),"\n",(0,n.jsx)(t.p,{children:"Where will the collected postage go? Mostly to the validators - server operators on xx Network - and (if I recall correctly) part of it goes to the xx Foundation."}),"\n",(0,n.jsx)(t.p,{children:"Does that mean that the price of xx coin will moon? Of course not."}),"\n",(0,n.jsx)(t.p,{children:"We don't know if those Worldcoin apps in Malaysia will actually be released. It's just an MoU."}),"\n",(0,n.jsxs)(t.p,{children:["Even if they make it, we don't know if they'll ",(0,n.jsx)(t.em,{children:"choose"})," to use Worldcoin's privacy features that rely on xx Network. The Malaysian integrators ",(0,n.jsx)(t.em,{children:"could"})," choose to not use them at all and I'd say this may be the most likely outcome in this particular country."]}),"\n",(0,n.jsx)(t.p,{children:"We don't know how many apps will be developed, and how frequently they'll be used."}),"\n",(0,n.jsxs)(t.p,{children:["We also don't know if the apps will ",(0,n.jsx)(t.em,{children:"need"})," access to Premium tier. Each individual user probably won't need it and postage measures access by each individual user. An app can have 5 million users and as long as each sends or receives several messages per minute, none of them will need to pay postage."]}),"\n",(0,n.jsx)(t.p,{children:"Are the chances of Worldcoin apps using xx Network's Premium tier nil, then?"}),"\n",(0,n.jsx)(t.h2,{id:"why-pay-postage",children:"Why pay postage"}),"\n",(0,n.jsxs)(t.p,{children:['While only a very small percentage of Worldcoin (or other platform\'s) users will require access to Premium (or "unlimited" aka "best effort") tier, anyone who charges for their application or service or wants to prevent ',(0,n.jsx)(t.em,{children:"another"})," paying user (or all the free users) from hogging them out, may want to ask users to subscribe to the Premium tier if it's affordable enough."]}),"\n",(0,n.jsx)(t.p,{children:"I'm not making this up to spread the idea that massive demand for xx coin is inevitable or just around the corner."}),"\n",(0,n.jsx)(t.p,{children:'What I\'m saying is I expect postage will be inexpensive enough to be purchased for "just in case" situations.'}),"\n",(0,n.jsx)(t.p,{children:"When you think about it, that's almost the opposite from \"xx coin will moon\" - the idea here isn't to create scarcity and get rich off the appreciating xx coin. On the contrary!"}),"\n",(0,n.jsx)(t.p,{children:"The way markets work is: if you want more of something, you pay for it just enough to make the seller willing to satisfy that demand."}),"\n",(0,n.jsx)(t.p,{children:"If xx Network's message mixing service (cMix) works well for you, there's no \"reason\" to pay anything. (But you have the option to donate to the Foundation if so inclined)."}),"\n",(0,n.jsx)(t.p,{children:"But the presence of a Free Tier also means that everyone gets the same rights."}),"\n",(0,n.jsx)(t.p,{children:"Someone can stand up 500 containers in AWS and spam the network all day long just because. Or simply try to freeload as much as possible."}),"\n",(0,n.jsx)(t.p,{children:"If this happens at scale, quality of service as experienced by Free tier users may be impacted."}),"\n",(0,n.jsx)(t.p,{children:"If you are getting paid for the app you sell or rely on xx Network at scale, then it may be wise to avoid such congestions where a busy day for Free tier users translates into a busy day for your Support staff. It's better to pay some postage just in case of accidental or malicious congestions."}),"\n",(0,n.jsx)(t.p,{children:'As users pay for Postage, decentralized nodes that participate on the network ("validators") earn more xx coins which means more nodes can come online without diluting any node\'s daily earnings and at the same time improves network throughput.'}),"\n",(0,n.jsxs)(t.p,{children:["Demand for xx coin may result in its price going up, but I would not expect significant impacts from demand for postage because as long as ",(0,n.jsx)(t.em,{children:"similar"})," services exist, no one will pay 3x premium for xx Network. They may pay a 10% or even 110% more, but not for very long."]}),"\n",(0,n.jsx)(t.p,{children:'In addition to this "just in case I need it" scenario, there may be high volume users who prefer to use Premium tier on a regular basis.'}),"\n",(0,n.jsx)(t.p,{children:'A power user who sends thousands of messages every day (example: IoT feed or remote camera that chunks images into many "text" messages) could set up multiple identities to stay within the Free tier limit, or make his life simpler and pay a small premium for 1-2 thousand messages above the cut-off message limit for the Premium tier.'}),"\n",(0,n.jsxs)(t.p,{children:["How will postage work? You may view a draft of high-level design for v1.0 features ",(0,n.jsx)(t.a,{href:"https://patcrypt.com/plans-for-postage-v1-announced/",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"As you can see in that document, users will also be throttled per smaller units of time, so that no one can overload the network by exhausting their daily quota within 15 minutes."}),"\n",(0,n.jsx)(t.p,{children:'We can also see that in v1.0 there will be no "reserved capacity" which some users would probably like to have. Examples:'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Elections: with 5 million voters and (only) 3 hours to vote, you may want to prepay for 600 messages per second during voting hours on the election day. xx Network would then lower its Free tier throughput from (let's say) 7 to 5 messages per client per minute and drop total Free tier throughput per second by 600 messages per second. But this isn't easy. We may need smart contracts (to reserve time) which Polkadot SDK has, but xx Network hasn't yet activated on its Substrate-based xx chain. And there's another problem: speculators could front-run legitimate buyers as election dates are known in advance and often hard-coded in legislative acts"}),"\n",(0,n.jsx)(t.li,{children:'Any user with "guaranteed minimum" requirements. Even if you need to send just 1 message per minute (which well within the Free tier - there\'s 1,440 minutes in a day) - you may want to pay postage in order to able to send at least one message per minute'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When you consider all these niche scenarios, it's easy to see how this gets complicated quickly. I've no idea what's the best way to go about it in Postage v2 or later, but for thousands of users with custom requirements, Smart Contracts maybe the way to go as all mixing nodes can easily look them up on xx chain."}),"\n",(0,n.jsx)(t.h2,{id:"node-operators-and-permissionless-postage",children:"Node operators and permissionless postage"}),"\n",(0,n.jsx)(t.p,{children:"If you need guaranteed throughput for your clients, you can strike a deal whereby an operator gives you a dedicated, guaranteed fraction of their node's connections. You'd have to approach them on xx Network Discord and so on, but in theory that's possible."}),"\n",(0,n.jsx)(t.p,{children:"No one needs to know, you get guaranteed throughput when everyone else may be timing out while connecting to xx Network gateways. Can that be done?"}),"\n",(0,n.jsx)(t.p,{children:"Not for very many messages and users, but it's certainly viable for either Free or Premium tiers. I can reserve 10kB/s for your client IP or throttle everyone else but your IP, for example."}),"\n",(0,n.jsxs)(t.p,{children:["Any node operator could make such side deals on their own for users ",(0,n.jsx)(t.em,{children:"who don't mind to always connect to the same gateways"}),". That decreases user's privacy, so that's a trade-off which may or may not matter."]}),"\n",(0,n.jsx)(t.p,{children:"Another trade-off is if the network is overloaded, that node may be able to accept your messages just fine, but still unable to complete mixing them with other (random) groups of nodes out there, so it's not guaranteed to work in terms of actually sending messages."}),"\n",(0,n.jsx)(t.p,{children:'I conclude this would be possible but not very valuable for either the node operators ("validators") or users. The Premium Tier is expected to be cheap enough to make these laborious workarounds unnecessary and unattractive financially, technically, and privacy-wise.'}),"\n",(0,n.jsx)(t.p,{children:"One use case for this may be local elections, where the government stands up 3-4 nodes and limits access to in-country IPs. As noted above that would impact - maybe even compromise (I'm not qualified to tell) - privacy, but not the integrity of messages (protected by PQC), but it would also make DDoS attacks on that day much harder to execute - any in-country IP addresses could be shut down in minutes, while foreign IP addresses wouldn't be allowed to connect to those gateway nodes. I can't estimate the impact of this approach so I wouldn't recommend it, but there may be similar use cases where having your own node on the network could be beneficial."}),"\n",(0,n.jsx)(t.h2,{id:"final-thoughts",children:"Final thoughts"}),"\n",(0,n.jsxs)(t.p,{children:["I don't expect Worldcoin's integrations in Malaysia will result in much demand on xx Network ",(0,n.jsx)(t.em,{children:"when"})," postage becomes available. For Malaysia, I wouldn't be surprised if the government mandated that all Worldcoin-integrated apps include various gov-mandated data gathering add-ons."]}),"\n",(0,n.jsxs)(t.p,{children:["But what excites me is that similar integrations will sooner or later happen in some other country. A Worldcoin-integrating app developer ",(0,n.jsx)(t.em,{children:"may"})," also choose to enable xxNetwork-related privacy features. If that sounds unlikely to you, please see the interview with Mario and the voting integration (one of the three grants). Even Malaysia may want to enable anonymity in a Worldcoin voting app and disable it in other domestic Worldcoin applications."]}),"\n",(0,n.jsx)(t.p,{children:"Postage v1.0 may not be able to satisfy all use cases right away. DoS-style attacks by sock-puppet accounts could cause issues even to users of the Premium tier, but xx Network has world-class developers who are no doubt aware of all these things and will make recommendations related to privacy, security, performance and reliability expectations."}),"\n",(0,n.jsx)(t.p,{children:"Postage v1.0 may become available a few months from now and it is one of the features essential for monetization of xx Network's mixing services."}),"\n",(0,n.jsx)(t.p,{children:"Other apps rely on donations, subscriptions, or may be VC-backed and don't need to charge just yet."}),"\n",(0,n.jsx)(t.p,{children:"xx Network is integrated with a blockchain service and very unique in that regard. Rewards - and later postage - are sent and received on a blockchain. For messaging, servers that pass and mix messages are operated by individuals from many countries and they're currently rewarded for their \"mixing\", but there's only a free tier so rewards aren't as impactful and demand for coins is lower because there aren't real life use cases for it. Postage will improve and better align users' and operators' incentives."}),"\n",(0,n.jsx)(t.p,{children:"My take:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Worldcoin in Malaysia won\'t make xx coin "go to the moon"'}),"\n",(0,n.jsx)(t.li,{children:"Benefits of xx Network integrations with Worldcoin are real. Potential for adoption is real. When the first integrated implementation happens xx Network traffic could see a significant increase"}),"\n",(0,n.jsx)(t.li,{children:'All other apps that use xx Network as "transport" could use Premium tier, but currently Worldcoin seems to be the most significant integration.'}),"\n",(0,n.jsx)(t.li,{children:"Postage won't make xx Network expensive to use. It will make xx Network deliver more value"}),"\n",(0,n.jsxs)(t.li,{children:["Until there's a way to ",(0,n.jsx)(t.em,{children:"reserve"})," throughput, apps with high reliability expectations should have a way to fallback to Tor or direct access when uptime is more precious than privacy"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},27468:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(30758);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);