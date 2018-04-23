// Store value of user input in variable
// var userInput = document.getElementById("user-input").value;

// Store display message elements in variable
var title = document.getElementById("title");
var zodiacImg = document.getElementById("zodiac-img");
var message = document.getElementById("message");




//Objects-types for user-input
var capricorn = {
	title: "capricorn",
	img: "img/capricorn.webp",
	message: "You are a Capricorn: The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals."
};



//Logic for submitting user input
function submitZodiac() {
	var userInput = document.getElementById("user-input").value;
	
	if (userInput.toLowerCase===capricorn.title) {
		title.textContent() = capricorn.title;
		zodiacImg.src() = capricorn.img;
		message.textContent() = capricorn.message;
		console.log("success!");
	}
	else {
		title.textContent = "Try Again!";
	}
	
};


