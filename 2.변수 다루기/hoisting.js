var global = 0;

function outer(){
    var global;

    console.log(global); //undefined

    global = 5;

    function inner(){
        var global = 10;
        console.log(global); //10
    }

    inner();

    global = 1;

    console.log(global); //1
}

outer();

//함수도 호이스팅이 됩니다. 아래 코드를 살펴 봅시다. 
//Q 식별자와 함수 네임이 같으면 자동으로 할당되는 것인가보다.
var sum;

console.log(typeof sum); // function

function sum(){
    return 1 + 2;
}

//위와 같은 상황에서 벗어나려면, 할당도 함께 해줍니다. "변수선언 > 할당 > 초기화 완료 > 정확한 분리"