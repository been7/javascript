new Promise((resolve, reject) => reject(new Error(1)))
    .catch(e => console.log(e.message)) // 1

new Promise((resolve, reject) => {throw new Error(2)})
    .catch(e => console.log(e.message)) // 2

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message)) // 3. 익스큐터 + then핸들러 에러까지 잡아냄.

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla()) //존재하지않는메소드콜-에러상황
    .catch(e => console.log(e.message)) // blabla is not defined

new Promise((resolve, reject) => {throw new Error(4)})
    .catch(e => console.log(e.message)) // 4
    .then(result => console.log(result)) // underinde. catch handler는 마지막에 쓰기.

new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {
        if(e instanceof URIError) {
        } else {
            console.log(e.message) // 5
            throw e //node.js가 에러잡음
        } // 에러발생지점에서 가장 가까운 catch로 넘어간다.
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    .catch(e => console.log(e.message)) // 5