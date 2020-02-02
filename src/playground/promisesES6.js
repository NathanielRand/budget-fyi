const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved data");
  }, 5000);
});

console.log("Before");

promise
  .then(data => {
    console.log("Data:", data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my other promise");
      }, 5000);
    });
  })
  .then(str => {
    console.log("Does this run?", str);
  })
  .catch(error => {
    console.log("Error:", error);
  });

console.log("After");
