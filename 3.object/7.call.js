let user1 = {
    name: 'isabel',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

let user2 = {
    name: 'jade',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user1.greet()
user2.greet()

//
let name = 'morpheus'

function greet() {
    console.log(`I am ${this.name}.`)
} //변수만들고 기본값 할당X -> undefined

greet()

greet.call(user1)
greet.call(user2)

//
user2 = {
    name: 'colin'
}

user1.greet()
//user2.greet()

// 과제: user1.greet 을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2)