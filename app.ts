
// var a=12 ;
// function abcd(){
//   console.log(a);
// } 

// abcd() 

// interface User {
//   name:string,
//   email:string,
// } 
//  interface  Admin extends  User {

//  } 


//getters and setters

class user {
  constructor(public name: string, public age: number) { }
  getname() {
    return  this.name;
  } 
  setName(value:string){
    this.name=value;
  }
} 
 

let u1 = new user("abhi", 22);
 


// static members