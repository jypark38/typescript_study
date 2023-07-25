class Department{
    //class field
    // 클래스를 기반으로 만들 객체를 입력하고 마지막에 키가 갖게될 값의 타입을 정의한다.
    // 디폴트를 전달할 수 있지만 그럴 필욘 없다
    name: string;

    // 생성자 메서드
    constructor(n: string) {
        this.name = n;
    }

    //메서드 추가
    describe() {
        // this 키워드를 사용하지 않으면, 전역에서 찾는다
        console.log('Department:' + this.name)
    }

}

const accounting = new Department('Accounting');
// new 키워드로 클래스를 실행하는 시점에 생성자가 호출된다.
// 인자로 string을 취하는 형태다.

console.log(accounting)
accounting.describe();

/*
클래스와 생성자 함수는 객체의 일반적인 구조를 정의하는데 사용할 수 있는 특성을 지니고 있고, 메서드도 추가할 수 있다.
생성자 메서드 : 인스턴스화 할때 호출됨
 */

const accountingCopy = { describe: accounting.describe}
accountingCopy.describe();
// This가 가리키는 값이 바꼈다

class Department2{
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    // Department2 클래스를 타입으로 갖는 this 키워드를 넘김
    // this 추가, 값을 전달하지 않고도 describe 호출 가능, ts는 this가 무엇으로 참조되어야 하는지 인식
    // Department2를 참조하게 된다.
    describe(this: Department2) {
        console.log('Department2:' + this.name)
    }
}

const accounting2 = new Department2('Acc')

const accountingCopy2 = { describe: accounting2.describe}
accountingCopy2.describe();
// 위 오류를 해결하려고 name을 추가해보면 정상 작동하게 될거다

const accountingCopy3 = { name:'DUMMY', describe: accounting2.describe}
accountingCopy3.describe();