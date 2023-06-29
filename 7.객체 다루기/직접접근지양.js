/**
 * 직접 접급 지양하기
 * 현재 아래 코드에서 두 함수 모두 model 객체에 직접 접근을 하고 있습니다. 이는 문제가 됩니다.
 * redux 설명에서 "예측가능한" 이 부분을 잘 봐주세요. 즉, 자바스크립트를 사용할 때 예측 가능한 코드를 작성해서 동작이 예측 가능한 앱을 만드는 것입니다.
 */

const model = {
    isLogin: false,
    isValidToken:false
} 

function login() {
    model.isLogin = true;
    model.isValidToken = true;
}

function logout() {
    model.isLogin= false;
    model.isValidToken = false;
}

someElement.addEventListener('click', login);

//위와 같이 모델에 직접 접근을 하지말고, 아래처럼 함수를 위임을 하고 추상화 하여 접근하도록 합니다. 모델이 어디서 어떻게 변화하는지 파악이 가능합니다.

const model2 = {
    isLogin :false,
    isValidToken:false,
}

function setLogin(bool){
    model2.isLogin = bool;
}

function setValidToken(bool){
    model2.isValidToken = bool;
}

function login2(){
    setLogin(true);
    setValidToken(true);
}

someElement.addEventListener('click', login2);