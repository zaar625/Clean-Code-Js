// 배열 메서드 체이닝을 활용해봅시다.
// Q. 고차함수란 뭐지?;;

const price = ['2000', '3000','1000', '1500', '2900'];

function getWonPrice(priceList, orederType){
    let temp = [];

    for(let i = 0; i < priceList.length; i++){
        if(priceList[i] > 1000) {
            temp.push(priceList[i] + '원')
        }
    }

    if(orederType === 'ASCENDING'){
        someAscendingSortFunc(temp);
    }
    if(orederType === 'DESENDING'){
        someDesendingSortFunc(temp);
    }

    return temp;
}

//위 코드를 한번 리팩토링 해보겠습니다.

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
    const isOverList = priceList.filter(isOverOneThousand);
    const sortList = isOverList.sort(ascendingList);
    //만약 추가 요구사항이 있을 경우 sortList 가 점점 증가 할 것으로 예상되어집니다.

    return sortList.map(suffixWon);
}

// 메서드체이닝을 활용하여 변경해봅시다.

function getWonPrice(priceList) {
    return  priceList
        .filter(isOverOneThousand) //filter 원하는 조건에 맞는 배열 리스트 만들기
        .sort(ascendingList) //sort wjdfuf
        .map(suffixWon); // map 배열 요소들을 다시 정리
}

const result3 = getWonPrice(price)