"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[9656],{49609:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(86070),o=a(27468);const r={slug:"2023/04/30/install-xx-network-haven",title:"Install xx Network Haven",authors:["armchairancap"],tags:["xx network","haven","speakeasy"],description:"Install your own instance of xx Network Haven application: bare metal, VM, or container",keywords:["xx network","speakeasy","docker","container","server","instance","haven"]},s=void 0,i={permalink:"/blog/2023/04/30/install-xx-network-haven",source:"@site/blog/2023-04-30-install-haven-app.md",title:"Install xx Network Haven",description:"Install your own instance of xx Network Haven application: bare metal, VM, or container",date:"2023-04-30T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"haven",permalink:"/blog/tags/haven"},{label:"speakeasy",permalink:"/blog/tags/speakeasy"}],readingTime:5.725,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2023/04/30/install-xx-network-haven",title:"Install xx Network Haven",authors:["armchairancap"],tags:["xx network","haven","speakeasy"],description:"Install your own instance of xx Network Haven application: bare metal, VM, or container",keywords:["xx network","speakeasy","docker","container","server","instance","haven"]},unlisted:!1,prevItem:{title:"Sign and verify messages using xx Network wallet",permalink:"/blog/2023/05/08/xx-network-wallet-sign-verify"}},l={authorsImageUrls:[void 0]},c=[{value:"Containerized or non-containerized Haven",id:"containerized-or-non-containerized-haven",level:2},{value:"Home or cloud",id:"home-or-cloud",level:2},{value:"Software and hardware requirements",id:"software-and-hardware-requirements",level:2},{value:"Install Node.js",id:"install-nodejs",level:2},{value:"Deploy and run Speakeasy",id:"deploy-and-run-speakeasy",level:2},{value:"Pick Haven Web application port",id:"pick-haven-web-application-port",level:3},{value:"Reverse HTTPS proxy",id:"reverse-https-proxy",level:2},{value:"Custom port, host or path",id:"custom-port-host-or-path",level:3},{value:"TLS certificate",id:"tls-certificate",level:3},{value:"Update Haven",id:"update-haven",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["For an updated how-to, see ",(0,t.jsx)(n.a,{href:"https://github.com/armchairancap/xx-haven-container/blob/master/README.md",children:"xx Haven Container"}),"."]}),(0,t.jsx)(n.p,{children:"The article below is still usable, but the repository is updated, while the article below is kept for archive purposes."})]}),"\n",(0,t.jsx)(n.h2,{id:"containerized-or-non-containerized-haven",children:"Containerized or non-containerized Haven"}),"\n",(0,t.jsxs)(n.p,{children:["It's probably easier to run Haven in a container. If you have Docker or Postman and want to run Haven in a container, try ",(0,t.jsx)(n.a,{href:"https://github.com/armchairancap/xx-haven-container",children:"this"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In the case you want to self-host a non-containerized Haven, read on!"}),"\n",(0,t.jsx)(n.h2,{id:"home-or-cloud",children:"Home or cloud"}),"\n",(0,t.jsx)(n.p,{children:"You may install Speakeasy at home or in the cloud."}),"\n",(0,t.jsx)(n.p,{children:"Haven Web server doesn't hold any data but its OS and Node.js logs may store client IPs, that's all."}),"\n",(0,t.jsx)(n.p,{children:"With that in mind, some high-level considerations would be:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We don't want our Speakeasy Web app or underlying OS to get compromised"}),"\n",(0,t.jsx)(n.li,{children:'If your Haven is not open to public, or is accessed "by invite" (maybe with basic authentication or VPN, for your family and friends), you may run it at home'}),"\n",(0,t.jsx)(n.li,{children:"If your Haven is located in the cloud, that's acceptable as long as you can protect it from getting compromised so that application code doesn't get replaced, OS compromised, or visitors' IPs leaked."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Regarding this last point, if you feel comfortable hosting your Haven server in a small (1G RAM) VM, it is better to open it to public to have the Web server accessed by a variety of addresses. As long as you know how to protect the VM."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Each participant in a conversation can use a different Speakeasy Web server, so many deployment combinations are possible."})}),"\n",(0,t.jsx)(n.h2,{id:"software-and-hardware-requirements",children:"Software and hardware requirements"}),"\n",(0,t.jsx)(n.p,{children:"Use a Linux OS or VM, x86_64 or ARM64 architecture. Haven's hardware requirements are minimal:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"1 vCPU"}),"\n",(0,t.jsx)(n.li,{children:"1 GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"3 GB disk"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All Haven app/web server does is serve the app to the client(s) and that's one-time download from each client (around 100 MB download)."}),"\n",(0,t.jsx)(n.p,{children:"One vCPU is enough and won't be significantly utilized except when Node.js builds the application or when container image is updated - that takes a long time (15 minutes), but has to be done only when Haven code is updated or rebuilt."}),"\n",(0,t.jsx)(n.h2,{id:"install-nodejs",children:"Install Node.js"}),"\n",(0,t.jsxs)(n.p,{children:["On generic Linux OS, follow installation instructions for ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," version 16.14 or above."]}),"\n",(0,t.jsx)(n.p,{children:"This post was prototyped on DietPi Linux, which currently uses Node.js 20. On DietPi, you may install Node.js as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo dietpi-software install 9\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or, run ",(0,t.jsx)(n.code,{children:"dietpi-software"}),", select ",(0,t.jsx)(n.code,{children:"Search software"}),", search for ",(0,t.jsx)(n.code,{children:"Node.js"}),", and proceed with installation."]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-and-run-speakeasy",children:"Deploy and run Speakeasy"}),"\n",(0,t.jsx)(n.p,{children:"We need to pick a directory for the application, clone the source to that directory, change some parameters and install."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mkdir -p /usr/src/app/speakeasy/.next\n"})}),"\n",(0,t.jsx)(n.p,{children:"If your username is joe, you could run it as such. Otherwise, create a non-sudoer account and use that."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo chown -R joe:joe /usr/src/app/speakeasy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["That should allow you to run the rest without using ",(0,t.jsx)(n.code,{children:"sudo"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Next, clone the Haven source code, change configuration parameters and run it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://git.xx.network/elixxir/speakeasy-web /usr/src/app/speakeasy\ncd /usr/src/app/speakeasy\n"})}),"\n",(0,t.jsx)(n.h3,{id:"pick-haven-web-application-port",children:"Pick Haven Web application port"}),"\n",(0,t.jsx)(n.p,{children:"Most Node.js apps traditionally use port 3000, but you'll need something else if you have another app using that port."}),"\n",(0,t.jsx)(n.p,{children:"Pick a port for Haven, such as 7080, and use it consistently later:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sed -i 's/next start/next start -p 7080/g' package.json\nsed -i 's/const nextConfig = {/const nextConfig ={\\\\n  productionBrowserSourceMaps: true,/g' next.config.js\nrm -rf node_modules && npm install -g npm@9.6.5 && npm install && npx next telemetry disable && npx next build\n"})}),"\n",(0,t.jsx)(n.p,{children:"If that went well, you can try to start it from the same directory."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check if Haven is up and running by going to ",(0,t.jsx)(n.code,{children:"http://${SERVER_IP}:7080"}),". You may need to open OS firewall for that. Example for Ubuntu:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo ufw allow 7080/tcp\n"})}),"\n",(0,t.jsx)(n.p,{children:"Since that port doesn't need to be exposed when Speakeasy is running behind HTTPS proxy, it is advisable to delete the rule after testing the application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo ufw status numbered\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You won't be able to do much with Speakeasy running at ",(0,t.jsx)(n.code,{children:"http://host:7080"})," because there's no reverse HTTPS proxy in front of Speakeasy. If you attempt to create an identity you will get stuck at the ",(0,t.jsx)(n.code,{children:"Find your Codename"})," step."]}),"\n",(0,t.jsxs)(n.p,{children:["Assuming the rules for 7080/tcp are number 7 and 8, and your HTTPS reverse proxy will run on the same host, you can delete the rules: ",(0,t.jsx)(n.code,{children:"sudo ufw delete 7 ; sudo ufw delete 8"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The right firewall port to open on the ",(0,t.jsx)(n.em,{children:"host"})," would be whatever port is used by your HTTPS reverse proxy (e.g. 14443)."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"To be fully functional, Haven must be accessed through an HTTPS reverse proxy."})}),"\n",(0,t.jsx)(n.h2,{id:"reverse-https-proxy",children:"Reverse HTTPS proxy"}),"\n",(0,t.jsxs)(n.p,{children:["Deploy reverse HTTPS proxy in front of Speakeasy so that external port is forwarded to Speakeasy's application port (example: ",(0,t.jsx)(n.code,{children:"https://fqdn:14443"})," -> ",(0,t.jsx)(n.code,{children:"http://localhost:7080"}),"). To use 14443/tcp, open that firewall port on external network."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo ufw allow 14443/tcp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now configure HTTPS reverse proxy to forward incoming 14443/tcp to 7080/tcp, and if you wish make HTTPS reverse proxy and Speakeasy Web app start (",(0,t.jsx)(n.code,{children:"npm start"}),") automatically."]}),"\n",(0,t.jsx)(n.p,{children:"For that you may use Caddy, Traefik, NGINX or other."}),"\n",(0,t.jsx)(n.p,{children:"There are many ways to deploy each reverse proxy and at the same time there are no Speakeasy-specific steps here, so the details are an exercise for the reader. Find and try the official or community examples for your proxy and Node.js."}),"\n",(0,t.jsx)(n.h3,{id:"custom-port-host-or-path",children:"Custom port, host or path"}),"\n",(0,t.jsxs)(n.p,{children:["In the case Speakeasy is the only application proxied by HTTPS reverse proxy, it is most convenient to expose it at ",(0,t.jsx)(n.code,{children:"https://host:443"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In the case the same HTTPS reverse proxy is used for several applications, Speakeasy can be hosted in a directory (or, more complicated, at a dedicated virtual host name or FQDN)."}),"\n",(0,t.jsx)(n.h3,{id:"tls-certificate",children:"TLS certificate"}),"\n",(0,t.jsx)(n.p,{children:"In any and all cases, your reverse HTTPS proxy would need a TLS certificate."}),"\n",(0,t.jsx)(n.p,{children:"If your reverse proxy integrates with Let's Encrypt, you could expose reverse proxy (and indirectly Speakeasy) to the Internet rather than use internal or even self-signed TLS certificate - it's more secure, especially if you additionally protect HTTPS proxy with firewall rules or basic (or other) authentication."}),"\n",(0,t.jsx)(n.p,{children:"Haven Web server doesn't host any account or chat data. If you expose Speakeasy to the Internet, the main concern is to prevent NodeJS from application server take-over and tampering, so it can be advantageous to run it using a limited local account, and optionally add some form of authentication to your HTTPS proxy."}),"\n",(0,t.jsx)(n.p,{children:"Once a TLS-enabled proxy is functional, you can access Haven, create a new codename or import existing, and start using Haven."}),"\n",(0,t.jsx)(n.h2,{id:"update-haven",children:"Update Haven"}),"\n",(0,t.jsx)(n.p,{children:"As mentioned before, Haven can be simply wiped and re-installed because only serves the application code and does not store any client data."}),"\n",(0,t.jsx)(n.p,{children:"The official instance (haven.xx.network) normally runs the latest version, so visit that site from time to time, or watch the Speakeasy repository for new releases, or follow xx Network on Twitter."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},27468:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(30758);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);