// 유사 배열 객체

const arrayLikeObject = {
    0:'Hello',
    1:'world',
    length:2,
}

console.log(Array.from(arrayLikeObject)) //['Hello', 'world' ]
console.log(Array.isArray(arrayLikeObject)) //false


//인자도 유사배열 객체의 대표적인 사례입니다.
/**
 * 아무런 인자를 매개변수로 받지않는 함수의 인자로 (가변적인 인자) 넘길 경우 함수에 매개변수를 지정하지 않더라도
 * 함수 내부에서 arguments라는 메서드를 이용하여 다룰 수 있습니다.
 */
function generatePriceList(){
    for (let index = 0; index < arguments.length; index ++){
        const element = arguments[index];

        console.log(Array.isArray(arguments)) //false
        console.log(element); //100 200 300 ..
    }

    return arguments.map((arg)=> arg + '원'); // error 유사배열 객체이기 때문에 배열을 이용하는 map, filter .. 등 고차함수 사용이 안된다, 사용하려면 

    Array.from(arguments).map((arg)=> arg + '원') // 이런식으로 작성해야 한다.
}

generatePriceList(100, 200, 300, 400)