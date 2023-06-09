/**
 * 예를 들면, react에서 useState, useEffect ... 의 use는 훅이구나
 * 자바스크립트의 getter, setter 의 예약어인 set, get
 * react-use 라이브러리를 봅시다. 
 * 제이쿼리의 $ 기호로 dom에 접근하기도 합니다. 
 * 
 * @see https://seoramyeon.tistory.com/32
 */

//예전같은 경우 생성자 함수를 만들 경우,
function FactoryFunction(name){
    this._name = name; //._ 언더바 의미는 프라이빗 필드라는 의미이다. 하지만 아래 class 문법처럼 진화하였다.
}

//언어가 발전하면서 class문법이 생성되고 나서, 
class FactoryFunction {
    #name = name // class를 이용한 Private 필드 선언
}