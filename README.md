# bootstrap_popover_extend
bootstrap-popover插件扩展属性增加(v3.35)
##扩展 popover提示插件的配置属性，使其能够决定提示框的“小三角”是否显示，以及提示框所要增加的样式名称
采用3.35的稳定版本，4.00版本差别应该不大，下面说正文：<br>
我们知道，popover提示插件是在jquery tooltip插件上重写而来的，因此他继承了许多属于tooltip的优秀特点，同时，也更新了tooltip位置的算法，加入bootstrap样式等等。<br>
但是，使用的同时，我也发现了一些问题，比如，我想给popover插件修改提示框的颜色，这就变得相当麻烦，我还要调用他的外部事件  (show.bs.popover,shown.bs.popover,hide.bs.popover,hidden.bs.popover),而实际的情况更加可怕，由于是封装的方法，因此在调用的时候，会存在事件响应的不同步，会慢于jquery点击或者是鼠标移上事件，就会造成许多的bug，那么我们就要花更多的时间去维护我们写的代码，这就是分的麻烦，因此，我们是否可以通过配置的方式来决定那个“小三角”的开关？或者是增加.popover的节点的样式，因此，我就对bootstrap.js以及压缩版进行了修改<br>
L:1334行：Tooltip.prototype.getOptions 读取配置赋值的方法进行修改：<br>
 
