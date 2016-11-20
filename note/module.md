## angular module学习

module是angular中最重要的模块组织方式，它提供了将一组内聚的业务组件（controller, service, filter,directive...)封装在一起的能力。以此来达到将代码
业务领域来分module封装，然后利用angulr的依赖注入其关联的内容，让我们的代码更好的分离，实现“低耦合高内聚”。

#### module的定义分为三个参数：
1. name: 模块定义的名称，唯一且必选参数，便于被其他模块依赖注入；
2. requires： 模块的依赖，数组类型，可以不传或传[], 可选参数；
3. configFn: 模块启动的配置函数，在module的config阶段会调用函数，相当于module.config,可选参数。

```javascript
  angular.module('com.zzweb', []); // definition of a module
  angular.module('com.zzweb'); // use a definited module
```
**注意** 

*第一句是module的声明，而第二句代码是对已经定义好的module的引用*
*module如果重复声明会造成之前已经声明的module重置为null*







