let secOne = document.querySelector("#containerOne");
let secTwo = document.querySelector("#containerTwo");
let secThree = document.querySelector("#containerThree");
let secFour = document.querySelector("#containerFour");

let mailSubmit = document.querySelector("#mailSubmit");

window.addEventListener('scroll', function(e){
    if (window.scrollY >= 500) {secTwo.classList.add("show");}
    if (window.scrollY <= 600) {secTwo.classList.remove("show");}
    if (window.scrollY >= 1300){secThree.classList.add("show");}
    if (window.scrollY <= 1400){secThree.classList.remove("show");}
    if (window.scrollY >= 2100) {secFour.classList.add("show");}
    if (window.scrollY < 2200) {secFour.classList.remove("show");}
});

doument.addEventListener("keypress", function(e){

});

mailSubmit.addEventListener('click', function(e){
    console.log(e);
    alert("Thanks for subscribing!");
});
