# bootstrap_popover_extend
bootstrap-popover插件扩展属性增加(v3.35)
##扩展 popover提示插件的配置属性，使其能够决定提示框的“小三角”是否显示，以及提示框所要增加的样式名称
采用3.35的稳定版本，4.00版本差别应该不大，下面说正文：<br>
我们知道，popover提示插件是在jquery tooltip插件上重写而来的，因此他继承了许多属于tooltip的优秀特点，同时，也更新了tooltip位置的算法，加入bootstrap样式等等。<br>
但是，使用的同时，我也发现了一些问题，比如，我想给popover插件修改提示框的颜色，这就变得相当麻烦，我还要调用他的外部事件  (show.bs.popover,shown.bs.popover,hide.bs.popover,hidden.bs.popover),而实际的情况更加可怕，由于是封装的方法，因此在调用的时候，会存在事件响应的不同步，会慢于jquery点击或者是鼠标移上事件，就会造成许多的bug，那么我们就要花更多的时间去维护我们写的代码，这就是分的麻烦，因此，我们是否可以通过配置的方式来决定那个“小三角”的开关？或者是增加.popover的节点的样式，因此，我就对bootstrap.js以及压缩版进行了修改<br>
L:1334行：Tooltip.prototype.getOptions 读取配置赋值的方法进行修改：<br>
![](https://github.com/stephen7729/bootstrap_popover_extend/blob/master/img/change1.png)</br>
压缩版不再进行展示，下面进入API说明
#API
##animation	boolean</br>
默认值：true	data-animation	向弹出框应用 CSS 褪色过渡效果。</br>
##html	boolean</br>
默认值：false	data-html	向弹出框插入 HTML。如果为 false，jQuery 的 text 方法将被用于向 dom 插入内容。如果您担心 XSS 攻击，请使用 text。</br>
##placement	string|function</br>
默认值：top	data-placement	规定如何定位弹出框（即 top|bottom|left|right|auto）。</br>
当指定为 auto 时，会动态调整弹出框。例如，如果 placement 是 "auto left"，弹出框将会尽可能显示在左边，在情况不允许的情况下它才会显示在右边。</br>
##selector	string</br>
默认值：false	data-selector	如果提供了一个选择器，弹出框对象将被委派到指定的目标。</br>
##title	string | function
默认值：''	data-title	如果未指定 title 属性，则 title 选项是默认的 title 值。</br>
##trigger	string</br>
默认值：'hover focus'	data-trigger	定义如何触发弹出框： click| hover | focus | manual。您可以传递多个触发器，每个触发器之间用空格分隔。</br>
##delay	number | object</br>
默认值：0	data-delay	延迟显示和隐藏弹出框的毫秒数 - 对 manual 手动触发类型不适用。如果提供的是一个数字，那么延迟将会应用于显示和隐藏。如果提供的是对象，结构如下所示：</br>
##delay:</br>
{ show: 500, hide: 100 }</br>
container	string | false</br>
默认值：false	data-container	向指定元素追加弹出框。</br>
实例： container: 'body'</br>
##arrow boolean（新增）</br>
默认值：true 表示有“小三角”</br>
##className string(新增)</br>
默认值: "" 可不写，为.popover节点增加样式的名称
#Change Log
##v1.0
* 增加对压缩版本的支持
