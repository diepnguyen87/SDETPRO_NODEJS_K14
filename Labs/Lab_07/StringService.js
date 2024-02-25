function countWords(str){
    let wordsArr = str.split(" ")
    let wordsObj= {}

    for (const word of wordsArr) {
        if(wordsObj[word] === undefined){
            wordsObj[word] = 1
        }else{
            wordsObj[word] += 1
        }
    }
    return wordsObj
}

module.exports = {countWords: countWords}

let animal = {
    type: "mammal",
    speak: function() {
    console.log("I'm a " + this.type);
    }
};

Object.ent