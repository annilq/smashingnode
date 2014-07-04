var init = function() {
	Function.prototype.method = function(name, func) {
		if (!this.prototype[name]) {
			this.prototype[name] = func;
			console.log("add %s function", name);
		} else {
			console.log("%s function exist", name);
		}
		return this;
	};
	Array.method("reduce", function(func, a) {
		var i;
		for (i = 0; i < this.length; i++) {
			a = func(this[i], a);
		}
		return a;
	});
	Array.method("selectSort", function() {
		var index, temp;
		for (var i = 0; i < this.length - 1; i++) {
			index = i;
			temp = this[i];
			for (var j = i + 1; j < this.length; j++) {
				if (temp > this[j]) {
					index = j;
					temp = this[j];
				}
			}
			this[index] = this[i];
			this[i] = temp;
		}
		return this;
	});
	Object.method("len", function() {
		var a, len = 0;
		for (a in this) {
			if (this.hasOwnProperty(a)) {
				len++;
			}
		}
		return len;
	});
};
exports.init = init();