let add = function(a, b) {
    return a + b
}

add = (a, b) => a + b //=> arrow
console.log(add(1, 2))

const double = n => 2 * n
console.log(double(2))

const greet = () => console.log('hello')
greet()

//명령문 2개 이상이면 블럭사용.
add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1, 2))