const age = 16 //global 객체에 생김
// sayAge() // TypeError: sayAge is not a function
// tellAge() //ReferenceError: tellAge is not defined, 없는건 이 에러 뜸
console.log(sayAge) //얘는 에러아님. sayAge 존재하니까
// console.log(hello)

{
    let age = 10 //local 객체에 생김
/* closure - 외부에 있는 변수를 참조할 수 있는 function */
    function sayAge() { //이 펑션이 closure
        console.log(age)
    }

    let tellAge = function() { //이 펑션도 closure,, js펑션은 죄다 closure
        console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge()
// tellAge() // ReferenceError: tellAge is not defined

