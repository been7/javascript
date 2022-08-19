let animal = {
    name: 'animal'
}
// 위아래 같은 뜻 다른 표현
animal = new Object()
animal.name = 'animal'

// 과제: 토끼를 object literal 및 생성자로 만들어라.
//       토끼는 age = 3 property 를 갖고 있다.
let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3  

console.log(animal.__proto__)
console.log(rabbit.__proto__) //오브젝프로토타입주소값을 저장.

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal //상속관계표현. 래빗은 애니멀이다(A is a B). 
console.log(rabbit.__proto__) // ?? 래빗 age는 왜 출력안되는지..
console.log(rabbit.name, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__: animal //rabbit is a animal 표현. 22번
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.name) // user

administrator.name = 'jonadan'
console.log(administrator.name)


//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat() // animal.eat.
rabbit.eat() // rabbit eat. 프로토타입 애니멀이 갖고있는거 실행
lion.eat()   // lion eat.

//
console.log(Object.keys(rabbit)) // iterating 첫번째 방법

// 과제: rabbit 의 key 들을 iterating 해서 출력하라.
for(let key in rabbit) //iterating 두번째 방법
    console.log(key)

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) msg =  (`child's key: ${key}`)
    else msg = (`parent's key: ${key}`)
    console.log(msg)
}