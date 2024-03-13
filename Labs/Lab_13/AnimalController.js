class AnimalController {

    static racing(animalList) {
        if (Array.isArray(animalList)) {
            animalList.sort((animal1, animal2) => animal1.speed - animal2.speed)
            console.log(animalList);
            return animalList[animalList.length - 1];
        } else {
            return animalList
        }
    }
}
module.exports = AnimalController