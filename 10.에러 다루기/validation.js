/**
 * 유효성 검사
 * 1. 사용자의 입력 값이 유효한지 검증하는 것.
 * 2. 사용자와 상호작용 => 사용자의 입력을 받거나 그것을 통해서 무언가 하게됩니다.
 *  - 사용자의 입력이 이메일 포맷에 맞는지 검증한다. 
 *      - 이메일 포맷이 맞는 경우 그때서야 서버와 통신을 한다. (서버와의 비용을 절감)
 * 
 * 어떻게 할까?
 * 1. 정규식
 * 2. 자바스크립트 문법(문자열 검사)
 * 3. 웹표준 API() @see https://developer.mozilla.org/ko/docs/Web/HTML/Element/input
 */

/**
 * 그럼 유효성 검사는 어디서 할까?
 * @see https://weekly.khan.co.kr/khnm.html?mode=view&artid=202005081534371&code=114
 * @see https://www.boannews.com/media/view.asp?idx=84903
 * 
 * 할 수 있는 모든 곳에서 다 처리하는 것이 좋습니다.
 * 사용자의 입력 -> 클라이언트(HTML, javascript 빡빡하게 처리하고,) => 백엔드에서도 처리합니다.
 * @see https://react-hook-form.com/
 * @see https://github.com/jquense/yup
 */