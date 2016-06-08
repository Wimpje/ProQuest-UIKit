function ux () {
	var about = {
		version: 0.1,
		created: "05-01-2016",
		updated: "05-01-2016"
	};

	if (window === this) {
		return new ux();
	}

	this.treeMenu = function () {
		var treeNav = document.getElementsByClassName("tree-nav");

		if (treeNav.length) {
			treeNav.forEach(function (ele) {
				ele.addEventListener("click", this.clickHandler);
			});
		}

		this.clickHandler =  function (e) {
			console.log(e.target);
		}
	}

	return this;
};
