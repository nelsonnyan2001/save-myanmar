_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/eHF":function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function s(e,t){var i=t.distance,n=t.left,s=t.right,o=t.up,r=t.down,a=t.top,c=t.bottom,h=t.big,d=t.mirror,p=t.opposite,b=(i?i.toString():0)+((n?1:0)|(s?2:0)|(a||r?4:0)|(c||o?8:0)|(d?16:0)|(p?32:0)|(e?64:0)|(h?128:0));if(u.hasOwnProperty(b))return u[b];var f=n||s||o||r||a||c,m=void 0,j=void 0;if(f){if(!d!=!(e&&p)){var v=[s,n,c,a,r,o];n=v[0],s=v[1],a=v[2],c=v[3],o=v[4],r=v[5]}var y=i||(h?"2000px":"100%");m=n?"-"+y:s?y:"0",j=r||a?"-"+y:o||c?y:"0"}return u[b]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+m+", "+j+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[b]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,o=(e.out,e.forever),r=e.timeout,a=e.duration,c=void 0===a?l.defaults.duration:a,d=e.delay,u=void 0===d?l.defaults.delay:d,p=e.count,b=void 0===p?l.defaults.count:p,f=n(e,["children","out","forever","timeout","duration","delay","count"]),m={make:s,duration:void 0===r?c:r,delay:u,forever:o,count:b,style:{animationFillMode:"both"},reverse:f.left};return t?(0,h.default)(f,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var r,a=i("17x9"),l=i("ar19"),c=i("eH+L"),h=(r=c)&&r.__esModule?r:{default:r},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},u={};o.propTypes=d,t.default=o,e.exports=t.default},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,s=!1,o=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){s=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(s)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i("q1tI"),c=(n=l)&&n.__esModule?n:{default:n},h=i("17x9"),d=i("ar19"),u=(0,h.shape)({make:h.func,duration:h.number.isRequired,delay:h.number.isRequired,forever:h.bool,count:h.number.isRequired,style:h.object.isRequired,reverse:h.bool}),p={collapse:h.bool,collapseEl:h.element,cascade:h.bool,wait:h.number,force:h.bool,disabled:h.bool,appear:h.bool,enter:h.bool,exit:h.bool,fraction:h.number,refProp:h.string,innerRef:h.func,onReveal:h.func,unmountOnExit:h.bool,mountOnEnter:h.bool,inEffect:u.isRequired,outEffect:(0,h.oneOfType)([u,(0,h.oneOf)([!1])]).isRequired,ssrReveal:h.bool,collapseOnly:h.bool,ssrFadeout:h.bool},b={transitionGroup:h.object},f=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,d.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,s=i.forever,o=i.count,r=i.delay,a=i.duration;if(!s){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),r+(a+(t?a:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),s=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=i.duration/3,r=i.delay;else{var a=n>>2,l=a>>1;o=a,r=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:s,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,s=void 0;e.collapseOnly?s={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),s={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(s,e,i):s),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,a=n.reverse,l=i.length,h=2*o;this.props.collapse&&(h=parseInt(this.state.style.animationDuration,10),o=h/2);var u=a?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":s(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(a?u--:u++,0,l,o,h))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===s(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,s=n.style,o=n.className,a=n.children,l=this.props.disabled?o:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,h=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(i=this.cascade(a),h=r({},s,{opacity:1})):h=this.props.disabled?s:r({},s,this.state.style);var u=r({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:h},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,u,e?i||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),s=Math.min(i,window.innerHeight)*(d.globalHide?e.fraction:0);return n>s-window.innerHeight&&n<i-s}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);f.propTypes=p,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=b,f.displayName="RevealBase",t.default=f,e.exports=t.default},IS2Y:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return b}));var n=i("nKUr"),s=i("q1tI"),o=i("M6GT"),r=i.n(o),a=i("/eHF"),l=i.n(a),c=i("fEsP"),h=i.n(c);function d(){var e=Object(s.useState)(!1),t=e[0],i=e[1];return Object(n.jsxs)("div",{className:h.a.globals,children:[Object(n.jsxs)("div",{className:h.a.title,onClick:function(){return i(!t)},children:[Object(n.jsx)("h2",{children:"1st February 2021"}),Object(n.jsx)("h2",{style:{transform:t?"rotate(180deg)":null},children:"\u2193"})]}),Object(n.jsxs)("div",{className:h.a.timelineHolder,style:{height:t?null:"0"},children:[Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"4:00 a.m."}),Object(n.jsxs)("p",{children:["The democratically elected party leader and state counsellor Aung San Suu Kyi gets detained.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"One by one, government officials and politicians follow."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"6:30 a.m."}),Object(n.jsxs)("p",{children:['"The phone lines have been cut."',Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),'"Wi-fi and mobile data will probably follow soon."',Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Talk of a coup had been going on for several days now. Realizing our fears had been affirmed, most of the population set out to buy rations for the upcoming weeks."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"8:00 a.m. - 3 p.m."}),Object(n.jsxs)("p",{children:["For a couple hours, the entire country started lost access to the internet.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"It lasted 2 or 3 hours for some people, and over half a day for others.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Most TV channels no longer work. The ones that work are all military-owned."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"3 p.m."}),Object(n.jsxs)("p",{children:["Unrest begins.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"People take to Facebook, Instagram, Twitter and Reddit. We bring what we have to see what we can do.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We receive news that the military rule will go on for a year."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"8 p.m."}),Object(n.jsxs)("p",{children:["For most of us, the realization has set in.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"The realization things probably will not go back to the things they were. Not for a while",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"The realization that we cannot let history repeat.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We go to sleep amid rumors of all network connections being gone tomorrow."]})]})]})]})}function u(){var e=Object(s.useState)(!1),t=e[0],i=e[1];return Object(n.jsxs)("div",{className:h.a.globals,children:[Object(n.jsxs)("div",{className:h.a.title,onClick:function(){return i(!t)},children:[Object(n.jsx)("h2",{children:"2nd February 2021"}),Object(n.jsx)("h2",{style:{transform:t?"rotate(180deg)":null},children:"\u2193"})]}),Object(n.jsxs)("div",{className:h.a.timelineHolder,style:{height:t?null:"0"},children:[Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"6:00 a.m."}),Object(n.jsxs)("p",{children:["Thankfully, our network connections haven't been cut off.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Work returns to normal for some of us. Others reach out to friends and family, checking in and making sure everything is fine.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Yet others continue the fight on social media."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"9:00 a.m."}),Object(n.jsxs)("p",{children:["CIVIL DISOBEDIENCE",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We will not protest on the streets. We will not provide an excuse for an actual military takeover.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Instead, we will protest the safest way we know how - everyday business will NOT resume until the detained military members are released."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"3:00 p.m."}),Object(n.jsxs)("p",{children:['"Flights from Myanmar International Airport will be closed until 30th May 2021."',Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"To some of us, this means nothing. To others, it is the end of any hopes we had of studying, working or meeting people we love abroad.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"There are plans for the country to rally behind a peaceful protest at 8 o'clock tonight."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"8:00 p.m."}),Object(n.jsxs)("p",{children:["The fateful banging of the pots and pans.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"There's a belief in Myanmar, where we'll bang pots and pans, honk cars and cause a lot of nuisance in general.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We believe it drives away evil.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We hope it drives away evil.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We hope."]})]})]})]})}function p(){var e=Object(s.useState)(!1),t=e[0],i=e[1];return Object(n.jsxs)("div",{className:h.a.globals,children:[Object(n.jsxs)("div",{className:h.a.title,onClick:function(){return i(!t)},children:[Object(n.jsx)("h2",{children:"3rd February 2021"}),Object(n.jsx)("h2",{style:{transform:t?"rotate(180deg)":null},children:"\u2193"})]}),Object(n.jsxs)("div",{className:h.a.timelineHolder,style:{height:t?null:"0"},children:[Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"7:00 a.m."}),Object(n.jsxs)("p",{children:["Day 3.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Day 3 of hoping something changes.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Day 3 of being worried about repeating history.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Day 3 of a military rule."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"9:00 a.m."}),Object(n.jsxs)("p",{children:['It\'s funny, reading comments online. Governments express their "condemnations". Celebrities express their "concern".',Object(n.jsx)("br",{}),Object(n.jsx)("br",{})," At the same time, there's equally as many people criticizing the country. Criticizing our leaders, speaking as if they knew better than the people that live here.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"A ping-pong match between people that don't live here, that have never experienced the horrors of absolute military rule."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"11:00 a.m."}),Object(n.jsxs)("p",{children:["Doctors have carried the torch and ran with the flame of civil disobedience.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We hope as many people as possible will follow suit, soon.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Fake news runs amok among us, with a new rumor whispering fear in our ears every other hour."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"6:00 p.m."}),Object(n.jsxs)("p",{children:["You're not allowed to detain a person for longer than 72 hours with no legal precedence.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Guess what?",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Daw Aung San Suu Kyi gets arrested for possession of an unlicensed walkie talkie.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"We hope."]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(l.a,{bottom:!0,children:[Object(n.jsx)("h3",{className:h.a.time,children:"8:00 p.m."}),Object(n.jsxs)("p",{children:["The sound of pots and pans being banged together by a tired population rings throughout the streets.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),'We sing a song in defiance. Called "Kabar Ma Kyay", it\'s a play on words on the national anthem.',Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"The noise goes on for noticeably longer than yesterday."]})]})]})]})}function b(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:r.a.timelineFlex,children:[Object(n.jsx)("div",{className:r.a.backButton,onClick:function(){return router.push("/")},children:"\u2190"}),Object(n.jsxs)("div",{className:"mw-1440",children:[Object(n.jsx)("h2",{className:r.a.mainTitle,children:"What has been happening?"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(d,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(u,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(p,{}),Object(n.jsx)("hr",{})]})]})})}},M6GT:function(e,t,i){e.exports={timelineFlex:"Timeline_timelineFlex__onEI-",mainTitle:"Timeline_mainTitle__8PFa1",backButton:"Timeline_backButton__3LWZm"}},Qetd:function(e,t,i){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},Vpi5:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return i("IS2Y")}])},ar19:function(e,t,i){"use strict";function n(e){try{return b.insertRule(e,b.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function s(){h||(t.globalHide=h=!0,window.removeEventListener("scroll",s,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",s,!0),window.document.removeEventListener("visibilitychange",s))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,s){var o=Math.log(n),r=(Math.log(s)-o)/(i-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!b)return"";var t="@keyframes "+(f+u)+"{"+e+"}",i=p[e];return i?""+f+i:(b.insertRule(t,b.cssRules.length),p[e]=u,""+f+u++)},t.hideAll=s,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},h=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),u=1,p={},b=!1,f=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),a||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(b=m.sheet,window.addEventListener("scroll",s,!0),window.addEventListener("orientationchange",s,!0),window.document.addEventListener("visibilitychange",s))}},"eH+L":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(r.default,s({},e,{inEffect:t,outEffect:i,children:n})):(n=o.default.Children.map(n,(function(n){return o.default.createElement(r.default,s({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(i("q1tI")),r=n(i("28nh"));e.exports=t.default},fEsP:function(e,t,i){e.exports={globals:"Timeline_globals__3I9wB",title:"Timeline_title__3KF57",timelineHolder:"Timeline_timelineHolder__3z9gJ",separator:"Timeline_separator__9W_HX",time:"Timeline_time__sOn-N"}}},[["Vpi5",0,1]]]);