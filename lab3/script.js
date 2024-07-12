//collect the elements
let shape = document.querySelector('.shapeDiv');

//collect the button
let btnsquare= document.querySelector(".btnsquare");
let btnrectangle= document.querySelector(".btnrectangle");
let btncircle = document.querySelector(".btncircle");
let displayshape = document.querySelector(".shapeDiv p");

//add an event to each button
//change into square
//add another class to the shape

btnsquare.addEventListener("click", function(){
    //what types of line i want to add
    
    shape.className = "square"
    displayshape.textContent = "square".toUpperCase();

})

//change Change Shape to square
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle";
    displayshape.textContent = "rectangle".toUpperCase();


})

btncircle.addEventListener("click", function(){
    shape.className = "circle";
    displayshape.textContent = "circle".toUpperCase();


})
// ---------DROP DOWN MENU----------
//collect element

let menubtn= document.querySelector(".menubtn");
let collapsemenu = document.querySelector(".collapsemenu");

//add a click event to open the collapsible menu
menubtn.addEventListener("click", function(){
    
    collapsemenu.classList.toggle("closeToOpen")

})



// -------MODAL WINDOW------
//collect the card
let card = document.querySelector(".card");
let modalwindow= document.querySelector(".modalwindow");
let closemodal = document.querySelector(".closemodal");


// add a click event to open the modal window
card.addEventListener("click", function(){
    //to open the change the style
    modalwindow.style.display = "block";
})

//close the modal window by clicking X

closemodal.addEventListener("click", function(){
    modalwindow.style.display = "none";
})

//close the modal window when the user clicks anywhere on the modal screen
window.addEventListener("click", function(event){
    if(event.target == modalwindow){
        modalwindow.style.display = "none"
    }

})