# _Pizza Parlour_

#### By _**Marcus Padilla**_

#### _This is a barebones site where you can click to build a pizza and get the quantity and total price. If more time, I would show a proper invoice and make each custom pizza clickable and removable. It was my first foray creating objects in JQuery and pushing them to an array_

## Technologies Used

* Javascript
* JQuery
* HTML
* CSS
* Git
* VSCode

## Description
**My primary objectives** outside of the prompt were:
- To use Arrays and Objects in synchrony; to store objects in arrays and vice versa.
- To use click events to create new instances of Objects.
- To not use global variables, within ability.

I create each individual project without copying and pasting from the coursework, as to struggle but **reinforce** the principles being used. I fear I will need to do more resubs in the future, but I am proud to complete tasks on my own regard.

**My ultimate objective was** to not just use OOP JS, but to improve my workflow, my design patterns, **planning**, **TDD**, and cleaner code in general.


## Setup/Installation Requirements

* Download and install Git Bash (Windows), use the terminal in your text editor, or open Terminal(Mac).
* Open Git Bash or Terminal and type:
 **cd ~/desktop**
* This will bring you to your desktop location on the command line, to receive files.
* Next, type: **git clone https://github.com/marcusanthonylorenzo/pizza-parlour**
* Once completed, go to your desktop and find the folder with same name as the repository.
* Open index.html in your browser.


## Known Bugs

* None at current time.

## Design Plan

Create website for pizza company.
- User can choose one or multiple toppings.
- User can choose a size (small or large! No in between here.)
- Program takes user input and outputs final cost (receipt?)

** Everything at our pizza shop - except the dairy cheese - is made IN HOUSE, from the pizza dough to the spiced pizza marinara salsa, to the vegan cheeses. Thank you for supporting local! <Italian hand-gesture for "eat".>

### Objects, Properties.
- Pizza (constructor) x 3 types. Margherita, Pepperoni, Vegan 3-Cheese & Mushroom.
  - Margherita
    - Marinara Salsa*
    - Mozzarella*
    - Grana Padano
    - Fresh Basil*
  - Pepperoni
    - Marinara Salsa*
    - Mozzarella*
    - House-cured Pepperoni
    - Salsa Verde*
  - Vegan 3-Cheese & Mushroom (All animal friendly!)
    - Plant-based White Cream Base
    - Dairy-free Parmesian
    - Dairy-free Mozzarella
    - Sauteed Field Mushrooms
    - Braised Oyster Mushrooms
    - Salsa Verde
*repeat elements.

- Order
  - Pizzas (NESTED pizza object? Send to collection? Array or Object?)

- Form? (8:30am: Can I use a JS Object to assign user input values to object properties and then use them throughout the script? A risk I might take...we'll see later.)

### Collections/Groupings (if any)
Pizza order? (Array or Object? Can we store collections easier than Arrays to access individual pizza? Never did it before.)
  - [x] let cart = [];
### Behaviours/Specs, Interactivity (List of all functions)

- Pizza (Obj)
  - [x] addExtras ingredients tally cost. addExtras()
  - [x] make large size: large ? +$5 : normal; addPizzaCost();
  - [x] add pizza to order addToOrder() **Done via UI Logic**
  - methods:
    - let extras = Pizza.addExtras();
    - let pizzaCost = Pizza.makeLarge() { large? +5 };
    - let addToOrder = Pizza.addToOrder();

- Cart (let cart = [])
  - maintain collection receive from addToOrder. (Array or Object?)
  - [x] totalCost = totalPizzaCost()
  - methods:
    -let totalCost = totalPizzaCost();

- UI Input
  - [x] selectors (can you ASSIGN input to object properties to call on later?)
  - [x] convert to int
  - Ingredients (selector = value);
    - marinara
    - veganBase
    - salsaVerde

    - mozzarella
    - granaPadano
    - veganParmesan
    - veganMozzarella

    - basil
    - mushroom
    - oysterMushroom

    - pepperoni

  - Pizzas:
    - Margherita
    - Pepperoni 
    - Vegan

- UI Output
  - showListOfPizzas(pizza, pizzaCost) //with individual cost
  - showTotalCost (totalCost)  //grand totalCost (we don't tip in Aus?)


## Tests

### Test notes:
It's a difficult decision whether we want to give customer many options, or not many at all (my preference). This influences HOW I design the constructor functions, making an open Pizza vs specific constructor objects for Margherita, Pepperoni, and Vegan individually.


Describe: Pizza.makeLarge() 

Test: It should increase Pizza.price by int of 5.
Code: this.size = "Large"; this.price += 5; return this.price;
Expected Output: if "Large", Pizza.price = 20.

Test: It should not apply twice i.e. no "double large".
Code: $("#lrg").remove();
Expected Output: Pizza.makeLarge(); returns 20 once.


Describe: Pizza.addExtras()

Test: It should increase Pizza.price by $3 each per item.
Code: this.price += convertEx * 3;  (convertEx is the length of extras array = each extra added or removed will push or pop accordingly.)
Expected Output: If all ingredients checked (11 total items), Pizza.price = $48.


Describe: Pizza.addToCart()

Test: Pizza.addToOrder() should select this.pizzaType and push to cart array of standing order.
Code: cart.push(newPizza);
Expected Output: cart = [{new obj}, {new obj}....]
I chose to push render new objects in the UI Logic, and push them to an array.


## License

[MIT](https://github.com/marcusanthonylorenzo/pizza-parlour/pull/1/commits/42da4cf2fc610984e2a7fa5f8b2813beea4d93a9)

Copyright (c) 2022 _Marcus Padilla_
