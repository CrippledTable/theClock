(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/uAk":function(e,t,n){e.exports={gearRotationLayer:"gearRotationLayer-module--gearRotationLayer--3EoNQ"}},"2sFu":function(e,t,n){},"6/OU":function(e,t,n){e.exports={escapementTop:"escapementTop-module--escapementTop--24PZ8",leftPallet:"escapementTop-module--leftPallet--1o6c9",rightPallet:"escapementTop-module--rightPallet--3kPfa"}},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),p.canUseDOM?t(u):n&&(u=n(u))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}},BDW5:function(e,t,n){e.exports={pendulum:"pendulum-module--pendulum--1Lrah",pendulumShaftOne:"pendulum-module--pendulumShaftOne--2z565",pendulumShaftTwo:"pendulum-module--pendulumShaftTwo--IxqjF",pendulumRod:"pendulum-module--pendulumRod--9xFnn",pendulumBob:"pendulum-module--pendulumBob--11BcS"}},DDXH:function(e,t,n){e.exports={position:"clockHand-module--position--QI8Yp",style:"clockHand-module--style--yjXy6",rotation:"clockHand-module--rotation--36bL5"}},Gq3t:function(e,t,n){e.exports={tooth:"tooth-module--tooth--21s8F"}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},HTJy:function(e,t,n){e.exports={gearCore:"gearCore-module--gearCore--Lytxp"}},Ie8o:function(e,t,n){e.exports={controlPanel:"ui-module--controlPanel--3eNIy"}},LGin:function(e,t,n){e.exports={clockInternals:"clockInternals-module--clockInternals--3em6e"}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),l=r.RegExp,s=l,p=l.prototype,f=/a/g,m=/a/g,d=new l(f)!==f;if(n("nh4g")&&(!d||n("eeVq")((function(){return m[n("K0xU")("match")]=!1,l(f)!=f||l(m)==m||"/a/i"!=l(f,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),a=void 0===t;return!n&&r&&e.constructor===l&&a?e:o(d?new s(r&&!a?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&a?u.call(e):t),n?this:p,l)};for(var h=function(e){e in l||a(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},y=i(s),v=0;y.length>v;)h(y[v++]);p.constructor=l,l.prototype=p,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},R63e:function(e){e.exports=JSON.parse('{"gears":[{"wheelName":"EscapeWheel","numTeeth":30,"top":"5vw","left":"15vw","color":"#777","rotationData":{"initialRotation":0,"rotationMultiple":-1},"pinion":{"numTeeth":10,"color":"#999"},"zIndex":0},{"wheelName":"FourthWheel","numTeeth":30,"top":"5vw","left":"26.3vw","color":"#999","rotationData":{"initialRotation":-4.7,"rotationMultiple":0.33333333333},"zIndex":2},{"wheelName":"SecondHand1","numTeeth":10,"top":"21.2vw","left":"31.5vw","color":"#999","rotationData":{"initialRotation":-4.5,"rotationMultiple":-0.33333333333},"zIndex":0},{"wheelName":"SecondHand2","numTeeth":20,"top":"27.1vw","left":"28.5vw","color":"#999","rotationData":{"initialRotation":15,"rotationMultiple":0.33333333333},"zIndex":0},{"wheelName":"CenterWheel1","numTeeth":80,"top":"-2vw","left":"40vw","color":"#606060","rotationData":{"initialRotation":4,"rotationMultiple":-0.11111111111},"pinion":{"numTeeth":10,"color":"#999"},"zIndex":-2},{"wheelName":"CenterWheel2","numTeeth":50,"top":"21.9vw","left":"43.1vw","color":"#888","rotationData":{"initialRotation":0,"rotationMultiple":0.01388888888},"zIndex":-1}]}')},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return $}));var r=n("q1tI"),o=n.n(r),a=n("Ie8o"),i=n.n(a);n("2sFu");function c(e){return o.a.createElement("div",{className:i.a.controlPanel},o.a.createElement("input",{type:"button",onClick:e.startTime,value:"Start Time",className:"btn btn-secondary"}),o.a.createElement("input",{type:"button",onClick:e.stopTime,value:"Stop Time",className:"btn btn-primary"}))}var u=n("LGin"),l=n.n(u),s=n("6/OU"),p=n.n(s);function f(e){return o.a.createElement("div",{className:p.a.escapementTop},o.a.createElement("div",{className:p.a.leftPallet}),o.a.createElement("div",{className:p.a.rightPallet}))}var m=n("bo20"),d=n.n(m);function h(e){var t,n,r,a=(t=e.time,n=e.deviation,r=e.initialRotation,{transform:"rotate("+(n*(t%2==1?1:-1)+r)+"deg)"});return o.a.createElement("div",{className:d.a.escapementRotation,style:a},e.children)}var y=n("BDW5"),v=n.n(y);function T(e){return o.a.createElement("div",{className:v.a.pendulum},o.a.createElement("div",{className:v.a.pendulumShaftOne}),o.a.createElement("div",{className:v.a.pendulumShaftTwo}),o.a.createElement("div",{className:v.a.pendulumRod},o.a.createElement("div",{className:v.a.pendulumBob})))}var b=n("t9lc"),g=n.n(b);var w=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).tick=n.tick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){this.tick()},a.componentDidUpdate=function(e){this.props.ticking!=e.ticking&&this.props.ticking&&this.tick()},a.tick=function(){this.props.ticking&&(this.props.onTick(),setTimeout(this.tick,1e3))},a.render=function(){var e=this.props.time;return o.a.createElement("div",{className:g.a.escapement},o.a.createElement(h,{time:e,deviation:8,initialRotation:50},o.a.createElement(f,null),o.a.createElement(T,null)))},r}(o.a.Component),E=n("R63e"),O=(n("91GP"),n("ut20")),C=n.n(O);function S(e){var t,n,r=(t=e.top,n=e.left,{top:t,left:n}),a={zIndex:e.zIndex},i=Object.assign({},r,a);return o.a.createElement("div",{className:C.a.gearPosition,style:i},e.children)}var k=n("zWNL"),A=n.n(k);function x(e){var t,n,r=(t=e.numTeeth,{height:(n=(.8*t*2/Math.PI).toFixed(2))+"vw",width:n+"vw"}),a={background:e.color},i=Object.assign({},r,a);return o.a.createElement("div",{className:A.a.gearStyle,style:i},e.children)}var j=n("/uAk"),N=n.n(j);function P(e){var t,n,r,a,i,c=(t=e.time,n=e.numTeeth,r=e.rotationData,a=r.rotationMultiple,i=r.initialRotation,{transform:"rotate("+(360/n*t*a+i)+"deg)"});return o.a.createElement("div",{className:N.a.gearRotationLayer,style:c},e.children)}var I=n("HTJy"),R=n.n(I),L=(n("a1Th"),n("Btvt"),n("Gq3t")),M=n.n(L);function D(e){var t=function(e){var t=[],n=360/e;e/=2;for(var r=180-n,o=0;o<e;o++)t.push(r),r-=n;return t}(e.numTeeth),n={background:e.color},r=t.map((function(e){return o.a.createElement("div",{key:e.toString(),className:M.a.tooth,style:Object.assign({},n,{transform:"rotate("+e+"deg)"})})}));return o.a.createElement("div",null,r)}function B(e){return o.a.createElement("div",{className:R.a.gearCore},o.a.createElement(D,{numTeeth:e.numTeeth,color:e.color}),e.children)}function _(e){var t=e.gearObject,n=e.time;return o.a.createElement(S,{top:t.top,left:t.left,zIndex:t.zIndex},o.a.createElement(x,{numTeeth:t.numTeeth,color:t.color},o.a.createElement(P,{numTeeth:t.numTeeth,rotationData:t.rotationData,time:n},o.a.createElement(B,{numTeeth:t.numTeeth,color:t.color},e.children))))}var q=n("nC17"),H=n.n(q);function F(e){var t=e.pinionObject;return o.a.createElement("div",{className:H.a.pinion},o.a.createElement(x,{numTeeth:t.numTeeth,color:t.color},o.a.createElement(B,{numTeeth:t.numTeeth,color:t.color})))}var z=n("vZ5t"),U=n.n(z);function W(e){var t={height:.01333430555*e.time+25+"vw"},n=Object.assign({},t);return o.a.createElement("div",{className:U.a.container},o.a.createElement("div",{className:U.a.rope,style:n}),o.a.createElement("div",{className:U.a.weightBox},"15kg"))}function K(e){var t={wheelName:"powerGear",numTeeth:50,top:"8.4vw",left:"64.3vw",color:"#747474",rotationData:{initialRotation:0,rotationMultiple:.01388888888},pinion:{numTeeth:30,color:"#aaa"},zIndex:-2},n=t.pinion,r=e.time;return o.a.createElement(S,{top:t.top,left:t.left,zIndex:t.zIndex},o.a.createElement(x,{numTeeth:t.numTeeth,color:t.color},o.a.createElement(P,{numTeeth:t.numTeeth,rotationData:t.rotationData,time:r},o.a.createElement(B,{numTeeth:t.numTeeth,color:t.color},e.children)),o.a.createElement("div",{className:H.a.pinion},o.a.createElement(x,{numTeeth:n.numTeeth,color:n.color})),o.a.createElement(W,{time:r})))}var Y=n("DDXH"),G=n.n(Y);function J(e){var t,n,r=(t=e.time,n=e.timeToRotate,{transform:"rotate("+t*(360/n)+"deg)"}),a={height:e.height},i={top:e.top,left:e.left};return o.a.createElement("div",{className:G.a.position,style:i},o.a.createElement("div",{className:G.a.rotation,style:r},o.a.createElement("div",{className:G.a.style,style:a})))}function X(e){var t=e.time;return o.a.createElement("div",{className:l.a.clockInternals},E.gears.map((function(e,n){return o.a.createElement(_,{gearObject:e,key:n,time:t},null!=e.pinion&&o.a.createElement(F,{pinionObject:e.pinion}))})),o.a.createElement(J,{timeToRotate:3600,height:"15vw",top:"34.5vw",left:"55vw",time:t}),o.a.createElement(J,{timeToRotate:60,height:"17vw",top:"32.2vw",left:"33.1vw",time:t}),o.a.createElement(K,{time:t}),o.a.createElement(w,{onTick:e.tick,ticking:e.ticking,time:t}))}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Z=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).tick=n.tick.bind(V(n)),n.stopTime=n.stopTime.bind(V(n)),n.startTime=n.startTime.bind(V(n)),n.state={time:0,ticking:!0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.tick=function(){this.setState((function(e){return{time:e.time+1}}))},a.stopTime=function(){this.setState({ticking:!1})},a.startTime=function(){this.setState({ticking:!0})},a.render=function(){var e=this.state.time;return o.a.createElement("div",null,o.a.createElement(X,{time:e,tick:this.tick,ticking:this.state.ticking}),o.a.createElement(c,{stopTime:this.stopTime,startTime:this.startTime}))},r}(o.a.Component),Q=n("qhky");var $=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(Q.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"The Clock"),o.a.createElement("meta",{name:"keywords",content:"Clock, Grandfather Clock, Escapement, Animated"}),o.a.createElement("meta",{name:"description",content:"The Internals of a Grandfather Clock"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),o.a.createElement(Z,null))},r}(o.a.Component)},bmMU:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!n.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],n.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(t[u]!==n[u])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,l[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],n[l[u]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},bo20:function(e,t,n){e.exports={escapementRotation:"escapementRotation-module--escapementRotation--368jY"}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},nC17:function(e,t,n){e.exports={pinion:"pinion-module--pinion--108qS"}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,a,i,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),p=n("bmMU"),f=n.n(p),m=n("q1tI"),d=n.n(m),h=n("MgzW"),y=n.n(h),v="bodyAttributes",T="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",O="href",C="http-equiv",S="innerHTML",k="itemprop",A="name",x="property",j="rel",N="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",L="defer",M="encodeSpecialCharacters",D="onChangeClientState",B="titleTemplate",_=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,g.TITLE),n=Q(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,R);return t||r||void 0},J=function(e){return Q(e,D)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===j&&"canonical"===e[n].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==S&&c!==E&&c!==k||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,p=e.title,f=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ce(p,f);var m={baseTag:le(g.BASE,n),linkTags:le(g.LINK,a),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),u(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=pe(n,r),[d.a.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case T:return{toComponent:function(){return pe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,p=void 0===s?"":s,f=e.titleAttributes;return{base:fe(g.BASE,t,r),bodyAttributes:fe(v,n,r),htmlAttributes:fe(T,o,r),link:fe(g.LINK,a,r),meta:fe(g.META,i,r),noscript:fe(g.NOSCRIPT,c,r),script:fe(g.SCRIPT,u,r),style:fe(g.STYLE,l,r),title:fe(g.TITLE,{title:p,titleAttributes:f},r)}},de=s()((function(e){return{baseTag:V([O,P],e),bodyAttributes:X(v,e),defer:Q(e,L),encode:Q(e,M),htmlAttributes:X(T,e),linkTags:Z(g.LINK,[j,O],e),metaTags:Z(g.META,[A,w,C,x,k],e),noscriptTags:Z(g.NOSCRIPT,[S],e),onChangeClientState:J(e),scriptTags:Z(g.SCRIPT,[N,S],e),styleTags:Z(g.STYLE,[E],e),title:G(e),titleAttributes:X(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),me)((function(){return null})),he=(o=de,i=a=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return U({},o,((t={})[r.type]=i,t.titleAttributes=U({},a),t));case g.BODY:return U({},o,{bodyAttributes:U({},a)});case g.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((n={})[r.type]=U({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(W(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},t9lc:function(e,t,n){e.exports={escapement:"escapement-module--escapement--lABWq"}},ut20:function(e,t,n){e.exports={gearPosition:"gearPosition-module--gearPosition--2JErU"}},vZ5t:function(e,t,n){e.exports={container:"weight-module--container--3OvVy",weightBox:"weight-module--weightBox--XBcJC",rope:"weight-module--rope--3BRQK"}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zWNL:function(e,t,n){e.exports={gearStyle:"gearStyle-module--gearStyle--2CGib"}}}]);
//# sourceMappingURL=component---src-pages-index-js-d480477ebe13ca9f1cf2.js.map