"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[3258],{3492:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=a(6070),t=a(7468);const r={slug:"2024/10/29/xx-haven-with-tribler",title:"xx Haven with Tribler",authors:["armchairancap"],tags:["xx network"],description:"Some ideas for Haven-Tribler integrations",keywords:["xx network","xx chain","tribler","haven","decentralized","torrent","sharing"]},s=void 0,o={permalink:"/blog/2024/10/29/xx-haven-with-tribler",source:"@site/blog/2024-10-29-xx-token-gated-sites-and-haven-tribler.md",title:"xx Haven with Tribler",description:"Some ideas for Haven-Tribler integrations",date:"2024-10-29T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"}],readingTime:5.975,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/10/29/xx-haven-with-tribler",title:"xx Haven with Tribler",authors:["armchairancap"],tags:["xx network"],description:"Some ideas for Haven-Tribler integrations",keywords:["xx network","xx chain","tribler","haven","decentralized","torrent","sharing"]},unlisted:!1,prevItem:{title:"Good Hacktoberfest 2024",permalink:"/blog/2024/11/01/my-hacktober-2024-activites"},nextItem:{title:"Use BIP39 from bip-utils with xx Network",permalink:"/blog/2024/10/13/bip-utils-with-xx-network"}},l={authorsImageUrls:[void 0]},h=[{value:"What&#39;s Tribler?",id:"whats-tribler",level:2},{value:"What&#39;s Haven?",id:"whats-haven",level:2},{value:"What integrations, and why?",id:"what-integrations-and-why",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Pros and cons of DIY approaches",id:"pros-and-cons-of-diy-approaches",level:3},{value:"Do we actually need any integration?",id:"do-we-actually-need-any-integration",level:3},{value:"Security concerns",id:"security-concerns",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#whats-tribler",children:"What's Tribler?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#whats-haven",children:"What's Haven?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#what-integrations-and-why",children:"What integrations, and why?"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#integrations",children:"Integrations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#pros-and-cons-of-diy-approaches",children:"Pros and cons of DIY approaches"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#do-we-actually-need-any-integration",children:"Do we actually need any integration?"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#security-concerns",children:"Security concerns"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#summary",children:"Summary"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"whats-tribler",children:"What's Tribler?"}),"\n",(0,i.jsx)(n.p,{children:"It's an app for Tor-like Torrent-based file sharing that doesn't suck like Tor does."}),"\n",(0,i.jsx)(n.h2,{id:"whats-haven",children:"What's Haven?"}),"\n",(0,i.jsx)(n.p,{children:"It's a privacy-focused, decentralized chat and messaging Web app on xx Network's cMixx mixnet."}),"\n",(0,i.jsx)(n.h2,{id:"what-integrations-and-why",children:"What integrations, and why?"}),"\n",(0,i.jsx)(n.p,{children:"Let's see about the whys first: you need to find torrents that you want to download."}),"\n",(0,i.jsx)(n.p,{children:"Tribler has internal search feature but it's not that good yet."}),"\n",(0,i.jsx)(n.p,{children:"So you go out on the Web to find torrents, which means one or more of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Being tracked on Torrent search Web sites"}),"\n",(0,i.jsx)(n.li,{children:"Monetary (and sometimes privacy) cost of subscribing to VPN service"}),"\n",(0,i.jsx)(n.li,{children:"Using Tor to hide your activity"}),"\n",(0,i.jsx)(n.li,{children:"Registering at Torrent sharing private Web sites or chats"}),"\n",(0,i.jsx)(n.li,{children:"Using some password-protected site where you're registered with a fake or real identity"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Is there a better way? I think there is: one UI with Haven and Tribler:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Someone posts RSS feed into a private (or public) Haven Space ("chat channel")'}),"\n",(0,i.jsx)(n.li,{children:"Users copy links and download them using Tribler"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"integrations",children:"Integrations"}),"\n",(0,i.jsx)(n.p,{children:"Ideally, Haven could run inside of Tribler. But the Tribler project would have to make that happen. Alternatively, someone could create and maintain a patch. Not very good."}),"\n",(0,i.jsx)(n.p,{children:"Another way is to create a small patch to Tribler menus and run Haven in an iFrame."}),"\n",(0,i.jsx)(n.p,{children:"Another way is to run Tribler in a Haven iFrame. That's easier, but you have to create a small patch for Haven, which some privacy-sensitive people may not like."}),"\n",(0,i.jsx)(n.h3,{id:"pros-and-cons-of-diy-approaches",children:"Pros and cons of DIY approaches"}),"\n",(0,i.jsxs)(n.p,{children:["A Haven iFrame in Tribler chat menu is available ",(0,i.jsx)(n.a,{href:"https://github.com/armchairancap/xx-tribler-haven/releases/tag/v1.0",children:"here"}),". I call this attempt v1.0."]}),"\n",(0,i.jsx)(n.p,{children:"You click on the chat cloud icion and Haven opens in the main pane (iFrame)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tribler with a Haven iFrame",src:a(3063).A+"",width:"931",height:"360"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Step 1: join a Haven Space ("chat channel")'}),"\n",(0,i.jsx)(n.li,{children:"Step 2: find a magnet link"}),"\n",(0,i.jsx)(n.li,{children:'Step 3: paste it into "Add torrent"'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The bad:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"every time the user navigates away from the chat menu, Haven state is lost and user cannot access Haven again without logging in"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The good:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"every time the user navigates away from the chat menu, Haven state is lost and user cannot access Haven again without logging in"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Do you see what I mean? If your use case is \"get into a Haven Space, get one link, copy it to Tribler and leave Haven\", this is actually a good approach. All it takes to secure access to Haven is to navigate away: you won't leave Haven iFrame open because in order to use that Magnet link you'll have to leave it. Just make sure your Haven profile password is strong!"}),"\n",(0,i.jsx)(n.p,{children:"Note that this only hides your Haven identity, Spaces, and chat data, while Tribler UI is still running and downloaded data is on disk."}),"\n",(0,i.jsx)(n.p,{children:"The second approach I tried - a Tribler iFrame in Haven - works the other way around, except there's no state in Tribler (it's a server-based application with a Web UI) so if you download multiple torrents or like to chat with Space members as you download, this may be better for you."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Haven with a Tribler iFrame",src:a(903).A+"",width:"1544",height:"654"})}),"\n",(0,i.jsx)(n.p,{children:"Join a channel, get your links, download them in Tribler and watch/manage downloads as they go."}),"\n",(0,i.jsx)(n.p,{children:"In this approach there's a small patch to Haven which seems low-risk to me if you're the only user of your Haven instance: you own the Haven instance and you own the Tribler instance as well, so as long as you're not concerned about Tribler in a Haven iFrame, I think patching Haven and using it this way is fine."}),"\n",(0,i.jsx)(n.p,{children:"I'm working on finalizing these small patches in another release at the same location as v1.0."}),"\n",(0,i.jsx)(n.h3,{id:"do-we-actually-need-any-integration",children:"Do we actually need any integration?"}),"\n",(0,i.jsx)(n.p,{children:"That's a good question. If you don't use both of these applications at the same time often, it's probably best to use them separately and avoid complications."}),"\n",(0,i.jsx)(n.p,{children:"As an example of yet other approaches, I've built a simple browser extension which downloads selected (Magnet) links using Tribler: very easy to use, no patches required. But you can't see or control what's going on with downloads without going to another tab or window with Tribler UI."}),"\n",(0,i.jsx)(n.p,{children:'I couldn\'t load Haven in this "preview" version of Firefox (WASM issues), but this is how simple the extension is: select a Magnet link in Haven chat and use the extension to initiate Tribler download.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Download with Tribler Extension",src:a(9556).A+"",width:"1317",height:"757"})}),"\n",(0,i.jsxs)(n.p,{children:["This can work anywhere including the \"Haven with a Tribler iFrame\" approach because it simply talks to the Tribler API and Tribler UI doesn't need to be visible. It saves some copy-and-paste even if Tribler runs in the same browser tab as Haven. I've posted a proof-of-concept version ",(0,i.jsx)(n.a,{href:"https://github.com/armchairancap/magnet-link-downloader-tribler-firefox",children:"here"})," - see the link for the details."]}),"\n",(0,i.jsx)(n.p,{children:"If you're a security freak, I won't try to persuade you to use these iFrame approaches."}),"\n",(0,i.jsx)(n.h2,{id:"security-concerns",children:"Security concerns"}),"\n",(0,i.jsx)(n.p,{children:"It is possible that the app in iFrame does something to its parent frame. If you worry about that, of course just run the apps separately or even in different VMs."}),"\n",(0,i.jsxs)(n.p,{children:['In the "Haven with a Tribler iFrame" approach we could tighten the iFrame CORS, and also properly integrate applications so that we don\'t have to skip authentication from ',(0,i.jsx)(n.code,{children:"localhost"})," clients on Tribler (which I currently do). I'll post the patches in the repo for easy reviewing. Risk of someone else accessing your instance of Tribler on ",(0,i.jsx)(n.code,{children:"localhost"})," (where Haven is running) through Haven iFrame should be extremely low, though."]}),"\n",(0,i.jsx)(n.p,{children:"And this instance of Tribler should not listen on public IPs - simply close off its Web UI and IP ports."}),"\n",(0,i.jsx)(n.p,{children:"If you want to let others access Haven on the same computer, you could simply start another container binding a public IP and port. The same goes for extra Tribler instances."}),"\n",(0,i.jsx)(n.p,{children:'In a crazy mix-up setup you could run a "groupware edition" of Haven-Tribler compose.yaml:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Haven-Tribler setup for multiple users (who all share same Tribler and can be in the same channel if they're all focused on same content)"}),"\n",(0,i.jsx)(n.li,{children:"One Web server gateway sharing static content (Tribler download directory) for authenticated downloads"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"That would be as secure as the stupidest downloader."}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Haven provides private and confidential access to Magnet links that can be used in Tribler: free access, post-quantum E2EE, and metadata shredding eliminate the need to use Tor, VPNs or privacy-leaking Web sites."}),"\n",(0,i.jsx)(n.p,{children:"Among DIY approaches at lightweight integration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For single-torrent and one-off use, Tribler with a Haven iFrame is a good approach which forces inconvenience (and results in good SecOps)"}),"\n",(0,i.jsx)(n.li,{children:"For parallel use (Haven + Tribler) and multiple downloads, I like Haven with a Tribler iFrame because it gives me full control over Tribler"}),"\n",(0,i.jsx)(n.li,{children:'For "hidden Tribler" we can run Haven + browser extension that hooks into the Tribler API, but you\'d want extra controls and visibility into downloads, which means either occasional access to Tribler UI or a fat extension with some Tribler indicators similar to "Down Them All" or such (which is complex).'}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9556:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/haven-with-browser-extension-2d8b862c5e70c1b64e4d73c74ac38513.png"},903:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/haven-with-tribler-iframe-c8ad47f0ddb017cf455472d09dd1c2fd.png"},3063:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/tribler-with-haven-iframe-50fa42fec60a59cda3a52ce625ba3dbd.png"},7468:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var i=a(758);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);