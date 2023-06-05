//computed-property-name


function ReactComponent(){

    const [state, setState] = useState({
        id:'',
        password:''
    }) 
// 아래 괄호([])로 된 부분이  computed-property-name 입니다.
// 속성에는 계산된 값도 넣을 수 있습니다. 즉, [e.target.name] 이 부분이 계산되어 값이 속성으로 들어간 케이스 입니다. 표현식을 넣을 수 있다는 말이 겠죠.
    const handleChange = (e) => {
        //해당 함수는 이벤트 객체를 받을 수 있습니다. input 마다 이 이벤트객체가 트리거가 됩니다. 
        setState({
            [e.target.name]: e.target.value,
        })
    }

    return (
        <React.Fragment>
            <input value={state.id} onChange={handleChange} name="name"/>
            <input value={state.password} onChange={handleChange} name='password'/>
        </React.Fragment>
    )
}


// case_02 리덕스

const noop = createAction("INCREMENT");

const reducer = handleActions({
    [noop]:(state, action) => ({
        counter:state.counter + action.payload,
    }),
},
{counter: 0}
);

// case_03 

const funcName01 = 'func01';
const funcName02 = 'func02';
const funcName03 = 'func03';

const obj = {
    [funcName01](){
        console.log('func01');
    },
    [funcName02](){
        console.log('func02');
    },
    [funcName03](){
        console.log('func03');
    },
};

for(let i = 0; i < 3; i ++) {
    console.log(obj['func' + i]())
}

