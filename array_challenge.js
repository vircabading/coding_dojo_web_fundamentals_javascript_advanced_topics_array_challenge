import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

// //////////////////////////////////////////////////////////////
// Coding Dojo > Web Fundamentals > Javascript > Advanced Topics: Array challenges
// Virgilio D. Cabading Jr.
// //////////////////////////////////////////////////////////////

// //// ALWAYS HUNGRY //////////////////////////////////////////
print_desc("Always Hungry");
print_ln();

function alwaysHungry(arr) {
    var output = "";
    var food_found = false;

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] == "food") {
            output += "yummy "
            food_found = true;
        }
    }
    if (!food_found) {
        output = "I'm hungry";
    }
    return output;
}
   
console.log(alwaysHungry([3.14, "food", "pie", true, "food"]));
// this should console log "yummy", "yummy"
console.log(alwaysHungry([4, 1, 5, 7, 2]));
// this should console log "I'm hungry"
print_ln();
print_ln();

// //// HIGH PASS FILTER ///////////////////////////////////////
print_desc("High Pass Filter");
print_ln();

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let idx=0; idx < arr.length; idx++) {
        if (arr[idx] > cutoff) {
            filteredArr.push(arr[idx]);
        }
    }
    return filteredArr;
}


var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log("Result of highPass([6, 8, 3, 10, -2, 5, 9], 5) :: ", result); // we expect back [6, 8, 10, 9]

