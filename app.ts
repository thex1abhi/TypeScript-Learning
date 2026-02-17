
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

//Generic function 
function Generic<T>(a: number, value: T) {
  return console.log("number :", a, "value:", value);
}
Generic(12, "random value");

//  generic interface 
interface info<T> {
  name: string,
  age: number,
  key: T
}

function func3(obj: info<number>) {

}
func3({ name: "abhi", age: 20, key: 12 });

// generic class  

class DataGenerator<T> {
  constructor(public key: T) { }
}

let data1 = new DataGenerator<string>("Data Generated ")
console.log(data1);
let data2 = new DataGenerator<number>(12)
console.log(data2);

//common error case 

function f3<T>(a: T, b: T): T {
  return "data" as T;  // Here if we don't write ' as T ' it will give error 
}

f3<string>("first", "second");


//Modules 

// Here we create files and export the function or logic from them and import them in the required files 

import { getPayment, addPayment } from "./payment"

addPayment(12);


//Type assertion 

let m = Number("12");
console.log(typeof a);


//Non-null assertion operator 

let mm: null | undefined | string;
mm = "helluuu ji "

// Type Guards 
function func5(arg: string | number) {
  if (typeof arg === "number") {
    return "number";
    // in this code block we will get all the methods/functions related to number as this is inside the number block  
  } else if (typeof arg === "string") {
    return "string"
    // in this code block we will get all the methods/functions related to string as this is inside the string block 
  } else {
    throw new Error("This is a error ")
  }
}

console.log(func5(12));
console.log(func5("hello"));

// using Type guard with instance of 

class TvRemote {
  switchTvOff() {
    console.log("Switching off Tv");
  }
}

class AcRemote {
  switchAcOff() {
    console.log("Switching off Ac");
  }
}

const tv = new TvRemote();
const Ac = new AcRemote();

function switchOff(device: TvRemote | AcRemote) {

  if (device instanceof TvRemote) {
    device.switchTvOff();
  }
  else if (device instanceof AcRemote) {
    device.switchAcOff();
  }
}

//DOM in TypeScript  

