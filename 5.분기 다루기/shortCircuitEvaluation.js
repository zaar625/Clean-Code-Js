// 단축평가


// AND
console.log(true && true && '도달 o'); //도달
console.log(true && false && '도달 X'); //false

// OR
console.log(false || false || '도달 o'); //도달
console.log(true || true || '도달 x'); //true


// 아래 함수의 return case를 살펴보세요. 
function fetchData(){
    // case01
    // if(state.data) {
    //     return state.data;
    // } else {
    //     return "Fetching... ";
    // }

    //case02
    // return state.data ? state.data : "Fetching...";

    return state.data || "Fetching ...";
}

// case_02
function favoriteDog(someDog){
    let favoriteDog;

    if(someDog){
        favoriteDog = dog;
    } else {
        favoriteDog = '냐옹';
    }

    return favoriteDog + '입니다';
}

favoriteDog(); // 인자값을 안줄 경우 냐옹 출력
favoriteDog('포메') // 강아지 입니다.

/**
 * 위 코드를 아래처럼 단축평가를 이용하여 return 할 수 있습니다.
 * 자바스크립에서 어떠한 값도 들어오지 않은 인자값은 undefined로 들어옵니다.
 */

function favoriteDog(someDog) {
    return (someDog || '냐옹') + '입니다.'
}


//case_03 if문으로 중첩되어 있는 아래 코드를 고쳐봅시다.
function getActiveUserName(user, isLogin){
    if(isLogin) {
        if(user){
            if(user.name) {
                return user.name
            } else {
                return '이름없음'
            }
        }
    }
}

//factoring
function getActiveName(user, isLogin){
    if(isLogin && user){
        return user.name || '이름없음'
    }
}