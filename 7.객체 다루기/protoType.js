/**
 *  protoType 조작 지양하기 _ prototype을 덮어써서 오버라이딩하고 고치고 쓰는것은 위험합니다.
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

console.log(casper.sayName())

//class문법이 없던 시절 아래 코드와 같이 생성자 함수로 만들곤 했습니다. 

function CarFn(name, brand) {
    this.name = name;
    this.brand = brand;
}

CarFn.prototype.sayName = function(){
    return this.brand + '-' + this.name;
}

const carFn = new CarFn('제네시스', '현대')
console.log(carFn.sayName()) // 현대-제네시스