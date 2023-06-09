// PRIMITIVE vs REFERENCE

function myFunction(){}
console.log(typeof myFunction) // function

const str = new String('문자열')
console.log(typeof str) // object

//위 에서 보는바와 같이 PRIMITIVE는 타입을 감별하기가 용이하지만, REFERENCE의 경우 object로 반환되기 때문에 감별하기 어렵습니다. -> typeof는 만능이 아니다.
//자바스크립트는 동적으로 변하는 언어이기 때문에 타입까지 동적입니다. 

typeof null //'object'

//instance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const Lee = new Person('Lee', 33)

console.log(Lee instanceof Person) // true

// 위 내용을 바탕으로 타입을 검사해봅시다. 
const arr = []
const func = function(){}
const date = new Date()

console.log(arr instanceof Array) //true
console.log(func instanceof Function) //true
console.log(date instanceof Date)// true

// 최상위가 object이기 때문입니다. 
console.log(arr instanceof Object) //true
console.log(func instanceof Object) //true
console.log(date instanceof Object)// true

//위 코드의 문제점을 아래의 형식으로 파악할 수 있습니다. 
console.log(Object.prototype.toString.call(date)) // [object Date]
console.log(Object.prototype.toString.call(func)) // [object Function]
console.log(Object.prototype.toString.call(arr)) // [object Array]