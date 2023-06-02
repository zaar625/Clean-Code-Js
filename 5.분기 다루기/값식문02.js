/**
 * 아래 로직은 좋은 않은 예입니다. 즉시함수를 통해 for문도 가능하다는 것을 알려드리기 위해 작성되었습니다. 
 */
function ReactComponent(){
    return (
        <tbody>
            {
                (()=>{
                    const rows = [];

                    for (let i = 0; i < objectRows.length; i ++){
                        rows.push(<ObjectRows key={i} data={objectRows[i]}/>)
                    }
                    return rows;
                })()
            }
            {/* 위 코드를 고차함수를 통해 아래와 같이 간단하게 변경해보겠습니다. */}
            {
                objectRows.map((obj, i)=> <ObjectRows key={i} data={objectRows[i]}/>)
            }
        </tbody>
    )
}

//하나 더 살펴 보겠습니다. 
function ReactComponent2(){
    return (
        <div>
            {
                (()=>{
                    if(conditionOne) return <span>One</span>
                    if(conditionTwo) return <span>Tow</span>
                    else conditionOne;
                    return <span>Three</span>
                })()
            }
            {/* 위 코드를 변경 후 */}
            {conditionOne && <span>One</span>}
            {conditionTwo && <span>Two</span>}
            {!conditionTwo &&<span>Three</span>}
        </div>
    )
}