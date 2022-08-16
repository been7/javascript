let age

function src() {
    let user = {
        name: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12 //a가 콜되면 usersymbol에 어쩌구, 새로운 entry 추가?
    console.log(user)
}

function b(user) {
    console.log(Object.keys(user)) //symbol은 조회안됨
    console.log(user.name)
    console.log(user)
}

src()