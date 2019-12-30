//
// ES6 Array Destructuring
//

// Example #1
const address = [
  "215 Promenade Vista St",
  "Charleston",
  "South Carolina",
  "29412"
];
const [street, city, state, zip] = address;
console.log(`You are in ${city}, ${state}`);

// Example #2
const item = ["Tea (hot)", "2.50", "3.00", "3.50"];
const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}.`);
