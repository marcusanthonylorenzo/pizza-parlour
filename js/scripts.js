// //Business Logic
// function Margherita(size, marinara, mozzarella, granaPadano, basil){
//   this.size = size;
//   this.marinara = marinara;
//   this.mozzarella = mozzarella;
//   this.granaPadano = granaPadano;
//   this.basil = basil;
// }



// function Pepperoni(size, marinara, mozzarella, pepperoni, salsaVerde){
//   this.size = size;
//   this.marinara = marinara;
//   this.mozzarella = mozzarella;
//   this.pepperoni = pepperoni;
//   this.salsaVerde = salsaVerde;
// };

// function Vegan(size, veganBase, veganMozzarella, veganParmesan, mushrooms, oysterMushies) {
//   this.size = size;
//   this.veganBase = veganBase;
//   this.salsaVerde = salsaVerde;
//   this.veganMozzarella = veganMozzarella;
//   this.veganParmesan = veganParmesan;
//   this.mushrooms = mushrooms;
//   this.oysterMushies = oysterMushies;
// }

function Pizza(type, size, sauce, cheese, vegetables, meat, salsa, price) {
  // let margherita = "Marghertia";
  // let pepperoni = "Pepperoni";
  // let vegan = "Vegan";

  this.type = type;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.vegetables = vegetables;
  this.meat = false;
  this.salsa = false;
  this.price = 15;
  this.extras = [1,1,1,1];
  this.extraCost;
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
    return this.price + 5;
  } else if (this.size !== "Large"){
    return this.price = 15;
  }
};
Pizza.prototype.addToCart = function(){
};
let marg = new Pizza("Margherita", "Large", "Marinara", 2, "basil", false, false, 15);
let pepperoniPizza = new Pizza("Pepperoni")
console.log(marg);


//UI Logic
$(document).ready(function () { 
  // $("# ").submit(function(event) {
  //   event.preventDefault();
});
