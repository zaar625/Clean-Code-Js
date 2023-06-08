/**
 * indent depth
 * 들여쓰기
 * 
 * html : 2depth
 * Js: 2, 4depth 
 */


/** 
 * 1. 조기 반환
 * 2. callback => promise => async await
 * 3. 고차함수(map, reduce, filter)
 * 4. 함수를 나누고 추상화하기
 * 5. 메서드 체이닝(.then().then()
 * */ 
function test(){
    if(true){
        if(true){
            if(true){
                somePromise()
                    .then()
                    .then()
                    .then()
            }
        }
    }
}

/**
 * 그렇다면 어떻게 줄일까요? 아래와 같이 도구를 이용하여 줄일 수 있습니다.
 * editorconfig.org 의 indent_style = space / indent_size = 2
 * prettier : tabWidth
 * eslint : "indent:["error" ,2]
 */ 
