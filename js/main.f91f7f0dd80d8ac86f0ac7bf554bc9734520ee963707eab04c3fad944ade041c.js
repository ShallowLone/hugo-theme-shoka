(()=>{(function(e){}).call(typeof window=="object"&&window||typeof self=="object"&&self||typeof global=="object"&&global||{});(function(e){}).call(typeof window=="object"&&window||typeof self=="object"&&self||typeof global=="object"&&global||{});var o=function(e,t){return t=t||document,e.indexOf("#")===0?t.getElementById(e.replace("#","")):t.querySelector(e)};o.all=function(e,t){return t=t||document,t.querySelectorAll(e)};o.each=function(e,t,a){return o.all(e,a).forEach(t)};Object.assign(HTMLElement.prototype,{createChild:function(e,t,a){var n=document.createElement(e);switch(Object.assign(n,t),a){case"after":this.insertAfter(n);break;case"replace":this.innerHTML="";default:this.appendChild(n)}return n},wrap:function(e){var t=document.createElement("div");Object.assign(t,e),this.parentNode.insertBefore(t,this),this.parentNode.removeChild(this),t.appendChild(this)},height:function(e){return e&&(this.style.height=typeof e=="number"?e+"rem":e),this.getBoundingClientRect().height},width:function(e){return e&&(this.style.width=typeof e=="number"?e+"rem":e),this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){return t===null?this.removeAttribute(e):t?(this.setAttribute(e,t),this):this.getAttribute(e)},insertAfter:function(e){var t=this.parentNode;t.lastChild==this?t.appendChild(e):t.insertBefore(e,this.nextSibling)},display:function(e){return e==null?this.style.display:(this.style.display=e,this)},child:function(e){return o(e,this)},find:function(e){return o.all(e,this)},_class:function(e,t,a){var n=t.indexOf(" ")?t.split(" "):[t],s=this;n.forEach(function(l){e=="toggle"?s.classList.toggle(l,a):s.classList[e](l)})},addClass:function(e){return this._class("add",e),this},removeClass:function(e){return this._class("remove",e),this},toggleClass:function(e,t){return this._class("toggle",e,t),this},hasClass:function(e){return this.classList.contains(e)}});var D=CONFIG.statics.indexOf("//")>0?CONFIG.statics:CONFIG.root,R={x:"undefined",y:"undefined"},W=0,B,re,H=document.getElementsByTagName("body")[0],ee=document.documentElement,Se=o("#container"),X=o("#loading"),S=o("#nav"),me=o("#header"),$=S.child(".toggle"),se=o("#quick"),y=o("#sidebar"),Ae=o("#brand"),A=o("#tool"),Y,te,J,Q,F=o("#search"),ge,ae,ye,oe=window.innerHeight,ce=window.innerWidth,q=0,V=window.location.href,ne,le=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}}),j={timer:null,lock:!1,show:function(){console.log("show loading cat"),clearTimeout(this.timer),document.body.removeClass("loaded"),X.attr("style","display:block"),j.lock=!1},hide:function(e){CONFIG.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){j.lock||(CONFIG.loader.start&&T(X,0),document.body.addClass("loaded"),j.lock=!0)}},P=function(e){var t=o(".theme .ic");e=="dark"?(ee.attr("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(ee.attr("data-theme",null),t.removeClass("i-moon"),t.addClass("i-sun"))},de=function(e){ee.attr("data-theme")=="dark"&&(e="#222"),o('meta[name="theme-color"]').attr("content",e)},je=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(t){t.matches?P("dark"):P()});var e=x.get("theme");e?P(e):CONFIG.darkmode&&P("dark"),o(".theme").addEventListener("click",function(t){var a=t.currentTarget.child(".ic"),n=H.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),s=function(){T(n,{delay:2500,opacity:0},function(){H.removeChild(n)})};if(a.hasClass("i-sun"))var l=function(){n.addClass("dark"),P("dark"),x.set("theme","dark"),s()};else{n.addClass("dark");var l=function(){n.removeClass("dark"),P(),x.set("theme","light"),s()}}T(n,1,function(){setTimeout(l,210)})})},Fe=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":console.log(D+CONFIG.favicon.hidden),o('[rel="icon"]').attr("href",D+CONFIG.favicon.hidden),document.title=LOCAL.favicon.hide,CONFIG.loader.switch&&j.show(),clearTimeout(re);break;case"visible":o('[rel="icon"]').attr("href",D+CONFIG.favicon.normal),document.title=LOCAL.favicon.show,CONFIG.loader.switch&&j.hide(1e3),re=setTimeout(function(){document.title=B},2e3);break}})},ie=function(e){if(!!e){var t=H.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide"),setTimeout(function(){H.removeChild(t)},300)},3e3)}},be=function(e){ge=S.height(),ae=me.height(),ye=ae+o("#waves").height(),ce!=window.innerWidth&&z(null,1),oe=window.innerHeight,ce=window.innerWidth,y.child(".panels").height(oe+"px")},Pe=function(e){var t=window.innerHeight,a=it(),n=a>t?a-t:document.body.scrollHeight-t,s=window.pageYOffset>ae,l=window.pageYOffset>0;de(s?"#FFF":"#222"),S.toggleClass("show",s),A.toggleClass("affix",l),Ae.toggleClass("affix",l),y.toggleClass("affix",window.pageYOffset>ye&&document.body.offsetWidth>991),typeof R.y>"u"&&(R.y=window.pageYOffset),W=R.y-window.pageYOffset,W<0?(S.removeClass("up"),S.toggleClass("down",s)):W>0&&(S.removeClass("down"),S.toggleClass("up",s)),R.y=window.pageYOffset;var d=Math.round(Math.min(100*window.pageYOffset/n,100))+"%";te.child("span").innerText=d,o(".percent").width(d)},Ce=function(){CONFIG.auto_scroll&&x.set(V,R.y)},ue=function(e){var t=window.location.hash,a=null;if(q){x.del(V);return}t?a=o(decodeURI(t)):a=CONFIG.auto_scroll?parseInt(x.get(V)):0,a&&(N(a),q=1),e&&t&&!q&&(N(a),q=1)},we=function(e,t){var a=H.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:!0,value:e});let n=document.getSelection(),s=n.rangeCount>0?n.getRangeAt(0):!1;a.select(),a.setSelectionRange(0,e.length),a.readOnly=!1;var l=document.execCommand("copy");t&&t(l),a.blur(),s&&(n.removeAllRanges(),n.addRange(s)),H.removeChild(a)},M=document.createElement("canvas");M.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(M);var k=M.getContext("2d"),Re=30,xe=0,Le=0,qe="click",fe=CONFIG.fireworks;function ke(){M.width=window.innerWidth*2,M.height=window.innerHeight*2,M.style.width=window.innerWidth+"px",M.style.height=window.innerHeight+"px",M.getContext("2d").scale(2,2)}function Be(e){xe=e.clientX||e.touches&&e.touches[0].clientX,Le=e.clientY||e.touches&&e.touches[0].clientY}function Ge(e){var t=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function _e(e,t){var a={};return a.x=e,a.y=t,a.color=fe[anime.random(0,fe.length-1)],a.radius=anime.random(16,32),a.endPos=Ge(a),a.draw=function(){k.beginPath(),k.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),k.fillStyle=a.color,k.fill()},a}function De(e,t){var a={};return a.x=e,a.y=t,a.color="#FFF",a.radius=.1,a.alpha=.5,a.lineWidth=6,a.draw=function(){k.globalAlpha=a.alpha,k.beginPath(),k.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),k.lineWidth=a.lineWidth,k.strokeStyle=a.color,k.stroke(),k.globalAlpha=1},a}function he(e){for(var t=0;t<e.animatables.length;t++)e.animatables[t].target.draw()}function We(e,t){for(var a=De(e,t),n=[],s=0;s<Re;s++)n.push(_e(e,t));anime.timeline().add({targets:n,x:function(l){return l.endPos.x},y:function(l){return l.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:he}).add({targets:a,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:he},0)}var Ye=anime({duration:1/0,update:function(){k.clearRect(0,0,M.width,M.height)}});document.addEventListener(qe,function(e){Ye.play(),Be(e),We(xe,Le)},!1);ke();window.addEventListener("resize",ke,!1);var ze=function(){if(!!o(".index.wrap")){if(!window.IntersectionObserver)o.each(".index.wrap article.item, .index.wrap section.item",function(t){t.hasClass("show")===!1&&t.addClass("show")});else{var e=new IntersectionObserver(function(t){t.forEach(function(a){a.target.hasClass("show")?e.unobserve(a.target):(a.isIntersecting||a.intersectionRatio>0)&&(a.target.addClass("show"),e.unobserve(a.target))})},{root:null,threshold:[.3]});o.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)}),o(".index.wrap .item:first-child").addClass("show")}o.each(".cards .item",function(t,a){["mouseenter","touchstart"].forEach(function(n){t.addEventListener(n,function(s){o(".cards .item.active")&&o(".cards .item.active").removeClass("active"),t.addClass("active")})}),["mouseleave"].forEach(function(n){t.addEventListener(n,function(s){t.removeClass("active")})})})}},Ue=function(){o.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join("")),t.rel="noopener external nofollow noreferrer",t.target="_blank",t.className=e.className,t.title=e.title||e.innerText,t.innerHTML=e.innerHTML,e.dataset.backgroundImage&&(t.dataset.backgroundImage=e.dataset.backgroundImage),e.parentNode.replaceChild(t,e)})},Ne=function(e){o(e+" .md img")&&(G("fancybox"),U("fancybox",function(){var t=jQuery.noConflict();o.each(e+" p.gallery",function(a){var n=document.createElement("div");n.className="gallery",n.attr("data-height",a.attr("data-height")||220),n.innerHTML=a.innerHTML.replace(/<br>/g,""),a.parentNode.insertBefore(n,a),a.remove()}),o.each(e+" .md img:not(.emoji):not(.vemoji)",function(a){var n=t(a),s,l="image-info";if(!n.is("a img")){var d=n.attr("data-src")||n.attr("src");n.data("safe-src",d);var g=n.wrap('<a class="fancybox" href="'+d+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");n.is(".gallery img")?l="jg-caption":g.attr("data-fancybox","default").attr("rel","default")}if(s=a.attr("title")){g.attr("data-caption",s);var v=document.createElement("span"),f=document.createTextNode(s);v.appendChild(f),v.addClass(l),a.insertAfter(v)}}),o.each(e+" div.gallery",function(a,n){t(a).justifiedGallery({rowHeight:t(a).data("height")||120,rel:"gallery-"+n}).on("jg.complete",function(){t(this).find("a").each(function(s,l){l.attr("data-fancybox","gallery-"+n)})})}),t.fancybox.defaults.hash=!1,t(e+" .fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},window.jQuery))},Xe=function(){$e(),o(".md")&&(Ne(".post.block"),o(".post.block").oncopy=function(e){if(ie(LOCAL.copyright),LOCAL.nocopy){e.preventDefault();return}var t=o("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var a="# "+t.child(".author").innerText,n="# "+t.child(".link").innerText,s="# "+t.child(".license").innerText,l=a+"<br>"+n+"<br>"+s+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>"),d=a+`
`+n+`
`+s+`

`+window.getSelection().toString().replace(/\r\n/g,`
`);if(e.clipboardData)e.clipboardData.setData("text/html",l),e.clipboardData.setData("text/plain",d);else if(window.clipboardData)return window.clipboardData.setData("text",d)}},o.each("li ruby",function(e){var t=e.parentNode;e.parentNode.tagName!="LI"&&(t=e.parentNode.parentNode),t.addClass("ruby")}),o.each("ol[start]",function(e){e.style.counterReset="counter "+parseInt(e.attr("start")-1)}),o.each(".md table",function(e){e.wrap({className:"table-container"})}),o.each(".highlight",function(e){let t=document.createElement("figcaption"),n=e.querySelector("pre code[data-lang]").getAttribute("data-lang");t.setAttribute("data-lang",n),e.prepend(t)}),o.each(".chroma",function(e){e.className="chroma code-container"}),o.each("div.highlight",function(e){var t=e.child(".code-container"),a=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var n=e.child(".copy-btn");LOCAL.nocopy?n.remove():(n.addEventListener("click",function(C){var b=C.currentTarget,O="",i="";t.find(".cl").forEach(function(r){i+=O+r.innerText,O=`
`}),we(i,function(r){b.child(".ic").className=r?"ic i-check":"ic i-times",b.blur(),ie(LOCAL.copyright)})}),n.addEventListener("mouseleave",function(C){setTimeout(function(){C.target.child(".ic").className="ic i-clipboard"},1e3)}));var s=e.child(".breakline-btn");s.addEventListener("click",function(C){var b=C.currentTarget;e.hasClass("breakline")?(e.removeClass("breakline"),b.child(".ic").className="ic i-align-left"):(e.addClass("breakline"),b.child(".ic").className="ic i-align-justify")});var l=e.child(".fullscreen-btn"),d=function(){e.removeClass("fullscreen"),e.scrollTop=0,H.removeClass("fullscreen"),l.child(".ic").className="ic i-expand"},g=function(C){var b=C.currentTarget;e.hasClass("fullscreen")?(d(),p&&p(),N(e)):(e.addClass("fullscreen"),H.addClass("fullscreen"),l.child(".ic").className="ic i-compress",f&&f())};if(l.addEventListener("click",g),a&&a.addEventListener("click",g),t&&t.find(".line").length>15){t.style.maxHeight="300px",t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var v=t.child(".show-btn"),f=function(){t.style.maxHeight="",v.addClass("open")},p=function(){t.style.maxHeight="300px",v.removeClass("open")};v.addEventListener("click",function(C){v.hasClass("open")?(d(),p(),N(t)):f()})}}),o.each("pre.mermaid > svg",function(e){e.style.maxWidth=""}),o.each(".reward button",function(e){e.addEventListener("click",function(t){t.preventDefault();var a=o("#qr");a.display()==="inline-flex"?T(a,0):T(a,1,function(){a.display("inline-flex")})})}),o.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){e.hasClass("correct")?(e.toggleClass("right"),e.parentNode.parentNode.addClass("show")):e.toggleClass("wrong")})}),o.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})}),o.each(".quiz > p:first-child",function(e){var t=e.parentNode,a="choice";(t.hasClass("true")||t.hasClass("false"))&&(a="true_false"),t.hasClass("multi")&&(a="multiple"),t.hasClass("fill")&&(a="gap_fill"),t.hasClass("essay")&&(a="essay"),e.attr("data-type",LOCAL.quiz[a])}),o.each(".quiz .mistake",function(e){e.attr("data-type",LOCAL.quiz.mistake)}),o.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]}),o.each(".md div.player",function(e){Te(e,{type:e.attr("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(e.attr("data-src"))).fetch()}))},Ee=function(){var e;o.each("div.tab",function(t,a){if(!t.attr("data-ready")){var n=t.attr("data-id"),s=t.attr("data-title"),l=o("#"+n);if(l)e=!1;else{l=document.createElement("div"),l.className="tabs",l.id=n,l.innerHTML='<div class="show-btn"></div>';var d=l.child(".show-btn");d.addEventListener("click",function(f){N(l)}),t.parentNode.insertBefore(l,t),e=!0}var g=l.child(".nav ul");g||(g=l.createChild("div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul"));var v=g.createChild("li",{innerHTML:s});e&&(v.addClass("active"),t.addClass("active")),v.addEventListener("click",function(f){var p=f.currentTarget;l.find(".active").forEach(function(C){C.removeClass("active")}),t.addClass("active"),p.addClass("active")}),l.appendChild(t),t.attr("data-ready",!0)}})},$e=function(){var e=o("#comments");if(e)J.display("");else{J.display("none");return}if(!window.IntersectionObserver)G("waline");else{var t=new IntersectionObserver(function(a,n){var s=a[0];G("waline"),(s.isIntersecting||s.intersectionRatio>0)&&(T(o("#comments"),"bounceUpIn"),n.disconnect())});t.observe(e)}},Je=function(e){if(CONFIG.search===null)return;F||(F=H.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'}));var t=instantsearch({indexName:CONFIG.search.indexName,searchClient:algoliasearch(CONFIG.search.appID,CONFIG.search.apiKey),searchFunction:function(n){var s=o(".search-input");s.value&&n.search()}});t.on("render",function(){e.refresh(o("#search-hits"))}),t.addWidgets([instantsearch.widgets.configure({hitsPerPage:CONFIG.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(n){var s=LOCAL.search.stats.replace(/\$\{hits}/,n.nbHits).replace(/\$\{time}/,n.processingTimeMS);return s+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(n){var s=n.categories?"<span>"+n.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+n.path+'">'+s+n._highlightResult.title.value+"</a>"},empty:function(n){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,n.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:!1,showFirst:!1,showLast:!1,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]),t.start(),o.each(".search",function(n){n.addEventListener("click",function(){document.body.style.overflow="hidden",T(F,"shrinkIn",function(){o(".search-input").focus()})})});let a=function(){document.body.style.overflow="",T(F,0)};F.addEventListener("click",function(n){n.target===F&&a()}),o(".close-btn").addEventListener("click",a),window.addEventListener("pjax:success",a),window.addEventListener("keyup",function(n){n.key==="Escape"&&a()})},Qe=function(){o.each(".overview .menu > .item",function(e){S.child(".menu").appendChild(e.cloneNode(!0))}),X.addEventListener("click",j.vanish),$.addEventListener("click",z),o(".dimmer").addEventListener("click",z),se.child(".down").addEventListener("click",tt),se.child(".up").addEventListener("click",ve),A||(A=me.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),Y=A.child(".player"),te=A.child(".back-to-top"),J=A.child(".chat"),Q=A.child(".contents"),te.addEventListener("click",ve),J.addEventListener("click",at),Q.addEventListener("click",z),Te(Y),o("main").addEventListener("click",function(){Y.player.mini()})},Ve=function(){Ce(),y.hasClass("on")&&T(y,function(){y.removeClass("on"),$.removeClass("close")}),o("#main").innerHTML="",o("#main").appendChild(X.lastChild.cloneNode(!0)),N(0)},pe=function(e){q=0,V=window.location.href,G("katex"),U("copy_tex"),G("mermaid"),U("chart"),U("waline",function(){var t=Object.assign({},CONFIG.waline);t=Object.assign(t,LOCAL.waline||{}),t.el="#comments",t.pathname=LOCAL.path,t.pjax=ne,t.lazyload=le,t.dark='html[data-theme="dark"]',t.copyright=!0;try{document.getElementById("comments")&&Waline.init(t)}catch(a){console.log(a)}Waline.RecentComments({serverURL:t.serverURL,count:10}).then(({comments:a})=>{document.getElementById("waline-recent").innerHTML=a.map(n=>`<li class="item"><a href="${n.url}">
          <span class="breadcrumb">${n.nick}</span>
          <span>${n.comment}</span>
          </a></li>`)}),setTimeout(function(){ue(1),Ne(".v")},1e3)},window.Waline),e||o.each("script[data-pjax]",st),B=document.title,be(),nt(),Ze(),et(),Ue(),Xe(),Ee(),Y.player.load(LOCAL.audio||CONFIG.audio||{}),j.hide(),setTimeout(function(){ue()},500),ze(),le.observe()},Ke=function(){Qe(),ne=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:!1,cacheBust:!1}),CONFIG.quicklink.ignores=LOCAL.ignores,quicklink.listen(CONFIG.quicklink),Fe(),je(),Je(ne),window.addEventListener("scroll",Pe),window.addEventListener("resize",be),window.addEventListener("pjax:send",Ve),window.addEventListener("pjax:success",pe),window.addEventListener("beforeunload",function(){Ce()}),pe(1)};window.addEventListener("DOMContentLoaded",Ke);console.log("%c Theme.Shoka %chttps://birdgg.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");var _=null,Z=/mobile/i.test(window.navigator.userAgent),Te=function(e,t){var a={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause":function(i){s.paused?e.player.play():e.player.pause()},music:function(i){l.el.hasClass("show")?l.hide():(l.el.addClass("show"),d.scroll().title())}}},n={random:function(i){return Math.floor(Math.random()*i)},parse:function(i){var r=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(c){var u=new RegExp(c[0]),h=u.exec(i);h!==null&&(r=[c[1],c[2],h[1]])}),r},fetch:function(i){var r=[];return new Promise(function(c,u){i.forEach(function(h){var m=n.parse(h);if(m[0]){var w=JSON.stringify(m),E=x.get(w);E?(r.push.apply(r,JSON.parse(E)),c(r)):fetch("https://api.i-meto.com/meting/api?server="+m[0]+"&type="+m[1]+"&id="+m[2]+"&r="+Math.random()).then(function(L){return L.json()}).then(function(L){x.set(w,JSON.stringify(L)),r.push.apply(r,L),c(r)}).catch(function(L){})}else r.push(h),c(r)})})},secondToTime:function(i){var r=function(m){return isNaN(m)?"00":m<10?"0"+m:""+m},c=Math.floor(i/3600),u=Math.floor((i-c*3600)/60),h=Math.floor(i-c*3600-u*60);return(c>0?[c,u,h]:[u,h]).map(r).join(":")},nameMap:{dragStart:Z?"touchstart":"mousedown",dragMove:Z?"touchmove":"mousemove",dragEnd:Z?"touchend":"mouseup"}},s=null;e.player={_id:n.random(999999),group:!0,load:function(i){var r="",c=this;i&&i.length>0?this.options.rawList!==i&&(this.options.rawList=i,d.clear()):(r="none",this.pause());for(var u in b.el)b.el[u].display(r);return this},fetch:function(){var i=this;return new Promise(function(r,c){if(d.data.length>0)r();else if(i.options.rawList){var u=[];i.options.rawList.forEach(function(h,m){u.push(new Promise(function(w,E){var L=m,I;h.list?(i.group=!0,I=h.list):(L=0,i.group=!1,I=[h]),n.fetch(I).then(function(K){d.add(L,K),w()})}))}),Promise.all(u).then(function(){r(!0)})}}).then(function(r){r&&(d.create(),p.create(),i.mode())})},mode:function(){var i=d.data.length;if(!(!i||d.errnum==i)){var r=p.step=="next"?1:-1,c=function(){var h=d.index+r;(h>i||h<0)&&(h=p.step=="next"?0:i-1),d.index=h},u=function(){var h=n.random(i);d.index!==h?d.index=h:c()};switch(this.options.mode){case"random":u();break;case"order":c();break;case"loop":p.step&&c(),d.index==-1&&u();break}this.init()}},switch:function(i){typeof i=="number"&&i!=d.index&&d.current()&&!d.current().error&&(d.index=i,this.init())},init:function(){var i=d.current();if(!i||i.error){this.mode();return}var r=!1;s.paused||(r=!0,this.stop()),s.attr("src",i.url),s.attr("title",i.name+" - "+i.artist),this.volume(x.get("_PlayerVolume")||"0.7"),this.muted(x.get("_PlayerMuted")),f.create(),this.options.type=="audio"&&v.create(),r==!0&&this.play()},play:function(){if(_&&_.player.pause(),d.current().error){this.mode();return}var i=this;s.play().then(function(){d.scroll()}).catch(function(r){})},pause:function(){s.pause(),document.title=B},stop:function(){s.pause(),s.currentTime=0,document.title=B},seek:function(i){i=Math.max(i,0),i=Math.min(i,s.duration),s.currentTime=i,f.update(i/s.duration)},muted:function(i){i=="muted"?(s.muted=i,x.set("_PlayerMuted",i),p.update(0)):(x.del("_PlayerMuted"),s.muted=!1,p.update(s.volume))},volume:function(i){isNaN(i)||(p.update(i),x.set("_PlayerVolume",i),s.volume=i)},mini:function(){l.hide()}};var l={el:null,create:function(){this.el||(this.el=e.createChild("div",{className:"player-info",innerHTML:(e.player.options.type=="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),v.el=this.el.child(".preview"),d.el=this.el.child(".playlist"),p.el=this.el.child(".controller"))},hide:function(){var i=this.el;i.addClass("hide"),window.setTimeout(function(){i.removeClass("show hide")},300)}},d={el:null,data:[],index:-1,errnum:0,add:function(i,r){var c=this;r.forEach(function(u,h){u.group=i,u.name=u.name||u.title||"Meida name",u.artist=u.artist||u.author||"Anonymous",u.cover=u.cover||u.pic,u.type=u.type||"normal",c.data.push(u)})},clear:function(){this.data=[],this.el.innerHTML="",this.index!==-1&&(this.index=-1,e.player.fetch())},create:function(){var i=this.el;this.data.map(function(r,c){if(!r.el){var u="list-"+e.player._id+"-"+r.group,h=o("#"+u);return h||(h=i.createChild("div",{id:u,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"}),e.player.group&&h.attr("data-title",e.player.options.rawList[r.group].title).attr("data-id",e.player._id)),r.el=h.child("ol").createChild("li",{title:r.name+" - "+r.artist,innerHTML:'<span class="info"><span>'+r.name+"</span><span>"+r.artist+"</span></span>",onclick:function(m){var w=m.currentTarget;if(d.index===c&&f.el){s.paused?e.player.play():e.player.seek(s.duration*f.percent(m,w));return}e.player.switch(c),e.player.play()}}),r}}),Ee()},current:function(){return this.data[this.index]},scroll:function(){var i=this.current(),r=this.el.child("li.active");r&&r.removeClass("active");var c=this.el.child(".tab.active");return c&&c.removeClass("active"),r=this.el.find(".nav li")[i.group],r&&r.addClass("active"),c=this.el.find(".tab")[i.group],c&&c.addClass("active"),N(i.el,i.el.offsetTop),this},title:function(){if(!s.paused){var i=this.current();document.title="Now Playing..."+i.name+" - "+i.artist+" | "+B}},error:function(){var i=this.current();i.el.removeClass("current").addClass("error"),i.error=!0,this.errnum++}},g={el:null,data:null,index:0,create:function(i){var r=d.index,c=this,u=d.current().lrc,h=function(m){if(r===d.index){c.data=c.parse(m);var w="";c.data.forEach(function(E,L){w+="<p"+(L===0?' class="current"':"")+">"+E[1]+"</p>"}),c.el=i.createChild("div",{className:"inner",innerHTML:w},"replace"),c.index=0}};u.startsWith("http")?this.fetch(u,h):h(u)},update:function(i){if(!!this.data&&(this.index>this.data.length-1||i<this.data[this.index][0]||!this.data[this.index+1]||i>=this.data[this.index+1][0])){for(var r=0;r<this.data.length;r++)if(i>=this.data[r][0]&&(!this.data[r+1]||i<this.data[r+1][0])){this.index=r;var c=-(this.index-1);this.el.style.transform="translateY("+c+"rem)",this.el.style.webkitTransform="translateY("+c+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[r].addClass("current")}}},parse:function(i){if(i){i=i.replace(/([^\]^\n])\[/g,function(w,E){return E+`
[`});let h=i.split(`
`);var r=[];let m=h.length;for(var c=0;c<m;c++){let w=h[c].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),E=h[c].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(w){let L=w.length;for(var u=0;u<L;u++){let I=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(w[u]),K=I[1]*60,Me=parseInt(I[2]),Ie=I[4]?parseInt(I[4])/((I[4]+"").length===2?100:1e3):0,He=K+Me+Ie;r.push([He,E])}}}return r=r.filter(function(w){return w[1]}),r.sort(function(w,E){return w[0]-E[0]}),r}else return[]},fetch:function(i,r){fetch(i).then(function(c){return c.text()}).then(function(c){r(c)}).catch(function(c){})}},v={el:null,create:function(){var i=d.current();this.el.innerHTML='<div class="cover"><div class="disc"><img src="'+i.cover+'" class="blur" /></div></div><div class="info"><h4 class="title">'+i.name+"</h4><span>"+i.artist+'</span><div class="lrc"></div></div>',this.el.child(".cover").addEventListener("click",e.player.options.events["play-pause"]),g.create(this.el.child(".lrc"))}},f={el:null,bar:null,create:function(){var i=d.current().el;i&&(this.el&&(this.el.parentNode.removeClass("current").removeEventListener(n.nameMap.dragStart,this.drag),this.el.remove()),this.el=i.createChild("div",{className:"progress"}),this.el.attr("data-dtime",n.secondToTime(0)),this.bar=this.el.createChild("div",{className:"bar"}),i.addClass("current"),i.addEventListener(n.nameMap.dragStart,this.drag),d.scroll())},update:function(i){this.bar.width(Math.floor(i*100)+"%"),this.el.attr("data-ptime",n.secondToTime(i*s.duration))},seeking:function(i){i?this.el.addClass("seeking"):this.el.removeClass("seeking")},percent:function(i,r){var c=((i.clientX||i.changedTouches[0].clientX)-r.left())/r.width();return c=Math.max(c,0),Math.min(c,1)},drag:function(i){i.preventDefault();var r=d.current().el,c=function(h){h.preventDefault();var m=f.percent(h,r);f.update(m),g.update(m*s.duration)},u=function(h){h.preventDefault(),r.removeEventListener(n.nameMap.dragEnd,u),r.removeEventListener(n.nameMap.dragMove,c);var m=f.percent(h,r);f.update(m),e.player.seek(m*s.duration),s.disableTimeupdate=!1,f.seeking(!1)};s.disableTimeupdate=!0,f.seeking(!0),r.addEventListener(n.nameMap.dragMove,c),r.addEventListener(n.nameMap.dragEnd,u)}},p={el:null,btns:{},step:"next",create:function(){if(!!e.player.options.controls){var i=this;e.player.options.controls.forEach(function(r){if(!i.btns[r]){var c={onclick:function(u){i.events[r]?i.events[r](u):e.player.options.events[r](u)}};switch(r){case"volume":c.className=" "+(s.muted?"off":"on"),c.innerHTML='<div class="bar"></div>',c["on"+n.nameMap.dragStart]=i.events.volume,c.onclick=null;break;case"mode":c.className=" "+e.player.options.mode;break;default:c.className="";break}c.className=r+c.className+" btn",i.btns[r]=i.el.createChild("div",c)}}),i.btns.volume.bar=i.btns.volume.child(".bar")}},events:{mode:function(i){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}p.btns.mode.className="mode "+e.player.options.mode+" btn",x.set("_PlayerMode",e.player.options.mode)},volume:function(i){i.preventDefault();var r=i.currentTarget,c=!1,u=function(m){m.preventDefault(),e.player.volume(p.percent(m,r)),c=!0},h=function(m){m.preventDefault(),r.removeEventListener(n.nameMap.dragEnd,h),r.removeEventListener(n.nameMap.dragMove,u),c?(e.player.muted(),e.player.volume(p.percent(m,r))):s.muted?(e.player.muted(),e.player.volume(s.volume)):(e.player.muted("muted"),p.update(0))};r.addEventListener(n.nameMap.dragMove,u),r.addEventListener(n.nameMap.dragEnd,h)},backward:function(i){p.step="prev",e.player.mode()},forward:function(i){p.step="next",e.player.mode()}},update:function(i){p.btns.volume.className="volume "+(!s.muted&&i>0?"on":"off")+" btn",p.btns.volume.bar.width(Math.floor(i*100)+"%")},percent:function(i,r){var c=((i.clientX||i.changedTouches[0].clientX)-r.left())/r.width();return c=Math.max(c,0),Math.min(c,1)}},C={onerror:function(){d.error(),e.player.mode()},ondurationchange:function(){s.duration!==1&&f.el.attr("data-dtime",n.secondToTime(s.duration))},onloadedmetadata:function(){e.player.seek(0),f.el.attr("data-dtime",n.secondToTime(s.duration))},onplay:function(){e.parentNode.addClass("playing"),ie(this.attr("title")),_=e},onpause:function(){e.parentNode.removeClass("playing"),_=null},ontimeupdate:function(){this.disableTimeupdate||(f.update(this.currentTime/this.duration),g.update(this.currentTime))},onended:function(i){e.player.mode(),e.player.play()}},b={el:{},create:function(){if(!!e.player.options.btns){var i=this;e.player.options.btns.forEach(function(r){i.el[r]||(i.el[r]=e.createChild("div",{className:r+" btn",onclick:function(c){e.player.fetch().then(function(){e.player.options.events[r](c)})}}))})}}},O=function(i){e.player.created||(e.player.options=Object.assign(a,i),e.player.options.mode=x.get("_PlayerMode")||e.player.options.mode,b.create(),s=e.createChild(e.player.options.type,C),l.create(),e.parentNode.addClass(e.player.options.type),e.player.created=!0)};return O(t),e},z=function(e,t){y.hasClass("on")?(y.removeClass("on"),$.removeClass("close"),t?y.style="":T(y,"slideRightOut")):t?y.style="":T(y,"slideRightIn",function(){y.addClass("on"),$.addClass("close")})},Ze=function(){var e=y.child(".inner");y.child(".tab")&&e.removeChild(y.child(".tab"));var t=document.createElement("ul"),a="active";t.className="tab",["contents","related","overview"].forEach(function(n){var s=y.child(".panel."+n);if(s.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){n=="contents"&&Q.display("none");return}n=="contents"&&Q.display("");var l=document.createElement("li"),d=document.createElement("span"),g=document.createTextNode(s.attr("data-title"));d.appendChild(g),l.appendChild(d),l.addClass(n+" item"),a?(s.addClass(a),l.addClass(a)):s.removeClass("active"),l.addEventListener("click",function(v){var f=event.currentTarget;f.hasClass("active")||(y.find(".tab .item").forEach(function(p){p.removeClass("active")}),y.find(".panel").forEach(function(p){p.removeClass("active")}),y.child(".panel."+f.className.replace(" item","")).addClass("active"),f.addClass("active"))}),t.appendChild(l),a=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),y.child(".panels").style.paddingTop=""):y.child(".panels").style.paddingTop=".625rem"},et=function(){var e=o.all(".contents li");if(!(e.length<1)){var t=Array.prototype.slice.call(e)||[],a=null;t=t.map(function(g,v){var f=g.child("a.toc-link"),p=o(decodeURI(f.attr("href")));if(!!p){var C=p.child("a.anchor"),b=function(O){O.preventDefault();var i=o(decodeURI(O.currentTarget.attr("href")));a=v,N(i,null,function(){s(v),a=null})};return f.addEventListener("click",b),C&&C.addEventListener("click",function(O){b(O),we(CONFIG.hostname+"/"+LOCAL.path+O.currentTarget.attr("href"))}),p}});var n=y.child(".contents.panel"),s=function(g,v){var f=e[g];if(!!f&&!f.hasClass("current")){o.each(".toc .active",function(b){b&&b.removeClass("active current")}),t.forEach(function(b){b&&b.removeClass("active")}),f.addClass("active current"),t[g]&&t[g].addClass("active");for(var p=f.parentNode;!p.matches(".contents");){if(p.matches("li")){p.addClass("active");var C=o(p.child("a.toc-link").attr("href"));C&&C.addClass("active")}p=p.parentNode}getComputedStyle(y).display!="none"&&n.hasClass("active")&&N(n,f.offsetTop-n.offsetHeight/4)}},l=function(g){var v=0,f=g[v];if(f.boundingClientRect.top>0)return v=t.indexOf(f.target),v===0?0:v-1;for(;v<g.length;v++)if(g[v].boundingClientRect.top<=0)f=g[v];else return t.indexOf(f.target);return t.indexOf(f.target)},d=function(){if(!!window.IntersectionObserver){var g=new IntersectionObserver(function(v,f){var p=l(v)+(W<0?1:0);a===null&&s(p)},{rootMargin:"0px 0px -100% 0px",threshold:0});t.forEach(function(v){v&&g.observe(v)})}};d()}},ve=function(){N(0)},tt=function(){N(parseInt(Se.height()))},at=function(){N(o("#comments"))},nt=function(){o.each(".menu .item:not(.title)",function(e){var t=e.child("a[href]"),a=e.parentNode.parentNode;if(!!t){var n=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),s=!CONFIG.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),l=t.hostname===location.hostname&&(n||s);e.toggleClass("active",l),e.parentNode.child(".active")&&a.hasClass("dropdown")?a.removeClass("active").addClass("expand"):a.removeClass("expand")}})};var it=function(){return o("main > .inner").offsetHeight},rt=function(e,t,a){if(a)t();else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(s,l){(l||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n=void 0,!l&&t&&setTimeout(t,0))},n.src=e,document.head.appendChild(n)}},Oe=function(e,t){var a=CONFIG[e][t];return a.indexOf("npm")>-1||a.indexOf("gh")>-1||a.indexOf("combine")>-1?"//cdn.jsdelivr.net/"+a:a.indexOf("http")>-1?a:D+a},U=function(e,t,a){LOCAL[e]&&rt(Oe("js",e),t||function(){window[e]=!0},a||window[e])},G=function(e,t){window["css"+e]||LOCAL[e]&&(document.head.createChild("link",{rel:"stylesheet",href:Oe("css",e)}),window["css"+e]=!0)},st=function(e){var t=e.text||e.textContent||e.innerHTML||"",a=e.parentNode;a.removeChild(e);var n=document.createElement("script");e.id&&(n.id=e.id),e.className&&(n.className=e.className),e.type&&(n.type=e.type),e.src&&(n.src=e.src,n.async=!1),e.dataset.pjax!==void 0&&(n.dataset.pjax=""),t!==""&&n.appendChild(document.createTextNode(t)),a.appendChild(n)},N=function(e,t,a){var n={targets:typeof t=="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof e=="number"?e:e?e.top()+document.documentElement.scrollTop-ge:0),complete:function(){a&&a()}};anime(n)},T=function(e,t,a){var n={},s="none";switch(t){case 0:n={opacity:[1,0]};break;case 1:n={opacity:[0,1]},s="block";break;case"bounceUpIn":n={begin:function(l){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},s="block";break;case"shrinkIn":n={begin:function(l){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},s="block";break;case"slideRightIn":n={begin:function(l){e.display("block")},translateX:[100,0],opacity:[0,1]},s="block";break;case"slideRightOut":n={translateX:[0,100],opacity:[1,0]};break;default:n=t,s=t.display;break}anime(Object.assign({targets:e,duration:200,easing:"linear"},n)).finished.then(function(){e.display(s),a&&a()})},x={get:function(e){return localStorage.getItem(e)},set:function(e,t){return localStorage.setItem(e,t),t},del:function(e){localStorage.removeItem(e)}};})();
