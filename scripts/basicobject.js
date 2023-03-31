// JavaScript source code

const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');
function Person(name) {
const title = document.getElementById('title');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
    text.textContent += "  Hi this is " + this.name + ". ";
  };
}
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."
// Get the elements you want to manipulate



// Change the text of the <h1> element
title.textContent = document.title + 'Hello, World! 217 in script';

// Add some text to the <p> element
text.textContent += ' This is some more text. ';

button2.addEventListener('click', function() {
  button2.textContent = 'b2 Clicked!';
  text2.textContent = " BUTTON2 was clicked. Now let's show some interesting stuff!...";
});
// Add an event listener to the button to change its text when clicked
button.addEventListener('click', function() {
  button.textContent = 'Clicked!';
  text.textContent = "  Hi this is BOB.";
  title.textContent = "Hello, World! BOB IS HERE!";
  text2.textContent += " we show this after the button is clicked";
});
button3.addEventListener('click', function() {
  button.textContent = 'b3 Clicked!';
  text3.textContent = " BUTTON3 was clicked. Now let's do nothing...";
});
