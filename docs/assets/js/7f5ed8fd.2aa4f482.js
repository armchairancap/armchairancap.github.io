"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[1928],{3380:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(6070),a=s(7468);const i={slug:"2023/11/05/xx-network-asset-gated-access",title:"NFT-gated access on xx Network",authors:["armchairancap"],tags:["xx network","xx chain","nft","asset"],description:"",keywords:["xx network","speakeasy","docker","container","server","instance","haven"]},o=void 0,r={permalink:"/blog/2023/11/05/xx-network-asset-gated-access",source:"@site/blog/2024-11-05-xx-chain-asset-gated-access.md",title:"NFT-gated access on xx Network",description:"",date:"2024-11-05T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"},{label:"nft",permalink:"/blog/tags/nft"},{label:"asset",permalink:"/blog/tags/asset"}],readingTime:6.825,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2023/11/05/xx-network-asset-gated-access",title:"NFT-gated access on xx Network",authors:["armchairancap"],tags:["xx network","xx chain","nft","asset"],description:"",keywords:["xx network","speakeasy","docker","container","server","instance","haven"]},unlisted:!1,nextItem:{title:"Notes on forked comparison of messengers",permalink:"/blog/2024/11/01/haven-comparison-notes"}},c={authorsImageUrls:[void 0]},l=[{value:"Tokens, assets, NFTs, WTF",id:"tokens-assets-nfts-wtf",level:2},{value:"Token-gated access control",id:"token-gated-access-control",level:2},{value:"Asset-gated access control",id:"asset-gated-access-control",level:2},{value:"Query (check NFT balance)",id:"query-check-nft-balance",level:2},{value:"Buying and selling NFTs on xx chain",id:"buying-and-selling-nfts-on-xx-chain",level:2},{value:"Dealing with subscription expiration",id:"dealing-with-subscription-expiration",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Alien NFTs",id:"alien-nfts",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tokens-assets-nfts-wtf",children:"Tokens, assets, NFTs, WTF"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#token-gated-access-control",children:"Token-gated access control"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#asset-gated-access-control",children:"Asset-gated access control"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#query-check-nft-balance",children:"Query (check NFT balance)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#buying-and-selling-nfts-on-xx-chain",children:"Buying and selling NFTs on xx chain"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#dealing-with-subscription-expiration",children:"Dealing with subscription expiration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#use-cases",children:"Use cases"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#alien-nfts",children:"Alien NFTs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#summary",children:"Summary"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tokens-assets-nfts-wtf",children:"Tokens, assets, NFTs, WTF"}),"\n",(0,t.jsx)(n.p,{children:"This is silly, but:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The xx coin, the native currency of xx chain, is a "token"'}),"\n",(0,t.jsx)(n.li,{children:"Actual tokens issued on chain (a feature of Polkadot SDK-based chains) are not tokens, but NFTs"}),"\n",(0,t.jsx)(n.li,{children:'xx Wallet doesn\'t call these tokens NFTs, it calls them "assets"'}),"\n",(0,t.jsx)(n.li,{children:"The regulators don't like (or like, when it comes to regulating and fining) that term, so we're supposed to call them NFTs (back in 2015 used to call them tokens (early Bitcoin NFTs), but here that's taken)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As far as I know this terminological nonsense applies to other Polkadot SDK chains."}),"\n",(0,t.jsx)(n.h2,{id:"token-gated-access-control",children:"Token-gated access control"}),"\n",(0,t.jsx)(n.p,{children:"If you've just paid attention, you know that \"token\"-gated access control isn't about tokens, but about XX coins."}),"\n",(0,t.jsxs)(n.p,{children:["I modified a Kusama example for xx Network (xx chain) and made it available ",(0,t.jsx)(n.a,{href:"https://github.com/armchairancap/polkadot-js-tokengated-website",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"What it does is checks the balance on the address in your wallet, and lets access the site. Or not, if you don't have any xxcoins or more than a certain amount of xx coins."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(7507).A+"",width:"1400",height:"656"})}),"\n",(0,t.jsx)(n.p,{children:"That's great, so all Substrate-based chains can do this and limit access to apps to hodlers or whales, etc. You don't have 100xx in your wallet? Piss off!"}),"\n",(0,t.jsx)(n.p,{children:'But what about them "soulbound tokens"?'}),"\n",(0,t.jsx)(n.p,{children:"That's a different lookup/API."}),"\n",(0,t.jsx)(n.h2,{id:"asset-gated-access-control",children:"Asset-gated access control"}),"\n",(0,t.jsx)(n.p,{children:"We can also limit access to hodlers of certain assets, and by that I don't mean XX assets, but NFTs."}),"\n",(0,t.jsx)(n.p,{children:"In the case you've been so engaged that you missed their existence, you can find them in xx Network Wallet (Network > Assets (i.e. NFTs)):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(3402).A+"",width:"904",height:"602"})}),"\n",(0,t.jsxs)(n.p,{children:["Let's consider two, ",(0,t.jsx)(n.code,{children:"test"})," (ID: 4) and ",(0,t.jsx)(n.code,{children:"Intelligence"})," (ID: 42)."]}),"\n",(0,t.jsx)(n.p,{children:"We need to know how to query their balance in user's wallet."}),"\n",(0,t.jsx)(n.h2,{id:"query-check-nft-balance",children:"Query (check NFT balance)"}),"\n",(0,t.jsx)(n.p,{children:"It's unbelievable and ludicrous, but it took me many hours to find this info. As if no one needs this stuff."}),"\n",(0,t.jsx)(n.p,{children:"I find that hard to believe! But look above - after several years of mainnet and there's just half a dozen test NFTs, so maybe that's true?"}),"\n",(0,t.jsx)(n.p,{children:"Anyway, let's go:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from substrateinterface import SubstrateInterface\n\nsubstrate = SubstrateInterface(\n    url=\"ws://192.168.1.30:63007\"\n)\n\n# test\nASSET_ID = 4  # NFT: test\nACCOUNT = '6Xo3ESdU9nW3iiAk5ZqDA7kKqYJMcJFGiRz91LkoZKvvTjAV' # owner / issuer\naccount_info = substrate.query(\n    module='Assets',\n    storage_function='Account',\n    params=[ASSET_ID, ACCOUNT],\n)\n\nprint(f'Balance: {account_info[\"balance\"]}')\n# Balance: 100000000000\n\n# Intelligence\nASSET_ID = 42  # NFT: Intelligence\nACCOUNT = '6ZsMetbm4yoj9JQJdmhn2dKScFNkUnxULXwTBsNpmL1FM3KY' # owner / issuer\n\naccount_info = substrate.query(\n    module='Assets',\n    storage_function='Account',\n    params=[ASSET_ID, ACCOUNT],\n)\n\nprint(f'Balance: {account_info[\"balance\"]}')\n# Balance: 42\n"})}),"\n",(0,t.jsx)(n.p,{children:"All right!!! I think this should work for other addresses (not just the owner) but I don't know if any of these owners have sent them to other people."}),"\n",(0,t.jsxs)(n.p,{children:["Hey, that issuance amount of ",(0,t.jsx)(n.code,{children:"test"})," looks weird - how come there's 100000000000 of 'em when the screenshot says 100?"]}),"\n",(0,t.jsx)(n.p,{children:'The reason is NFTs may have different properties. We can use TFM (where is it?) or try the "create asset" workflow to see what goes in.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Asset/NFT create options",src:s(4513).A+"",width:"1078",height:"573"})}),"\n",(0,t.jsxs)(n.p,{children:["So, it appears ",(0,t.jsx)(n.code,{children:"Intelligence"})," is an integer-based NFT, while ",(0,t.jsx)(n.code,{children:"test"})," has a crapload of decimals."]}),"\n",(0,t.jsxs)(n.p,{children:["That's good to know, but it doesn't matter much to us in this particular workflow: we don't need to know how to look up an NFT's properties as we usually accept one or more known NFTs. If you're interested in that, however, find it ",(0,t.jsx)(n.a,{href:"https://polkadot.js.org/docs/substrate/storage/#assets",children:"here"})," - it's ",(0,t.jsx)(n.code,{children:"api.query.assets.metadata"})," (in JavaScript)."]}),"\n",(0,t.jsx)(n.h2,{id:"buying-and-selling-nfts-on-xx-chain",children:"Buying and selling NFTs on xx chain"}),"\n",(0,t.jsx)(n.p,{children:"Houston, we have a problem... I'm not sure how to do that."}),"\n",(0,t.jsxs)(n.p,{children:["OTC to the rescue! Create and publish ",(0,t.jsx)(n.a,{href:"https://haven.xx.network",children:"Haven"})," Space address for your OTC store and sell NFTs there. It sucks, but it can be automated. How?"]}),"\n",(0,t.jsx)(n.p,{children:"You can build a bot - I once created a crude one - that reads comments in your channel and sells this stuff."}),"\n",(0,t.jsx)(n.p,{children:"Price list for your Validator Monthly Intelligence newsletter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Basic subscription - 10 XX/mo"}),"\n",(0,t.jsx)(n.li,{children:"Premium - 100 XX/mo"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Buyer says "I\'ve transferred 10 XX (extrinsic hash attached), please credit me 1 Intelligence to this address 6ZLG..":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-raw",children:"/buy 1 Intelligence 6VwDT9VMgPrswqtJtqUH4PU7DkcaHggJjyjnkuUZyNA5c5j1 \\\n    0xaba65810f33f905e2d136e6a12c0a7e4ae7111a4f6c59415ffa83a3d0d7663c0\n"})}),"\n",(0,t.jsx)(n.p,{children:"The bot checks that transaction (everything checks out, 10XX received). It transfers 1 Intelligence to 6ZLGrh6Mu7uDioL7bAVS4kTsRSez7w1Lz18fiApUqRHNWnxd and appends an extrinsic hash and timestamp for easier troubleshooting."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-raw",children:"/sell 6VwDT9VMgPrswqtJtqUH4PU7DkcaHggJjyjnkuUZyNA5c5j1 \\\n    0xaba65810f33f905e2d136e6a12c0a7e4ae7111a4f6c59415ffa83a3d0d7663c0 {timestamp}\n"})}),"\n",(0,t.jsx)(n.p,{children:"If something fails, Haven keeps data for 21 days so there's enough time to chit-chat in another Space (for human-powered support) where refunds and other issues can be dealt with."}),"\n",(0,t.jsx)(n.p,{children:"I'm sure there are some edge cases I haven't thought of, but there's no reason why this can't work and there must be some detailed production-worthy examples in other ecosystems."}),"\n",(0,t.jsx)(n.p,{children:'Anyway, let\'s move on. As Teddy KGB said, "Pay him... Pay that man his fxxxing money". Or send the man his freaking NFT:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from substrateinterface import SubstrateInterface\n\nKEYPAIR = '....'\n\n# NFT: Intelligence\nASSET_ID = 42  \nASSET_QTY = 1 \n# Subscriber's wallet to use in Polkadot{.js} for authorization\nSUBSCRIBER_ID = 6VwDT9VMgPrswqtJtqUH4PU7DkcaHggJjyjnkuUZyNA5c5j1 \n\ncall = substrate.compose_call(\n    call_module=\"Assets\",\n    call_function=\"transfer\",\n    call_params={'id': ASSET_ID, 'target': SUBSCRIBER_ID, 'amount': ASSET_QTY}\n)\n\nextrinsic = substrate.create_signed_extrinsic(call=call, keypair=KEYPAIR, era={'period': 64})\nresult = substrate.submit_extrinsic(extrinsic, wait_for_inclusion=True)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dealing-with-subscription-expiration",children:"Dealing with subscription expiration"}),"\n",(0,t.jsx)(n.p,{children:"Yes, there are more problems..."}),"\n",(0,t.jsx)(n.p,{children:"Next month that guy will still have his 1 Intelligence. But we need to charge him again. What can we do?"}),"\n",(0,t.jsx)(n.p,{children:"Normally we'd use \"Smart Contracts\", but we can't (or at least I don't know how to do that on xx chain), so we have to come up with workarounds such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check for a new token (Intelligence-Jan, Intelligence-Feb) every month (you can pre-release, and not sell, 12 of them at once), or"}),"\n",(0,t.jsx)(n.li,{children:"Sell 12 month subscriptions and issue a new NFT every year , or"}),"\n",(0,t.jsx)(n.li,{children:"Buy back tokens at a tiny fraction of the original price, or"}),"\n",(0,t.jsx)(n.li,{children:"Check date of last pay the wallet did as well as the balance (complicated)"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"I wonder if 21 day subscription periods would be better than customary 30 day periods, because Haven retains server-side chat data that long.\nIf bots work well, 30 days or longer shouldn't be a problem."})}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,t.jsx)(n.p,{children:"Few wallets have good reputation, but there are folks out there who could probably charge for monthly subscription."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Newsletter (say, monthly validator analysis for stakers/nominators)"}),"\n",(0,t.jsx)(n.li,{children:"xx chain-related reports (nominator pays 10xx for staking payouts and Web reports/stats, for example)"}),"\n",(0,t.jsx)(n.li,{children:"Discord bots for NFT-gated access to special channels"}),"\n",(0,t.jsx)(n.li,{children:"Private training/consulting (for Haven admins and users, e.g. 1 NFT gets you 1 minute)"}),"\n",(0,t.jsx)(n.li,{children:'Classic "soulbound" NFTs given away for free (no OTC trading necessary)'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Managed Haven instance hosting sounds like another possibility, but that idea sucks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It requires absolute trust"}),"\n",(0,t.jsx)(n.li,{children:"Users who access such instances immediately identify themselves by their wallet ID (and xx is not a privacy coin) and maybe IP address, browser fingerprint and more"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"alien-nfts",children:"Alien NFTs"}),"\n",(0,t.jsx)(n.p,{children:"Polkadot has a rich NFT ecosystem that can do more, and they even have bridges to coins from other L1 chains (alien NFTs)."}),"\n",(0,t.jsx)(n.p,{children:"While that's nice, it's more than we need here."}),"\n",(0,t.jsx)(n.p,{children:"Of course, xx chain could adopt some of those features, but I think it objectively doesn't need them."}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:'The xx Network community hasn\'t done much to monetize Web (or should I say "Web3" to highlight my "DeFi" prowess) access. One of the reasons is surely lack of examples and documentation, and another is a small market size.'}),"\n",(0,t.jsx)(n.p,{children:"With XX coin-gated and NFT-gated apps, that is relatively easy to do now."}),"\n",(0,t.jsx)(n.p,{children:"Code for the former is already on Github, while the latter needs 2-3 API calls to be added to that repo."}),"\n",(0,t.jsx)(n.p,{children:"To be honest, I don't even know if I can accomplish that in JavaScript (which is what the token-gated app uses), but many people can. Maybe I'll give it a try some day."}),"\n",(0,t.jsx)(n.p,{children:"Market for xx chain-related token- and NFT-gated services is still small, but it does exist. Anyone who builds something and makes it available for others, lowers the entry barrier for more xx Network services. Let us hope such services emerge in coming months."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7507:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2024-11-05-xx-chain-asset-gated-access-00-ed8925690cc2822c145818a198f2b29c.png"},3402:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2024-11-05-xx-chain-asset-gated-access-01-7e8200e191b14681df54de8d17fc8cc0.png"},4513:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2024-11-05-xx-chain-asset-gated-access-02-fb7088a04f4946acf4b9db515c6b513d.png"},7468:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(758);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);