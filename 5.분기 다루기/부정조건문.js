// 부정조건문 지양하기
/**
 * 부정조건문을 사용할 경우,
 * 1. 조건에 대한 생각을 여러번 해야합니다.
 * 2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true 부터 실행시킵니다.
 * 
 * 부정 조건 예외
 * 
 * 1. Early Return 
 * 2. Form Validation
 * 3. 보안 혹은 검사하는 로직
 */


const isCondition = true;
const isNotCondition = false;

//숫자일때만 
if(!isNaN(3)){
    console.log('숫자입니다.')
}

if(!isCondition){
    console.log('거짓인 경우에만 실행')
}

if(isNotCondition){
    console.log('거짓인 경우에만 실행')
}