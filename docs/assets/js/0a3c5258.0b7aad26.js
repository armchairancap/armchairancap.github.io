"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[8326],{4009:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(6070),i=s(7468);const o={sidebar_position:6},a="Disconnect from xx Network",r={id:"speakeasy-user-guide/disconnect",title:"Disconnect from xx Network",description:"This section describes various ways to disconnect and how they differ.",source:"@site/docs/speakeasy-user-guide/disconnect.md",sourceDirName:"speakeasy-user-guide",slug:"/speakeasy-user-guide/disconnect",permalink:"/docs/speakeasy-user-guide/disconnect",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Use cases",permalink:"/docs/speakeasy-user-guide/use-cases"},next:{title:"General tips",permalink:"/docs/speakeasy-user-guide/misc"}},d={},c=[{value:"Comparison",id:"comparison",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Disconnection vs. data retention",id:"disconnection-vs-data-retention",level:2}];function l(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"disconnect-from-xx-network",children:"Disconnect from xx Network"}),"\n",(0,t.jsx)(n.p,{children:"This section describes various ways to disconnect and how they differ."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Close the browser"}),"\n",(0,t.jsx)(n.li,{children:"Leave selected channel(s)"}),"\n",(0,t.jsx)(n.li,{children:"Log out"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The first two leave encrypted application cache in place, so if your password is strong enough and you can't be compelled to disclose it, that is safe enough."}),"\n",(0,t.jsx)(n.p,{children:"The third way clears encrypted Speakeasy cache. This is similar to closing the browser and then clearing all cache apart from history."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"As mentioned earlier Incognito/Private Mode cannot be used, so its usefulness is not considered."})}),"\n",(0,t.jsx)(n.h2,{id:"comparison",children:"Comparison"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Item \\ Action"}),(0,t.jsx)(n.th,{children:"Close browser"}),(0,t.jsx)(n.th,{children:"Log out"}),(0,t.jsx)(n.th,{children:"Leave channel"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Speakeasy cache"}),(0,t.jsx)(n.td,{children:"Remains"}),(0,t.jsx)(n.td,{children:"App cache deleted"}),(0,t.jsx)(n.td,{children:"Remains except for deleted channel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"User's codename"}),(0,t.jsx)(n.td,{children:"Re-enter password"}),(0,t.jsx)(n.td,{children:"Load codename JSON"}),(0,t.jsx)(n.td,{children:"Re-enter password"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Channels"}),(0,t.jsx)(n.td,{children:"Remains"}),(0,t.jsx)(n.td,{children:"Must re-join all"}),(0,t.jsx)(n.td,{children:"Must re-join channel(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Admin keys"}),(0,t.jsx)(n.td,{children:"Remains"}),(0,t.jsx)(n.td,{children:"Must load, if any"}),(0,t.jsx)(n.td,{children:"Must re-load for left channel(s)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,t.jsxs)(n.p,{children:["The most secure option is to ",(0,t.jsx)(n.strong,{children:"Logout"})," (application settings) every time."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Log out",src:s(1006).A+"",width:"779",height:"439"})}),"\n",(0,t.jsx)(n.p,{children:"But that also means the next time you want to use the app, you'll have to restore identity (or create a new one), rejoin all channels and (if you administer any) load admin keys. This is safe, but time-consuming and may require frequent access to a password manager and therefore expose you to additional risks."}),"\n",(0,t.jsxs)(n.p,{children:["If you only wish to remove certain data from cache, it may be enough to ",(0,t.jsx)(n.strong,{children:"Leave Channel"})," (channel settings) and close the browser."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Leave channel",src:s(5653).A+"",width:"607",height:"311"})}),"\n",(0,t.jsx)(n.p,{children:"That leaves application cache in place, but without the questionable channel. While this is better than leaving the channel in place, it's not foolproof. For example, if your password leaked your codename would become known or someone could check their channels to find your activity. Or they could paste intercepted invites to re-join those channels using your codename."}),"\n",(0,t.jsx)(n.p,{children:"For the paranoid and those on shared computers (which by the way may have keylogger), it is better to log out as long as you don't mind doing repetitive steps every time you start the application."}),"\n",(0,t.jsx)(n.p,{children:"Most practical approach for those who cannot be compelled to disclose password is to use a strong password and close the browser."}),"\n",(0,t.jsx)(n.h2,{id:"disconnection-vs-data-retention",children:"Disconnection vs. data retention"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Text below is based on my understanding of how browser cache and xx Network databases work. I have not inspected the source code."})}),"\n",(0,t.jsx)(n.p,{children:"Data retention on xx Network is currently 21 days."}),"\n",(0,t.jsxs)(n.p,{children:["Data retention on a Speakeasy ",(0,t.jsx)(n.em,{children:"client instance"})," is not limited, so as long as the client doesn't clear its browser cache by logging out or otherwise, messages will be retained over 21 days. User who connects from two desktops may have 7 days of conversations in the cache of one Speakeasy instance, and 27 days in another."]}),"\n",(0,t.jsx)(n.p,{children:"These server- and client-side retention values and behaviors can and probably will be adjusted in the future."}),"\n",(0,t.jsx)(n.p,{children:"Currently there's no way to customize data retention and make it shorter. Consider this simple workflow to make message deletion a habit:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sender: sends message"}),"\n",(0,t.jsx)(n.li,{children:"Recepient: reads message and acknowledges with an emoji reaction"}),"\n",(0,t.jsx)(n.li,{children:"Sender: deletes message (which deletes it for everyone who is online). This can also also be done by a channel admin who can also remind recepients to acknowledge messages that seem sensitive"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Also note that the sender who goes offline before step three will not have the message removed from local browser cache even if administrator deleted the message in step three: the sender would have to go online to delete the message or have it removed if it was deleted by a channel administrator."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5653:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/app-menu-197f8697899dfe8567f4c5200f7856d3.png"},1006:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/export-my-codename-72f9ade3596e9e5336597aa6ed108a08.png"},7468:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(758);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);