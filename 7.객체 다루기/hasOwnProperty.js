// hasOwnProperty

const person = {
    name :'sangyoon'
}

console.log(person.hasOwnProperty('name')); //true

//보통 for문을 통해서 많이 사용합니다. 코드 스닙펫을 이용하면, 

for (const key in object){
    if(Object.hasOwnProperty.call(object, key)){
        const element = object[key];
    }
}

/**
 * @see https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * 아래 예시를 살펴 봅시다.
 */

const foo = {
    hasOwnProperty : function (){
        return 'hasOwnProperty';
    },
    bar:'string',
};

console.log(foo.hasOwnProperty('bar')) //hasOwnProperty

console.log(Object.prototype.hasOwnProperty.call(foo, 'bar')); //true

//위 true를 반환하는 콘솔 코드에서 일일히 쓰기가 귀찮을 수 있습니다. 그럴땐 유틸함수를 만드세요.

function hasOwnProperty(targetObj, targetProp) {
    return Object.prototype.hasOwnProperty.call(targetObj, targetProp)
}

hasOwnProperty(person, 'name')