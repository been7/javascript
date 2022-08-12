const age = 16
// sayAge() // 6.1에서는 global객체에 생겼는데 펑션블록일땐 안생김.
// tellAge() // 얘는 6.1 이랑 똑같음

function init() {
    let age = 10 

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}
init()
// sayAge() // ReferenceError: sayAge is not defined
// tellAge() // 6.1이랑 같음.