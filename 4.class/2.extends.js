class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, ' run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, ' stop.')
    }
}

let animal = new Animal('animal') //constructor 부분으로 생각.
console.log(animal)

animal.run(10)
console.log(animal)
animal.stop()
console.log(animal)

//
class Duck extends Animal {
    run(speed) { //constructor 안쓰면 파라미터없는 기본생성자 자동생성.
        this.speed = speed / 10
        console.log(this.name, this.speed, 'run.')
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

let duck = new Duck('duck') //파라미터없는걸로 만들었는데..파라미터 넣어도 됨 왜냐 상속받은 Animal에 constructor name 있어서..
console.log(duck)

duck.run(10)
duck.stop()
duck.hide()

//
class Rabbit extends Animal {
    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

new Rabbit('rabbit').stop()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
}

console.log(new Rabbit('rabbit', 'black'))