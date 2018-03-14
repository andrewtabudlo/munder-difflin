let secOne = document.querySelector("#containerOne");
let secTwo = document.querySelector("#containerTwo");
let secThree = document.querySelector("#containerThree");
let secFour = document.querySelector("#containerFour");

let mailSubmit = document.querySelector("#mailSubmit");
let outOfPaper = document.querySelector("#outOfPaper");

let audio = new Audio("audio/outofpaper.mp3");
let isPlaying = false;

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

window.addEventListener('scroll', function(e){
    console.log(window.scrollY);
    if (window.scrollY <= 599) {secTwo.classList = "hide";}
    if (window.scrollY >= 600) {secTwo.classList = "show";}
    if (window.scrollY <= 1399) {secThree.classList = "hide";}
    if (window.scrollY >= 1400) {secThree.classList = "show";}
    if (window.scrollY < 2199) {secFour.classList = "hide";}
    if (window.scrollY >= 2200) {secFour.classList = "show";}
});

mailSubmit.addEventListener('click', function(e){
    console.log(e);
    if (validateEmail(mailInput.value) == true){
        document.querySelector("#inputContainer").setAttribute("style", "background-color: #00FF00;");
        alert("Thanks for subscribing!");
    } else {
        document.querySelector("#inputContainer").setAttribute("style", "background-color: red;");
        alert("Please enter a valid email.")
    }
    mailInput.value = "";
});

outOfPaper.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();
    isPlaying = !isPlaying;
    isPlaying ? audio.play() : audio.pause(); audio.currentTime = 0;
});
