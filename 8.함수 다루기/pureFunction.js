/**
 * 순수함수란 부작용을 일으키지 않는 함수이고, 부작용이란 사이드 이펙트를 발생시키지 않는 경우라 할 수 있습니다.
 */

// Pure Function 

let num1 = 10;
let num2 = 20;

function impureSum1(){
    return num1 + num2;
}

function impureSum2(newNum) {
    return num1 + newNum;
}
// 위 코드에서 누군가가 num1 = 30으로 변경할 경우 해당 함수 값은 변합니다. 이는 순수하지 않은 함수입니다.
// 즉, 외부 값에 의존하기 때문에 일관적인 값을 도출하지 않습니다.

//위 코드를 순수함수로 변경해 봅시다.
//동일한 인풋을 넣으면, 동일한 값을 출력합니다.
function pureSum(num1, num2) {
    return num1 + num2
}


//case_02

function changeValue(num){
    num ++;

    return num;
}

changeValue(1); // pure

//-----

const obj = {one:1};

//primitive type vs reference type
// 객체와 배열을 조작하는 함수를 만들 때는 새롭게 만들어서 반환해야 합니다.
function changeObj(targetObj) {
    targetObj.one = 100;

    return targetObj;
}

changeObj(obj);
console.log(obj) // {one : 100}; impure

//위 코드는 스프레드 연산자를 이용하여 리턴값을 변경해보겠습니다.

function chagneObj(targetObj) {
    return {... targetObj, one:100};
}

changeObj(obj);
console.log('변경될까요?:', obj) // 1