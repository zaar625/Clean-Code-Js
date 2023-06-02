//명시적인 연산자 사용
//적절한 괄호를 넣어서 우선순위를 표현하도록 합니다. 즉, 예측가능하고 디버깅 하기 쉬운!

let number ;

// 증감 연산자도 보기가 어렵습니다. 되도록 증감연산자는 쓰지말고, 풀어서 작성하세요. 
function increment(number){
    number--;
    --number;

    number = number + 1;
}

function increment(number){
    number++;
    ++number;
}

if(isLogin && token || user){} // 이 코드보다는 
if((isLogin && token) || user){}
