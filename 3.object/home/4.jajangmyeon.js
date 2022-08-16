/* 과제:
~ 를 객체지향으로 refactoring 하라.
*/

function chef1(food) {
    this.food = `달콤한 ${food}.\n`
}

function chef2(food) {
    this.food = `매운 ${food}.\n`
}

function waiter(food, chef) {
    this.food = console.log(chef)
}

const chef1 = new chef1(food)
const chef2 = new chef2(food)
const waiter = new waiter(food, chef)

console.log(waiter.food(chef1.food('짜장면')))