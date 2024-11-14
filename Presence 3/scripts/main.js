// Generated by Construct, the game and animation creation tool
// Visit: https://www.construct.net

function m(c,a,b,d){c.i.Y(c.P,a,b,d)}function p(c,a,b,d){c.i.l?m(c,a,b,d):c.i.wb()._OnMessageFromDOM({type:"event",component:c.P,handler:a,dispatchOpts:d||null,data:b,responseId:null})}function q(c,a,b){c.i.g(c.P,a,b)}function aa(c,a){for(const [b,d]of a)q(c,b,d)}window.Ea=class{constructor(c,a){this.i=c;this.P=a}Ba(){}};window.jc=class{constructor(){}};"use strict";function ba(c,a){q(c,"get-element",b=>{const d=r(c,b.elementId);return a(d,b)})}
function r(c,a){c=c.H.get(a);if(!c)throw Error(`no element with id ${a}`);return c.aa}
window.Da=class extends self.Ea{constructor(c,a){super(c,a);this.H=new Map;this.O=!0;aa(this,[["create",()=>{throw Error("required override");}],["destroy",b=>{b=b.elementId;const d=r(this,b);this.O&&d.parentElement.removeChild(d);this.H.delete(b)}],["set-visible",b=>{if(this.O){var d=this.H.get(b.elementId),e=d.aa;d.Xa?e.style.display=b.isVisible?"":"none":d.Qb=!!b.isVisible}}],["update-position",b=>{if(this.O){var d=this.H.get(b.elementId),e=d.aa,f=this.i;e.style.left=b.left+"px";e.style.top=b.top+
"px";e.style.width=b.width+"px";e.style.height=b.height+"px";var g=b.fontSize;null!==g&&(e.style.fontSize=g+"em");g=b.htmlIndex;d.Ub=g;g=f.Fa(g);g!==d.B&&(e.remove(),f.X(g).appendChild(e),d.B=g,f.la());b=b.htmlZIndex;b!==d.oa&&(d.oa=b,f.la());d.Xa||(d.Xa=!0,d.Qb&&(e.style.display=""))}}],["update-state",b=>{r(this,b.elementId);throw Error("required override");}],["focus",b=>{const d=r(this,b.elementId);b.focus?d.focus():d.blur()}],["set-css-style",b=>{const d=r(this,b.elementId),e=b.prop;b=b.val;
e.startsWith("--")?d.style.setProperty(e,b):d.style[e]=b}],["set-attribute",b=>{r(this,b.elementId).setAttribute(b.name,b.val)}],["remove-attribute",b=>{r(this,b.elementId).removeAttribute(b.name)}]]);ba(this,b=>b)}};"use strict";const t=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),u=/android/i.test(navigator.userAgent),ca=/safari/i.test(navigator.userAgent)&&!/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);let v=0;
function w(c){const a=document.createElement("script");a.async=!1;a.type="module";return c.Xb?new Promise(b=>{const d="c3_resolve_"+v;++v;self[d]=b;a.textContent=c.cc+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((b,d)=>{a.onload=b;a.onerror=d;a.src=c;document.head.appendChild(a)})}
async function da(){if(!navigator.userActivation||"undefined"===typeof OffscreenCanvas)return!1;try{let c=!1;const a=new Worker(URL.createObjectURL(new Blob(['\n\tself.addEventListener("message", () =>\n\t{\n\t\ttry {\n\t\t\tconst offscreenCanvas = new OffscreenCanvas(32, 32);\n\t\t\tconst gl = offscreenCanvas.getContext("webgl");\n\t\t\tself.postMessage(!!gl);\n\t\t}\n\t\tcatch (err)\n\t\t{\n\t\t\tconsole.warn("Feature detection worker error:", err);\n\t\t\tself.postMessage(false);\n\t\t}\n\t});'],{type:"text/javascript"})),
{get type(){c=!0}}),b=await new Promise(d=>{a.addEventListener("message",e=>{a.terminate();d(e.data)});a.postMessage("")});return c&&b}catch(c){return console.warn("Error feature detecting worker mode: ",c),!1}}let x=new Audio;
const ea={"audio/webm; codecs=opus":!!x.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!x.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!x.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!x.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!x.canPlayType("audio/mp4"),"audio/mpeg":!!x.canPlayType("audio/mpeg")};x=null;async function fa(c){c=await y(c);return(new TextDecoder("utf-8")).decode(c)}
function y(c){return new Promise((a,b)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>b(e);d.readAsArrayBuffer(c)})}const z=[];let A=0;window.RealFile=window.File;const B=[],C=new Map,D=new Map;let ha=0;const E=[];self.runOnStartup=function(c){if("function"!==typeof c)throw Error("runOnStartup called without a function");E.push(c)};const F=new Set(["cordova","playable-ad-single-file","playable-ad-zip","instant-games"]);let H=!1;
window.Ia=class c{constructor(a){this.l=a.ec;this.T=null;this.v="";this.ya=a.ac;this.sa=this.K=null;this.G=[];this.D=null;this.Za=!0;this.j=[];this.wa=[];this.xa=!1;this.ab=()=>this.ub();this.Ya=!1;this.R=null;this.I=-1;this.Tb=()=>this.Gb();this.U=new Set;this.Aa=null;this.bb=[];this.h=a.cb;this.qa="file"===location.protocol.substr(0,4);if("playable-ad-single-file"===this.h||"playable-ad-zip"===this.h||"instant-games"===this.h)this.l=!1;ca&&(this.l=!1);if("cordova"===this.h&&this.l&&u){const b=/Chrome\/(\d+)/i.exec(navigator.userAgent);
b&&90<=parseInt(b[1],10)||(this.l=!1)}this.F()?self.chrome.webview.addEventListener("message",b=>this.Qa(b.data)):"macos-wkwebview"===this.h&&(self.C3WrapperOnMessage=b=>this.Qa(b));this.ba=this.s=null;"html5"!==this.h||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.g("canvas","update-size",b=>this.Kb(b));this.g("canvas","set-html-layer-count",
b=>this._OnSetHTMLLayerCount(b));this.g("canvas","cleanup-html-layers",()=>this.Bb());this.g("runtime","cordova-fetch-local-file",b=>this.Cb(b));this.g("runtime","create-job-worker",()=>this.Db());this.g("runtime","send-wrapper-extension-message",b=>this.Jb(b));"cordova"===this.h?document.addEventListener("deviceready",()=>this.Oa(a)):this.Oa(a)}hb(){return this.j[0].canvas}Fa(a){return Math.min(a,this.j.length-1)}X(a){if(0>a||a>=this.j.length)throw new RangeError("invalid canvas layer");return this.j[a].W}_GetHTMLWrapElement(a){return this.X(a)}lb(){return t&&
"cordova"===this.h}M(){const a=navigator.userAgent;return t&&F.has(this.h)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}jb(){return u}Ga(){return u&&F.has(this.h)}Ha(){return"windows-webview2"===this.h||!!("preview"===this.h&&window.chrome&&window.chrome.webview&&window.chrome.webview.postMessage)}F(){return this.Ha()||"xbox-uwp-webview2"===this.h}async Oa(a){this.l&&!await da()&&(this.l=!1);"macos-wkwebview"===this.h?this.N({type:"ready"}):this.F()&&(this.Nb(),this.bb=(await this.zb()).registeredComponentIds);
"playable-ad-single-file"===this.h&&(this.s=self.c3_base64files,this.ba={},await this.rb());if("nwjs"===this.h&&self.nw&&self.nw.App.manifest["c3-steam-mode"]){let d=0;this.Ja(()=>{d++;document.documentElement.style.opacity=0===d%2?"1":"0.999"})}if(a.$b)this.v=a.$b;else{var b=location.origin;this.v=("null"===b?"file:///":b)+location.pathname;b=this.v.lastIndexOf("/");-1!==b&&(this.v=this.v.substr(0,b+1))}b=new MessageChannel;this.T=b.port1;this.T.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&
window.c3_addPortMessageHandler(d=>this.Fb(d));this.R=new self.mb(this);await ia(this.R);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",d)}this.l?await this.yb(a,b.port2):await this.xb(a,b.port2)}Na(a){var b=this.v,d=location.href,e=this.u(),f=this.m(),g=this.ha(),h=window.devicePixelRatio,k=c.L(),l=
window.cr_swClientId||"";a=a.cb;var n=globalThis.lc??new Map(Object.entries(this.s??{})),pa=this.ya,qa=(new URLSearchParams(self.location.search)).has("debug"),G=this.R;return{runtimeBaseUrl:b,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,cssDisplayMode:g,devicePixelRatio:h,isFullscreen:k,swClientId:l,exportType:a,fileMap:n,scriptFolder:pa,isDebug:qa,ife:!!self.mc,jobScheduler:{inputPort:G.pa,outputPort:G.va,maxNumWorkers:G.Rb},supportedAudioFormats:ea,isFileProtocol:this.qa,isiOSCordova:this.lb(),
isiOSWebView:this.M(),isWindowsWebView2:this.Ha(),isAnyWebView2Wrapper:this.F(),wrapperComponentIds:this.bb,isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async yb(a,b){const d=a.fc;"preview"===this.h?(this.K=new Worker("previewworker.js",{type:"module",name:"Runtime"}),await new Promise((h,k)=>{const l=n=>{this.K.removeEventListener("message",l);n.data&&"ok"===n.data.type?h():k()};this.K.addEventListener("message",l);this.K.postMessage({type:"construct-worker-init","import":(new URL(d,
this.v)).toString()})})):this.K=await this.ga(d,{type:"module",name:"Runtime"});const e=document.createElement("canvas");e.style.display="none";const f=e.transferControlToOffscreen();document.body.appendChild(e);const g=document.createElement("div");g.className="c3htmlwrap";document.body.appendChild(g);this.j.push({canvas:e,W:g});window.c3canvas=e;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.K.postMessage(Object.assign(this.Na(a),{type:"init-runtime",isInWorker:!0,messagePort:b,
canvas:f,runtimeScriptList:a.eb,projectMainScriptPath:a.Zb,scriptsInEventsPath:a.bc}),[b,f,...ja(this.R)]);this.G=B.map(h=>new h(this));this.Ma();I(e);J(g);K(this.D);self.c3_callFunction=(h,k)=>{var l=this.D;return l.i.nb(l.P,{name:h,params:k})};"preview"===this.h&&(self.goToLastErrorScript=()=>this.Y("runtime","go-to-last-error-script"))}async xb(a,b){const d=document.createElement("canvas");d.style.display="none";document.body.appendChild(d);var e=document.createElement("div");e.className="c3htmlwrap";
document.body.appendChild(e);this.j.push({canvas:d,W:e});window.c3canvas=d;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.G=B.map(g=>new g(this));this.Ma();I(d);J(e);e=await Promise.all(a.eb.map(g=>this.Ab(g)));await Promise.all(e.map(g=>w(g)));e=a.Zb;const f=a.bc;if(e)try{if(await w(e),"preview"===this.h&&!globalThis.ic)throw Error("main script did not run to completion");}catch(g){this.$(),console.error("Error loading project main script: ",g),alert(`Failed to load the project main script (${e}). Check all your JavaScript code has valid syntax, all imports are written correctly, and that an exception was not thrown running the script. Press F12 and check the console for error details.`)}if(f)try{if(await w(f),
"preview"===this.h&&!globalThis.hc.kc)throw Error("scripts in events did not run to completion");}catch(g){this.$(),console.error("Error loading scripts in events: ",g),alert("Failed to load scripts in events. Check all your JavaScript code has valid syntax, all imports are written correctly, and that an exception was not thrown running the 'Imports for events' script. Press F12 and check the console for error details.")}a=Object.assign(this.Na(a),{isInWorker:!1,messagePort:b,canvas:d,runOnStartupFunctions:E});
K(this.D);this.Pa();this.sa=self.C3_CreateRuntime(a);await self.C3_InitRuntime(this.sa,a)}async ga(a,b){if(a.startsWith("blob:"))return new Worker(a,b);if("cordova"===this.h&&this.qa)return a=await this.fa(a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),b);if("playable-ad-single-file"===this.h){const d=this.s[a];if(!d)throw Error("missing script: "+a);return new Worker(URL.createObjectURL(d),b)}a=new URL(a,location.href);if(location.origin!==a.origin){a=await fetch(a);
if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),b)}return new Worker(a,b)}u(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}ha(){return this.F()||(new Set(["cordova","nwjs","macos-wkwebview"])).has(this.h)?"standalone":window.matchMedia("(display-mode: fullscreen)").matches?"fullscreen":window.matchMedia("(display-mode: standalone)").matches?"standalone":window.matchMedia("(display-mode: minimal-ui)").matches?
"minimal-ui":navigator.standalone?"standalone":"browser"}Pa(){this.$()}$(){const a=window.cr_previewLoadingElem;a&&(a.parentElement.removeChild(a),window.cr_previewLoadingElem=null)}async Db(){const a=await L(this.R);return{outputPort:a,transferables:[a]}}Kb(a){if(!this.Ya){var b=a.styleWidth+"px",d=a.styleHeight+"px",e=a.marginLeft+"px",f=a.marginTop+"px";for(const {canvas:g,W:h}of this.j)g.style.width=b,g.style.height=d,g.style.marginLeft=e,g.style.marginTop=f,h.style.width=b,h.style.height=d,h.style.marginLeft=
e,h.style.marginTop=f,this.Za&&(g.style.display="",h.style.display="");document.documentElement.style.setProperty("--construct-scale",a.displayScale);this.Za=!1}}_OnSetHTMLLayerCount(a){var b=a.count,d=a.immediate,e=a.styleWidth+"px",f=a.styleHeight+"px";const g=a.marginLeft+"px",h=a.marginTop+"px";a=[];const k=[];if(b<this.j.length)for(;this.j.length>b;){const {canvas:l,W:n}=this.j.pop();n.remove();this.l&&!d?this.wa.push(l):l.remove()}else if(b>this.j.length)for(let l=0,n=b-this.j.length;l<n;++l)b=
document.createElement("canvas"),b.classList.add("c3overlay"),this.l?(d=b.transferControlToOffscreen(),a.push(d),k.push(d)):a.push(b),document.body.appendChild(b),d=document.createElement("div"),d.classList.add("c3htmlwrap","c3overlay"),document.body.appendChild(d),b.style.width=e,b.style.height=f,b.style.marginLeft=g,b.style.marginTop=h,d.style.width=e,d.style.height=f,d.style.marginLeft=g,d.style.marginTop=h,I(b),J(d),this.j.push({canvas:b,W:d});for(const l of this.G)if(l instanceof window.Da&&
l.O)for(const n of l.H.values())e=l.i.Fa(n.Ub),f=n.B,-1!==e&&-1!==f&&e!==f&&(f=n.aa,f.remove(),l.i.X(e).appendChild(f),n.B=e);this.la();return{addedCanvases:a,transferables:k}}Bb(){for(const a of this.wa)a.remove();this.wa.length=0}la(){this.xa||(this.xa=!0,this.Ja(this.ab))}ub(){this.Mb(this.ab);this.xa=!1;let a=[];for(var b of this.G)if(b instanceof window.Da){var d=b.O?[...b.H.values()]:null;d&&a.push(...d)}a.sort((g,h)=>{const k=g.B,l=h.B;return k!==l?k-l:g.oa-h.oa});let e=d=b=0,f=a.length;for(;e<
f;++e){const g=a[e];g.B!==b&&(this.La(b,a.slice(d,e)),b=g.B,d=e)}d<e&&this.La(b,a.slice(d,e))}La(a,b){if(!(1>=b.length||a>=this.j.length)){b=b.map(k=>k.aa);var d=new Set(b);a=this.X(a);for(var e=Array.from(a.children).filter(k=>d.has(k)),f=0,g=Math.min(b.length,e.length);f<g&&b[f]===e[f];++f);for(var h=f;h<g;++h)e[h].remove();for(h=f;h<g;++h)a.appendChild(b[h])}}wb(){if(this.l)throw Error("not available in worker mode");return this.sa}Y(a,b,d,e){this.T.postMessage({type:"event",component:a,handler:b,
dispatchOpts:e||null,data:d,responseId:null},void 0)}nb(a,b){const d=ha++,e=new Promise((f,g)=>{D.set(d,{resolve:f,reject:g})});this.T.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:b,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const b=a.type;if("event"===b)return this.Eb(a);if("result"===b)this.Hb(a);else if("runtime-ready"===b)this.Ib();else if("alert-error"===b)this.$(),alert(a.message);else if("creating-runtime"===b)this.Pa();else throw Error(`unknown message '${b}'`);
}Eb(a){const b=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=C.get(b))if(a=a.get(d)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${b}' handler '${d}':`,h);null!==f&&this.Z(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.Z(f,!0,h)).catch(h=>{console.error(`Rejection from '${b}' handler '${d}':`,h);this.Z(f,!1,""+h)}):this.Z(f,!0,g)}else console.warn(`[DOM] No handler '${d}' for component '${b}'`);else console.warn(`[DOM] No event handlers for component '${b}'`)}Z(a,
b,d){let e;d&&d.transferables&&(e=d.transferables);this.T.postMessage({type:"result",responseId:a,isOk:b,result:d},e)}Hb(a){const b=a.responseId,d=a.isOk;a=a.result;const e=D.get(b);d?e.resolve(a):e.reject(a);D.delete(b)}g(a,b,d){let e=C.get(a);e||(e=new Map,C.set(a,e));if(e.has(b))throw Error(`[DOM] Component '${a}' already has handler '${b}'`);e.set(b,d)}static fb(a){if(B.includes(a))throw Error("DOM handler already added");B.push(a)}Ma(){for(const a of this.G)if("runtime"===a.P){this.D=a;return}throw Error("cannot find runtime DOM handler");
}Fb(a){this.Y("debugger","message",a)}Ib(){for(const a of this.G)a.Ba()}static L(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||H)}static Ra(a){H=!!a}Ja(a){this.U.add(a);this.ka()}Mb(a){this.U.delete(a);0===this.U.size&&this.Ka()}ka(){-1===this.I&&0<this.U.size&&(this.I=requestAnimationFrame(this.Tb))}Ka(){-1!==this.I&&(cancelAnimationFrame(this.I),this.I=-1)}Gb(){this.I=-1;for(const a of this.U)a();this.ka()}ja(){this.D.ja()}ob(){this.Ya=!0}ib(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}kb(a){return!this.ib(a)}async Ab(a){if("cordova"===this.h&&(a.startsWith("file:")||this.qa&&this.kb(a)))return a.startsWith(this.v)&&(a=a.substr(this.v.length)),a=await this.fa(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}));if("playable-ad-single-file"===this.h){if(this.ba.hasOwnProperty(a))return{Xb:!0,cc:this.ba[a]};if(this.s.hasOwnProperty(a))return URL.createObjectURL(this.s[a]);throw Error("missing script: "+a);}return a}async Cb(a){const b=
a.filename;switch(a.as){case "text":return await this.gb(b);case "buffer":return await this.fa(b);default:throw Error("unsupported type");}}Ca(a){const b=window.cordova.file.applicationDirectory+"www/"+a;return new Promise((d,e)=>{window.resolveLocalFileSystemURL(b,f=>{f.file(d,e)},e)})}async gb(a){a=await this.Ca(a);return await fa(a)}ia(){if(z.length&&!(8<=A)){A++;var a=z.shift();this.sb(a.filename,a.dc,a.Wb)}}fa(a){return new Promise((b,d)=>{z.push({filename:a,dc:e=>{A--;this.ia();b(e)},Wb:e=>
{A--;this.ia();d(e)}});this.ia()})}async sb(a,b,d){try{const e=await this.Ca(a),f=await y(e);b(f)}catch(e){d(e)}}_PlayableAdFetchBlob(a){if(this.s.hasOwnProperty(a))return this.s[a];throw Error("missing file: "+a);}Qa(a){if("entered-fullscreen"===a)c.Ra(!0),M(this.D);else if("exited-fullscreen"===a)c.Ra(!1),M(this.D);else if("object"===typeof a){const b=a.type;"directory-handles"!==b&&("wrapper-init-response"===b?(this.Aa(a),this.Aa=null):"extension-message"===b?this.Y("runtime","wrapper-extension-message",
a):console.warn("Unknown wrapper message: ",a))}else console.warn("Unknown wrapper message: ",a)}Jb(a){this.N({type:"extension-message",componentId:a.componentId,messageId:a.messageId,params:a.params||[],asyncId:a.asyncId})}N(a){this.F()?window.chrome.webview.postMessage(JSON.stringify(a)):"macos-wkwebview"===this.h&&window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a))}Nb(){window.moveTo=(a,b)=>{this.N({type:"set-window-position",windowX:Math.ceil(a),windowY:Math.ceil(b)})};window.resizeTo=
(a,b)=>{this.N({type:"set-window-size",windowWidth:Math.ceil(a),windowHeight:Math.ceil(b)})}}zb(){return this.F()?new Promise(a=>{this.Aa=a;this.N({type:"wrapper-init"})}):Promise.resolve()}async rb(){const a=[];for(const [b,d]of Object.entries(this.s))a.push(this.qb(b,d));await Promise.all(a)}async qb(a,b){if("object"===typeof b)this.s[a]=new Blob([b.str],{type:b.type}),this.ba[a]=b.str;else{let d=await this.vb(b);d||(d=this.tb(b));this.s[a]=d}}async vb(a){try{return await (await fetch(a)).blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
b),null}}tb(a){a=this.Lb(a);return this.pb(a.data,a.Yb)}Lb(a){var b=a.indexOf(",");if(0>b)throw new URIError("expected comma in data: uri");var d=a.substring(b+1);b=a.substring(5,b).split(";");a=b[0]||"";const e=b[2];d="base64"===b[1]||"base64"===e?atob(d):decodeURIComponent(d);return{Yb:a,data:d}}pb(a,b){var d=a.length;let e=d>>2,f=new Uint8Array(d),g=new Uint32Array(f.buffer,0,e),h,k;for(k=h=0;h<e;++h)g[h]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(d&=
3;d--;)f[k]=a.charCodeAt(k),++k;return new Blob([f],{type:b})}};"use strict";const N=self.Ia,ka=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),O={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},P={dispatchUserScriptEvent:!0},Q={dispatchRuntimeEvent:!0};function la(c){return new Promise((a,b)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>b(e);d.rel="stylesheet";d.href=c;document.head.appendChild(d)})}
function ma(c){return new Promise((a,b)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>b(e);d.src=c})}async function R(c){c=URL.createObjectURL(c);try{return await ma(c)}finally{URL.revokeObjectURL(c)}}function na(c){do{if(c.parentNode&&c.hasAttribute("contenteditable"))return!0;c=c.parentNode}while(c);return!1}const oa=new Set(["input","textarea","datalist","select"]),ra=new Set(["canvas","body","html"]);
function S(c){c.target.tagName&&ra.has(c.target.tagName.toLowerCase())&&c.preventDefault()}function T(c){c.target.tagName&&c.target.classList.contains("c3htmlwrap")&&c.preventDefault()}function sa(c){(c.metaKey||c.ctrlKey)&&c.preventDefault()}
self.C3_GetSvgImageSize=async function(c){c=await R(c);if(0<c.width&&0<c.height)return[c.width,c.height];c.style.position="absolute";c.style.left="0px";c.style.top="0px";c.style.visibility="hidden";document.body.appendChild(c);const a=c.getBoundingClientRect();document.body.removeChild(c);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(c,a,b,d,e){c=await R(c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(c,0,0,a,b);return f};let U=!1;
document.addEventListener("pause",()=>U=!0);document.addEventListener("resume",()=>U=!1);function I(c){c.addEventListener("selectstart",S);c.addEventListener("gesturehold",S);c.addEventListener("pointerdown",S)}function J(c){c.addEventListener("selectstart",T);c.addEventListener("gesturehold",T);c.addEventListener("touchstart",T)}function K(c){c.Va=!0;c.ra=c.i.u();c.S=c.i.m()}
function M(c){if(!c.o){var a=N.L();a&&"any"!==c.za&&ta(c);m(c,"fullscreenchange",{isFullscreen:a,innerWidth:c.u(),innerHeight:c.m()})}}async function ua(c){await Promise.all(c.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function va(c){var a=c.imageBitmapOpts;c=await self.C3_RasterSvgImageBlob(c.blob,c.imageWidth,c.imageHeight,c.surfaceWidth,c.surfaceHeight);a=a?await createImageBitmap(c,a):await createImageBitmap(c);return{imageBitmap:a,transferables:[a]}}async function wa(c){return await self.C3_GetSvgImageSize(c.blob)}function xa(c){window.c3_postToMessagePort&&(c.from="runtime",window.c3_postToMessagePort(c))}
function ya(c){self.setTimeout(()=>{c.Ua=!0},1E3);"cordova"===c.i.h?(document.addEventListener("pause",()=>V(c,!0)),document.addEventListener("resume",()=>V(c,!1))):document.addEventListener("visibilitychange",()=>V(c,"hidden"===document.visibilityState));c.ca=!("hidden"!==document.visibilityState&&!U);return{isSuspended:c.ca}}
function za(c){c.Ta||(c.Ta=!0,window.addEventListener("deviceorientation",a=>{c.o||m(c,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},O)}),window.addEventListener("deviceorientationabsolute",a=>{c.o||m(c,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},O)}))}
function Aa(c){c.Sa||(c.Sa=!0,window.addEventListener("devicemotion",a=>{if(!c.o){var b=null,d=a.acceleration;d&&(b={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});m(c,"devicemotion",{acceleration:b,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},O)}}))}async function Ba(c){await la(c.url)}
function Ca(c,a){c.Wa=a.message;-1===c.na&&(c.na=setTimeout(()=>{c.na=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=c.Wa)},250))}function W(c,a){console.warn("[Construct] Fullscreen request failed: ",a);m(c,"fullscreenerror",{isFullscreen:N.L(),innerWidth:c.u(),innerHeight:c.m()})}
function V(c,a){c.ca!==a&&((c.ca=a)?c.i.Ka():c.i.ka(),m(c,"visibilitychange",{hidden:a}),!a&&c.i.M()&&(c=()=>{document.scrollingElement.scrollTop=0;document.scrollingElement.scrollLeft=0},setTimeout(c,50),setTimeout(c,100),setTimeout(c,250),setTimeout(c,500)))}
function Fa(c,a,b){if("undefined"!==typeof b.key&&("Backspace"===b.key&&S(b),"nwjs"===c.i.h&&"u"===b.key&&(b.ctrlKey||b.metaKey)&&b.preventDefault(),!c.o)){var d=ka.get(b.code)||b.code;p(c,a,{code:d,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},O)}}
function X(c,a,b,d){c.o||b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents||p(c,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY+c.A,pageX:b.pageX,pageY:b.pageY+c.A,movementX:b.movementX||0,movementY:b.movementY||0,timeStamp:b.timeStamp},d)}
function Y(c,a,b){if(!c.o){var d=0;"mouse"===b.pointerType&&(d=c.ua);p(c,a,{pointerId:b.pointerId,pointerType:b.pointerType,button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY+c.A,pageX:b.pageX,pageY:b.pageY+c.A,movementX:b.movementX||0,movementY:b.movementY||0,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},O);"mouse"===b.pointerType&&(c.ua=
b.buttons)}}function Z(c,a,b){document.body.style.position="";document.body.style.overflow="";document.body.style.transform="";c.A=0;if(0<b){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-b)/2,a>b&&(a=b),0>a&&(a=0),0<a&&(document.body.style.position="absolute",document.body.style.overflow="visible",document.body.style.transform=`translateY(${-a}px)`,c.A=a))}}
function Ga(c,a,b,d){const e=c.u(),f=c.m();c.J=-1;e!=a||f!=b?m(c,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:N.L(),cssDisplayMode:c.i.ha()}):10>d&&Ha(c,e,f,d+1)}function Ha(c,a,b,d){-1!==c.J&&clearTimeout(c.J);c.J=setTimeout(()=>Ga(c,a,b,d),48)}
function ta(c){c=c.za;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}function Ja(c){return!c||c===document||c===window||c===document.body||"canvas"===c.tagName.toLowerCase()}
N.fb(class extends self.Ea{constructor(c){super(c,"runtime");this.Va=!1;this.J=-1;this.za="any";this.ca=this.Sa=this.Ta=!1;this.ea=document.createElement("div");this.ea.className="c3-screen-reader-text";this.ea.setAttribute("aria-live","polite");document.body.appendChild(this.ea);this.C=null;this.o=!1;this.Wa="";this.na=-1;this.Ua=!1;this.ra=c.u();this.S=c.m();this.A=this.V=0;c.g("runtime","invoke-download",b=>{const d=b.url;b=b.filename;const e=document.createElement("a"),f=document.body;e.textContent=
b;e.href=d;e.download=b;f.appendChild(e);e.click();f.removeChild(e)});c.g("runtime","load-webfonts",b=>ua(b));c.g("runtime","raster-svg-image",b=>va(b));c.g("runtime","get-svg-image-size",b=>wa(b));c.g("runtime","set-target-orientation",b=>{this.za=b.targetOrientation});c.g("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});c.g("runtime","post-to-debugger",b=>xa(b));c.g("runtime","go-to-script",b=>xa(b));c.g("runtime","before-start-ticking",()=>ya(this));c.g("runtime","debug-highlight",
b=>{if(b.show){this.C||(this.C=document.createElement("div"),this.C.id="inspectOutline",document.body.appendChild(this.C));var d=this.C;d.style.display="";d.style.left=b.left-1+"px";d.style.top=b.top-1+"px";d.style.width=b.width+2+"px";d.style.height=b.height+2+"px";d.textContent=b.name}else this.C&&(this.C.style.display="none")});c.g("runtime","enable-device-orientation",()=>za(this));c.g("runtime","enable-device-motion",()=>Aa(this));c.g("runtime","add-stylesheet",b=>Ba(b));c.g("runtime","script-create-worker",
b=>{const d=b.port2;(new Worker(b.url,b.opts)).postMessage({type:"construct-worker-init",port2:d},[d])});c.g("runtime","alert",b=>{alert(b.message)});c.g("runtime","screen-reader-text",b=>{var d=b.type;"create"===d?(d=document.createElement("p"),d.id="c3-sr-"+b.id,d.textContent=b.text,this.ea.appendChild(d)):"update"===d?(d=document.getElementById("c3-sr-"+b.id))?d.textContent=b.text:console.warn(`[Construct] Missing screen reader text with id ${b.id}`):"release"===d?(d=document.getElementById("c3-sr-"+
b.id))?d.remove():console.warn(`[Construct] Missing screen reader text with id ${b.id}`):console.warn(`[Construct] Unknown screen reader text update '${d}'`)});c.g("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});c.g("runtime","set-exporting-to-video",b=>{this.o=!0;const d=document.createElement("h1");d.id="exportToVideoMessage";d.textContent=b.message;document.body.prepend(d);document.body.classList.add("exportingToVideo");
this.i.hb().style.display="";this.i.ob()});c.g("runtime","export-to-video-progress",b=>Ca(this,b));c.g("runtime","exported-to-video",b=>{window.Vb({type:"exported-video",arrayBuffer:b.arrayBuffer,contentType:b.contentType,time:b.time})});c.g("runtime","exported-to-image-sequence",b=>{window.Vb({type:"exported-image-sequence",blobArr:b.blobArr,time:b.time,gif:b.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const d=b.target;a.has(d.tagName.toLowerCase())||
na(d)||b.preventDefault()});window.addEventListener("selectstart",S);window.addEventListener("gesturehold",S);window.addEventListener("touchstart",S,{passive:!1});window.addEventListener("pointerdown",S,{passive:!1});this.ua=0;window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()});window.addEventListener("mousewheel",sa,{passive:!1});window.addEventListener("wheel",sa,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.o&&this.Va){var b=this.u();var d=this.m();if(this.i.Ga()){if(this.Ua){if(this.ra===
b&&d<this.S){this.V=this.S-d;Z(this,this.S,this.V);b=void 0;break a}0<this.V&&(this.V=0,Z(this,d,this.V))}this.ra=b;this.S=d}m(this,"window-resize",{innerWidth:b,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:N.L(),cssDisplayMode:this.i.ha()});this.i.M()&&(-1!==this.J&&clearTimeout(this.J),Ga(this,b,d,0))}b=void 0}return b});window.addEventListener("fullscreenchange",()=>M(this));window.addEventListener("webkitfullscreenchange",()=>M(this));window.addEventListener("mozfullscreenchange",
()=>M(this));window.addEventListener("fullscreenerror",b=>W(this,b));window.addEventListener("webkitfullscreenerror",b=>W(this,b));window.addEventListener("mozfullscreenerror",b=>W(this,b));if(c.M()){let b=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>b&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0);b=d});document.documentElement.setAttribute("ioswebview","")}this.ta=new Set;this.Sb=new WeakSet;this.Pb=!1}Ba(){window.addEventListener("focus",
()=>{m(this,"window-focus",null,Q)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(b){a=!1}m(this,"window-blur",{parentHasFocus:a},Q);this.ua=0});window.addEventListener("focusin",a=>{a=a.target;(oa.has(a.tagName.toLowerCase())||na(a))&&m(this,"keyboard-blur",null,Q)});window.addEventListener("keydown",a=>Fa(this,"keydown",a));window.addEventListener("keyup",a=>Fa(this,"keyup",a));window.addEventListener("mousedown",a=>X(this,"mousedown",a,P));
window.addEventListener("mousemove",a=>X(this,"mousemove",a,P));window.addEventListener("mouseup",a=>X(this,"mouseup",a,P));window.addEventListener("dblclick",a=>X(this,"dblclick",a,O));window.addEventListener("wheel",a=>{this.o||m(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.A,pageX:a.pageX,pageY:a.pageY+this.A,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},O)});window.addEventListener("pointerdown",a=>{window!==window.top&&window.focus();Ja(a.target)&&
document.activeElement&&!Ja(document.activeElement)&&document.activeElement.blur();Y(this,"pointerdown",a)});this.i.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?window.addEventListener("pointerrawupdate",a=>{Y(this,"pointermove",a)}):window.addEventListener("pointermove",a=>Y(this,"pointermove",a));window.addEventListener("pointerup",a=>Y(this,"pointerup",a));window.addEventListener("pointercancel",a=>Y(this,"pointercancel",a));const c=()=>this.ja();window.addEventListener("pointerup",
c,!0);window.addEventListener("touchend",c,!0);window.addEventListener("click",c,!0);window.addEventListener("keydown",c,!0);window.addEventListener("gamepadconnected",c,!0);this.i.jb()&&!this.i.Ga()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Z(this,this.m(),navigator.virtualKeyboard.boundingRect.height)}));this.i.M()&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0)}u(){return this.i.u()}m(){return this.i.m()}ja(){var c=
[...this.ta];this.ta.clear();if(!this.Pb)for(const a of c)(c=a.play())&&c.catch(()=>{this.Sb.has(a)||this.ta.add(a)})}});"use strict";async function ia(c){if(c.Ob)throw Error("already initialised");c.Ob=!0;c.ma=await c.da.ga(c.da.ya+"dispatchworker.js",{name:"DispatchWorker"});const a=new MessageChannel;c.pa=a.port1;c.ma.postMessage({type:"_init","in-port":a.port2},[a.port2]);c.va=await L(c)}function ja(c){return[c.pa,c.va]}
async function L(c){const a=c.$a.length,b=await c.da.ga(c.da.ya+"jobworker.js",{name:"JobWorker"+a}),d=new MessageChannel,e=new MessageChannel;c.ma.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);b.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);c.$a.push(b);return e.port1}self.mb=class{constructor(c){this.da=c;this.Rb=Math.min(navigator.hardwareConcurrency||2,16);this.ma=null;this.$a=[];this.va=this.pa=null}};"use strict";
window.C3_Is_Supported&&(window.c3_runtimeInterface=new self.Ia({ec:!0,fc:"workermain.js",eb:["scripts/c3main.js"],ac:"scripts/",cb:"html5"}));
