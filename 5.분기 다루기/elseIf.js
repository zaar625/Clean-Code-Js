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

//아니면, 아래와 같이 사용합니다.
if(x >= 0) {
    console.log('x는 0과 같거나 크다');
} 

if(x > 0){
    console.log('x는 0보다 크다');
} 

//if 문을 사용할 때 else가 필요없는 경우는 굳이 else를 사용할 필요가 없습니다.

//함수의 경우 한번 리턴을 겪게 되면 함수가 종료 됩니다.
function getActiveUserName(user) {
    if(user.name) {
        return user.name;
    }
    return '이름없음';
}

//만약 아래와 같이 로직을 할 경우 문제가 생길 여지가 있습니다.
function getActiveUserName(user){
    if(user.name){
        return user.name;
    } else {
        return '이름없음'
    }
}

//위 함수에서 만약 하는일이 2가지 라고 한다면, (age가 20 미만시 특수 함수 실행하기를 원한다면)
//아래처럼 사용할 경우 20세 미만의 유저가 들어왔을 때 report 함수만 실행하고, 해당 함수가 종료됩니다.
function getHelloCustomer(user){
    if(user.age < 20){
        report(user);
    } else {
        return '안녕하세요.'
    }
}

// 만약 return '안녕하세요'도 사용하고 싶다면,
function getHelloCustomer(user){
    if(user.age < 20){
        report(user);
    }
    return '안녕하세요.'
}