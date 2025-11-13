var randomNumber1 = Math.floor ( Math.random() * 6) + 1;
var randomNumber2 = Math.floor ( Math.random() * 6) +  1;

var imageSource1 = "dice" + randomNumber1 + ".png";
var imageSource2 = "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", imageSource1);
image2.setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Darw";
}