var toggle = false
$(document).ready(function() {
	console.log('Document ready!')
	$("#toggle").click(function() {
		toggle = document.querySelector('input[type="checkbox"]').checked
		console.log(toggle)
	});
})

function updateScore() {
	var form = document.getElementById("form")

	var element = document.createElement("input")
	element.setAttribute("type", "hidden")
	element.setAttribute("name", "toggle")
	element.setAttribute("value", toggle)

	form.appendChild(element)
	document.getElementById("submit").click()
}