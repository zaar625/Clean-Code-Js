// void vs return


// react의 setState, alert 함수의 경우 void를 반환합니다. 그래서 굳이 return 을 사용할 필요가 없습니다.
function handleClick(){
     setState(false);
}

function showAlert(message) {
     alert(message);
}

// void의 경우(return이 없는 경우 ) undefined를 반환합니다.
function test(sum1, sum2) {
    const result = sum1 + sum2
}

console.log(test(1,2)) // undefined

//그렇다면 return값이 존재하는 함수는 무엇이 있을까요? 
//즉, 반환값이 있는 함수의 경우 네임이 추론이 가능해야 합니다.

function isAdult(age){
    return age > 19;
}

function getUserName(name) {
    return '유저 ' + name;
}

//반환값이 있기 때문에 값 그자체로 함수를 이용할 수 있습니다.
const isFlug = isAdult(10);
console.log(isFlug) //false
console.log(typeof isFlug) //boolean
