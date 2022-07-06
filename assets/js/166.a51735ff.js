(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{645:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"直播环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#直播环境"}},[s._v("#")]),s._v(" 直播环境")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://qiniu.sponges.cn/201902130915_266.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"http://qiniu.sponges.cn/201902130915_466.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"http://qiniu.sponges.cn/201902130918_112.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"直播协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#直播协议"}},[s._v("#")]),s._v(" 直播协议")]),s._v(" "),n("p",[s._v("流媒体协议\n直播常用到的流媒体协议有 rtmp、http、hls、rtsp。")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("传输协议")]),s._v(" "),n("th",[s._v("播放器")]),s._v(" "),n("th",[s._v("延迟")]),s._v(" "),n("th",[s._v("内存")]),s._v(" "),n("th",[s._v("CPU")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("RTMP")]),s._v(" "),n("td",[s._v("Flash")]),s._v(" "),n("td",[s._v("1s")]),s._v(" "),n("td",[s._v("430M")]),s._v(" "),n("td",[s._v("11%")])]),s._v(" "),n("tr",[n("td",[s._v("HTTP-FLV")]),s._v(" "),n("td",[s._v("Video")]),s._v(" "),n("td",[s._v("1s")]),s._v(" "),n("td",[s._v("310M")]),s._v(" "),n("td",[s._v("4.4%")])]),s._v(" "),n("tr",[n("td",[s._v("HLS")]),s._v(" "),n("td",[s._v("Video")]),s._v(" "),n("td",[s._v("20s")]),s._v(" "),n("td",[s._v("205M")]),s._v(" "),n("td",[s._v("3%")])]),s._v(" "),n("tr",[n("td",[s._v("WebSocket-FLV")]),s._v(" "),n("td",[s._v("H5-FLV")]),s._v(" "),n("td",[s._v("<1s")]),s._v(" "),n("td",[s._v("410M")]),s._v(" "),n("td",[s._v("8%")])])])]),s._v(" "),n("p",[s._v("在支持浏览器的协议里，延迟排序是："),n("br"),s._v("\nWebSocket-FLV<RTMP = HTTP-FLV < HLS"),n("br"),s._v("\n而性能排序恰好相反："),n("br"),s._v("\nRTMP > =WebSocket-FLV >HTTP-FLV> HLS"),n("br"),s._v("\n也就是说延迟小的性能不好。"),n("br"),s._v("\n可以看出在浏览器里做直播，使用 HTTP-FLV 或者 websocket-flv 协议是不错的，性能优于 RTMP+Flash，延迟可以做到和 RTMP+Flash 一样甚至更好。")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("协议名称")]),s._v(" "),n("th",[s._v("优势")]),s._v(" "),n("th",[s._v("劣势")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("rtmp")]),s._v(" "),n("td",[n("br"),s._v("实时性高：一般能做到 3 秒内。"),n("br"),s._v("支持加密：rtmpe 和 rtmps 为加密协议。"),n("br"),s._v("稳定性高：在 PC 平台上 flash 播放的最稳定方式是 rtmp，如果做 CDN 或者大中型集群分发，选择稳定性高的协议一定是必要的。"),n("br"),s._v("一般主流编码器都支持该协议。")]),s._v(" "),n("td",[n("br"),s._v("协议复杂：开发者写起来累，效率也不行。"),n("br"),s._v("Cache 麻烦：流协议做缓存不方便。")])]),s._v(" "),n("tr",[n("td",[s._v("hls")]),s._v(" "),n("td",[s._v("性能好：和 http 一样。"),n("br"),s._v("穿墙：和 http 一样。"),n("br"),s._v("原生支持很好：iOS 上支持完美，Android 上支持差些。PC/flash 上现在也有各种 as 插件支持 HLS。")]),s._v(" "),n("td",[s._v("实时性差：与 ts 切片长度有关，大约 3 个切片长度时间的延迟，基本上 HLS 的延迟在 10 秒以上。"),n("br"),s._v("文件碎片：若分发 HLS，码流低，切片较小时，会导致太多的文件碎片")])]),s._v(" "),n("tr",[n("td",[s._v("rtsp")]),s._v(" "),n("td",[s._v("延迟低，一般都能够做到 500ms。"),n("br"),s._v("带宽好，时效率高。"),n("br"),s._v("倍速播放，主要是回放的时候提供的功能。"),n("br"),s._v("控制精准，任意选择播放点。")]),s._v(" "),n("td",[s._v("服务端实现复杂。"),n("br"),s._v("代理服务器弱：数量少，优化少。"),n("br"),s._v("无路由器防火墙穿透。"),n("br"),s._v("管流分离：需要 1-3 个通道。")])])])]),s._v(" "),n("blockquote",[n("p",[s._v("网络流媒体协议之——HLS 概述"),n("br"),s._v("\nhttps://blog.csdn.net/fireroll/article/details/77658855"),n("br"),s._v(" "),n("img",{attrs:{src:"http://qiniu.sponges.cn/201902130924_988.png",alt:""}})])]),s._v(" "),n("h2",{attrs:{id:"直播源制作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#直播源制作"}},[s._v("#")]),s._v(" 直播源制作")]),s._v(" "),n("p",[s._v("参考 https://www.jianshu.com/p/aa7f9e204a62")]),s._v(" "),n("p",[s._v("安装 ffmpeg")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yasm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装epel包")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y epel-release\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入签名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入签名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#升级软件包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-1.el7.nux.noarch.rpm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装ffmpeg")]),s._v("\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ffmpeg-libs\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y ffmpeg\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检查版本")]),s._v("\nffmpeg -version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"添加-nginx-rtmp-module-模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加-nginx-rtmp-module-模块"}},[s._v("#")]),s._v(" 添加 nginx-rtmp-module 模块")]),s._v(" "),n("p",[s._v("第一种方式")]),s._v(" "),n("blockquote",[n("p",[s._v("nginx 添加模块参考 https://zhidao.baidu.com/question/581069144.html")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone http://github.com/wandenberg/nginx-rtmp-module.git\nnginx -V\n\n./configure --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("www --group"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("www --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module --with-http_gzip_static_module --with-http_sub_module --with-stream --with-stream_ssl_module --with-openssl"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/lnmp1.5/src/openssl-1.0.2o  --add-module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx-rtmp-module\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("第二种方式 lnmp 一键安装包环境")]),s._v(" "),n("blockquote",[n("p",[s._v("lnmp 添加模块参考 https://lnmp.org/faq/lnmp1-2-upgrade.html"),n("br"),s._v("\nlnmp 根目录下"),n("br"),s._v("\nvi lnmp.conf"),n("br"),s._v("\nNginx_Modules_Options 后添加所需的模块")])]),s._v(" "),n("p",[s._v("如："),n("br"),s._v("\nNginx_Modules_Options='--add-module=/usr/local/nginx-rtmp-module'")]),s._v(" "),n("p",[s._v("./upgrade.sh nginx"),n("br"),s._v("\n重启 nginx"),n("br"),s._v("\netc/init.d/nginx restart")]),s._v(" "),n("h2",{attrs:{id:"修改-nginx-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-nginx-配置"}},[s._v("#")]),s._v(" 修改 nginx 配置")]),s._v(" "),n("p",[s._v("打开/usr/local/etc/nginx/nginx.conf 文件")]),s._v(" "),n("p",[s._v("添加 rtmp 模块")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("rtmp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1935")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        chunk_size "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RTMP 直播流配置")]),s._v("\n        application rtmplive "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直播的模式")]),s._v("\n            live on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置最大连接数")]),s._v("\n            max_connections "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hls 直播流配置")]),s._v("\n        application hls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            live on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            hls on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            hls_path /home/live/hls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个hls分片多大")]),s._v("\n            hls_fragment 5s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 视频拉流")]),s._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9005")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#root /home/wwwroot/live-pull;")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#include rewrite/none.conf;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page   404   /404.html;")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Deny access to PHP files in specific directory")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置hls")]),s._v("\n        location /hls "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            expires max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disable cache")]),s._v("\n            add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cache-Control'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-cache'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Origin'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v(" always"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Expose-Headers'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Length'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_method")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OPTIONS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Origin'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Max-Age'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1728000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/plain charset=UTF-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Length'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            types "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                application/dash+xml mpd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                application/vnd.apple.mpegurl m3u8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                video/mp2t ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            root /home/live"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            add_header Cache-Control no-cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location ~ .*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("bmp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("swf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            expires      30d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location ~ .*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("js"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?$\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            expires      12h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location ~ /.well-known "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            deny all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        access_log off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])]),n("ol",[n("li",[s._v("RTMP 推流\n请使用 Item（Mac 系统） 或者 gitbash（windows 系统）")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ffmpeg -re -i test.mp4 -vcodec libx264 -acodec aac -strict -2 -f flv rtmp://120.78.219.51:1935/rtmplive/rtmp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("验证地址 rtmp://120.78.219.51:1935/rtmplive/rtmp // 需要使用播放插件 或专用播放器")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("HLS 推流\n请使用 Item（Mac 系统） 或者 gitbash（windows 系统）")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ffmpeg -re -i test.mp4 -vcodec libx264 -acodec aac -strict -2 -f flv rtmp://120.78.219.51:1935/hls/stream\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("验证地址 http://120.78.219.51:9005/hls/stream.m3u8 // 支持苹果手机直接打开观看 其他需要使用播放插件或专用播放器")]),s._v(" "),n("h2",{attrs:{id:"nodejs-直播服务器搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-直播服务器搭建"}},[s._v("#")]),s._v(" nodejs 直播服务器搭建")]),s._v(" "),n("blockquote",[n("p",[s._v("https://github.com/illuspas/Node-Media-Server/blob/master/README_CN.md")])]),s._v(" "),n("h2",{attrs:{id:"使用-ffmpeg-推流本地视频"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-ffmpeg-推流本地视频"}},[s._v("#")]),s._v(" 使用 ffmpeg 推流本地视频")]),s._v(" "),n("p",[s._v("ffmpeg 中文文档")]),s._v(" "),n("blockquote",[n("p",[s._v("https://xdsnet.gitbooks.io/other-doc-cn-ffmpeg")])]),s._v(" "),n("p",[s._v("ffmpeg -re -i /home/lee/video.mp4 -vcodec copy -acodec copy -b:v 800k -b:a 32k -f flv rtmp://localhost/hls/rtmp")]),s._v(" "),n("p",[s._v("-re : 表示使用文件的原始帧率进行读取，因为 ffmpeg 读取视频帧的速度很快，如果不使用这个参数，ffmpeg 可以在很短时间就把 video.mp4 中的视频帧全部读取完并进行推流")]),s._v(" "),n("p",[s._v("-i :这个参数表示输入 ，后面/home/lee/video.mp4 就是输入文件。")]),s._v(" "),n("p",[s._v("-vcodec copy : -vcodec 表示使用的视频编解码器 ，前缀 v 表示 video。后面紧跟的 copy 表示复制使用源文件的视频编解码器，比如原文件的编解码器(codec)是 h264，则这里就使用 h264。")]),s._v(" "),n("p",[s._v("-acodec copy : -acodec 表示使用的音频编解码器，前缀 a 表示 audio。后面的 copy 表示使用源文件的音频编解码器。")]),s._v(" "),n("p",[s._v("-b:v 800k : -b:v 表示视频的比特率(bitrate) ，为 800k。")]),s._v(" "),n("p",[s._v("-b:a 32k : 表示音频的比特率为 32k。")]),s._v(" "),n("p",[s._v('-f flv : -f 表示 format ，就是强制输出格式为 flv，这一步其实也叫封装(mux)，封装要做的事就是把视频和音频混合在一起，进行同步。紧跟在后面的 rtmp://localhost/videotest 表示输出的"文件名"，这个文件名可以是一个本地的文件，也可以指定为 rtmp 流媒体地址。指定为 rtmp 流媒体地址后，则 ffmpeg 就可以进行推流。')])])}),[],!1,null,null,null);t.default=e.exports}}]);