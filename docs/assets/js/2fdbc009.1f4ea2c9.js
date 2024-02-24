"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[8228],{8320:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=n(7624),i=n(4552);const s={slug:"2024/02/24/second-github-account",title:"Using Git with second Github account",authors:["armchairancap"],tags:["IT"],description:"How to configure second git identity for Github",keywords:["github","git","authorization","permission denied"]},c=void 0,r={permalink:"/blog/2024/02/24/second-github-account",source:"@site/blog/2024-02-24-github-with-second-account.md",title:"Using Git with second Github account",description:"How to configure second git identity for Github",date:"2024-02-24T00:00:00.000Z",formattedDate:"February 24, 2024",tags:[{label:"IT",permalink:"/blog/tags/it"}],readingTime:1.175,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/02/24/second-github-account",title:"Using Git with second Github account",authors:["armchairancap"],tags:["IT"],description:"How to configure second git identity for Github",keywords:["github","git","authorization","permission denied"]},unlisted:!1,nextItem:{title:"Use xx Network CLI",permalink:"/blog/2024/02/09/xx-network-cli-irc-like-client"}},a={authorsImageUrls:[void 0]},h=[];function u(t){const e={code:"code",p:"p",pre:"pre",...(0,i.M)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"On using Github with multiple SSH identities: I'm sure there are multiple potential problems in this area (ssh-agent, etc.), but one that kept getting me was that I had github.com in ~/.ssh/config."}),"\n",(0,o.jsx)(e.p,{children:'Then, as I tried to use the second ID called "two", I\'d get a permission denied error on git operations used by this account because git tried to use the ID "one" for those as well. Which is weird if you think in terms of .git/config which is properly configured for the user "two".'}),"\n",(0,o.jsx)(e.p,{children:'In this case, one solution is to create another entry in ~/.ssh/config for the second user (let\'s say this account is "two"):'}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-raw",children:"Host github.com\n  HostName      github.com\n  User\t\tgit\n  IdentityFile \t/home/YOU/.ssh/id_one\n\nHost two\n  HostName      github.com\n  User\t\tgit\n  IdentityFile \t/home/YOU/.ssh/id_two\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Now in ",(0,o.jsx)(e.code,{children:".git/config"}),' for this second account use that second identity in both the hostname and (when working with repos owned by that second account) your Github account name (also "two"). For example:']}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-raw",children:"url = git@two:two/SOMEREPO.git\n"})}),"\n",(0,o.jsxs)(e.p,{children:['Assuming you\'re not affected by other (or another) problem, git operations on your SOMEREPO should now authenticate using the key of the user ID "two" rather than the usual ',(0,o.jsx)(e.code,{children:"/home/YOU/.ssh/id_one"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:['You may also test this (assuming the ID two has been added to ssh-agent) by connecting to the SSH host "two" from ',(0,o.jsx)(e.code,{children:"~/.ssh/config"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"$ ssh -T two\nHi two! You've successfully authenticated, but GitHub does not provide shell access.\n"})})]})}function d(t={}){const{wrapper:e}={...(0,i.M)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>r,M:()=>c});var o=n(1504);const i={},s=o.createContext(i);function c(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);