/**
 * example1, 2는 같은 코드입니다. 가독성에 있어 어느것이 더 좋은지 생각해봅시다.
 * 아래와 같이 조건이 많을 경우 switch 문을 고려해봅니다.
 */

function example() {
    return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}

function example2(){
    if(condition1) {return value1;}
    else if(condition2){return value2;}
    else if(condition3){return value3;}
    else {return value4;}
}

/**
 * case_02
 * 물론 코드는 컴퓨터에게 명령을 내리기 위함입니다. 더불어 문서화 기능도 있습니다. 사람이 보는 것이기 때문에 적절한 행 과 괄호를 써서 
 * 타인이 이해하기 쉽도록 노력해야합니다.
 */
const example = condition1
    ? ((a === 0) ? 'zero' : 'positive')
    : 'negative';

const welcomeMe = (isLogin) => {
    const name = isLogin ? getName() : '이름없음';

    return `안녕하세요 ${name}`
}

/**
 * case_03
 * 삼항연산자를 이용할 때, 값 혹은 식을 이요하는 것이 좋습니다. 아래 예시는 함수에서 undefined 반환하므로 좋지 않은 예입니다.
 * 참고로 타입에서 (function name():void) 의 void 는 반환이 없다는 의미입니다. 즉 undefined를 반환합니다.
 * 
 * 삼항연산자를 사용하는 것은 무언가의 값을 만들고 그것을 변수로 담아낼때 가치가 있습니다. 
 */

function alertMessage(isAdult){
    isAdult
        ? alert('입장이 가능합니다.')
        : alert('입장이 불가능합니다.')
}

// 따라서 함수의 반환값이 있을 경우,
function alertMessage(isAdult){
    return isAdult ? '입장이 가능합니다.' : '입장이 불가능합니다.';
}
//또는
function alertMessage(isAdult) {
    const isAdulted = isAdult ? '입장이 가능합니다.' : '입장이 불가능합니다.'

    if(isAdulted){
        //...some code
    }

    if(isAdulted && gender === 'MAN'){
        //... some code
    }
}