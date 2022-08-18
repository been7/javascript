let user = {
    name: 'frances', //entry, 콤마로 구분
    age: 70
}

user = { //할당연산자 오른쪽에 블럭을 두면 오브젝 연산자, property?
    name: { //name: 키
        first: 'bob', //밸류 타입 오브젝
        last: 'smith'
    },
    'nick name': 'tiger face', //공백있으면 '붙여준다'
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
}

console.log(user.name)
console.log(user.name.first) //객체프로퍼티 접근은 체이닝.
//
user.sing()

//user.'nick name'
//user.nick name
console.log(user['nick name'])
console.log(user['name']['first']) // user.name.first 가능

user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age)

let key = 'nick name'
console.log(user[key]) //[장점]: 변수가 될 수 있다.
key = 'age'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one',
    2: 'two'
}

//man.1 1은 스트링타입이지만 에러남
console.log(man['1'])