let promise = new Promise((resolve, reject) => resolve('done'))
/*
promise.then(console.log, console.log)
promise.catch(console.log, null) //리젝트된것만,,

promise.then(console.log)
promise.then(console.log) // 리젝트는 관심없다?
*/
// 과제: 1초 뒤에, resolve 하도록 한다.
promise = new Promise((resolve, reject) => { // executor. 객체생성되자마자 즉각실행
    setTimeout(() => resolve('done'), 1000) //익스큐터가 setimeout 직접실행.
})

promise.then(console.log, console.log) // handler

//
/*
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result),
    error => console.log(error))
*/
//
new Promise((resolve, reject) =>
    setTimeout(() => resolve('완성'), 3000))
    .then(console.log) // 완성. 26까지 promise객체.then
    .finally(() => console.log('promise가 생성되었습니다.')) // promise가 생성되었습니다. promis객체.finally 가능

    new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000)) // 미완성
    .then(console.log) //실패해서 작동X
    .catch(e => console.log(e.message)) //작동O
    .finally(() => console.log('promise가 생성되었습니다.')) // promise가 생성되었습니다.