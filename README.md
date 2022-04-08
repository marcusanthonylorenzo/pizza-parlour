# _Pizza Parlour_

#### By _**Marcus Padilla**_

#### __

## Technologies Used

* Javascript
* JQuery
* HTML
* CSS
* Git
* VSCode

## Description
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

** Everything at our pizza shop - except the dairy cheese - is made IN HOUSE, from the pizza dough to the spiced pizza marinara, to the vegan cheeses. Thank you for supporting local! <Italian hand-gesture for "eat".>

### Objects, Properties.
- Pizza (constructor) x 4 types. Margherita, Pepperoni, Supreme, Vegan 3-Cheese & Mushroom.
  - Margherita
    - Marinara Salsa*
    - Mozzarella*
    - Grana Padano
    - Fresh Basil*
  - Pepperoni
    - Marinara Salsa*
    - Mozzarella*
    - House-cured Pepperoni
  - Supreme
    - Marinara Salsa*
    - Mozzarella*
    - Taleggio
    - Fresh Red Onion
    - Fresh Basil*
    - Sauteed Mushroom*
    - Fire-roasted Capsicum
    - House-cured Habanero and Honey Salami
  - Vegan 3-Cheese & Mushroom (All animal friendly!)
    - Plant-based White Cream Base
    - Dairy-free Parmesian
    - Dairy-free Blue Cheese
    - Sauteed Field Mushrooms*
    - Braised Oyster Mushrooms
    - Salsa Verde
*repeat elements.

- Order
  - Pizzas (NESTED pizza object? Send to collection? Array or Object?)

- Form? (8:30am: Can I use a JS Object to assign user input values to object properties and then use them throughout the script? A risk I might take...we'll see later.)

### Collections/Groupings (if any)
Pizza order?
### Interactivity/Behaviours and Specs
- Pizza
  - add ingredients up to 15 max. addIngredients()
  - add pizza to order addToOrder()

- Order
  - maintain collection receive from addToOrder.
  - addPizzaCost();
  - totalPizzaCost();

- UI Input
  - selectors
  - convert to int
  - assign int value to pizza types and ingredients
    - Ingredients:
      - Marinara = 1
      - Mozzarella = 2
      - 
    - Pizzas:
      - Margherita = 100
      - Pepperoni = 200
      - Supreme = 300
      - Vegan = 400

- UI Output
  -


## Tests

Describe: 

Test: "It should take user input, run for loop and count each individual number up to specified number"
Code: robotTalk(5);
Expected Output: (console:) 0, 1, 2, 3, 4, 5 


## License

[MIT]()

Copyright (c) 2022 _Marcus Padilla_
