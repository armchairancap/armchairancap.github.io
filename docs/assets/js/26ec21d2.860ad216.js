"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[4234],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(4137));const o={slug:"2023/06/05/xx-network-chat-security-dot-txt",title:"Case for xx Network chat link in security.txt",authors:["armchairancap"],tags:["xx network","haven"],description:"Case for xx Network Haven chat link in security.txt",keywords:["xx network","haven","security.txt","chat","contact"]},i=void 0,s={permalink:"/blog/2023/06/05/xx-network-chat-security-dot-txt",source:"@site/blog/2023-06-05-security-text-file.md",title:"Case for xx Network chat link in security.txt",description:"Case for xx Network Haven chat link in security.txt",date:"2023-06-05T00:00:00.000Z",formattedDate:"June 5, 2023",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"haven",permalink:"/blog/tags/haven"}],readingTime:2.58,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2023/06/05/xx-network-chat-security-dot-txt",title:"Case for xx Network chat link in security.txt",authors:["armchairancap"],tags:["xx network","haven"],description:"Case for xx Network Haven chat link in security.txt",keywords:["xx network","haven","security.txt","chat","contact"]},prevItem:{title:"Use xx Network CLI",permalink:"/blog/2024/02/09/xx-network-cli-irc-like-client"},nextItem:{title:"Sign and verify messages using xx Network wallet",permalink:"/blog/2023/05/08/xx-network-wallet-sign-verify"}},c={authorsImageUrls:[void 0]},l=[{value:"security.txt",id:"securitytxt",level:2},{value:"Example",id:"example",level:2},{value:"Use case for Haven",id:"use-case-for-haven",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"securitytxt"},"security.txt"),(0,a.kt)("p",null,"The Dutch Digital Trust Center mandates that all government sites must have a security files under the ",(0,a.kt)("inlineCode",{parentName:"p"},".well-known")," directory located at the root of Web site."),(0,a.kt)("p",null,"Use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go-to place to get information on how to report vulnerabilities affecting the site or organization"),(0,a.kt)("li",{parentName:"ul"},"Improve the speed of getting in touch")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ncsc.nl/.well-known/security.txt"},"https://www.ncsc.nl/.well-known/security.txt")," captured on Jun 1, 2023."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-raw"},"-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA512\n\n# Domeinen van de Rijksoverheid kunnen met een 302 redirect verwijzen naar\n# het centrale bestand op https://www.ncsc.nl/.well-known/security.txt\n# omdat het NCSC het centrale meldpunt is voor kwetsbaarheden en incidenten\n# voor de Rijksoverheid.\n#\n# Dutch central government domains can redirect to the central file located\n# at https://www.ncsc.nl/.well-known/security.txt with a 302 redirect,\n# because NCSC-NL is the central point of contact for vulnerabilities and\n# incidents for the Dutch central government.\n\nExpires: 2024-01-31T22:59:00.000Z\nCanonical: https://www.ncsc.nl/.well-known/security.txt\n\nPolicy: https://www.ncsc.nl/contact/kwetsbaarheid-melden\nPolicy: https://english.ncsc.nl/contact/reporting-a-vulnerability-cvd\n\nContact: https://www.ncsc.nl/contact/kwetsbaarheid-melden\nContact: https://english.ncsc.nl/contact/reporting-a-vulnerability-cvd\nContact: mailto:security@ncsc.nl\nEncryption: https://www.ncsc.nl/contact/pgp-key\nPreferred-Languages: nl, en\n\nAcknowledgments: https://www.ncsc.nl/wall-of-fame\nHiring: https://www.werkenvoornederland.nl\n\n-----BEGIN PGP SIGNATURE-----\nVersion: Encryption Desktop 10.4.2 (Build 1298)\nCharset: utf-8\n\nwsDVAwUBY+9c0P4Vd0fJc7lbAQpUmQwAwZ1vWyI1VKBChsciufRcvxy5zzMZMx6v\nYjD5CXuDV4GL+tRl7wClnQO023e3ZChTH69y7O3veS+5/zNVUvpyqJfS8pNzG0pA\nB4vea3fQ41t5UpCVYvPopIFiT1oeQJA9w4NqBD2+2jW5lS5L8k9xz192gWJvhxq8\nmTukJXYDiJLzxKbUMHEG2GNaMeoRj5Pvgr8buzQELP0VZHfzF05Hr6NOoWvS6SRX\nKGW6rgg6fEUPcMTjBqn6gL/w82FXwrh93AmYkP/sBWP4It3NpbiNuazc5iynhhih\n+ZlfzsFV6agF4MZR0IQZ6X4jsCxKFrPIWW51/7W+PIDkqy6za/bDjDeiinid0HOC\n2rro6N9FXSyxHz9nteMppd+YMTCt+Z67HONsssR+7ojxORGOs0rTcjUucaVikFJQ\nwAls9p+vuIzFRViQaXe3Nndspr1cCIu4z3ZfdkcWREQP7acOjNgbmeQOlH4jnYWq\nlNVMWzOncidAWM0nXcuYTjZagRAagthF\n=yC4A\n-----END PGP SIGNATURE-----\n")),(0,a.kt)("h2",{id:"use-case-for-haven"},"Use case for Haven"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"security.txt is PGP-signed to confirm that it was signed by the key owner and that's fine. But in reality most people hate to use it to compose emails or messages"),(0,a.kt)("li",{parentName:"ul"},"it is time-consuming for the recipient to download every sender's key which also delays reading encrypted messages"),(0,a.kt)("li",{parentName:"ul"},"Haven gives the reporter anonymity, both parties enjoy encryption and privacy, and can interact in real time (and still move to email if they so choose)"),(0,a.kt)("li",{parentName:"ul"},"Haven uses quantum-resistant encryption (I haven't checked, but it should be superior to PGP)")),(0,a.kt)("p",null,"Haven public chat link can be added to security.txt. Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-raw"},"Chat: https://.............. (security vulnerabilities only)\nContact: email - mailto:.........; chat - send DM to `aCertainTestifier`\nEncryption: https://www..../contact/pgp-key\n")),(0,a.kt)("p",null,"Because public chat could have several permanently present strangers in it, direct messages (DM) should be sent to contact person."),(0,a.kt)("p",null,"What are the weaknesses of using Haven here? "),(0,a.kt)("p",null,"The way I see it, the biggest is that xx Network keeps messages for 21 days and then they disappear. To prevent the situation where nothing happens for three weeks and messages disappear, the reporting person should move on to email if no response is received within hours."),(0,a.kt)("p",null,"With time, spam may become a problem for Haven. But it is already a problem for email now, so Haven is not worse."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Haven uses xx Network to store encrypted messages and Haven users can connect to xx Network from any (trusted) application server - whether it's container on own desktop client, the official Haven instance, etc. "),(0,a.kt)("p",null,'Compared to an email or Web service as means of communication, Haven is less likely to be affected by a vulnerability at the same time as your corporate email or Web service, so it is a cost-free, "out-of-band" solution that\'s more resistant to unplanned concurrent downtime or DDoS.'),(0,a.kt)("p",null,"Haven gives you zero maintenance, quantum-resistant encryption, superior privacy (compared to email and PGP), and far more convenience."))}h.isMDXComponent=!0}}]);