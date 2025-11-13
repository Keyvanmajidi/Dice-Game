

var randomNumber1 = Math.floor ( Math.random() * 6) + 1;
var randomNumber2 = Math.floor ( Math.random() * 6) +  1;

var imageSource1 = "dice" + randomNumber1 + ".png";
var imageSource2 = "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll[0]("img");
var image2 = document.querySelectorAll[1]("img");

image1.setAttribute("src", imageSource1);
image2.setAttribute("src", imageSource2);