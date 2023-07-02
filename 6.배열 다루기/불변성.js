/**
 * 불변성
 * 1. 배열을 복사합니다.
 * 2. 새로운 배열을 반환하는 메서드들을 활용합니다.
 * 3. 새로운 배열을 반환하는 메서드는 무엇들이 있을까요?
 */
// 

const originArray = [123,456,789];

const newArray = originArray;

const newArray2 = [...originArray]

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log(newArray);

