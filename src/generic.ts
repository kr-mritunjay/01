function identity<T>(arg: T) {
  // use of generic all the types can be passed
  return arg;
}

let output1 = identity("abc");
let output2 = identity(100);

console.log(output1.toUpperCase()); // ts automatically understands what type of data is comming
// by using geberic  // here string manipulation is done.
console.log(output2.toString()); // here number manipulation is done
