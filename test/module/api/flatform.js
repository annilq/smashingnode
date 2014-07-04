var Util = {
	isIosFlatform: function() {
		if (navigator.userAgent.match(/(iPad|iPhone)/)) {
			return true;
		} else return false;
	},
	isAndroidFlatform: function() {
		if (navigator.userAgent.match(/(Android)/)) {
			return true;
		} else {
			return false;
		}
	},
	isMobile: function() {
		if (this.isIosFlatform() || this.isAndroidFlatform()) {
			return true;
		} else {
			return false;
		}
	}
};
