document.querySelector("#yes").addEventListener("click", clickYesButton);
document.querySelector("#no").addEventListener("click", clickNoButton);

var image = document.querySelector("#wha");
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var gifContainer = document.getElementById("gif-container");

function clickYesButton(){

    image.src = "src/nya.jpg"; //variable to change image

    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.style.display = "none");

    h1.textContent = "УРАУРААРУАРУУРА"; //variable to change h1 text
    h3.textContent = "люблю тебе настюшкінс:3"; //variable to change h3 text

    let audio = document.querySelector("#yesSound");
    audio.play();

    gifContainer.style.display = "flex";
}

function clickNoButton(){

    let noButton = document.querySelector("#no");

    image.src = "src/wha.jpeg"; //variable to change image

    h1.textContent = "АХАХАХАХАХАХ,НАЇВНА))))";

    h3.textContent = "Вибач,але в тебе немає вибору:3";

    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px"; //Generated random position of button to coordinates x
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";//Generated random position of button to coordinates y

    let sound = document.querySelector("#noSound");
    sound.play();
}