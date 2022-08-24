const numbers: number[] = [1, 2, 3]
const texts: string[] = ['a', 'b']

interface Person {
    name: string
}

// [] 안을 원소 2개로 채워라.
const people: Person[] = [{name: 'john'}, {name: 'object'}] //Person타입 원소를 갖고 있는 배열

console.log(people)
