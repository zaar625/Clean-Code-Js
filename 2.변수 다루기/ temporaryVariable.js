//아래와 같이 함수 내 임시 변수를 const, let 을 사용할지라도 함수가 커지면 전역처럼 느껴질 수 있습니다.

function getObject(){
    const result ={}; //임시 변수

    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    return result;
}

//위 코드를 아래와 같이 좀 더 명확하게 변경할 수 있습니다. 
function getElements(){
    const result = {
        title : document.querySelector('.title'),
        text : document.querySelector('.text'),
        value :document.querySelector('.value'),
    }

    return result;
}

//위 코드를 더 간단히 할 수 있습니다. 변수를 사용하지 않고 객체를 바로 반환하면 됩니다.

function getElements(){
    return {
        title : document.querySelector('.title'),
        text : document.querySelector('.text'),
        value :document.querySelector('.value'),
    }
}

// 한가지 더 예시를 들어보겠습니다. 아래코드는 유틸함수인데요, 추가적인 스펙이 발생할 경우 (추가적인 요구 사항)

function getDateTime(targetDate){
    let month = targetDate.getMonth();
    let day = targetDate.getDate();
    let hour = targetDate.Hours();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;

    return {
        month, day, hour
    }
}

// 위 코드를 CRUD를 최소화 하며 반환값에 바로 작성해봅니다. 

function getDateTime(targetDate){
    const month = targetDate.getMonth();
    const day = targetDate.getDate();
    const hour = targetDate.Hours();

    return {
        month: month >= 10 ? month : '0' + month, 
        day: day >= 10 ? day : '0' + day, 
        hour: hour >= 10 ? hour : '0' + hour,
    }
}

/**
 * 그리고 추가 스펙이 발생할 경우, 위 함수를 이용하여 작성할 수 있습니다. 
 * 하나의 함수는 명확한 하나의 역할만 하도록 합니다.
 * */ 
function newGetDateTime(){
    const currentDateTime = getDateTime(new Date());

    return {
        month: currentDateTime.month + '분 전',
        day: currentDateTime.day + '분 전',
        hour: currentDateTime.hour + '분 전'
    }
}

// 초급자분들을 아래와 같이 함수(명령형으로 가득한 로직)를 작성하는 경우가 빈번합니다. 예를 들어
function getSomeValue(params){
    let tempVal = '';

    for(let index = 0; index < Array.length; index++){
        temp = array[index];
        temp += array[index];
    }

    if(temp < 0 ){
        tempVal = 'blabla'
    }else if(temp > 0) {
        tempVal += 'blabla'
    }
    
    return temp
}

/**
 * 위 코드는 연산을 하고 최종적으로 temp 값이 무엇인지 return을 합니다. 하지만 계산식이 많아 결과가 예측하기가 어렵습니다. 
 * 따라서 임시변수를 사용하면서, 추가적인 CROUD(값을 수정)를 발생하지 않도록 노력해야 합니다. 
 *  */
