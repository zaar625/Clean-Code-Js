/**
 * 배열 고차 함수
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */

const price = ['2000', '1000', '3000', '5000', '4000'];

function getWonPrice(priceList){
    let temp = [];

    for (let i = 0; i < priceList.length; i ++){
        temp.push(priceList[i] + '원');
    }

    return temp;
}

//case_01에 대한 위 코드를 수정해봅시다. 

function getWonPrice(priceList){
    return priceList.map((price) => price + '원');
}

const result = getWonPrice(price);

//case_02 1000원 초과 리스트만 출력

const suffixWon = (price) => price + '원';
const isOverOneThounsand = (price) => Number(price) > 1000


function getWonPrice(priceList){
    const isOverList = priceList.filter(isOverOneThounsand)

    return isOverList.map(suffixWon);
}

const result2 = getWonPrice(price);