(self.webpackChunkgatsby_blog_5_10=self.webpackChunkgatsby_blog_5_10||[]).push([[351],{4852:function(e){"use strict";e.exports=Object.assign},311:function(e,t,n){"use strict";n.d(t,{Fg:function(){return l},OV:function(){return d},ZL:function(){return a},fU:function(){return s},xv:function(){return c}});var r=n(7294),o=n(2788),i=n(1883);const a=(0,o.createGlobalStyle)(['*{box-sizing:border-box;margin:0;padding:0;}body{font-family:"Lato",sans-serif;color:var(--color-text);background-color:var(--color-siteBackground);}img{max-width:100%;height:auto;vertical-align:middle;border:0;}a{text-decoration:none;color:var(--color-text);}hr{border:0;border-top:1px solid var(--color-grey100);margin:50px 0 5px 0;}ul,ol{padding-left:2em;margin:1em 0 0 0;}*::selection{background-color:var(--color-secondary);}']),l=(0,o.default)(i.rU).withConfig({displayName:"Commons__StyledLink",componentId:"sc-hngyue-0"})(["box-shadow:0 2px 0 0 var(--color-secondary);&:hover{filter:brightness(150%);box-shadow:none;}"]),c=o.default.p.withConfig({displayName:"Commons__Text",componentId:"sc-hngyue-1"})(["line-height:1.6;margin:1em 0 0 0;"]),s=o.default.span.withConfig({displayName:"Commons__Bull",componentId:"sc-hngyue-2"})(["display:inline-block;color:var(--color-textSecondary);margin:0 4px;&::before{content:'•';}"]),u=o.default.span.withConfig({displayName:"Commons__ReadingTimeContainer",componentId:"sc-hngyue-3"})(["text-transform:uppercase;color:var(--color-textSecondary);"]),d=e=>r.createElement(u,null,e.min," ")},5536:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(4593),i=n(1883),a=n(8259);var l=e=>{const{isBlogPost:t,path:n="",lang:l="en",datePublished:c}=e,{siteTitle:s,siteUrl:u,siteCover:d,siteDescription:p,twitterUsername:f,authorName:m}=(0,a.Z)(),g=e.title?e.title+" | "+s:s+" - "+p,h=u.endsWith("/")?u.substring(0,u.length-1):u,y=""+h+(e.imageShare||e.cover||(0,i.dq)(d)),b=e.description||p,I=h+(0,i.dq)(n);return r.createElement(r.Fragment,null,r.createElement(o.q,{title:g},r.createElement("html",{lang:l}),r.createElement("meta",{name:"description",content:b}),r.createElement("link",{rel:"canonical",href:I}),r.createElement("meta",{property:"og:url",content:I}),r.createElement("meta",{property:"og:type",content:t?"article":"website"}),r.createElement("meta",{property:"og:title",content:g}),r.createElement("meta",{property:"og:description",content:b}),r.createElement("meta",{property:"og:image",content:y}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:f}),r.createElement("meta",{name:"twitter:title",content:g}),r.createElement("meta",{name:"twitter:description",content:b}),r.createElement("meta",{name:"twitter:image",content:y})))}},418:function(e,t,n){"use strict";const r=n(2788).default.main.withConfig({displayName:"Wrapper",componentId:"sc-1uofgc1-0"})(["position:relative;border-radius:5px;width:80%;max-width:770px;word-wrap:break-word;background-color:var(--color-wrapperBackground);margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px var(--color-wrapperShadow);@media (max-width:780px){width:100%;padding:25px;}"]);t.Z=r},3900:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(4578),o=n(7294),i=n(4593),a=n(2788),l=n(1883),c=n(8259),s={};n(434).DM;const u={small:"(min-width: 480px)",medium:"(min-width: 700px)",large:"(min-width: 960px)",...s.media||{}};var d=n(1853),p=n(7391);const f=a.default.button.withConfig({displayName:"DarkToggle__DarkModeButton",componentId:"sc-qvxvb-0"})(["background:transparent;cursor:pointer;border:none;padding:8px 10px;color:#ffffff;font-weight:700;margin:10px 0;font-size:16px;font-family:'Lato',sans-serif;"]);var m=e=>{let{isExpanded:t=!1}=e;const{colorMode:n,setColorMode:r}=o.useContext(p.N);if(!n)return null;const i="light"===n?"dark":"light";return o.createElement(f,{onClick:()=>r("light"===n?"dark":"light"),"aria-label":"Activate "+i+" mode"},"dark"===n?o.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0id2hpdGUiCiAgc3Ryb2tlPSJ3aGl0ZSIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGZpbGw9IndoaXRlIiBjeD0iMTIiIGN5PSIxMiIgcj0iNSIgLz4KICA8ZyBzdHJva2U9IndoaXRlIj4KICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMSIgeDI9IjEyIiB5Mj0iMyIgLz4KICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMjEiIHgyPSIxMiIgeTI9IjIzIiAvPgogICAgICA8bGluZSB4MT0iNC4yMiIgeTE9IjQuMjIiIHgyPSI1LjY0IiB5Mj0iNS42NCIgLz4KICAgICAgPGxpbmUgeDE9IjE4LjM2IiB5MT0iMTguMzYiIHgyPSIxOS43OCIgeTI9IjE5Ljc4IiAvPgogICAgICA8bGluZSB4MT0iMSIgeTE9IjEyIiB4Mj0iMyIgeTI9IjEyIiAvPgogICAgICA8bGluZSB4MT0iMjEiIHkxPSIxMiIgeDI9IjIzIiB5Mj0iMTIiIC8+CiAgICAgIDxsaW5lIHgxPSI0LjIyIiB5MT0iMTkuNzgiIHgyPSI1LjY0IiB5Mj0iMTguMzYiIC8+CiAgICAgIDxsaW5lIHgxPSIxOC4zNiIgeTE9IjUuNjQiIHgyPSIxOS43OCIgeTI9IjQuMjIiIC8+CiAgIDwvZz4KPC9zdmc+",alt:"sun logo"}):o.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bWFzayBpZD0ibWFzayI+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIgLz4gCiAgICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjkiIGZpbGw9ImJsYWNrIiAvPgogIDwvbWFzaz4KICA8Y2lyY2xlIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBjeD0iMTIiIGN5PSIxMiIgcj0iOSIgbWFzaz0idXJsKCNtYXNrKSIgLz4KPC9zdmc+",alt:"moon Logo"}),t&&"Toggle "+i+" mode")};const g=a.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-yjybta-0"})(["top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:var(--color-primaryAlpha);font-weight:700;@media ","{position:fixed;}"],u.medium),h=a.default.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-yjybta-1"})(["font-weight:700;margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:770px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding:0px 10px;"]),y=a.default.div.withConfig({displayName:"Header__HeaderLinksContainer",componentId:"sc-yjybta-2"})(["display:none;-webkit-box-align:center;align-items:center;@media ","{display:flex;}"],u.medium),b=(0,a.default)(l.rU).withConfig({displayName:"Header__HeaderLink",componentId:"sc-yjybta-3"})(["position:relative;display:flex;align-items:center;color:var(--color-white);border:0;margin:0;padding:8px 10px;min-width:42px;z-index:10;& + &{margin-left:0.7rem;}"]),I=(0,a.default)(b).withConfig({displayName:"Header__HeaderLinkTitle",componentId:"sc-yjybta-4"})(["padding-left:0;"]),w=a.default.span.withConfig({displayName:"Header__HeaderLinkTitleContent",componentId:"sc-yjybta-5"})(["display:block;padding-left:0;font-size:1.5em;"]),v=a.default.img.withConfig({displayName:"Header__HeaderImage",componentId:"sc-yjybta-6"})(["padding:4px;height:57px;"]),x=a.default.div.withConfig({displayName:"Header__MobilePanel",componentId:"sc-yjybta-7"})(["position:absolute;z-index:20;left:0;top:0;width:100vw;height:100vh;display:flex;align-items:center;background-color:var(--color-primary);@media ","{display:none;}"],u.medium),C=a.default.a.withConfig({displayName:"Header__SkipMainContent",componentId:"sc-yjybta-8"})(["position:absolute;left:-999px;width:1px;height:1px;top:auto;color:var(--color-white);background-color:var(--color-grey700);&:focus{display:inline-block;height:auto;width:auto;position:static;padding:20px 10px;}"]),T=a.default.nav.withConfig({displayName:"Header__MobileNav",componentId:"sc-yjybta-9"})(["max-width:800px;display:flex;flex-direction:column;-webkit-box-align:center;align-items:center;justify-content:space-evenly;margin:0px auto;& a{display:flex;margin:10px 0 !important;}"]),E=e=>{let{headerLinks:t}=e;return t.map(((e,t)=>o.createElement(b,{to:e.url,key:"header-link-"+t,"aria-label":"View "+e.label+" page"},e.label)))},A=a.default.button.withConfig({displayName:"Header__BurgerButton",componentId:"sc-yjybta-10"})(["z-index:30;top:0px;position:relative;color:var(--color-white);display:flex;background:transparent;border:none;cursor:pointer;padding:8px 12px;outline:none;-webkit-tap-highlight-color:transparent;@media ","{display:none;}"],u.medium),S=a.default.div.withConfig({displayName:"Header__BurgerContent",componentId:"sc-yjybta-11"})(["width:24px;top:30px;height:2px;background:var(--color-white);position:absolute;left:0;",";transition:all 250ms cubic-bezier(0.86,0,0.07,1);::before{content:'';top:-8px;width:24px;height:2px;background:var(--color-white);position:absolute;left:0;",";transition:all 250ms cubic-bezier(0.86,0,0.07,1);}::after{top:8px;content:'';width:24px;height:2px;background:white;position:absolute;left:0;",";transition:all 250ms cubic-bezier(0.86,0,0.07,1);}"],(e=>e.isToggledOn?"background: transparent":"background: var(--color-white)"),(e=>e.isToggledOn?"transform: rotate(45deg); top: 0;":"transform: rotate(0)"),(e=>e.isToggledOn?"transform: rotate(-45deg); top: 0;":"transform: rotate(0)")),j=e=>{let{headerLinks:t}=e;const{0:n,1:r}=(0,o.useState)(!1);return o.createElement(o.Fragment,null,o.createElement(A,{onClick:()=>r(!n),"aria-label":n?"close menu":"open menu"},o.createElement(S,{isToggledOn:n})),n&&o.createElement(x,null,o.createElement(T,null,o.createElement(E,{headerLinks:t}),o.createElement(m,{isExpanded:!0}))))};var k=()=>{const{headerLinks:e,siteTitle:t,headerTitle:n,headerLinksIcon:r}=(0,c.Z)(),i=r?(0,d.Z)(r).fluid.src:null;return o.createElement(g,null,o.createElement(h,null,o.createElement(C,{href:"#main-content"},"Skip to main content"),o.createElement(I,{to:"/","aria-label":"View home page"},i&&o.createElement(v,{src:i,alt:t}),o.createElement(w,null,n)),o.createElement(y,null,o.createElement(E,{headerLinks:e}),o.createElement(m,null)),o.createElement(j,{headerLinks:e})))};const O=a.default.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1lmjllx-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:var(--color-primary);color:var(--color-white);padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;padding-right:1em;}}& a{color:var(--color-white);font-weight:bold;&:hover{color:var(--color-grey200);}}.footer-col > p{margin:0;}.footer-title{font-size:1.2rem;margin:0 0 1rem;}.footer-item{color:var(--color-white);& a{padding:0.25rem 0;display:block;}}.footer-heart{color:var(--color-red);}.footer-item-text{padding:0.1rem 0;color:var(--color-white);}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}.footer-column-items{grid-template-columns:1fr;display:grid;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"]);var N=()=>{const{authorName:e,websiteHost:t,footerLinks:n}=(0,c.Z)(),r=e=>{let{item:t}=e;return t.url.startsWith("/")?o.createElement("span",{className:"footer-item"},o.createElement(l.rU,{className:"footer-link",to:t.url},t.label)):o.createElement("span",{className:"footer-item"},o.createElement("a",{className:"footer-link",href:t.url,rel:t.rel},t.label))},i=e=>{let{column:t}=e;return o.createElement("div",{className:"footer-col"},o.createElement("h3",{className:"footer-title",key:t.sectionName},t.sectionName),o.createElement("div",{className:"footer-column-items"},t.links.map(((e,t)=>o.createElement(r,{item:e,key:"footer-column-item-"+t})))))};return o.createElement(O,null,o.createElement("nav",null,o.createElement("div",{className:"footer-col"},o.createElement("h3",{className:"footer-title"},e," © ",(new Date).getFullYear()),o.createElement("p",{className:"footer-item-text"},"Built with"," ",o.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),o.createElement("p",{className:"footer-item-text"},"Theme using"," ",o.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),o.createElement("p",{className:"footer-item-text"},"Hosted with"," ",o.createElement("span",{className:"footer-heart",role:"img","aria-label":"Love"},"❤")," ","by"," ",o.createElement("a",{className:"footer-link",href:t.url},t.name),".")),n.map(((e,t)=>o.createElement(i,{column:e,key:"footer-column-"+t})))))},M=n(311);const P=a.default.div.withConfig({displayName:"layout__SiteContent",componentId:"sc-cq3p71-0"})(["margin:0 0;@media ","{margin:60px 0;}"],u.medium);let L=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const{children:e}=this.props;return o.createElement(o.Fragment,null,o.createElement(i.q,null,o.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap",rel:"stylesheet"}),o.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto Mono:400,700&display=swap",rel:"stylesheet"})),o.createElement(M.ZL,null),o.createElement(k,null),o.createElement(P,null,e),o.createElement(N,null))},t}(o.Component);var _=L},8259:function(e,t,n){"use strict";var r=n(1883);t.Z=()=>(0,r.K2)("1710966093").site.siteMetadata},1853:function(e,t,n){"use strict";var r=n(1883);t.Z=e=>{const t=(0,r.K2)("1956263691").allFile.edges.find((t=>t.node.relativePath===e));if(void 0===t)throw new Error("Unable to find image: "+e+" (in content/images)");return t.node.childImageSharp}},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4593:function(e,t,n){"use strict";n.d(t,{q:function(){return fe}});var r,o,i,a,l=n(5697),c=n.n(l),s=n(3524),u=n.n(s),d=n(9590),p=n.n(d),f=n(7294),m=n(4852),g=n.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",I={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(I).map((function(e){return I[e]})),"charset"),v="cssText",x="href",C="http-equiv",T="innerHTML",E="itemprop",A="name",S="property",j="rel",k="src",O="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",P="defer",L="encodeSpecialCharacters",_="onChangeClientState",H="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),z=[I.NOSCRIPT,I.SCRIPT,I.STYLE],D="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=V(e,I.TITLE),n=V(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=V(e,M);return t||r||void 0},U=function(e){return V(e,_)||function(){}},F=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},q=function(e,t){return t.filter((function(e){return void 0!==e[I.BASE]})).map((function(e){return e[I.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==T&&l!==v&&l!==E||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],c=g()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),X=function(e){return clearTimeout(e)},$="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;ae(I.BODY,r),ae(I.HTML,o),ie(d,p);var f={baseTag:le(I.BASE,n),linkTags:le(I.LINK,i),metaTags:le(I.META,a),noscriptTags:le(I.NOSCRIPT,l),scriptTags:le(I.SCRIPT,s),styleTags:le(I.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=f[e].oldTags)})),t&&t(),c(e,m,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(I.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(I.HEAD),r=n.querySelectorAll(e+"["+D+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(D,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case I.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,o=se(n,r),[f.createElement(I.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ce(n),i=oe(t);return o?"<"+e+" "+D+'="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+" "+D+'="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return se(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===T||n===v){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),f.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===v)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+" "+D+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:ue(I.BASE,t,r),bodyAttributes:ue(h,n,r),htmlAttributes:ue(y,o,r),link:ue(I.LINK,i,r),meta:ue(I.META,a,r),noscript:ue(I.NOSCRIPT,l,r),script:ue(I.SCRIPT,c,r),style:ue(I.STYLE,s,r),title:ue(I.TITLE,{title:d,titleAttributes:p},r)}},pe=u()((function(e){return{baseTag:q([x,O],e),bodyAttributes:F(h,e),defer:V(e,P),encode:V(e,L),htmlAttributes:F(y,e),linkTags:J(I.LINK,[j,x],e),metaTags:J(I.META,[A,w,C,S,E],e),noscriptTags:J(I.NOSCRIPT,[T],e),onChangeClientState:U(e),scriptTags:J(I.SCRIPT,[k,T],e),styleTags:J(I.STYLE,[v],e),title:K(e),titleAttributes:F(b,e)}}),(function(e){ne&&ee(ne),e.defer?ne=$((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),de)((function(){return null})),fe=(o=pe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case I.SCRIPT:case I.NOSCRIPT:return{innerHTML:t};case I.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case I.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case I.BODY:return Y({},o,{bodyAttributes:Y({},i)});case I.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(G(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case I.LINK:case I.META:case I.NOSCRIPT:case I.SCRIPT:case I.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(o,r)},R(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(f.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);fe.renderStatic=fe.rewind},3524:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",l),d}}}}]);
//# sourceMappingURL=commons-625102a7b53ae5ee7745.js.map