(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],f=0,d=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1729:function(t,e,n){},"1ff6":function(t,e,n){"use strict";n("1729")},"2dca":function(t,e,n){},3241:function(t,e,n){"use strict";n("8283")},"44bb":function(t,e,n){"use strict";n("cb15")},"4bf6":function(t,e,n){"use strict";n("f93a")},5365:function(t,e,n){"use strict";n("edf8")},5540:function(t,e,n){"use strict";n("2dca")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=(n("f9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{on:{change:t.onChangeComponent}}),n("div",{staticClass:"px-5",attrs:{id:"content"}},[n("HelloWorld"),n("About"),n("Skill"),n("Contact"),n("Footer")],1)],1)}),i=[],o=(n("159b"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"info-box text-left"},[n("h5",{staticClass:"text-accent ml-2"},[t._v("Hi, my name is")]),n("h1",{staticClass:"name"},[t._v("Junokyo.")]),n("h4",{staticClass:"name"},[t._v("I build things for the web.")]),n("p",[t._v(" I'm a web developer based in Da Nang, Vietnam with a passion for building beautiful, awesome websites. "),n("br"),t._v(" Currently, I’m focused on building websites at "),n("a",{staticClass:"text-accent",attrs:{target:"_blank",href:"https://neo-lab.vn/"}},[t._v("Neolab")]),t._v(". ")]),n("div",{staticClass:"mt-5"},[n("button",{staticClass:"btn-lg active px-4"},[t._v(" Checkout my resume! ")])])])])}],c={name:"HelloWorld",data:function(){return{}},mounted:function(){}},l=c,u=(n("5365"),n("2877")),f=Object(u["a"])(l,o,r,!1,null,"35c6c270",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"d-flex align-items-center justify-content-between"},[n("div",{staticClass:"d-flex align-items-center justify-content-between w-100"},[t._m(0),n("nav",[n("ul",{staticClass:"list-inline mb-0 main-nav font-mono"},[n("li",{class:t.isActive("about"),on:{click:function(e){return e.preventDefault(),t.change("about")}}},[n("a",{attrs:{href:"#"}},[t._v("About")])]),n("li",{class:t.isActive("experience"),on:{click:function(e){return e.preventDefault(),t.change("experience")}}},[n("a",{attrs:{href:"#"}},[t._v("Experience")])]),n("li",{class:t.isActive("Skill"),on:{click:function(e){return e.preventDefault(),t.change("Skill")}}},[n("a",{attrs:{href:"#"}},[t._v("Work")])]),n("li",{class:t.isActive("contact"),on:{click:function(e){return e.preventDefault(),t.change("contact")}}},[n("a",{attrs:{href:"#"}},[t._v("Contact")])]),t._m(1)])]),n("div",{staticClass:"ham-box",on:{click:t.openMenu}},[n("div",{staticClass:"ham-box-inner",class:{active:t.isOpenMenu}})])])])]),n("aside",{class:{active:t.isOpenMenu}},[n("ol",{staticClass:"font-mono"},[n("li",{class:t.isActive("about"),on:{click:function(e){return t.changeSP("about")}}},[n("a",{attrs:{href:"#"}},[t._v("About")])]),n("li",{class:t.isActive("experience"),on:{click:function(e){return t.changeSP("experience")}}},[n("a",{attrs:{href:"#"}},[t._v("Experience")])]),n("li",{class:t.isActive("Skill"),on:{click:function(e){return t.changeSP("Skill")}}},[n("a",{attrs:{href:"#"}},[t._v("Work")])]),n("li",{class:t.isActive("contact"),on:{click:function(e){return t.changeSP("contact")}}},[n("a",{attrs:{href:"#"}},[t._v("Contact")])])]),n("a",{staticClass:"font-mono btn-lg resume px-4",attrs:{href:"/resume.pdf"}},[t._v("Resume")])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("h2",{staticClass:"mb-0"},[n("span",[t._v("J")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"mr-0"},[n("button",{staticClass:"btn-lg px-4"},[t._v("Resume")])])}],m={name:"Header",data:function(){return{active:"",isOpenMenu:!1}},mounted:function(){var t,e=document.documentElement,n=window,a=n.scrollY||e.scrollTop,s=0,i=0,o=document.getElementById("header"),r=function(){t=n.scrollY||e.scrollTop,0===t&&o.classList.remove("sticky"),t>a?s=2:t<a&&(s=1),s!==i&&c(s,t),a=t},c=function(t,e){2===t&&e>70?(o.classList.add("hide"),i=t):1===t&&(o.classList.remove("hide"),o.classList.add("sticky"),i=t)};window.addEventListener("scroll",r)},methods:{isActive:function(t){return this.active===t?"active":""},change:function(t){this.active=t,this.$emit("change",t)},changeSP:function(t){this.openMenu(),this.change(t)},openMenu:function(){var t=document.querySelector("body");t.classList.toggle("blur"),this.isOpenMenu=!this.isOpenMenu}}},h=m,b=(n("5540"),Object(u["a"])(h,p,v,!1,null,"09b4c0a0",null)),_=b.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"text-center"},[t._v(" Made by "),n("span",{staticClass:"text-accent"},[t._v("Junokyo")]),t._v(" with "),n("span",{staticClass:"text-accent"},[t._v("Vue.js")])])}],y={name:"Footer",data:function(){return{}}},x=y,w=(n("1ff6"),Object(u["a"])(x,g,C,!1,null,"5f52112a",null)),k=w.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mt",attrs:{id:"about"}},[n("h2",{staticClass:"section-title"},[t._v("About Me")]),n("div",{staticClass:"about-wrapper"},[n("div",{staticClass:"content"},[n("p",[t._v(" Hello! My real name is "),n("span",{staticClass:"text-accent"},[t._v("Thanh")]),t._v(" and I enjoy creating things that live on the internet. "),n("br"),t._v(" My main focus these days is building accessible, inclusive products and digital experiences at Neolab for a variety of clients. ")]),n("p",[t._v("Here are a few technologies I’ve been working with recently:")]),n("ul",{staticClass:"list-skills font-mono"},[n("li",[t._v("JavaScript (ES6+)")]),n("li",[t._v("TypeScript")]),n("li",[t._v("Vue.js")]),n("li",[t._v("Nuxt.js")]),n("li",[t._v("Taiwind.css")]),n("li",[t._v("Bootstrap 4")]),n("li",[t._v("Socket.js")])])]),n("div",{staticClass:"avatar"})])])}],O=(n("38cf"),{name:"About",data:function(){return{}},mounted:function(){this.$gsap.to(".avatar",{scrollTrigger:".avatar",x:0}),this.$gsap.timeline().to(".avatar",1,{borderRadius:50}).to(".avatar",.5,{rotation:45}).to(".avatar",1,{borderRadius:0}).to(".avatar",.5,{rotation:90}).repeat(-1)}}),A=O,E=(n("3241"),Object(u["a"])(A,S,j,!1,null,"20e1033d",null)),I=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mt",attrs:{id:"experience"}},[n("h2",{staticClass:"section-title"},[t._v("Where I've Worked")]),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"tab-lists position-relative"},[t._l(t.companies,(function(e,a){return n("button",{key:a,staticClass:"btn-link font-mono",on:{click:function(e){t.activeIndex=a}}},[t._v(" "+t._s(e)+" ")])})),n("div",{staticClass:"mark",style:{transform:"translateY(calc("+50*t.activeIndex+"px))"}})],2),n("div",[n("div",{staticClass:"tab-content"},[n("h4",{staticClass:"job-title"},[t._v(" "+t._s(t.tabContent[t.activeIndex].title)+" "),n("span",{staticClass:"text-accent"},[t._v("@ "+t._s(t.tabContent[t.activeIndex].company))])]),n("p",{staticClass:"range"},[t._v(" "+t._s(t.tabContent[t.activeIndex].time)+" ")]),n("ul",{staticClass:"main-response"},t._l(t.tabContent[t.activeIndex].responses,(function(e,a){return n("li",{key:"tab-"+a},[t._v(" "+t._s(e)+" ")])})),0)])])])])},$=[],P={name:"About",components:{},data:function(){return{companies:["Neolab Vietnam","Sun Asterisk","G5 Themes"],activeIndex:0,tabContent:[{company:"Neolab Vietnam",time:"03/2020 - Present",title:"Frontend Developer",responses:["Write modern, performant, maintainable code for a diverse array of client and internal projects","Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis","Make suggestions for better solutions to problems","Assisted in design implementations.","Maintain and improve web applications","Improve UI/UX for products","Leader of small team"]},{company:"Sun Asterisk",time:"06/2018 - 03/2020",title:"Web Developer",responses:["Write modern, performant, maintainable code for a diverse array of client and internal projects","Collaborated with coworkers to improve SEO for coded web pages ","Develop REST/GraphQL API with Nodejs, Nest.js, MongoDB, and Apollo","Assisted in design implementations"]},{company:"G5 Themes",time:"04/2017 - 04/2018",title:"Engineer",responses:["Build templates and short code for Wordpress themes based on PSD template","Build responsive pages with cross web browser compatibility","Build themes for clients and support clients to setup Wordpress and using themes"]}]}}},T=P,W=(n("4bf6"),Object(u["a"])(T,M,$,!1,null,"958f3e3a",null)),H=W.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mt",staticStyle:{"max-width":"600px"},attrs:{id:"contact"}},[n("div",{staticClass:"text-center"},[n("p",{staticClass:"text-accent"},[t._v("What's Next?")]),n("h2",[t._v("Get In Touch")]),n("p",[t._v(" Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! ")]),n("button",{staticClass:"btn-lg active px-5 mt-5"},[n("a",{staticClass:"text-accent",attrs:{href:"mailto:thaithanhdhv.vn@gmail.com"}},[t._v(" Say Hello ")])])])])}],N={name:"Contact",data:function(){return{}}},B=N,J=(n("44bb"),Object(u["a"])(B,D,L,!1,null,"2d4f3239",null)),R=J.exports,V=n("cffa"),F=n("a5cf"),G={methods:{beforeEnter:function(t){V["a"].set(t,{transform:"translate(50px, 0)"})},enter:function(t,e){V["a"].to(t,1,{transform:"translate(0, 0)",ease:F["a"].easeOut}),e()},leave:function(t,e){V["a"].to(t,1,{transformOrigin:"50% 50%",ease:F["a"].easeIn}),e()}}};a["a"].mixin(G);var q={name:"App",components:{HelloWorld:d,Header:_,About:I,Skill:H,Contact:R,Footer:k},data:function(){return{isLoading:!1,componentId:"HelloWorld"}},mounted:function(){setTimeout((function(){document.querySelectorAll("button").forEach((function(t){t.addEventListener("mouseup",(function(t){t&&t.target&&t.target.blur()}))}))}))},methods:{onChangeComponent:function(t){this.$gsap.to(window,{scrollTo:"#"+t,duration:.3})}}},Y=q,U=Object(u["a"])(Y,s,i,!1,null,null,null),Q=U.exports,X=(n("db43"),n("1dac")),z=n("33a0"),K=n("ca36");V["b"].registerPlugin(X["a"],K["ScrollToPlugin"],z["a"]),a["a"].prototype.$gsap=V["b"],a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Q)}}).$mount("#app")},8283:function(t,e,n){},cb15:function(t,e,n){},db43:function(t,e,n){},edf8:function(t,e,n){},f93a:function(t,e,n){}});
//# sourceMappingURL=app.318f128c.js.map