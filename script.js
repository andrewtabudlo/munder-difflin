let secOne = document.querySelector("#containerOne");
let secTwo = document.querySelector("#containerTwo");
let secThree = document.querySelector("#containerThree");
let secFour = document.querySelector("#containerFour");

let mailSubmit = document.querySelector("#mailSubmit");

let audio = new Audio("audio/outofpaper.mp3");

window.addEventListener('scroll', function(e){
    console.log(window.scrollY);
    if (window.scrollY <= 599) {secTwo.classList = "hide";}
    if (window.scrollY >= 600) {secTwo.classList = "show";}
    if (window.scrollY <= 1399) {secThree.classList = "hide";}
    if (window.scrollY >= 1400) {secThree.classList = "show";}
    if (window.scrollY < 2199) {secFour.classList = "hide";}
    if (window.scrollY >= 2200) {secFour.classList = "show";}
});

window.addEventListener('keydown', function(e){
    console.log(e);
    if (e.keyCode === 13) { audio.play(); }
    if (e.keyCode === 27) { audio.pause(); audio.currentTime = 0; }});

mailSubmit.addEventListener('click', function(e){
    console.log(e);
    mailInput.value = "";
    document.querySelector("#inputContainer").setAttribute("style", "background-color: #00FF00;");
    alert("Thanks for subscribing!");
});
