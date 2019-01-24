(() => {
	// this is a self invoking anonymous function
	console.log('clicky clicky');

	// these are the elements that you want to reference on the page (the icons in this case)
	var badge = document.querySelector("img");

	var otherBadges =document.querySelectorAll("img");

	function logBadgeId() {
		console.log(this.id);
		// debugger;
	}

	// what events are we listening for? clicks? mouse over and what should happen when we hear one
	badge.addEventListener("click", logBadgeId);

	// debugger;	

	otherBadges.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));

	// this is the same as print in python
})();

