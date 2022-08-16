let makeUser = function(name, age) {
    return {
        name: name, //key: value
        age: age
    }
}

makeUser = function(name, age) {
    return {
        name,
        age
    }
}

console.log(makeUser('doris', 57))

//
function User(name) { //생성자(대문자로 시작) 콜할 때 new 붙여야함.
    // this = {} //내가 만들지 않아도 자동으로 생성. 직접사용X
    this.name = name //this변수에는 User생성자로 생성된 객체가 들어간다.
    this.greet = () => console.log(`I am ${this.name}.`)
    return this // 얘도 생략. 직접사용O
}

let user1 = User('bob') // undefined.
user1 = new User('bob') // User {name: 'bob', greet: ƒ}
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

//
let str = String(1)
console.log(typeof str) //string 타입

str = new String(1)
console.log(typeof str) //object 타입

//
let human = new function() {
    //this = {} //순수한 아기같은 객체,, 여기다가 property,entry들을 넣는것.
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name , new SmallUser().name)

//console.log(BigUser().name, SmallUser().name) //TypeError: Cannot read properties of undefined (reading 'name')
// 과제: new를 하지 않고, 앱이 살도록 위 코드를 수정하라.
console.log(BigUser().name, SmallUser()?.name)

//
const user = new Object()
console.log(user)
user.age = 12

//
const person = Object.create(user) // user객체 복제
console.log(person)
console.log(person.age)
console.log(person == user)

person.name = 'mandarin'
console.log(user)