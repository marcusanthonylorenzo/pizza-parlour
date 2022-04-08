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
  this.extras = [];
}

//each checkbox value will push to extras array, uncheck will pop.
Pizza.prototype.addExtras = function(){
  let extras = this.extras;
  let convertEx = extras.length;
  // console.log(convertEx);
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
  let prices = [];
  
  //selectors (divs and spaces)
  let addOnsBar = $(".addOnsBar");
  let addOns = $(".addOns");

  //selectors (elements)
  let menu = $(".menu");
  let menucard =  $(".menu-card");

  //specific cards
  let item1 = $("#item1");
  let item2 = $("#item2");
  let item3 = $("#item3");
  
  //dynamic HTML creation
  let addOnsPopUp = "<div class='addOns'><a href='#' id='addMarinara'>marinara</a><a href='#' id='addVegan'>veganBase</a><a href='#' id='addSalsaVerde'>salsaVerde</a><a href='#' id='ddMozzarella'>mozzarella</a><a href='#' id='addGranaPadano'>granaPadano</a><a href='#' id='addVeganParm'>veganParmesan</a><a href='#' id='addVeganMozz'>veganMozzarella</a><a href='#' id='addBasil'>basil</a><a href='#' id='addMushroom'>mushroom</a> <a href='#' id='addOysterMush'>oysterMushroom</a><a href='#' id='addPeps'>pepperoni</a><button type='button' id='done'>Done</button></div>";

  //(type, size, sauce, cheese, vegetables, meat, salsa) attributes

  //First Menu Item.
  item1.click(function(event) {
    event.preventDefault();
    let newMargherita = new Pizza("Margherita", "Regular", "Marinara", "Mozzarella & Grana Padano", "basil", false, false, 15);
    console.log("Added pizza!");
    console.log(cart.length);

    //extras pop-up after sending Pizza to cart
    addOnsBar.prepend(addOnsPopUp);

  
    let addOnsItems = $(".addOns").find("a");
    let done =  $("#done");
      //add click event and push each extra item to extras.
    addOnsItems.click(function(event) {
      console.log("clicked");
      event.preventDefault();
      let extrasArray = newMargherita.extras
      extrasArray.push(1);
    });
    //close bar when done adding extras
    done.click(function(event) {
      event.preventDefault();
      newMargherita.addExtras();
      $(".addOns:first-child").remove();
      let newPrice = newMargherita.price;
      prices.push(newPrice);
      let totalCost = prices.reduce(function(a, b) { return a + b; }, 0);
      console.log("total cost: ", totalCost);
    });
    cart.push(newMargherita);
    console.log(cart);

  });


  //Second Menu Item.
  item2.click(function(event) {
    event.preventDefault();
    let newPepperoni = new Pizza("Margherita", "Regular", "Marinara", "Mozzarella & Grana Padano", "basil", false, false, 15);
    cart.push(newPepperoni);
    console.log("Added Peps!");
    console.log(cart.length);
  });


  //Third Menu Item.
  item3.click(function(event) {
    event.preventDefault();
    let newVegan = new Pizza("Vegan 3-Cheese & Mushroom", "Regular", "Marinara", "Mozzarella & Grana Padano", "basil", false, false, 15);
    cart.push(newVegan);
    console.log("Added Vegan!");
    console.log(cart.length);
  });


});
