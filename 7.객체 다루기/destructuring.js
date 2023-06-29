// 객체 구조 분해 할당

function Person(name , age, location){
    this.name = name;
    this.age = age;
    this.location = location;
}

const poco = new Person('poco', 30, 'korea')

console.log('poco:',poco)

/**
 * 위 코드의 문제점은, 인자를 매개변수로 받을 때 순서가 중요합니다. 만약 , 넘기고 싶지 않은 인자값이 있다면 undefined으로 보내야 합니다. 
 * 위 코드를 구조분해 형식으로 작성해 봅시다. 아래처럼 수정 할 경우 순서가 중요하지 않게 됩니다.
 */

function Person2({name, age , location}) {
    this.name = name;
    this.age = age ?? 10;
    this.location = location ?? 'korea';
}

const poco2 = new Person2({
    name:'poco',
    // age: 30,
    location:'korea'
});

console.log(poco2)

// 매개변수의 필수 값과 아닌 값을 좀 더 명시적으로 아래와 같이 표현할 수 있습니다.
function Person3(name , {age , location}) {
    this.name = name;
    this.age = age ;
    this.location = location ;
}

const pocoOptions = {
    age : 30,
    location:'korea',
}

const poco3 = new Person3('poco', pocoOptions);

// 
const orders = ['First', 'Second', 'Third'];

const st = orders[0];
const rd = orders[2];

const [first, ,third] = orders;
console.log(first) // First

// 위 배열에 빈값을 주어 세번째 항목을 받아왔는데요, 배열은 객체라고 했습니다. 아래와 같이 가져올 수 있습니다. 빈 공간이 많을 경우 아래처럼 써보세요.
const {0: st2, 2:rd2 } = orders;

console.log(st2, rd2) // First Third

