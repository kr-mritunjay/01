// why enum

// if some function uses some type like key is pressed up, down, left and right in that case so we dont have any type like
// string, number, decimal, etc

// to use that we can use tyoe also as like written below :

type keyInput = "up" | "down" | "left" | "right";

// other way to write as a human readable as enum

enum Directions { // syntax for enum we write on code
  up = 10, // basically its getting an index how they are stored if i doesn't give any value then
  // it accordingly take as 0 and if we want to explicitelly then in that case it will take that accordingly
  down,
  left,
  right,
}

function Key(keys: Directions) {
  console.log(keys == Directions.up);
}
Key(Directions.up); // to acess the enum value we have . to acess the enum values
