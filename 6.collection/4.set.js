let set = new Set() //set은 key 없고 value만 있어서중복된 값이 없다.

let user1 = {name: 'john'}
let user2 = {name: 'pete'}

set.add(user1).add(user2).add(user1)
console.log(set)

console.log(set.size)
console.log(set.has(user1), set.has(user2), set.has({}))

console.log(set.delete(user1))
console.log(set)

//
set.add(user1)

for(let user of set) console.log(user)

set.forEach(val => console.log(val))

//
set = new Set([1, 2, 3])
console.log(set)

//
let arr = Array.from(set)
console.log(arr)

set = new Set('hello')
console.log(set) //set이라서 중복된 l 하나 제거됨.