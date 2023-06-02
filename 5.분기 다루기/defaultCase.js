// Default Case 고려하기

function sum(x, y) {
    return x + y;
}
// 위 코드처럼 작성하기 보다는 , 아래처럼 디포트 값을 사용합니다.

function sum(x, y) {
    x = x || 1;
    y = y || 1;

    return x + y;
}

sum(100, 200);

//case_02
function createElement(type, height, width) {
    const element = document.createElement(type);

    element.style.height = height || 100; //height 인자값이 없을 경우 100,
    element.style.width = width || 100;

    return element;
}

//case_03 switch

function registerDay(userInputDay) {
    switch (userInputDay){
        case '월요일' : //some code
        case '화요일' : //some code
        case '수요일' : //some code
        case '목요일' : //some code
        case '금요일' : //some code
        default :
            throw Error("입력값이 유효하지 않습니다.")
    }
}
registerDay('월료일'); // 타 개발자가 잘못 입력 했을 경우 고려.

//case_04 JSX문에서 router 기능을 사용할 때 사용합니다. Route의 마지막을 봐주세요.

const Root = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/welcome" component={Welcome}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
)