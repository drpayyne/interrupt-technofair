var toggle = false
$(document).ready(function() {
	console.log('Document ready!')
	$("#toggle").click(function() {
		toggle = document.querySelector('input[type="checkbox"]').checked
		console.log(toggle)
	});
	$("#to-disable")
})

function updateScore() {
	var event = document.getElementById("select")
	var score = document.getElementById("score")
	var code = document.getElementById("code")
	var form = document.getElementById("form")
	var element = document.createElement("input")
	
	if(event.checkValidity() && score.checkValidity() && code.checkValidity()) {
		document.querySelector('button[type="button"]').disabled = true
	}

	element.setAttribute("type", "hidden")
	element.setAttribute("name", "toggle")
	element.setAttribute("value", toggle)

	form.appendChild(element)
	document.getElementById("submit").click()
}
