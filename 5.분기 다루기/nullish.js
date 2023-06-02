// Nullish coalescing operator 널병합 연산자

function createElement(type, height, width) {
    const element = document.createElement(type || 'div');

    element.style.height = String(height || 10) + 'px';
    element.style.width = String(width || 10) + 'px';

    return element;
}
// 숫자 0은 falsy 값
const el = createElement('div', 0 , 0);
console.log(el.style.height ); //10px
console.log(el.style.width); //10px

/**
 * ?? 연산자의 좌측값이 null 이나 undefined이면 우측값을 return합니다.
 * 즉, falsy 값 중에서 null 과 undefined 값만 확인하고 싶을 때 사용합니다.
 */

// 널병합 연산자를 이용하여 리팩토링을 해봅시다. 
function createElement(type, height, width) {
    const element = document.createElement(type ?? 'div');

    element.style.height = String(height ?? 10) + 'px';
    element.style.width = String(width ?? 10) + 'px';

    return element;
}

const el2 = createElement('div', 0, 0);
console.log(el2.style.height); //0px;
console.log(el2.style.width); //0px;


//case_02
// null 병합연산자를 사용할 때에는 인자값이 undefined나 null값만 확인이 가능하다는 것을 잊지 맙시다.

function helloWorld(message) {
    if(!message){
        return 'Hello! World';
    }

    return 'Hello!' + (message || 'World');
}

function helloWord(message){
    return 'hello! ' + (message || 'World');
}

/**
 * @see https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing#no_chaining_with_and_or_or_operators
 * No chaining with AND or OR operators
 */
null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError
(null || undefined ) ?? "foo"; // returns "foo"