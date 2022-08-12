function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3)) //넘치는 파라미터는 무시

//add가 펑션이라고 생각하지만 내부적으로는 1번에서 변수로 선언됨.
add = function(...args) { //rest 파라미터는 배열
    let tot = 0
    for(let arg of args) tot += arg
    return tot //이 알고리즘은 파라미터 개수에 제약받지않음.
}
console.log(add(1), add(1, 2, 3))

//rest 파라미터는 마지막에 위치해야한다.
function printName(firstName, lastName, ...titles) { //직업개수는 정할 수 없어서 배열로.
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

// rest는 흩어져있는걸 모아주는거. 메소드 정의할 때 씀.
function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

console.log(Math.max(1, 2, 3))

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr)) //spread?는 메소드를 콜 할 때 씀.

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)