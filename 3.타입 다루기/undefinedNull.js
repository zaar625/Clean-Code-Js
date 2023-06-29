
console.log(!null) //true
console.log(!!null) //false

console.log(null === false) //false
console.log(null + 123) // 수학적으로는 0 으로 취급합니다. 

//선언했지만 값은 정의되지 않고 할당 x 
let varb;

console.log(typeof varb) //undefined

console.log(undefined + 10) // NaN (not a number)
console.log(!undefined) //true


console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(!undefined === !null) // true

/**
 * 위 내용을 봤듯이 null 과 undefined는 많은 혼란을 줍니다. 
 * 따라서, 코드를 작성할 때에는 null 이나 undefined를 활용한 로직을 작성하는것은 피해야 합니다.
 * 팀원끼리 일을 할 때에는 컨벤션을 정해두고 undefined or null를 사용합니다. (우리는 비어있는 값은 null을 사용하자. 무언가의 컨벤션을 만드는 것이 좋습니다. )
 */
