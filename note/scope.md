## Scope作用域的理解

angular的作用域是一个非常重要的概念，scope的作用域跟js的执行的作用域有相似概念。每当一个指令被创建的时候，

都会有一个选择，是继承父作用域还是建立自己的作用域。指令的scope参数有三个选择：false, true, {}，默认是false。

1. scope = fasle

* 继承父级作用域，跟父级作用域属于同一个作用域； [继承父级的作用域](http://jsbin.com/qofifuveso/edit?html,js,output)

* 当父级作用域不存在的一个属性值的时候，会在自己的作用域创建一个新的属性值；

* 改变子级作用域的值在父级作用域会同时更新。

2. scope = true

* 继承父级作用域的属性或方法，跟父级作用域不属于同一个作用域；

* 改变子级作用域的值在父级作用域不会同时更新

3. scope = {}

``` javascript
	angular.module('com.zzweb', [])
		.directive('createTag', function() {
				return {
					restrict: 'EA',
					scope: {
						'attr': '@',
						'object': '&',
						'method': '='
					},
					link: function(scope, element, attrs, ctrl) {

					}
				}
			});
```

* 创建一个独立作用域，不继承父作用域

* 可取值

	* @：可以通过attrs获取父级作用域的一个属性

	``` javascript
		 <create-directive parentScopeAttr = "{{name}}"></create-directive>
	```

	* =: 可以通过attrs获取父级作用域的一个对象

	``` javascript
		<create-directive parentScopeObject = "object"></create-directive>
	```

	* &: 可以通过attrs获取父级作用域的方法

	``` javascript
		<create-directive parentScopeMethod = "action()"></create-directive>
	```
