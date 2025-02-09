"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[2359],{23611:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(86070),i=t(27468);const a={slug:"2025/01/04/xx-network-initial-validator-list-for-due-dilligence",title:"First pass of nomination-worthy xx Network validators (2025/01/04)",authors:["armchairancap"],tags:["xx network","xx chain"],description:"Potentially nomination-worthy xx Network validators as of early 2025",keywords:["xx network","economics","validator","stake","nominating","recommendation"],image:"/img/blog/2025-01-04-xx-chain-era-1144-waiting.png"},s=void 0,r={permalink:"/blog/2025/01/04/xx-network-initial-validator-list-for-due-dilligence",source:"@site/blog/2025-01-04-xx-network-initial-validator-list-for-due-dilligence.md",title:"First pass of nomination-worthy xx Network validators (2025/01/04)",description:"Potentially nomination-worthy xx Network validators as of early 2025",date:"2025-01-04T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"}],readingTime:14.67,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2025/01/04/xx-network-initial-validator-list-for-due-dilligence",title:"First pass of nomination-worthy xx Network validators (2025/01/04)",authors:["armchairancap"],tags:["xx network","xx chain"],description:"Potentially nomination-worthy xx Network validators as of early 2025",keywords:["xx network","economics","validator","stake","nominating","recommendation"],image:"/img/blog/2025-01-04-xx-chain-era-1144-waiting.png"},unlisted:!1,prevItem:{title:"An attempt to address validator centralization problem",permalink:"/blog/2025/01/06/xx-network-armchairancap-pool"},nextItem:{title:"Notes before the change of minimum validator stake on xx Chain",permalink:"/blog/2024/12/31/xx-network-minimum-validator-stake-change"}},l={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Update on validator doom",id:"update-on-validator-doom",level:2},{value:"First pass",id:"first-pass",level:2},{value:"Notes",id:"notes",level:2},{value:"Example for <code>4CRYPTO</code>",id:"example-for-4crypto",level:3},{value:"Possible improvements and take-aways",id:"possible-improvements-and-take-aways",level:3},{value:"Appendix A - potentially nomination-worthy validators as of 2025/04/01",id:"appendix-a---potentially-nomination-worthy-validators-as-of-20250401",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#update-on-validator-doom",children:"Update on validator doom"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#first-pass",children:"First pass"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"#notes",children:"Notes"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsxs)(e.a,{href:"#example-for-4crypto",children:["Example for ",(0,o.jsx)(e.code,{children:"4CRYPTO"})]})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#possible-improvements-and-take-aways",children:"Possible improvements and take-aways"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#appendix-a---potentially-nomination-worthy-validators-as-of-20250401",children:"Appendix A - potentially nomination-worthy validators as of 2025/04/01"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(e.p,{children:"I'm not entirely convinced I should spend my time on this given the community of xx Network, but for what it's worth here's an improved list of potentially nomination-worthy xx Network validators as of January 4, 2025."}),"\n",(0,o.jsxs)(e.p,{children:['Compared to the lists of "known shit" and "potentially OK" nodes given in ',(0,o.jsx)(e.a,{href:"/blog/2024/12/31/xx-network-minimum-validator-stake-change",children:"the previous post"}),", this list improves on one minor shortcoming (mentioned in that past) which is that in that post I dropped nodes without at least 5 active nominators."]}),"\n",(0,o.jsxs)(e.admonition,{type:"tip",children:[(0,o.jsx)(e.p,{children:"Active nominators are those nominating a node in current era (day)."}),(0,o.jsxs)(e.p,{children:["Inactive nominators seem to be ",(0,o.jsx)(e.strong,{children:"all"}),' nominators (not just inactive, but both inactive and active!) nominating a node. If I\'m wrong, then inactive plus active would be "all" nominators.']})]}),"\n",(0,o.jsx)(e.p,{children:"That meant that a validator with 50 nominators who get nominated by just 4 (active) nominators in this era, and be dropped from the list. Now I consider inactive nominators and look for at least five."}),"\n",(0,o.jsx)(e.h2,{id:"update-on-validator-doom",children:"Update on validator doom"}),"\n",(0,o.jsx)(e.p,{children:'Also already commented on in the previous post is the community doomers\' prediction about "validator exodus" that was going to happen due to the still pathetically small new minimum validator stake of 15,000 XX (only $750-ish now).'}),"\n",(0,o.jsx)(e.p,{children:"Today there's more validators in waiting than there's been in many weeks - 26."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"26 validators in waiting",src:t(85497).A+"",width:"1180",height:"307"})}),"\n",(0,o.jsxs)(e.p,{children:["Not only there's no shortage of validators (although the slots ",(0,o.jsx)(e.em,{children:"should"})," be cut to improve the quality and kick out the pools), but there's more validators than we had in December and the network is also more secure."]}),"\n",(0,o.jsx)(e.p,{children:"The stupidity of those community members has no limits! (Normally I'd say \"ignorance\", but you can check the forum - it was explained over and over again, on top of the fact that it shouldn't need to be explained in the first place!)"}),"\n",(0,o.jsx)(e.h2,{id:"first-pass",children:"First pass"}),"\n",(0,o.jsx)(e.p,{children:"Here's the first update in 2025."}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["This table does ",(0,o.jsx)(e.strong,{children:"not"})," container the list of recommended validators. It's just a starting point."]})}),"\n",(0,o.jsx)(e.p,{children:"I exclude:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Names from my black list - any on-chain wallet IDs that pools use to identify themselves (",(0,o.jsx)(e.code,{children:"CRYPTOCALIBUR"})," and others)"]}),"\n",(0,o.jsx)(e.li,{children:"Anyone without on-chain ID - easy way to eliminate pool trash"}),"\n",(0,o.jsx)(e.li,{children:"Anyone with the validator stake below the new minimum (15,000 XX that took effect 3 eras ago) - to avoid unexpected dropouts and avoid stranding"}),"\n",(0,o.jsxs)(e.li,{children:["Anyone with less than 2 active or less than 5 inactive (",(0,o.jsx)(e.code,{children:"Nom (I)"}),") nominators - to avoid stranding your nominations"]}),"\n",(0,o.jsx)(e.li,{children:"Anyone who takes more than 22.00% from node rewards"}),"\n",(0,o.jsx)(e.li,{children:'Any nodes whose predicted stake is or was more than 400,000 XX (i.e., "a lot")'}),"\n"]}),"\n",(0,o.jsxs)(e.admonition,{type:"info",children:[(0,o.jsxs)(e.p,{children:["Many nodes - both with and without on-chain ID - are controlled by hostile node runners who run the same or greater number of nodes than cMixx group size (five), adding risk to network.\nThose farm runners ",(0,o.jsx)(e.em,{children:"usually"}),', but not always, have all of their nodes located in the same "geobin" i.e. a country or a region. If possible, avoid nominating more than 3 nodes from the same continent.']}),(0,o.jsx)(e.p,{children:'Nodes in Waiting - are excluded by default as a precaution, because Waiting is generally a high-risk area and may not be easy to safely "automate" recommendations (if anyone\'s nomination-worthy, why aren\'t they currently elected?). If you want to "hunt" for good opportunities there, you may manually inspect them.'})]}),"\n",(0,o.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(e.p,{children:["Go to ",(0,o.jsx)(e.a,{href:"https://wallet.xx.network/#/staking",children:"Staking -> Overview"})," or  ",(0,o.jsx)(e.a,{href:"https://wallet.xx.network/#/staking/targets",children:"Staking -> Targets"})," as well as the ",(0,o.jsx)(e.a,{href:"https://explorer.xx.network",children:"xx Network Explorer"})," to perform additional checks."]}),"\n",(0,o.jsxs)(e.h3,{id:"example-for-4crypto",children:["Example for ",(0,o.jsx)(e.code,{children:"4CRYPTO"})]}),"\n",(0,o.jsx)(e.p,{children:"It's the first on the list, so I'll take that one as an example."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Decent own stake (48K XX), reasonably low commission"}),"\n",(0,o.jsxs)(e.li,{children:["Its ",(0,o.jsx)(e.a,{href:"https://wallet.xx.network/#/staking/query/6XweaVvZaXVagrLZtay78C6ieQRS9h6koud8CUd2gXP1BQH8",children:"stats"})," currently show consistent performance, steady and not excessive total nomination amount, no commission scamming (consistent 14%), which is all good"]}),"\n",(0,o.jsx)(e.li,{children:"In Staking Targets, we see the node has 55 inactive nominators, which is great. Active are just two, but that's because both happen to be whale nominators"}),"\n",(0,o.jsxs)(e.li,{children:["In the ",(0,o.jsx)(e.a,{href:"https://explorer.xx.network/accounts/6XweaVvZaXVagrLZtay78C6ieQRS9h6koud8CUd2gXP1BQH8",children:"xx Network explorer"})," we can go to ",(0,o.jsx)(e.code,{children:"Blockchain -> Transfers"}),' and see the node was "seeded" 1-2 years ago by probably laundering xx coins through MEXC, so it may be owned by an early validator (good) who\'s running a node farm (which would be bad, if the same person controls more than four)']}),"\n",(0,o.jsxs)(e.li,{children:["Also in the explorer (",(0,o.jsx)(e.code,{children:"Validator -> Metrics"}),") it says on-chain identity is bad (there's just wallet name and nothing else)"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Now, we could dig around to find more about those transactions, but at least it's not brazen like the trash from CRYPTOCALIBUR and MONEYTEAM, for example."}),"\n",(0,o.jsx)(e.p,{children:"If you can find better nodes, choose better nodes. If not, this one may do - it's less bad than the nodes without on-chain ID and outright pool trash."}),"\n",(0,o.jsx)(e.h3,{id:"possible-improvements-and-take-aways",children:"Possible improvements and take-aways"}),"\n",(0,o.jsx)(e.p,{children:"I may make additional improvements such as:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"consider points from last 7 eras"}),"\n",(0,o.jsx)(e.li,{children:"eliminate nodes with higher than 30% commission in any of most recent 180 eras"}),"\n",(0,o.jsx)(e.li,{children:"implement finer evaluation of on-chain ID (not just a binary Yes|No, but more similar to how Explorer rates validators in its metrics - maybe something like a scale from 1 to 5)"}),"\n",(0,o.jsx)(e.li,{children:"look into each nominator (wallet size, on-chain ID, number of nodes nominated by the validator...)"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Even without those improvements, it's obvious that only 100 or so validators are worth nominating. Or, said differently, there are close to 200 that are not (this figure includes self-sufficient validators which aren't necessary malicious, but from a ",(0,o.jsx)(e.em,{children:"nominator's"})," perspective, if a node runner is self-staked to 400,000 XX and takes a 40% commission, they're ",(0,o.jsx)(e.em,{children:"not nomination-worthy"}),")."]}),"\n",(0,o.jsx)(e.p,{children:"Considering this situation , it's not even feasible to make improvements to this node selection script - we'd have to drop even more nodes and having 50-60 nomination-worthy nodes out of 370 would be catastrophic: one would have to either crowd on the few good validators or nominate malicious (or generally not nomination-worthy) validators. Either of these choices is bad for the network."}),"\n",(0,o.jsx)(e.p,{children:"Because of that I don't think I'll even consider publishing an updated list until the community does something to clean up that mess."}),"\n",(0,o.jsx)(e.h2,{id:"appendix-a---potentially-nomination-worthy-validators-as-of-20250401",children:"Appendix A - potentially nomination-worthy validators as of 2025/04/01"}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Ignore cMix Points and Stake Pred (Stake Prediction) as this table was generated in the first epoch of an era rather than in the last hours of the last epoch (for example)."})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-raw",children:"+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| Name                      | cMix ID     |     Stake |   Stake Own |   Commission |   cMix Points |   Noms (A) |   Nom (I) |   Stake Pred |\n+===========================+=============+===========+=============+==============+===============+============+===========+==============+\n| 4CRYPTO                   | 8rNb...zQEC | 259085.74 |    48724.84 |        14.00 |          5177 |          2 |        55 |    304230.71 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| AGRESTUS                  | fYm0...z5UC | 268657.37 |    39679.21 |        11.00 |          4795 |          2 |        16 |    304428.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| ALBATROSS                 | 6TRn...ZmQC | 238549.77 |    69431.23 |        22.00 |          5661 |          4 |        14 |    304120.37 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| ALTZ                      | Tt9R...ChoC | 252721.23 |    40189.80 |        22.00 |          5450 |          8 |        34 |    294745.56 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| AMBREEZER                 | kgGY...I10C | 249677.69 |    43214.38 |        22.00 |          5007 |          5 |        24 |    294621.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| ASCII                     | MA1e...8pYC | 283003.76 |    17332.23 |        17.99 |          5543 |          6 |        53 |    299233.82 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| AUDI                      | zHqy...spMC | 274873.99 |    18030.32 |        22.00 |          4937 |          3 |        21 |    294619.73 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| BEOWULF                   | uLhl...M3gC | 288337.07 |    19486.42 |        17.79 |          4800 |          6 |        54 |    304230.71 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| BINANCE PRO               | 5LNI...xwgC | 260574.24 |    32057.31 |        21.00 |          5215 |          8 |        12 |    294253.47 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| BLOCKSHARD                | fs6z...Hf4C | 283679.04 |    19508.08 |        16.00 |          5204 |          6 |        66 |    304428.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| BUNKERIS                  | xAQ9...d4EC | 252879.67 |    40533.55 |        22.00 |          5409 |          5 |        22 |    294620.47 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| CHAMP                     | xZ3K...r6sC | 203207.17 |    89703.19 |        22.00 |          4805 |          5 |        19 |    294621.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| CHAUMDOTCOM               | Y0j1...wf4C | 280023.59 |    19847.92 |        18.00 |          5050 |          2 |        20 |    295684.06 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| CHIMAERA                  | CjKc...7YMC | 281024.32 |    19306.30 |        18.00 |          5021 |          8 |        30 |    298155.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| CHYBA-XX                  | GRGW...WP0C | 265794.36 |    27858.55 |        18.00 |          5291 |          6 |        23 |    295684.06 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| COACHAKA                  | ZT9B...lWwC | 254005.12 |    38897.36 |        22.00 |          5202 |          9 |        30 |    294913.03 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| COBRA                     | jJSQ...pywC | 232848.65 |    60030.49 |        22.00 |          4816 |          4 |        20 |    295341.11 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| CRICKET                   | fqcT...D7QC | 206483.08 |    87017.78 |        22.00 |          4862 |          6 |        27 |    294909.53 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| CRSMXX                    | sf8t...bmwC | 239671.62 |    67223.31 |        18.00 |          5605 |          2 |        13 |    303073.35 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| CYBERKUMO VALIDATOR       | uKpc...T8AC | 225454.12 |    67182.70 |        22.00 |          5112 |          9 |        14 |    295267.68 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| DAEDALUS                  | NHXs...D5kC | 273879.71 |    19696.51 |        17.90 |          5324 |         11 |        50 |    295168.97 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| DAILY PAYOUT              | cQyf...jsUC | 275565.26 |    18555.68 |        19.50 |          5617 |          2 |        16 |    294845.01 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| DANCERS                   | YV7g...3fIC | 253953.40 |    38965.28 |        22.00 |          5192 |         15 |        49 |    294813.44 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| DAVID CHAUM               | AJoQ...asYC | 166329.49 |    51561.01 |        22.00 |          4928 |          7 |         8 |    294511.45 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| DUKE_CODY_CTRL            | iTtS...EqkC |  80905.64 |   225763.38 |        22.00 |          5048 |          3 |        25 |    304488.00 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| EAGLE                     | nwzG...8xsC | 253503.60 |    39410.51 |        22.00 |          4780 |          5 |        35 |    294913.03 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| ENGUL.PH [ARRAKIS ]       | nSev...nG4C | 278197.17 |    15453.86 |        22.00 |          4685 |          3 |        11 |    294845.02 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| EXCALIBUR                 | grSQ...JYMC | 275901.92 |    17358.25 |        18.00 |          5766 |          7 |        41 |    295234.78 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| FIFTYSEVEN                | Zqwq...ep8C | 177546.00 |   114929.69 |        22.00 |          5738 |          8 |        12 |    294709.92 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| FREYJA                    | tvst...v4MC | 278919.44 |    18883.65 |        17.89 |          4968 |          4 |        64 |    298155.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| FRIENDLYNODE              | M3nF...f5cC | 289593.72 |    15778.60 |        18.00 |          5116 |          2 |        15 |    304428.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| FUCK GARY GENSLER@LOCKDAI | FJgQ.../3IC | 158247.82 |   141353.52 |        22.00 |          5062 |          7 |        40 |    298155.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| G5PRO                     | ipEB...QOgC | 269537.35 |    38263.42 |        12.00 |          4796 |          3 |        21 |    298155.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| GENESIS                   | 9ZJ1...8+EC | 277972.23 |    15692.00 |        18.00 |          4821 |          4 |        39 |    295250.99 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| GINI                      | 9z4Q...4qsC | 253192.64 |    40236.22 |        22.00 |          5105 |          4 |        42 |    294704.99 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| GOHEADER                  | zmt5...cgsC | 253949.32 |    39078.30 |        22.00 |          4872 |         11 |        40 |    294704.99 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| GOLDENKNIGHTS             | nWXz...9zQC | 253093.12 |    39887.93 |        22.00 |          4856 |         10 |        49 |    294913.03 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| GRAVITON                  | jGAd...dAAC | 250973.84 |    55559.34 |        12.00 |          4911 |          4 |        12 |    303435.41 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| HALWELL-NODE              | vEge...9oQC | 325581.54 |   115193.24 |        22.00 |          4653 |          4 |         7 |    440788.47 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| IGOR-NOM                  | cV7t...HMwC | 260333.40 |    40287.69 |        21.90 |          5792 |          3 |         9 |    299233.82 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| INNFLATOR                 | 3b58...Q8gC | 264074.04 |    29266.52 |        22.00 |          5705 |          3 |        12 |    294508.43 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| JCOM                      | BDi/...MeYC | 174057.75 |   118838.22 |        22.00 |          4981 |          6 |        17 |    294813.44 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| JESSIE                    | tfXU...5mQC | 297748.82 |    17288.40 |        18.00 |          5600 |          2 |        38 |    310904.48 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| JODO                      | sP8g...ltAC | 263029.32 |    30682.86 |        22.00 |          5593 |          3 |        17 |    294769.77 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| KIM-JE-DEOK               | Q1B5...mnYC | 295581.23 |    16398.65 |         5.50 |          5287 |          4 |       103 |    305401.91 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| LEMONODE                  | dU6r...TkgC | 257225.12 |    34684.09 |        20.00 |          5128 |          7 |         9 |    293602.41 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| LINAK                     | fzUe...kssC | 277609.76 |    15161.36 |        22.00 |          5781 |          6 |        15 |    294815.69 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| LOOK INSIDE YOURSELF      | OixI...GUIC | 108557.01 |   185827.88 |        20.00 |          1041 |          8 |        19 |    294622.87 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| LUX8.NET/INFINITE         | 8HOm...Ex0C | 243566.32 |    63848.93 |        22.00 |          5041 |          2 |        12 |    307415.25 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| M-US-VALIDATOR            | ob1k...JcYC | 276820.84 |    16036.51 |        18.00 |          5695 |          5 |        48 |    294704.99 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| MAHDIS                    | Kuh2...qH4C | 252547.20 |    40382.02 |        22.00 |          5620 |          5 |        33 |    294913.03 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| MARS                      | fG2D...RA0C | 272931.63 |    19246.26 |        21.00 |          5425 |          5 |        10 |    294085.36 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| MERCEDES                  | p3gx...jCMC | 242763.76 |    58466.60 |        20.00 |          5078 |         10 |        20 |    296258.78 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| MICROS                    | B9wE...+gEC | 253297.71 |    39601.96 |        22.00 |          5710 |          5 |        29 |    294913.03 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| MOTHER EARTH              | aBdq...uagC | 236736.93 |    57115.84 |        22.00 |          5349 |          4 |        45 |    294603.07 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| NCR MAIN 2                | Gt6J...tHwC | 279124.79 |    56474.17 |        22.00 |          5116 |          5 |        21 |    335598.96 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| NEWKHUN                   | B0d4...bsQC | 249479.93 |    58778.70 |        18.00 |          5341 |          7 |        18 |    304887.91 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| NODE0311                  | vukY...FjgC | 255425.44 |    37304.69 |        14.00 |          5548 |          2 |        36 |    294422.41 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| NODELAB                   | oaBF...Dq8C | 291619.32 |    15123.82 |        13.00 |          5016 |          3 |        12 |    303073.35 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| NODEPRO                   | 5EpU...JAoC |  36509.20 |   316129.23 |        20.00 |          5229 |          5 |        61 |    352638.43 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| ORANG3CLUB                | bWym...LY4C | 237322.89 |    56388.10 |        22.00 |          5694 |          3 |         9 |    294681.59 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| ORANGES03                 | +8RF...G/UC | 268526.97 |    24364.27 |        22.00 |          5251 |          7 |        29 |    294813.44 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| OXTAIL                    | 2wjo...uLEC | 205078.01 |    87858.54 |        22.00 |          5408 |          4 |        35 |    296258.78 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| PATHROCKNETWORK           | REOQ...sbYC | 277580.84 |    15491.82 |        20.00 |          5212 |          9 |        37 |    294593.41 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| PIEYE                     | ORpU...5ikC | 234995.39 |    58393.60 |        22.00 |          5053 |          5 |        10 |    294845.02 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| PROMETHEUS/REDINDIAN      | lQ1m...kKQC | 286506.30 |    24386.33 |        18.00 |          5429 |          6 |        30 |    305242.04 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| RADIANCE NODE             | M93J...ikIC | 283256.68 |    23296.58 |        18.00 |          5682 |          3 |        37 |    303435.41 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| SHELDON                   | 6A55...HEIC | 293867.43 |    69761.35 |        17.50 |          5467 |          3 |        79 |    363649.36 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| SONG-GWANG-SA             | 4Wa4...f4oC | 284596.98 |    27080.29 |         5.50 |          5008 |          5 |       118 |    305401.91 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| SPECTRUM                  | e+hU...Kv8C | 284640.61 |    20355.86 |        15.00 |          5062 |          5 |        65 |    302838.68 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| STARDUST STAKING          | 5ppZ...NGMC | 211880.48 |    81211.11 |        22.00 |          5250 |          5 |        20 |    294593.41 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| STARLORD                  | KwzI...bMMC | 279626.93 |    26581.50 |        19.00 |          5043 |          3 |        14 |    303112.51 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| THE_LIGHT                 | djo9...XA0C | 248716.90 |    44592.35 |        22.00 |          5247 |          7 |        16 |    294507.08 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| TITAN                     | qc1V...FuMC | 204723.02 |    94286.61 |        19.00 |          5013 |          6 |        41 |    298155.30 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| TONG-DO-SA                | l3eh...HrsC | 286049.88 |    26558.72 |         5.50 |          5655 |          8 |       152 |    305401.91 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| TROIX MAINET              | wEpm...qVgC | 234189.82 |    59377.75 |        22.00 |          5124 |          7 |        12 |    294681.59 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| UNITED-VALIDATORS/ENVY    | 6dUV...8AEC | 280821.98 |    20046.79 |        18.00 |          5379 |          2 |         5 |    303073.35 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| UNITED-VALIDATORS/PRIDE   | a3EX...e1QC | 288781.18 |    20044.92 |        18.00 |          5405 |          4 |        24 |    304481.61 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| UNITED-VALIDATORS/SLOTH   | Y8V5...PS0C | 280819.03 |    20049.71 |        18.00 |          4858 |          2 |         8 |    300851.03 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| VAN HELSING               | SDks...EbsC | 261130.43 |    32696.03 |        22.00 |          5848 |          7 |        35 |    294603.07 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| VWMORESCHI                | wK8Q...RhcC | 253439.88 |    39474.93 |        22.00 |          5203 |          5 |        30 |    294622.87 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| WEB34EVER                 | CbbU...T8MC | 245645.61 |    45069.43 |        22.00 |          3628 |          3 |         6 |    292717.75 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| WILLY                     | /C1S...oXgC | 277625.36 |    23612.06 |        16.00 |          4964 |          7 |        39 |    304729.40 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| WINGMANS                  | 2H5c...V3wC | 252329.99 |    40583.01 |        22.00 |          5707 |          9 |        40 |    294913.03 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| XX NETWORK CANADA         | mb0p...0R4C | 194942.77 |   100922.36 |        20.00 |          4723 |         10 |        41 |    295684.06 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| XX-EUROPE-2               | Od9T...tUwC | 183218.85 |    64745.48 |        22.00 |          5351 |          7 |         7 |    247964.33 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| XXFACTORZ                 | Qmv5...vM8C | 209984.24 |    64837.84 |        22.00 |          4783 |          5 |         6 |    280439.25 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| XXMYPREFNODE              | YP9n...sPgC | 279653.64 |    21402.77 |        17.77 |          5489 |         10 |       129 |    299127.84 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| XXRAYZ                    | 2z+0...jecC | 210620.85 |    64199.81 |        22.00 |          4609 |          8 |         9 |    280439.25 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n| XXSTATIONXX               | /j2L...ia8C | 281256.19 |    16278.53 |        14.00 |          5473 |          2 |        21 |    304755.04 |\n+---------------------------+-------------+-----------+-------------+--------------+---------------+------------+-----------+--------------+\n"})})]})}function c(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},85497:(n,e,t)=>{t.d(e,{A:()=>o});const o=t.p+"assets/images/2025-01-04-xx-chain-era-1144-waiting-d2bc4bb00d5668228987634af68d3c74.png"},27468:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var o=t(30758);const i={},a=o.createContext(i);function s(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);