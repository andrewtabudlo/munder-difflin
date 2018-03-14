let secOne = document.querySelector("#containerOne");
let secTwo = document.querySelector("#containerTwo");
let secThree = document.querySelector("#containerThree");
let secFour = document.querySelector("#containerFour");

let mailSubmit = document.querySelector("#mailSubmit");

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
    alert("Thanks for subscribing!");
});
