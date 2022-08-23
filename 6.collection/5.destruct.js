let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(name, surname)

let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four);

[one, , three] = [1, 2, 3, 4] // let 쓰면안됨. 얘넨 변수임 위에 다 선언됨
console.log(one, three)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c) // i=a b=공백 c=a

//
i = s.split(' ') //쪼갠다?
console.log(i);

[a, b] = i
console.log(a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ') //john smith 두개 원소 있는 배열 만들어짐.
console.log(user)

// 
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user) //entry 뽑아냄
console.log(entries)

for(let [key, value] of entries) console.log(key, value)

// map으로 이터레이팅
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map) console.log(key, val)

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin);

//
[one, two, ...rest] = [1, 2, 3, 4] //rest 타입 array
console.log(one, two, rest);

//
[name, surname='annoymous'] = ['john']
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width);

({title, height, width} = options)

let {width: w, height: h} = options // ??
console.log(w, h)

let {title: t, ...other} = options //rest ...other 타입 객체
console.log(t, other)

let {title: subject, wide=1000} = options
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

// 과제: bread 에서 size 와 items 를 뽑아내라.
let {size, items} = bread
console.log(size, items)

//
let {
    size: {
        width: w2, //w2에 담겠다
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items:[item1, item2]}) { //객체가 하나 들어올건데 그 객체르 ㄹ쪼개버리겠다
    console.log(name, item1, item2)
}

showMenu(menu)