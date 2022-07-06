(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{776:function(n,r,t){"use strict";t.r(r);var v=t(5),e=Object(v.a)({},(function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[n._v("#")]),n._v(" 网络")]),n._v(" "),t("h2",{attrs:{id:"状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[n._v("#")]),n._v(" 状态码")]),n._v(" "),t("p",[n._v("2 开头 （请求成功）表示成功处理了请求的状态代码。"),t("br"),n._v("\n200   （成功）  服务器已成功处理了请求。 通常，这表示服务器供了请求的网页。"),t("br"),n._v("\n201   （已创建）  请求成功并且服务器创建了新的资源。"),t("br"),n._v("\n202   （已接受）  服务器已接受请求，但尚未处理。"),t("br"),n._v("\n203   （非授权信息）  服务器已成功处理了请求，但返回的信息可能来自另一来源。"),t("br"),n._v("\n204   （无内容）  服务器成功处理了请求，但没有返回任何内容。"),t("br"),n._v("\n205   （重置内容） 服务器成功处理了请求，但没有返回任何内容。"),t("br"),n._v("\n206   （部分内容）  服务器成功处理了部分 GET 请求。")]),n._v(" "),t("p",[n._v("3 开头 （请求被重定向）表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向。"),t("br"),n._v("\n300   （多种选择）  针对请求，服务器可执行多种操作。 服务器可根据请求者 (useragent) 选择一项操作，或供操作列表供请求者选择。"),t("br"),n._v("\n301   （永久移动）  请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或HEAD 请求的响应）时，会自动将请求者转到新位置。"),t("br"),n._v("\n302   （临时移动）  服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。"),t("br"),n._v("\n303   （查看其他位置） 请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。"),t("br"),n._v("\n304   （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。"),t("br"),n._v("\n305   （使用代理） 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。"),t("br"),n._v("\n307   （临时重定向）  服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。")]),n._v(" "),t("p",[n._v("4 开头 （请求错误）这些状态代码表示请求可能出错，妨碍了服务器的处理。"),t("br"),n._v("\n400   （错误请求） 服务器不理解请求的语法。"),t("br"),n._v("\n401   （未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。"),t("br"),n._v("\n403   （禁止） 服务器拒绝请求。"),t("br"),n._v("\n404   （未找到） 服务器找不到请求的网页。"),t("br"),n._v("\n405   （方法禁用） 禁用请求中指定的方法。"),t("br"),n._v("\n406   （不接受） 无法使用请求的内容特性响应请求的网页。"),t("br"),n._v("\n407   （需要代理授权） 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理。"),t("br"),n._v("\n408   （请求超时）  服务器等候请求时发生超时。"),t("br"),n._v("\n409   （冲突）  服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息。"),t("br"),n._v("\n410   （已删除）  如果请求的资源已永久删除，服务器就会返回此响应。"),t("br"),n._v("\n411   （需要有效长度） 服务器不接受不含有效内容长度标头字段的请求。"),t("br"),n._v("\n412   （未满足前条件） 服务器未满足请求者在请求中设置的其中一个前条件。"),t("br"),n._v("\n413   （请求实体过大） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。"),t("br"),n._v("\n414   （请求的 URI 过长） 请求的 URI（通常为网址）过长，服务器无法处理。"),t("br"),n._v("\n415   （不支持的媒体类型） 请求的格式不受请求页面的支持。"),t("br"),n._v("\n416   （请求范围不符合要求） 如果页面无法供请求的范围，则服务器会返回此状态代码。"),t("br"),n._v('\n417   （未满足期望值） 服务器未满足"期望"请求标头字段的要求。')]),n._v(" "),t("p",[n._v("5 开头（服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错。"),t("br"),n._v("\n500   （服务器内部错误）  服务器遇到错误，无法完成请求。"),t("br"),n._v("\n501   （尚未实施） 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。"),t("br"),n._v("\n502   （错误网关） 服务器作为网关或代理，从上游服务器收到无效响应。"),t("br"),n._v("\n503   （服务不可用） 服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。"),t("br"),n._v("\n504   （网关超时）  服务器作为网关或代理，但是没有及时从上游服务器收到请求。"),t("br"),n._v("\n505   （HTTP 版本不受支持） 服务器不支持请求中所用的 HTTP 协议版本。")]),n._v(" "),t("h2",{attrs:{id:"网络协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[n._v("#")]),n._v(" 网络协议")]),n._v(" "),t("p",[n._v("1.SMTP:简单邮件协议"),t("br"),n._v("\n2.POP3：邮局协议"),t("br"),n._v("\n3.HTTP：超文本协议"),t("br"),n._v("\n4.FTP：文件传输协议"),t("br"),n._v("\n5.DNS：域名解析服务")]),n._v(" "),t("h2",{attrs:{id:"http-请求报文和应答报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-请求报文和应答报文"}},[n._v("#")]),n._v(" HTTP 请求报文和应答报文")]),n._v(" "),t("p",[n._v("请求头 :"),t("br"),n._v("\nAccept: text/html,image(浏览器可以接收的类型 )"),t("br"),n._v("\nAccept-Charset: ISO-8859-1(浏览器可以接收的编码类型 )"),t("br"),n._v("\nAccept-Encoding: gzip,compress(浏览器可以接收压 缩编码类型 )"),t("br"),n._v("\nAccept-Language: en-us,zh-cn(浏览器可以接收的语言和国家类型 )"),t("br"),n._v("\nHost: www.it315.org:80(浏览器请求的主机和端口 )"),t("br"),n._v("\nIf-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(某个页面缓存时间 )"),t("br"),n._v("\nReferer: http://www.it315.org/index.jsp(请求来自于哪个页面 )"),t("br"),n._v("\nUser-Agent: Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)(浏览器相关信息 )"),t("br"),n._v("\nCookie： (浏览器暂存服务器发送的信息 )"),t("br"),n._v("\nConnection: close(1.0)/Keep-Alive(1.1)(HTTP 请求的版本的特点 )"),t("br"),n._v("\nDate: Tue, 11 Jul 2000 18:23:51 GMT(请求网站的时间 )")]),n._v(" "),t("p",[n._v("响应头："),t("br"),n._v("\nLocation: http://www.it315.org/index.jsp(控制浏览器显示哪个页面 )"),t("br"),n._v("\nServer:apache tomcat(服务器的类型 )"),t("br"),n._v("\nContent-Encoding: gzip(服务器发送的压缩编码方式 )"),t("br"),n._v("\nContent-Length: 80(服务器发送显示的字节码长度 )"),t("br"),n._v("\nContent-Language: zh-cn(服务器发送内容的语言和国家名 )"),t("br"),n._v("\nContent-Type: image/jpeg; charset=UTF-8(服务器发送内容的类型和编码类型 )"),t("br"),n._v("\nLast-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务器最后一次修改的时间 )"),t("br"),n._v("\nRefresh: 1;url=http://www.it315.org(控制浏览器 1 秒钟后转发 URL 所指向的页面 )"),t("br"),n._v("\nContent-Disposition: attachment; filename=aaa.jpg(服务器控制浏览器发下载方式打开文件 )"),t("br"),n._v("\nTransfer-Encoding: chunked(服务器分块传递数据到客户端）"),t("br"),n._v("\nSet-Cookie:SS=Q0=5Lb_nQ; path=/search(服务器发送 Cookie 相关的信息 )"),t("br"),n._v("\nExpires: -1(服务器控制浏览器不要缓存网页，默认是缓存 )"),t("br"),n._v("\nCache-Control: no-cache(服务器控制浏览器不要 缓存网页 )"),t("br"),n._v("\nPragma: no-cache(服务器控制浏览器不要缓存网页 )"),t("br"),n._v("\nConnection: close/Keep-Alive(HTTP 请求的版本的特点 )"),t("br"),n._v("\nDate: Tue, 11 Jul 2000 18:23:51 GMT(响应网站的时间 )")])])}),[],!1,null,null,null);r.default=e.exports}}]);