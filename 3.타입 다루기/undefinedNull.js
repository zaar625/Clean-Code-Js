console.log(!null)
console.log(!!null)

console.log(null === false)
console.log(null + 123) // 수학적으로는 0 으로 취급합니다. 

// 선언했지만 값은 정의되지 않고 할당 x 
let varb;

console.log(typeof varb) //undefined

console.log(undefined + 10) // NaN (not a number)
console.log(!undefined) //true

//위 내용을 봤듯이 null 과 undefined는 많은 혼란을 줍니다. 따라서, 코드를 작성할 때에는 null 이나 undefined를 활용한 로직을 작성하는것은 피해야 합니다.
// 팀원끼리 일을 할 때에는 컨벤션을 정해두고 undefined or null를 사용합니다.