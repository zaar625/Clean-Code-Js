/**
 * 사용자에게 알려주기
 * 예외처리를 할 때 사용자에게 알려주는 예시를 살펴보겠습니다.
 * 
 * 사용자:
 * 1. 동료 개발자
 * 2. 내가 만든 앱을 이용하는 사용자
 *  ㄴ 내가 만든 라이브러리 => ex) React
 *  ㄴ 내가 만든 실제 앱 => ex) 애플리케이션
 */


//ReferenceError 를 만들어 봅시다. 내 동료들이 new를 안붙일 경우 
function React() {
    // 생성자로 사용하길 바랄때... 
    if(!new.target) {
        throw new ReferenceError('생성자입니다.!')
    }
}

// console.log(React()); //new를 동반하지 않을 경우 에러가 나타납니다.

console.log(new React()); //{ }
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target
 */

// 사용자가 input에 잘못 입력했을때, 안내를 해주고 해당 inputBox에 포커스를 잡아 줄 경우가 예시가 되겠습니다.
// 에러가 나타났을 경우 그저 console 만 찍어내는 것이 아니라, 사용자에게 알려주고 행동을 유도할 수 있는 프론트엔드 개발자가 되어야 합니다.