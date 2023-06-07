/**
 * Rest Parameters
 * 가변인자
 */

// 아래 코드는 가변인자에 용이한 함수입니다. 하지만, 가변인자 + 추가적인 인자를 넣고 싶다면 어떻게 해야할까요?
function sumTotal(){
    // arguments는 배열이 아니라 객체입니다.(유사배열)
    Array.isArray(arguments) //false

    return Array.from(arguments).reduce(
        (acc, curr) => acc + curr,
    );
}

sumTotal(1,2,3,4,5,6)


// rest parameter은 반드시 마지막에 넣어주어야 합니다.

function sumTotal2(initVlaue, bonusValue, ...args){
    Array.isArray(args) //true
    console.log(initVlaue)
    console.log(bonusValue)

    return args.reduce(
        (acc, curr) => acc + curr,
    );
}

sumTotal2(100, 99,  1,2,3,4,5,6)