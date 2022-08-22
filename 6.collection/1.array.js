let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[1])

console.log(arr.length)

//
let matrix = [ //이차원배열
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = [] // 수직으로
arr.push(1) // push 알고리즘은 stack.. 쌓아간다.
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop()) // 젤 위에꺼 꺼낸다. LIFO
console.log(arr) // pop으로 꼭대기꺼 꺼낸 후 남은애들

//
arr = [] // 수평으로
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) // 젤 처음꺼 꺼낸다. FIFO
console.log(arr)

// slice는 리턴함. 작업대상 a 안건드림.
a = [0, 1, 2]
b = a.slice(1) // 1은 start index
console.log(b, a)

// splice는 리턴안함. 그래서 주어객체arr 건드림.
arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4)
console.log(arr)

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b'))
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort() // sort는 오름차순 정렬. 리턴하니까 할당연산자 씀
console.log(arr, s)
// 과제: s 가 arr 인지, 확인하라.
console.log(s == arr)

arr = [8, 11, 22, 34, 9]
console.log(arr.sort()) // sort는 원소를 string으로 취급.

console.log(arr.sort((a,b) => a - b))
console.log(arr.sort((a, b) => b - a))

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

    // 과제: 원소를 출력하라.
for(let key in arr) console.log(arr[key])

for(let val of arr) console.log(val)