class Animal {
    constructor(name) {
        this.name = name //this.객체에 name 존재.
    }

    run(speed) {
        this.speed = speed //객체속성으로 speed 집어넣음 this.객체에 speed 존재
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal) // Animal {name: 'animal'}

animal.run(10) // animal 10 run.
console.log(animal) // Animal {name: 'animal', speed: 10}

animal.stop()
console.log(animal) // Animal {name: 'animal', speed: 0}

//
class Rabbit extends Animal{
    /*
    constructor(...args) {
        super(...args) // 자식생성자 첫번째 호출문은 super생성자?
    }
    */
    hide() {
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.hide()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()