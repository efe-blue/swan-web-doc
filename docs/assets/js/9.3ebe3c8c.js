(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(n,t,i){var e=i(0),o=i(3),s=i(101),a=[].slice,r=function(n){return function(t,i){var e=arguments.length>2,o=e?a.call(arguments,2):void 0;return n(e?function(){("function"==typeof t?t:Function(t)).apply(this,o)}:t,i)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:r(o.setTimeout),setInterval:r(o.setInterval)})},174:function(n,t,i){"use strict";i.d(t,"a",(function(){return e}));var e=function(){return!/Android|webOS|iPhone|SymbianOS|Windows Phone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},175:function(n,t,i){},257:function(n,t,i){"use strict";var e=i(175);i.n(e).a},271:function(n,t,i){"use strict";i.r(t);i(152);var e=i(174),o={props:{url:{type:String}},data:function(){return{showLoading:!1,isPc:!0}},mounted:function(){this.isPc=Object(e.a)()},methods:{openIdeHandle:function(){var n=this;this.showLoading=!0,setTimeout((function(){n.showLoading=!1}),3e3)}}},s=(i(257),i(28)),a=Object(s.a)(o,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return n.isPc?i("div",{staticClass:"open-ide"},[n.showLoading?i("div",{staticClass:"open-ide-loading"},[i("p",{staticClass:"open-ide-loading-title"},[n._v("\n            正在打开开发者工具...\n        ")]),n._v(" "),i("p",{staticClass:"open-ide-loading-ask"},[n._v("\n            没有安装开发者工具？\n            "),i("router-link",{attrs:{to:"/develop/devtools/history/"}},[n._v("点此下载")])],1)]):n._e(),n._v(" "),i("div",{staticClass:"open-ide-button"},[i("a",{staticClass:"open-ide-button-link",attrs:{href:n.url,title:"在开发者工具中预览效果"},on:{click:n.openIdeHandle}},[n._v("\n            在开发者工具中打开\n        ")])])]):n._e()}),[],!1,null,null,null);t.default=a.exports}}]);