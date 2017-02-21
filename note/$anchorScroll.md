## $anchorScroll服务
* anchorScrollProvider

    1、当被调用的时候，页面会滚动到与元素相关联的指定的hash处，或者被滚动到当前$location.hash()处，
    是一招HTML5 spec的规定定制的；
    2、监听$location.hash()并且无论锚点值何时变化，都会滚动到相应的位置。可以使用$anchrScrollProvider.disableAutoScrolling()让它失效;
    3、可以使用它的yOffset属性来指定一个垂直滚动的偏移量。

想法： 在SPA页面应用如果有锚点的话，或许可以使用到该服务。    
