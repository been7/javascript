let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()
// 11번: 파라미터로 지정한 user를 this 변수 안에 넣음
let fn = greet.bind(user) //주어function을 리턴. 단 바디안에서 this에 user를 넣음.
fn() //fn 앞에주어객체 없으니까 여전히undefined

setTimeout(fn, 100) //fn: this변수에 user객체가 담겨있는 펑션?

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: fn에 user.greet 을 할당하라.
//       greet의 this 엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn, 200) //표에 등록,.,

console.log(fn == user.greet) // 논리적으로만 같다고 생각하면 됨.