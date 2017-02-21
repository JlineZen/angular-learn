## cacheFactory服务介绍

* cacheFactory服务用来缓存数据

**使用：** 
* $cacheFactory(cacheId) 
    * 缓存名称id  
* 返回： 
    * info() 方法：返回id、大小、和缓存的配置;  
    * put() 方法： 同缓存中插入新的键值对并返回本身;  
    * get(key) 方法： 放回与key对应的value值，如未查询到则返回undefined;  
    * remove(key) 方法：删除一个键对值
    * removeAll() 方法: 删除所有缓存数据
    * destory() 方法： 删除$cacheFactory引用的这个缓存

```javascript
    var cache = $cacheFactory('useInfo');
    cache.put('name', 'bjiang');
    cache.put('age', 26);
    cache.get('age');
```