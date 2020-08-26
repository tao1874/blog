(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{376:function(v,_,t){"use strict";t.r(_);var a=t(9),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("工作中每每用到正则表达式都是去搜索引擎里查，凭着零散的正则知识，勉强拼凑一个出来用。下次遇到同样的问题，还是不会，又去查，很低效的一种行为。")]),v._v(" "),t("p",[v._v("既然经常遇到那就，一次性把它学会。")]),v._v(" "),t("h2",{attrs:{id:"什么是正则表达式？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是正则表达式？"}},[v._v("#")]),v._v(" 什么是正则表达式？")]),v._v(" "),t("p",[v._v("首先正则表达式一种"),t("code",[v._v("处理文字的工具")]),v._v("，比如以下场景：")]),v._v(" "),t("ul",[t("li",[v._v("你正在编辑一段文本，想把文本中的所有 "),t("code",[v._v("hello")]),v._v(" 替换为"),t("code",[v._v("hi")]),v._v("，但是只是替换单词本身，不是将某个包含"),t("code",[v._v("hello")]),v._v("的字符串也进行替换，比如"),t("code",[v._v("ihello")]),v._v("就不做处理")]),v._v(" "),t("li",[v._v("搜索某个特定的文本，但是只是想找到出现在特定位置的，比如每行的开头或者结尾处")])]),v._v(" "),t("p",[v._v("正则表达式是一般内置于某种软件（比如文字编辑工具）或者编程语言中")]),v._v(" "),t("p",[v._v("正则表达式，一般被称为模式，有两部分组成，普通字符 + 特殊字符（也称为元字符），两者组合可以构成很复杂的表达式。")]),v._v(" "),t("h2",{attrs:{id:"匹配单个字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匹配单个字符"}},[v._v("#")]),v._v(" 匹配单个字符")]),v._v(" "),t("h4",{attrs:{id:"匹配单个字符-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匹配单个字符-2"}},[v._v("#")]),v._v(" 匹配单个字符")]),v._v(" "),t("p",[v._v("最简单的正则表达式就是纯文本，比如下面这段文本")]),v._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[v._v("Hello,my name is Tao.\n")])])]),t("p",[v._v("我想匹配其中的"),t("code",[v._v("Tao")]),v._v("，其正则表达式为"),t("code",[v._v("/Tao/")])]),v._v(" "),t("blockquote",[t("p",[v._v("在"),t("code",[v._v("js")]),v._v(" 中正则表达式是同时也是一个正则表达式对象 ，创建一个正则表达式可使用字面量两个斜杠和其中的模式构成")])]),v._v(" "),t("h4",{attrs:{id:"匹配任意字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匹配任意字符"}},[v._v("#")]),v._v(" 匹配任意字符")]),v._v(" "),t("p",[v._v("上面匹配模式是已知的静态文本，假如需要匹配不可预知的字符呢？")]),v._v(" "),t("p",[v._v("在正则表达式中，英文字符"),t("code",[v._v(".")]),v._v(" 用来匹配任意一个单个的字符，比如"),t("code",[v._v("/hel.o/g")]),v._v("可以在下面文本中找到三处匹配")]),v._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[v._v("hello hel-o hel2o\n")])])]),t("blockquote",[t("p",[v._v("上面正则表达式末尾有标记"),t("code",[v._v("g")]),v._v("，表示 "),t("code",[v._v("global")]),v._v("，意为匹配多个结果，返回数组，没有该标记，返回匹配到的第一个结果")])]),v._v(" "),t("h2",{attrs:{id:"匹配一组字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匹配一组字符"}},[v._v("#")]),v._v(" 匹配一组字符")]),v._v(" "),t("p",[v._v("如果在"),t("code",[v._v("cat cot cet")]),v._v("这组单词中，找到 "),t("code",[v._v("cat")]),v._v(" 和"),t("code",[v._v("cot")]),v._v(" 这两个单词。上面的方法就有点显得捉襟见肘。"),t("code",[v._v("/c[ao]t/")]),v._v("，这个表达中用一对方括号表示一组字符集合，"),t("code",[v._v("[ao]")]),v._v("表示匹配到这个集合中的任意一项即可，可以理解为"),t("code",[v._v("[和]")]),v._v(" ，我们会频繁使用到一些字符结合，比如 0~9，a~z 等，正则表达式提供了一个特殊的元字符"),t("code",[v._v("-")]),v._v("，可以用来表示一种字符区间，比如："),t("code",[v._v("[a-z]")]),v._v("，表示所有的小写字母。")]),v._v(" "),t("h4",{attrs:{id:"取非匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取非匹配"}},[v._v("#")]),v._v(" 取非匹配")]),v._v(" "),t("p",[v._v("某些情况，我们给出一组不需要得到的字符组， 这个时候相当于对现有字符组做取非操作，用元字符"),t("code",[v._v("^")]),v._v("表示，例如")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("[^0-9]")]),v._v("表示匹配任何不是数字的字符")])]),v._v(" "),t("p",[v._v("行文至此，我们已经接触了三个特殊字符，"),t("code",[v._v(".")]),v._v("、"),t("code",[v._v("-")]),v._v("、"),t("code",[v._v("^")]),v._v("，其实正则表达式中有很多特殊字符，这类字符统称为"),t("code",[v._v("元字符")]),v._v("，大部分元字符需要用"),t("code",[v._v("\\")]),v._v("标记")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("元字符")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("\\")]),v._v(" "),t("td",[v._v("将下一个字符标记为元字符")])]),v._v(" "),t("tr",[t("td",[v._v("\\d")]),v._v(" "),t("td",[v._v("匹配一个数字，等价于"),t("code",[v._v("[0-9]")])])]),v._v(" "),t("tr",[t("td",[v._v("\\D")]),v._v(" "),t("td",[v._v("匹配一个非数字，等价于"),t("code",[v._v("[^0-9]")])])]),v._v(" "),t("tr",[t("td",[v._v("\\w")]),v._v(" "),t("td",[v._v("匹配字母、数字、下划线，等价于"),t("code",[v._v("[A-Za-z0-9_]")])])]),v._v(" "),t("tr",[t("td",[v._v(".")]),v._v(" "),t("td",[v._v("除了换行符之外的任何字符")])]),v._v(" "),t("tr",[t("td",[v._v("\\s")]),v._v(" "),t("td",[v._v("空白字符串，包括空格，制表符、换行符、换页符")])])])]),v._v(" "),t("p",[v._v("一般来说，大写的元字符是小写元字符的取非结果")]),v._v(" "),t("p",[v._v("有的时候，我们需要匹配元字符本身，则需要对元字符进行转义，如"),t("code",[v._v("\\")]),v._v("这个元字符")]),v._v(" "),t("p",[v._v("文本：")]),v._v(" "),t("blockquote",[t("p",[v._v("file\\doc")])]),v._v(" "),t("p",[v._v("正则表达式：")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("file\\\\")]),v._v("其中出现两侧斜杠，第一次表转义，下一个字符将作为普通字符处理")])]),v._v(" "),t("h2",{attrs:{id:"重复匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重复匹配"}},[v._v("#")]),v._v(" 重复匹配")]),v._v(" "),t("p",[v._v("前面的都是针对单个字符的单词匹配，某些情况下，我们的正则表达式会重复使用多次，我们也可以将该表达式写多次，但是显然不是最好的方式，我们可以指定，对前面的正则表达式循环多少次，一般来说，可以分为，至少 n 次，n 可以是任何整数，也可以表示一个区间  n-m 次，至少 n 次，至多 m 次等。特殊点的情况，出现一次或者没有，用 "),t("code",[v._v("?")]),v._v("表示，0 次，或者无数次，用"),t("code",[v._v("*")]),v._v("表示，出现一次或者无数次"),t("code",[v._v("+")]),v._v("，表格总结如下")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("元字符")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("？")]),v._v(" "),t("td",[v._v("出现一次或者没有")])]),v._v(" "),t("tr",[t("td",[v._v("*")]),v._v(" "),t("td",[v._v("0次或者无数次")])]),v._v(" "),t("tr",[t("td",[v._v("+")]),v._v(" "),t("td",[v._v("1次或者无数次")])]),v._v(" "),t("tr",[t("td",[v._v("{n,}")]),v._v(" "),t("td",[v._v("至少 n次")])]),v._v(" "),t("tr",[t("td",[v._v("{n,m}")]),v._v(" "),t("td",[v._v("至少n次，最多m次")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("{} 表区间，{n,m}形成一个左闭又闭的区间，{n,} 表示最少 n 次，右边无限制。")])]),v._v(" "),t("p",[v._v("比如"),t("code",[v._v("\\w+@\\w+\\.\\w+")]),v._v("这个正则表达式可以匹配一个电子邮件地址")]),v._v(" "),t("h4",{attrs:{id:"防止过度匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防止过度匹配"}},[v._v("#")]),v._v(" 防止过度匹配")]),v._v(" "),t("p",[t("code",[v._v("*")]),v._v(" 和 "),t("code",[v._v("+")]),v._v("都是所谓的贪婪型元字符，尽可能多的匹配，有时候我们不需要贪婪型模式，可以使用这些字符的懒惰型模式，很简单就是这些元字符后面加上 "),t("code",[v._v("?")]),v._v("，表示尽可能的少匹配。")]),v._v(" "),t("h2",{attrs:{id:"位置匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位置匹配"}},[v._v("#")]),v._v(" 位置匹配")]),v._v(" "),t("p",[v._v("我们现在可以运用前述的各种元字符组合对文本任意字符串进行匹配，这些字符出现在任意位置，但是有的时候我们需要匹配特定位置的字符，则需要用到位置匹配")]),v._v(" "),t("h3",{attrs:{id:"单词边界"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单词边界"}},[v._v("#")]),v._v(" 单词边界")]),v._v(" "),t("p",[v._v("比如字符串")]),v._v(" "),t("blockquote",[t("p",[v._v("this is an apple applele.")])]),v._v(" "),t("p",[v._v("我想找到单词 apple ，很自然我们的正则是"),t("code",[v._v("/apple/")]),v._v("，可是这样还会找到 applele 中前面的 apple，正确的正则应该是"),t("code",[v._v("/\\bapple\\b/")])]),v._v(" "),t("p",[t("code",[v._v("\\b")]),v._v("表示匹配一个单词的开始或者结尾，"),t("code",[v._v("\\B")]),v._v("表示不是一个单词边界")]),v._v(" "),t("h3",{attrs:{id:"字符串边界"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串边界"}},[v._v("#")]),v._v(" 字符串边界")]),v._v(" "),t("p",[t("code",[v._v("^")]),v._v("表示字符串的开头，"),t("code",[v._v("$")]),v._v("表示字符串末尾")]),v._v(" "),t("h2",{attrs:{id:"子表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子表达式"}},[v._v("#")]),v._v(" 子表达式")]),v._v(" "),t("p",[v._v("子表达式是整个表达式的一部分，把一个表达式划分成数个小的表达式，把小表达式当做一个独立的元素来使用，字表达式用（和）包裹起来。字表达嵌套，回溯引用可以创建出来很多高级复杂的正则表达式")]),v._v(" "),t("h3",{attrs:{id:"分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[v._v("#")]),v._v(" 分组")]),v._v(" "),t("p",[t("code",[v._v("(Regex)")]),v._v("表示分组，比如匹配 IP 地址 172.168.2.1，未使用分组的正则表达式是：")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("/\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}/")])])]),v._v(" "),t("p",[v._v("如果使用分组，上述表达式可以简化为，"),t("code",[v._v("/(\\d{1,3}\\.){3}\\d{1,3}/")])]),v._v(" "),t("h3",{attrs:{id:"回溯引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回溯引用"}},[v._v("#")]),v._v(" 回溯引用")]),v._v(" "),t("p",[v._v("假设有一段文本，其中有一个单词连续输入两遍，你想找到第二个输入的单词，很明显，要想找到第二遍输入的这个单词，这个单词必须是已知的，回溯引用，允许正则表达式，引用前面匹配到的结果。")]),v._v(" "),t("p",[v._v("找到字符串连续两个相同的单词 "),t("code",[v._v("/\\b(\\w+)\\s\\1/")]),v._v("，经常用在替换操作中，js 中替换操作实例")]),v._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("const")]),v._v(" str "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("'hello,my name name is jack'")]),v._v("\nstr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[v._v("/\\b(\\w+)\\s\\1/g")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("'$1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("//替换连续相同的两个单词为一个单词")]),v._v("\n")])])]),t("h3",{attrs:{id:"前后查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前后查找"}},[v._v("#")]),v._v(" 前后查找")]),v._v(" "),t("p",[v._v("目前为止我们的正则表达式都是对整个表达式查找，有些时候，我们需要对字符串的某个位置前或者后进行查找。我们需要一个确定位置的表达式，匹配结果不返回，只是用来确定位置")]),v._v(" "),t("h4",{attrs:{id:"向前查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向前查找"}},[v._v("#")]),v._v(" 向前查找")]),v._v(" "),t("p",[t("code",[v._v("(?=Regex)")]),v._v("开头得表达式表示向前查找，比如我想找到 URL 地址中协议名")]),v._v(" "),t("blockquote",[t("p",[v._v("http:// www. forta. com/\nhttps:// mail. forta. com/\nftp:// ftp. forta. com/")])]),v._v(" "),t("p",[v._v("正则表达式为"),t("code",[v._v(".+(?=:)")]),v._v("，向前查找表达式"),t("code",[v._v("(?=:)")]),v._v("，匹配 "),t("code",[v._v(":")]),v._v("后，并不返回结果，而是向前匹配"),t("code",[v._v(".+")])]),v._v(" "),t("h4",{attrs:{id:"向后查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向后查找"}},[v._v("#")]),v._v(" 向后查找")]),v._v(" "),t("p",[t("code",[v._v("(?<=Regex)")]),v._v("是向后查找表达式的模式，比如 "),t("code",[v._v("apple")]),v._v(" 和"),t("code",[v._v("people")]),v._v(" 这两个单词都是以 "),t("code",[v._v("le")]),v._v("结尾的，想找到"),t("code",[v._v("apple")]),v._v(" 中的 "),t("code",[v._v("le")]),v._v("该怎么办？可以通过"),t("code",[v._v("app")]),v._v("限制查找，"),t("code",[v._v("/(?<=app)le/")]),v._v("就可以找到了")]),v._v(" "),t("p",[v._v("向前向后查找其实是有结果的，只不过这个结果长度永远为零，所以有时候被称为零宽度(zero-width)操作。")])])}),[],!1,null,null,null);_.default=e.exports}}]);