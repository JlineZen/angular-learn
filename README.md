## Angular 1.x的学习


### angular指令的理解

#### 一、一个完整的directive  

```javascript
	angular.module('com.zzweb', [])
		.directive('helloAngular', function() {
				var directiveConfig = {
					priority: 0,
					template: '<div></div>',
					templateUrl: 'index.html',
					replace: false,
					transclude: false,
					scope: false,
					restrict: 'A',
					compile: function compile(tElement, tAttrs, transclude) {
						return {
							pre: function preLink(scope, iElement, iAttrs, controller) {},
							post: function postLink(scope, iElement, iAttrs, controller) {}
						}
					},
					link: function postLink(scope, iElement, iAttrs) {}
				};

				return directiveConfig;
			});
```

### 二、directive指令内容解读  

1. restrict: 
   （字符串）可选参数，指明指令在DOM里面以什么形式被声明；取值有：E(元素),A(属性),C(类),M(注释)，其中默认值为A；当然也可以两个一起用，比如EA.表示即可以是元素也可以是属性。  
   ####
	E(元素)：
	```html
		<directiveName></directiveName> 
	``` 
	A(属性)：
	```html
		<div directiveName='expression'></div>  
	```
	C(类)： 
	```html
		<div class='directiveName'></div>
	```  
	M(注释)：
	```html
		<--directive:directiveName expression-->
	```  
	一般情况下E/A/C用得比较多.
	
2. priority 
(数字)，可选参数，指明指令的优先级，若在单个DOM上有多个指令，则优先级高的先执行；

3. terminal 
（布尔型），可选参数，可以被设置为true或false，若设置为true，则优先级低于此指令的其他指令则无效，不会被调用(优先级相同的还是会执行)  

4. template（字符串或者函数）可选参数，可以是:  

（1）一段HTML文本： 比如

 ```javascript
 	angular.module('com.zzweb', [])
 		.directive('helloAngular', function() {
				return {
					restrict: 'E',
					template: '<h1>Hello Angular</h1>',
					link: function(scope, element, attr) {}
				}
 			});
 ```

 （2）一个函数，可接受两个参数tElement和tAttrs其中tElement是指使用此指令的元素，而tAttrs则实例的属性，它是一个由元素上所有的属性组成的集合（对象）形如：

```html
<hello-world2 title='directive'></hello-world2> 
``` 

  其中title就是tattrs上的属性，比如： [示例](http://jsbin.com/kayokezuyo/edit?html,js,output)     


 ```javascript
 	angular.module('com.zzweb', [])
 		.directive('helloAngular', function() {
				return {
					restrict: 'E',
					template: function(tElement, tAttrs) {
							var _html = '';
							_html += tAttrs.title;
							return _html;
						},
					link: function(scope, element, attr) {}
				}
 			});
 ```
5. templateUrl（字符串或者函数），可选参数，可以是

（1）一个代表HTML文件路径的字符串

（2）一个函数，可接受两个参数tElement和tAttrs（大致同上）

注意：在本地开发时候，需要运行一个服务器，不然使用templateUrl会报错 Cross Origin Request Script（CORS）错误。由于加载html模板是通过异步加载的，若加载大量的模板会拖慢网站的速度，这里有个技巧，就是先缓存模板
你可以再你的index页面加载好的，将下列代码作为你页面的一部分包含在里面。

这里的id属性就是被设置在templateUrl上用的，[示例](http://jsbin.com/gewujaziki/edit?html,js,output)

```html
	<script type='text/ng-template' id='hello.html'> 
		<h1>Hello Angular</h1>
	</script>
```

另一种办法是缓存读取，[示例](http://jsbin.com/gewujaziki/1/edit?html,js,output)

```javascript
	app.run(['$templateCache', function($templateCache) {
			$templateCache.put('hello.html', '<h1>Hello Angular</h1>')
		}]);
```


 