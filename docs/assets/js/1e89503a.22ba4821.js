"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[9539],{47581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(86070),i=t(27468);const o={slug:"2025/02/09/xx-coin-in-supra-starkey-wallet",title:"How to add WXX (ERC-20) xx coin to Supra StarKey",authors:["armchairancap"],tags:["xx network","xx chain","supra"],description:"How to add WXX to Supra StarKey and get access to Supra DEX services",keywords:["xx network","economics","validator","supra","dex","starkey"]},r=void 0,a={permalink:"/blog/2025/02/09/xx-coin-in-supra-starkey-wallet",source:"@site/blog/2025-02-09-xx-coin-in-supra-starkey-wallet.md",title:"How to add WXX (ERC-20) xx coin to Supra StarKey",description:"How to add WXX to Supra StarKey and get access to Supra DEX services",date:"2025-02-09T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"},{label:"supra",permalink:"/blog/tags/supra"}],readingTime:7.945,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2025/02/09/xx-coin-in-supra-starkey-wallet",title:"How to add WXX (ERC-20) xx coin to Supra StarKey",authors:["armchairancap"],tags:["xx network","xx chain","supra"],description:"How to add WXX to Supra StarKey and get access to Supra DEX services",keywords:["xx network","economics","validator","supra","dex","starkey"]},unlisted:!1,nextItem:{title:"Update on pool-blocking progress",permalink:"/blog/2025/01/27/xx-network-armchairancap-pool-blocking-update"}},d={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Non-native tokens/coins/NFTs in StarKey",id:"non-native-tokenscoinsnfts-in-starkey",level:2},{value:"WXX contract",id:"wxx-contract",level:2},{value:"Get StarKey",id:"get-starkey",level:2},{value:"Add WXX to StarKey",id:"add-wxx-to-starkey",level:2},{value:"Why do all this?",id:"why-do-all-this",level:2},{value:"Supra DEXes",id:"supra-dexes",level:3},{value:"xx coin and Supra ecosystem",id:"xx-coin-and-supra-ecosystem",level:3},{value:"How to buy Supra",id:"how-to-buy-supra",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#non-native-tokenscoinsnfts-in-starkey",children:"Non-native tokens/coins/NFTs in StarKey"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#wxx-contract",children:"WXX contract"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#get-starkey",children:"Get StarKey"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-wxx-to-starkey",children:"Add WXX to StarKey"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#why-do-all-this",children:"Why do all this?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#supra-dexes",children:"Supra DEXes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#xx-coin-and-supra-ecosystem",children:"xx coin and Supra ecosystem"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#how-to-buy-supra",children:"How to buy Supra"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#next-steps",children:"Next steps"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"StarKey wallet is the native wallet for Supra L1."}),"\n",(0,s.jsx)(n.p,{children:"xx coin is the native token of xx Network, a L1 network with integrated mixnet services for post-quantum privacy."}),"\n",(0,s.jsx)(n.p,{children:"WXX is an xx Foundation-issued, Ethereum-wrapped ERC20 token. It is also used on Uniswap DEX."}),"\n",(0,s.jsx)(n.p,{children:"This post explores StarKey for xx coin users (and speculators)."}),"\n",(0,s.jsx)(n.h2,{id:"non-native-tokenscoinsnfts-in-starkey",children:"Non-native tokens/coins/NFTs in StarKey"}),"\n",(0,s.jsx)(n.p,{children:"Supra StarKey is expanding its token support and currently support for 20 or so is natively built-in. What about the smalle ones, such as xx coin?"}),"\n",(0,s.jsxs)(n.p,{children:["According to ",(0,s.jsx)(n.a,{href:"https://starkey.app/faq",children:"StarKey FAQs"}),":"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"As of now, StarKey supports a variety of tokens, including all ERC-20 tokens, as well as tokens on the Aptos, Sui, and Solana blockchains"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This looks promising. Let's try!"}),"\n",(0,s.jsx)(n.h2,{id:"wxx-contract",children:"WXX contract"}),"\n",(0,s.jsxs)(n.p,{children:["Go to contract address and copy contract (",(0,s.jsx)(n.code,{children:"Token Contract (WITH 9 Decimals)"})," on right-hand side)."]}),"\n",(0,s.jsxs)(n.p,{children:["I got it from ",(0,s.jsx)(n.a,{href:"https://etherscan.io/token/0x171120219d3223E008558654ec3254A0F206edb2",children:"https://etherscan.io/token/0x171120219d3223E008558654ec3254A0F206edb2"}),", but I suggest you get it from Uniswap by yourself."]}),"\n",(0,s.jsx)(n.h2,{id:"get-starkey",children:"Get StarKey"}),"\n",(0,s.jsxs)(n.p,{children:["Download StarKey by following links from the official site (",(0,s.jsx)(n.a,{href:"http://www.supra.com",children:"www.supra.com"}),") or the ",(0,s.jsx)(n.a,{href:"https://starkey.app/",children:"StarKey app"})," page."]}),"\n",(0,s.jsx)(n.p,{children:"Currently desktop versions have more features, but I can't think of any that would interfere with WXX."}),"\n",(0,s.jsx)(n.p,{children:"I used StarKey on Chromium."}),"\n",(0,s.jsx)(n.h2,{id:"add-wxx-to-starkey",children:"Add WXX to StarKey"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Make a backup of your StarKey pass phrase. Like with other non-custodial walles, there's no other way to get access."})}),"\n",(0,s.jsx)(n.p,{children:"The pencil icon is where you toggle display (ON/OFF) of existing tokens. But WXX does not exist, so we need to add it."}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Currently, in StarKey v2.1.2, I have a problem in this particular wallet - any token with zero balance won't show despite being toggled to show by default."}),(0,s.jsx)(n.p,{children:"This works fine in another StarKey wallet, so it's probably some sort of a glitch."}),(0,s.jsx)(n.p,{children:"The main consequence is that you can't get the address of a currency with zero balance (because it's not shown), so you can't fund it either (not knowing the address)."}),(0,s.jsx)(n.p,{children:"But I used other tokens in another wallet and it worked, and it's supposed to work, so let's assume this is temporary. In any case, private key can be exported so you're never at risk of loss, it's just an inconvenience as-is."}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"If"})," you encounter this problem, you could ",(0,s.jsx)(n.strong,{children:"import"}),' own WXX private key for a "test" WXX address created elsewhere, and send some WXX to it - then the token ought to show. But since not much can be done (see below) with WXX in StarKey right now, you may as well wait until they fix it. The problem affects other coins (even built-in ones), so I\'m sure it will be fixed quickly.']})]}),"\n",(0,s.jsx)(n.p,{children:"To edit which tokens show, you need to click on the pencil icon."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"StarKey - Edit Tokens",src:t(15404).A+"",width:"357",height:"265"})}),"\n",(0,s.jsxs)(n.p,{children:["Once in Manage Token page, you can toggle other tokens (Solana, etc.), but to add WXX you need to click on the ",(0,s.jsx)(n.code,{children:"+"})," icon to add a custom token."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"StarKey - Add Custom Token",src:t(31619).A+"",width:"357",height:"142"})}),"\n",(0,s.jsx)(n.p,{children:"This is where the WXX contract is needed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Network: Ethereum"}),"\n",(0,s.jsx)(n.li,{children:"Contract: paste the WXX contract address you got earlier"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The rest will be auto-populated."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"StarKey - Add WXX Contract",src:t(42384).A+"",width:"359",height:"602"})}),"\n",(0,s.jsxs)(n.p,{children:["You have added ",(0,s.jsx)(n.code,{children:"WXX"}),"!"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"StarKey - Add Custom Token Complete",src:t(27008).A+"",width:"359",height:"598"})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can go back to ",(0,s.jsx)(n.code,{children:"Manage Tokens"})," (the pencil icon). Use the magnifying glass icon to find ",(0,s.jsx)(n.code,{children:"WXX"})," and click the star to make the token a favorite."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"StarKey - Toggle and Fav Token",src:t(72200).A+"",width:"361",height:"237"})}),"\n",(0,s.jsxs)(n.p,{children:["You may ",(0,s.jsx)(n.em,{children:"still"})," not see the token because it has zero balance, which is the problem I explained in a note above. This would mean you can't get your WXX wallet address, which also means you can't fund the address."]}),"\n",(0,s.jsx)(n.h2,{id:"why-do-all-this",children:"Why do all this?"}),"\n",(0,s.jsx)(n.p,{children:"The display problem is temporary and maybe you won't even notice it."}),"\n",(0,s.jsx)(n.p,{children:"Why bother in the first place? Several reasons."}),"\n",(0,s.jsx)(n.h3,{id:"supra-dexes",children:"Supra DEXes"}),"\n",(0,s.jsx)(n.p,{children:"WXX in your StarKey will (eventually) be trade-able on Supra DEXes."}),"\n",(0,s.jsx)(n.p,{children:"Currently, one is online (Dexlyn) and more are coming (Atmos, for example)."}),"\n",(0,s.jsx)(n.p,{children:"But again - why bother?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Low cost: Dexlyn's DEX charges 0.3% and transaction fees are negligible"}),"\n",(0,s.jsx)(n.li,{children:"Fast: transactions take seconds"}),"\n",(0,s.jsxs)(n.li,{children:["The first native stablecoin on Supra is Dexlyn's dexUSDC, which is USDC (ERC-20) wrapped on Supra L1 using Dexlyn's ",(0,s.jsx)(n.a,{href:"https://app.dexlyn.com/bridge",children:"Ethereum bridge"}),", so you will be able to","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Trade xx coin for dexUSDC"}),"\n",(0,s.jsx)(n.li,{children:"Exit/enter with WXX and USDC (ERC-20)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Dexlyn DEX does not yet support a variety of coins - it just launched last week."}),(0,s.jsx)(n.p,{children:"The above will be possible when generic ERC-20 coins/tokens become supported on Dexlyn DEX. You would then add your own pairs (such as dexWXX/dexUSDC)."}),(0,s.jsx)(n.p,{children:"Alternatively - see below - wait for Supra's own cross-chain support."})]}),"\n",(0,s.jsxs)(n.p,{children:["As an example of low fees, here's ",(0,s.jsx)(n.a,{href:"https://suprascan.io/tx/0x530fb379a0083bb5c9fda72b0b33287967715db75ccbdd6d156bfeb649384f5a/f",children:"an example"})," of a transaction involving Dexlyn's Ethereum bridge."]}),"\n",(0,s.jsx)(n.p,{children:"On Supra L1 side, the fee was US$0.000. Affordable, right?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"StarKey - SupraScan tx fee",src:t(52093).A+"",width:"990",height:"734"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see the exact amount is 0.001001 SUPRA (",(0,s.jsx)(n.strong,{children:"$0.00001742"}),"). Transaction fees will go up as L1 gets more busy, but even if they go up 10 times, it'll still be cheap! Did I mention that transactions complete in low single digit seconds?"]}),"\n",(0,s.jsx)(n.p,{children:"What else should you know?"}),"\n",(0,s.jsx)(n.p,{children:"Your StarKey WXX can be sent to any wallet that supports it, and private key of the address can be exported if you want to simply import the address to another wallet."}),"\n",(0,s.jsx)(n.p,{children:"For Dexlyn's DEX, they have instructions how to fund dexUSDC by sending USDC (ERC-20) to their bridge."}),"\n",(0,s.jsx)(n.p,{children:"The only thing missing is dexWXX-dexUSDC pair and the correspoinding Liquidity Pool."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"If you want to stay up-to-date, follow Dexlyn and Aptos on X."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Dexlyn: ",(0,s.jsx)(n.a,{href:"https://dexlyn.com/",children:"https://dexlyn.com/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Aptos: ",(0,s.jsx)(n.a,{href:"https://aptos.dev/",children:"https://aptos.dev/"})]}),"\n"]}),(0,s.jsxs)(n.p,{children:["Next key step for Delxyn - in the context of this post - is to add support for arbitrary DIY pairs and pools. To trade WXX on Dexlyn DEX we'd need to wrap it, and trade ",(0,s.jsx)(n.code,{children:"dexWXX/dexUSDC"}),"."]}),(0,s.jsx)(n.p,{children:"For Aptos, it's to launch."})]}),"\n",(0,s.jsx)(n.h3,{id:"xx-coin-and-supra-ecosystem",children:"xx coin and Supra ecosystem"}),"\n",(0,s.jsx)(n.p,{children:"Supra is just getting started. It's 10 weeks old."}),"\n",(0,s.jsx)(n.p,{children:"What's coming soon is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Native EVM support (the flagship language is Move, and MoveVM is the first VM supported since TGE), which means the Ethereum Smart Contract used to issue WXX could be issued on Supra L1 without using Ethereum L1"}),"\n",(0,s.jsx)(n.li,{children:"Bridgeless (yes, bridgeless) cross-chain swapping on Supra. When a Substate chain (probably Polkadot or Kusama) becomes supported, xx Network could be supported as well, but xx Network would have to update chain to support latest and greatest Substrate SDK features"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Either of these would be a huge improvement over WXX."}),"\n",(0,s.jsxs)(n.p,{children:["In the first case, with an ",(0,s.jsx)(n.code,{children:"SXX"})," (Supra-wrapped xx token) it would take seconds to exit to native xx tokens. And cost almost nothing. Sound good?"]}),"\n",(0,s.jsxs)(n.p,{children:["In the second case, ",(0,s.jsx)(n.code,{children:"WXX"})," would become redundant and xx Network wouldn't even ",(0,s.jsx)(n.em,{children:"need"})," a bridge."]}),"\n",(0,s.jsxs)(n.p,{children:["Another interesting thing is SupraNS, the official Supra name system, i.e. \"Supra's ENS\". It's ",(0,s.jsx)(n.a,{href:"https://suprans.id/names",children:"here"})," and requires Supra tokens to register. It's much cheaper than ENS, which is great, but because it just launched there's no wallet that supports it."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"StarKey will likely be the first to support SupraNS."})}),"\n",(0,s.jsx)(n.p,{children:"With SupraNS support in StarKey it will be easier to send tokens to Supra wallet."}),"\n",(0,s.jsx)(n.h2,{id:"how-to-buy-supra",children:"How to buy Supra"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This is not a recommendation or advice."})}),"\n",(0,s.jsx)(n.p,{children:"If you want to play with Supra tokens, SupraFS or Dexlyn DEX, today you need just some 2 dollars. Registering a SupraNS name now takes 1-40 SUPRA (depending on length) and transaction fees are low."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to play with this stuff (e.g. SupraNS), you need to fund your StarKey with either ",(0,s.jsx)(n.code,{children:"$USDC"})," (ERC-20) (and get ",(0,s.jsx)(n.code,{children:"dexUSDC"}),") or ",(0,s.jsx)(n.code,{children:"$SUPRA"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$USDC"})," to ",(0,s.jsx)(n.code,{children:"$SUPRA"})," - Dexlyn has instructions on how to fund ",(0,s.jsx)(n.code,{children:"$dexUSDC"})," with ",(0,s.jsx)(n.code,{children:"$USDC"})," over their Ethereum bridge. This is possible, but slightly complicated. I'd just buy $SUPRA and send it to my StarKey."]}),"\n",(0,s.jsxs)(n.li,{children:["Supra tokens get be swapped for ",(0,s.jsx)(n.code,{children:"dexUSDC"})," on Dexlyn DEX at ",(0,s.jsx)(n.a,{href:"https://app.dexlyn.com/",children:"https://app.dexlyn.com/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Native ",(0,s.jsx)(n.code,{children:"$SUPRA"})," - buy it on MEXC (most xx users have an account there)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can also get ",(0,s.jsx)(n.code,{children:"$SUPRA"})," at Houdini, SimpleSwap, and few other CEX (see CoinMarketCap or CoinGecko)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you want to try out existing dexUSDC-Supra Liquidity Pool, you need to stake it with more than $2, so I don't recommend this. It's no longer playing, but speculating/investing or whatever you want to call it."})}),"\n",(0,s.jsxs)(n.p,{children:["Once you have ",(0,s.jsx)(n.code,{children:"$SUPRA"})," you can register SupraFS names and buy/sell ",(0,s.jsx)(n.code,{children:"$dexUSDC"}),". You can also pay for Supra L1 transaction fees (which you need to send ",(0,s.jsx)(n.code,{children:"WXX"})," out)."]}),"\n",(0,s.jsxs)(n.p,{children:["If you don't want to use Dexlyn and only want to try ",(0,s.jsx)(n.code,{children:"WXX"})," in StarKey, you need just Supra for ",(0,s.jsx)(n.code,{children:"WXX"})," transaction fees."]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.p,{children:["That's not all! Supra has ",(0,s.jsx)(n.strong,{children:"quite a few"})," other tricks up their sleeve! Follow ",(0,s.jsx)(n.a,{href:"https://x.com/SUPRA_Labs",children:"SupraLabs on X"})," to see what they're up to."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're a Supra user interested in privacy, you can ",(0,s.jsx)(n.a,{href:"https://x.com/xx_network",children:"follow xx Network"})," to learn how StarKey and dApps could use xx Networks' mixnet (cmix) to provide privacy for its users./"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["xx Network's ",(0,s.jsx)(n.a,{href:"https://proxxy.xx.network/",children:"Proxxy"})," can be modified to support Supra L1 and route all client RPC calls through its mixnet, adding seconds of latency, but increasing privacy of the user."]}),(0,s.jsx)(n.p,{children:"Good use cases for StarKey and Proxxy: regular wallet transactions and anything else that can tolerate an extra 2-3 seconds required to route (encrypted) Supra RPC client calls through xx Network's cMix mixnet."})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},15404:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2025-02-09_01_edit_tokens-f9a20ab7bac1c2c2ae0726fa9b6283b5.png"},31619:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},42384:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2025-02-09_03_add_wxx-73155b9a76adaa5a919ccdfecaef1dae.png"},27008:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2025-02-09_04_wxx_added-6a4205bffe763cfa7c95a7f9cd5c9673.png"},72200:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2025-02-09_05_fav_wxx-a363a89e8298c9abb7d3353aec39b893.png"},52093:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2025-02-09_06_supra_l1_tx_fee-df20be00d1bbaf4926bf07ff5b84d6fc.png"},27468:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(30758);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);