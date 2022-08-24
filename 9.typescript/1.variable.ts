let msg: string = 'hello'
// msg = 1

let val: number = 1
let nullableStr: string | null = null
nullableStr = 'hi'
// nullableStr = undefined

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'
numberOrStringOrNull = null

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

// 컴파일러가 알아서 넘버로,,
let a = 1
let b = 'b'
let c = true