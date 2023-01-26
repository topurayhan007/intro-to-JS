var harrysMomGave = 1000;
var priceOfOranges = 20;
var priceOfApples = 30;

var appleQuantity = 1;
var orangeQuantity = 1;

var totalCost = priceOfOranges * orangeQuantity + priceOfApples * appleQuantity;

var change = harrysMomGave - totalCost;

console.log("Harry's mom gave: " + harrysMomGave);
console.log("Price of Oranges: " + priceOfOranges);
console.log("Price of Apples: " + priceOfApples);
console.log(
  "Harry wants " +
    appleQuantity +
    " kg of apples and " +
    orangeQuantity +
    " kg of oranges"
);
console.log("Harry's total cost is: " + totalCost);
console.log("The shopkeeper will return: " + change);
