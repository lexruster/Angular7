interface ICar {
    speed: number;
    move(): void;
}

/*class Car extends ICar{

}*/

let car: ICar;

car = {speed: 3, move: function(){
    console.log('move')
}}

car.move();

let numberArray: Array<number>;

numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);

let sum = numberArray.reduce((prev, cur) => {return prev + cur});
console.log(`Array is ${numberArray} Sum is ${sum}`);

let newNum = numberArray.pop();

console.log(numberArray);
console.log(numberArray[1]);
console.log(newNum);