var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// basic 
var a = 12;
function abc() {
    console.log(a);
}
abc();
//classes and objects 
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 1200;
        this.category = "digital";
    }
    return Device;
}());
var d1 = new Device();
var d2 = new Device();
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, age) {
        if (age === void 0) { age = 0; }
        this.name = name;
        this.age = age;
    }
    return BottleMaker;
}());
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
// static members 
var Shery = /** @class */ (function () {
    function Shery() {
    }
    Shery.getNumber = function () {
        return Math.random();
    };
    Shery.version = 1.0;
    return Shery;
}());
// Abstract Classes 
var Payments = /** @class */ (function () {
    function Payments(amount, account_number) {
        this.amount = amount;
        this.account_number = account_number;
    }
    Payments.prototype.isPaymentValid = function (amount) {
        return this.amount > 0;
    };
    return Payments;
}());
var Paytm = /** @class */ (function (_super) {
    __extends(Paytm, _super);
    function Paytm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Paytm;
}(Payments));
// functions in Typescript 
// Void function 
function xyz() {
}
//normal function 
function abcd(name, age, data) {
    data("hey");
}
abcd("abhi", 12, function (arg) {
    console.log(arg);
});
// Rest Parameter 
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
}
sum(1, 2, 3);
function data(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hello 1 ");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else {
        throw new Error("Something went wrong");
    }
}
data("hello and welcome ");
data("Hacker ", 20);
//Generics in typescript  
