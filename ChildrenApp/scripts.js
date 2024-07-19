//collect the element for modal Window
let modalWindow1 = document.querySelector(".modalWindow1");
let card = document.querySelector('.card');
let closemodal1 = document.querySelector(".closemodal1");

//add A click event to open the modal window
card.addEventListener("click", function(){
    //to open to change the style
    modalWindow1.style.display = "block";
})

//close the modal window by click X
closemodal1.addEventListener("click", function(){
    modalWindow1.style.display = "none";
})

//close the modalwindow when the user clicks anywhere on the modal screen
window.addEventListener("click", function(event){
    if(event.target == modalWindow1){
        modalWindow1.style.display = "none"
    }
})
//collect element for modal window 2
let modalWindow2 = document.querySelector(".modalWindow2");
let card2 = document.querySelector('.card2');
let closemodal2 = document.querySelector(".closemodal2");
// let audio = document.querySelector(".audio");


//add A click event to open the modal window
card2.addEventListener("click", function(){
    //to open to change the style
    modalWindow2.style.display = "block";
})

//close the modal window by click X
closemodal2.addEventListener("click", function(){
    modalWindow2.style.display = "none";
})

//close the modalwindow when the user clicks anywhere on the modal screen
window.addEventListener("click", function(event){
    if(event.target == modalWindow2){
        modalWindow2.style.display = "none"
    }
})

//collect element for modal window 3
let modalWindow3 = document.querySelector(".modalWindow3");
let card3 = document.querySelector('.card3');
let closemodal3 = document.querySelector(".closemodal3");



//add A click event to open the modal window
card3.addEventListener("click", function(){
    //to open to change the style
    modalWindow3.style.display = "block";
})

//close the modal window by click X
closemodal3.addEventListener("click", function(){
    modalWindow3.style.display = "none";
})

//close the modalwindow when the user clicks anywhere on the modal screen
window.addEventListener("click", function(event){
    if(event.target == modalWindow3){
        modalWindow3.style.display = "none"
        
    }
})




//collect element for modal window for alphabet
let modalWindow1foralphabet = document.querySelector(".modalWindow1foralphabet");
let ka =document.querySelector(".ka");
let closemodal1foralphabet =document.querySelector(".closemodal1foralphabet")

//add A click event to open the modal window
ka.addEventListener("click", function(){
    //to open to change the style
    modalWindow1foralphabet.style.display = "block";
})

//close the modal window by click X
closemodal1foralphabet.addEventListener("click", function(){
    modalWindow1foralphabet.style.display = "none";
})

window.addEventListener("click", function(event){
    if(event.target == modalWindow1foralphabet){
        modalWindow1foralphabet.style.display = "none"
        
    }
})

//collect element for modal window 2 ka kway
let modalWindow2foralphabet = document.querySelector(".modalWindow2foralphabet");
let kay = document.querySelector('.kay');
let closemodal2foralphabet = document.querySelector(".closemodal2foralphabet");
// let audio = document.querySelector(".audio");


//add A click event to open the modal window
kay.addEventListener("click", function(){
    //to open to change the style
    modalWindow2foralphabet.style.display = "block";
})

//close the modal window by click X
closemodal2foralphabet.addEventListener("click", function(){
    modalWindow2foralphabet.style.display = "none";
})

//close the modalwindow when the user clicks anywhere on the modal screen
window.addEventListener("click", function(event){
    if(event.target == modalWindow2foralphabet){
        modalWindow2foralphabet.style.display = "none"
    }
})






// ---------DROP DOWN MENU----------
//collect element

let menubtn= document.querySelector(".menubtn1");
let collapsemenu = document.querySelector(".collapsemenu");

//add a click event to open the collapsible menu
menubtn.addEventListener("click", function(){
    
    collapsemenu.classList.toggle("closeToOpen")

})
// ----audio will play------
function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}


//collect the element

