let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight
console.log(user.weight)

console.log('height' in user)
console.log('weight' in user)

for(let key in user) console.log(user[key]) //이터레이팅?ㅋ

user.name = 'paker'
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))


//
user = { //과거 문법
    greet: function() {console.log('hello')}
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
//console.log(user.city.name) // TypeError: Cannot read properties of undefined (reading 'name')
console.log(user.city?.name) //udefined

//
let street
//street = user.city.street
street = user?.city?.street
console.log(street)
street = user?.city?.street ?? 'where' //옵셔널체이닝 기본값 지정.
console.log(street)

//user?.address = 'sejong' //옵셔널체이닝은 오른쪽에만 사용가능.


user = null
//user.greet()
console.log(user?.greet)
user = undefined
//user.greet()

//
user = {}
//user.greet()
console.log(user.greet?.())