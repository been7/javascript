if(true){}
if(false){} else {}

if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

if(-1) {console.log('!')}

console.log(true ? 1 : 0)
//명령문 하나일 땐 세미콜론 없어도 됨. 두개이상이면 구별하기 위해.
let val
switch('boo') {
    case 'bar': val = 'bar'; break
    case 'baz': val = 'baz'
    default: val = 'all right.'
}

console.log(val)