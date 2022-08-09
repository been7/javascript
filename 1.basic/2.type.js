let foo = "I am a string."//변수는 데이터타입이 없다.
foo = 'So am I' //큰따옴표,작은따옴표 구분X
foo = `back tick` //데이터(스트링,리터럴) 나타내는 세가지 "",'',``

foo = 1
foo = 1.0

console.log(1 / 0) //expression. 값을 표현.
console.log('a' / 1) //NaN(Not a Number)

foo = 1
console.log(isFinite(foo)) //isFinite : 값이 숫자인지 확인
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1) //parseInt 문자를 숫자로 변경.

foo = 'a'
foo = '100px' //알아서 100으로 잘 변환함.
foo = '+1'
foo = '-1'
foo = '123456-789123' //하이픈을 구분자로 써서 앞의 것만 인식.
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo)) //정수처리해서 소수점 이하 버림.
console.log(parseFloat(foo)) //소수점 살리기.

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN
console.log(a) //NaN이 더 쎔.

foo = 1n

const okay = true //boolean
const fail = false

let val = null

let val2 //undefined라는 값. 값의 뜻이 정의되지 않았다.
val2 = undefined
console.log(val2)

let id = Symbol('id')
console.log(typeof id) //id변수에 들어있는 값은 Symbol이다.

val = 1 //문법상 데이터타입은 Number
val = String(val) //함수 이용해서 캐스팅
console.log(typeof val) //val 변수의 타입은 string이다.

val = '6' / '2' //자동 캐스팅
console.log(val)

val = false / true //false : 0, true : 1 로 캐스팅된다.
console.log(val) 

val = '1'
val = Number(val) //문자를 숫자로 캐스팅
console.log(typeof val)

console.log(Number('1'), Number(true)) //1로 캐스팅
console.log(Number(' '), Number(''), Number(null), Number(false)) //0으로 캐스팅
console.log(Number('a'), Number(undefined), Number(NaN)) //NaN 캐스팅
//Boolean 기준 값이 있다 or 값이 없다
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) //값이 있다(true)
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) //값이 없다(false)
