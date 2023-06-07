// Arrow Function
// 아 뭔말이야 ...

const user = {
    name: 'Poco',
    getName:() => {
        return this.name;
    },
    newFriends: () => {
        //call, apply, bind도 마찬가지입니다.
        const newFriendList = Array.from(arguments);

        return this.name + newFriendList;
    }
}

console.log(user.getName()); //undefined

/**
 * arrow func을 사용할때, this를 주의해서 사용해야합니다.
 * 화살표함수를 메서드에 사용할 경우, this를 알 수 없습니다. 화살표함수의 경우 렉시컬 스코프를 가지게 됩니다. 결국 this는 호출된 객체를 바라보는 것이 아니라 그 상위 객체를 
 * 바라보게 됩니다.
 * 또한 arguments 객체도 사용할 수 없습니다.
 */

//case_03 화살표함수는 생성자 함수를 만들 수 없습니다.

const Person = (name, city) => {
    this.name = name;
    this.city = city;
};

const person = new Person('poco', 'korea');


//case04 

class Parent {
    parentMethod() {
        console.log('parentMethod');
    }

    parentMethodArrow:() => {
        console.log('parentMethodArrow')
    }

    overrideMethod = () => {
        return 'Parent';
    }
}

class Child extends Parent {
    childMethiod() {
        super.parentMethod();
    }

    overrideMethod(){
        return 'Child'
    }
}

new Child().childMethiod();
new Child().overrideMethod(); //error


//case05 제네레이터 안에는 일반함수를 작성해야합니다.
function* gen() {
    yield function (){
        
    }
}