let json = '{"name": "john", "age": 30}' //string타입은 큰따옴표
let user = JSON.parse(json) //문자로 돼있는걸 객체로 바꾼다. 파싱
console.log(typeof json, typeof user)

//
json = '{age: 30}' // "age" 아니라서 json 아니다.
// JSON.parse(json) //6번 이유때문에 에러.

try {
    JSON.parse(json)
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
}