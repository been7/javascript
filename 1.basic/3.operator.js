let val = 1 + 2 * 3 / 2
console.log(val, 5, 4**2, 4**(1/2)) //4**2 4의 2승, 4**(1/2) 루트4

let i = 1
console.log(++i, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2') //+는 붙이기연산자라서 모두 숫자일 때만 더함.
// unary plus operator
console.log(1 + +'2') //+붙여주면 숫자로 변함.

console.log(1 || 0, 0 || 1)
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)

//foo && do(foo) foo가 값이 있으면 함수 do 출력?
//bar = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log()
console.log('2' > 1, '01' == 1) //문자가 숫자로 캐스팅.