function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) //첫번째 파라미터를 두번째 파라미터에 집어넣는다? 내가 지정한 시간 지나면 두번째에서 꺼낸다?

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId) //제거메소드