/**
 *  protoType 조작 지양하기
 * 1. 이미 JS는 많이 발전했습니다.
 *  1-1. 직접 만들어서 모듈화를 할 수 있습니다. 
 *  1-2. 만든 모듈화를 배포할수 있습니다. (npm)
 * 2. JS 빌트인 객체를 건들지 말아야 합니다.
 * 
 */

class Car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    sayName(){
        return this.brand + '-' + this.name
    }
}

const casper = new Car('캐스퍼', '현대')