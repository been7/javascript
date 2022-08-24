async function f() { //promise 만들기
    return 1
} //promise를 리턴?
f().then(console.log) // 1

f = async function() {
    return Promise.resolve(2) // 리졸브하고싶으면.
}
f().then(console.log) // 2

f = async function() {
    return Promise.reject(new Error(3)) // 리젝트하고싶으면.
}
f().catch(e => console.log(e.message))

//
f = async function() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 1000)
    })
    let result = await promise //promise 실행까지 기다림.
    console.log(result)
}
f() // 4

//
class Food {
    constructor(taste, name) {
        this.taste = taste
        this.name = name
    }
}

class Chef {
    constructor(taste) {
        
    }        
}

class Waiter {
    async wait() { //async펑션이라 promise객체 리턴될것이다.
        return await Promise.resolve('cooked bread.')
    }
}
new Waiter().wait().then(console.log)


