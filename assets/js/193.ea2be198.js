(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{803:function(n,_,t){"use strict";t.r(_);var v=t(5),r=Object(v.a)({},(function(){var n=this,_=n.$createElement,t=n._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"分区分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区分表"}},[n._v("#")]),n._v(" 分区分表")]),n._v(" "),t("p",[n._v("简述MySQL分表操作和分区的工作原理，分别说说分区和分表的"),t("br"),n._v("\n使用场景和各自优缺点。")]),n._v(" "),t("p",[n._v("工作原理"),t("br"),n._v("\n对用户而言，分区表是一个独立的逻辑表，但是底层MySQL将基"),t("br"),n._v("\n分成了多个物理子表，这对用户来说是透明的，每一个分区表都会"),t("br"),n._v("\n使用一个独立的表文件")]),n._v(" "),t("p",[n._v("创建表时使用partition by子句定义每个分区存放的数据，执行查"),t("br"),n._v("\n询时，优化器会根据分区定义过滤那些没有我们需要数据的分区，"),t("br"),n._v("\n这样查询只需要查询所需数据在的分区即可")]),n._v(" "),t("p",[n._v("分区表的原理")]),n._v(" "),t("p",[n._v("适用场景"),t("br"),n._v("\n1.表非常大，无法全部存在内存，或者只在表的最后有热点数据，"),t("br"),n._v("\n其他都是历史数据"),t("br"),n._v("\n2.分区表的数据更易维护，可以对独立的分区进行独立的操作"),t("br"),n._v("\n3.分区表的数据可以分布在不同的机器上，从而高效使用资源"),t("br"),n._v("\n4.可以使用分区表来避免某些特殊的瓶颈"),t("br"),n._v("\n5.可以备份和恢复独立的分区")]),n._v(" "),t("p",[n._v("限制"),t("br"),n._v("\n1.一个表最多只能有1024个分区"),t("br"),n._v("\n2.5.1版本中，分区表表达式必须是整数，5.5可以使用列分区"),t("br"),n._v("\n3.分区字段中如果有主键和唯一索引列，那么主键列和唯一列都必"),t("br"),n._v("\n须包含进来"),t("br"),n._v("\n4.分区表中无法使用外键约束"),t("br"),n._v("\n5.需要对现有表的结构进行修改"),t("br"),n._v("\n6.所有分区都必须使用相同的存储引擎"),t("br"),n._v("\n7.分区函数中可以使用的函数和表达式会有一些限制"),t("br"),n._v("\n8.某些存储引擎不支持分区"),t("br"),n._v("\n9.对于MyISAM的分区表，不能使用load index into cache"),t("br"),n._v("\n10.对于MyISAM表，使用分区表时需要打开更多的文件描述符")]),n._v(" "),t("p",[n._v("分库分表的原理"),t("br"),n._v("\n工作原理"),t("br"),n._v("\n通过一些HASH算法或者工具实现将一张数据表垂直或者水平进行"),t("br"),n._v("\n物理切分")]),n._v(" "),t("p",[n._v("适用场景"),t("br"),n._v("\n1.单表记录条数达到百万到千万级别时"),t("br"),n._v("\n2.解决表锁的问题")]),n._v(" "),t("p",[n._v("分表方式"),t("br"),n._v("\n水平分割"),t("br"),n._v("\n表很大，分割后可以降低在查询时需要读的数据和索引的页数，同"),t("br"),n._v("\n时也降低了索引的层数，提高查询速度")]),n._v(" "),t("p",[n._v("使用场景"),t("br"),n._v("\n1.表中的数据本身就有独立性，例如表中分别记录各个地区的数据"),t("br"),n._v("\n或者不同时期的数据，特别是有些数据常用，有些不常用"),t("br"),n._v("\n2.需要把数据存放在多个介质上")]),n._v(" "),t("p",[n._v("水平分表缺点"),t("br"),n._v("\n1.给应用增加复杂度，通常查询时需要多个表名，查询所有数据都"),t("br"),n._v("\n需UNION操作"),t("br"),n._v("\n2.在许多数据库应用中，这种复杂性会超过它带来的优点，查询时"),t("br"),n._v("\n会增加读一个索引层的磁盘次数")]),n._v(" "),t("p",[n._v("分表方式"),t("br"),n._v("\n垂直分表"),t("br"),n._v("\n把主键和一些列放在一个表，然后把主键和另外的列放在另一个表中"),t("br"),n._v(" "),t("img",{attrs:{src:"http://qiniu.sponges.cn/201902211528_366.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[n._v("使用场景"),t("br"),n._v("\n1.如果一个表中某些列常用，而另外一些列不常用"),t("br"),n._v("\n2.可以使数据行变小，一个数据页能存储更多数据，查询时减少"),t("br"),n._v("\nI/O次数")]),n._v(" "),t("p",[n._v("分表缺点"),t("br"),n._v("\n有些分表的策略基于应用层的逻辑算法，一旦逻辑算法改变，整个"),t("br"),n._v("\n分表逻辑都会改变，扩展性较差"),t("br"),n._v("\n对于应用层来说，逻辑算法无疑增加开发成本")]),n._v(" "),t("h2",{attrs:{id:"分区操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区操作"}},[n._v("#")]),n._v(" 分区操作")]),n._v(" "),t("p",[n._v("查看是否支持分区\n"),t("img",{attrs:{src:"http://qiniu.sponges.cn/201902241859_496.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[n._v("特点: 在逻辑上为一个表，在物理上存储在多个文件中\n"),t("img",{attrs:{src:"http://qiniu.sponges.cn/201902241856_712.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902241857_198.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902241853_82.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902241902_313.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902241904_511.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902241940_46.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902242023_359.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902242045_855.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902242045_268.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902242046_87.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[n._v("备份表")]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902242052_638.png?imageView2/0/w/880/h/680",alt:""}})]),n._v(" "),t("p",[t("img",{attrs:{src:"http://qiniu.sponges.cn/201902242055_734.png?imageView2/0/w/880/h/680",alt:""}})])])}),[],!1,null,null,null);_.default=r.exports}}]);