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
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.prototype.getname = function () {
        return this.name;
    };
    user.prototype.setName = function (value) {
        this.name = value;
    };
    return user;
}());
var u1 = new user("abhi", 22);
