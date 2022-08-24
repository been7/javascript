function wrap<T>(value: T): T {
    return value
}

const output = wrap('hello')
console.log(output) // hello

//
interface Woman {
    name: string
}

const woman: Woman = {name: 'hera'}
const woman2 = wrap(woman)
console.log(woman2) // { name: 'hera' }

//
interface Item<T> {
    id: number
    data: T //다양한타입 가지고 있겠다.
}

interface Animal {
    name: string
}

interface Place {
    location: string
}

const animalItem: Item<Animal> = {
    id: 1,
    data: {
        name: 'cat'
    }
}

const placeItem: Item<Place> = {
    id: 2,
    data: {
        location: 'seoul'
    }
}

//
type Product<T> = {
    id: number
    data: T
}

class Queue<T> {
    list: T[] = []

    get length() {
        return this.list.length
    }

    enqueue(item: T) { //집어넣는다
        this.list.push(item)
    }

    dequeue() { //꺼낸댜
        return this.list.shift()
    }
}

const queue = new Queue<number>() //queue 타입 queue<number>
queue.enqueue(0)
queue.enqueue(1)

let val = queue.dequeue() // 0
val = queue.dequeue() // 1
console.log(val)