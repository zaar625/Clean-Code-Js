console.log('1' == 1) //true , 느슨한 검사 => 암묵적으로 형 변환이 이루어집니다.

//그러면, 암묵적인 형 변환이 이루어지는 경우를 알아봅시다. 

console.log(11 + '문자와 결합') // '11 문자와 결합'
console.log(!!'문자열') // true
console.log(!!"") // false

console.log(parseInt('9.9999',10)); // 9 , 여기서 주의할 점은 parseInt 메서드를 사용할때 두번째 인자를 꼭 써주는 습관을 길러주세요.


// 따라서, 암묵적인 변환을 사용하지 말고 명시적으로 변환하여 사용할 것을 권합니다. 
console.log(String(11 + '문자와 결합')) // '11 문자와 결합'
console.log(Boolean(!!'문자열')) // true
console.log(Boolean(!!"")) // false

console.log(parseInt('9.9999',10)); // 9 ,