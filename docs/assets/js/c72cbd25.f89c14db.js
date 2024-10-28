"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[9861],{5466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(6070),i=n(7468);const r={slug:"2024/10/13/bip-utils-with-xx-network",title:"Use BIP39 from bip-utils with xx Network",authors:["armchairancap"],tags:["xx network"],description:"How to use bip-utils with xx network",keywords:["xx network","xx chain"]},o=void 0,s={permalink:"/blog/2024/10/13/bip-utils-with-xx-network",source:"@site/blog/2024-10-13-bip-utils-with-xx-network.md",title:"Use BIP39 from bip-utils with xx Network",description:"How to use bip-utils with xx network",date:"2024-10-13T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"}],readingTime:.865,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/10/13/bip-utils-with-xx-network",title:"Use BIP39 from bip-utils with xx Network",authors:["armchairancap"],tags:["xx network"],description:"How to use bip-utils with xx network",keywords:["xx network","xx chain"]},unlisted:!1,nextItem:{title:"A comparison between Nym and xx Network",permalink:"/blog/2024/08/20/nym-vs-xxnetwork"}},u={authorsImageUrls:[void 0]},c=[{value:"bip-utils",id:"bip-utils",level:2},{value:"xx Network support",id:"xx-network-support",level:2},{value:"Use from Substrate and bip-utils",id:"use-from-substrate-and-bip-utils",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"bip-utils",children:"bip-utils"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/ebellocchia/bip_utils",children:"bip-utils"})," allows generating mnemonics, seeds, private/public keys and addresses for different types of cryptocurrencies, including Substrate-based currencies."]}),"\n",(0,a.jsx)(t.h2,{id:"xx-network-support",children:"xx Network support"}),"\n",(0,a.jsxs)(t.p,{children:["I added it to a fork ",(0,a.jsx)(t.a,{href:"https://github.com/armchairancap/bip_utils_xx/commit/6b15ab0d26aa8a75238a1047336e82e1549c79bc",children:"here"}),". You could make similar/same modifications to bip-utils and build it yourself, of course."]}),"\n",(0,a.jsx)(t.p,{children:'I\'d have to submit a patch to upstream, but "generic" Substrate coins are supported as well, so you could use it the same way without "hardcoded" XX configuration in bip-utils. You\'d need to specify a custom coin/chain configuration, though. In the fork, that\'s already done.'}),"\n",(0,a.jsx)(t.h2,{id:"use-from-substrate-and-bip-utils",children:"Use from Substrate and bip-utils"}),"\n",(0,a.jsx)(t.p,{children:"Using Substrate:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:">>> from substrateinterface import SubstrateInterface, Keypair, KeypairType\n>>> from substrateinterface.exceptions import SubstrateRequestException\n>>> kp = Keypair.create_from_mnemonic('abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',ss58_format=55)\n>>> kp.ss58_address\n'6XcmqdSCi4Y4Qa4aVjqZRZbuB5P83CZ2XeuKnmtrd1DK75BL'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Using bip-utils, we follow the Substrate example from ",(0,a.jsx)(t.a,{href:"https://github.com/ebellocchia/bip_utils/blob/master/readme/substrate.md",children:"here"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:">>> import binascii\n>>> from bip_utils import Bip39MnemonicGenerator, Bip39WordsNum, Substrate, SubstrateBip39SeedGenerator, SubstrateCoins\n>>> mnemonic = \"abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about\"\n>>> seed_bytes = SubstrateBip39SeedGenerator(mnemonic).Generate()\n>>> substrate_ctx.m_pub_key.ToAddress()\n'6XcmqdSCi4Y4Qa4aVjqZRZbuB5P83CZ2XeuKnmtrd1DK75BL'\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7468:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(758);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);