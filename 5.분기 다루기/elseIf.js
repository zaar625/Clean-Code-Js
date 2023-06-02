// else if & else 피하기.
// else if 가 계속해서 쓸 수밖에 없다면, switch 문을 고려합니다.

const x = 1;

if(x >= 0) {
    console.log('x는 0과 같거나 크다');
} else if(x > 0){
    console.log('x는 0보다 크다');
} else {
    console.log('Else')
}

// 위 코드를 아래처럼 바꿔봅시다. 

if(x >= 0) {
    console.log('x는 0과 같거나 크다');
} else {
    if(x > 0){
        console.log('x는 0보다 크다');
    } 
}

//아니면,

if(x >= 0) {
    console.log('x는 0과 같거나 크다');
} 

if(x > 0){
    console.log('x는 0보다 크다');
} 
