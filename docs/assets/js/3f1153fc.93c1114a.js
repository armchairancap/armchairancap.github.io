"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[2839],{5956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(6070),i=t(7468);const a={slug:"2024/12/07/nfts-on-xx-network",title:"NFTs on xx Network",authors:["armchairancap"],tags:["xx network","xx chain","nfts"],description:"Create, mint, transfer and buy NFTs on xx Network",keywords:["xx network","nfts","mint","collections","item","pallet"],image:"/img/blog/2024-12-07-xx-network-nft-09-xx-network-wallet-nft-page.png"},r=void 0,o={permalink:"/blog/2024/12/07/nfts-on-xx-network",source:"@site/blog/2024-12-07-nfts-on-xx-network.md",title:"NFTs on xx Network",description:"Create, mint, transfer and buy NFTs on xx Network",date:"2024-12-07T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"},{label:"nfts",permalink:"/blog/tags/nfts"}],readingTime:10.56,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/12/07/nfts-on-xx-network",title:"NFTs on xx Network",authors:["armchairancap"],tags:["xx network","xx chain","nfts"],description:"Create, mint, transfer and buy NFTs on xx Network",keywords:["xx network","nfts","mint","collections","item","pallet"],image:"/img/blog/2024-12-07-xx-network-nft-09-xx-network-wallet-nft-page.png"},unlisted:!1,prevItem:{title:"Good Samaritans",permalink:"/blog/2024/12/08/good-samaritans-of-supra-network"},nextItem:{title:"xx Network validators, shall we play a game?",permalink:"/blog/2024/11/28/xx-validators-shall-we-play-a-game"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"NFT concepts",id:"nft-concepts",level:2},{value:"NFT operations",id:"nft-operations",level:2},{value:"Permissionless",id:"permissionless",level:3},{value:"Permissioned",id:"permissioned",level:3},{value:"Permissioned for metadata",id:"permissioned-for-metadata",level:3},{value:"Force (governance) operations",id:"force-governance-operations",level:3},{value:"Getting started with NFTs",id:"getting-started-with-nfts",level:2},{value:"Create a collection, mint, price, transfer, send, buy",id:"create-a-collection-mint-price-transfer-send-buy",level:3},{value:"Recap",id:"recap",level:3},{value:"Buy NFT",id:"buy-nft",level:3},{value:"What can we do with NFTs?",id:"what-can-we-do-with-nfts",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#nft-concepts",children:"NFT concepts"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#nft-operations",children:"NFT operations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#permissionless",children:"Permissionless"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#permissioned",children:"Permissioned"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#permissioned-for-metadata",children:"Permissioned for metadata"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#force-governance-operations",children:"Force (governance) operations"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#getting-started-with-nfts",children:"Getting started with NFTs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-a-collection-mint-price-transfer-send-buy",children:"Create a collection, mint, price, transfer, send, buy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#recap",children:"Recap"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#buy-nft",children:"Buy NFT"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#what-can-we-do-with-nfts",children:"What can we do with NFTs?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#next-steps",children:"Next steps"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["In my ",(0,s.jsx)(n.a,{href:"/blog/2023/11/05/xx-network-asset-gated-access",children:"Hacktoberfest 2024 PoC for token-gated access on xx Network"})," I wrote about restricting access to Web apps based on criteria such as the amount of XX token or kind and quantity of asset a wallet holds."]}),"\n",(0,s.jsx)(n.p,{children:"At the time I didn't look at NFTs, because they're not even exposed in xx Network wallet and I wasn't sure if those even worked."}),"\n",(0,s.jsx)(n.p,{children:"Well, today I took a look and:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The API is there and works"}),"\n",(0,s.jsx)(n.li,{children:"The official xx Network wallet indeed doesn't expose them in any way"}),"\n",(0,s.jsx)(n.li,{children:"NFT pallet in xx Chain code 0.2.6 is based on pallet-nfts v4.0.0"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So, in theory at least, it should be possible to use them as long as you have your own application or don't need a Web UI."}),"\n",(0,s.jsx)(n.p,{children:"I decided to spend some time on that this afternoon."}),"\n",(0,s.jsx)(n.h2,{id:"nft-concepts",children:"NFT concepts"}),"\n",(0,s.jsx)(n.p,{children:"It's a Substrate thing, similar across different chains. Note that some are more advanced and NFT-focused, and there you can do a lot more."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'NFTs come in "collections". A collection is identified by an ID, and has a bunch of properties'}),"\n",(0,s.jsx)(n.li,{children:"Each NFT belongs to a collection. Example: collection ID 10 may have NFTs ID 1, 2, and 3"}),"\n",(0,s.jsx)(n.li,{children:"NFTs can be minted, priced, transferred, bought, burned. Soul Bound NFTs are those that cannot be transferred once they're minted to a wallet"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"On xx Network, since there's no user-facing Web UI where you can see anything. There's a simple \"NFT\" page that's always empty and doesn't show any collections or holdings, which is confusing. You can own, but can't see if you own any collections or NFTs."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - NFT page in xx Network Wallet",src:t(1096).A+"",width:"515",height:"304"})}),"\n",(0,s.jsxs)(n.p,{children:["For more on Polkadot SDK-based NFTs, see this page on the Polkadot Wiki: ",(0,s.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/learn-nft-pallets",children:"https://wiki.polkadot.network/docs/learn-nft-pallets"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"nft-operations",children:"NFT operations"}),"\n",(0,s.jsx)(n.p,{children:"This is a partial list of NFT-related operations available on Polkadot (source: Polkadot NFT documentation)."}),"\n",(0,s.jsx)(n.h3,{id:"permissionless",children:"Permissionless"}),"\n",(0,s.jsx)(n.p,{children:"These are not limited to the owner."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"create: Create a new collection by placing a deposit"}),"\n",(0,s.jsx)(n.li,{children:"mint: Mint a new item within a collection (when the minting is public)"}),"\n",(0,s.jsx)(n.li,{children:"transfer: Send an item to a new owner"}),"\n",(0,s.jsx)(n.li,{children:"set_price: Set the price for an item"}),"\n",(0,s.jsx)(n.li,{children:"buy_item: Buy an item"}),"\n",(0,s.jsx)(n.li,{children:"pay_tips: Pay tips, could be used for paying the creator royalties"}),"\n",(0,s.jsx)(n.li,{children:"create_swap: Create an offer to swap an NFT for another NFT and optionally some fungibles"}),"\n",(0,s.jsx)(n.li,{children:"cancel_swap: Cancel previously created swap offer"}),"\n",(0,s.jsx)(n.li,{children:"claim_swap: Swap items in an atomic way"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"permissioned",children:"Permissioned"}),"\n",(0,s.jsx)(n.p,{children:'These are "admin" level actions for the issuer.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"destroy: Destroy a collection. This destroys all the items inside the collection and refunds the deposit"}),"\n",(0,s.jsx)(n.li,{children:"force_mint: Mint a new item within a collection"}),"\n",(0,s.jsx)(n.li,{children:"burn: Destroy an item within a collection"}),"\n",(0,s.jsx)(n.li,{children:"lock_item_transfer: Prevent an individual item from being transferred"}),"\n",(0,s.jsx)(n.li,{children:"unlock_item_transfer: Revert the effects of a previous lock_item_transfer"}),"\n",(0,s.jsx)(n.li,{children:"clear_all_transfer_approvals: Clears all transfer approvals set by calling the approve_transfer"}),"\n",(0,s.jsx)(n.li,{children:"lock_collection: Prevent all items within a collection from being transferred (making them all soul bound)"}),"\n",(0,s.jsx)(n.li,{children:"lock_item_properties: Lock item's metadata or attributes"}),"\n",(0,s.jsx)(n.li,{children:"transfer_ownership: Alter the owner of a collection, moving all associated deposits. Ownership of individual items will not be affected"}),"\n",(0,s.jsx)(n.li,{children:"set_team: Alter the permissioned accounts of a collection"}),"\n",(0,s.jsx)(n.li,{children:"set_collection_max_supply: Change the max supply of a collection"}),"\n",(0,s.jsx)(n.li,{children:"update_mint_settings: Update the minting settings for collection"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"permissioned-for-metadata",children:"Permissioned for metadata"}),"\n",(0,s.jsx)(n.p,{children:"Same as above, but for metadata."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"set_attribute: Set a metadata attribute of an item or collection"}),"\n",(0,s.jsx)(n.li,{children:"clear_attribute: Remove a metadata attribute of an item or collection"}),"\n",(0,s.jsx)(n.li,{children:"set_metadata: Set general metadata of an item (e.g. an IPFS address of an image url)"}),"\n",(0,s.jsx)(n.li,{children:"clear_metadata: Remove general metadata of an item"}),"\n",(0,s.jsx)(n.li,{children:"set_collection_metadata: Set general metadata of a collection"}),"\n",(0,s.jsx)(n.li,{children:"clear_collection_metadata: Remove general metadata of a collection"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"force-governance-operations",children:"Force (governance) operations"}),"\n",(0,s.jsx)(n.p,{children:'Also "admin" level operations for the issuer, mostly related to "override" operations.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new collection (the collection ID can not be chosen)"}),"\n",(0,s.jsx)(n.li,{children:"Change collection's owner or configuration"}),"\n",(0,s.jsx)(n.li,{children:"Set an attribute"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started-with-nfts",children:"Getting started with NFTs"}),"\n",(0,s.jsx)(n.p,{children:"To make my life less miserable:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'I got two wallets (addresses), and created on-chain ID for the "NFT issuer" wallet'}),"\n",(0,s.jsx)(n.li,{children:'I got around 150 XX handy (20 XX for on-chain ID for the "NFT issuer", 100 as collection (issuance) deposit for one NFT collection, 10 for each NFT (I issued two))'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As wallet addresses are hard to remember, let's say:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Issuer: ArmchairAncap-Test-Wallet (",(0,s.jsx)(n.code,{children:"6Z..."}),")"]}),"\n",(0,s.jsxs)(n.li,{children:['Buyer: The-Dude aka "six-ace" (',(0,s.jsx)(n.code,{children:"6aCE..."}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-collection-mint-price-transfer-send-buy",children:"Create a collection, mint, price, transfer, send, buy"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"These screenshots can be opened in a new tab."})}),"\n",(0,s.jsxs)(n.p,{children:["Use ArmchairAncap-Test-Wallet to create a collection with the ID of 0 (",(0,s.jsx)(n.code,{children:"nfts.create"}),"):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - create NFT collection with ID 0",src:t(4223).A+"",width:"1534",height:"966"})}),"\n",(0,s.jsx)(n.p,{children:"There's a bunch of options (some you can't even see in the screenshot because there are different drop-down options that result in different context menus)."}),"\n",(0,s.jsx)(n.p,{children:"I set collection ID to 0, limited supply to 500, priced each at 1 XX (10^9)."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"It seems this is the first NFT ever created on xx Chain. If so, that's nuts!"})}),"\n",(0,s.jsxs)(n.p,{children:["This results in no NFTs. It's just a collection with minimal details. This NFT is minted by the issuer. (Reference: ",(0,s.jsx)(n.a,{href:"https://wallet.xx.network/#/explorer/query/0xb1891997433a75dae001e670f3bd0be0219cc289b035ba65681b2926b7ccd054",children:"extrinsic in block 15,954,954"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-raw",children:"{\n  settings: 0\n  maxSupply: 500\n  mintSettings: {\n    mintType: Issuer\n    price: 1,000,000,000\n    startBlock: null\n    endBlock: null\n    defaultItemSettings: 0\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["There are different options which you should explore, such as mint settings: Issuer, Public, HolderOf. Issuer limits minting to the admin (",(0,s.jsx)(n.code,{children:"mintType: Issuer"}),", above)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - create NFT with minting options",src:t(3336).A+"",width:"539",height:"540"})}),"\n",(0,s.jsxs)(n.p,{children:["In the wallet, go to Developer > Chain state > Storage, pick ",(0,s.jsx)(n.code,{children:"ntfs.collection"})," and see there are no items yet (ArmchairAncap-Test-Wallet is 6Z...)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-raw",children:"{\n  owner: 6ZLGrh6Mu7uDioL7bAVS4kTsRSez7w1Lz18fiApUqRHNWnxd\n  ownerDeposit: 100,000,000,000\n  items: 0\n  itemMetadatas: 0\n  itemConfigs: 0\n  attributes: 0\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Since I'm in control of issuance (minting) I minted the first item for The-Dude. That's collection ID 0, NFT ID 1 (",(0,s.jsx)(n.code,{children:"ntfs.mint"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["How I did that: go to Developer > Extinsics > Submission, pick ",(0,s.jsx)(n.code,{children:"ntfs.mint(collection,item,mintTo,witnessData)"})," and for collection ID 0, mint 1 token to The-Dude (Reference: ",(0,s.jsx)(n.a,{href:"https://wallet.xx.network/#/explorer/query/0x5ec8e84aef8c0fadb36869c900fba1da65934bcd497fd94b9fe77e5a05717c61",children:"extrinsic in block 15,955,159"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - mint NFT",src:t(4776).A+"",width:"1534",height:"966"})}),"\n",(0,s.jsxs)(n.p,{children:["Now go to Developer > Chain state > Storage, ",(0,s.jsx)(n.code,{children:"ntfs.collection"})," and check again. There's 1 item in the collection showing ",(0,s.jsx)(n.code,{children:"nfts.Issued"})," was successful."]}),"\n",(0,s.jsxs)(n.p,{children:["Recheck ",(0,s.jsx)(n.code,{children:"ntfs.collection"})," in the same place as earlier: the numbe rof items is now 1."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-raw",children:"{\n  owner: 6ZLGrh6Mu7uDioL7bAVS4kTsRSez7w1Lz18fiApUqRHNWnxd\n  ownerDeposit: 100,000,000,000\n  items: 1\n  itemMetadatas: 0\n  itemConfigs: 1\n  attributes: 0\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using the API we could check if The-Dude aka six-ace owns [0, 1] (NFT ID 1 from Collection ID 0):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"substrate.query('Nfts', 'Account', ['6aCE19CakDJBp8wnVHB2HpHYfaeNiwx2RxQcsAcyWvPLVn5k', 0, 1])\n"})}),"\n",(0,s.jsxs)(n.p,{children:["I then used ArmchairAncap-Test-Wallet to create another NFT for own wallet (ArmchairAncap-Test-Wallet). That worked, but when I tried to transfer it to The-Dude, that wasn't possible (",(0,s.jsx)(n.code,{children:"nfts.transfer"}),"). More on this later."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - transfer NFT",src:t(6802).A+"",width:"1534",height:"966"})}),"\n",(0,s.jsxs)(n.p,{children:["If the collection allows it, ",(0,s.jsx)(n.em,{children:"item"})," properties can be changed later (",(0,s.jsx)(n.code,{children:"nfts.setMetadata"}),'). This is for when we want to "customize" NFTs before making them available for sale or sending them to recepients. (Reference: ',(0,s.jsx)(n.a,{href:"https://wallet.xx.network/#/explorer/query/0x94bcd691323722d70c29b8e194beb60a719d98ced15fbd8899f07741e5043e2e",children:"extrinsic"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - set NFT item and collection properties",src:t(2539).A+"",width:"1534",height:"966"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also set a ",(0,s.jsx)(n.em,{children:"custom"})," NFT item price to particular account. Earlier we set it to 1 XX, but you can override it like so."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - set NFT item price",src:t(8396).A+"",width:"1534",height:"966"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Include option"})," is disabled, so no special price is set in the screenshot above."]}),(0,s.jsx)(n.p,{children:"We use that option again in the screenshot below."})]}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of quantity discount - the first item is 1 XX (default price, also in the screenshot above), but item ID 2 from collection ID 0 is available at half the price (0.5 XX)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - set NFT per-item and per-wallet discount",src:t(7773).A+"",width:"1534",height:"966"})}),"\n",(0,s.jsxs)(n.p,{children:['Notice this price is available only for The-Dude wallet (a "whitelisted" buyer, in the screenshot), because it\'s specifically called out in that extrinsic (',(0,s.jsx)(n.code,{children:"ntfs.setPrice"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"recap",children:"Recap"}),"\n",(0,s.jsx)(n.p,{children:"So far, this is what I got:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ArmchairAncap-Test-Wallet creates a collection with the ID 0, up to 500 of them, priced at 1 XX"}),"\n",(0,s.jsxs)(n.li,{children:["ArmchairAncap-Test-Wallet mints two NFTs (IDs 1 and 2):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ID 1 minted to The-Dude"}),"\n",(0,s.jsx)(n.li,{children:"ID 2 issued to himself"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"ArmchairAncap-Test-Wallet plays with settings, and makes just one big change - creates a year-end special for The-Dude: sets the price of NFT ID 2 to 0.5 XX"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'What\'s minted to others gets "sent" to those wallets right away.'}),"\n",(0,s.jsx)(n.p,{children:"When issuer only can mint, what's issued to self seemingly cannot be bought without the issuer's specific \"offer\" to a 3rd party wallet such as The-Dude. I haven't verified this, but it seems that's how it works."}),"\n",(0,s.jsx)(n.h3,{id:"buy-nft",children:"Buy NFT"}),"\n",(0,s.jsxs)(n.p,{children:["And the last screenshot shows how to buy that NFT ID 2 from the issuer who made it 50% cheaper than other items in the collection, so The-Dude buys it. (Reference: purchase ",(0,s.jsx)(n.a,{href:"https://wallet.xx.network/#/explorer/query/0xb0cc3e57d89096aac2d5d899e284a1631cfe44916a13a4cda9e953e6b9b3bef4",children:"extrinsic"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"xx Chain - buy NFT",src:t(7285).A+"",width:"1534",height:"966"})}),"\n",(0,s.jsx)(n.p,{children:"I haven't tried using the API, but buying that NFT item for 0.5 XX would go similar to this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"substrate.compose_call( 'Nfts', 'buy_item', {'bid_price': 500000000, 'collection': 0, 'item': 2 })\n"})}),"\n",(0,s.jsx)(n.p,{children:"After purchase, this item ID 2 is in the possession of The-Dude aka six-ace:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:">>> substrate.query( 'Nfts', 'Item', [0, 2])\n<scale_info::575(value={\n    'owner': '6aCE19CakDJBp8wnVHB2HpHYfaeNiwx2RxQcsAcyWvPLVn5k', \n    'approvals': [], \n    'deposit': {\n        'account': '6ZLGrh6Mu7uDioL7bAVS4kTsRSez7w1Lz18fiApUqRHNWnxd', \n        'amount': 1000000000}})>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To check the first NFT (ID 1) we'd repeat the same call with ",(0,s.jsx)(n.code,{children:"[0, 1]"})," to specify collection ID 0, item ID 1."]}),"\n",(0,s.jsx)(n.p,{children:"Using the same API, we can also look up prices like (Collection ID 0, Item ID 2 is 1 XX)."}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Notice that this item is already in The-Dude's ownership, and that the price is 1 XX although The-Dude paid 0.5 XX for it."}),(0,s.jsxs)(n.p,{children:["Since it was discounted just for The-Dude to 0.5 XX by the issuer ",(0,s.jsx)(n.em,{children:"before"})," it was purchased, it appears ",(0,s.jsx)(n.em,{children:"price paid"})," is not reflected in here. It's likely the initial price set on collection level, but make sure of it if you need to rely on that information."]})]}),"\n",(0,s.jsx)(n.p,{children:"There are similar little details that should be checked further, such as the fact that the issuer may not be the only person who can mint NFTs in a collection (!), so make sure to read the docs before using these in production."}),"\n",(0,s.jsx)(n.h2,{id:"what-can-we-do-with-nfts",children:"What can we do with NFTs?"}),"\n",(0,s.jsx)(n.p,{children:"Many of the things everyone else does."}),"\n",(0,s.jsxs)(n.p,{children:["See that ",(0,s.jsx)(n.a,{href:"/blog/2024/12/07/nfts-on-xx-network",children:"post on token-gated access"})," for some ides as well as the PoC app and its source code."]}),"\n",(0,s.jsx)(n.p,{children:"Personally, now that I know this API works and how it compares to xx Chain assets, I think NFTs are even better for mebership- and subscription-like use cases than assets!"}),"\n",(0,s.jsx)(n.p,{children:'There\'s no need to buy NFTs "off the market" like assets, which is a major advantage. You can also set discounts, named buyers, and more.'}),"\n",(0,s.jsx)(n.p,{children:"I'm not interested in popular NFT use cases (memecoins, games and such), so the fact that the xx Network Wallet has nothing for that doesn't bother me at all. xx Network assets are much better in this regard - you can see which assets exists, and how holds how many - but doing anything with them is difficult and especially buying and selling."}),"\n",(0,s.jsx)(n.p,{children:"Other chains may have a more advanced NFT pallet, but I'd say xx Chain doesn't even need those newer pallet. Other chains need apps that use NFTs, but xx Chain already has a good one - it's called Haven."}),"\n",(0,s.jsxs)(n.p,{children:["While one may NFT-gate a Web site, you can't NFT-gate a Haven channel because the same channel (Space) can be accessed from any instance. But: we can ",(0,s.jsx)(n.a,{href:"/blog/2024/11/28/xx-validators-shall-we-play-a-game",children:"ask Haven users to sign their wallet address"})," using their wallet, and then easily check if the user owns an NFT (or some quantity of an xx Network asset)."]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(n.p,{children:"xx Chain can do a lot more with NFTs than the spartan UI suggests - it's more than enough for some very interesting use cases."}),"\n",(0,s.jsx)(n.p,{children:"It's shocking that no one has done anything with these so far, in over 1100 days since the chain launched."}),"\n",(0,s.jsx)(n.p,{children:"Some items for potential future work:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NFT-gated access: expand that PoC project with NFTs to have everything covered (XX coins, xx assets, and xx NFTs)"}),"\n",(0,s.jsx)(n.li,{children:"Other: I have ideas for several interesting use cases where I'd like to combine this with xx Network Haven communities. More on this in a future post"}),"\n",(0,s.jsx)(n.li,{children:"Low priority: check detailed collection settings and intermediate/advanced NFT workflows with approvals and more. Some of this may be useful even for non-memecoin use cases"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4223:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-01-08f39e11ab78f6259d510c23d5460836.png"},6802:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-02-transfer-574ce550d3f7869ac4b68f1980001c47.png"},4776:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-03-mint-6267b2bd9fac5facc654a313eeb0d90b.png"},2539:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-04-set-metadata-df7df7848e1829dd56710d661991b423.png"},8396:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-05-set-price-4b5568515163131b72991606b8861218.png"},7773:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-06-set-price-per-target-wallet-cb58d6d899182432a0ae4bed6cb8a0de.png"},7285:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-07-buy-nft-4700dc9a8b0bfcad0c6a6e476630875b.png"},3336:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-08-nft-mint-settings-2c835b83fb09e4be79932ff32816cb19.png"},1096:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-12-07-xx-network-nft-09-xx-network-wallet-nft-page-571fb8892ffadcb8a6dac2bd9871938f.png"},7468:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(758);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);