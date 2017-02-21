function Register() {
	this.routes = [];
}

Register.prototype.regist = function(obj, key, fn) {
	var route = this.routes.find(function(el) {
			var result;
			if ((el.key === key || el.key.toString() === key.toString()) && Object.is(el.obj, obj)) {
				result = el;
			}
			return result;
		});

	if (route) {
		route.fn.push(fn);
	} else {
		this.routes.push({
			obj: obj,
			key: key,
			fn: [fn]
		});
	}
};

Register.prototype.build = function() {
	this.routes.forEach(function(route) {
		observer(route.obj, route.key, route.fn);
	});
};