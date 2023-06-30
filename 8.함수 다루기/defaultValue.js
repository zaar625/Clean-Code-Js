// default value
// 자바스크립트 함수를 사용함에 있어 안전하게 사용하는 방법 중 하나는, 파라미터에 기본값을 명시해주는 것입니다.

function createCarousel(options) {
    options = options || {};

    var margin = options.margin || 0;
    var center = options.center || false;
    var navElement = options.navElement ||' div'; 

    return {
        margin,
        center,
        navElement,
    }
}
createCarousel()

/**
 * 위 코드를 설명해봅시다.  createCarousel에서 인자를 넘겨주지 않게 되면, options 파라미터는 undefined가 됩니다. 
 * undefined.(닷)을 할 경우 오류가 생깁니다.
 */


function createCarousel({margin = 0, center = false, navElement = 'div'}={}){
    return {
        margin,
        center,
        navElement,
    }
}

//case 03 

const required = (argName) => {
   console.log('required is ' + argName);
};

function createCarousel3({
    items = required('items'),
    margin = 0,
    center = false,
    navElement = 'div',
} = {}) {
    return { margin, center, navElement}
}

console.log(createCarousel3({
    center:true, 
    navElement:'span'
}))