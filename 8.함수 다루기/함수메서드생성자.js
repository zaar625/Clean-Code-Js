// 함수, 메서드 , 생성자 를 구분해야합니다
// this에 대해 꼭 다시 공부해야 합니다.


// 함수 
function func() {
    return this; // 해당 this는 전역객체(global)를 바라봅니다.
}

//객체의 메서드

const obj = {
    method() {
        return this;
    },
};

// 생성자 함수 (class) __ Class로 인해 생성자 함수를 사용할 일이 거의 없습니다. 
function Func(){
    return this;
}

class Func {
    constructor(){
        // some code
    }
}

/**
 * 함수
 * 1급 객체
 * - 변수나, 함수표현식으로 데이터에 담길 수 있습니다.
 * - 매개변수로 전달 가능합니다. (콜백 함수)
 * - 함수가 함수를 반환합니다. (고차 함수)
 */

func();

//메서드 => 객체에 의존성이 있는 함수, OOP행동을 의미합니다.
obj.method();

//ex) 내장 빌트인 객체 [].map() // 'str'.length

// 생성자 함수 => 인스턴스를 생성하는 역할 => Class
const instance = new Func();