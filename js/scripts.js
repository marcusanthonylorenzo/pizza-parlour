// //Business Logic
function Pizza(type, size, sauce, cheese, vegetables, meat, salsa, price) {
  this.type = type;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.vegetables = vegetables;
  this.meat = false;
  this.salsa = false;
  this.price = 15;
  this.extras = [1,1,1,1];
}

//each checkbox value will push to extras array, uncheck will pop.
Pizza.prototype.addExtras = function(){
  let extras = this.extras;
  let convertEx = extras.length;
  console.log(convertEx);
  this.price += convertEx * 3;
};

Pizza.prototype.makeLarge= function(){
  if (this.size === "Large"){
    return this.price += 5;
  } else if (this.size !== "Large"){
    return this.price = 15;
  }
};
Pizza.prototype.addToCart = function(){

};

//test objects
let marg = new Pizza("Margherita", "Large", "Marinara", 2, "basil", false, false, 15);
let pepperoniPizza = new Pizza("Pepperoni")
console.log(marg);

//create new object function



//UI Logic
$(document).ready(function () {
  //selectors
  let 

  //menu card click event
  $(".menu-card").click(function(event) {
    event.preventDefault();
    console.log("clicked");

  });

});
