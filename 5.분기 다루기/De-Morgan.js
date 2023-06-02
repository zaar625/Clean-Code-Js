// 드모르간 법칙
if(!(A || B)) {}
if(!A && !B) {}



const isValidUser = true;
const isValidToken = true;

if(isValidToken && isValidUser){
    console.log('로그인 성공')
}

//만약 기획단에서 로그인 실패도 만들어야 하는 상황이라면 어떻게 해야할까요?

if(!(isValidToken && isValidUser)){
    console.log('로그인 실패')
}
//위 코드를 드모르간 법칙을 이용하여 만들어 봅시다.
if(!isValidToken || !isValidUser) {
    console.log('로그인 실패')
}