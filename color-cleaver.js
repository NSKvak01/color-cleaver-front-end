const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const col1 = getInput(1);
const col2 = getInput(2);

if (col1 === undefined && col2 === undefined) {
    console.log("Please, enter at least one color.")
} else if (isValidSecondary(col1) === true) {
    console.log(colorDeconstructor(col1))
} else {
    console.log(colorCombinator(col1, col2))
}