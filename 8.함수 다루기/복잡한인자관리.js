// 복잡한 인자 관리하기
// 많은 인자는 관리가 매우 어렵습니다. 하지만 무엇보다 중요한건 맥락을 유추할 수 있는 네이밍이 중요합니다.

function toggleDisplay(isToggle){
    //some code
}

function sum(sum1, sum2){
    //...
}


function genRandomNumber(min, max) {
    //...
}

function time(start, stop, end) {
    //...
}

function genSquare(top, right, bottom, left) {
    //...
}

// case_02 맥락을 알기 어려운 케이스입니다. 
function createCar(name, brand, color, type) {
    return {
        name, 
        brand,
        color,
        type
    }
}

/**
 * 위 코드를 개선해봅시다.
 * 객체로 인자를 받아올 수 있습니다.  
 * */ 

function createCar(name, {brand, color, type}) {
    return {
        name, 
        brand,
        color,
        type
    }
}
console.log(createCar('차량 이름', {
    type:''
})) //{ name: '차량 이름', brand: undefined, color: undefined, type: '' }


// 복잡한 인자 관리하기

function createCar3({name, brand, color, type}) {
    if(!name) {
        throw new Error('name is a required');
    }

    if(!brand) { 
        throw new Error('brand is a required')
    }
}

createCar3({name:'CAR', type:'SUV'}) // brand is a required
