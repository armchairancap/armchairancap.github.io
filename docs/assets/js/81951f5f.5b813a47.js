"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[4144],{5791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(7624),s=n(4552);const o={slug:"2024/02/09/xx-network-cli-irc-like-client",title:"How to use xx Network CLI",authors:["armchairancap"],tags:["xx network"],description:"How to get started with xx Network CLI client",keywords:["xx network","chat","broadcast","cli","text","client","irc"]},r=void 0,a={permalink:"/blog/2024/02/09/xx-network-cli-irc-like-client",source:"@site/blog/2024-02-09-xx-network-cli-irc-like-client.md",title:"How to use xx Network CLI",description:"How to get started with xx Network CLI client",date:"2024-02-09T00:00:00.000Z",formattedDate:"February 9, 2024",tags:[{label:"xx network",permalink:"/blog/tags/xx-network"}],readingTime:5.92,hasTruncateMarker:!1,authors:[{name:"ArmchairAncap",url:"https://github.com/armchairancap",imageURL:"https://github.com/armchairancap.png",key:"armchairancap"}],frontMatter:{slug:"2024/02/09/xx-network-cli-irc-like-client",title:"How to use xx Network CLI",authors:["armchairancap"],tags:["xx network"],description:"How to get started with xx Network CLI client",keywords:["xx network","chat","broadcast","cli","text","client","irc"]},unlisted:!1,prevItem:{title:"EU puts EU-based privacy coin users in untenable position",permalink:"/blog/2024/03/23/eu-legislation-untenable-for-privacy-coin-users"},nextItem:{title:"Case for xx Network chat link in security.txt",permalink:"/blog/2023/06/05/xx-network-chat-security-dot-txt"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Build",id:"build",level:2},{value:"Use xx CLI",id:"use-xx-cli",level:2},{value:"First user",id:"first-user",level:3},{value:"Second user",id:"second-user",level:3},{value:"Other details",id:"other-details",level:2},{value:"Use cases",id:"use-cases",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:'xx Network is a privacy-focused, quantum-resistant "small messaging" network.'}),"\n",(0,i.jsx)(t.p,{children:'By "small messaging" I mean up to KB-sized messages, although it\'s possible to use larger messages as well. For example, xx Messenger supports small attachments (tens of KB).'}),"\n",(0,i.jsx)(t.p,{children:'xx CLI client is a reference client implementation for xx Network that at this time uses the older "broadcast module layer" approach.'}),"\n",(0,i.jsx)(t.p,{children:"Speakeasy (Haven) or Echoexx use a better approach (channels), but all of them use the xx Network SDK (xxDK)."}),"\n",(0,i.jsx)(t.p,{children:"xx CLI client repository has a read-me file that contains almost all the steps required to get started, but this post can still save you some time."}),"\n",(0,i.jsx)(t.h2,{id:"build",children:"Build"}),"\n",(0,i.jsxs)(t.p,{children:["At this time we need ",(0,i.jsx)(t.code,{children:"go1.21"}),", but check the source to verify if this requirement changed."]}),"\n",(0,i.jsx)(t.p,{children:"These steps are for Linux. Check the repository's read-me file for other OS."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"git clone https://git.xx.network/elixxir/cli-client && cd cli-client/\ngo mod vendor && go mod tidy\nGOOS=linux GOARCH=amd64 go build -ldflags '-w -s' -o xx-client main.go\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["On ARM64 devices, use ",(0,i.jsx)(t.code,{children:"GOARCH=arm64"})," or omit ",(0,i.jsx)(t.code,{children:"GOARCH"})," (it should be detected automatically)."]})}),"\n",(0,i.jsx)(t.h2,{id:"use-xx-cli",children:"Use xx CLI"}),"\n",(0,i.jsx)(t.p,{children:"Let's see how to use xx CLI client."}),"\n",(0,i.jsx)(t.h3,{id:"first-user",children:"First user"}),"\n",(0,i.jsx)(t.p,{children:"Someone needs to create a broadcast (chat) first."}),"\n",(0,i.jsxs)(t.p,{children:["We can do that with ",(0,i.jsx)(t.code,{children:"--new"}),", and give your broadcast a name and a description."]}),"\n",(0,i.jsx)(t.p,{children:"Setup procedure creates 2 files you need to know about:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the first one is the broadcast definition file by default named $CHANNEL.xxchan (here, ",(0,i.jsx)(t.code,{children:"test.xxchan"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["the second is a private RSA key for the creator who is also channel admin. This one is by default named ",(0,i.jsx)(t.code,{children:"$CHANNEL-privateKey.pem"})," (here, ",(0,i.jsx)(t.code,{children:"test-privateKey.pem"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'export NICK="my-Name"\n./xx-client broadcast --new -o test.xxchan -n "test" -d "Some desc"\n./xx-client broadcast --load -o test.xxchan -u $NICK --waitTimeout 120s\n./xx-client.linux64 broadcast --load -o test.xxchan -u $NICK --waitTimeout 120s\n# in case of timeouts try logLevel 1 or 2 with: --logLevel 1\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"test.xxchan"})," is the broadcast definition file which enables another party to listen to this broadcast. Secure it if your broadcast is private."]})}),"\n",(0,i.jsxs)(t.p,{children:["The default wait timeout value wasn't enough, so I extended it with ",(0,i.jsx)(t.code,{children:"--waitTimeout"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The reason is lately some xx Network gateway nodes had difficulties (potentially due to government interference in some countries) which makes it harder to connect. There's a log file which you can tail from another terminal to see that."}),"\n",(0,i.jsxs)(t.p,{children:["If you want to use a self-supplied RSA key, use ",(0,i.jsx)(t.code,{children:"--key ${FILENAME}"})," to specify the RSA private key file, such as ",(0,i.jsx)(t.code,{children:"--key ~/.ssh/id_rsa_xxcli"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"second-user",children:"Second user"}),"\n",(0,i.jsx)(t.p,{children:"The second user needs the broadcast definition file, as there's no way to establish chat without it."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Share the broadcast file through Signal or use some other secure sharing method. A chat is no more secure than the medium through which this file has been shared."})}),"\n",(0,i.jsx)(t.p,{children:"The second user would normally have another nickname (although they're really identified by their private key) and needs to only load the channel, not create it."}),"\n",(0,i.jsx)(t.p,{children:"Here we'll create the RSA key manually before we start (as we don't need to create a channel). This also means you can reuse existing RSA key if you have it."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'export NICK="AnotherGuy"\nssh-keygen -t rsa -f AnotherGuyKeyfile\n# move your new private key to the default private key file name for the chat "test"\nmv AnotherGuyKeyfile test-privateKey.pem\n# test.xxchan is the configuration file obtained from the first party\n./xx-client.linux64 broadcast --load -o test.xxchan -u $NICK --waitTimeout 120s\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"For each client we use a different terminal (or different client altogether). Different chats use different broadcast definition files."})}),"\n",(0,i.jsx)(t.p,{children:"And that is it!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"xx Network CLI",src:n(8903).c+"",width:"1351",height:"848"})}),"\n",(0,i.jsx)(t.p,{children:"There are minor console-related bugs, and you'll need to reconnect (simply CTRL+C and then restart) if you get disconnected."}),"\n",(0,i.jsx)(t.h2,{id:"other-details",children:"Other details"}),"\n",(0,i.jsx)(t.p,{children:"There are other details that you can find from online help, or by inspecting the code."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-raw",children:'Available Commands:\n  broadcast   Create or join broadcast channels.\n  completion  Generate the autocompletion script for the specified shell\n  generate    Generates version and dependency information for the binary.\n  help        Help about any command\n  version     Print the version and dependency information for the binary.\n\nFlags:\n  -c, --config string          Path to YAML file with custom configuration..\n  -h, --help                   help for cli-client\n  -v, --logLevel int           Verbosity level for log printing (2+ = Trace, 1 = Debug, 0 = Info).\n  -l, --logPath string         File path to save log file to. (default "cli-client.log")\n      --ndf string             Path to the network definition JSON file. By default, the prepacked NDF is used.\n  -p, --password string        Password to the session file.\n  -s, --session string         Sets the initial storage directory for client session data. (default "session")\n      --waitTimeout duration   Duration to wait for messages to arrive. (default 15s)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,i.jsx)(t.p,{children:"xx CLI client cannot communicate with Speakeasy or Echoexx - as noted earlier, these use different module of xxDK."}),"\n",(0,i.jsx)(t.p,{children:"But it can be useful on its own. Some examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"secure & private DM or group chat client for headless and remote systems without X Window System - like IRC, but with fewer features and more secure and private"}),"\n",(0,i.jsx)(t.li,{children:"share IT-related secrets such as passwords and .env files with yourself or colleagues: load channel file, start the client, send or receive secrets and then delete the entire directory on the temporary client"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A bit more on this last use case. You should use encrypted boot volume or change the secret if it's critical, as it's not technically possible to shred/wipe a single file on an unencrypted flash disk. For this use case you need to be able to get out to the Internet which is often, but not always (e.g. LAN) possible."}),"\n",(0,i.jsx)(t.p,{children:'There are CLI scripts for "secure" password sharing, but they rely on personal infrastructure (some server & DB which may or may not be secure), or 3rd party infrastructure which may or may not be more secure than xx Network (and often doesn\'t have open source code on both the server and client).'}),"\n",(0,i.jsx)(t.p,{children:"There's also Tailscale, but again - to be equally secure, you still have to encrypt your data before sending it and probably at-rest as well (considering that the client is \"online\" at all times). If you can make use of Tailscale for other things that's great, but if you need something quick - like when setting up some VMs in the cloud - xx CLI client could be good enough."}),"\n",(0,i.jsx)(t.p,{children:"xx CLI client could also be modified for other purposes, for example as a low censorship-free broadcast tool without the need for Tor (which mony networks block in any case). Access to the xx Network gateways can also be blocked, but most jurisdictions and corporate firewalls haven't done it yet."}),"\n",(0,i.jsx)(t.p,{children:"As of now, xx Network gateways retain client side-encrypted data for 21 days, after which it expires and may be found only on the clients (if they logged in and downloaded it before it expired). So, keep in mind that you may shred the local session file, channel file and private key to disable access locally, while chat data stored on xx Network gateways expires in weeks. What you cannot delete is the messages other clients received on their side without access to those clients."})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8903:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/xx-network-cli-01-6e07a831e1d030e170512290fedaf730.png"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var i=n(1504);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);