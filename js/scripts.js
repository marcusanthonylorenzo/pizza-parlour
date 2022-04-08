// //Business Logic
function Pizza(type, size, sauce, cheese, vegetables, meat, salsa) {
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



//UI Logic
$(document).ready(function () {
  let cart = [];

  //selectors
  let menucard =  $(".menu-card");
  //specific cards
  let item1 = $("#item1");
  let item2 = $("#item2");
  let item3 = $("#item3");

  //menu card click event
  //(type, size, sauce, cheese, vegetables, meat, salsa) attributes
  item1.click(function(event) {
    event.preventDefault();
    let newMargherita = new Pizza("Margherita", "Regular", "Marinara", "Mozzarella & Grana Padano", "basil", false, false, 15);
    cart.push(newMargherita);
    console.log("Added pizza!");
    console.log(cart.length);

  });

  item2.click(function(event) {
    event.preventDefault();
    let newPepperoni = new Pizza("Margherita", "Regular", "Marinara", "Mozzarella & Grana Padano", "basil", false, false, 15);
    cart.push(newPepperoni);
    console.log("Added Peps!");
    console.log(cart.length);
  });

  item3.click(function(event) {
    event.preventDefault();
    let newVegan = new Pizza("Vegan 3-Cheese & Mushroom", "Regular", "Marinara", "Mozzarella & Grana Padano", "basil", false, false, 15);
    cart.push(newVegan);
    console.log("Added Vegan!");
    console.log(cart.length);
  });

});
