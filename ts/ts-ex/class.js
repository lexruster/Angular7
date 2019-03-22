/*class Car extends ICar{

}*/
var car;
car = { speed: 3, move: function () {
        console.log('move');
    } };
car.move();
var numberArray;
numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);
var sum = numberArray.reduce(function (prev, cur) { return prev + cur; });
console.log("Array is " + numberArray + " Sum is " + sum);
var newNum = numberArray.pop();
console.log(numberArray);
console.log(numberArray[1]);
console.log(newNum);
