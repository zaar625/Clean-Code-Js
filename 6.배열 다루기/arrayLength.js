/**
 * Array.length
 * 배열 length을 사용할 때에는 주의깊게 사용하도록 합니다.
 */

const arr = [1, 2, 3];

console.log(arr.length)

arr.length = 10;

console.log(arr.length)

console.log(arr) //[ 1, 2, 3, <7 empty items> ]

// 다음 배열의 콘솔값을 살펴봅시다. 마지막 요소의 인덱스가 배열의 길이임을 기억해주세요.

const arr2 = [1, 2, 3];
arr2[3] = 4;

console.log(arr2.length); // 4

arr2[9] = 10;

console.log(arr2)//[ 1, 2, 3, 4, <5 empty items>, 10 ] 

// 
Array.prototype.clear = function (){
    this.length = 0;
};

function clearArray(array) {
    array.length = 0;

    return array;
}

const arr3 = [1, 2, 3];
arr3.clear();

console.log('arr3:',arr3) // []
console.log(clearArray(arr3)) // []