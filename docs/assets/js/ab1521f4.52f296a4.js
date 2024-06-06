"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[8649],{7815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(6070),i=t(7468);const s={slug:"2024/05/17/speakeasy-haven-private-event-chat",title:"xx Network as private event chat in online Web events",authors:["armchairancap"],tags:["xx network","apps"],description:"Simple PoC that shows how xx Network chat can be used in your application or on your Web site",keywords:["speakeasy","haven","chat"],image:"/img/blog/2024-05-17-01-iframe-chat-for-presentations.png"},o=void 0,r={permalink:"/blog/2024/05/17/speakeasy-haven-private-event-chat",source:"@site/blog/2024-05-17-speakeasy-haven-anonymous-event-chat.md",title:"xx Network as private event chat in online Web events",description:"Simple PoC that shows how xx Network chat can be used in your application or on your Web site",date:"2024-05-17T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"apps",permalink:"/blog/tags/apps"}],readingTime:3.985,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/05/17/speakeasy-haven-private-event-chat",title:"xx Network as private event chat in online Web events",authors:["armchairancap"],tags:["xx network","apps"],description:"Simple PoC that shows how xx Network chat can be used in your application or on your Web site",keywords:["speakeasy","haven","chat"],image:"/img/blog/2024-05-17-01-iframe-chat-for-presentations.png"},unlisted:!1,prevItem:{title:"xx Network client implements CTIDH PQ algo now",permalink:"/blog/2024/06/06/xx-network-client-switches-to-pq-ctidh"},nextItem:{title:"SecureDrop keeps themselves busy reinventing the wheel",permalink:"/blog/2024/05/08/can-securedrop-reinvent-the-wheel-probably-not"}},h={authorsImageUrls:[void 0]},c=[{value:"How to include xx Network chat in your application",id:"how-to-include-xx-network-chat-in-your-application",level:2},{value:"What works and what doesn&#39;t",id:"what-works-and-what-doesnt",level:2},{value:"Try it on Codepen",id:"try-it-on-codepen",level:2},{value:"Take-aways",id:"take-aways",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#how-to-include-xx-network-chat-in-your-application",children:"How to include xx Network chat in your application"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#what-works-and-what-doesnt",children:"What works and what doesn't"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#try-it-on-codepen",children:"Try it on Codepen"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#take-aways",children:"Take-aways"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-include-xx-network-chat-in-your-application",children:"How to include xx Network chat in your application"}),"\n",(0,a.jsx)(n.p,{children:'This is a very simple test or "proof of concept", if you will, for the inclusion of xx Network chat in Web applications.'}),"\n",(0,a.jsxs)(n.p,{children:["To minimize the amount of work required, I used ",(0,a.jsx)(n.code,{children:"iframe"}),"s:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The top frame shows a Web-based ImpressJS presentation"}),"\n",(0,a.jsxs)(n.li,{children:["The bottom frame shows xx Network Haven (formerly Speakeasy) app - event organizer is showing his view of a channel while using the community instance at ",(0,a.jsx)(n.a,{href:"https://alpha.speakeasy.tech",children:"https://alpha.speakeasy.tech"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(5427).A+"",width:"1050",height:"535"})}),"\n",(0,a.jsx)(n.p,{children:"The chat participants don't login to Haven in this Web browser."}),"\n",(0,a.jsx)(n.p,{children:"The bottom frame only shows chat from event participants, but both the top and bottom frame are just for viewing of organizer's content."}),"\n",(0,a.jsx)(n.p,{children:"Any chat comment would be entered by each chat participant in their own xx Haven session (maybe another browser altogether)."}),"\n",(0,a.jsx)(n.p,{children:"Can guests comment and how?"}),"\n",(0,a.jsxs)(n.p,{children:["The event organizer ",(0,a.jsx)(n.em,{children:"may"})," share the invitation link and password in order to allow participants to comment from own Haven instance (accessed in the participant's browser), but that is optional."]}),"\n",(0,a.jsx)(n.p,{children:"We have several possible scenarios. For example:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Only the event owner can chat (answer voice questions, share links...)"}),"\n",(0,a.jsxs)(n.li,{children:["Event owner and event guests (panelists, for example) chat, while guests can only view their comments in that ",(0,a.jsx)(n.code,{children:"iframe"})," above"]}),"\n",(0,a.jsx)(n.li,{children:"If event guests are provided with the channel invite, they can login to xx Haven (own or public instance) and chat (ask questions, comment, etc.) as well"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"what-works-and-what-doesnt",children:"What works and what doesn't"}),"\n",(0,a.jsx)(n.p,{children:"This is a very basic, no-code PoC, so it's not surprising that it's not usable in this form."}),"\n",(0,a.jsx)(n.p,{children:"Production-worthy setup would require some customization of at least xx Haven CSS, if not the application itself."}),"\n",(0,a.jsx)(n.p,{children:"But even so, we can appreciate and highlight some advantages and disadvantages."}),"\n",(0,a.jsx)(n.p,{children:"The good:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["No email or other identity needs to be shared with the organizer, but panelists or viewers ",(0,a.jsx)(n.em,{children:"may"})," choose to identify themselves by providing a signed proof of external identity"]}),"\n",(0,a.jsx)(n.li,{children:"Guests/panelists and possibly viewers receive the link - maybe it's shared in the presentation, maybe in another xx Haven channel - but links are not personalized and we can't know who is the author of each comment"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The bad:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Events open to public comments may be abused by spammers. Although individual accounts can be blocked by channel admin, automated spam attacks would be laborious to deal with so fully open events may be hard to manage"}),"\n",(0,a.jsx)(n.li,{children:"Layout: obviously the xx Haven frame doesn't use space economically. We'd have to create an instance that only exposes the chat itself, and possibly put that \"chat box\" in a narrow, vertical frame to the right"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"xx Network currently retains messages for three weeks which may be both good and bad depending on use case."}),"\n",(0,a.jsx)(n.h2,{id:"try-it-on-codepen",children:"Try it on Codepen"}),"\n",(0,a.jsxs)(n.p,{children:["You can try this on ",(0,a.jsx)(n.a,{href:"https://codepen.io/pen/",children:"codepen.io"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"First, switch the layout to have the code (HTML, CSS, JS) panes on the right hand side."}),"\n",(0,a.jsx)(n.p,{children:"Then paste this code to HTML pane and wait for the sites to load."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<html>\n  <div>\n    <div>\n<iframe src="https://impress.js.org/#/bored" width="1400" height="400">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n    </div>\n    <div>\n  <iframe src="https://alpha.speakeasy.tech" width="1400" height="500">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n    </div>\n  </div>\n</html>\n'})}),"\n",(0,a.jsx)(n.p,{children:"This screenshot shows a non-default layout (code on the right) with the iframes loaded/loading."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(9410).A+"",width:"1602",height:"873"})}),"\n",(0,a.jsx)(n.p,{children:"It may be tricky to login to xx Haven here, but it's easy to figure out once you realize you can scroll both left-right and up-down within the bottom frame."}),"\n",(0,a.jsx)(n.h2,{id:"take-aways",children:"Take-aways"}),"\n",(0,a.jsxs)(n.p,{children:["While this \"integration\" isn't even an integration - it's just two ",(0,a.jsx)(n.code,{children:"iframe"}),"s - I think it does show the opportunity for using xx Network for events in which the identity of each chat participant can remain hidden and any comments cannot be linked to them even by the event organizer."]}),"\n",(0,a.jsxs)(n.p,{children:["This runs contrary to the approach taken by most marketing-focused events - in the sense that participants' privacy ",(0,a.jsx)(n.em,{children:"decreases"})," engagement and tracking - but for events where privacy of the commenter is important, there's no way to link a participant's IP address with comments."]}),"\n",(0,a.jsx)(n.p,{children:"A participant's IP address could be hidden by accessing the Web event address over Tor, but comments may be entered directly in participant's own instance of xx Haven which can even be running locally (e.g. in container)."}),"\n",(0,a.jsx)(n.p,{children:"Furthermore, xx Haven provides unique, reusable identities (bossCompartmentalisedDisownment in the first screenshot), so each network identity can be reused without disclosing the participant's IP address and/or true identity. This may be useful in situations where a participant wishes to be recognized - for example, a designated identity may be reused across events to provide support or engage in 1-on-1 chat with participants for follow up."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},5427:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2024-05-17-01-iframe-chat-for-presentations-04cc190386b0a31034351ab708d55e42.png"},9410:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2024-05-17-02-iframe-in-codepen-d4e0a680ef216ace448119280bbe01bd.png"},7468:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(758);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);