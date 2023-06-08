// 공백도 코드 작성의 일부입니다.

const loadingElements = () => {
    /**
     * 1. 선언문끼리 모아둡니다.
     * 2. 로직, 문끼리 모아둡니다.
     * 3. 반환
     * 순으로 공백을 띄웁니다.
     */
    const el = document.createElement("div");
    el.setAttribute("class","loading-1");
    const el2 = document.createElement("div");
    el.setAttribute("class","loading-2");
    const el3 = document.createElement("div");
    el.setAttribute("class","loading-3");

    el.append(el2);
    el2.append(el3);

    return el;
    
}

//Eslint : padding-line-between-statements를 사용하길 추천합니다.