function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

// let form = document.querySelector("payment");

let NAME_REQUIRED = "Please enter your name";

let form = document.getElementById("payment")

let card = document.getElementById("cardNumb");

let cardName = document.getElementById("cardName");

let expiry = document.getElementById("expiryDeta");

let cvv = document.getElementById("cvv");

let pin = document.getElementById("pin")

cardName.onclick = function() {
    form.onsubmit()
}

card.onclick = function() {
    form.onsubmit()
}

expiry.onclick = function() {
    form.onsubmit()
}

cvv.onclick = function() {
    form.onsubmit()
}

pin.onclick = function() {
    form.onsubmit()
}


form.addEventListener("submit", function (event) {
	event.submit();

	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED); 
	if (nameValid) {
        if (nameValid) {
		alert("Form submited.");
		}
	}
});