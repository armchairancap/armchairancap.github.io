"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[1263],{9880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=t(6070),s=t(7468);const o={slug:"2024/05/08/can-securedrop-reinvent-the-wheel-probably-not",title:"SecureDrop keeps themselves busy reinventing the wheel",authors:["armchairancap"],tags:["xx network","tor"],description:"SecureDrop tries to reinvent the wheel instead of integrating decentralized messengers",keywords:["speakeasy","haven","xx network","securedrop"]},i=void 0,a={permalink:"/blog/2024/05/08/can-securedrop-reinvent-the-wheel-probably-not",source:"@site/blog/2024-05-08-securedrop-vs-speakeasy-haven-and-tor-secretservice.md",title:"SecureDrop keeps themselves busy reinventing the wheel",description:"SecureDrop tries to reinvent the wheel instead of integrating decentralized messengers",date:"2024-05-08T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"tor",permalink:"/blog/tags/tor"}],readingTime:7.495,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/05/08/can-securedrop-reinvent-the-wheel-probably-not",title:"SecureDrop keeps themselves busy reinventing the wheel",authors:["armchairancap"],tags:["xx network","tor"],description:"SecureDrop tries to reinvent the wheel instead of integrating decentralized messengers",keywords:["speakeasy","haven","xx network","securedrop"]},unlisted:!1,prevItem:{title:"xx Network as private event chat in online Web events",permalink:"/blog/2024/05/17/speakeasy-haven-private-event-chat"},nextItem:{title:"First they came for CEXes, then for DEXes",permalink:"/blog/2024/04/11/sec-targets-uniswap-total-ban-in-view"}},c={authorsImageUrls:[void 0]},h=[{value:"How it could be done",id:"how-it-could-be-done",level:2},{value:"Pull method",id:"pull-method",level:3},{value:"Push method",id:"push-method",level:3},{value:"Walk-through for Pull method",id:"walk-through-for-pull-method",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://x.com/armchairancap/status/1589835968911413249",children:"I've said it already"})," so I'll just rephrase: it takes three PhDs to use SecureDrop - one admin, one journalist and one user."]}),"\n",(0,r.jsxs)(n.p,{children:["But you don't know what you don't know, so instead of fixing the complicated mess that (current) SecureDrop is - which could be done by including ",(0,r.jsx)(n.strong,{children:"any"})," viable open source decentralized messenger into their packaged solution - they're coming up with ",(0,r.jsx)(n.a,{href:"https://github.com/freedomofpress/securedrop-protocol",children:"a new protocol"})," of their own. Of course."]}),"\n",(0,r.jsx)(n.p,{children:"What does it do?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"What is implemented here is a small-scale, self-contained, anonymous message box, where anonymous parties (sources) can contact and receive replies from trusted parties (journalists)."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Where's the server?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Server: For this project, a server might be a physical dedicated server housed in a trusted location, a physical server in an untrusted location, or a virtual server in a trusted or untrusted context. Besides the initial setup, all the connections to the server have to happen though the Tor Hidden Service Protocol."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Fine, I'll just set up my own Hidden Service."}),"\n",(0,r.jsx)(n.p,{children:"But, does Source need a PhD?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Source(s): No on-device persistence shall be required for a source to interact with the system; they should be able to conduct all communications using only a single, theoretically-memorizable passphrase. The source uses Tor Browser to preserve their anonymity."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Just using Tor Browser properly is very hard. Haven users don't need to use Tor, but they may if they wish. Because with Haven, Tor is optional so it's much harder to use Tor incorrectly if either party does choose to use it for secure direct messaging."}),"\n",(0,r.jsxs)(n.p,{children:["I'd even say that modern messaging apps like xx Network's Haven almost ",(0,r.jsx)(n.em,{children:"cannot"})," be used incorrectly. Choose a strong password and don't have a spyware infested browser or OS. That's basically it."]}),"\n",(0,r.jsx)(n.p,{children:'But this is SecureDrop, so here we go again... Start by subscribing to Udemy\'s "Python from Zero to Hero"...'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# python3 source.py -h\nusage: source.py [-h] [-p PASSPHRASE] -a {fetch,read,reply,submit,delete} [-i ID] [-m MESSAGE] [-f FILES [FILES ...]]\n\noptions:\n  -h, --help            show this help message and exit\n  -p PASSPHRASE, --passphrase PASSPHRASE\n                        Source passphrase if returning\n  -a {fetch,read,reply,submit,delete}, --action {fetch,read,reply,submit,delete}\n                        Action to perform\n  -i ID, --id ID        Message id\n  -m MESSAGE, --message MESSAGE\n                        Plaintext message content for submissions or replies\n  -f FILES [FILES ...], --files FILES [FILES ...]\n                        List of local files to submit\n"})}),"\n",(0,r.jsx)(n.h2,{id:"how-it-could-be-done",children:"How it could be done"}),"\n",(0,r.jsx)(n.h3,{id:"pull-method",children:"Pull method"}),"\n",(0,r.jsx)(n.p,{children:"In this approach Source shares files over a Tor Hidden Service and informs a Journalist to download the file."}),"\n",(0,r.jsxs)(n.p,{children:["This doesn't require ",(0,r.jsx)(n.em,{children:"any"})," development."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Journalist publishes their Haven nick (e.g. MrTriggerHappyJourno)"}),"\n",(0,r.jsxs)(n.li,{children:["Source runs owns ",(0,r.jsx)(n.a,{href:"https://github.com/armchairancap/xx-haven-container",children:"Haven container"})," or accesses other party's (e.g. public) Haven instance to create their own identity (DrDeepThroat)"]}),"\n",(0,r.jsx)(n.li,{children:"Source initiates chat with Journalist using Haven by contacting them directly and inviting them to personal chat channel with DrDeepThroat and MrTriggerHappyJourno as the only participants"}),"\n",(0,r.jsx)(n.li,{children:"If the Source decides to share their files, they start Onion container with Hidden (Web) Service and share the link to the Journalist in Haven private chat"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"I provide a walk-through and sample configuration files below."}),"\n",(0,r.jsx)(n.h3,{id:"push-method",children:"Push method"}),"\n",(0,r.jsx)(n.p,{children:"This approach follows SecureDrop's approach where the \"file upload\" site is operated by Journalist. That seems like a very risky idea to me - Sources would better off uploading files to one of decentralized S3 services - but that's how SecureDrop does it."}),"\n",(0,r.jsx)(n.p,{children:"In this approach they would still use a decentralized secure messenger (Haven from xx Network or some other) and the same Web server app Secure Drop already has."}),"\n",(0,r.jsx)(n.h2,{id:"walk-through-for-pull-method",children:"Walk-through for Pull method"}),"\n",(0,r.jsx)(n.p,{children:"I think it's easier to use Haven and Pull method than SecureDrop (Push method) and I'll show you why."}),"\n",(0,r.jsx)(n.p,{children:"With Docker installed, the Source downloads this repository from Tor Browser or over SOCKS5 proxy (using git cli) and starts all the services they'll need."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/armchairancap/xx-haven-container\ncd xx-haven-container/tor\ndocker compose up\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Haven is now running on localhost (temporary VM) and Caddy provides HTTPS proxy at ",(0,r.jsx)(n.a,{href:"https://localhost:443",children:"https://localhost:443"})," to Source. This takes care of secure messaging and metadata shredding."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to know more, see ",(0,r.jsx)(n.a,{href:"/docs/haven-user-guide/get-started",children:"this guide"})," or fire up your own instance."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(9339).A+"",width:"577",height:"427"})}),"\n",(0,r.jsx)(n.p,{children:"This list below shows all services in this Docker Compose."}),"\n",(0,r.jsxs)(n.p,{children:["The configuration files can be in line with best practices and thereby require ",(0,r.jsx)(n.strong,{children:"zero configuration"})," by either Source (they use Haven and Web server) or Journalist (they use own instance of Haven)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Caddy - HTTPS proxy for Haven"}),"\n",(0,r.jsx)(n.li,{children:"NGINX - Web server that runs my Tor Hidden (Web) Service"}),"\n",(0,r.jsx)(n.li,{children:"Haven - local (personal) instance of Haven (to create Haven identity and chat with Journalist)"}),"\n",(0,r.jsxs)(n.li,{children:["Alpine/Tor - Tor server that exposes Hidden (Web) Service at a ",(0,r.jsx)(n.code,{children:".onion"})," address"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ docker ps -a\nCONTAINER ID   IMAGE\n52b873713f26   caddy                        \n324711b42905   nginx:latest  \n5e3054ec8d21   ghcr.io/armchairancap/haven:latest\n023a0df1a5ed   alpine:latest \n"})}),"\n",(0,r.jsxs)(n.p,{children:["Tor is running in Alpine and the Source can get our Hidden Service address from Container ID for ",(0,r.jsx)(n.code,{children:"alpine:latest"})," like so:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ docker exec -it 023a0df1a5ed cat /var/lib/tor/hidden_service/hostname\n6x366z3rjmkx4ebtlpbq2hyoqng2yzy46zjtivydo4xovfj5xbk7zuid.onion\n# alternatively\n$ sudo cat tor-service/hostname\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"hostname"})," file is in the ",(0,r.jsx)(n.code,{children:"tor-service"})," directory (relative to repo clone location: ",(0,r.jsx)(n.code,{children:"./xx-haven-container/tor/tor-service/"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"That's all it takes to visit the service on Tor - use Tor Browser to access that link."}),"\n",(0,r.jsx)(n.p,{children:"But, what is our NGINX service sharing/serving?"}),"\n",(0,r.jsxs)(n.p,{children:["The two test files I put in the ",(0,r.jsx)(n.code,{children:"tor-docs"})," subdirectory in the place where I run ",(0,r.jsx)(n.code,{children:"docker compose up"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ sudo ls  ./tor-docs/\nfile.txt  index.html\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Actually, ",(0,r.jsx)(n.code,{children:"index.html"})," isn't even necessary - it's there to make this demo simpler - by being able to view index.html which links to file.txt."]}),"\n",(0,r.jsx)(n.p,{children:"In any case, our Source shares 6x366z3rjmkx4ebtlpbq2hyoqng2yzy46zjtivydo4xovfj5xbk7zuid.onion with his Journalist and that's it."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(2315).A+"",width:"692",height:"207"})}),"\n",(0,r.jsx)(n.p,{children:"The Journalist downloads the file over Tor and the Source can see that in Tor logs (in Docker Compose console)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(5762).A+"",width:"1053",height:"249"})}),"\n",(0,r.jsx)(n.p,{children:"After the Journalist confirms they got the file in Haven chat channel, the Source uses CTRL+C to stop Docker service and removes everything (the entire ./xx-haven-container/ directory or - even better - the entire temporary VM if they had one)."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Don't perform this step if you want to reuse your Onion address or Docker Compose example. (Of course, you may, and create another set of Tor and Haven identities next time you use this stack.)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# press CTRL-C to stop docker-compose\n# sudo rm -rf ./tor-*\n"})}),"\n",(0,r.jsx)(n.p,{children:"With Tor identity removed, next time the Sources wishes to use the same stack they have a new Onion address while Haven identity could be restored if they backed it up (by exporting it from Haven Web UI to JSON file) and stored in a secure location."}),"\n",(0,r.jsx)(n.p,{children:"Back to those file names: our Source could share a direct link to the file (6x366z3rjmkx4ebtlpbq2hyoqng2yzy46zjtivydo4xovfj5xbk7zuid.onion/file.txt) and file.txt could be encrypted if you wanted the extra security - the Source may share that password with the Journalist in their private Haven chat channel."}),"\n",(0,r.jsx)(n.p,{children:"The password could be shared with the Journalist in Haven, but if the file is randomly named there's no risk of anyone guessing this file name on a Hidden Service address with directory listing disabled (it is disabled by default on NGINX)."}),"\n",(0,r.jsx)(n.p,{children:"To take that approach, remove index.html and move the content file to a random name:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# use CTRL+C to stop docker compose\n$ openssl rand -hex 50\ncd7457899fcd7ea28f09b8fd7eec090f9207634501ee910c3a58b3b7bb35e68e8ec17b05a7e1626059a089cd7318ec69589a\n$ sudo rm ./tor-docs/index.html\n$ sudo mv ./tor-docs/file.txt ./tor-docs/cd7457899fcd7ea28f09b8fd7eec090f9207634501ee910c3a58b3b7bb35e68e8ec17b05a7e1626059a089cd7318ec69589a\n$ docker compose start\n"})}),"\n",(0,r.jsx)(n.p,{children:"All that's necessary here is to put your content in ./tor-docs/. There's no configuration of any kind. For \"production\" purposes a project could further improve configuration files included, of course."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"caddy_config/ - auto-configured"}),"\n",(0,r.jsx)(n.li,{children:"caddy_data/ - auto-configured"}),"\n",(0,r.jsxs)(n.li,{children:["Caddyfile - 3-line template file for reverse proxy on ",(0,r.jsx)(n.code,{children:"localhost"}),", preconfigured"]}),"\n",(0,r.jsx)(n.li,{children:"docker-compose.yml - Docker Compose file, preconfigured"}),"\n",(0,r.jsx)(n.li,{children:"tor-config/ - Tor Hidden Service configuration file (for NGINX), preconfigured"}),"\n",(0,r.jsx)(n.li,{children:"tor-docs/  - file(s) shared over Hidden Service (file.txt, etc.)"}),"\n",(0,r.jsx)(n.li,{children:"tor-service/ - Tor Hidden Service identity file (hostname, pub/priv key) - auto-generated if missing"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Now, this isn\'t "more secure" than their latest PoC, but is it worse?'}),"\n",(0,r.jsx)(n.p,{children:"It took me two hours to put it together without writing any code and anyone who uses this is much less likely to make a mistake while using this approach."}),"\n",(0,r.jsxs)(n.p,{children:["Find my PoC configuration files ",(0,r.jsx)(n.a,{href:"https://github.com/armchairancap/xx-haven-container/",children:"here"}),". (Credits: I used ",(0,r.jsx)(n.a,{href:"https://github.com/ha1fdan/hidden-service-docker",children:"hidden-service-docker"})," for Tor and NGINX.)"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"SecureDrop wants to reinvent their own wheel despite the fact that there are several good decentralized, secure messengers."}),"\n",(0,r.jsx)(n.p,{children:"Normally, secure drops start with secure messaging and they'd be better off if they simply picked one of existing options."}),"\n",(0,r.jsx)(n.p,{children:"Once that's taken care of, file upload/download is no longer difficult when done on Onion network."}),"\n",(0,r.jsxs)(n.p,{children:["I wouldn't say these are \"solved problems\", but the point here isn't that xx Network's Haven \"solved\" the problem of secure messaging (maybe it did, maybe it didn't - ",(0,r.jsx)(n.a,{href:"https://xx.network/whitepapers/",children:"see for yourself"}),"). It is that SecureDrop very likely can't solve it ",(0,r.jsx)(n.em,{children:"better"})," than other decentralized messengers."]}),"\n",(0,r.jsx)(n.p,{children:'They ought to stop dreaming about their own "protocol" and do what they\'re supposed to do which is making it easy to share files in private.'})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9339:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/2024-05-08-00-xx-network-haven-localhost-service-0f44be2e019041b1586305ca378ef85e.png"},2315:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/2024-05-08-01-hidden-web-service-fa141ad4ccc6056969c60f16a7483791.png"},5762:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/2024-05-08-02-get-files-from-hidden-web-service-437ebc659403e13c96ed5239339ff80b.png"},7468:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(758);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);