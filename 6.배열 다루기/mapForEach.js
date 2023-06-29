// map vs forEach
// 반환이 있느냐 없느냐 차이입니다.
// 화살표 함수와 선언형 함수의 차이를 알아봐야겠습니다.
const prices = ['1000', '2000', '3000'];

const newPricesForEach = prices.forEach((price) => price + '원'); // 반환값 : undefined
const newPriceMap = prices.map((price) => price + '원'); //[ '1000원', '2000원', '3000원' ]

//그렇다면, map을 쓰지 왜 forEach를 사용할까요? forEach의 경우 외부 메서드를 이용할 때 많이 사용하고, map의 경우 새로운 배열을 응용해야할 때 사용합니다.
//forEach 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다. 실행을 한다는 것에 주의하세요.
//성능이 중요한 경우에는, forEach / filter / map / reduce 대신 for문을 사용하는 것도 좋은 방법이다.

