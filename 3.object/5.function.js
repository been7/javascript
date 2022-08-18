function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name) //객체안에 기본으로 name이라는 속성이 있다. name 값은 function 이름
console.log(sayHi.length) //length 기본속성.

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

//
sayHi = function() {
    let count = 100 //지역변수일 뿐?
    console.log('hi')
    console.log(sayHi.count++) //NaN, count = 0이다.
}

sayHi()
console.log(`call count: ${sayHi.count}`)

sayHi.count = 0
sayHi()
sayHi()
console.log(`call count: ${sayHi.count}`)