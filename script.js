// when the page loads, the stars should scatter. Randomize the left and top positions of each star.

const input = document.querySelector("input");
const background = document.querySelector("#container");
const stars = document.querySelectorAll(".stars");
const sun = document.querySelector(".sun");
const hills = document.querySelectorAll(".hills");



function sunrise(){
	const sliderValue = input.value;
	console.log(sliderValue);
	// change position of the sun using slider values
	document.documentElement.style.setProperty(`--pos`, input.value + "px");
	// at different slider position, change the sky background
	if(sliderValue < -100){
		background.style.backgroundColor = "#000";
		hills.forEach(hill => hill.style.backgroundColor = "#334431");
	}else if(sliderValue > -100 && sliderValue < 100){
		background.style.backgroundColor = "#f7a012";
		sun.style.backgroundColor = "#fff";
		sun.style.transform = "scale(1)";	
		stars.forEach(star => star.style.opacity = 0.4);
		hills.forEach(hill => hill.style.backgroundColor = "#335f2e");
	}else if(sliderValue > 100){
		background.style.backgroundColor = "#b8d3e6";
		stars.forEach(star => star.style.opacity = 0);
		sun.style.transform = "scale(0.8)";	
		hills.forEach(hill => hill.style.backgroundColor = "green");
	}else{
		stars.forEach(star => star.style.opacity = 1);

	}

}

// scatter the stars in the background

function scatterStars(e){
	const randLeft = Math.floor(Math.random() * 2000);
	const randTop = Math.floor(Math.random() * 1000);

	e.style.left = `${randLeft}px`;
	e.style.top = `${randTop}px`;
}

stars.forEach(star => scatterStars(star));


// input.addEventListener("change", sunrise);
input.addEventListener("mousemove", sunrise);