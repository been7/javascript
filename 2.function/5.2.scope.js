let a = 1 // global scope
// let a

{ // local scope
    console.log(a)
}

{
    let a = 2
    console.log(a)
}

console.log(a)