(function(n){function e(e){for(var o,r,u=e[0],c=e[1],d=e[2],f=0,p=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);s&&s(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,u=1;u<t.length;u++){var c=t[u];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),n=r(r.s=t[0]))}return n}var o={},i={index:0},a=[];function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(n){var e=[],t=i[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,o){t=i[n]=[e,o]}));e.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(n){return r.p+"static/js/"+({"pages-category-index":"pages-category-index","pages-index-index":"pages-index-index","pages-map-index":"pages-map-index","pages-video-video":"pages-video-video"}[n]||n)+"."+{"pages-category-index":"a93bb80b","pages-index-index":"28bbae0d","pages-map-index":"a1fa3d43","pages-video-video":"bbd6ff90"}[n]+".js"}(n);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(d);var t=i[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,t[1](c)}i[n]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},r.m=n,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/",r.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var s=c;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("4885")},1843:function(n,e,t){"use strict";(function(n){var e=t("f5bd").default;t("473f"),t("bf0f"),t("de6c"),t("5c47"),t("a1c1");var o=e(t("9b8e")),i={keys:function(){return[]}};n["____06EA003____"]=!0,delete n["____06EA003____"],n.__uniConfig={tabBar:{color:"#7A7E83",selectedColor:"#3cc51f",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/index/index",iconPath:"static/dog1.png",selectedIconPath:"static/dog2.png",text:"修勾",redDot:!1,badge:""},{pagePath:"pages/category/index",iconPath:"static/weizhi1.png",selectedIconPath:"static/weizhi2.png",text:"位置",redDot:!1,badge:""},{pagePath:"pages/map/index",iconPath:"static/shuju1.png",selectedIconPath:"static/shuju2.png",text:"数据",redDot:!1,badge:""},{pagePath:"pages/video/video",iconPath:"static/shipin.png",selectedIconPath:"static/shipin1.png",text:"监控",redDot:!1,badge:""}]},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},n.__uniConfig.compilerVersion="4.15",n.__uniConfig.darkmode=!1,n.__uniConfig.themeConfig={},n.__uniConfig.uniPlatform="h5",n.__uniConfig.appId="__UNI__06EA003",n.__uniConfig.appName="AAAAAAADOGpifa",n.__uniConfig.appVersion="1.0.0",n.__uniConfig.appVersionCode="100",n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig.publicPath="/",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={maps:{amap:{key:"cfb7c1f9af2c74379b15054c0862bd2d",securityJsCode:"44cbb9d811b7d16732455fee33f300d4",serviceHost:""}}},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.aMapKey="cfb7c1f9af2c74379b15054c0862bd2d",n.__uniConfig.aMapSecurityJsCode="44cbb9d811b7d16732455fee33f300d4",n.__uniConfig.aMapServiceHost="",n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=i.keys().reduce((function(n,e){var t=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=i(e);return Object.assign(n[t]||(n[t]={}),o.common||o),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(n){var e={component:t.e("pages-index-index").then(function(){return n(t("0c31"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-category-index",(function(n){var e={component:t.e("pages-category-index").then(function(){return n(t("082e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-map-index",(function(n){var e={component:t.e("pages-map-index").then(function(){return n(t("17df"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-video-video",(function(n){var e={component:t.e("pages-video-video").then(function(){return n(t("2840"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"宠物姿态监测"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/category/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"宠物位置监测"})},[n("pages-category-index",{slot:"page"})])}},meta:{id:2,name:"pages-category-index",isNVue:!1,maxWidth:0,pagePath:"pages/category/index",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/map/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"宠物数据监测"})},[n("pages-map-index",{slot:"page"})])}},meta:{id:3,name:"pages-map-index",isNVue:!1,maxWidth:0,pagePath:"pages/map/index",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/video/video",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"宠物视角监控"})},[n("pages-video-video",{slot:"page"})])}},meta:{id:4,name:"pages-video-video",isNVue:!1,maxWidth:0,pagePath:"pages/video/video",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,t("0ee4"))},2044:function(n,e,t){var o=t("c86c");e=o(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),n.exports=e},3184:function(n,e,t){var o=t("bdbb").default;t("bf0f"),uni.addInterceptor({returnValue:function(n){return!n||"object"!==o(n)&&"function"!==typeof n||"function"!==typeof n.then?n:new Promise((function(e,t){n.then((function(n){return n[0]?t(n[0]):e(n[1])}))}))}})},4885:function(n,e,t){"use strict";var o=t("f5bd").default,i=o(t("9b1b"));t("3dde"),t("a8b2"),t("1480"),t("6e4a"),t("1843"),t("9337");var a=o(t("d767")),r=o(t("2e69")),u=o(t("9b8e"));t("3184"),u.default.use(r.default),uni.$u.config.unit="rpx",u.default.config.productionTip=!1,a.default.mpType="app";var c=new u.default((0,i.default)({},a.default));c.$mount()},"536a":function(n,e,t){"use strict";t.r(e);var o=t("7194"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=i.a},6712:function(n,e,t){var o=t("2044");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("967d").default;i("c48f0cf4",o,!0,{sourceMap:!1,shadowMode:!1})},7119:function(n,e,t){"use strict";var o=t("6712"),i=t.n(o);i.a},7194:function(n,e,t){"use strict";t("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},globalData:{body:"",body_y:"",body_z:"",head:"",leftback0:"",leftback0_z:"",leftback1:"",rightback0:"",rightback0_z:"",rightback1:"",leftforward0:"",leftforward0_z:"",leftforward1:"",rightforward0:"",rightforward0_z:"",rightforward1:""}};e.default=o},d767:function(n,e,t){"use strict";t.r(e);var o=t("d8de"),i=t("536a");for(var a in i)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("7119");var r=t("828b"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=u.exports},d8de:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){}));var o=function(){var n=this.$createElement,e=this._self._c||n;return e("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]}});