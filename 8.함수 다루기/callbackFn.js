// Callback Function
/**
 * 비동기를 제어하는 기능 이외에 함수의 실행권을 다른함수에 위임하는 것이기도 합니다.
 */

someElement.addEventListener('click', function(e){
    console.log('클릭이 되었습니다.')
});

DOM.prototype.addEventListener = function (eventType, cbFunc){
    if(eventType === 'click') {
        const clickEventObject = {
            target:{},
        };

        cbFunc(clickEventObject);
    }
}

// isConfirm 값에 따라 confirm 함수를 분리된 상태입니다.
function register(){
    const isConfirm = confirm(
        '회원가입에 성공했습니다.'
    );

    if(isConfirm){
        redirectUserInfoPage();
    }
}

function login(){
    const isConfirm = confirm(
        '로그인에 성공했습니다.'
    );

    if(isConfirm){
        redirectUserInfoPage();
    }
}

// 위 코드를 콜백함수를 이용하여 리팩토링을 해보겠습니다.

function conformModal(message, cbFunc){
    const isConfirm = confirm(message);

    if(isConfirm && cbFunc) {
        cbFunc();
    }
}

function register2(){
    conformModal('회원가입에 성공했습니다.' ,redirectUserInfoPage);
}

function login(){
    conformModal('로그인에 성공했습니다.' ,redirectUserInfoPage);
}

