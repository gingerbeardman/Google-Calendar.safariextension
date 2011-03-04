if (window.top === window) {
	//start the ball rolling
	function init() {
		safari.self.tab.dispatchMessage("getStartDay");
	}

	//call page, init
	init();
}
