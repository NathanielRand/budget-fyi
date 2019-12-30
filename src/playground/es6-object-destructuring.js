//
// ES6 Object Destructuring
//

const person = {
  // name: "Nathaniel",
  age: 26,
  location: {
    city: "Charleston",
    temp: 65
  }
};

// Object destructuring w/ default values (i.e "name")
const { name = "Anonymous", age } = person;
console.log(`${name} is ${age} years young.`);

// Object destructuring w/ renaming of local variable
const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It is ${temperature} degrees in ${city}.`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

// Object destructuring w/ both renaming of local variable
// and default values (i.e "name")
const { title, author } = book;
const { name: publisherName = "Self-Published" } = book.publisher;
if (title && author) {
  console.log(
    `"${title}" was written by ${author} and published by ${publisherName}.`
  );
}
