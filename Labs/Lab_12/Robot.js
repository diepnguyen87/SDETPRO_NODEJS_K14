class Robot {
    static id = 0

    constructor(){
        this.name = "Robot"
        this.name1 = "Robot1"
        Robot.id++
    }

    getId(){
        return Robot.id
    }

    static doSthing(){
        console.log(`Hello ${this.name}`);
        console.log(`Hello ${this.name1}`);
    }
}

console.log(Robot.doSthing());

