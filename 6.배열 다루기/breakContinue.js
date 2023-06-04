// continue & break


const orders = ['first', 'second', 'third'];

/**
 * orders가 만약 엄청나게 많은 데이터가 있다고 가정해봅시다. 내가 필요한 값은 second까지만 이라고 가정했을때, 
 * 최적화를 하고 싶습니다.
 * 하지만 forEach문 내에서 continue break를 사용할 수 없습니다.
 * 만약 continue나 break를 사용하면서 흐름을 잘 제어 하고 싶다면, for문, for of 문, for in 문을 사용하는 방법도 있습니다. 
 * 또한, every(), some(), find(), fincIndex()는 참/거짓 여부에 따라 반복의 종료 여부를 결정합니다. (공식문서 MDN 꼭 참조합니다.)
 * */ 
orders.forEach(function(order){
    if(order === 'second'){
      
    }

    console.log(oreder)
})