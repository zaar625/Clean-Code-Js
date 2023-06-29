/**
 * 매개변수의 순서 자체가 경계입니다.
 * 
 * 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려합니다.
 * 
 * 1. 매개변수를 2개가 넘지 않도록 만듭니다.
 * 2. 규칙적이지 않은 매개변수가 주어질 경우, arguments, rest parameter를 고려해봅니다.
 * 3. 매개변수를 객체에 담아서 넘길 수 있습니다.
 * 4. 이미 함수가 존재한다면, 랩핑하는 함수를 만듭니다. 
 */

function someFunc(someArg, someArg) {
    //... some code
}

//예를 들면,
genRandomNumber(1, 50) // 1~50 중에 랜덤을 만들겠구나~ 라는 식의 추론을 할 수 있습니다.
getDates('2023-10-01', '2023-10-31'); // 해당 월 날짜를 가져오는 함수 이구나~ 라는 식의 추론을 할 수 있습니다.


//아래 코드는 4번에 대한 예시입니다.
//ES2015+ 
function someFunc2(someArg1, someArg2, someArg3, someArg4) {
    //...
}

function getFunc(someArg1, someArg3) {
    someFunc2(someArg1, undefined ,someArg3)
}
