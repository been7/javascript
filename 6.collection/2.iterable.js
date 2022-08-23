let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false,
                value: this.current++
            }
        else
            return {
                done: true //이터레이팅 끝났다.
            }
    }
}

for(let num of range)
    console.log(num)

// 이게 현재 문법
function* generator() { //어떤값을 반복적으로 뽑아내는 기능
    let val = 1
    while(val <= 3) yield val++ // yield 실행될 때마다 새로운 값 만들어서 리턴.
}

for(let num of generator()) // generator는 객체를 리턴한다.
    console.log(num)

let g = generator() // 객체 하나 리턴
console.log(g, typeof g) // generator {[[GeneratorState]]: 'suspended'} object

//
function* gen() {
    yield* generator() // 객체리턴
    yield* ['a', 'b'] // 객체리턴
    yield 9 // 숫자리턴
}

for(let val of gen())
    console.log(val)