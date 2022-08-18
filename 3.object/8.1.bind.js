let user = {
    name: 'modonna',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user.greet()

//
setTimeout(user.greet, 100) //greet함수가져올때 주어객체가없어서 undefined

let fn = user.greet
setTimeout(fn, 200)

// () => user.greet() 이거(이름없는펑션)를 표에다 등록.
setTimeout(() => user.greet(), 300) //greet이라는 펑션을 표에 등록한것이다(x)
