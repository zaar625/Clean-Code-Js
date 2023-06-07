/**
 * HTML에 접근하는 Javascript 코드 추상화
 */

const loader = () => {
    const el = document.createElement('div');
    el.setAttribute('class',"looading d-flex justify-center mt-3");

    const el2 = document.createElement('div');
    el2.setAttribute("class", "relative spinner-container");

    const el3 = document.createElement('div');
    el3.setAttribute("class", "material spinner");
}

el.append(el2);
el2.append(el3);


//위 코드를 추상화해봅시다.

//1. dom을 먼저 생성
const createLoader = () => {
    const el = document.createElement('div');
    const el2 = document.createElement('div');
    const el3 = document.createElement('div');

    return {el, el2, el3}
}

const createLoaderStyle =({el, el2, el3}) => {
    el.setAttribute('class',"looading d-flex justify-center mt-3");
    el2.setAttribute("class", "relative spinner-container");
    el3.setAttribute("class", "material spinner");

    return {
        newEl:el1, newEl2:el2, newEl3:el3
    }
}

const loader2 = () => {
    const {el, el2, el3} = createLoader();
    const {newEl, newEl2, newEl3} = createLoaderStyle({el,el2,el3})

    newEl.append(newEl2);
    newEl2.append(newEl3);

    return newEl;
}

// case _ 02 modal을 만드는 코드를 봐 봅시다.

// 수정 전
const element = document.querySelector('#modal')

element.style.backgroundColor ="black"
element.classList.add('--open')
element.classList.remove('--close')

// 수정 후

const modal = () => {
    return document.querySelector('#modal');
}

const changeColor = (element) => {
    element.style.backgroundColor ="black"
}

const openModal = (element) => {
    element.classList.add('--open')
}

const closeModal = (element) => {
    element.classList.add('--close')
}

openModal(modal);
changeColor(modal);
closeModal(modal);