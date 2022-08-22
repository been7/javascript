class A {} //~일 뿐이고

class B extends A {}

let a = new A() //생성자
let b = new B()
//a는 A 클래스의 객체, B클래스의객체X, Object의 객체
console.log(a instanceof A, a instanceof B, a instanceof Object)
console.log(b instanceof A, b instanceof B, b instanceof Object)

console.log(typeof a, typeof b)
console.log(typeof A, typeof B)