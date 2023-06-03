// javascript의 배열은 객체다.

const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['func'] = function () {
    return 'hello'
}
console.log(arr.func());
//단지 i가 숫자이므로, 1,2,3이 출력되는 것 일뿐 위에 다양한 값들은 이미 배열에 들어가 있습니다.
for (let i = 0 ;i < arr.length; i++) {
    console.log(arr[i])
}

console.log(arr);

// 자바스크립트에서 배열이 정말 배열인지 확인할 필요가 있습니다.
const arr2 = [1, 2, 3];

console.log('isArray?:',Array.isArray(arr2))

if(arr.length){
    console.log('배열확인');
}

if(typeof arr === 'object'){
    console.log('배열확인');
}