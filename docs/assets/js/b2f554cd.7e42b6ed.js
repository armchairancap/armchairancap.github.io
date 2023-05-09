"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2023/05/08/xx-netork-wallet-sign-verify","metadata":{"permalink":"/blog/2023/05/08/xx-netork-wallet-sign-verify","source":"@site/blog/2023-05-08-xx-network-wallet-sign-verify/index.md","title":"Sign and verify messages using xx Network wallet","description":"Sign","date":"2023-05-08T00:00:00.000Z","formattedDate":"May 8, 2023","tags":[{"label":"xx network","permalink":"/blog/tags/xx-network"},{"label":"sign","permalink":"/blog/tags/sign"},{"label":"verify","permalink":"/blog/tags/verify"},{"label":"wallet","permalink":"/blog/tags/wallet"}],"readingTime":1.08,"hasTruncateMarker":false,"authors":[{"name":"ArmchairAncap","url":"https://github.com/armchairancap","imageURL":"https://github.com/armchairancap.png","key":"armchairancap"}],"frontMatter":{"slug":"2023/05/08/xx-netork-wallet-sign-verify","title":"Sign and verify messages using xx Network wallet","authors":["armchairancap"],"tags":["xx network","sign","verify","wallet"]},"nextItem":{"title":"Install own xx Network Speakeasy Web server","permalink":"/blog/2023/04/30/install-xx-network-speakeasy"}},"content":"## Sign\\n\\nGo to `Developer` > `Sign and Verify` > `Sign message`\\n\\nPick an address (\\"wallet\\") to use and enter a message or other data you wish to sign with your wallet key to `sign the following data`. \\n\\nThis may be any text such as your Speakeasy codename, email address, etc.\\n\\n![Sign message from xx Network wallet](xx-network-wallet-sign.png)\\n\\nClick on the copy icon to copy the signature (`signature of supplied data`) to clipboard. \\n\\n## Verify\\n\\nTo verify, go to `Verify signature` rather than `Sign and Verify`.\\n\\n`Verify using address` means the signer\'s wallet address (so, usually not your own).\\n\\nYou need to provide the same wallet and message that you got, and if everything checks out, the icon next to `the supplied signature` will become a green check mark.\\n\\nBad signatures will fail to verify.\\n\\n![Bad signature fails to verify](xx-network-wallet-verify-bad-hash.png)\\n\\nBad data will also fail to verify against a correct signature.\\n\\n![Correct signature and content verify](xx-network-wallet-verify-incomplete.png)\\n\\nTo be successful, a verification requires the same wallet, message data and signature used to generate the signature.\\n\\n![Correct verification](xx-network-wallet-verify.png)\\n\\n## Non-deterministic signatures\\n\\nxx Network uses Schnorrkel (sr25519), which doesn\'t create deterministic messages.\\n\\nFor example, I created two more signatures. Each time I got a valid, but different, signature to what I got in the first screenshot.\\n\\n- `0x2a40ed0.......3187`\\n- `0xdec0ed9.......b78f`"},{"id":"2023/04/30/install-xx-network-speakeasy","metadata":{"permalink":"/blog/2023/04/30/install-xx-network-speakeasy","source":"@site/blog/2023-04-30-install-speakeasy-app.md","title":"Install own xx Network Speakeasy Web server","description":"Containerized or non-containerized Speakeasy","date":"2023-04-30T00:00:00.000Z","formattedDate":"April 30, 2023","tags":[{"label":"xx network","permalink":"/blog/tags/xx-network"},{"label":"speakeasy","permalink":"/blog/tags/speakeasy"}],"readingTime":4.62,"hasTruncateMarker":false,"authors":[{"name":"ArmchairAncap","url":"https://github.com/armchairancap","imageURL":"https://github.com/armchairancap.png","key":"armchairancap"}],"frontMatter":{"slug":"2023/04/30/install-xx-network-speakeasy","title":"Install own xx Network Speakeasy Web server","authors":["armchairancap"],"tags":["xx network","speakeasy"]},"prevItem":{"title":"Sign and verify messages using xx Network wallet","permalink":"/blog/2023/05/08/xx-netork-wallet-sign-verify"}},"content":"## Containerized or non-containerized Speakeasy\\n\\nIt\'s probably easier to run Speakeasy in a container. If you have Docker or Postman, you may try [these](https://github.com/armchairancap/xx-speakeasy-container) instructions.\\n\\nIn the case you want to self-host a non-containerized Speakeasy, read on!\\n\\n## Home or cloud\\n\\nYou may install Speakeasy at home or in the cloud.\\n\\nSpeakeasy Web server doesn\'t hold any data but its OS and Node.js logs may store client IPs, that\'s all. \\n\\nWith that in mind, high-level considerations would be:\\n\\n- We don\'t want our Speakeasy Web app or underlying OS to get compromised\\n- If your Speakeasy server is not open to public, or is accessed \\"by invite\\" (maybe with basic authentication or VPN, for your family and friends), you may run it at home\\n- If your Speakeasy server is located in the cloud, that\'s acceptable as long as you can protect it from getting compromised so that application code doesn\'t get replaced, OS compromised, or visitors\' IPs leaked.\\n\\nRegarding this last point, if you feel comfortable hosting your Speakeasy server in a small (1G RAM) VM, it is better to open it to public to have the Web server accessed by a variety of addresses. As long as you know how to protect the VM.\\n\\n:::tip\\nEach participant in a conversation can use a different Speakeasy Web server, so many combinations are possible.\\n:::\\n\\n## Software and hardware requirements\\n\\nUse a Linux OS or VM, x86_64 or ARM64 architecture. Required specifications are minimal:\\n\\n- 1 vCPU\\n- 1 GB RAM\\n\\nAll Speakeasy does is serves the app to the client(s) and that\'s one-time download from the client side. \\n\\nOne vCPU is enough and will be hardly utilized except when Node.js builds the application - that takes a long time (15 minutes), but has to be done only when Speakeasy is updated.\\n\\n## Install Node.js\\n\\nThis post was prototyped on DietPi, which currently uses Node.js 20. \\n\\nOn DietPi, you may install Node.js as follows:\\n\\n```sh\\nsudo dietpi-software install 9\\n```\\n\\nOr, run `dietpi-software`, select `Search software`, search for `Node.js`, and proceed with installation.\\n\\nFor other Linux OS, follow their installation instructions for [Node.js](https://nodejs.org/en/download/) version 16.14 or above.\\n\\n## Deploy and run Speakeasy\\n\\nWe need to pick a directory for the application, clone the source to that directory, change some parameters and install.\\n\\n```sh\\nsudo mkdir -p /usr/src/app/speakeasy/.next\\n```\\n\\nIf your username is joe, you could run it as such. Otherwise, create a non-sudoer account and use that.\\n\\n```sh\\nsudo chown -R joe:joe /usr/src/app/speakeasy\\n```\\n\\nThat should allow you to run the rest without using `sudo`.\\n\\nNext, clone the Speakeasy source code, change configuration parameters and run it.\\n\\n```sh\\ngit clone https://git.xx.network/elixxir/speakeasy-web /usr/src/app/speakeasy\\ncd /usr/src/app/speakeasy\\n```\\n\\nPick a port to run Speakeasy on, such as 7080, and use it consistently later:\\n\\n```sh\\nsed -i \'s/next start/next start -p 7080/g\' package.json\\nsed -i \'s/const nextConfig = {/const nextConfig ={\\\\\\\\n  productionBrowserSourceMaps: true,/g\' next.config.js\\nrm -rf node_modules && npm install -g npm@9.6.5 && npm install && npx next telemetry disable && npx next build\\nnpm start\\n```\\n\\nCheck if Speakeasy app is up and running by going to http://host:7080. You may need to open OS firewall for that.\\n\\nOn Ubuntu you could use `sudo ufw allow 7080/tcp`. Since that port doesn\'t need to be exposed when Speakeasy is running behind HTTPS proxy, it is advisable to delete the rule after that.\\n\\nYou won\'t be able to do much with http://host:7080 because there\'s no reverse HTTPS proxy in front of Speakeasy. If you attempt to create an identity you will get stuck at `Find your Codename`. The right firewall port to open would be whatever port is used by your HTTPS proxy.\\n\\n:::tip\\nTo be fully functional, Speakeasy Web app must be accessed through an HTTPS proxy.\\n:::\\n\\n## Reverse HTTPS proxy\\n\\nDeploy a reverse HTTPS proxy in front of Speakeasy, so that the external port is forwarded to Speakeasy\'s port (example: `https://host:14443` -> `http://localhost://7080`).\\n\\nThere are too many ways to deploy each reverse proxy and at the same time there are no Speakeasy-specific steps, so the details are an exercise for the reader.\\n\\nFor that you may use Caddy, Traefik, NGINX or other. Find and try the official or community examples for your proxy and Node.js.\\n\\n### Custom port, host or path\\n\\nIn the case Speakeasy is the only proxied application, it is convenient to expose it at `https://host:443`.\\n\\nIn the case the same HTTPS reverse proxy is used for several applications, Speakeasy can be hosted in directory (or, more complicated, at a dedicated virtual host). \\n\\n### TLS certificate\\n\\nIn any and all cases, your reverse HTTPS proxy would need a TLS certificate.\\n\\nIf your reverse proxy integrates with Let\'s Encrypt, you could expose Speakeasy to the Internet rather than use internal or even self-signed TLS certificate.\\n\\nSpeakeasy Web server doesn\'t host any account or chat data. If you expose Speakeasy to the Internet, the main concern is to prevent NodeJS from application server take-over and tampering, so it can be advantageous to run it using a limited local account, and optionally add some form of authentication to your HTTPS proxy.\\n\\nOnce a TLS-enabled proxy is functional, you can create a new codename or import existing, and start using Speakeasy.\\n\\n## Update Speakeasy\\n\\nAs mentioned before, Speakeasy can be simply wiped and re-installed because only serves the application code and does not store any client data.\\n\\nThe official instance at speakeasy.tech usually runs the latest version, so visit that site from time to time, or watch the Speakeasy repository for new releases, or follow xx Network on Twitter."}]}')}}]);