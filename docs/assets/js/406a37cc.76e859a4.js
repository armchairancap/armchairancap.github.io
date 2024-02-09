"use strict";(self.webpackChunkaa=self.webpackChunkaa||[]).push([[7439],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const s={sidebar_position:7},i="General tips",o={unversionedId:"speakeasy-user-guide/misc",id:"speakeasy-user-guide/misc",title:"General tips",description:"This section contains general tips for users.",source:"@site/docs/speakeasy-user-guide/misc.md",sourceDirName:"speakeasy-user-guide",slug:"/speakeasy-user-guide/misc",permalink:"/docs/speakeasy-user-guide/misc",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Disconnect from xx Network",permalink:"/docs/speakeasy-user-guide/disconnect"},next:{title:"Next steps",permalink:"/docs/speakeasy-user-guide/congratulations"}},l={},c=[{value:"Messages not downloading or refreshing",id:"messages-not-downloading-or-refreshing",level:2},{value:"xx Network stores messages for limited time",id:"xx-network-stores-messages-for-limited-time",level:2},{value:"Safety and sharing of Internet links in Haven chat",id:"safety-and-sharing-of-internet-links-in-haven-chat",level:2},{value:"Customizing Haven&#39;s color scheme (CSS)",id:"customizing-havens-color-scheme-css",level:2},{value:"Client-side logging and debugging",id:"client-side-logging-and-debugging",level:2},{value:"Prove wallet or asset ownership in Haven",id:"prove-wallet-or-asset-ownership-in-haven",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-tips"},"General tips"),(0,r.kt)("p",null,"This section contains general tips for users."),(0,r.kt)("h2",{id:"messages-not-downloading-or-refreshing"},"Messages not downloading or refreshing"),(0,r.kt)("p",null,"Find and use Logout to completely clear browser cache and all Haven settings."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Backup your identity, invite links to channels and admin keys for channels you administer. All these will be wiped on Logout.")),(0,r.kt)("h2",{id:"xx-network-stores-messages-for-limited-time"},"xx Network stores messages for limited time"),(0,r.kt)("p",null,"xx Network keeps messages for 21 days."),(0,r.kt)("p",null,"This is a xx Network-wide setting which instructs xx Network gateways to delete stored messages after 21 days. It exists to limit the use of storage capacity."),(0,r.kt)("p",null,"Currently there's no client-side settings that let one set client-side retention for Haven, but:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Messages can be deleted by the sender or administrator which propagates to (online) clients in the channel"),(0,r.kt)("li",{parentName:"ul"},"If everyone leaves a channel and no invite links or admin keys are preserved, all channel content can be considered lost (probably DM between channel users, too - can be checked experimentally)")),(0,r.kt)("p",null,"Haven client caches messages locally in encrypted browser cache, and re-syncs with xx Network databases when it reconnects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Messages that were deleted by admins and users will be deleted in cache upon resync"),(0,r.kt)("li",{parentName:"ul"},"Other messages may be retained in Haven's encrypted browser cache beyond 21 days (longer than xx Network databases keep them)")),(0,r.kt)("h2",{id:"safety-and-sharing-of-internet-links-in-haven-chat"},"Safety and sharing of Internet links in Haven chat"),(0,r.kt)("p",null,"If you don't trust chat participants, you should not click on links shared through Haven."),(0,r.kt)("p",null,"Among regular browsers, Brave Browser has a convenient feature that lets the user right-click a link and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Open link in private window with Tor"),". Here's how that menu looks like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open link in private window with Tor",src:n(321).Z,width:"274",height:"101"})),(0,r.kt)("p",null,"That doesn't give them the ability to avoid malicious sites, but at least hides their IP address the same way Tor would (or wouldn't)."),(0,r.kt)("p",null,"Users of other browsers could copy links shared in Haven and paste them into a dedicated Tor Browser instance, although that is inconvenient. "),(0,r.kt)("p",null,"Because this feature makes it very easy to eliminate one of top privacy risks in casual Haven use, Brave Browser should be the first choice for Haven - especially if you don't normally use it, as you wouldn't need any add-ons in it either."),(0,r.kt)("h2",{id:"customizing-havens-color-scheme-css"},"Customizing Haven's color scheme (CSS)"),(0,r.kt)("p",null,"Users wishing to make simple changes to Haven's CSS color sheme can find tips and samples ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/armchairancap/8e0a08f96d3298b4e6fc02ca8d45b6ec"},"here"),"."),(0,r.kt)("h2",{id:"client-side-logging-and-debugging"},"Client-side logging and debugging"),(0,r.kt)("p",null,"Generic advice for Web app debugging is to try without add-ons and in Private/Incognito mode. Don't do that with Haven. You should try without Private mode and with privacy features disabled for the site."),(0,r.kt)("p",null,"Helpful information may include your OS, browser type, browser version and logs from browser's debug tools."),(0,r.kt)("p",null,"Good places to get help are xx Network Discord (find an ",(0,r.kt)("a",{parentName:"p",href:"https://xx.network/welcome/"},"invite here"),", join, and go to ",(0,r.kt)("inlineCode",{parentName:"p"},"#speakeasy"),") and ",(0,r.kt)("a",{parentName:"p",href:"https://forum.xx.network"},"xx Network Forum"),"."),(0,r.kt)("p",null,"Detailed logs may be exported from application settings in the case developers ask for it. Because they may contain private information it's better to not share them in public without checking."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Export logs",src:n(5960).Z,width:"607",height:"304"})),(0,r.kt)("p",null,"Browser debugging can be done in (Web) Developer Tools (usually in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," tab)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Developer Tools",src:n(8150).Z,width:"779",height:"310"})),(0,r.kt)("h2",{id:"prove-wallet-or-asset-ownership-in-haven"},"Prove wallet or asset ownership in Haven"),(0,r.kt)("p",null,"You may send a cryptographically signed message in Haven. The signature can prove ownership of a wallet or an asset. See ",(0,r.kt)("a",{parentName:"p",href:"/blog/2023/05/08/xx-network-wallet-sign-verify"},"this")," post on how to do that in xx Network wallet."),(0,r.kt)("p",null,"The channel owner may use that to check if a Haven codename has control over a wallet with specified balance of some token to be unmuted or (out-of-band) invited in order to join a channel."),(0,r.kt)("p",null,"Workflow example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Administrator creates a a public "customer support" channel for "xx coin whales" (condition: wallets with at least $10\'000 equivalent in xx coins)'),(0,r.kt)("li",{parentName:"ul"},"Interested parties access this channel to DM with Administrator. They submit signed proof of wallet ownership"),(0,r.kt)("li",{parentName:"ul"},'Upon ensuring the codename has access to a wallet that meets minimum conditions, the admin shares an invite link for a private "xx whale" channel ')),(0,r.kt)("p",null,"There's some opportunity to get around these rules by moving coins around and whatnot, but wallets can be periodically rechecked and it can be automated."))}p.isMDXComponent=!0},321:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAABlCAIAAAAOBfu5AAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAEspJREFUeNrtnWlcU1caxk+IQRDDFgKIgkjEECUgopWiMyrWpaIO/qxrZ5TFpZYAolgFwbqzqS1uVatDW9vaZVqWasGFttrYgiD7joAQCCF7WANmmQ/RlAIJCSpCfP+fyM177vuec8+Tc3P0PsHMnb+Qx2YjAAA0g2BpqQejAADaArIBAJANAIBsAABkAwAgGwAA2QAAALIBAJCNljhOdsTj8ZpEUigUE1PTkdhHPB5vYGAI8xhk88L45OIFW1tbhJChoeG3333vNmOGqsiTJ0/Z29v3+9aAbV8eWCwWi8Wqj/n2u2/JTmSYx6+FbCgUSnRMzPUbN9LS0z9OSJg1a9ZLTdfZ2Xn9+k8NDMYQt30ecDhcWnq6rZ3dAHFyDEzi10I27u7uCafP8Hm8iH3hu0JDy8vLo2NiFi1a9FKTXv3iCw6HM/RtBw0Gg8HhcDBBhyejhj5lyM6QjDt34uPjFS/LysqkEkkgjXb37t3u7u7omJgpjlPG4scymU2pqclJPyYpwohEYlBQsNsMN5FI9Plnn92+fRshFBcf7+AwydjYpLWl9cuvriqD+/Lzz2nhEeEF+fnqm/j5+c9fMJ8WGNja2qpt237f7Vt2eEQEBoM5fuwYQmjr1q329vb79+9HCG323ew8jbpnT1jPcyYmJiKEHj7MCdsdFkijLV26FIvVKykujYuLVSp5+/bt48dPQAjduP7TlStXpFIpTGtdk82E8RNsbe1iYmJ6Hrx+/cbGd9+dOm1afl6eq4trQsLH+fl5FMrUXbt3S59IU39KRQgdPHiIxWry3bx5KoUS9eHBsrLyhgaG8zTnk6dOFuTnu7i6RkZGFhUWPXr0SH0BaposX7FimffbNFpQT81o2FbVu33Lzs3N9fX1VTRxcXGdYDtB8TeVSs3Jye2VcdvWbXV1j2UyGUIoNSX1m2vXcPr6UVFR/gEBsc/GsKCg4NjRo0RLy/DwiPb29q+++gqmta7dpJmamSKEuH+/5+Fw2AghUxMTxUtWc3NzM/u33377+utrPqt8FN+FKFMpp8+c4fF4v9PplRUVHh6zFcFcLpfL5f6SkVFVVUl1oWpSQ79N5s+f5+/nvydsTzOLpW1bVe/2W3b2g2wrKysbGxtDQ8MJthPEnZ2THBz09fWdnanZD7J6nfCJ5El3d7dEIkEIMRj1PB6P1dSUlpZGIjkoYzIzMxsbG/Pz8r795trSt5fCnNbB1UYoECKELIhENvsv5VgQiQghoUjUK/jx41rrceMQQhYEAgaD+e67757d9+sVFhb0CuYLhMbGxloV07PJggVebA6bz+cNoq2qd/stm8/nlZeXvzF7No/DycvPFwkFb8yc9ZhIFAiF1dXVar7q+Pn7L1q82ARvLO4Si4TCvjHMpiYCwQLmtA7KpqGxofbxY+9l3qUlpcqD3t7efB6/rLS0V7C1tTWPx0UINbM5Uql0lY9PR0eHylPLZAhpua3Uo0l0dPTaNWuio2N37Qrt6urSqq2qd1WVfe/uvblz5rI57KzMTJFItH79+nHjbX6/e69njEQikclk+jh9xcu5c+asXLkyOIhWX8/wXr78ndWr++acaDdR/VIJjOCdtBNxcYsWL9kZGjpt2jSyE3nr1q0bNmz46KOTysnqMfuNceNsXF1c161ff+vmLYRQVVVlTW3Nng8+sJ80ycLCwtnZWZNE7e3tjo5TMBiNtCQWiyMjIw2NxgQFBb2onqoq+5df7ri4unh4ePz5x/2HOTmTJk1asMAr45c7f9edjNnEnO8139KSSCaT9bBYuVyup4cdPXp0ryxWREsCgTB37pyN725MTk6BOa2bO2mlpaU7dwb7+vrFn4jHYPSqqqr2R0RkZf11W+863W2Z94rubvGdOxnXrl1DCMnl8oh94YE02qmTpwwMDRoaGwJ37HjyRKI+0dWrV/0DAh7m5DQ0NmhSWGdn5+FDhy5duvQ7nZ6Vmfn8PVVVNpvNyc3NlctkLS2tCCE6ne5Edqoor+jV/OzpMyEhIat8VpWVlu7Zs8fdfWbC6dNGRkZtbW25eXmKmKLioh2B7xsZGTU3s774/POUlGSY00MAZrh5CSh3e+HaAMMT8BIAgBFyk6aeZcvehqsCwJYAAIBsAABkA0MAACAbAADZAADIBgBANgAAsgEAAGQDACAb7XgdDJ80YdSoUaZmZjDXQTYaMdINn9SgVVW0oKCtW7bAXH+Rn0SvJCuFQtm0eTOVSsVisRUVFV99+WV2dvbLSzcSDZ9eYFUaPnEEDOvVBgyfXnmPgJG32oDhkyaGTwOGqa/KysoyLOwDF1cXHpcrlUkLCwoVpzUzMwsKDnZ3d29va/vp+vVvrl2Ty+VaeVABCAyfhq3hk+a+UH3zVldXHz12nMlkbt0SYDhmTEjITmXwocOH29vaaIE0C6JFRES4WNyZ9GOSVh5UAALDp2Fr+KSVL1SvvJMnO5JIpFMnT9bXMyrKK6qqqhRhkxwcqFRqfHw8g1Gfl5v79ddfr1j5L21zAQgMn4at4dPgfKEUeYmWRLG4U9RnPK2trTs7Ovl8vuJlY0OjtZXVoHOBbIYOMHxCmhk+aR7WT14Wy9BwjIWFBZfL7flmM4tlOMbQ3Jyg+HQYP2E8q7l58LngJm0oAcMnTQyfNA/rS3V1dXFRcXh4OIlEIhAI+GerYk1NTUlxSVjYbltbO7cZMzZu3Hg9NfU5c8FqM0SA4ZOGhk8ahvVL1IGoHe+9FxcXbzTWSCAQ/O/77xXHDxyIogUHnz13rqO9LSkpKSkp6flzvYaA4RMAaAcYPgHACLlJUw8YPgGwJQAAIBsAAEA2AACyAQCQDQCAbAAAZAMAIBsAAEA2AACy0RowfHoewCbqNZXNMDR8GtzZsFgsFosd4uxgEzXsZEOhUKJjYq7fuJGWnv5xQsKsWbNearrhY/g0iLPhcLi09HRbO7shzg42UcNLNq+54ZO2Z8NgMDgcbjiMA/DXHezQp9RVwydVlR/48EMq1dnExLQgv0Bp1OTt7S2Xy6OPH0cIGRsbJ6ekbN60mcGoD6TRli5disXqlRSXxsXFKqd4YmIiQujhw5yw3WH9DoUCsInSTdnosOGTqso9Znt8/PFH2dnZow0MlMH36fSg4CDl8ltfX89g1COEUlNSv7l2DaevHxUV5R8QEPtsoLZt3VZX91gmk6kaCkUY2ETp5k2abhs+9a1cQTObLRAIWE1NyiNZWQ/GjsWTyWSEkKenJ53+u+I4g1HP4/FYTU1paWkkkoMy/onkSXd3t0QiUTMUCGyidHW1eU0Mn5SVq0Is7nyYkzNv3ryampo3PT13796l+Brj5++/aPFiE7yxuEssEgr7NlQ/FGATpZuyeU0Mn5SVq+HmzZs73n+/orKSy+UqzC7mzpmzcuXK4CBafT3De/nyd1avRghJJBKZTKaP03+2cA0wFGATpZs7aTps+NS3cjX88ccf+vq4wMDAGzeuP70YWKxcLtfTw44ePbrHlJYxm5jzveZbWhLJZPKAQwE2Ubq5k6bDhk99K1eDRCJJTU1dt259elq64gidTnd3n5lw+rSRkVFbW1tuXp7i+NnTZ0JCQlb5rCorLd21a5f6oQCbqCEADJ+gckA7wPAJAHRitQEAWG0AQAcB2QAAyAYAXj6jEEKWlkQYCADQECmsNgAAN2kAALIBAJANAIBsAABko3PY208yMjLSJHKy42S8ls/q6DxYLNb42YODrwRjY7xBj+dhQTZDxPGYGJvxNgghAwOD859cmKb6cYOoqA8V1lB9GbCtVgzubFisHharN8TZff38N2zY8LKvUc+SenXzzNnzDiTS8Jxar+ZHCCc7Tl69eo2TkxMWi62urk5O+rGgoODlpROLxRl3brOamEPc9oWcDYfDJX72eXj4XkY9YyizD43fk7Ikrbp5PCaG5NBbUSHBQSy1D7SPbNlQXaj79kXcu3c3NiZGIn3i4fHm3vCIT86f+/3eS3wq8IcffnglbZ//bBgMeoGGTy+2Ly+wJH19nObdjImOxo3CIoROfZTw3yuXi4uLEEICgVCXVxt//y10Ov3ihQuKl4+qHkml0k2bfbMy/+zufrJ3X7iDg8MYIyN2c/PtWzfT058+wkUgmPv6BkyjOre2tvzv++8VGovYH2lnZzt2LL69vT3pxx+UwX35/IursbExpSUl6pusXbvOw/PNqP3729vbtW2rqvKdO0PJTmQ83ristOzYsSOKs3l5ecnl8nNnzyKE8Hj8p5ev7ArdyWQyN/v6zpu/AKuHqayounDhHI/39An+EydOIYSKigqPHjnS71AoCKTRMBjM2TNnEEIbNm60nWAbFxeLEHpnzRryFCdldlV9sbCw2L59h9NUipDPl8qkZWVlitOamJj6+fk5U6mdHR13MjJSU5LlcvmAubQq6VFVZa9uIoR2vLfD1Myso6Oj12i39DA8aG1rU45Sv3X2vQQjTzbW1uNsbGzOnz/X82DGnQwfn1WOjuSSkuKpU6f+98rlkpKSyY6O27Ztl0plt2/fQgiFhu5mc9i7Q3c6TnYMCQ19VPWoqYlJJpMvXbpYVlpKoUwNCg4uLy9//Pix+gLUNFn41lsLvBYcOBDVUzMatkUIqarcbcaMK5c/LSgo1B+trwzOyc729fNT/O1MpTKZjUwmEyF0+9at1JSUUThcSMjOtes3fHLu6UDt27u3sZEhlcpUDYUirLi4+J01axV/U5ymjrN5agPi5ORUWFikvi91dXV79u5tZjXv+yBstIFhQECAMnhX2O6O9vYDUZFm5uY0Gq1L3Jmenq5hLs1L6tVNhNBPqak5D3OmTCHvDA3V5OL2W6eqSzCStgRMTIwRQnze3wxiFG4VeOOnNuccLpfL5Wb++WdycvKSJUsU34UmOzomJiYKBIIH2Q9qqqvdZrgpggUCAZ/Pv3+fXltb6+TkpEkN/Tbx8PBYt3bdsWNHOWyOtm2V9K1cAZfHE4mEnB7PNeXl5RsZjSWRSAihme4zsx88UBxnMpkCgYDDZv/66y8TexjYSqRPurufSKVSNUOBECrILyBaWFhZWRkYGIyzGdclFtva2enr48hkp4L8PPV9sbefNNFu4uVPLzY2Mmuqq2traxVhtnZ2TmSnixcuMJnMkuLilOTktxYt0TyXViUpu6l42cBs5PP5mZl/anJxVdWp6hKMpNVGJGpBCJkTCLweyjEnEBBCrS29Tf0aGhhES0uEkLmpOQaDOf/J0/s6PQymrLy0z5lFYzX7fYF+m7zpOYfP4wo1vj9Wn05ZuSq6usRFhYWzPWbX19fPcHc/cuQwQgiDwaxdt+4f//gnHo/v6upqaWnp21D9UAiFgurqR9Pd3AQ8fklJSUuLaLrr9AZzgkgkqqurU98Xc4J5V5e4pc9VsCRaisVi4TP3KRaLRSRaaJ5rcCUN4uKqqlMXvtuwWE0MRoOXl1dVZaXy4EKvhUKhsKqqslcwkUgUCPgIIS6PK5XJtm0J6OzsVHVmuVxrw6eeTc6fO7vce/m+feGHDx/q7u7Wqm1flJWr4e7d3/69aXNNda1AwK+prkYIzZo5661Fiw8eiGxsZC5cuPDtZd4IIYlEKpPJcKNwzz41BxiKzMysmTNn8Xm8vLzc1tbWFStWWlpZPcjKGrAvXA7HwMDQ3NxcaYn2dAnlcAwMDExNzYRCAULI2tqaw+FqlUuTsF7dHMTFVVPnC+cV/LvNxYvn//nPeQFbtk6ZQnYgkTZs3LjSx+fy5UvKyeo2fbqlpRWFMnXFipX37t1DCNXW1jLq67bv2GFrZ2tubq4wsxyQjvZ2e3sHDQ2furq64uPjDAzH+Pr5D7prfStXQ05Ojj5u1CZf34yMjKcXA6uH5HKMnp6+/l+34DKZjM1uftPTk0AgkEikAYfij/t0CoXiNmPGw5ycosJCW1tbT09P+n36gMXX1dVVlFcEBtImTpxoZmY2duzTT/f6+rrKiopt27fZ2NhMc3b+l4/PnTu3tMqlSVivbg5i8NXUqQs7aVWVVQcPfrhmzdr9kfsxGL3ax7VxsTH5eXk9vls7ey18q7u7i06/n5KcjBCSy+WxMTGbfH2jIg+MNjBgsZr2R0RIJAMYPiX9+MP69euLCgtZrCYN/w0hIeFUdHRsdvaDvNzBuBj3rVwNUqn09u3bK1as/O3XXxVHsrMfUKkuBw8eHmNk1N7eXlJcrDiemJgY4B+wZMnSR1VVhw8fUj8UPB6vuKRYLpO1tbUp9h5IJFKNZjaZJ07G/+ff/4nYHzlmzBihSPTzMwO3kydP+Pr5Hzl6rLOj42Z6+s1nm1oa5tIwrFc3BzH+qup84WDmzl+IRfLhs4uv3CFFI42RWzmgFVKEgf/KCQAjf7UBAFhtAEAHAdkAAMgGAF4+oxBCbDb8BioAaAqY2QIA3KQBAMgGAEA2AKBDWwKKbzkwFgAwIIofg/o/d3g9AtMP08AAAAAASUVORK5CYII="},8150:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/debug-browser-8e79db260ff8a5302d78326112d2ece8.png"},5960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/export-my-codename-b94767a8eb561ebf86d5c16071df6b75.png"}}]);