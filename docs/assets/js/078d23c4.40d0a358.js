"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[3580],{2893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(6070),a=t(7468);const s={slug:"2023/11/11/xx-chain-block-dumper",title:"Dump block contents on xx chain with xxblockdumper",authors:["armchairancap"],tags:["xx network","xx chain"],description:"Dump xx chain block contents to JSON",keywords:["xx network","chain","scalecodec","xx chain","explorer","scan","events"]},c=void 0,o={permalink:"/blog/2023/11/11/xx-chain-block-dumper",source:"@site/blog/2024-11-11-xx-chain-block-dumper.md",title:"Dump block contents on xx chain with xxblockdumper",description:"Dump xx chain block contents to JSON",date:"2024-11-11T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2023/11/11/xx-chain-block-dumper",title:"Dump block contents on xx chain with xxblockdumper",authors:["armchairancap"],tags:["xx network","xx chain"],description:"Dump xx chain block contents to JSON",keywords:["xx network","chain","scalecodec","xx chain","explorer","scan","events"]},unlisted:!1,nextItem:{title:"NFT-gated access on xx Network",permalink:"/blog/2023/11/05/xx-network-asset-gated-access"}},r={authorsImageUrls:[void 0]},l=[{value:"xxblockdumper",id:"xxblockdumper",level:2},{value:"Using with xx chain",id:"using-with-xx-chain",level:2},{value:"What does this all mean",id:"what-does-this-all-mean",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#xxblockdumper",children:"xxblockdumper"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#using-with-xx-chain",children:"Using with xx chain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#what-does-this-all-mean",children:"What does this all mean"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#conclusion",children:"Conclusion"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"xxblockdumper",children:"xxblockdumper"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://git.xx.network/carback1/xxblockdumper",children:"xxblockdumper"})," is another nice utility from Rick."]}),"\n",(0,i.jsx)(n.p,{children:"It aims to provide the following features to xx chain users (from current repo description):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fetch complete block data from any Substrate-based chain"}),"\n",(0,i.jsx)(n.li,{children:"Retrieve state data and extrinsics"}),"\n",(0,i.jsx)(n.li,{children:"Export data to JSON format"}),"\n",(0,i.jsx)(n.li,{children:"Support for latest or specific block numbers"}),"\n",(0,i.jsx)(n.li,{children:"Configurable node endpoint"}),"\n",(0,i.jsx)(n.li,{children:"Built-in retry mechanism with exponential backoff"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-with-xx-chain",children:"Using with xx chain"}),"\n",(0,i.jsx)(n.p,{children:"Download, install, use."}),"\n",(0,i.jsxs)(n.p,{children:["Three comments regarding today's ",(0,i.jsx)(n.code,{children:"main"})," tree:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Currently ",(0,i.jsx)(n.code,{children:'click.echo(f"Debug - Block structure: {json.dumps(block, indent=2)}", err=True)'})," causes SCALE codec malfunction, so I mark it out before installing (this will probably get fixed soon)"]}),"\n",(0,i.jsxs)(n.li,{children:["I've updated some packages before installing, including Python Substrate Interface and SCALE codec, but this will probably be updated in ",(0,i.jsx)(n.code,{children:"main"})," soon"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-n ${BLOCKNUMBER}"})," is optional and ",(0,i.jsx)(n.code,{children:"None"})," means ",(0,i.jsx)(n.code,{children:"CURRENT"})]}),"\n",(0,i.jsx)(n.li,{children:"You may see this error as well"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ blockdumper -n ws://192.168.1.3:63007\n\nConnecting to node: ws://192.168.1.3:63007\nFetching data for latest\nBlock hash: 0x610dfaf8cfae9c0cc7478183e490cf38f56c497f48b9dd744b5fec9f20777bde\nError fetching state data: {'code': -32702, 'message': 'Response is too big', 'data': 'Exceeded max limit of 1048576'}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Yeah."}),"\n",(0,i.jsx)(n.p,{children:"Change your xx chain configuration to allow large responses and restart chain service. Here the maximum response size is upped to 32 MB."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-raw",children:"  --rpc-max-request-size 2 \\\n  --rpc-max-response-size 32 \\\n"})}),"\n",(0,i.jsx)(n.p,{children:'You need to be careful with this on servers that provide public services - this can get "expensive"!'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"RPC calls are not cheap",src:t(9662).A+"",width:"930",height:"133"})}),"\n",(0,i.jsx)(n.p,{children:"As you can imagine, Dwellir's public RPC endpoint hasn't made those adjustments for your freeloading convenience."}),"\n",(0,i.jsx)(n.p,{children:"Once you get that downloaded, run extract.py on the file (this is a to-do item that will contain a specific example for which the utility is being created)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"python3 extract.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Output file name is currently hard-coded (",(0,i.jsx)(n.code,{children:"block_<number>_<timestamp>.json"}),") because xxblockdumper was created to enable simple DIY auditing of individual blocks."]}),"\n",(0,i.jsx)(n.h2,{id:"what-does-this-all-mean",children:"What does this all mean"}),"\n",(0,i.jsx)(n.p,{children:"It means you get detailed chain info off your xx chain server in the convenient JSON format."}),"\n",(0,i.jsx)(n.p,{children:"It means you can use this for certain things without having a big chain explorer at your disposal."}),"\n",(0,i.jsx)(n.p,{children:"It means you may not be able to react as quickly as by API-querying an explorer - as you can see, it takes a bit more than 6 seconds to get this stuff out of your RPC endpoint."}),"\n",(0,i.jsx)(n.p,{children:"If not all data are requested, it may be possible to provide near-real-time watch services (for example), but I haven't verified this - I just imagine if a fraction of data is required, certain queries could be done in seconds."}),"\n",(0,i.jsx)(n.p,{children:"On a fast server we could run multiple xxblockdumper tasks, but as long as each task takes more than 6 seconds to get data and analyze it, that can't work for near-real-time analytics - for that you'd need a different tool."}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"xxblockdumper provides convenience to Python users who want to work with xx chain block data."}),"\n",(0,i.jsx)(n.p,{children:"There are minor bugs that will be sorted out and then we'll be able to use it to build other tools."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9662:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2024-11-10-xx-chain-block-dumper-expensive-260badb70e8357dd8178e2553d32d053.png"},7468:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(758);const a={},s=i.createContext(a);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);