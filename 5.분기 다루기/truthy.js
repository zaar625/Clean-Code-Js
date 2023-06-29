//https://developer.mozilla.org/ko/docs/Glossary/Truthy
//https://developer.mozilla.org/ko/docs/Glossary/Falsy

if('string'.length > 0){}

if(!isNaN(10)){}

// if(boolean === true){}

//case_02
function printName(name){
    if(name === undefined || name === null){
        return '사람이 없네요.';
    }

    return '안녕하세요' + name + '님';
}

//위 코드를 좀 더 간단하게 작성해 봅시다. null, undefined는 falsy 값 입니다. 

function printName(name){
    if(!name){
        return '사람이 없네요';
    }
    return '안녕하세요' + name + '님';
}
