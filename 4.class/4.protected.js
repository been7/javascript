class CoffeeMachine { //클래스속성 없는 상태.
    waterAmount //객체의 속성. 클래스속성X

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeeMachine)
/*
class CoffeeMachine {
    waterAmount

    constructor(voltage) {
        this.voltage = voltage
    }
}
*/
console.log(Object.keys(CoffeeMachine)) // []
console.log(CoffeeMachine.prototype) // {constructor: ƒ}

let machine = new CoffeeMachine(220)
console.log(machine) // CoffeeMachine {waterAmount: undefined, voltage: 220}

machine.waterAmount = 1
machine.voltage = 100
console.log(machine) // CoffeeMachine {waterAmount: 1, voltage: 100}

//
CoffeeMachine = class {
    _waterAmount //이게 protected. 객체에 저장된다.
    //get 다음 속성명 쓸 때는 _언더바 뺀다
    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}
// get,set을 accessor 이라고 지칭하고 있다.
console.log(CoffeeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>}

machine = new CoffeeMachine()
console.log(machine) // CoffeeMachine {_waterAmount: undefined}

machine.waterAmount = 1 // ??
console.log(machine) // CoffeeMachine {_waterAmount: 2}. set씀
console.log(machine.waterAmount) // 102. get이용함.

machine._waterAmount = 11
console.log(machine._waterAmount) // 11

