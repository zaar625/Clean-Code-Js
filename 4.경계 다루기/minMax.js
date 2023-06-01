/**
 * 경계 다루기 (min-max)
 * 1. 최소값과 최대값을 다룹니다.
 * 2. 최소값과 최대값 포함 여부를 결정해야합니다. (이상-초과 / 이하-미만)
 * 3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현합니다. 
 */

/**
 * 인수로 받은 min 과 max 의 범위가 어디까지인지 코드만 봐서는 알수가 없습니다.
 * 따라서, 상수 네이밍에 다른 개발자가 유추가능 할 수 있도록 짓도록 노력합니다.
 */

function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//상수 : 항상 일정한 수로 변하지 않는다는 의미입니다.
const MIN_NUMBER_LIMIT = 1;
const MAX_NUMBER_LIMIT = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);


const MAX_AGE = 20;

function isAdult(age){
    //최소값, 최대값 (포함되는지 vs 안되는지)
    //이상, 초과 vs 이하, 미만
    if(age >= 20) {

    }
}