// 배열 요소에 접근하기. [0] , [1], 이런식으로 접근하지 말아야 합니다.


//case_01 아래코드는 inputs[0]이 무엇을 의미하는지 잘 모릅니다. 이는 좋지 않은 코드입니다.
function operateTime(inputs, operators, is){
    inputs[0].split('').forEach((num)=>{
        cr.get('.digit').contains(num).click();
    });

    inputs[1].split('').forEach((num)=>{
        cr.get('.digit').contains(num).click();
    });

}

// 위 코드를 고쳐보겠습니다. 아래는 배열구조분해 할당을 통해 좀 더 명시적으로 나타내었습니다. 

function operateTime(inputs, operators, is){
    const [firstInput, secondInput] = inputs
    

    firstInput.split('').forEach((num)=>{
        cr.get('.digit').contains(num).click();
    });

    secondInput.split('').forEach((num)=>{
        cr.get('.digit').contains(num).click();
    });
}

// 좀 더 간단히 하는 방법은 함수 인자에 바로 분해를 해버리는 것입니다. 
function operateTime([firstInput, secondInput], operators, is){
    firstInput.split('').forEach((num)=>{
        cr.get('.digit').contains(num).click();
    });

    secondInput.split('').forEach((num)=>{
        cr.get('.digit').contains(num).click();
    });
}

operateTime([1,2],1 ,2)


//case_02

function clickGroupButton(){
    const confirmButton = document.getElementsByTagName('button')[0];
    const cancelButton = document.getElementsByTagName('button')[1];
    const resetButton = document.getElementsByTagName('button')[2];

    // ...some code
}

//위 코드를 아래와 같이 변경 가능합니다.
function clickGroupButton(){
    const [confirmButton, cancelButton ,resetButton] = document.getElementsByTagName('button');
    // ...some code
}

//case_03

function formatDate(targetDate){
    const date = targetDate.toISOString().split('T')[0];

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`
}

//리팩토링을 해봅시다.
function formatDate(targetDate){
    const [date] = targetDate.toISOString().split('T');

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`
}

//아니면 유틸함수를 만드는 것입니다. 
function head(arr){
    return arr[0] ?? ''
}

function formatDate(targetDate){
    const date = head(targetDate.toISOString().split('T'))

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`
}