(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{802:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("转摘："),a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%E5%B9%B3%E6%BB%91%E6%BB%9A%E5%8A%A8/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS scroll-behavior和JS scrollIntoView让页面滚动平滑"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("点击 HTML 页面的锚点或使用非鼠标方式滚动页面时，页面会立即滚动到对应的位置处，如果需要有个平滑的动画效果，则可以使用 CSS 的"),a("code",[s._v("scroll-behaviour")]),s._v("属性或者 JavaScript 中的"),a("code",[s._v("scrollIntoView()")]),s._v("方法。")]),s._v(" "),a("h3",{attrs:{id:"scroll-behaviour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll-behaviour"}},[s._v("#")]),s._v(" scroll-behaviour")]),s._v(" "),a("p",[a("code",[s._v("scroll-behavior")]),s._v("属性的初始值是"),a("code",[s._v("auto")]),s._v("，如果设置滚动容易元素的"),a("code",[s._v("scroll-behavior")]),s._v("的属性值为"),a("code",[s._v("smooth")]),s._v("则可以让容器（非鼠标手势触发）的滚动变得平滑。")]),s._v(" "),a("p",[a("strong",[s._v("凡是需要滚动的地方都加一句"),a("code",[s._v("scroll-behavior: smooth;")]),s._v("就好了！")])]),s._v(" "),a("p",[s._v("在 PC 浏览器中，网页默认滚动是在"),a("code",[s._v("<html>")]),s._v("标签上的，移动端大多数在"),a("code",[s._v("<body>")]),s._v("标签上，于是加上这么一句：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html, body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("scroll-behavior")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" smooth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这样就可以让页面的滚动效果很平滑了。")]),s._v(" "),a("h3",{attrs:{id:"scrollintoview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrollintoview"}},[s._v("#")]),s._v(" scrollIntoView")]),s._v(" "),a("p",[s._v("DOM 元素的"),a("code",[s._v("scrollIntoView()")]),s._v("方法是一个 IE6 浏览器也支持的原生 JS API，可以让元素进入视区，通过触发滚动容器的定位实现。")]),s._v(" "),a("p",[s._v("随着 Chrome 和 Firefox 浏览器开始支持 CSS "),a("code",[s._v("scroll-behavior")]),s._v("属性，顺便对"),a("code",[s._v("scrollIntoView()")]),s._v("方法进行了升级，使支持更多参数，其中一个参数就是可以使滚动平滑。")]),s._v(" "),a("p",[s._v("语法如下：")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scrollIntoView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    behavior"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smooth"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("随便打开一个有链接的页面，把首个链接滚动到屏幕外，然后控制台输入类似下面代码，就可以看到页面平滑滚动定位了：")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("links"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scrollIntoView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    behavior"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smooth"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果网页已经通过 CSS 设置了"),a("code",[s._v("scroll-behavior: smooth;")]),s._v("声明，直接执行"),a("code",[s._v("target.scrollIntoView()")]),s._v("方法就会有平滑滚动，无需再额外设置"),a("code",[s._v("behavior")]),s._v("参数。")]),s._v(" "),a("blockquote",[a("p",[s._v("升级后的"),a("code",[s._v("scrollIntoView()")]),s._v("方法除了支持"),a("code",[s._v("behavior")]),s._v("参数，还支持"),a("code",[s._v("block")]),s._v("、"),a("code",[s._v("inline")]),s._v("等参数，有兴趣可以参阅 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView",target:"_blank",rel:"noopener noreferrer"}},[s._v("MDN 相关文档"),a("OutboundLink")],1),s._v("。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);