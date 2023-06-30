// obj lookup Table : key와 value가 나열된 

function getUserType(type){
    if(type === 'ADMIN'){
        return '관리자'
    } else if (type === 'INSTRUCTOR'){
        return '강사'
    } else if(type === "STUDENT"){
        return "수강생";
    }else {
        return '해당없음'
    }
}

// 위 코드가 확장될 경우 관리가 어려우므로, switch 문을 이용하여 작성합니다. 

function getUserType(type) {
    switch (key) {
        case "ADMIN":
            return '관리자'
        case "INSTRUCTOR":
            return "감사"
    }
}

// 위 코드를 lookup table 형식으로 다시 작성해 보겠습니다. 
function getUserType(type) {
    // 자바스크립트를 사용할때 주로 스네이크케이스로 상수를 표현하면 건들지마세요. 라는 개발자 사이에 규약입니다. 
    const USER_TYPE = {
        ADMIN:'관리자',
        INSTRUCTOR:'강사',
        STUDENT:'수강생',
        UNDEFINED:'해당 없음'
    };
    //키가 없으면 undefined가 나타납니다. 
    return USER_TYPE[type] ?? '해당없음';
}

console.log(getUserType('STUDENT')); // 수강생

//아래처럼 작성도 가능합니다. (가장 베스트는 3번째입니다.)
function getUserType(type) {
    return ({
        ADMIN:'관리자',
        INSTRUCTOR:'강사',
        STUDENT:'수강생',
        UNDEFINED:'해당 없음'
    }[type] ?? '해당 없음'
    )
}