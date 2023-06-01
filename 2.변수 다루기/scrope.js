//1. 
let global = "전역"

if(global === '전역'){
    let global ='지역'

    console.log(global) //지역
}

console.log(global) // 전역

//만약 var로 위 코드를 동일하게 작성할 경우, 아래와 같이 전역 변수 값이 오염이 됩니다. 

var global2 = '전역'

if(global2 === '전역'){
    var global2 = '지역'

    console.log(global2) // 지역
}

console.log(global2) // 지역


//2. const 는 재할당이 금지가 되어, 안전하게 변수값을 사용할 수 있으나, 객체나 배열의 경우는 제외입니다. 
const person = {
    name:'lee',
    age:'34',
}

person = {
    name:'Lee',
    age:'33'
} //error

// 아래와 같이 객체 속성을 변경할 수 있습니다. 
person.name = 'sang'
person.age = '22'
console.log(person)
