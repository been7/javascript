let obj = {} //괄호만 쓰면 객체가 생성됨. new Object 줄여서 쓴 것.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

//
obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) // null

console.log(obj.toString()) // toString은 기본속성이기때문에 파라미터붙여서 콜 가능

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)

console.log(arr2) // [1, 2]

//
let one = new Number(1)
console.log(one.toString()) // Number(1)

//
function User() {

}

let user = new User() //얘는 기본toString 없어서,,
console.log(user.toString()) // [object Object]
console.log(obj.toString()) // [object Object]