(self.webpackChunkgatsby_starter_morning_dew=self.webpackChunkgatsby_starter_morning_dew||[]).push([[992],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!o(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return ge}});var r,i,o,a,l=n(5697),c=n.n(l),s=n(4839),u=n.n(s),p=n(2993),d=n.n(p),f=n(7294),m=n(6494),g=n.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},I=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",x="href",C="http-equiv",T="innerHTML",E="itemprop",A="name",S="property",k="rel",j="src",O="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",L="defer",M="encodeSpecialCharacters",_="onChangeClientState",H="titleTemplate",z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=X(e,v.TITLE),n=X(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,N);return t||r||void 0},q=function(e){return X(e,_)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var l=o[a],c=l.toLowerCase();-1===t.indexOf(c)||n===k&&"canonical"===e[n].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==T&&l!==w&&l!==E||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var l=o[a],c=g()({},r[l],i[l]);r[l]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,i),le(p,d);var f={baseTag:se(v.BASE,n),linkTags:se(v.LINK,o),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,l),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=f[e].oldTags)})),t&&t(),c(e,m,g)},ae=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===i.indexOf(c)&&i.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);i.length===o.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(D,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,i=pe(n,r),[f.createElement(v.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=ue(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===T||n===w){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),f.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===T||e===w)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(y,i,r),link:de(v.LINK,o,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,l,r),script:de(v.SCRIPT,c,r),style:de(v.STYLE,s,r),title:de(v.TITLE,{title:p,titleAttributes:d},r)}},me=u()((function(e){return{baseTag:Q([x,O],e),bodyAttributes:J(h,e),defer:X(e,L),encode:X(e,M),htmlAttributes:J(y,e),linkTags:V(v.LINK,[k,x],e),metaTags:V(v.META,[A,I,C,S,E],e),noscriptTags:V(v.NOSCRIPT,[T],e),onChangeClientState:q(e),scriptTags:V(v.SCRIPT,[j,T],e),styleTags:V(v.STYLE,[w],e),title:F(e),titleAttributes:J(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),fe)((function(){return null})),ge=(i=me,a=o=function(e){function t(){return R(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},i,((t={})[r.type]=a,t.titleAttributes=Y({},o),t));case v.BODY:return Y({},i,{bodyAttributes:Y({},o)});case v.HTML:return Y({},i,{htmlAttributes:Y({},o)})}return Y({},i,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(G(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(i,r)},W(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(f.Component),o.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ge.renderStatic=ge.rewind},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),p.canUseDOM?t(c):n&&(c=n(c))}var p=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",l),p}}},9408:function(e,t,n){"use strict";n.d(t,{Fg:function(){return l},OV:function(){return p},ZL:function(){return a},fU:function(){return s},xv:function(){return c}});var r=n(7294),i=n(3494),o=n(5903),a=(0,i.createGlobalStyle)(['*{box-sizing:border-box;margin:0;padding:0;}body{font-family:"Lato",sans-serif;color:var(--color-text);background-color:var(--color-siteBackground);}img{max-width:100%;height:auto;vertical-align:middle;border:0;}a{text-decoration:none;color:var(--color-text);}hr{border:0;border-top:1px solid var(--color-grey100);margin:50px 0 5px 0;}ul,ol{padding-left:2em;margin:1em 0 0 0;}*::selection{background-color:var(--color-secondary);}']),l=(0,i.default)(o.Link).withConfig({displayName:"Commons__StyledLink",componentId:"sc-1aaxjtz-0"})(["box-shadow:0 2px 0 0 var(--color-secondary);&:hover{filter:brightness(150%);box-shadow:none;}"]),c=i.default.p.withConfig({displayName:"Commons__Text",componentId:"sc-1aaxjtz-1"})(["line-height:1.6;margin:1em 0 0 0;"]),s=i.default.span.withConfig({displayName:"Commons__Bull",componentId:"sc-1aaxjtz-2"})(["display:inline-block;color:var(--color-textSecondary);margin:0 4px;&::before{content:'•';}"]),u=i.default.span.withConfig({displayName:"Commons__ReadingTimeContainer",componentId:"sc-1aaxjtz-3"})(["text-transform:uppercase;color:var(--color-textSecondary);"]),p=function(e){return r.createElement(u,null,e.min," min read")}},389:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),i=n(5414),o=n(5903),a=r.memo((function(e){var t=e.author,n=e.canonicalUrl,o=e.datePublished,a=e.defaultTitle,l=e.description,c=e.image,s=e.isBlogPost,u=e.organization,p=e.title,d=e.url,f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:p,alternateName:a}],m=s?[].concat(f,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":d,name:p,image:c}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:p,alternateName:a,headline:p,image:{"@type":"ImageObject",url:c},description:l,author:{"@type":"Person",name:t.name},publisher:{"@type":"Organization",url:u.url,logo:u.logo,name:u.name},mainEntityOfPage:{"@type":"WebSite","@id":n},datePublished:o}]):f;return r.createElement(i.q,null,r.createElement("script",{type:"application/ld+json"},JSON.stringify(m)))})),l=n(9456),c=function(e){var t=e.isBlogPost,n=e.path,c=void 0===n?"":n,s=e.lang,u=void 0===s?"en":s,p=e.datePublished,d=(0,l.Z)(),f=d.siteTitle,m=d.siteUrl,g=d.siteCover,h=d.siteDescription,y=d.twitterUsername,b=d.authorName,v=e.title?e.title+" | "+f:f+" - "+h,I=m.endsWith("/")?m.substring(0,m.length-1):m,w=e.imageShare||e.cover||(0,o.withPrefix)(g),x=""+I+w,C=e.description||h,T=(e.translations||[]).filter((function(e){return!e.link.startsWith("http")})),E=I+(0,o.withPrefix)(c);return r.createElement(r.Fragment,null,r.createElement(i.q,{title:v},r.createElement("html",{lang:u}),r.createElement("meta",{name:"description",content:C}),r.createElement("link",{rel:"canonical",href:E}),T.length>0&&r.createElement("link",{rel:"alternate",hreflang:u,href:E}),T.map((function(e){return r.createElement("link",{key:"head-translation-"+e.hreflang,rel:"alternate",hreflang:e.hreflang,href:I+(0,o.withPrefix)(e.link)})})),r.createElement("meta",{property:"og:url",content:E}),r.createElement("meta",{property:"og:type",content:t?"article":"website"}),r.createElement("meta",{property:"og:title",content:v}),r.createElement("meta",{property:"og:description",content:C}),r.createElement("meta",{property:"og:image",content:x}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:y}),r.createElement("meta",{name:"twitter:title",content:v}),r.createElement("meta",{name:"twitter:description",content:C}),r.createElement("meta",{name:"twitter:image",content:x})),r.createElement(a,{isBlogPost:t,url:E,title:v,image:x,description:C,datePublished:p,canonicalUrl:E,author:b,organization:f,defaultTitle:v}))}},306:function(e,t,n){"use strict";var r=n(3494).default.main.attrs((function(e){return{role:e.as?void 0:"main",id:e.as?void 0:"main-content"}})).withConfig({displayName:"Wrapper",componentId:"sc-xmiwfw-0"})(["position:relative;border-radius:5px;width:80%;max-width:770px;word-wrap:break-word;background-color:var(--color-wrapperBackground);margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px var(--color-wrapperShadow);@media (max-width:780px){width:100%;padding:25px;}"]);t.Z=r},7408:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(1721),i=n(7294),o=n(5414),a=n(3494),l=n(5903),c=n(9456),s=n(4942),u={};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}d(d({},n(2284).DM),u.colors||{});var f=d(d({},{small:"(min-width: 480px)",medium:"(min-width: 700px)",large:"(min-width: 960px)"}),u.media||{}),m=n(7520),g=n(9621),h=a.default.button.withConfig({displayName:"DarkToggle__DarkModeButton",componentId:"sc-1pi07bk-0"})(["background:transparent;cursor:pointer;border:none;padding:8px 10px;color:#ffffff;font-weight:700;margin:10px 0;font-size:16px;font-family:'Lato',sans-serif;"]),y=function(e){var t=e.isExpanded,n=void 0!==t&&t,r=i.useContext(g.N),o=r.colorMode,a=r.setColorMode;if(!o)return null;var l="light"===o?"dark":"light";return i.createElement(h,{onClick:function(){return a("light"===o?"dark":"light")},"aria-label":"Activate "+l+" mode"},"dark"===o?i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0id2hpdGUiCiAgc3Ryb2tlPSJ3aGl0ZSIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGZpbGw9IndoaXRlIiBjeD0iMTIiIGN5PSIxMiIgcj0iNSIgLz4KICA8ZyBzdHJva2U9IndoaXRlIj4KICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMSIgeDI9IjEyIiB5Mj0iMyIgLz4KICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMjEiIHgyPSIxMiIgeTI9IjIzIiAvPgogICAgICA8bGluZSB4MT0iNC4yMiIgeTE9IjQuMjIiIHgyPSI1LjY0IiB5Mj0iNS42NCIgLz4KICAgICAgPGxpbmUgeDE9IjE4LjM2IiB5MT0iMTguMzYiIHgyPSIxOS43OCIgeTI9IjE5Ljc4IiAvPgogICAgICA8bGluZSB4MT0iMSIgeTE9IjEyIiB4Mj0iMyIgeTI9IjEyIiAvPgogICAgICA8bGluZSB4MT0iMjEiIHkxPSIxMiIgeDI9IjIzIiB5Mj0iMTIiIC8+CiAgICAgIDxsaW5lIHgxPSI0LjIyIiB5MT0iMTkuNzgiIHgyPSI1LjY0IiB5Mj0iMTguMzYiIC8+CiAgICAgIDxsaW5lIHgxPSIxOC4zNiIgeTE9IjUuNjQiIHgyPSIxOS43OCIgeTI9IjQuMjIiIC8+CiAgIDwvZz4KPC9zdmc+",alt:"sun logo"}):i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bWFzayBpZD0ibWFzayI+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIgLz4gCiAgICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjkiIGZpbGw9ImJsYWNrIiAvPgogIDwvbWFzaz4KICA8Y2lyY2xlIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBjeD0iMTIiIGN5PSIxMiIgcj0iOSIgbWFzaz0idXJsKCNtYXNrKSIgLz4KPC9zdmc+",alt:"moon Logo"}),n&&"Toggle "+l+" mode")},b=a.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1glvhxp-0"})(["top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:var(--color-primaryAlpha);font-weight:700;@media ","{position:fixed;}"],f.medium),v=a.default.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-1glvhxp-1"})(["font-weight:700;margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:770px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding:0px 10px;"]),I=a.default.div.withConfig({displayName:"Header__HeaderLinksContainer",componentId:"sc-1glvhxp-2"})(["display:none;-webkit-box-align:center;align-items:center;@media ","{display:flex;}"],f.medium),w=(0,a.default)(l.Link).withConfig({displayName:"Header__HeaderLink",componentId:"sc-1glvhxp-3"})(["position:relative;display:flex;align-items:center;color:var(--color-white);border:0;margin:0;padding:8px 10px;min-width:42px;z-index:10;& + &{margin-left:0.7rem;}"]),x=(0,a.default)(w).withConfig({displayName:"Header__HeaderLinkTitle",componentId:"sc-1glvhxp-4"})(["padding-left:0;"]),C=a.default.span.withConfig({displayName:"Header__HeaderLinkTitleContent",componentId:"sc-1glvhxp-5"})(["display:block;padding-left:0;font-size:1.5em;"]),T=a.default.img.withConfig({displayName:"Header__HeaderImage",componentId:"sc-1glvhxp-6"})(["padding:4px;height:57px;"]),E=a.default.div.withConfig({displayName:"Header__MobilePanel",componentId:"sc-1glvhxp-7"})(["position:absolute;z-index:20;left:0;top:0;width:100vw;height:100vh;display:flex;align-items:center;background-color:var(--color-primary);@media ","{display:none;}"],f.medium),A=a.default.a.withConfig({displayName:"Header__SkipMainContent",componentId:"sc-1glvhxp-8"})(["position:absolute;left:-999px;width:1px;height:1px;top:auto;color:var(--color-white);background-color:var(--color-grey700);&:focus{display:inline-block;height:auto;width:auto;position:static;padding:20px 10px;}"]),S=a.default.nav.withConfig({displayName:"Header__MobileNav",componentId:"sc-1glvhxp-9"})(["max-width:800px;display:flex;flex-direction:column;-webkit-box-align:center;align-items:center;justify-content:space-evenly;margin:0px auto;& a{display:flex;margin:10px 0 !important;}"]),k=function(e){return e.headerLinks.map((function(e,t){return i.createElement(w,{to:e.url,key:"header-link-"+t,"aria-label":"View "+e.label+" page"},e.label)}))},j=a.default.button.withConfig({displayName:"Header__BurgerButton",componentId:"sc-1glvhxp-10"})(["z-index:30;top:0px;position:relative;color:var(--color-white);display:flex;background:transparent;border:none;cursor:pointer;padding:8px 12px;outline:none;-webkit-tap-highlight-color:transparent;@media ","{display:none;}"],f.medium),O=a.default.div.withConfig({displayName:"Header__BurgerContent",componentId:"sc-1glvhxp-11"})(["width:24px;top:30px;height:2px;background:var(--color-white);position:absolute;left:0;",";transition:all 250ms cubic-bezier(0.86,0,0.07,1);::before{content:'';top:-8px;width:24px;height:2px;background:var(--color-white);position:absolute;left:0;",";transition:all 250ms cubic-bezier(0.86,0,0.07,1);}::after{top:8px;content:'';width:24px;height:2px;background:white;position:absolute;left:0;",";transition:all 250ms cubic-bezier(0.86,0,0.07,1);}"],(function(e){return e.isToggledOn?"background: transparent":"background: var(--color-white)"}),(function(e){return e.isToggledOn?"transform: rotate(45deg); top: 0;":"transform: rotate(0)"}),(function(e){return e.isToggledOn?"transform: rotate(-45deg); top: 0;":"transform: rotate(0)"})),P=function(e){var t=e.headerLinks,n=(0,i.useState)(!1),r=n[0],o=n[1];return i.createElement(i.Fragment,null,i.createElement(j,{onClick:function(){return o(!r)},"aria-label":r?"close menu":"open menu"},i.createElement(O,{isToggledOn:r})),r&&i.createElement(E,null,i.createElement(S,null,i.createElement(k,{headerLinks:t}),i.createElement(y,{isExpanded:!0}))))},N=function(){var e=(0,c.Z)(),t=e.headerLinks,n=e.siteTitle,r=e.headerTitle,o=e.headerLinksIcon,a=o?(0,m.Z)(o).fluid.src:null;return i.createElement(b,null,i.createElement(v,null,i.createElement(A,{href:"#main-content"},"Skip to main content"),i.createElement(x,{to:"/","aria-label":"View home page"},a&&i.createElement(T,{src:a,alt:n}),i.createElement(C,null,r)),i.createElement(I,null,i.createElement(k,{headerLinks:t}),i.createElement(y,null)),i.createElement(P,{headerLinks:t})))},L=a.default.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-t92llg-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:var(--color-primary);color:var(--color-white);padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;padding-right:1em;}}& a{color:var(--color-white);font-weight:bold;&:hover{color:var(--color-grey200);}}.footer-col > p{margin:0;}.footer-title{font-size:1.2rem;margin:0 0 1rem;}.footer-item{color:var(--color-white);& a{padding:0.25rem 0;display:block;}}.footer-heart{color:var(--color-red);}.footer-item-text{padding:0.1rem 0;color:var(--color-white);}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}.footer-column-items{grid-template-columns:1fr;display:grid;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"]),M=function(){var e=(0,c.Z)(),t=e.authorName,n=e.websiteHost,r=e.footerLinks,o=function(e){var t=e.item;return t.url.startsWith("/")?i.createElement("span",{className:"footer-item"},i.createElement(l.Link,{className:"footer-link",to:t.url},t.label)):i.createElement("span",{className:"footer-item"},i.createElement("a",{className:"footer-link",href:t.url,rel:t.rel},t.label))},a=function(e){var t=e.column;return i.createElement("div",{className:"footer-col"},i.createElement("h3",{className:"footer-title",key:t.sectionName},t.sectionName),i.createElement("div",{className:"footer-column-items"},t.links.map((function(e,t){return i.createElement(o,{item:e,key:"footer-column-item-"+t})}))))};return i.createElement(L,null,i.createElement("nav",null,i.createElement("div",{className:"footer-col"},i.createElement("h3",{className:"footer-title"},t," © ",(new Date).getFullYear()),i.createElement("p",{className:"footer-item-text"},"Built with"," ",i.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),i.createElement("p",{className:"footer-item-text"},"Theme using"," ",i.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),i.createElement("p",{className:"footer-item-text"},"Hosted with"," ",i.createElement("span",{className:"footer-heart",role:"img","aria-label":"Love"},"❤")," ","by"," ",i.createElement("a",{className:"footer-link",href:n.url},n.name),".")),r.map((function(e,t){return i.createElement(a,{column:e,key:"footer-column-"+t})}))))},_=n(9408),H=a.default.div.withConfig({displayName:"layout__SiteContent",componentId:"sc-nrr2ov-0"})(["margin:0 0;@media ","{margin:60px 0;}"],f.medium),z=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.children;return i.createElement(i.Fragment,null,i.createElement(o.q,null,i.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap",rel:"stylesheet"})),i.createElement(_.ZL,null),i.createElement(N,null),i.createElement(H,null,e),i.createElement(M,null))},t}(i.Component),B=z},9456:function(e,t,n){"use strict";var r=n(5903);t.Z=function(){return(0,r.useStaticQuery)("1710966093").site.siteMetadata}},7520:function(e,t,n){"use strict";var r=n(5903);t.Z=function(e){var t=(0,r.useStaticQuery)("1956263691").allFile.edges.find((function(t){return t.node.relativePath===e}));if(void 0===t)throw new Error("Unable to find image: "+e+" (in content/images)");return t.node.childImageSharp}}}]);
//# sourceMappingURL=3a2f1ab89072400eb78a258db61265f1964eff8a-0697834c8ac3ce6e7053.js.map