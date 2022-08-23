let map = new Map()

map.set('1', 'hello') // key, value
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true)) // map 읽기는 get. get의 파라미터로 키 넣으면 됨
console.log(map.has('1'), map.has(1), map.has(true), map.has(false)) // map이 가지고 있는 키 조회
console.log(map.size) // entry 몇개 있는지

console.log(map.delete(1), map.delete(2))
console.log(map)

map.clear() // map 다 지우기
console.log(map)
//자동생성 = array, 내가 지정 = map
//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

//파라미터로 배열
let greens = new Map([
    ['cucumber', 500], //['key', value]
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

let keys = greens.keys()
console.log(keys)

for(let key of keys)
    console.log(key)

let values = greens.values()
console.log(values)
for(let value of values) console.log(value)

greens.forEach((val, key) => console.log(key, val))

//
let user = { // 객체
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(entries)
console.log(new Map(entries))

// map을 object으로
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

fruits = Object.fromEntries(map)
console.log(fruits)