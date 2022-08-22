let id = Symbol()
let id1 = Symbol('id') //파라미터는 디스크립션
let id2 = Symbol('id')

console.log(id, id1, id2)

console.log(id1 == id2)

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    name: 'neo'
}

let userId = Symbol('userId') //description을 userId로 줌
user.userId = 1
user[userId] = 2 //[변수사용가능]

console.log(user)

// 과제: user 객체를 iterating 해서, key 들을 출력하라.
for(let key in user) console.log(key) //symbol은 조회안됨?

console.log(Object.keys(user)) //symbol 조회안됨

// global symbol registry
id1 = Symbol.for('id')
id2 = Symbol.for('id') //symbol.for 은 같은거 만들기.
console.log(id1 == id2)

let key = Symbol.keyFor(id1)
console.log(key, typeof key) // ?

//
id1 = Symbol.for('name') // global symbol 만들기, key의 역할
id2 = Symbol('name') // local symbol, 디스크립션역할,, 조회X
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))