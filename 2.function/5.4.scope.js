// sayHi() // ReferenceError ReferenceError: Cannot access 'name' before initialization

let name = 'neo'
sayHi()
function sayHi() { //펑션 선언하는것. // function declaration
    console.log('Hi,', name)
}

//
// sayHello() // ReferenceError: Cannot access 'sayHello' before initialization
// function expression
const sayHello = function() { //expression 값을 표현한다. 
    console.log('Hello,', name)
}

sayHello()