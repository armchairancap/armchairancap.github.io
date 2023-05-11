"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[2156],{4137:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||s;return a?t.createElement(m,r(r({ref:n},d),{},{components:a})):t.createElement(m,r({ref:n},d))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2962:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=a(7462),i=(a(7294),a(4137));const s={sidebar_position:4},r="Channels",o={unversionedId:"speakeasy-user-guide/channels",id:"speakeasy-user-guide/channels",title:"Channels",description:"Speakeasy channels are group chats managed by user-appointed admins.",source:"@site/docs/speakeasy-user-guide/channels.md",sourceDirName:"speakeasy-user-guide",slug:"/speakeasy-user-guide/channels",permalink:"/docs/speakeasy-user-guide/channels",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Connect to xx Network",permalink:"/docs/speakeasy-user-guide/access-web-application"},next:{title:"Identity",permalink:"/docs/speakeasy-user-guide/identity"}},l={},c=[{value:"Join channel",id:"join-channel",level:2},{value:"Direct messages in Speakeasy",id:"direct-messages-in-speakeasy",level:3},{value:"Create channel",id:"create-channel",level:2},{value:"Share channel invite link",id:"share-channel-invite-link",level:2},{value:"Passphrase protection of private channel links",id:"passphrase-protection-of-private-channel-links",level:2},{value:"Export channel&#39;s admin keys",id:"export-channels-admin-keys",level:2},{value:"Claim admin keys",id:"claim-admin-keys",level:2},{value:"Moderate users and messages",id:"moderate-users-and-messages",level:2}],d={toc:c},p="wrapper";function h(e){let{components:n,...s}=e;return(0,i.kt)(p,(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"channels"},"Channels"),(0,i.kt)("p",null,"Speakeasy channels are group chats managed by user-appointed admins."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The user who creates the channel is the first admin. Subsequent admins can be added, and only added, by being given access to channel admin keys.")),(0,i.kt)("p",null,"There are private and public channels."),(0,i.kt)("p",null,"They can be created, shared, joined, left or deleted."),(0,i.kt)("h2",{id:"join-channel"},"Join channel"),(0,i.kt)("p",null,"To join a channel you need an invite URL and - if the channel is private - a passphrase."),(0,i.kt)("p",null,"Click on the plus sign (",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Join existing by url"),") and paste the invite link."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Join existing channel",src:a(8865).Z,width:"259",height:"205"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Invite links and passwords should not be shared via email. Use xx Messenger, Signal, Whatsapp or other end-to-end encrypted messaging.")),(0,i.kt)("p",null,"As always, don't click on random invite links just because - any link may be malicious!"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"A Speakeasy invite link looks like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://alpha.speakeasy.tech/join?0Name=xxGeneralChat..."),". If you click on that link without going through a proxy, speakeasy.tech may learn your IP address and use that to identify you.\nBad actors may even serve malware or set up a compromised Speakeasy Web application server for you. ")),(0,i.kt)("p",null,"speakeasy.tech happens to be the official xx Foundation instance, so that example is contrived and doesn't apply to users already using that server."),(0,i.kt)("p",null,"The hostname part of each Speakeasy channel invite is fungible and if you don't use that server you can simply replace it (alpha.speakeasy.tech) with their own Speakeasy FQDN such as myspeakeay.dyndns.org, and keep the rest intact. That invite link will still work, won't reveal your IP address and won't land you on a compromised server instance."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"xx Network currently has no search feature so there's no easy way to learn of public Speakeasy channels. ",(0,i.kt)("a",{parentName:"p",href:"/xx-directory/"},"xx Directory")," has links to several channels you may try.")),(0,i.kt)("h3",{id:"direct-messages-in-speakeasy"},"Direct messages in Speakeasy"),(0,i.kt)("p",null,"When joining a channel, user may enable DM (Direct Messages from channel members). That makes it possible for channel members to send you direct messages."),(0,i.kt)("p",null,"In a channel with untrusted participants you may not want to enable DM and receive scam and malware links."),(0,i.kt)("p",null,"Clicking on the first icon (green envelope) would create a DM to the author of this channel message. The icon is visible to us because this user enabled Direct Messages in their channel options and preferences."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DM a channel participant",src:a(8297).Z,width:"603",height:"108"})),(0,i.kt)("h2",{id:"create-channel"},"Create channel"),(0,i.kt)("p",null,"Click on the plus sign (",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Create new"),") and pick ",(0,i.kt)("inlineCode",{parentName:"p"},"Create new"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create new",src:a(8865).Z,width:"259",height:"205"})),(0,i.kt)("p",null,"To create a channel, a name and a description are needed. "),(0,i.kt)("p",null,"When you create a channel, you become its first administrator. Additional administrator accounts can be added by exporting and securely sharing admin keys for the channel."),(0,i.kt)("h2",{id:"share-channel-invite-link"},"Share channel invite link"),(0,i.kt)("p",null,"Both users and admins can share channel invite links."),(0,i.kt)("p",null,"While that may seem strange, each regular user joins by using an invite link and corresponding passphrase, and can consequently share the same to another person or their own backup codename."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Speakeasy invite for private channel",src:a(3311).Z,width:"604",height:"444"})),(0,i.kt)("p",null,"Public channels only require an invite link."),(0,i.kt)("p",null,"Invite links are generated as domain-specific so that users know where they can access a Speakeasy server instance, but users can replace server name with another - see ",(0,i.kt)("a",{parentName:"p",href:"/docs/speakeasy-user-guide/channels#join-channel"},"Join Channel")," for more."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is not possible to change or invalidate a channel invite link (including private channels). If you're concerned about invitation leaks, migrate to a new channel regularly by creating and sharing a new link out of band.")),(0,i.kt)("h2",{id:"passphrase-protection-of-private-channel-links"},"Passphrase protection of private channel links"),(0,i.kt)("p",null,"Private channels are passphrase-protected. The invite URL and passphrase are reveled when an admin clicks on the channel share icon."),(0,i.kt)("p",null,"An example of a Speakeasy channel passphrase can be viewed in the invite above: ",(0,i.kt)("inlineCode",{parentName:"p"},"diagnoses clanking elevating mortified little ablaze lecturer diner"),"."),(0,i.kt)("h2",{id:"export-channels-admin-keys"},"Export channel's admin keys"),(0,i.kt)("p",null,"The first administrator may invite a friend or another account of theirs to join the chat, and make such accounts administrators."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'Subsequent administrators have the same power as the first administrator (i.e. the person who created the channel).\nThere\'s no way to "kick" an administrator, recall someone\'s admin keys, or "change the channel password", so be careful when making these decisions.\nThe second or third channel admin may mute and effectively kick the original administrator.\nIf you\'re concerned about losing control over your channel, tell users where they can find you in the case you lose admin access or codename (identity).')),(0,i.kt)("p",null,"To backup admin keys or export them for sharing with another user, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," in channel settings (see the dimmed dots in top right corner), and ",(0,i.kt)("inlineCode",{parentName:"p"},"Export Admin Keys"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export admin keys",src:a(498).Z,width:"815",height:"290"})),(0,i.kt)("p",null,"You will be prompted to encrypt the file. Use a strong and unique password."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you're the sole administrator and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Logout")," in application settings, that clears browser cache and logs you out. Without having admin keys, you may not be able to administer your channels again. Without having channel invite links, you may even not know how to view them again, let alone manage those that you owned.\nBackup your admin keys and channel invite links by exporting them and storing them in your password manager or other secure place. You may also create multiple accounts and make all of them administrators.")),(0,i.kt)("h2",{id:"claim-admin-keys"},"Claim admin keys"),(0,i.kt)("p",null,"When you restore a channel you administer or somebody wants to add you as admin, you need to get a copy of admin keys and claim admin keys."),(0,i.kt)("p",null,"That's done in channel settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Claim admin keys",src:a(7046).Z,width:"608",height:"296"})),(0,i.kt)("p",null,"If you can't see the channel, add it first, and then claim its admin keys (status)."),(0,i.kt)("h2",{id:"moderate-users-and-messages"},"Moderate users and messages"),(0,i.kt)("p",null,"Administrators can mute users and delete their messages."),(0,i.kt)("p",null,"To delete a message or mute a user, right-click and choose appropriate action. "),(0,i.kt)("p",null,'In this screenshot clicking on the second icon would result in a "Mute user" confirmation, while the fourth would delete that individual message.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mute a user or delete their message",src:a(8297).Z,width:"603",height:"108"})))}h.isMDXComponent=!0},498:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/channel-settings-3337aac66ba50081e9360e58a483ddfe.png"},7046:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/claim-admin-keys-9004777a807f2c8d67075cf554f70dfe.png"},8865:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/png;base64,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"},8297:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/moderation-mute-delete-61f0215eb13410b1794acdbeca78f25d.png"},3311:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/share-channel-private-f70d95774f6cfc0b69e84e32894c965f.png"}}]);