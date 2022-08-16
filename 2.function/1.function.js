function greet() { //function은 데이터이다.
    console.log('hello')
}

greet()

let salute = function() { //펑션데이터를 왼쪽 salute에 쓰고있다.
    console.log('hi')
}
//변수오른편 할당연산자가 있다 : 쓰기, 없다 : 읽기
salute()
console.log(salute)
//js는 데이터타입x 변수명으로 구별하기
let sayHello = function(user, greeting) { //function expression
    return `${greeting}, ${user}` //template literal
}

console.log(sayHello('rebacca', 'hello'))

// 과제: HI 라고 인사하는 function 을 정의하고, 실행하라.
const sayHi = function(){
    console.log('HI')
}
const say = sayHi
say()

//num,string,boolean처럼 function타입의 데이터일 뿐
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

//이름 없는 funcion?
(function() {
    console.log('earth')
}) ()

//파라미터로 들어간 펑션을 콜하려면 리턴값이 있는 펑션이어야함.
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() { //이름없는펑션을 파라미터로 씀.
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn) //이름있는펑션을 파라미터로 씀.

//
let showMsg = function(from, msg) {
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity') //변수 기본값 undefined 로 출력.