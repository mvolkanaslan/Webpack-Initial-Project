// Import the css file into the index.js for adding to bundle.js
// We use "style-loader" to transfer the properties at the style code in the bundle.js to the DOM.
import  "../css/main.css";
const person = require("./person");
console.log(person.name,person.lastname + " Wellcome ?");