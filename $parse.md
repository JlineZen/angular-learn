## Angular $parse服务

* 作用：将一个angularJS表达式转换成一个函数

* Usage

```javascript
    $parse(expression)
```

    * arguments
        * expression：需要被编译的AngularJS语句

    * return func(context, locals)
        * content[object]： 针对你要解析的语句，这个对象中含有你要解析的语句中的表达式(通常是一个scope object)
        * locals[object]：关于context中变量的本地变量，对于覆盖context中的变量很有用。
        * 返回的函数还有下面三个特性：
            * literal[boolean]:表达式的顶节点是否是一个javascript字面量
            * constant[boolean]:表达式是否全部是由javascript的常量字面量组成
            * assign[func(context, local)]:可以用来在给定的上下文中修改表达式的值
