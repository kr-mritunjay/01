// why enum

// if some function uses some type like key is pressed up, down, left and right in that case so we dont have any type like
// string, number, decimal, etc

// to use that we can use tyoe also as like written below :

type keyInput = "up" | "down" | "left" | "right";

// other way to write as a human readable as enum

enum Directions { // syntax for enum we write on code
  up,
  down,
  left,
  right,
}

function Key(keys: Directions) {
  console.log(keys == Directions.up);
}
Key(Directions.up); // to acess the enum value we have . to acess the enum values
