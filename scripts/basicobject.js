// JavaScript source code
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
    text.textContent += ' Hi! Im' ;
    text.textContent +=  this.name;
   // document.write ${this.name};
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

const title = document.getElementById('title');
const text = document.getElementById('text');
const button = document.getElementById('btn');

// Change the text of the <h1> element
title.textContent = 'Hello, World!';

// Add some text to the <p> element
text.textContent += ' This is some more text. ';



// Add an event listener to the button to change its text when clicked
button.addEventListener('click', function() {
  button.textContent = 'Clicked!';
});
