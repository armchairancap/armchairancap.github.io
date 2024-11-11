"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[3580],{2893:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=a(6070),i=a(7468);const s={slug:"2024/11/11/xx-chain-block-dumper",title:"Dump xx Chain block contents with xxblockdumper",authors:["armchairancap"],tags:["xx network","xx chain"],description:"Dump xx chain block contents to JSON",keywords:["xx network","chain","scalecodec","xx chain","explorer","scan","events"]},c=void 0,r={permalink:"/blog/2024/11/11/xx-chain-block-dumper",source:"@site/blog/2024-11-11-xx-chain-block-dumper.md",title:"Dump xx Chain block contents with xxblockdumper",description:"Dump xx chain block contents to JSON",date:"2024-11-11T00:00:00.000Z",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"},{label:"xx chain",permalink:"/blog/tags/xx-chain"}],readingTime:3.805,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/11/11/xx-chain-block-dumper",title:"Dump xx Chain block contents with xxblockdumper",authors:["armchairancap"],tags:["xx network","xx chain"],description:"Dump xx chain block contents to JSON",keywords:["xx network","chain","scalecodec","xx chain","explorer","scan","events"]},unlisted:!1,nextItem:{title:"Why dApps for xx Network",permalink:"/blog/2024/11/11/xx-dapps"}},o={authorsImageUrls:[void 0]},l=[{value:"xxblockdumper",id:"xxblockdumper",level:2},{value:"Using with xx chain",id:"using-with-xx-chain",level:2},{value:"What does this all mean",id:"what-does-this-all-mean",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#xxblockdumper",children:"xxblockdumper"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-with-xx-chain",children:"Using with xx chain"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#what-does-this-all-mean",children:"What does this all mean"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#conclusion",children:"Conclusion"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"xxblockdumper",children:"xxblockdumper"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://git.xx.network/carback1/xxblockdumper",children:"xxblockdumper"})," is another nice utility from Rick."]}),"\n",(0,t.jsx)(n.p,{children:"It aims to provide the following features to xx chain users (from current repo description):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fetch complete block data from any Substrate-based chain"}),"\n",(0,t.jsx)(n.li,{children:"Retrieve state data and extrinsics"}),"\n",(0,t.jsx)(n.li,{children:"Export data to JSON format"}),"\n",(0,t.jsx)(n.li,{children:"Support for latest or specific block numbers"}),"\n",(0,t.jsx)(n.li,{children:"Configurable node endpoint"}),"\n",(0,t.jsx)(n.li,{children:"Built-in retry mechanism with exponential backoff"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-with-xx-chain",children:"Using with xx chain"}),"\n",(0,t.jsx)(n.p,{children:"Download, install, use."}),"\n",(0,t.jsxs)(n.p,{children:["Three comments regarding today's ",(0,t.jsx)(n.code,{children:"main"})," tree:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Currently ",(0,t.jsx)(n.code,{children:'click.echo(f"Debug - Block structure: {json.dumps(block, indent=2)}", err=True)'})," causes SCALE codec malfunction, so I mark it out before installing (this will probably get fixed soon)"]}),"\n",(0,t.jsxs)(n.li,{children:["I've updated some packages before installing, including Python Substrate Interface and SCALE codec, but this will probably be updated in ",(0,t.jsx)(n.code,{children:"main"})," soon"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-n ${BLOCKNUMBER}"})," is optional and ",(0,t.jsx)(n.code,{children:"None"})," means ",(0,t.jsx)(n.code,{children:"CURRENT"})]}),"\n",(0,t.jsx)(n.li,{children:"You may see this error as well"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ blockdumper -n ws://192.168.1.3:63007\n\nConnecting to node: ws://192.168.1.3:63007\nFetching data for latest\nBlock hash: 0x610dfaf8cfae9c0cc7478183e490cf38f56c497f48b9dd744b5fec9f20777bde\nError fetching state data: {'code': -32702, 'message': 'Response is too big', 'data': 'Exceeded max limit of 1048576'}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Yeah."}),"\n",(0,t.jsx)(n.p,{children:"Change your xx chain configuration to allow large responses and restart chain service. Here the maximum response size is upped to 32 MB."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-raw",children:"  --rpc-max-request-size 2 \\\n  --rpc-max-response-size 32 \\\n"})}),"\n",(0,t.jsx)(n.p,{children:'You need to be careful with this on servers that provide public services - this can get "expensive"!'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"RPC calls are not cheap",src:a(9662).A+"",width:"930",height:"133"})}),"\n",(0,t.jsx)(n.p,{children:"As you can imagine, Dwellir's public RPC endpoint hasn't made those adjustments for your freeloading convenience."}),"\n",(0,t.jsx)(n.p,{children:"Full console output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-raw",children:"Fetching data for latest\nBlock hash: 0x463b0a5145b3a2b5b8d10e5572122a554f0eb9772712a787b4a6ffd2edc1f2a0\nFound 150325 storage keys\nFetching state data  [####################################]  100%          \nFetching extrinsics  [####################################]  100%\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Output file name is currently hard-coded (",(0,t.jsx)(n.code,{children:"block_<number>_<timestamp>.json"}),") because xxblockdumper was created to enable simple DIY auditing of individual blocks."]}),"\n",(0,t.jsxs)(n.p,{children:["In my case it was saved to ",(0,t.jsx)(n.code,{children:"./dumps/block_15567031_20241110_155449.json"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"What does that dump file look like? Like this. 52 MB JSON in this particular case."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "block_data": {\n        "block_number": 15567031,\n        "block_hash": "0x463b0a5145b3a2b5b8d10e5572122a554f0eb9772712a787b4a6ffd2edc1f2a0",\n        "state_root": "0x2218a4590b9906c25b5ad251379db00fcea731450bdc8a1adfebf640d04a41ba",\n        "extrinsics_root": "0x47480d63db002bcbbebb44b37077cedc9624949fda470aa3ce72be8de0d306ca",\n        "parent_hash": "0xd275c4801726c9ea7f69aea84ccb0d392e0b4dbfbb45dd8d8fa86c62174f0e27"\n    },\n    "state_data": {\n        "0x1809d78346727a0ef58c0fa03bafa3231d885dcfb277f185f2d8e62a5f290c8500899da26b8497b0eaf20675a608ec9d7a7fa0f71648c62291d8ddbfe020a0675a70fe6788aa21d9": "0x04b26ce6317a87d3d9fdebe0362b568803e2057989d2fab2aa958870b57680c3670400000000406489aa040000000000000000000000",\n    ...\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"It needs to be further analyzed."}),"\n",(0,t.jsx)(n.p,{children:"extract.py (currently just a stub in the repo) is to-do item that will contain a specific example for which the utility is being created. It will be executed against the dump file(s) to perform extraction, decoding and reporting."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ python3 extract.py\n"})}),"\n",(0,t.jsx)(n.h2,{id:"what-does-this-all-mean",children:"What does this all mean"}),"\n",(0,t.jsx)(n.p,{children:"It means you get detailed chain info off your xx chain server in the convenient JSON format."}),"\n",(0,t.jsx)(n.p,{children:"It means you can use this for certain things without having a big chain explorer at your disposal."}),"\n",(0,t.jsx)(n.p,{children:"It means you may not be able to react as quickly as by API-querying an explorer - as you can see, it takes a bit more than 6 seconds to get this stuff out of your RPC endpoint."}),"\n",(0,t.jsx)(n.p,{children:"If not all data are requested, it may be possible to provide near-real-time watch services (for example), but I haven't verified this - I just imagine if a fraction of data is required, certain queries could be done in seconds."}),"\n",(0,t.jsx)(n.p,{children:"On a fast server we could run multiple xxblockdumper tasks, but as long as each task takes more than 6 seconds to get data and analyze it, that can't work for near-real-time analytics - for that you'd need a different tool."}),"\n",(0,t.jsx)(n.p,{children:"If you want to dump details of old block data you'll need to run your node in archive mode and have > 200 GB of disk space to play with. Nodes discard state fairly quickly depending on settings (minutes or hours)."}),"\n",(0,t.jsx)(n.p,{children:"For example, my dump file above contained many entries like these:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-raw",children:"\"Error fetching storage: \n{\n    'code': -32000, \n    'message': 'Client error: UnknownBlock: State already discarded for 0x463b0a5145b3a2b5b8d10e5572122a554f0eb9772712a787b4a6ffd2edc1f2a0'\n}\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"In order for xxblockdumper to work you need an archive node."}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, if you look for current or very recent blocks and have a fast system, but state pruning timeout is 256 blocks, so for 1 hour you'd need (60s/6bps)x60 min= 600 at least."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-raw",children:"./xxnetwork-chain -h | grep pruning\n      --state-pruning <PRUNING_MODE>\n          Specify the state pruning mode [default: 256]\n      --blocks-pruning <PRUNING_MODE>\n          Specify the blocks pruning mode [default: archive-canonical]\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--blocks-pruning archive"})," is what will always work, but xx chain node will need hundreds of GBs, possibly on flash media."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"xxblockdumper provides convenience to Python users who want to work with xx chain block data."}),"\n",(0,t.jsx)(n.p,{children:"There are minor bugs that will be sorted out and then we'll be able to use it to build other tools."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9662:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/2024-11-10-xx-chain-block-dumper-expensive-260badb70e8357dd8178e2553d32d053.png"},7468:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>r});var t=a(758);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);