(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{13899:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return a(85705)}])},90638:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=i.default,r={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(s(e,Promise)?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=n({},r,e)),(r=n({},r,t)).loadableGenerated&&delete(r=n({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,l(a,r);delete r.ssr}return a(r)},t.noSSR=l;var n=a(6495).Z,r=a(92648).Z,i=(r(a(67294)),r(a(14302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=(0,a(92648).Z)(a(67294)).default.createContext(null);t.LoadableContext=s},14302:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(79658).Z,n=a(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(6495).Z,i=(0,a(92648).Z)(a(67294)),l=a(16319),o=a(67294).useSyncExternalStore,c=[],u=[],d=!1;function f(e){var t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(function(e){return a.loading=!1,a.loaded=e,e}).catch(function(e){throw a.loading=!1,a.error=e,e}),a}var m=function(){function e(t,a){s(this,e),this._loadFn=t,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,a=this._opts;t.loading&&("number"==typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},a.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var a=function(){if(!h){var t=new m(e,f);h={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return h.promise()},s=function(){a();var e=i.default.useContext(l.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},n=function(e,t){s();var a=o(h.subscribe,h.getCurrentValue,h.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:h.retry}},[]),i.default.useMemo(function(){var t;return a.loading||a.error?i.default.createElement(f.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:h.retry}):a.loaded?i.default.createElement((t=a.loaded)&&t.__esModule?t.default:t,e):null},[e,a])},c=function(e,t){return s(),i.default.createElement(f.lazy,r({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=i.default.lazy(f.loader));var h=null;if(!d){var p=f.webpack?f.webpack():f.modules;p&&u.push(function(e){var t=!0,s=!1,n=void 0;try{for(var r,i=p[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var l=r.value;if(-1!==e.indexOf(l))return a()}}catch(o){s=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(s)throw n}}})}var $=f.suspense?c:n;return $.preload=function(){return a()},$.displayName="LoadableComponent",i.default.forwardRef($)}(f,e)}function p(e,t){for(var a=[];e.length;){var s=e.pop();a.push(s(t))}return Promise.all(a).then(function(){if(e.length)return p(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){p(c).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var a=function(){return d=!0,t()};p(u,e).then(a,a)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},85705:function(e,t,a){"use strict";a.r(t);var s=a(85893),n=a(2745);a(67294);var r=a(94423),i=a(41664),l=a.n(i);a(5152);var o=function(){return(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(n.bK,{pageName:"Blog",typingData:["<span class='typed-bread'><a href='#'>Home</a> / Blog</span>",]}),(0,s.jsx)("div",{className:"section blog",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("div",{className:"title_inner",children:"Latest Posts"})}),(0,s.jsx)("div",{className:"blog-items",children:(0,s.jsx)("div",{className:"blog-col",children:(0,s.jsx)("div",{className:"blog-item content-box",children:(0,s.jsxs)("div",{className:"post",children:[(0,s.jsx)("div",{className:"image",children:(0,s.jsx)(l(),{href:"counterclockwise_algorithm",children:(0,s.jsxs)("a",{className:"post-thumbnail",children:[(0,s.jsx)("img",{src:"https://simongeronimowebsite.s3.us-east-2.amazonaws.com/counterclockwise-algorithm-data-table.png",className:"wp-post-image",alt:"Automating Data Transformation: A Counterclockwise Square Algorithm"}),(0,s.jsx)("span",{className:"info",children:(0,s.jsx)("span",{className:"centrize full-width",children:(0,s.jsx)("span",{className:"vertical-center",children:(0,s.jsx)("span",{className:"icon fas fa-plus"})})})})]})})}),(0,s.jsxs)("div",{className:"desc",children:[(0,s.jsx)("div",{className:"date",children:"26 June 2023"}),(0,s.jsx)(l(),{href:"counterclockwise_algorithm",children:(0,s.jsx)("a",{className:"name",children:"Automating Data Transformation: A Counterclockwise Square Algorithm"})}),(0,s.jsx)("div",{className:"single-post-text",children:(0,s.jsx)("p",{children:"How to automate the process of extracting 2x2 squares from an Excel table in a counterclockwise manner using a simple algorithm."})})]})]})})})}),(0,s.jsx)("div",{className:"content-sidebar",children:(0,s.jsxs)("aside",{id:"secondary",className:"widget-area",children:[(0,s.jsxs)("section",{className:"widget widget_recent_entries",children:[(0,s.jsx)("h2",{className:"widget-title",children:"Latest Posts"}),(0,s.jsx)("ul",{})]}),(0,s.jsxs)("section",{className:"widget widget_categories",children:[(0,s.jsx)("h2",{className:"widget-title",children:"Categories"}),(0,s.jsx)("ul",{})]}),(0,s.jsxs)("section",{className:"widget widget_tags",children:[(0,s.jsx)("h2",{className:"widget-title",children:"Tags"}),(0,s.jsx)("div",{className:"tags"})]})]})})]})})]})};t.default=o},2745:function(e,t,a){"use strict";a.d(t,{bK:function(){return o},kU:function(){return c}});var s=a(85893),n=a(67294),r=a(89911),i=function(e){var t=e.typingData,a=e.extraClass,i=(0,n.useRef)(null);return(0,n.useEffect)(function(){setTimeout(function(){var e=new r.Z(i.current,{strings:t||["I code cool <strong>websites</strong>","I develop <strong>mobile apps</strong>","I love <strong>wordpress</strong>",],typeSpeed:100,backSpeed:100,backDelay:100,smartBackspace:!0,loop:!1,showCursor:!1});return function(){e.destroy()}},2e3)},[]),(0,s.jsx)("div",{className:"h-subtitles ready",children:(0,s.jsx)("span",{className:a,ref:i})})},l=function(e){var t=e.pageName,a=e.pageTitle,r=e.typingData,l=e.extraClass;return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)("div",{className:"centrize full-width",children:(0,s.jsx)("div",{className:"vertical-center",children:(0,s.jsxs)("div",{className:"started-content",children:[(0,s.jsx)("h1",{className:"h-title",children:a||t}),(0,s.jsx)(i,{typingData:r,extraClass:l})]})})}),(0,s.jsx)("a",{href:"#next_section",className:"mouse_btn",children:(0,s.jsx)("span",{className:"icon fas fa-chevron-down"})})]})},o=function(e){var t=e.pageName,a=e.pageTitle,n=e.typingData;return e.extraClass,(0,s.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,s.jsxs)("div",{className:"video-bg",children:[(0,s.jsx)("div",{className:"video-bg-mask"}),(0,s.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,s.jsx)(l,{typingData:n,pageName:t,pageTitle:a})]})},c=function(e){var t=e.pageName,r=e.pageTitle,i=e.typingData,o=e.extraClass,c=e.bannerImg;return(0,n.useEffect)(function(){var e=a(21014),t=e.jarallax;(0,e.jarallaxVideo)(),t(document.querySelectorAll(".jarallax"),{speed:.5,keepImg:!0,automaticResize:!0,videoVolume:0})},[]),(0,s.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,s.jsxs)("div",{className:"video-bg jarallax",style:{backgroundImage:"url(".concat(c||"images/resume_bg.jpg",")")},children:[(0,s.jsx)("div",{className:"video-bg-mask"}),(0,s.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,s.jsx)(l,{typingData:i,pageName:t,pageTitle:r,extraClass:o})]})}},5152:function(e,t,a){e.exports=a(90638)}},function(e){e.O(0,[616,14,423,774,888,179],function(){return e(e.s=13899)}),_N_E=e.O()}]);