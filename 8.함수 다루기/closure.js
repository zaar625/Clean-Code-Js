/**
 * Closure
 * 따로 재 공부 필요합니다.
 */

function add(num1) {
    return function sum(num2){
        return num1 + num2;
    };
}

const addOne = add(1);
console.log(addOne(1))

// case _ 02

function add2(num1){
    return function(num2){
        return function (caculateFn){
            return caculateFn(num1, num2);
        };
    };
}

function sum (num1, num2) {
    return num1 + num2;
}

function multiple(num1, num2){
    return num1 * num2;
}

const addOne2 = add(5)(2);
const sumAdd = addOne(sum); // 7
const sumMultiple = addOne(multiple); //10


// case_03

function log(value) {
    return function (fn){
        fn(value);
    };
}

const logFoo = log('foo');

logFoo((v)=> console.log(v));
logFoo((v)=> console.info(v));
logFoo((v)=> console.error(v));
logFoo((v)=> console.warn(v));

// case_04 

const arr = [1, 2, 3, "A", "B", "C"];

const isNumber = (value) => typeof value ==='number';
const isString = (value) => typeof value === 'string';

arr.filter(isNumber);

// 위 코드를 클로저로 만들어 봅시다.

function isTypeOf(type){
    return function (value) {
        return typeof value === type;
    }
}

const isNumber2 = isTypeOf('number');
const isString2 = isTypeOf('string');

arr.filter(isNumber); // [1,2,3]
arr.filter(isString); //["A", "B", "C"]

//case_05 

function fetcher(endpoint) {
    return function(url, options){
        return fetch(endpoint + url, options)
        .then((res)=> {
            if(res.ok){
                return res.json();
            }else {
                throw new Error(res.error);
            }
        })
        .catch((err) => console.error(err))
    }
}

const naverApi = fetcher('http://naver.com');
const daumApi = fetcher('http://daum.net');

daumApi('/webtoon').then((res) => res);
naverApi('/webtoon').then((res)=> res);


// case_06 아래 코드에 대해서 한번쯤 생각해 봅시다.

someElement.addEventListener(
    'click', debounce(handleClick, 500)
)

someElement.addEventListener(
    'click', throttle(handleClick, 500)
)
