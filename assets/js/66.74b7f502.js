(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{686:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。Flex 是为了解决传统 CSS 布局中难以解决的问题，比如让子元素自适应的扩展或者收缩宽度/高度，可以简便、完整、响应式地实现各种页面布局等。')]),s._v(" "),a("p",[s._v("Flex 布局可以方便的实现以下的功能：")]),s._v(" "),a("ul",[a("li",[s._v("如果元素容器没有足够的空间，我们无需计算每个元素的宽度，就可以设置他们在同一行；")]),s._v(" "),a("li",[s._v("可以快速让他们布局在一列；")]),s._v(" "),a("li",[s._v("可以方便让他们对齐容器的左、右、中间等；")]),s._v(" "),a("li",[s._v("无需修改结构就可以改变他们的显示顺序；")]),s._v(" "),a("li",[s._v("如果元素容器设置百分比和视窗大小改变，不用提心未指定元素的确切宽度而破坏布局，因为容器中的每个子元素都可以自动分配容器的宽度或高度的比例。")])]),s._v(" "),a("blockquote",[a("p",[s._v("注意：设为 Flex 布局以后，其子元素的"),a("code",[s._v("float")]),s._v("、"),a("code",[s._v("clear")]),s._v("和"),a("code",[s._v("vertical-align")]),s._v("属性将失效。")])]),s._v(" "),a("h2",{attrs:{id:"一、成员级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、成员级别"}},[s._v("#")]),s._v(" 一、成员级别")]),s._v(" "),a("p",[s._v("Flex 布局中，分为容器和容器成员(flex item)两个级别。这两个级别分别对应不同的设置，从而展示不同的结果。")]),s._v(" "),a("p",[s._v("其中，Flex 容器一般是用来设置 flex 属性，使其成为 flex 盒子，还可以设置其他属性来控制其内子元素的布局方式、宽高对齐方式等；在容器成员级别中，可以设置子元素的宽高伸缩度等。下面是 Flex 的属性图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466860693911.png",alt:"Flex 属性图"}})]),s._v(" "),a("p",[s._v("容器默认存在两根轴：水平的主轴("),a("code",[s._v("main axis")]),s._v(")和垂直的交叉轴("),a("code",[s._v("cross axis")]),s._v(")。主轴的开始位置（与边框的交叉点）叫做"),a("code",[s._v("main start")]),s._v("，结束位置叫做"),a("code",[s._v("main end")]),s._v("；交叉轴的开始位置叫做"),a("code",[s._v("cross start")]),s._v("，结束位置叫做"),a("code",[s._v("cross end")]),s._v("。")]),s._v(" "),a("p",[s._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做"),a("code",[s._v("main size")]),s._v("，占据的交叉轴空间叫做"),a("code",[s._v("cross size")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466784316721.png",alt:"Flex 轴线"}})]),s._v(" "),a("h2",{attrs:{id:"二、flex-容器属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、flex-容器属性"}},[s._v("#")]),s._v(" 二、Flex 容器属性")]),s._v(" "),a("p",[s._v("flex 容器可以从"),a("code",[s._v("flex-direction")]),s._v("、"),a("code",[s._v("flex-wrap")]),s._v("、"),a("code",[s._v("flex-flow")]),s._v("、"),a("code",[s._v("justify-content")]),s._v("、"),a("code",[s._v("align-items")]),s._v("、"),a("code",[s._v("align-content")]),s._v("这 6 个方面进行设置")]),s._v(" "),a("h3",{attrs:{id:"_2-1-定义-flex-盒子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-定义-flex-盒子"}},[s._v("#")]),s._v(" 2.1 定义 Flex 盒子")]),s._v(" "),a("p",[s._v("任何一个容器都可以指定为 Flex 布局：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("行内元素也可以使用 Flex 布局：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("由于 IE10、IE11 目前使用中出现了大量的 bug，Android 4.3 只支持老的 flexbox 规范，所以在使用的时候，一般需要添加上一些老的写法：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 最老版本 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flexbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 过渡版本 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* webkit */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("或者：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 最老版本 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flexbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 过渡版本 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-inline-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* webkit */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_2-2-flex-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-flex-direction"}},[s._v("#")]),s._v(" 2.2 flex-direction")]),s._v(" "),a("p",[s._v("该属性设置 flex 的主轴方向。可选值如下：")]),s._v(" "),a("ul",[a("li",[s._v("column-reverse  主轴在垂直方向，起点在下沿。")]),s._v(" "),a("li",[s._v("column  主轴在垂直方向，起点在上沿。")]),s._v(" "),a("li",[s._v("row  默认值。主轴在水平方向，起点在左端。")]),s._v(" "),a("li",[s._v("row-reverse  主轴在水平方向，起点在右端。")])]),s._v(" "),a("p",[s._v("效果分别如下所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466837517430.png",alt:"fle-direction"}})]),s._v(" "),a("h3",{attrs:{id:"_2-3-flex-wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-flex-wrap"}},[s._v("#")]),s._v(" 2.3 flex-wrap")]),s._v(" "),a("p",[s._v('默认情况下，容器项目都排在一条线（又称"轴线"）上。')]),s._v(" "),a("p",[a("code",[s._v("flex-wrap")]),s._v("属性定义：如果一条轴线排不下，如何换行。可选值有：")]),s._v(" "),a("ul",[a("li",[s._v("nowrap  默认值。不换行。所有的容器成员都排在一条线上。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466841315540.png",alt:"flex-wrap nowrap"}})]),s._v(" "),a("ul",[a("li",[s._v("wrap  换行。第一行在上方，其他行依次往下排列。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466841431629.png",alt:"flex-wrap wrap"}})]),s._v(" "),a("ul",[a("li",[s._v("wrap-reverse  换行。第一行在下方，其他行依次往上排列。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466841487572.png",alt:"flex-wrap"}})]),s._v(" "),a("h3",{attrs:{id:"_2-4-flex-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-flex-flow"}},[s._v("#")]),s._v(" 2.4 flex-flow")]),s._v(" "),a("p",[s._v("这个属性是"),a("code",[s._v("flex-direction")]),s._v("和"),a("code",[s._v("flex-wrap")]),s._v("两个属性的简写方式。默认值是"),a("code",[s._v("row nowrap")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_2-5-justify-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-justify-content"}},[s._v("#")]),s._v(" 2.5 justify-content")]),s._v(" "),a("p",[s._v("定义了容器成员在主轴上的对齐方式。可选值有：")]),s._v(" "),a("ul",[a("li",[s._v("flex-start  默认值。主轴起始端对齐。")]),s._v(" "),a("li",[s._v("flex-end  主轴结束端对齐。")]),s._v(" "),a("li",[s._v("center  沿主轴居中对齐。")]),s._v(" "),a("li",[s._v("space-between  两端对齐。容器成员之间的空格间隙相同。")]),s._v(" "),a("li",[s._v("space-around  两端对齐。每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466842047964.png",alt:"justify-content"}})]),s._v(" "),a("h3",{attrs:{id:"_2-6-align-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-align-items"}},[s._v("#")]),s._v(" 2.6 align-items")]),s._v(" "),a("p",[s._v("定义容器成员在交叉轴上如何对齐。可选值有：")]),s._v(" "),a("ul",[a("li",[s._v("flex-start  交叉轴的起始点对齐。")]),s._v(" "),a("li",[s._v("flex-end  交叉轴的结束端对齐。")]),s._v(" "),a("li",[s._v("center  沿交叉轴居中对齐。")]),s._v(" "),a("li",[s._v("baseline  容器成员的第一行文字的基线对齐。")]),s._v(" "),a("li",[s._v("stretch  默认值。如果项目未设置高度或高度设为"),a("code",[s._v("auto")]),s._v("，将占满整个容器的高度。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466842633692.png",alt:"align-items"}})]),s._v(" "),a("h3",{attrs:{id:"_2-7-align-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-align-content"}},[s._v("#")]),s._v(" 2.7 align-content")]),s._v(" "),a("p",[s._v("该属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),s._v(" "),a("blockquote",[a("p",[s._v("Flex 容器中，每一沿主轴方向排列的行或列都属于一根轴线。所以如果换行(列)了，那就会有多根轴线。")])]),s._v(" "),a("p",[s._v("可选值有：")]),s._v(" "),a("ul",[a("li",[s._v("flex-start  与交叉轴起始端对齐。")]),s._v(" "),a("li",[s._v("flex-end  与交叉轴终端对齐。")]),s._v(" "),a("li",[s._v("center  沿交叉轴居中对齐。")]),s._v(" "),a("li",[s._v("space-between  与交叉轴两端对齐，轴线之间的间隔平均分布。")]),s._v(" "),a("li",[s._v("space-around  每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),s._v(" "),a("li",[s._v("stretch  默认值。轴线扩展高度/宽度，占满整个交叉轴")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466844908229.png",alt:"align-content"}})]),s._v(" "),a("h2",{attrs:{id:"三、flex-成员属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、flex-成员属性"}},[s._v("#")]),s._v(" 三、Flex 成员属性")]),s._v(" "),a("p",[s._v("容器盒子的成员也有 6 个属性来设置成员的一些布局状态等："),a("code",[s._v("order")]),s._v("、"),a("code",[s._v("flex-grow")]),s._v("、"),a("code",[s._v("flex-shrink")]),s._v("、"),a("code",[s._v("flex-basis")]),s._v("、"),a("code",[s._v("flex")]),s._v("、"),a("code",[s._v("align-self")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("容器盒子的成员只是其内的一级子元素，而不包含子元素的子元素等。")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-order"}},[s._v("#")]),s._v(" 3.1 order")]),s._v(" "),a("p",[s._v("定义项目的排列顺序。其值为数值。数值越小，排列越靠前，默认为0。也可以取负值。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <integer>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466845429220.png",alt:"order"}})]),s._v(" "),a("h3",{attrs:{id:"_3-2-flex-grow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flex-grow"}},[s._v("#")]),s._v(" 3.2 flex-grow")]),s._v(" "),a("p",[s._v("定义容器成员的放大比例，默认为 0，即：如果存在剩余空间，也不放大。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 0 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果所有项目的"),a("code",[s._v("flex-grow")]),s._v("属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的"),a("code",[s._v("flex-grow")]),s._v("属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466845515760.png",alt:"flex-grow"}})]),s._v(" "),a("p",[s._v("注意：这个属性是指定容器成员对"),a("strong",[s._v("剩余空间")]),s._v("的分配比例情况。也就是说，将容器主轴线方向上的长度，减去轴线上所有成员总长度，得到的结果如果是正数，则这部分空间会被按照成员这个属性设置的比例分配给各个容器成员。")]),s._v(" "),a("p",[s._v("比如说：容器盒子的宽度是 480px，"),a("code",[s._v("flex-direction: row;")]),s._v("的情况下，其内有三个"),a("code",[s._v("flex-basis")]),s._v("为 100px 的容器成员。我们从左到右给予每个容器成员的"),a("code",[s._v("flex-grow")]),s._v("值分别为 3、2、1，那么当 flex 作用之后，最左边的容器成员实际增加的宽度可以算到增加的宽度是 90px，于是最后最左边成员的宽度是 190px。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466852134445.png",alt:"flex-grow 计算"}})]),s._v(" "),a("h3",{attrs:{id:"_3-3-flex-shrink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-shrink"}},[s._v("#")]),s._v(" 3.3 flex-shrink")]),s._v(" "),a("p",[s._v("定义了项目的缩小比例，默认为 1，即：如果空间不足，该项目将缩小。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 1 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果所有项目的"),a("code",[s._v("flex-shrink")]),s._v("属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的"),a("code",[s._v("flex-shrink")]),s._v("属性为 0，其他项目都为 1，则空间不足时，前者不缩小。")]),s._v(" "),a("p",[s._v("负值对该属性无效。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466845926932.png",alt:"flex-shrink"}})]),s._v(" "),a("p",[s._v("默认状态下，伸缩项目不会收缩至比其最小内容尺寸（最长的英文词或是固定尺寸元素的长度）更小。可以靠设置"),a("code",[s._v("min-width")]),s._v("或"),a("code",[s._v("min-height")]),s._v("属性来改变这个默认状态。")]),s._v(" "),a("p",[s._v("注意："),a("code",[s._v("flex-shrink")]),s._v("和"),a("code",[s._v("flex-grow")]),s._v("的计算方式并不相同。因为当在加的时候无所谓，但是在减的时候，如果只计算赋予的"),a("code",[s._v("flex-shrink")]),s._v("值，那么很有可能最后减少的宽度比"),a("code",[s._v("flex-basis")]),s._v("大，于是容器成员的宽度就变成负值。而元素最小的宽度就只能是 0。那么就要把"),a("code",[s._v("flex-basis")]),s._v("当成参数计算进去，这样就能保证减少的宽度永远小于"),a("code",[s._v("flex-basis")]),s._v("。")]),s._v(" "),a("p",[s._v("例如：容器宽度为 480px，主轴方向为水平方向。三个容器成员的"),a("code",[s._v("flex-basis")]),s._v("都是 200px，"),a("code",[s._v("flex-shrink")]),s._v("分别为 3、2、1。那么就需要这样计算：首先，这三个容器成员总共需要收缩出来"),a("code",[s._v("300px * 2 - 480px = 120px")]),s._v("的宽度；然后，这三个成员总的收缩空间为"),a("code",[s._v("200px * 3 + 200px * 2 + 200px * 1 = 1200px")]),s._v("；对应的，每一份收缩比例中，对应的收缩空间为"),a("code",[s._v("120px * (200px / 1200px) = 20px")]),s._v("；所以，三个容器成员的最终的收缩空间为："),a("code",[s._v("20px * 3 = 60px")]),s._v("、"),a("code",[s._v("20px * 2 = 40px")]),s._v("、"),a("code",[s._v("20px * 1 = 20px")]),s._v("，对应的最终宽度就分别是"),a("code",[s._v("200px - 60px = 140px")]),s._v("、"),a("code",[s._v("200px - 40px = 160px")]),s._v("、"),a("code",[s._v("200px - 20px = 180px")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466857530766.png",alt:"flex-shrink 计算"}})]),s._v(" "),a("h3",{attrs:{id:"_3-4-flex-basis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-flex-basis"}},[s._v("#")]),s._v(" 3.4 flex-basis")]),s._v(" "),a("p",[s._v("定义了在分配多余空间之前，项目占据的主轴空间("),a("code",[s._v("main size")]),s._v(")。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),a("code",[s._v("auto")]),s._v("，即项目的本来大小。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default auto */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("它可以设为跟"),a("code",[s._v("width")]),s._v("或"),a("code",[s._v("height")]),s._v("属性一样的值(如具体 px 值、百分比等)，则项目将占据固定空间。")]),s._v(" "),a("p",[s._v("另外，容器成员设置"),a("code",[s._v("flex-basis")]),s._v("为具体值的时候，如果还设置"),a("code",[s._v("width")]),s._v("(主轴水平)或者"),a("code",[s._v("height")]),s._v("(主轴垂直)时，会以"),a("code",[s._v("flex-basis")]),s._v("的值为准。")]),s._v(" "),a("h3",{attrs:{id:"_3-5-flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-flex"}},[s._v("#")]),s._v(" 3.5 flex")]),s._v(" "),a("p",[a("code",[s._v("flex")]),s._v("属性是"),a("code",[s._v("flex-grow")]),s._v("、"),a("code",[s._v("flex-shrink")]),s._v("和"),a("code",[s._v("flex-basis")]),s._v("的简写，默认值为"),a("code",[s._v("0 1 auto")]),s._v("。后两个属性可选。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none | [ <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-grow'")]),s._v("> <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-shrink'")]),s._v(">? || <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-basis'")]),s._v("> ]\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("该属性有两个快捷值："),a("code",[s._v("auto")]),s._v("("),a("code",[s._v("1 1 auto")]),s._v(") 和 "),a("code",[s._v("none")]),s._v("("),a("code",[s._v("0 0 auto")]),s._v(")。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),s._v(" "),a("h3",{attrs:{id:"_3-6-align-self"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-self"}},[s._v("#")]),s._v(" 3.6 align-self")]),s._v(" "),a("p",[a("code",[s._v("align-self")]),s._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),a("code",[s._v("align-items")]),s._v("属性。默认值为"),a("code",[s._v("auto")]),s._v("，表示继承父元素的"),a("code",[s._v("align-items")]),s._v("属性，如果没有父元素，则等同于"),a("code",[s._v("stretch")]),s._v("。")]),s._v(" "),a("p",[s._v("该属性可能取 6 个值，除了"),a("code",[s._v("auto")]),s._v("，其他都与"),a("code",[s._v("align-items")]),s._v("属性完全一致。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto | flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://cnd.qiniu.lin07ux.cn/markdown/1466846264126.png",alt:"align-self"}})]),s._v(" "),a("h2",{attrs:{id:"四、参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、参考"}},[s._v("#")]),s._v(" 四、参考")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flex 布局教程：语法篇 -- 阮一峰"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);