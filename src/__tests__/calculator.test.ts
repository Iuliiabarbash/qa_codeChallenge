import calculator from "../calculator";


// const calculator = {
//   /** Will add x and y together */
//   add: (x: number, y: number): number => x + y,
//   /** will subtract y from x */
//   subtract: (x: number, y: number): number => x - y,
//   /** will multiply x and y */
//   multiply: (x: number, y: number): number => x * y,
//   /** will divide x by y */
//   divide: (x: number, y: number): number => x / y,
// };




// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () => {
  dataset.forEach((myCalculator) => {
    test(`The ${myCalculator.method} method with ${myCalculator.x} and ${myCalculator.y}`, () => {
      switch (myCalculator.method) {
        case "add":
          expect(calculator.add(myCalculator.x, myCalculator.y)).toEqual(myCalculator.x + myCalculator.y);
          break;
        case "subtruct":
          expect(calculator.subtract(myCalculator.x, myCalculator.y)).toEqual(myCalculator.x - myCalculator.y);
          break;
        case "multiply":
          expect(calculator.multiply(myCalculator.x, myCalculator.y)).toEqual(myCalculator.x * myCalculator.y);
          break;
        case "devide":
          expect(calculator.divide(myCalculator.x, myCalculator.y)).toEqual(myCalculator.y / myCalculator.y);
          break;
        default:
          console.log('There is no such action');

      }
    });
  });
});

