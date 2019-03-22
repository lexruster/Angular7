import { Human } from './modules'

interface ICar {
    speed: number;
    move(): void;
}

class Honda implements ICar{
    private name: string;
    speed: number;

    constructor(name: string){
        this.name = name
    }
    
    move(): void {
        console.log(`Car ${this.name} moved`);
    }
}

/*class Car extends ICar{

}*/

let car: ICar;
let human: Human = new Human();
human.walk();

car = {speed: 3, move: function(){
    console.log('move')
}}

car.move();

let pilot = new Honda('Pilot')
pilot.move();

let numberArray: Array<number>;

numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);

let sum = numberArray.reduce((prev, cur) => {return prev + cur});

console.log(`Array is ${numberArray} Sum is ${sum}`);

let newNum = numberArray.pop();

console.log(numberArray);
console.log(numberArray[1]);
console.log(newNum);