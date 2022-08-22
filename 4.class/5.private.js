class CoffeeMachine {
    #waterAmount //private 만들기

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine)
console.log(CoffeeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>}

let machine = new CoffeeMachine
console.log(machine) // CoffeeMachine {#waterAmount: undefined}

machine.waterAmount = 1
console.log(machine.waterAmount) // 102

// machine.#waterAmount = 1 // SyntaxError.. protected와 차이점. 객체속성감추고 엑세서를 통해서만 뭐 할 때.