const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("Should add two numbers", () => {
  const result = add(1, 2);

  // This custom assertion can be replaced with Jest assertion library functions provided.
  // if (result !== 3) {
  //   throw new Error(`You added 1 and 2. The result was ${result}. Expected 3.`);
  // }

  // Jest assertion function replacement.
  expect(result).toBe(3);
});

test("Should generate greeting from name", () => {
  const result = generateGreeting("Nathaniel");
  expect(result).toBe("Hello Nathaniel!");
});

test("Should generate greeting from anonymous", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
