/**
 * 네이밍 컨벤션
 * 1. 저장소, 폴더, 파일, 함수, 변수, 상수, 깃 브랜치, 커밋 등 
 *  프로그래밍 전반적으로 이름의 네이밍을 위한 규칙이나 관습을 만드는 것입니다. 
 * 2. 팀이나 개인의 차원에 따라 다를 수 있으며 특히 개인적인 견해와 해석에 따라 다를 수 있습니다.
 *  하지만 기준을 설정할 때 기본적인 논리와 이유가 있어야 합니다.
 * 
 * 대표적인 케이스 
 * 1. camelCase : 자바스크립트 일반적으로 사용
 * 2. PascalCase : 함수의 생성자, 클래스, 컴포넌트명
 * 3. kebab-case : npm 패키지 ...
 * 4, SNACK_CASE : 상수 ... 
 */

/**
 * 접두사, 접미사
 * data-id, data-name, data-value
 * AppContainer, BoxContainer
 * 
 * ListComponent, ItemComponent
 * 
 * Icar, Tcar : 타입스크립트에서 인터페이스인지 타입유형인지 파악하기 위해 이와같이 사용하기도 합니다.
 * 
 * 동사* => 함수는 동사로 시작한다.
 * 
 * _(언더바)// private
 * # //private
 */

// 연속적인 규칙(중첩될 경우)
for (let i = 0; i < 10; i++){
    for(let j = 0;  j < 10; j++){
        for(let k = 0;  k < 10; k++){
        
        }
    }
}

//자료형 표현
const inputNumber = 10
const someArr = [];
const strToNum = 'some code'

/**
 * 이벤트 표현
 * function on-*
 * function handle-*
 * function *-Action
 * function *-Event
 * function take-*
 * function *-Query
 * function *-All
 */

/**
 * CRUD
 * function generator -*
 * function gen -*
 * function make -*
 * function get -*
 * function set -*
 * function remove -*
 * function create -*
 * function delete -*
 */

/**
 * Flag : 특정시점 구분될때, 예를 들어 if(~~)
 * const isSubmit
 * const isDisabled
 * const isString
 * const isNumber
 */

/**
 * ECT
 * function selectById(id)
 * function selectAll(all)
 */

/**
 * 무엇보다 중요한 것은 네이밍 컨벤션을 사용할 때 자바스크립트 keyword(예약어)와 겹치지 않도록 작성합니다.
 * 
 * @see https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar
 */