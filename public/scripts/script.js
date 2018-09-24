$(document).ready(function() {
	console.log('Document ready!')
	$(".modal-open").click(function() {
		$(".modal").addClass("is-active");  
	});
	  
	$(".modal-close").click(function() {
		$(".modal").removeClass("is-active");
	});
})
