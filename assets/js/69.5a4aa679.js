(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{825:function(t,s,a){"use strict";a.r(s);var r=a(5),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("转摘："),a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2020/01/css-paint-order/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS paint-order祝大家元旦快乐"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("CSS "),a("code",[t._v("paint-order")]),t._v("作用在 SVG 图形元素上，设置是先绘制描边还是先绘制填充。")]),t._v(" "),a("p",[t._v("在 SVG 中，描边和填充同时都有设置是很常见的，而 SVG 图形的描边和 CSS 中的"),a("code",[t._v("-webkit-text-stroke")]),t._v("描边是一样的，都是居中描边。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1578475771647.png",alt:""}})]),t._v(" "),a("p",[t._v("如果描边粗一些，文字原本颜色说不定就看不见了，那就不是描边效果，是加粗效果了，并不符合预期，有没有什么办法可以实现外描边效果呢？对于 CSS 文本可以使用"),a("code",[t._v("text-shadow")]),t._v("代替描边，在 SVG 中就可以使用本文这里的"),a("code",[t._v("paint-order")]),t._v("控制描边和填充的顺序。")]),t._v(" "),a("h3",{attrs:{id:"_1-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法"}},[t._v("#")]),t._v(" 1. 语法")]),t._v(" "),a("p",[a("code",[t._v("paint-order")]),t._v("属性的语法如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("paint-order: normal | [ fill || stroke || markers ]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("normal")]),t._v(" 默认值。绘制顺序是"),a("code",[t._v("fill stroke markers")]),t._v("。图形绘制是后来居上的，因此默认是描边覆盖填充，标记覆盖描边。")]),t._v(" "),a("li",[a("code",[t._v("fill")]),t._v(" 先填充，然后再描边或标记，和默认值效果相同。")]),t._v(" "),a("li",[a("code",[t._v("stroke")]),t._v(" 先描边，然后再填充或标记。")]),t._v(" "),a("li",[a("code",[t._v("markers")]),t._v(" 先标记，然后再填充或描边。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("||")]),t._v("表示或者，意味着属性值可以共存，")])]),t._v(" "),a("p",[t._v("合法写法示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stroke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" markers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fill markers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" markers stroke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n...\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fill markers stroke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" markers fill stroke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("paint-order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stroke markers fill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h3",{attrs:{id:"_2-作用元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-作用元素"}},[t._v("#")]),t._v(" 2. 作用元素")]),t._v(" "),a("p",[a("code",[t._v("paint-order")]),t._v("可以作用在 SVG 的以下这些元素上：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<circle>")])]),t._v(" "),a("li",[a("code",[t._v("<ellipse>")])]),t._v(" "),a("li",[a("code",[t._v("<line>")])]),t._v(" "),a("li",[a("code",[t._v("<path>")])]),t._v(" "),a("li",[a("code",[t._v("<polygon>")])]),t._v(" "),a("li",[a("code",[t._v("<polyline>")])]),t._v(" "),a("li",[a("code",[t._v("<rect>")])]),t._v(" "),a("li",[a("code",[t._v("<text>")])]),t._v(" "),a("li",[a("code",[t._v("<textPath>")])]),t._v(" "),a("li",[a("code",[t._v("<tspan>")])])]),t._v(" "),a("p",[a("code",[t._v("paint-order")]),t._v("也可以直接作为 XML 属性用在上面这些元素上。")]),t._v(" "),a("h3",{attrs:{id:"_3-兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-兼容性"}},[t._v("#")]),t._v(" 3. 兼容性")]),t._v(" "),a("p",[t._v("目前(2020-01-01)该属性的兼容性还比较好，基本主流的浏览器都支持了，但是 IE 还是不支持：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1578476307896.png",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);