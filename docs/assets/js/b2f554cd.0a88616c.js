"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[6880],{8256:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2024/02/09/xx-network-cli-irc-like-client","metadata":{"permalink":"/blog/2024/02/09/xx-network-cli-irc-like-client","source":"@site/blog/2024-02-09-xx-network-cli-irc-like-client.md","title":"Use xx Network CLI","description":"How to get started with xx Network CLI client","date":"2024-02-09T00:00:00.000Z","formattedDate":"February 9, 2024","tags":[{"label":"xx network","permalink":"/blog/tags/xx-network"}],"readingTime":5.19,"hasTruncateMarker":false,"authors":[{"name":"ArmchairAncap","url":"https://github.com/armchairancap","imageURL":"https://github.com/armchairancap.png","key":"armchairancap"}],"frontMatter":{"slug":"2024/02/09/xx-network-cli-irc-like-client","title":"Use xx Network CLI","authors":["armchairancap"],"tags":["xx network"],"description":"How to get started with xx Network CLI client","keywords":["xx network","chat","cli","text","client","irc"]},"unlisted":false,"nextItem":{"title":"Case for xx Network chat link in security.txt","permalink":"/blog/2023/06/05/xx-network-chat-security-dot-txt"}},"content":"## Introduction \\n\\nxx Network is a privacy-focused, quantum-resistant \\"small messaging\\" network.\\n\\nBy \\"small messaging\\" I mean up to KB-sized messages, although it\'s possible to use larger messages as well. For example, xx Messenger supports small attachments (tens of KB).\\n\\nxx CLI client is a reference client implementation for xx Network that at this time uses the older \\"broadcast module layer\\" approach. \\n\\nSpeakeasy (Haven) or Echoexx use a better approach (channels), but all of them use the xx Network SDK (xxDK). \\n\\nxx CLI client repository has a read-me file that contains almost all the steps required to get started, but this post can still save you some time.\\n\\n## Build\\n\\nAt this time we need `go1.21`, but check the source to verify if this requirement changed.\\n\\nThese steps are for Linux. Check the repository\'s read-me file for other OS.\\n\\n```sh\\ngit clone https://git.xx.network/elixxir/cli-client && cd cli-client/\\ngo mod vendor && go mod tidy\\nGOOS=linux GOARCH=amd64 go build -ldflags \'-w -s\' -o xx-client main.go\\n```\\n\\n## Use\\n\\nLet\'s see how xx CLI \\n\\n### First user\\n\\nSomeone needs to create a channel.\\n\\nThe first step is to do that with `--new`, and give it a name and description. \\n\\nSetup procedure creates 2 files you need to know about: \\n\\n- the first one is the channel definition file by default named $CHANNEL.xxchan (here, `test.xxchan`)\\n- the second is a private RSA key for the creator who is also channel admin. This one is by default named `$CHANNEL-privateKey.pem` (here, `test-privateKey.pem`).\\n\\n```sh\\nexport NICK=\\"my-Name\\"\\n./xx-client broadcast --new -o test.xxchan -n \\"test\\" -d \\"Some desc\\"\\n./xx-client broadcast --load -o test.xxchan -u $NICK\\n./xx-client.linux64 broadcast --load -o test.xxchan -u $NICK --waitTimeout 120s\\n```\\n\\nThe default wait timeout value wasn\'t enough, so I extended it. \\n\\nThe reason is lately some xx Network gateway nodes had difficulties (potentially due to government interference in some countries) which makes it harder to connect. There\'s a log file which you can tail from another terminal to see that. \\n\\n### Second user\\n\\nThe second user needs the channel file, as there\'s no way to communicate channel name without it. Share it through Signal or using some other way that you find secure.\\n\\nThe second user would normally have another nickname (although they\'re really identified by their private key) and needs to only load the channel, not create it. \\n\\nHere we\'ll create the RSA key manually before we start (as we don\'t need to create a channel). This also means you can reuse existing RSA key if you have it.\\n\\n```sh\\nexport NICK=\\"AnotherGuy\\"\\nssh-keygen -t rsa\\n# move your new private key to the default private key file name (for the channel \\"test\\") for easier loading\\nmv test-privateKey.pub test-privateKey.pem\\n./xx-client.linux64 broadcast --load -o test.xxchan -u $NICK --waitTimeout 120s\\n```\\n\\nAnd that is it!\\n\\n![xx Network CLI](/img/xx-network-cli-01.png)\\n\\nThere are minor console-related bugs, and you\'ll need to reconnect (simply CTRL+C and then restart) if you get disconnected. \\n\\n## Other details\\n\\nThere are other details that you can find from online help, or by inspecting the code.\\n\\n```raw\\nAvailable Commands:\\n  broadcast   Create or join broadcast channels.\\n  completion  Generate the autocompletion script for the specified shell\\n  generate    Generates version and dependency information for the binary.\\n  help        Help about any command\\n  version     Print the version and dependency information for the binary.\\n\\nFlags:\\n  -c, --config string          Path to YAML file with custom configuration..\\n  -h, --help                   help for cli-client\\n  -v, --logLevel int           Verbosity level for log printing (2+ = Trace, 1 = Debug, 0 = Info).\\n  -l, --logPath string         File path to save log file to. (default \\"cli-client.log\\")\\n      --ndf string             Path to the network definition JSON file. By default, the prepacked NDF is used.\\n  -p, --password string        Password to the session file.\\n  -s, --session string         Sets the initial storage directory for client session data. (default \\"session\\")\\n      --waitTimeout duration   Duration to wait for messages to arrive. (default 15s)\\n```\\n\\n## Use cases\\n\\nxx CLI client cannot communicate with Speakeasy or Echoexx - as noted earlier, these use different module of xxDK.\\n\\nBut it can be useful on its own. Some examples:\\n\\n- secure & private DM or group chat client for headless and remote systems without X Window System - like IRC, but with fewer features and more secure and private\\n- share IT-related secrets such as passwords and .env files with yourself or colleagues: load channel file, start the client, send or receive secrets and then delete the entire directory on the temporary client \\n\\nA bit more on this last use case. You should use encrypted boot volume or change the secret if it\'s critical, as it\'s not technically possible to shred/wipe a single file on an unencrypted flash disk. For this use case you need to be able to get out to the Internet which is often, but not always (e.g. LAN) possible.\\n\\nThere are CLI scripts for \\"secure\\" password sharing, but they rely on personal infrastructure (some server & DB which may or may not be secure), or 3rd party infrastructure which may or may not be more secure than xx Network (and often doesn\'t have open source code on both the server and client).\\n\\nThere\'s also Tailscale, but again - to be equally secure, you still have to encrypt your data before sending it and probably at-rest as well (considering that the client is \\"online\\" at all times). If you can make use of Tailscale for other things that\'s great, but if you need something quick - like when setting up some VMs in the cloud - xx CLI client could be good enough.\\n\\nxx CLI client could also be modified for other purposes, for example as a low censorship-free broadcast tool without the need for Tor (which may be blocked anyway). xx Network can also be blocked, but most locations and corporate firewalls haven\'t done it yet.\\n\\nAs of now, xx Network gateways retain client side-encrypted data for 21 days, after which it expires and may be found only on the clients (if they logged in and downloaded it before it expired). So, keep in mind that you may shred the local session file, channel file and private key to disable access locally, while chat data stored on xx Network gateways expires in weeks. What you cannot delete is messages other clients received on their side."},{"id":"2023/06/05/xx-network-chat-security-dot-txt","metadata":{"permalink":"/blog/2023/06/05/xx-network-chat-security-dot-txt","source":"@site/blog/2023-06-05-security-text-file.md","title":"Case for xx Network chat link in security.txt","description":"Case for xx Network Haven chat link in security.txt","date":"2023-06-05T00:00:00.000Z","formattedDate":"June 5, 2023","tags":[{"label":"xx network","permalink":"/blog/tags/xx-network"},{"label":"haven","permalink":"/blog/tags/haven"}],"readingTime":2.58,"hasTruncateMarker":false,"authors":[{"name":"ArmchairAncap","url":"https://github.com/armchairancap","imageURL":"https://github.com/armchairancap.png","key":"armchairancap"}],"frontMatter":{"slug":"2023/06/05/xx-network-chat-security-dot-txt","title":"Case for xx Network chat link in security.txt","authors":["armchairancap"],"tags":["xx network","haven"],"description":"Case for xx Network Haven chat link in security.txt","keywords":["xx network","haven","security.txt","chat","contact"]},"unlisted":false,"prevItem":{"title":"Use xx Network CLI","permalink":"/blog/2024/02/09/xx-network-cli-irc-like-client"},"nextItem":{"title":"Sign and verify messages using xx Network wallet","permalink":"/blog/2023/05/08/xx-network-wallet-sign-verify"}},"content":"## security.txt\\n\\nThe Dutch Digital Trust Center mandates that all government sites must have a security files under the `.well-known` directory located at the root of Web site.\\n\\nUse cases:\\n\\n- Go-to place to get information on how to report vulnerabilities affecting the site or organization\\n- Improve the speed of getting in touch\\n\\n## Example\\n\\nhttps://www.ncsc.nl/.well-known/security.txt captured on Jun 1, 2023.\\n\\n```raw\\n-----BEGIN PGP SIGNED MESSAGE-----\\nHash: SHA512\\n\\n# Domeinen van de Rijksoverheid kunnen met een 302 redirect verwijzen naar\\n# het centrale bestand op https://www.ncsc.nl/.well-known/security.txt\\n# omdat het NCSC het centrale meldpunt is voor kwetsbaarheden en incidenten\\n# voor de Rijksoverheid.\\n#\\n# Dutch central government domains can redirect to the central file located\\n# at https://www.ncsc.nl/.well-known/security.txt with a 302 redirect,\\n# because NCSC-NL is the central point of contact for vulnerabilities and\\n# incidents for the Dutch central government.\\n\\nExpires: 2024-01-31T22:59:00.000Z\\nCanonical: https://www.ncsc.nl/.well-known/security.txt\\n\\nPolicy: https://www.ncsc.nl/contact/kwetsbaarheid-melden\\nPolicy: https://english.ncsc.nl/contact/reporting-a-vulnerability-cvd\\n\\nContact: https://www.ncsc.nl/contact/kwetsbaarheid-melden\\nContact: https://english.ncsc.nl/contact/reporting-a-vulnerability-cvd\\nContact: mailto:security@ncsc.nl\\nEncryption: https://www.ncsc.nl/contact/pgp-key\\nPreferred-Languages: nl, en\\n\\nAcknowledgments: https://www.ncsc.nl/wall-of-fame\\nHiring: https://www.werkenvoornederland.nl\\n\\n-----BEGIN PGP SIGNATURE-----\\nVersion: Encryption Desktop 10.4.2 (Build 1298)\\nCharset: utf-8\\n\\nwsDVAwUBY+9c0P4Vd0fJc7lbAQpUmQwAwZ1vWyI1VKBChsciufRcvxy5zzMZMx6v\\nYjD5CXuDV4GL+tRl7wClnQO023e3ZChTH69y7O3veS+5/zNVUvpyqJfS8pNzG0pA\\nB4vea3fQ41t5UpCVYvPopIFiT1oeQJA9w4NqBD2+2jW5lS5L8k9xz192gWJvhxq8\\nmTukJXYDiJLzxKbUMHEG2GNaMeoRj5Pvgr8buzQELP0VZHfzF05Hr6NOoWvS6SRX\\nKGW6rgg6fEUPcMTjBqn6gL/w82FXwrh93AmYkP/sBWP4It3NpbiNuazc5iynhhih\\n+ZlfzsFV6agF4MZR0IQZ6X4jsCxKFrPIWW51/7W+PIDkqy6za/bDjDeiinid0HOC\\n2rro6N9FXSyxHz9nteMppd+YMTCt+Z67HONsssR+7ojxORGOs0rTcjUucaVikFJQ\\nwAls9p+vuIzFRViQaXe3Nndspr1cCIu4z3ZfdkcWREQP7acOjNgbmeQOlH4jnYWq\\nlNVMWzOncidAWM0nXcuYTjZagRAagthF\\n=yC4A\\n-----END PGP SIGNATURE-----\\n```\\n\\n## Use case for Haven\\n\\n- security.txt is PGP-signed to confirm that it was signed by the key owner and that\'s fine. But in reality most people hate to use it to compose emails or messages\\n- it is time-consuming for the recipient to download every sender\'s key which also delays reading encrypted messages\\n- Haven gives the reporter anonymity, both parties enjoy encryption and privacy, and can interact in real time (and still move to email if they so choose)\\n- Haven uses quantum-resistant encryption (I haven\'t checked, but it should be superior to PGP)\\n\\nHaven public chat link can be added to security.txt. Example: \\n\\n```raw\\nChat: https://.............. (security vulnerabilities only)\\nContact: email - mailto:.........; chat - send DM to `aCertainTestifier`\\nEncryption: https://www..../contact/pgp-key\\n```\\n\\nBecause public chat could have several permanently present strangers in it, direct messages (DM) should be sent to contact person.\\n\\nWhat are the weaknesses of using Haven here? \\n\\nThe way I see it, the biggest is that xx Network keeps messages for 21 days and then they disappear. To prevent the situation where nothing happens for three weeks and messages disappear, the reporting person should move on to email if no response is received within hours.\\n\\nWith time, spam may become a problem for Haven. But it is already a problem for email now, so Haven is not worse.\\n\\n## Conclusion\\n\\nHaven uses xx Network to store encrypted messages and Haven users can connect to xx Network from any (trusted) application server - whether it\'s container on own desktop client, the official Haven instance, etc. \\n\\nCompared to an email or Web service as means of communication, Haven is less likely to be affected by a vulnerability at the same time as your corporate email or Web service, so it is a cost-free, \\"out-of-band\\" solution that\'s more resistant to unplanned concurrent downtime or DDoS.\\n\\nHaven gives you zero maintenance, quantum-resistant encryption, superior privacy (compared to email and PGP), and far more convenience."},{"id":"2023/05/08/xx-network-wallet-sign-verify","metadata":{"permalink":"/blog/2023/05/08/xx-network-wallet-sign-verify","source":"@site/blog/2023-05-08-xx-network-wallet-sign-verify/index.md","title":"Sign and verify messages using xx Network wallet","description":"Use the official xx Network Web wallet to sign and verify messages","date":"2023-05-08T00:00:00.000Z","formattedDate":"May 8, 2023","tags":[{"label":"xx network","permalink":"/blog/tags/xx-network"},{"label":"sign","permalink":"/blog/tags/sign"},{"label":"verify","permalink":"/blog/tags/verify"},{"label":"wallet","permalink":"/blog/tags/wallet"}],"readingTime":1.085,"hasTruncateMarker":false,"authors":[{"name":"ArmchairAncap","url":"https://github.com/armchairancap","imageURL":"https://github.com/armchairancap.png","key":"armchairancap"}],"frontMatter":{"slug":"2023/05/08/xx-network-wallet-sign-verify","title":"Sign and verify messages using xx Network wallet","authors":["armchairancap"],"tags":["xx network","sign","verify","wallet"],"description":"Use the official xx Network Web wallet to sign and verify messages","keywords":["xx network","cryptographically","sign","message","validate","signature"]},"unlisted":false,"prevItem":{"title":"Case for xx Network chat link in security.txt","permalink":"/blog/2023/06/05/xx-network-chat-security-dot-txt"},"nextItem":{"title":"Install xx Network Haven","permalink":"/blog/2023/04/30/install-xx-network-haven"}},"content":"## Sign\\n\\nGo to `Developer` > `Sign and Verify` > `Sign message`\\n\\nPick an address (\\"wallet\\") to use and enter a message or other data you wish to sign with your wallet key to `sign the following data`. \\n\\nThis may be any text such as your Speakeasy codename, email address, etc.\\n\\n![Sign message from xx Network wallet](xx-network-wallet-sign.png)\\n\\nClick on the copy icon to copy the signature (`signature of supplied data`) to clipboard. \\n\\n## Verify\\n\\nTo verify, go to `Verify signature` rather than `Sign and Verify`.\\n\\n`Verify using address` means the signer\'s wallet address (so, usually not your own).\\n\\nYou need to provide the same wallet and message that you got, and if everything checks out, the icon next to `the supplied signature` will become a green check mark.\\n\\nBad signatures will fail to verify.\\n\\n![Bad signature fails to verify](xx-network-wallet-verify-bad-hash.png)\\n\\nBad data will also fail to verify against a correct signature.\\n\\n![Correct signature and content verify](xx-network-wallet-verify-incomplete.png)\\n\\nTo be successful, verification requires the same wallet, message data and signature that were used to generate the signature.\\n\\n![Correct verification](xx-network-wallet-verify.png)\\n\\n## Non-deterministic signatures\\n\\nxx Network uses Schnorrkel (sr25519) which doesn\'t create deterministic signatures.\\n\\nFor example, I created two additional signatures. Each time I got a valid, but different, signature to what I got in the first attempt.\\n\\n- `0x2a40ed0.......3187`\\n- `0xdec0ed9.......b78f`"},{"id":"2023/04/30/install-xx-network-haven","metadata":{"permalink":"/blog/2023/04/30/install-xx-network-haven","source":"@site/blog/2023-04-30-install-haven-app.md","title":"Install xx Network Haven","description":"Install your own instance of xx Network Haven application: bare metal, VM, or container","date":"2023-04-30T00:00:00.000Z","formattedDate":"April 30, 2023","tags":[{"label":"xx network","permalink":"/blog/tags/xx-network"},{"label":"haven","permalink":"/blog/tags/haven"},{"label":"speakeasy","permalink":"/blog/tags/speakeasy"}],"readingTime":5.73,"hasTruncateMarker":false,"authors":[{"name":"ArmchairAncap","url":"https://github.com/armchairancap","imageURL":"https://github.com/armchairancap.png","key":"armchairancap"}],"frontMatter":{"slug":"2023/04/30/install-xx-network-haven","title":"Install xx Network Haven","authors":["armchairancap"],"tags":["xx network","haven","speakeasy"],"description":"Install your own instance of xx Network Haven application: bare metal, VM, or container","keywords":["xx network","speakeasy","docker","container","server","instance","haven"]},"unlisted":false,"prevItem":{"title":"Sign and verify messages using xx Network wallet","permalink":"/blog/2023/05/08/xx-network-wallet-sign-verify"}},"content":":::info\\nFor an updated how-to, see [xx Haven Container](https://github.com/armchairancap/xx-haven-container/blob/master/README.md).\\n\\nThe article below is still usable, but the repository is updated, while the article below is kept for archive purposes.\\n:::\\n\\n## Containerized or non-containerized Haven\\n\\nIt\'s probably easier to run Haven in a container. If you have Docker or Postman and want to run Haven in a container, try [this](https://github.com/armchairancap/xx-haven-container).\\n\\nIn the case you want to self-host a non-containerized Haven, read on!\\n\\n## Home or cloud\\n\\nYou may install Speakeasy at home or in the cloud.\\n\\nHaven Web server doesn\'t hold any data but its OS and Node.js logs may store client IPs, that\'s all. \\n\\nWith that in mind, some high-level considerations would be:\\n\\n- We don\'t want our Speakeasy Web app or underlying OS to get compromised\\n- If your Haven is not open to public, or is accessed \\"by invite\\" (maybe with basic authentication or VPN, for your family and friends), you may run it at home\\n- If your Haven is located in the cloud, that\'s acceptable as long as you can protect it from getting compromised so that application code doesn\'t get replaced, OS compromised, or visitors\' IPs leaked.\\n\\nRegarding this last point, if you feel comfortable hosting your Haven server in a small (1G RAM) VM, it is better to open it to public to have the Web server accessed by a variety of addresses. As long as you know how to protect the VM.\\n\\n:::tip\\nEach participant in a conversation can use a different Speakeasy Web server, so many deployment combinations are possible.\\n:::\\n\\n## Software and hardware requirements\\n\\nUse a Linux OS or VM, x86_64 or ARM64 architecture. Haven\'s hardware requirements are minimal:\\n\\n- 1 vCPU\\n- 1 GB RAM\\n- 3 GB disk\\n\\nAll Haven app/web server does is serve the app to the client(s) and that\'s one-time download from each client (around 100 MB download).\\n\\nOne vCPU is enough and won\'t be significantly utilized except when Node.js builds the application or when container image is updated - that takes a long time (15 minutes), but has to be done only when Haven code is updated or rebuilt.\\n\\n## Install Node.js\\n\\nOn generic Linux OS, follow installation instructions for [Node.js](https://nodejs.org/en/download/) version 16.14 or above.\\n\\nThis post was prototyped on DietPi Linux, which currently uses Node.js 20. On DietPi, you may install Node.js as follows:\\n\\n```sh\\nsudo dietpi-software install 9\\n```\\n\\nOr, run `dietpi-software`, select `Search software`, search for `Node.js`, and proceed with installation.\\n\\n## Deploy and run Speakeasy\\n\\nWe need to pick a directory for the application, clone the source to that directory, change some parameters and install.\\n\\n```sh\\nsudo mkdir -p /usr/src/app/speakeasy/.next\\n```\\n\\nIf your username is joe, you could run it as such. Otherwise, create a non-sudoer account and use that.\\n\\n```sh\\nsudo chown -R joe:joe /usr/src/app/speakeasy\\n```\\n\\nThat should allow you to run the rest without using `sudo`.\\n\\nNext, clone the Haven source code, change configuration parameters and run it.\\n\\n```sh\\ngit clone https://git.xx.network/elixxir/speakeasy-web /usr/src/app/speakeasy\\ncd /usr/src/app/speakeasy\\n```\\n\\n### Pick Haven Web application port \\n\\nMost Node.js apps traditionally use port 3000, but you\'ll need something else if you have another app using that port.\\n\\nPick a port for Haven, such as 7080, and use it consistently later:\\n\\n```sh\\nsed -i \'s/next start/next start -p 7080/g\' package.json\\nsed -i \'s/const nextConfig = {/const nextConfig ={\\\\\\\\n  productionBrowserSourceMaps: true,/g\' next.config.js\\nrm -rf node_modules && npm install -g npm@9.6.5 && npm install && npx next telemetry disable && npx next build\\n```\\n\\nIf that went well, you can try to start it from the same directory.\\n\\n```sh\\nnpm start\\n```\\n\\nCheck if Haven is up and running by going to `http://${SERVER_IP}:7080`. You may need to open OS firewall for that. Example for Ubuntu:\\n\\n```sh\\nsudo ufw allow 7080/tcp\\n```\\n\\nSince that port doesn\'t need to be exposed when Speakeasy is running behind HTTPS proxy, it is advisable to delete the rule after testing the application.\\n\\n```sh\\nsudo ufw status numbered\\n\\n```\\n\\nYou won\'t be able to do much with Speakeasy running at `http://host:7080` because there\'s no reverse HTTPS proxy in front of Speakeasy. If you attempt to create an identity you will get stuck at the `Find your Codename` step. \\n\\nAssuming the rules for 7080/tcp are number 7 and 8, and your HTTPS reverse proxy will run on the same host, you can delete the rules: `sudo ufw delete 7 ; sudo ufw delete 8`.\\n\\nThe right firewall port to open on the *host* would be whatever port is used by your HTTPS reverse proxy (e.g. 14443).\\n\\n:::tip\\nTo be fully functional, Haven must be accessed through an HTTPS reverse proxy.\\n:::\\n\\n## Reverse HTTPS proxy\\n\\nDeploy reverse HTTPS proxy in front of Speakeasy so that external port is forwarded to Speakeasy\'s application port (example: `https://fqdn:14443` -> `http://localhost:7080`). To use 14443/tcp, open that firewall port on external network.\\n\\n```sh\\nsudo ufw allow 14443/tcp\\n```\\n\\nNow configure HTTPS reverse proxy to forward incoming 14443/tcp to 7080/tcp, and if you wish make HTTPS reverse proxy and Speakeasy Web app start (`npm start`) automatically.\\n\\nFor that you may use Caddy, Traefik, NGINX or other. \\n\\nThere are many ways to deploy each reverse proxy and at the same time there are no Speakeasy-specific steps here, so the details are an exercise for the reader. Find and try the official or community examples for your proxy and Node.js.\\n\\n### Custom port, host or path\\n\\nIn the case Speakeasy is the only application proxied by HTTPS reverse proxy, it is most convenient to expose it at `https://host:443`.\\n\\nIn the case the same HTTPS reverse proxy is used for several applications, Speakeasy can be hosted in a directory (or, more complicated, at a dedicated virtual host name or FQDN).\\n\\n### TLS certificate\\n\\nIn any and all cases, your reverse HTTPS proxy would need a TLS certificate.\\n\\nIf your reverse proxy integrates with Let\'s Encrypt, you could expose reverse proxy (and indirectly Speakeasy) to the Internet rather than use internal or even self-signed TLS certificate - it\'s more secure, especially if you additionally protect HTTPS proxy with firewall rules or basic (or other) authentication.\\n\\nHaven Web server doesn\'t host any account or chat data. If you expose Speakeasy to the Internet, the main concern is to prevent NodeJS from application server take-over and tampering, so it can be advantageous to run it using a limited local account, and optionally add some form of authentication to your HTTPS proxy.\\n\\nOnce a TLS-enabled proxy is functional, you can access Haven, create a new codename or import existing, and start using Haven.\\n\\n## Update Haven\\n\\nAs mentioned before, Haven can be simply wiped and re-installed because only serves the application code and does not store any client data.\\n\\nThe official instance at speakeasy.tech usually runs the latest version, so visit that site from time to time, or watch the Speakeasy repository for new releases, or follow xx Network on Twitter."}]}')}}]);