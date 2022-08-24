new Promise((resolve, reject) => setTimeout(() => {resolve(1)}, 1000))
    .then(result => { //주어객체 promise객체를 then이 리턴. 1 받음
        console.log(result) //return하는 값이 promise의 리절트 속성값으로 할당
        return result + 1 // 1받은거 + 1 = 2 가 됨.
    }).then(result => {
        console.log(result)
        return result + 1
    }).then(console.log)

    