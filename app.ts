
// basic 
var a = 12;
function abc() {
  console.log(a);
}

abc()

//types and interfaces

interface User {
  name: string,
  email: string,
}
interface Admin extends User {

}

//classes and objects 

class Device {
  name = "lg";
  price = 1200;
  category = "digital";
}

let d1 = new Device();
let d2 = new Device();


class BottleMaker {
  constructor(public name: string, public age: number = 0) {

  }
}



//getters and setters 

class user {
  constructor(public name: string, public age: number) { }
  getname() {
    return this.name;
  }
  setName(value: string) {
    this.name = value;
  }
}


let u1 = new user("abhi", 22);



// static members 


class Shery {
  static version = 1.0;

  static getNumber() {
    return Math.random();
  }
}


// Abstract Classes 

class Payments {
  constructor(protected amount: number, protected account_number: number) { }
  isPaymentValid(amount: number) {
    return this.amount > 0;
  }
}

class Paytm extends Payments {

}


// functions in Typescript 


// Void function 
function xyz(): void {

}

//normal function 

function abcd(name: string, age: number, data: (arg: string) => void) {
  data("hey")
}

abcd("abhi", 12, (arg: string) => {
  console.log(arg);

})


// Rest Parameter 

function sum(...numbers: number[]): void {

}

sum(1, 2, 3);


// Function  Overloading 

function data(a: string): void;
function data(a: string, b: number): number;

function data(a: any, b?: any) {
  if (typeof a === "string" && b === undefined) {
    console.log("hello 1 ");
  }
  if (typeof a === "string" && typeof b === "number") {
    return 123;
  } else { throw new Error("Something went wrong") }
}
data("hello and welcome ");
data("Hacker ", 20);


//Generics in typescript  