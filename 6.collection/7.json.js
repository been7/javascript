// serializing
let user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}
//json에서 key는 string 타입, value는 any타입
let json = JSON.stringify(user)
console.log(json)

//
user = {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined // null이면 나옴.
} //메소드,symbol, undefined 무시됨.

console.log(JSON.stringify(user))

//
let room = {
    number: 23
}

let meetup = { //객체안의 객체까지 신경써서 시리얼라이징 됨.
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup))

room.toJSON = function() { return this.number }
let s = JSON.stringify(meetup)
console.log(s)

// parsing
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "friend": {"name": "scott", "age": 27}}'
let man = JSON.parse(manJson)

console.log(man)
console.log(typeof man)