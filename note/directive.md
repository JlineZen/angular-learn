## Angular 指令深入学习

### ngModelController详解

1. require属性的妙用
在自定义Angular指令时，其中有一个叫做require的字段，这个字段的作用是用指令的相互交流。举个简单的例子，加入我们现在需要编写两个指令，在link函数中有很多的重合的方法，为符合DRY原则，我们可以把重复的方法写在第三个directive的controller函数中，然后另外两个需要的在require属性中添加这个指令，最后通过第四个参数就可以引用这些重合的方法。大致结构如下：

```javascript
	var app = angular.module('com.zzweb', []);

	app.directive('commonDirective', function() {
			return {
				...
				controller: function(scope) {
					this.method1 = function() {};
					this.method2 = function() {};
				}
			}
		});

	app.directive('d1', function() {
			return {
				...
				require: '?^commonDirective',
				link: function(scope, element, attrs, commonDirective) {
					scope.someMethod = function() {
						...
						commonDirective.method1();
					};
				}
			}
		});
	
	app.directive('d2', function() {
			return {
				...
				require: '?^commonDirective',
				link: function(scope, element, attrs, commonDirective) {
					scope.someMethod = function() {
						...
						commonDirective.method2();
					};
				}
			}
		});
```

controller的用法分为两种，一种是require自定义的controller，由于自定义的controller的属性和方法都是由自己编写，使用起来比较简单；另一种方法则是require AngularJS的内建指令，其中大部分时间需要的require的都是ngModel指令。

在Angular应用中，ng-model指令时不可缺少的一个部分，它用来将视图绑定到数据，是双向绑定魔法中重要的一环。ngModelController则是ng-model指令中所定义的controller。这个controller包含了一些用于数据绑定，验证，CSS更新，以及数值格式化和解析的服务。它不用来进行DOM渲染或者监听DOM事件。与DOM相关的逻辑都应该包含在其他的指令中，然后让这些指令来试用ngModelController中的数据绑定功能。

ngModleController的方法：

* $render()
	当视图需要更新的时候调用，使用ng-model的指令应该自行实现这个方法。

