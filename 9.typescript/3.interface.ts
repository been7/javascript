interface Profile { //interface는 나만의 타입 만들기.Profile이라는 새로운 타입을 만든 것.
    id: number
    username: string
    nickname: string
}

function printUsername(profile: Profile) { //return하지 않는 펑션이라 리턴타입없다?
    console.log(profile.username)
}

const profile: Profile = {
    id: 1,
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)
console.log(typeof profile) //인터페이스타입은 object타입.

//
interface Relationship {
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        id: 1,
        username: 'cain',
        nickname: 'hero'
    },
    to: {
        id: 2,
        username: 'abel',
        nickname: 'warrior'
    }
}

//
interface Account extends Profile {
    email: string
    password: string
}

// 과제: {} 안을 채워라
const account: Account = {
    id: 3,
    username: 'bini',
    nickname: 'binii',
    email: 'bini@bini.com',
    password: 'bini7'
}

//
interface User {
    id: number
    username: string
    photoUri?: string //옵션,,
}

let user: User = {
    id: 1,
    username: 'able'
} // { id: 1, username: 'able' }

user = {
    id: 1,
    username: 'abel',
    photoUri: 'face.jpg'
} // { id: 1, username: 'abel', photoUri: 'face.jpg' }

console.log(user)

//
interface Shape {
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() {
        return Math.PI * Math.pow(this.radius, 2) //제곱표현 pow
    }
    
    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())