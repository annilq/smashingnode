var book = {
	_year: 2004,
	edition: 1
};
Object.defineProperty(book, "year", {
	get: function() {
		return this._year;
	},
	set: function(newvalue) {
		if (newvalue && newvalue > this._year) {
			this.edition += newvalue - this._year;
			console.log(this.edition);
		}
	}
});
book.year = 2010;