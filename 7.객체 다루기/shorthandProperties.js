//아래 코드는 shorthand-properties가 사용되지 않은 사례 입니다. 즉,  shorthand-properties는 축약형이라고 생각하시면 됩니다.
//concise method

const firstName = 'poco';
const lastName = 'Lee';

const person = {
    firstName: 'poco',
    lastName:'Lee',
    getFullName : function() {
        return this.firstName + ' ' + this.lastName;
    }
}

// 위 코드를 축약형으로 바꾸자면, 

const person2 = {
    firstName,
    lastName,
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person2)
