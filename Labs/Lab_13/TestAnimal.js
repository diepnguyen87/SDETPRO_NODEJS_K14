const AnimalController = require("./AnimalController")
const Dog = require("./Dog")
const Horse = require("./Horse")
const Leopard = require("./Leopard")
const Tiger = require("./Tiger")

let horse = new Horse()
let tiger = new Tiger()
let dog = new Dog()
let leopard = new Leopard()
let winnerAnimal = AnimalController.racing([horse, tiger, dog, leopard])
if(winnerAnimal){
    console.log(winnerAnimal.toString());
}else{
    console.log("No animals have joined into the racing");
}