// object.freeze

const STATUS = Object.freeze({
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    FAIL: "FAIL",
    OPTIONS:{
        GREEN:"GREEN",
        RED:"RED"
    }
})

STATUS.PENDING = 'p2'; //이렇게 해도 객체의 원본은 유지가 된다.
console.log('freeze:',STATUS) 
/**
 * freeze: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  OPTIONS: { GREEN: 'GREEN', RED: 'RED' }
}
 */

console.log(Object.isFrozen(STATUS)); // true



/**
 * shallow copy vs deep copy 
 * freeze도 deep copy 는 하지 않습니다.
 */
STATUS.OPTIONS.GREEN = 'G';
STATUS.OPTIONS.YELLOW = 'Y';

console.log('deep-copy?:', STATUS.OPTIONS) //deep-copy?: { GREEN: 'G', RED: 'RED', YELLOW: 'Y' }
console.log(Object.isFrozen(STATUS.OPTIONS)) //false


/**
 *  따라서 중첩된 객체의 경우, 중첩된 속성까지 freeze를 해주어야 합니다. 
 * 1. 대중적인 유틸 라이브러리(lodash)
 * 2. 직접 유틸 함수 생성합니다.
 * 3. stackoverflow
 * 4. typescript => readonly
 */

function deepFreeze(targetObj){
    //1. 객체를 순회
    //2. 값이 객체인지 확인
    //3. 객체이면 재귀
    //4. 그렇지 않으면 Object.freeze

    Object.keys(targetObj).forEach(key => {
        if(keyIstrue){
            deepFreeze(targetObj[key]);
        }
    })
    return Object.freeze(targetObj)
}
