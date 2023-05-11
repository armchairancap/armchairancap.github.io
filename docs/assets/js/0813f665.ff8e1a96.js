"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3},o="Hardware and software requirements",s={unversionedId:"speakeasy-admin-guide/hw-sw-requirements",id:"speakeasy-admin-guide/hw-sw-requirements",title:"Hardware and software requirements",description:"Speakeasy Web server delivers Speakeasy Web application code to the client every time the application is updated or browser cache emptied.",source:"@site/docs/speakeasy-admin-guide/hw-sw-requirements.md",sourceDirName:"speakeasy-admin-guide",slug:"/speakeasy-admin-guide/hw-sw-requirements",permalink:"/docs/speakeasy-admin-guide/hw-sw-requirements",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Privacy and security",permalink:"/docs/speakeasy-admin-guide/privacy-and-security"},next:{title:"Deploy and maintain Speakeasy",permalink:"/docs/speakeasy-admin-guide/deploy-and-maintain"}},l={},p=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Containerized Speakeasy services",id:"containerized-speakeasy-services",level:3},{value:"Software requirements",id:"software-requirements",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hardware-and-software-requirements"},"Hardware and software requirements"),(0,n.kt)("p",null,"Speakeasy Web server delivers Speakeasy Web application code to the client every time the application is updated or browser cache emptied."),(0,n.kt)("p",null,"Apart from building the app or container (these tasks take a long time on a small machine), the OS running Speakeasy will be mostly idle."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Administrators who set up Speakeasy in a cloud environment may use the same VM for another application such as VPN proxy or Tor proxy, especially if the application does not consume a lot of RAM (Tor can be heavy, but Wireguard is not).")),(0,n.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x86_64 or ARM64 system capable of running a recent Linux OS"),(0,n.kt)("li",{parentName:"ul"},"1 vCPU "),(0,n.kt)("li",{parentName:"ul"},"1 GB RAM")),(0,n.kt)("h3",{id:"containerized-speakeasy-services"},"Containerized Speakeasy services"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Podman, Docker, Kubernetes, etc.")),(0,n.kt)("h2",{id:"software-requirements"},"Software requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Recent Linux distribution or (for containerized Speakeasy) container platform"),(0,n.kt)("li",{parentName:"ul"},"FQDN (for TLS certificate)"),(0,n.kt)("li",{parentName:"ul"},"HTTPS proxy (Caddy, Cloudflare, NGINX, Traefik, etc.) with a TLS certificate"),(0,n.kt)("li",{parentName:"ul"},"Recent Node.js LTS (required for non-containerized deployment; it is already included in Speakeasy container image)")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Cloudflare offers hosted HTTPS proxy service and TLS certificates, which has its advantages and disadvantages. Validate against own requirements.")))}d.isMDXComponent=!0}}]);