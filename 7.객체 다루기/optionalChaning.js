// optional(선택적) chaning(?.)

const obj = {
    name: 'value'
}

console.log(obj?.name) // value 

// 옵셔널체이닝 연산자는 서버에서 값을 가져올 때 많이 사용하는 문법입니다.

const response = {
    data : {
        userList:[
            {name:'jang', info:{
                tel:'010',
                email:'lee@naver.com'
            }}
        ]
    }
}

// response.data.userList[0].info.email

function getUserEmailByIndex(userIndex){
    return response.data.userList[userIndex].info.email
}
getUserEmailByIndex(0);

/**
 * /만약 서버에서 reponse 내에 userList가 없을 경우 어떻게 될까요? 앱이 팅길 것입니다.
 * 따라서 프론트에서 런타임에 해당 문제가 발생할 수 있는 상황을 방지하기 위해 아래와 같이 쓸 수 있습니다.
 */

function getUserEmailByIndex(userIndex){
    if(response.data.userList){
        return response.data.userList[userIndex].info.email
    }
    
    return '알 수 없는 에러가 발생했습니다.'
}

// 옵셔널로 해봅시다. 
function getUserEmailByIndex(userIndex){
    if(response?.data?.userList){
        return response.data.userList[userIndex].info.email
    }
    
    return '알 수 없는 에러가 발생했습니다.'
}