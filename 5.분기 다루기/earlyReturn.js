// Early Return을 적절하게 사용합니다.

/**
 * 아래 로직을 간단히 설명하자면, 
 * 1. 로그인 여부 확인
 * 2. 토큰 존재 여부 확인
 * 3. 기가입 유저 확인
 */

function loginService(isLogin, user) {
    if(!isLogin){
        if(checkToken()){
            if(!user.nickName){
                return registerUser(user); //회원가입
            } else {
                refreshToken();
            }
            return '로그인 성공';
        }
    } else {
        throw new Error('No Token');
    }
}

//위 코드를 리팩토링을 해보겠습니다. (개발자가 편하게 사고하면서 읽기 편하도록. 이부분이 매우 중요합니다.)
function login(){
    refreshToken();

    return '로그인 성공'
}

function loginService(isLogin, user) {
    // Ealrly return
    if(isLogin){
        return
    }

    if(!checkToken()){
        throw new Error('No Token');
    }

    if(!user.nickName) {
        return registerUser(user);
    }

    login(); // 함수를 위임함으로써 이러한 작업을 추상화라고 합니다.
}

// 예시를 하나 더 봅시다. _ early return을 사용할 경우 뎁스가 줄어드는 효과도 있어 가독성이 높아집니다. 
// 아래 코드는 condition에 너무 의존성이 강합니다.
function todayFeeling(condition, weather, isJob){
    if(condition === 'GOOD'){
        study();
        game();
        youTube();

        if(weather === 'GOOD'){
            workOut();
            wash();
        }

        if(isJob === 'GOOD'){
            workingHard();
            ealryBed();
        }
    }
}

