"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[6400],{7984:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var s=n(7624),o=n(4552);const r={sidebar_position:4},i="Deploy and maintain Speakeasy",t={id:"speakeasy-admin-guide/deploy-and-maintain",title:"Deploy and maintain Speakeasy",description:"Traditional private chat applications require a dedicated application - self-managed or hosted - and the operator has to manage user accounts and data.",source:"@site/docs/speakeasy-admin-guide/deploy-and-maintain.md",sourceDirName:"speakeasy-admin-guide",slug:"/speakeasy-admin-guide/deploy-and-maintain",permalink:"/docs/speakeasy-admin-guide/deploy-and-maintain",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hardware and software requirements",permalink:"/docs/speakeasy-admin-guide/hw-sw-requirements"},next:{title:"Where to apply your knowledge",permalink:"/docs/speakeasy-admin-guide/use-cases"}},d={},l=[{value:"High level of deployment options",id:"high-level-of-deployment-options",level:2},{value:"Run Speakeasy in container or VM",id:"run-speakeasy-in-container-or-vm",level:2},{value:"Deploy (Tor or Arti) Socks5 or use VPN",id:"deploy-tor-or-arti-socks5-or-use-vpn",level:2},{value:"Update or downgrade your Speakeasy stack",id:"update-or-downgrade-your-speakeasy-stack",level:2}];function c(e){const a={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"deploy-and-maintain-speakeasy",children:"Deploy and maintain Speakeasy"}),"\n",(0,s.jsx)(a.p,{children:"Traditional private chat applications require a dedicated application - self-managed or hosted - and the operator has to manage user accounts and data."}),"\n",(0,s.jsx)(a.p,{children:"Speakeasy requires neither. Accounts (identities, codenames) are network-wide and the admin has nothing to maintain, backup or comply with."}),"\n",(0,s.jsx)(a.p,{children:"Speakeasy Web application can run on user's OS (in Docker), in a low-cost cloud VM, or we can simply use the official Speakeasy instance hosted by the xx Foundation."}),"\n",(0,s.jsx)(a.h2,{id:"high-level-of-deployment-options",children:"High level of deployment options"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Run Speakeasy on a Linux server or a cloud-based VM"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Deploy a reverse HTTPS proxy with TLS certificate"}),"\n",(0,s.jsx)(a.li,{children:"Deploy Speakeasy container or Web app (Next.js) on Node.js behind reverse HTTPS proxy"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Optionally, to access Speakeasy Web site and xx Network over a Tor Socks5 proxy and hide the clients' IP address, set up a dedicated or shared proxy (or leave that to Speakeasy users):"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Tor Socks5 proxy, or"}),"\n",(0,s.jsx)(a.li,{children:"Arti Socks5 proxy, or"}),"\n",(0,s.jsx)(a.li,{children:"VPN"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Speakeasy clienfs, servers and xx Network",src:n(6736).c+"",width:"501",height:"282"})}),"\n",(0,s.jsx)(a.p,{children:"A Socks proxy or VPN can be used to hide Speakeasy client's IP address from Speakeasy Web server."}),"\n",(0,s.jsx)(a.h2,{id:"run-speakeasy-in-container-or-vm",children:"Run Speakeasy in container or VM"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["How to ",(0,s.jsx)(a.a,{href:"https://armchairancap.github.io/blog/2023/04/30/install-xx-network-speakeasy",children:"deploy Speakeasy app on Node.js"}),", or"]}),"\n",(0,s.jsxs)(a.li,{children:["How to ",(0,s.jsx)(a.a,{href:"https://github.com/armchairancap/xx-haven-container",children:"deploy Speakeasy container"})]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"The second link also has a Docker Compose example with Traefik, Let's Encrypt TLS, and Haven. This can be deployed on any x86_64 or ARM64 system, at home or in the cloud."}),"\n",(0,s.jsx)(a.h2,{id:"deploy-tor-or-arti-socks5-or-use-vpn",children:"Deploy (Tor or Arti) Socks5 or use VPN"}),"\n",(0,s.jsx)(a.p,{children:"As mentioned above, this part is optional."}),"\n",(0,s.jsx)(a.p,{children:"To use Tor Socks5 or Arti, the user needs to configure their browser to use a Tor's Socks5 or Arti proxy."}),"\n",(0,s.jsx)(a.p,{children:"These can run on the client computer, LAN (may be shared, and can be set up by the administrator), or the Internet (less secure, but can be okay if it's under user's full control)."}),"\n",(0,s.jsx)(a.p,{children:"Please refer to documentation of each proxy server."}),"\n",(0,s.jsx)(a.h2,{id:"update-or-downgrade-your-speakeasy-stack",children:"Update or downgrade your Speakeasy stack"}),"\n",(0,s.jsxs)(a.p,{children:["Speakeasy is self-contained and does not contain any client data, so watch ",(0,s.jsx)(a.a,{href:"https://git.xx.network/elixxir/speakeasy-web",children:"Speakeasy releases on Gitlab"})," and re-deploy when ready."]}),"\n",(0,s.jsx)(a.p,{children:"Speakeasy can be upgraded or downgraded as long as there are no breaking protocol changes (which should be mentioned in its change log), so in the case an upgrade fails, try the previous version or fall back to usin the official server instance."}),"\n",(0,s.jsx)(a.p,{children:"If you visit the official server and log in, it's easy to see the latest release (example: v0.3.4)."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Speakeasy version in the Web UI",src:n(2700).c+"",width:"121",height:"59"})}),"\n",(0,s.jsx)(a.p,{children:"You may also watch the official source code repository for new releases and other changes."}),"\n",(0,s.jsx)(a.p,{children:"Node.js and containers are not specifically validated, so you may update those are own convenience."})]})}function p(e={}){const{wrapper:a}={...(0,o.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2700:(e,a,n)=>{n.d(a,{c:()=>s});const s="data:image/png;base64,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"},6736:(e,a,n)=>{n.d(a,{c:()=>s});const s=n.p+"assets/images/speakeasy-p2p-network-6efbf44564ddb966e01b1b2da0637914.png"},4552:(e,a,n)=>{n.d(a,{I:()=>t,M:()=>i});var s=n(1504);const o={},r=s.createContext(o);function i(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);