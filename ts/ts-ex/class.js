"use strict";
exports.__esModule = true;
var modules_1 = require("./modules");
var Honda = /** @class */ (function () {
    function Honda(name) {
        this.name = name;
    }
    Honda.prototype.move = function () {
        console.log("Car " + this.name + " moved");
    };
    return Honda;
}());
/*class Car extends ICar{

}*/
var car;
var human = new modules_1.Human();
human.walk();
car = { speed: 3, move: function () {
        console.log('move');
    } };
car.move();
var pilot = new Honda('Pilot');
pilot.move();
var numberArray;
numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);
var sum = numberArray.reduce(function (prev, cur) { return prev + cur; });
console.log("Array is " + numberArray + " Sum is " + sum);
var newNum = numberArray.pop();
console.log(numberArray);
console.log(numberArray[1]);
console.log(newNum);
