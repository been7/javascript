type Man = {
    name: string
}

const man: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name: 'neo'}]

//
type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
// color = 'yellow' // 인터페이스와 차이점(오브젝만을 대상으로 함).

//
type Employee = Man & {
    job: string
}

const employee: Employee = {
    name: 'berg',
    job: 'programmer'
}
