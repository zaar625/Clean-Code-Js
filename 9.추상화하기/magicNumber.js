// magic number

// 해당 숫자의 의미가 한번에 파악이 될까요?
setTimeout(()=>{
    scrollToTop();
}, 3 * 60 * 1000)

// 스네이크 케이스 + 대문자 => 조금더 주의해야 하는 값이구나 라고 생각할 수 있습니다.
// until.ts or constants.ts 에서 따로 관리도 가능합니다.
const DELAY_MS = 3 * 60 * 1000


//numeric Operator : 1000000 이렇게 쓸 경우, 해당 값이 얼마인지 타 개발자는 확인해야 합니다. 아래와 같이 사용할 경우, 가독성이 좋아집니다. 
const PRICE = {
    MIN : 1_000_000,//1백만원
    MAX: 100_000_000, //1억
}



getRandomPrice(0 ,10);//Min, Max 유추는 가능합니다. 
getRandomPrice(PRICE.MIN, PRICE.MAX);//이렇게 사용할 경우 좀 더 타인이 좀 더 정확하게 파악할 수 있습니다. 


//1과 5에 대한 정책이 바뀐다면? 해당 값이 100군데 있다면 하드코딩의 경우 바꾸기 힘들 것입니다.
function isValidName(name) {
    return carName.length >= 1 && carName.length <= 5;
}

const CAR_NAME_LEN = {
    MIN: 1,
    MAX: 5,
} //이와 같이 따로 값들을 관리하도록 합니다. 