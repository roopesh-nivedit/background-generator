const firstColor = document.querySelector(".first-color");
const secondColor = document.querySelector(".second-color");
const h3 = document.querySelector("h3");
const body = document.getElementById("gradient");
const random = document.querySelector(".random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
	h3.textContent = body.style.background;
}

function setFirstGradient() {
	firstColor.value = "#ff0000";
	secondColor.value = "#ffff00";
	h3.textContent = "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0))";
}

function randomizeColors() {
	const firstRandomColor = Math.floor(Math.random() * 16777215).toString(16);
	const secondRandomColor = Math.floor(Math.random() * 16777215).toString(16);
	firstColor.value = "#" + firstRandomColor;
	secondColor.value = "#" + secondRandomColor;
	setGradient();
}

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);
window.addEventListener("load", setFirstGradient);
random.addEventListener("click", randomizeColors);