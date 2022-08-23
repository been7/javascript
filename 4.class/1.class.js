class User { // sugar syntax
    constructor(name) {
        this.name = name
    }

    introduce() { //속성값이 펑션인 메소드?
        console.log(`I am ${this.name}.`)
    }
}

let user = new User('john')
console.log(user.name)
user.introduce()

// ][isClassConstructor]]: true
// User('john') // TypeError: Class construtor User cannot be invoked without 'new'

//
User = class {
    name // class field, 멤버변수
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce() // abel / 12
console.log(user.name) // abel
console.log(User.prototype.name) //undefined 왜??

//
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()