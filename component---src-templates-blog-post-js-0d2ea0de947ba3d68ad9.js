"use strict";(self.webpackChunkgatsby_starter_morning_dew=self.webpackChunkgatsby_starter_morning_dew||[]).push([[989],{8415:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.identifierTypes=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),a=(n=r(5697))&&n.__esModule?n:{default:n};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}var p=["pathname","url","title","og:title","issue-number","issue-term"],d=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=s(this,c(t).call(this,e))).myRef=o.default.createRef(),r.state={pending:!0},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.repo,n=t.type,o=t.specificTerm,a=t.issueNumber,i=function(e){if(!(p.indexOf(e)<0))return"issue-number"===e?"issue-number":"issue-term";console.warn("Wrong type: "+e)}(n),l=function(e,t,r){if(!(p.indexOf(e)<0))return"pathname"===e?"pathname":"url"===e?"url":"title"===e?"title":"og:title"===e?"og:title":"issue-term"===e?t:"issue-number"===e?r:void 0;console.warn("Wrong type: "+e)}(n,o,a);if("issue-term"!==n||l)if("issue-number"===n&&(isNaN(l)||l<1))console.warn("When type is '".concat(n,"', valid 'issueNumber' prop must be provided"));else{var s=document.createElement("script");s.src="https://utteranc.es/client.js",s.async=!0,s.setAttribute("repo",r),s.setAttribute("crossorigin","anonymous"),s.setAttribute(i,l),s.onload=function(){return e.setState({pending:!1})},this.myRef.current.appendChild(s)}else console.warn("When type is '".concat(n,"', 'specificTerm' prop must be provided"))}},{key:"render",value:function(){return o.default.createElement("div",{className:"react-utterences",ref:this.myRef},this.props.debug&&o.default.createElement("pre",{style:{background:"#cccccc",padding:10}},"\nthis.props: ".concat(JSON.stringify(this.props,null,2),'\nlocation.pathname: "').concat(window.location.pathname,'"\nlocation.href: "').concat(window.location.href,'"\n          ').trim()),this.props.debug&&o.default.createElement("div",null,"👇👇If the settings are valid, the comment widget appear below👇👇"),this.state.pending&&o.default.createElement("div",null,"Loading script..."))}}])&&l(r.prototype,n),a&&l(r,a),t}(o.Component);t.identifierTypes={pathname:{attrValue:"",summary:"Issue title contains page pathname"},url:{attrValue:"url",summary:"Issue title contains page URL"},title:{attrValue:"title",summary:"Issue title contains page title"},"og:title":{attrValue:"og:title",summary:"Issue title contains page og:title"},"issue-number":{attrValue:-1,summary:"Specific issue number"},"issue-term":{attrValue:"",summary:"Issue title contains specific term"}},d.propTypes={type:a.default.string.isRequired,repo:a.default.string.isRequired,specificTerm:a.default.string,issueNumber:a.default.number,hashKey:a.default.string,debug:a.default.bool};var m=d;t.default=m},2975:function(e,t,r){Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return n.default}});var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(8415))},5508:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(1721),o=r(7294),a=r(3494),i=a.default.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-wxgzt8-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII=",r="en"===e?"english post":"post en francais";return o.createElement(i,{src:t,alt:r,className:"flag"})},t}(o.Component),s=l},642:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(1721),o=r(7294),a=r(7408),i=r(306),l=r(9564),s=r(3494),c=r(9408),u=r(9456),p=r(7520),d=s.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-d7fgaq-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#ececec 0 0 0 1px;background-color:var(--color-wrapperBackground);}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:cover;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"]),m=(0,s.default)(c.xv).withConfig({displayName:"Bio__BioText",componentId:"sc-d7fgaq-1"})(["& a{box-shadow:0 2px 0 0 var(--color-secondary);}& a:hover{filter:brightness(150%);box-shadow:none;}"]),f=function(){var e=(0,u.Z)(),t=e.authorAvatar,r=e.authorName,n=e.authorDescription,a=(0,p.Z)(t).fixed;return o.createElement(d,null,o.createElement("figure",{className:"author-image"},o.createElement("div",{alt:r,style:{backgroundImage:'url("'+a.src+'")'},className:"img"})),o.createElement("section",null,o.createElement("h4",null,"About the author"),o.createElement(m,{dangerouslySetInnerHTML:{__html:n}})))},g=r(5793),h=s.default.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"sc-jwdbi9-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),b=s.default.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"sc-jwdbi9-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-top:1px solid #ececec;"]),A=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.post;return o.createElement(h,null,o.createElement(g.Z,{content:e.body,date:e.frontmatter.date,tags:e.frontmatter.tags,translations:e.frontmatter.translations}),o.createElement(b,null,o.createElement(f,null)))},t}(o.Component),y=A,x=r(5903),v=r(9555),w=(r(5508),s.default.aside.withConfig({displayName:"PrevNextPost__PreviewContainer",componentId:"sc-1r1qyep-0"})(["display:flex;flex-wrap:wrap;max-width:770px;width:80%;margin:0px auto 30px auto;top:20px;position:relative;@media (max-width:780px){width:100%;padding:25px;}"])),E=s.default.article.withConfig({displayName:"PrevNextPost__Preview",componentId:"sc-1r1qyep-1"})(["cursor:pointer;flex:1 1 300px;background-color:var(--color-secondaryContentBackground);box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);margin:20px 20px;border-radius:5px;&:hover{box-shadow:0 0 0 0,0 6px 12px var(--color-grey300);transition:all 0.3s ease;transform:translate3D(0,-1px,0);}@media (min-width:780px){&:first-child{margin-left:0;}&:last-child{margin-right:0;}}"]),O=s.default.div.withConfig({displayName:"PrevNextPost__PreviewCover",componentId:"sc-1r1qyep-2"})(["width:auto;height:200px;background:#c5d2d9 no-repeat 50%;background-size:cover;border-radius:5px 5px 0 0;"]),k=s.default.div.withConfig({displayName:"PrevNextPost__PreviewContent",componentId:"sc-1r1qyep-3"})(["padding:20px;header{padding:0 0 10px 0;}section{padding-bottom:10px;}footer{font-size:0.8em;}"]),j=function(e){var t=[e.previous,e.next].filter((function(e){return e})).map((function(e){return{node:e}})),r=(0,u.Z)(),n=r.siteCover,a=(r.defaultLang,(0,p.Z)(n).fluid);return o.createElement(o.Fragment,null,o.createElement(w,null,t.map((function(e,t){var r=e.node,n=r.excerpt,i=r.timeToRead,l=e.node.frontmatter,s=l.tags,u=l.cover,p=l.title,d=l.slug,m=(l.language,u&&u.publicURL||a.src);return o.createElement(E,{key:"prev-next-"+t},o.createElement(x.Link,{to:"/"+d,"aria-label":"View "+p+" article"},o.createElement(O,{style:{backgroundImage:'url("'+m+'")'}}),o.createElement(k,null,o.createElement("header",null,o.createElement("h2",null,p)),o.createElement("section",null,o.createElement("p",null,n)),o.createElement("footer",null,o.createElement(c.OV,{min:i}),Array.isArray(s)&&o.createElement(o.Fragment,null,o.createElement(c.fU,null),o.createElement(v.Z,{tags:s,noLink:!0}))))))}))))},C=r(389),I=(r(2489),r(2975)),P=function(e){var t=(0,u.Z)().utterSiteUrl;return o.createElement(I.ZP,{repo:t,type:"pathname"})},N=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.data.post,t=this.props.pageContext,r=t.previous,n=t.next;return o.createElement(a.Z,{location:this.props.location},o.createElement(C.Z,{title:e.frontmatter.title,description:e.excerpt,cover:e.frontmatter.cover&&e.frontmatter.cover.publicURL,imageShare:e.frontmatter.imageShare&&e.frontmatter.imageShare.publicURL,lang:e.frontmatter.language,translations:e.frontmatter.translations,path:e.frontmatter.slug,isBlogPost:!0}),o.createElement(l.Z,{heroImg:e.frontmatter.cover&&e.frontmatter.cover.publicURL,title:e.frontmatter.title}),o.createElement(i.Z,null,o.createElement(y,{post:e})),o.createElement(i.Z,{as:"aside"},o.createElement(P,null)," "),o.createElement(j,{previous:r,next:n}))},t}(o.Component),R=N}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0d2ea0de947ba3d68ad9.js.map