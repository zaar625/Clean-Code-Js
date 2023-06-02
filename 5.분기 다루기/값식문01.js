//this JSX

/** 
 * 메서드의 괄호()는 함수를 호출한다 라는 의미입니다. 
 */
ReactDOM.render(
    <div id='msg'>Hello World!</div>,
    mountNode
)

//Is transformed to this JS:
ReactDOM.render(React.createElement('div', {id:'msg'}, 'Hello World!'), mountNode);


//그렇다면 아래 코드는 가능할까요?
<div id={if (condition) {'msg'}}>Hello World!</div> //보시다시피 에러를 표시합니다. 

React.createElement("div", {id: if(condition){'msg'}}, 'Hello World!') 

/**
 * 즉 문은 값으로 넣을 수 없습니다. 아래는 삼항연산자를 이용하여 표현식을 통해 값으로써 할당되었습니다.
 */
ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode)

/**
 * 아래 코드는 즉시함수(IIFE)를 이용하여, 나타낸 것입니다.
 * { } 괄호 안에는 값과 식만 넣을 수 있습니다. 
 * 즉시 실행함수는 바로 값을 리턴하기 때문에 아래처럼 사용할 수 있습니다.
 * 또한 논리연산자를 통해서 값으로 표현할 수 있습니다.
 */

ReactDOM.render(
    <div>
        <p>
            {(()=>{
                switch(this.state.color){
                    case 'red':
                        return '#FF0000';
                    case 'green':
                        return '#00FF00'
                }
            })()}
        </p>
        <p>{this.state.color || 'white'}</p> 
    </div>
    
)