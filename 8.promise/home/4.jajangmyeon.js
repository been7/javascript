class Food {
    constructor(taste, name) {
        this.taste = taste
        this.name = name
    }

    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.name}`
    }
}

class Chef {
    constructor(taste) {
        this.taste = taste
    }

    cook(foodName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(new Food(this.taste, foodName)), 1000)
        })
    }
}

class Waiter {
    async order(foodName, chef) {
        return await chef.cook(foodName) //food가 담긴 promise를 그대로 return
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1).then(food => console.log(food + ''))