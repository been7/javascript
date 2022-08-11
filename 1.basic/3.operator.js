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
console.log('2' > 1, '01' == 1, false == 0, '' == false) //문자가 숫자로 캐스팅.
console.log(true > 1)

// equivalent operator
console.log(1 == '1', 1 != '1')

// identical operator
console.log(1 === '1', 1 !== '1') //자동변환X 결과.

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A') //유니코드값으로 비교, 배열(같은 인덱스끼리)로 비교,

console.log(null > 0, null < 0, null >= 0, null == 0)
console.log(undefined > 0, undefined >=0, undefined == 0)
console.log(NaN > 0, NaN >= 0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)
