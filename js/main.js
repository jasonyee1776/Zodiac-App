// var userInput = document.getElementById("user-input").value;

// Store display message elements in variable
var title = document.getElementById("title");
var zodiacImg = document.getElementById("zodiac-img");
var message = document.getElementById("message");

// Store grid of Zodiac images


//Objects-types for user-input
var capricorn = {
	title: "capricorn",
	img: "img/capricorn.webp",
	message: "You are a Capricorn: The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals."
};

var aries = {
	title: "aries",
	img: "img/aries.webp",
	message: "The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life."
};

var pisces = {
	title: "pisces",
	img: "img/pisces.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var cancer = {
	title: "cancer",
	img: "img/cancer.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var aquarius = {
	title: "aquarius",
	img: "img/aquarius.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var gemini = {
	title: "gemini",
	img: "img/gemini.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var leo = {
	title: "leo",
	img: "img/leo.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var libra = {
	title: "libra",
	img: "img/libra.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var sagittarius = {
	title: "sagittarius",
	img: "img/sagittarius.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var scorpio = {
	title: "scorpio",
	img: "img/scorpio.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var taurus = {
	title: "taurus",
	img: "img/taurus.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

var virgo = {
	title: "virgo",
	img: "img/virgo.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
};

// fucntions displaying each zodiac content


function capricornContent() {
	title.textContent = capricorn.title.toUpperCase();
	zodiacImg.src = capricorn.img;
	message.textContent = capricorn.message;
	document.body.style.backgroundColor = "#eee0d6";
};

function ariesContent() {
	title.textContent = aries.title.toUpperCase();
	zodiacImg.src = aries.img;
	message.textContent = aries.message;
	document.body.style.backgroundColor = "#f6cdcc";

};

function piscesContent() {
	title.textContent = pisces.title.toUpperCase();
	zodiacImg.src = pisces.img;
	message.textContent = pisces.message;
	document.body.style.backgroundColor = "#e0d291";

};

function cancerContent() {
	title.textContent = cancer.title.toUpperCase();
	zodiacImg.src = cancer.img;
	message.textContent = cancer.message;
	document.body.style.backgroundColor = "#daeed3";

};


function aquariusContent() {
	title.textContent = aquarius.title.toUpperCase();
	zodiacImg.src = aquarius.img;
	message.textContent = aquarius.message;
	document.body.style.backgroundColor = "#f2e0f5";

};

function geminiContent() {
	title.textContent = gemini.title.toUpperCase();
	zodiacImg.src = gemini.img;
	message.textContent = gemini.message;
	document.body.style.backgroundColor = "#f6f3c1";

};

function leoContent() {
	title.textContent = leo.title.toUpperCase();
	zodiacImg.src = leo.img;
	message.textContent = leo.message;
	document.body.style.backgroundColor = "#f5dec6";

};

function libraContent() {
	title.textContent = libra.title.toUpperCase();
	zodiacImg.src = libra.img;
	message.textContent = libra.message;
	document.body.style.backgroundColor = "#f6dbe5";

};

function sagittariusContent() {
	title.textContent = sagittarius.title.toUpperCase();
	zodiacImg.src = sagittarius.img;
	message.textContent = sagittarius.message;
	document.body.style.backgroundColor = "#e4f7ed";

};

function scorpioContent() {
	title.textContent = scorpio.title.toUpperCase();
	zodiacImg.src = scorpio.img;
	message.textContent = scorpio.message;
	document.body.style.backgroundColor = "#dee1f6";

};

function taurusContent() {
	title.textContent = pisces.title.toUpperCase();
	zodiacImg.src = pisces.img;
	message.textContent = pisces.message;
	document.body.style.backgroundColor = "#d5f3f6";

};

function virgoContent() {
	title.textContent = virgo.title.toUpperCase();
	zodiacImg.src = virgo.img;
	message.textContent = virgo.message;
	document.body.style.backgroundColor = "#ddcee0";

};

function tryAgain () {
	title.textContent = "TRY AGAIN!";
	message.textContent = "";
	document.body.style.backgroundColor = "#D0D0D0";
	document.getElementById("zodiac-grid").style.display = "none";
	zodiacImg.src = "img/try-again.gif";
}



//Logic for submitting user input
function submitZodiac() {
	// Store value of user input in variable
	var userInput = document.getElementById("user-input").value;


	if (userInput.toLowerCase()==capricorn.title) {
		capricornContent();
	} else if (userInput.toLowerCase()==aries.title) {
		ariesContent();
	} else if (userInput.toLowerCase()==pisces.title) {
		piscesContent();
	} else if (userInput.toLowerCase()==cancer.title) {
		cancerContent();
	} else if (userInput.toLowerCase()==aquarius.title) {
		aquariusContent();
	} else if (userInput.toLowerCase()==gemini.title) {
		geminiContent();
	} else if (userInput.toLowerCase()==leo.title) {
		leoContent();
	} else if (userInput.toLowerCase()==libra.title) {
		libraContent();
	} else if (userInput.toLowerCase()==sagittarius.title) {
		sagittariusContent();
	} else if (userInput.toLowerCase()==scorpio.title) {
		scorpioContent();
	} else if (userInput.toLowerCase()==taurus.title) {
		taurusContent();
	} else if (userInput.toLowerCase()==virgo.title) {
		virgoContent();
	} else {
		tryAgain();
	}
	
};



