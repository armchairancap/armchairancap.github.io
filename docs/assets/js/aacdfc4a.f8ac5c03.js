"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[5340],{1882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=t(6070),o=t(7468);const s={slug:"2024/11/01/haven-comparison-notes",title:"Notes on forked comparison of messengers",authors:["armchairancap"],tags:["xx network","haven","speakeasy"],description:"Note on Notification if contact's fingerprint changes and other items",keywords:["xx network","speakeasy","comparison","haven"]},a=void 0,r={permalink:"/blog/2024/11/01/haven-comparison-notes",source:"@site/blog/2024-11-01-haven-comparison-notes.md",title:"Notes on forked comparison of messengers",description:"Note on Notification if contact's fingerprint changes and other items",date:"2024-11-01T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"haven",permalink:"/blog/tags/haven"},{label:"speakeasy",permalink:"/blog/tags/speakeasy"}],readingTime:4.94,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/11/01/haven-comparison-notes",title:"Notes on forked comparison of messengers",authors:["armchairancap"],tags:["xx network","haven","speakeasy"],description:"Note on Notification if contact's fingerprint changes and other items",keywords:["xx network","speakeasy","comparison","haven"]},unlisted:!1,prevItem:{title:"NFT-gated access on xx Network",permalink:"/blog/2023/11/05/xx-network-asset-gated-access"},nextItem:{title:"Good Hacktoberfest 2024",permalink:"/blog/2024/11/01/my-hacktober-2024-activites"}},c={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"Wait, I can&#39;t run Haven on mobile?",id:"wait-i-cant-run-haven-on-mobile",level:3},{value:"Notes",id:"notes",level:2},{value:"Notification if contact&#39;s fingerprint changes",id:"notification-if-contacts-fingerprint-changes",level:3},{value:"Find/add contacts",id:"findadd-contacts",level:3},{value:"Supported push notification services",id:"supported-push-notification-services",level:3},{value:"Legal jurisdication",id:"legal-jurisdication",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#wait-i-cant-run-haven-on-mobile",children:"Wait, I can't run Haven on mobile?"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#notes",children:"Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#notification-if-contacts-fingerprint-changes",children:"Notification if contact's fingerprint changes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#findadd-contacts",children:"Find/add contacts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#supported-push-notification-services",children:"Supported push notification services"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#legal-jurisdication",children:"Legal jurisdication"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#conclusion",children:"Conclusion"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["Today I ",(0,i.jsx)(n.a,{href:"https://armchairancap.github.io/xx-network-haven-comparison/index.html",children:"forked and published"})," a comparison of various messengers. Why?"]}),"\n",(0,i.jsx)(n.p,{children:"Because as the author of the original comparison can't possibly include everything (he actually checks and compares all those details, which requires non-trivial efforts) and he focuses on major messengers so Haven't currently isn't included. (He welcomes requests, so you could suggest Haven - Haven't (pun intended).)"}),"\n",(0,i.jsx)(n.p,{children:"Not having a mobile version probably doesn't help."}),"\n",(0,i.jsx)(n.h3,{id:"wait-i-cant-run-haven-on-mobile",children:"Wait, I can't run Haven on mobile?"}),"\n",(0,i.jsxs)(n.p,{children:["As of today, yes. I mean, you ",(0,i.jsx)(n.em,{children:"can"})," run Haven on mobile Android and Linux devices with WASM-capable browsers, but the UI isn't responsive and it doesn't attempt to save battery, so it won't be pretty."]}),"\n",(0,i.jsx)(n.p,{children:"xx Messenger was a mobile app that would probably have done well in a comparison, but it used an older xxDK and is no longer maintained."}),"\n",(0,i.jsx)(n.p,{children:"Haven is the main reference application for xx Network confidential & private messaging. There's a patch for responsive UI which was delivered as part of Hacktoberfest 2024 activities, but it hasn't been merged yet. Keep an eye on that in coming weeks - if merged, that would make Haven more suitable - although just the UI - for Android browsers with WASM support."}),"\n",(0,i.jsx)(n.p,{children:"Anyway, back to the main topic, which is I wanted to create a post with some notes regarding the Haven column in that comparison page."}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.p,{children:"These are notes that clarify some of the values I picked for the Haven column in that comparison chart."}),"\n",(0,i.jsx)(n.h3,{id:"notification-if-contacts-fingerprint-changes",children:"Notification if contact's fingerprint changes"}),"\n",(0,i.jsx)(n.p,{children:'Most people have tried Signal. If you swap your phone or such, your Signal chat counterparts will be informed that your "fingerprint" changed. There\'s no such thing on cMixx (and in Haven).'}),"\n",(0,i.jsxs)(n.p,{children:["Haven ",(0,i.jsx)(n.a,{href:"/docs/haven-user-guide/identity",children:"identity"})," ",(0,i.jsx)(n.em,{children:"is"})," the only user-facing cryptographic identity."]}),"\n",(0,i.jsx)(n.p,{children:'You can\'t ""change" a fingerprint or anything like that. If you lose access to your identity (forget the password to encrypted identity file, or lose the identity file), you must assume a different identity. In that case there\'s no mechanism for you to rejoin a private Space (1-on-1 or group chat) and message contacts saying "this identity replaces this other identity". Who can tell if that\'s the same person?'}),"\n",(0,i.jsx)(n.p,{children:"If you have backups of the invite links and pass phrases you can rejoin those spaces using the new identity. But there's no way for others to know if the new identity is owned by the same person."}),"\n",(0,i.jsx)(n.p,{children:'The only way to do this is to use the old identity to message everyone "from now on, I\'ll be using this new identity".'}),"\n",(0,i.jsxs)(n.p,{children:["Another way is to use an ",(0,i.jsx)(n.a,{href:"https://armchairancap.github.io/docs/haven-user-guide/identity_external",children:"external identity service"})," where people can look up identities you claim on xx Network. But that assumes they know your external identity."]}),"\n",(0,i.jsx)(n.h3,{id:"findadd-contacts",children:"Find/add contacts"}),"\n",(0,i.jsx)(n.p,{children:"See the previous point - there's no name service in Haven, so you can't \"find\" anyone."}),"\n",(0,i.jsx)(n.p,{children:"You can use external identity services mentioned just above."}),"\n",(0,i.jsxs)(n.p,{children:["xx Messenger ",(0,i.jsx)(n.a,{href:"https://learn.xx.network/cmixx/idCollisionAndNotifications",children:"had this custom IDs"}),", but Haven does not. Personally I don't miss those - I think external ID services are the way to go because messenger contacts are just one of many things you need to have an address book for."]}),"\n",(0,i.jsx)(n.p,{children:"Since Haven is one of few messengers that is anchored in a blockchain, knowing someone's cMixx name is not enough. We want their wallet addresses (probably not just for xx coin, but for several currencies), their ENS name, and other public Web3 data they choose to publish."}),"\n",(0,i.jsx)(n.p,{children:"Why you can't \"add\" contacts either? Well, we'd need to sync them somewhere. xx Messenger could upload (backup) its data to S3, so contacts could be saved as well."}),"\n",(0,i.jsx)(n.p,{children:"xx Haven currently doesn't do that so contacts must be searched in external services where people publish their Haven identities. That location is a matter of choice as well - not just in terms of usability, but also privacy, cost, and more. Having to publish your data on ENS (and pay that fee) may or may not be liked by all users which is why I think Haven should leave those integrations to other cMixx messengers when they appear. I don't mind looking it up in whatever way is convenient for me and my contacts."}),"\n",(0,i.jsx)(n.h3,{id:"supported-push-notification-services",children:"Supported push notification services"}),"\n",(0,i.jsx)(n.p,{children:"xx Messenger used a centralized push service, but Haven doesn't currently doesn't have it which means it's limited to constant polling which is power-consuming."}),"\n",(0,i.jsxs)(n.p,{children:["That doesn't matter much for desktops (there's more \"unnecessary\" activity from ",(0,i.jsx)(n.a,{href:"https://learn.xx.network/cmixx/coverTraffic",children:"Cover Traffic"})," than from notifications), but matters on mobile devices."]}),"\n",(0,i.jsx)(n.h3,{id:"legal-jurisdication",children:"Legal jurisdication"}),"\n",(0,i.jsx)(n.p,{children:"The xx Foundation is a non-profit in the USA."}),"\n",(0,i.jsx)(n.p,{children:"Mixnet round scheduling is done by the Foundation and that server is - if I'm not mistaken - in located the EU. The scheduling node isn't involved in data handling."}),"\n",(0,i.jsxs)(n.p,{children:["Client-side ecrypted user data has five copies per each cMixx round and so user data from each conversation lives in dozens of jurisdications (see ",(0,i.jsx)(n.a,{href:"https://dashboad.xx.network",children:"the cMix dashboard"}),"). The scheduling server doesn't know which messages went into which mixnet round - only the sender and recepient(s) do, so those not included in a conversation wouldn't even know where encrypted data is."]}),"\n",(0,i.jsx)(n.p,{children:"Encrypted data is kept on cMixx gateways for 21 days after which only local (cached) copies may remain on participants' clients."}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"I obviously don't speak for the author of the original document, so the values I picked for Haven are my own."}),"\n",(0,i.jsx)(n.p,{children:"This post elaborates on all the rows where I felt felt sharing some notes would be helpful. If the original author reviews and adds Haven to his document, I may or may not update my fork (I wouldn't if I completely disagreed with this evaluation, for example)."}),"\n",(0,i.jsx)(n.p,{children:'I have some other comparisons in other blog entries - you can search the site for "comparison" to find them.'})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7468:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(758);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);