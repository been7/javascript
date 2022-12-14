let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2)

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {//괄호안쓰면 그냥 스트링타입. 그냥 키 이름일 뿐. 변수hint는 데이터타입없다.
        return hint == 'string' ?  this.name : this.age
    }
} //[Symbol.toPrimitive] : 기본타입으로 바꿔야 할 때.

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`) //스트링타입
console.log(user > user2)
console.log(user + 50) //+면 합치기인지 더하기인지 몰라서 hint가 디폴트
console.log(user2 + 50)

//
user = { //이렇게 써도 new object이 실행된다.
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '') // ??


user.valueOf = function() { //toString이 없으면 valueOf 콜.
    return this.age
}
console.log(user + 100) // ??

//
userStr = JSON.stringify(user) //결국 이거 쓸거다.
console.log(userStr)
console.log(typeof userStr)

//     serializing : 객체를 기본타입으로 바꾸는 작업
// <-> deserializing