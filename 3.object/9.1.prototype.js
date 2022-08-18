let animal = {
    isAlive: true //prototype 이라는 프라퍼티 자동생성 but 속성 숨김
}

function Rabbit(name) {
    this.name = name
}
// function의 부모는 object이다.
console.log(Rabbit.prototype) // new object으로 만든 깨끗한 객체 {}

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

//
Rabbit.prototype = animal
console.log(Rabbit.prototype) //토끼의 부모가 애니멀

rabbit = new Rabbit('white')
console.log(rabbit.isAlive) //rabbit에 isAlive 없음 -> 프로토타입 찾음 -> 애니멀있음.

//
function Duck(name) {
    this.name = name //duck function객체 - duck function 프로토타입객체
}

console.log(Duck.prototype) //{constructor: ƒ} -> f: function duck
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__) //duck의 prototype 객체
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck2.__proto__) //복사받은 prototype 주소값 동일

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck') //duck객체 con없으니까 proto찾아가서 그거 쓴다?ㅋ