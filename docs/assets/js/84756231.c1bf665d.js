"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[4695],{31944:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(86070),n=t(27468);const l={slug:"2025/04/01/supra-starkey-multiple-addresses",title:"Multiple addresses in Supra StarKey wallet",authors:["armchairancap"],tags:["supra"],description:"Basic tips for using multiple wallets and addresses in Supra Starkey",keywords:["supra","starkey","sns","name"],image:"/img/blog/2025-04-01-supra-starkey-multiple-addresses_01.png"},r=void 0,i={permalink:"/blog/2025/04/01/supra-starkey-multiple-addresses",source:"@site/blog/2025-04-01-supra-starkey-multiple-addresses.md",title:"Multiple addresses in Supra StarKey wallet",description:"Basic tips for using multiple wallets and addresses in Supra Starkey",date:"2025-04-01T00:00:00.000Z",tags:[{label:"supra",permalink:"/blog/tags/supra"}],readingTime:5.45,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2025/04/01/supra-starkey-multiple-addresses",title:"Multiple addresses in Supra StarKey wallet",authors:["armchairancap"],tags:["supra"],description:"Basic tips for using multiple wallets and addresses in Supra Starkey",keywords:["supra","starkey","sns","name"],image:"/img/blog/2025-04-01-supra-starkey-multiple-addresses_01.png"},unlisted:!1,nextItem:{title:"Supra signature validation without the SDK",permalink:"/blog/2025/03/30/supra-signature-validation"}},d={authorsImageUrls:[void 0]},o=[{value:"Introduction",id:"introduction",level:2},{value:"Use multiple addresses",id:"use-multiple-addresses",level:2},{value:"Use multiple wallets",id:"use-multiple-wallets",level:2},{value:"How could a wallet be exposed and not all its addresses get drained?",id:"how-could-a-wallet-be-exposed-and-not-all-its-addresses-get-drained",level:2},{value:"Wallet setup",id:"wallet-setup",level:2},{value:"Add addresses to same StarKey wallet",id:"add-addresses-to-same-starkey-wallet",level:2},{value:"Imported accounts",id:"imported-accounts",level:3},{value:"Basic privacy protection",id:"basic-privacy-protection",level:2},{value:"Method one",id:"method-one",level:3},{value:"Method two",id:"method-two",level:3},{value:"Method three",id:"method-three",level:3},{value:"Take-away",id:"take-away",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#use-multiple-addresses",children:"Use multiple addresses"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#use-multiple-wallets",children:"Use multiple wallets"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#how-could-a-wallet-be-exposed-and-not-all-its-addresses-get-drained",children:"How could a wallet be exposed and not all its addresses get drained?"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#wallet-setup",children:"Wallet setup"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#add-addresses-to-same-starkey-wallet",children:"Add addresses to same StarKey wallet"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#imported-accounts",children:"Imported accounts"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#basic-privacy-protection",children:"Basic privacy protection"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#method-one",children:"Method one"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#method-two",children:"Method two"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#method-three",children:"Method three"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#take-away",children:"Take-away"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(s.p,{children:"Supra Name Service (SNS) is one of my favorite features on the Supra Network."}),"\n",(0,a.jsx)(s.p,{children:"This post shares some tips related to using multiple wallets and addresses, as well as SNS, in StarKey wallet."}),"\n",(0,a.jsx)(s.h2,{id:"use-multiple-addresses",children:"Use multiple addresses"}),"\n",(0,a.jsx)(s.p,{children:"Why? Because wallets can get drained."}),"\n",(0,a.jsx)(s.p,{children:"Secondly, although Supra isn't a privacy-focused network, multiple addreses can be better for your privacy as well."}),"\n",(0,a.jsx)(s.h2,{id:"use-multiple-wallets",children:"Use multiple wallets"}),"\n",(0,a.jsx)(s.p,{children:"Should you use multiple wallets?"}),"\n",(0,a.jsx)(s.p,{children:"Maybe yes. If your wallet password gets compromised, all addresses in it are at risk."}),"\n",(0,a.jsx)(s.h2,{id:"how-could-a-wallet-be-exposed-and-not-all-its-addresses-get-drained",children:"How could a wallet be exposed and not all its addresses get drained?"}),"\n",(0,a.jsx)(s.p,{children:"I've mentioned wallets and addresses can get drained, but how could just one address in a wallet get drained?"}),"\n",(0,a.jsxs)(s.p,{children:["Because when you connect to a dApp, you pick ",(0,a.jsx)(s.em,{children:"an"})," address - not all addresses - from your wallet."]}),"\n",(0,a.jsx)(s.p,{children:"If malware that auto-approves transactions takes over, it may approve transactions, but may not necessarily go through the entire list of addresses, connect and drain them all."}),"\n",(0,a.jsx)(s.p,{children:"If malware is any good, it'll drain all addresses, but if not, some may survive."}),"\n",(0,a.jsx)(s.h2,{id:"wallet-setup",children:"Wallet setup"}),"\n",(0,a.jsx)(s.p,{children:"Given the above, you can consider your risks and convenience."}),"\n",(0,a.jsx)(s.p,{children:"I like a setup like this: two wallets, several addresses."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Wallet"}),(0,a.jsx)(s.th,{children:"Address"}),(0,a.jsx)(s.th,{children:"Purpose"}),(0,a.jsx)(s.th,{children:"SNS"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"1"}),(0,a.jsx)(s.td,{children:"Treasury"}),(0,a.jsx)(s.td,{children:"Staking"}),(0,a.jsx)(s.td,{children:"(none)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"1"}),(0,a.jsx)(s.td,{children:"LP"}),(0,a.jsx)(s.td,{children:"LP-ing"}),(0,a.jsx)(s.td,{children:"(none)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"2"}),(0,a.jsx)(s.td,{children:"Play"}),(0,a.jsx)(s.td,{children:"Trusted dApps"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"myname.supra"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"2"}),(0,a.jsx)(s.td,{children:"Testing"}),(0,a.jsx)(s.td,{children:"Testing untrusted dApps"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"test.myname.supra"})})]})]})]}),"\n",(0,a.jsx)(s.p,{children:"I wouldn't even give SNS names to addresses (accounts) in wallet One."}),"\n",(0,a.jsxs)(s.p,{children:['For wallet Two, I think it\'s nice to have a name at least for "frquent use" address. You could have two names (one or both subdomains) or two unrelated names (e.g. ',(0,a.jsx)(s.code,{children:"play.supra"}),", ",(0,a.jsx)(s.code,{children:"test.supra"}),"), but sending tokens between them would identify them as likely owned by the same user in any case."]}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsx)(s.p,{children:"As the first wallet (Treasury/LP) is most valuable, it's best to not even use it on the same device where your wallet Two is used."}),(0,a.jsx)(s.p,{children:"Furthermore, you may want to buy a Ledger hardware wallet for that wallet. Wallet number two may not be valuable enough to warrant protection (especially if the lack of convenience bothers you)."})]}),"\n",(0,a.jsx)(s.h2,{id:"add-addresses-to-same-starkey-wallet",children:"Add addresses to same StarKey wallet"}),"\n",(0,a.jsx)(s.p,{children:"This step is not very obvious, but it's simple enough. Click on the round cricle in top left corner."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Add additional addresses",src:t(64708).A+"",width:"359",height:"79"})}),"\n",(0,a.jsx)(s.p,{children:"The next step requires some thinking."}),"\n",(0,a.jsx)(s.p,{children:"Let's say I've created my wallet 2 and in it I already have my \"Play\" address. I want another one for Testing."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Select addresses type",src:t(1567).A+"",width:"360",height:"514"})}),"\n",(0,a.jsx)(s.p,{children:"In order of my personal preference:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:'Sub-account "Testing" will be recoverable with the same recovery method - it\'s a "cousin" of your Play account'}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"New account - different recovery, but approximately same risks, so I don't like this approach"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Imported account - this is the least convenient method, as you need to create an account (address) elsewhere and get its private key."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"imported-accounts",children:"Imported accounts"}),"\n",(0,a.jsx)(s.p,{children:"These seem like a hassle, but they have some advantages as well."}),"\n",(0,a.jsx)(s.p,{children:"Disadvantages:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Just getting a private key out of a wallet and sending/copying it around is risky and may result in a compromised address (not wallet)"}),"\n",(0,a.jsx)(s.li,{children:"You need to protect that private key ... somehow, because StarKey can't recover it for you. So you'll also need to keep it encrypted (or printed on paper) somewhere"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Advantages:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:['This method allows you to create and use "vanity address", such as ',(0,a.jsx)(s.code,{children:"0xb00b5..."}),' (i.e. "boobs"). In fact, you can create and import several such addresses, and it\'s easy to find them and recognize them in SupraScan even without a name']}),"\n",(0,a.jsx)(s.li,{children:"If you intend to use the same address from the CLI or similar, you'll need to have a copy of your private key elsewhere anyway"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["My use cases for imported accounts are related to both of the items listed under advantages (you can read about it ",(0,a.jsx)(s.a,{href:"/blog/2025/02/19/supra-suprans-sns-hex-names",children:"in a recent post here"}),")."]}),"\n",(0,a.jsx)(s.h2,{id:"basic-privacy-protection",children:"Basic privacy protection"}),"\n",(0,a.jsx)(s.p,{children:"This is actually one of the main reasons for this post: as I've mentioned Supra transacations are pseudo-anonymous, but let's do what we can."}),"\n",(0,a.jsx)(s.p,{children:"That is, make at least one hop between wallets One and Two, so that the link between wallet Two and One is not obvious."}),"\n",(0,a.jsx)(s.h3,{id:"method-one",children:"Method one"}),"\n",(0,a.jsx)(s.admonition,{type:"warning",children:(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Some CEX reuse addresses, so doing this multiple times doesn't work well privacy-wise"}),"\n",(0,a.jsx)(s.li,{children:"It is recommended to deposit and withdraw different amounts"}),"\n",(0,a.jsx)(s.li,{children:"Don't withdraw from the same CEX to both wallet One and Two"}),"\n"]})}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Send Supra from wallet One to a CEX"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Withdraw (different amount) funds from CEX to wallet Two"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"method-two",children:"Method two"}),"\n",(0,a.jsx)(s.p,{children:"Send ERC20 USDC (Ethereum) from a CEX to Metamask."}),"\n",(0,a.jsx)(s.p,{children:"From there, send USDC to Dexlyn bridge to get dexUSDC, then use Dexlyn Swap to swap dexUSDC to Supra using an address in wallet Two."}),"\n",(0,a.jsx)(s.p,{children:"Like in Method One, you may want to swap from dexUSDC to Supra in random-sized chunks over a period spanning at least several days."}),"\n",(0,a.jsx)(s.h3,{id:"method-three",children:"Method three"}),"\n",(0,a.jsx)(s.p,{children:"You could also buy Supra on a CEX and send to wallet Two, as presumably you'll never need a lot of Supra for addresses in wallet Two."}),"\n",(0,a.jsxs)(s.p,{children:["But - see Method number One - if you do it multiple times ",(0,a.jsx)(s.strong,{children:"or"})," send from CEX to both wallet One and Two, it's downhill from there."]}),"\n",(0,a.jsx)(s.p,{children:"--"}),"\n",(0,a.jsx)(s.p,{children:"No method gives you Monero-like privacy (far from that!), but that's okay: our sole purpose is to not make it obvious to scammers that you also own wallet One."}),"\n",(0,a.jsx)(s.p,{children:"Furthermore, if your wallet One is better secured (e.g. separate device, Ledger, multi-sig), it's even not that critical."}),"\n",(0,a.jsx)(s.p,{children:"In any case, sooner or later you'll make a mistake and send from wallet One to wallet Two or vice versa, so don't sweat it - just secure wallet One and you'll be fine."}),"\n",(0,a.jsx)(s.h2,{id:"take-away",children:"Take-away"}),"\n",(0,a.jsx)(s.p,{children:"Multiple wallets are useful for obvious reasons. High-value wallets should not be installed on the same device as low-value, frequent-use wallets."}),"\n",(0,a.jsx)(s.p,{children:"It's also advisable to use multiple accounts within each. I prefer to use sub-accounts, but other approaches may work for certain use cases."}),"\n",(0,a.jsx)(s.p,{children:'For "frequent use" wallets SupraNS names are convenient and any approach (domains, subdomains, etc) is fine for most users.'})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},64708:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/2025-04-01-supra-starkey-multiple-addresses_01-060dafaf39b1caa6576f8152edcf9e76.png"},1567:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/2025-04-01-supra-starkey-multiple-addresses_02-2f43f7bdc95ff436742ad958c4bb9fbe.png"},27468:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var a=t(30758);const n={},l=a.createContext(n);function r(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);