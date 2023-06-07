/**
 * black box envent listener
 * ㄴ 내부 구현이 어떻게 동작될지 예측할 수 없는 경우
 * ㄴ 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우
 */

const button = document.querySelector('button');

//버튼.이벤트_등록('이벤트_타입', 리스너_함수_실행) -> 반응형으로 실행됩니다.
button.addEventListener('click' , handleClick);
//ㄴ 위와 같이 대부분 리스너 함수명을 handleClick 으로 작성하는 경우가 많습니다. 이는 옳지 않습니다. click 이라는 타입이 이미 써있기 때문입니다.

//따라서 
function getLog(e) {
    console.log(e)
}
button.addEventListener('click', getLog);
//ㄴ "클릭을 하면 getLog를 가져오는 구나" 라는 추측이 가능하도록 네이밍을 짖습니다.

/**
 * 검색 박스_클릭 및 엔터도 당연히 되어야 합니다. 
 * 
 */

// 네이밍 중요합니다.
const handleSearch = (e) => {
    /**
     * 1. input을 받는 코드
     * 2. 유효성 검사를 하는 코드
     * 3. form을 전송하는 코드
     */
}

button.addEventListener('click', handleSearch);
button.addEventListener('keyup', handleSearch);
form.addEventListener('onsubmit',handleSearch);