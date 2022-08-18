function makeFn() {
    let name = 'parker'

    function displayName() { //closure
        console.log(name)
    }

    return displayName
}

let myFn = makeFn()
myFn()