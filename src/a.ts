// declaring and defining the variable in ts that is in form of strict js
const x: number = 1;
console.log(x);

// writing function ts

function greet(firstName: string) {
  console.log(`Hello, ${firstName}!`);
}

greet("mritunjay");

// creating a sum funtion returning the sum of the two number

function sum(a: number, b: number) {
  return a + b;
}

const res = sum(7, 8);
console.log(res);

// how to deal with the objects in ts and how to declare it

interface Users {
  firstName: string;
  lastname: string;
  age: number;
  email?: string; // optional case if u dont give also it will work
}

function legal(user: Users) {
  if (user.age > 18) {
    return true;
  } else return false;
}

function Greet(user: Users) {
  return "hello" + user.firstName;
}

console.log(
  Greet({
    firstName: "sachin",
    lastname: "kumar",
    age: 70,
  })
);

type greet = number | string;
function Greets(a: greet) {
  console.log(a);
}
/// uses of multipe interface using type
interface employee {
  name: string;
  start_date: Date;
}
interface manager {
  name: string;
  department: string;
}

type TeamLead = employee & manager;

const teamLead: TeamLead = {
  name: "mritunjay",
  start_date: new Date(),
  department: "IT",
};

console.log(teamLead);

Greets(90);
Greets("hello");
console.log(
  legal({
    firstName: "mritunjay",
    lastname: "kumar",
    age: 20,
  })
);
