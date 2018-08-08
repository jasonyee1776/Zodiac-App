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
	message: "You are a Capricorn: The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals.",
	background: "#eee0d6"
};

var aries = {
	title: "aries",
	img: "img/aries.webp",
	message: "The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life.",
	background: "#f6cdcc"
};

var pisces = {
	title: "pisces",
	img: "img/pisces.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#d5f3f6"
};

var cancer = {
	title: "cancer",
	img: "img/cancer.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#daeed3"
};

var aquarius = {
	title: "aquarius",
	img: "img/aquarius.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#f2e0f5"
};

var gemini = {
	title: "gemini",
	img: "img/gemini.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#f6f3c1"
};

var leo = {
	title: "leo",
	img: "img/leo.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#f5dec6"
};

var libra = {
	title: "libra",
	img: "img/libra.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#f6dbe5"
};

var sagittarius = {
	title: "sagittarius",
	img: "img/sagittarius.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#e4f7ed"
};

var scorpio = {
	title: "scorpio",
	img: "img/scorpio.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#dee1f6"
};

var taurus = {
	title: "taurus",
	img: "img/taurus.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#eee0d6"
};

var virgo = {
	title: "virgo",
	img: "img/virgo.webp",
	message: "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into.",
	background: "#ddcee0"
};

var zodiacArr = [capricorn, aries, pisces, cancer, aquarius, gemini, leo, libra, sagittarius, scorpio, taurus, virgo];

// fucntions displaying each zodiac content

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
	for(var i = 0; i < zodiacArr.length; i++) {
		if (userInput.toLowerCase() == zodiacArr[i].title) {
			title.textContent = zodiacArr[i].title.toUpperCase()
			zodiacImg.src = zodiacArr[i].img;
			message.textContent = zodiacArr[i].message;
			document.body.style.backgroundColor = zodiacArr[i].background;
			document.getElementById('right-answer').style.border = '4px solid black';
		}	
	}
};


var enter = document.getElementById("user-input");
enter.addEventListener("keyup", function(event) {
	if (event.keyCode===13) {	
		document.getElementById("submit-button").click();
	}
})

