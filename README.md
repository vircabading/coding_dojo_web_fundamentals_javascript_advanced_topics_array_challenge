# Javascript Advanced Topics > Array Challenges Read Me

1. Always Hungry
```
Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.
```
```
function alwaysHungry(arr) {
    // your code here 
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
```

2. High Pass Filter

Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

```
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
```

3. Better than average

Write a function that will reverse the values an array and return them.

```
function reverse(arr) {
    // your code here
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
```