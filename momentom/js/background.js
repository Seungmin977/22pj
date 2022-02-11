const images = ["1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = "img/" + chosenImage;

// document.body.style.background = bgImage;
// document.body.appendChild(bgImage);

document.querySelector(".wrap").style.backgroundImage = "url(img/" + chosenImage + ")";
// document.body.style.backgroundImage = "url(img/" + chosenImage + ")";