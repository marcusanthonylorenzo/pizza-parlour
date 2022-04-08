// //Business Logic
function Pizza(type, size, sauce, cheese, vegetables, meat, salsa) {
  this.type = type;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.vegetables = vegetables;
  this.meat = meat;
  this.salsa = salsa;
  this.price = 15;
  this.extras = [];
}

//each checkbox value will push to extras array, uncheck will pop.
Pizza.prototype.addExtras = function(){
  let extras = this.extras;
  let convertEx = extras.length;
  this.price += convertEx * 3;
};

Pizza.prototype.makeLarge= function(){
  this.size = "Large";
  this.price += 5;
  return this.price;
};

//UI Logic
$(document).ready(function () {
  let cart = [];
  let prices = [];
  let totalCost;
  
  //selectors (divs and spaces)
  let addOnsBar = $(".addOnsBar");
  let addOns = $(".addOns");
  let output = $(".output");
  let orderDisplay = $(".orderDisplay");
  let qty = $(".qty");
  let payAmt = $(".payAmt");

  //selectors (elements)
  let menu = $(".menu");
  let menucard =  $(".menu-card");
  let cancel = $("#cancel");
;
  //specific cards
  let item1 = $("#item1");
  let item2 = $("#item2");
  let item3 = $("#item3");
  
  //dynamic HTML creation
  let addOnsPopUp = "<div class='addOns'><h5>Add your items here.</h5><button type='button' id='cancel'>cancel</button><a href='#' id='addMarinara'>marinara</a><a href='#' id='addVegan'>veganBase</a><a href='#' id='addSalsaVerde'>salsaVerde</a><a href='#' id='ddMozzarella'>mozzarella</a><a href='#' id='addGranaPadano'>granaPadano</a><a href='#' id='addVeganParm'>veganParmesan</a><a href='#' id='addVeganMozz'>veganMozzarella</a><a href='#' id='addBasil'>basil</a><a href='#' id='addMushroom'>mushroom</a> <a href='#' id='addOysterMush'>oysterMushroom</a><a href='#' id='addPeps'>pepperoni</a><button type='button' id='lrg'>Click to make it a Large for +$5</button><button type='button' id='done'>Done</button></div>";
  let monkey = "<img src='css/images/monkey-smile.gif' alt='monkey cash money' id='monke'>"

  //First Menu Item.
  item1.click(function(event) {
    event.preventDefault();
    let newMargherita = new Pizza("Margherita", "Regular", "Marinara", "Mozzarella & Grana Padano", "Basil", "None", "None", 15);

    //extras pop-up after sending Pizza to cart
    addOnsBar.prepend(addOnsPopUp);
    let addOnsItems = $(".addOns").find("a");
    let done =  $("#done");
    let lrg = $("#lrg");

    lrg.click(function(event){
      event.preventDefault();
      console.log("clicky boi")
      newMargherita.makeLarge();
      console.log(newMargherita.price);
      lrg.remove();
    });

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
      totalCost = prices.reduce(function(a, b) { return a + b; }, 0);
      console.log("total cost: ", totalCost);
      console.log(cart);
      console.log("Added Margherita pizza!");
      //display results in browser on click "done".
      qty.text(" " + cart.length);
      payAmt.text("  $" + totalCost);
      payAmt.append(monkey);
    });
    cart.push(newMargherita);
    console.log(cart.length, "items");
  });

  //Second Menu Item.
  item2.click(function(event) {
    event.preventDefault();
    let newPepperoni = new Pizza("Pepperoni", "Regular", "Marinara", "Mozzarella", "None", "House-cured Pepperoni", "Yes", 15);

    //extras pop-up after sending Pizza to cart
    addOnsBar.prepend(addOnsPopUp);
    let addOnsItems = $(".addOns").find("a");
    let done =  $("#done");
    let lrg = $("#lrg");

    lrg.click(function(event){
      event.preventDefault();
      console.log("clicky boi")
      newPepperoni.makeLarge();
      console.log(newPepperoni.price);
      lrg.remove();
    });

    //add click event and push each extra item to extras.
    addOnsItems.click(function(event) {
      console.log("clicked");
      event.preventDefault();
      let extrasArray = newPepperoni.extras
      extrasArray.push(1);
    });

    //close bar when done adding extras
    done.click(function(event) {
      event.preventDefault();
      newPepperoni.addExtras();
      $(".addOns:first-child").remove();
      let newPrice = newPepperoni.price;
      prices.push(newPrice);
      totalCost = prices.reduce(function(a, b) { return a + b; }, 0);
      console.log("total cost: ", totalCost);
      console.log(cart);
      console.log("Added Pepperoni pizza!");
      //display results in browser on click "done".
      qty.text(" " + cart.length);
      payAmt.text("  $"  + totalCost);
      payAmt.append(monkey);
    });
    cart.push(newPepperoni);
    console.log(cart.length, "items");
  });

  //Third Menu Item.
  item3.click(function(event) {
    event.preventDefault();
    let newVegan = new Pizza("Vegan", "Regular", "Dairy-free White Base", "Dairy-free Mozzarella & Dairy-free Parmesan", "Sauteed Mushrooms & Braised Oyster Mushrooms", "No animal product.", "Yes", 15);

    //extras pop-up after sending Pizza to cart
    addOnsBar.prepend(addOnsPopUp);
    let addOnsItems = $(".addOns").find("a");
    let done =  $("#done");
    let lrg = $("#lrg");

    lrg.click(function(event){
      event.preventDefault();
      console.log("clicky boi")
      newVegan.makeLarge();
      console.log(newVegan.price);
      lrg.remove();
    });

    //add click event and push each extra item to extras.
    addOnsItems.click(function(event) {
      console.log("clicked");
      event.preventDefault();
      let extrasArray = newVegan.extras
      extrasArray.push(1);
    });

    //close bar when done adding extras
    done.click(function(event) {
      event.preventDefault();
      newVegan.addExtras();
      $(".addOns:first-child").remove();
      let newPrice = newVegan.price;
      prices.push(newPrice);
      totalCost = prices.reduce(function(a, b) { return a + b; }, 0);
      console.log("total cost: ", totalCost);
      console.log(cart);
      console.log("Added Vegan pizza!");
      //display results in browser on click "done".
      qty.text(" " + cart.length);
      payAmt.text("  $" + totalCost);
      payAmt.append(monkey);
    });
    cart.push(newVegan);
    console.log(cart.length, "items");
  });
});
