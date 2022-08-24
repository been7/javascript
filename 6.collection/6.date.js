console.log(Date())
console.log(typeof Date()) // string

let date = new Date() //오브젝 쓰고싶다.
console.log(date)
console.log(typeof date) // object
console.log(date.toLocaleDateString()) // 년월일

date = new Date('2022-08-23T07:27:30.999Z') // UTC + 9시간 = 한국시각
console.log(date.toLocaleDateString()) // 2022. 8. 23.
console.log(date.toLocaleTimeString()) // 오후 4:27:30

console.log(
    date.getFullYear(), //2022
    date.getMonth(),    // 7 (0 ~ 11)
    date.getDate(),     // 22
    date.getUTCHours(), // 7
    date.getHours(),    // 16
    date.getMinutes(),  // 27
    date.getSeconds(),  // 30
    date.getMilliseconds(), // 999
    date.getDay()           // 2 (0 ~ 6, 일 ~ 토)
)

console.log(date.getTime()) // 1661239650999 ms
console.log(Date.now())     // 1661240964359 ms

date = new Date(0) // 기준시간?
console.log(date)

date = new Date(1000 * 60 * 60 * 24) // 하루(24시간), 1000ms
console.log(date)

date = new Date(-1000 * 60 * 60 * 24) // 하루 전.
console.log(date)
