console.log(Number.MAX_SAFE_INTEGER) // 자바스크립트의 숫자를 어디까지 볼수 있는지 정수의 범위
console.log(Number.isInteger)

// isNaN = is Not A Number = 숫자가 아니다. 
console.log(isNaN(123)) // false , 숫자가 숫자가 아니다. -> 숫자가 맞다. 

/**
 * 아래 코드를 봐주세요.
 * isNaN은 느슨한 검사이고, Number.isNaN은 엄격한 검사입니다.
 */

console.log(isNaN(123 + '테스트')) //true
//ES2015+
console.log(Number.isNaN(123 + '테스트')) //false
