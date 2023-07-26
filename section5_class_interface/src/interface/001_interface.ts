/*
인터페이스 : 객체의 구조를 설명한다.

클래스랑 다르게 인터페이스는 청사진으로 사용하지 않고 사용자 정의 타입으로 사용한다.

아래 인터페이스로 뭘 할 수 있을까
인터 페이스의 구조를 가져야 하는 객체의 타입을 확인하는데 쓸 수 있다.
 */

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,

    greet(phrase: string) {
        console.log(phrase + this.name)
    }
};

user1.greet('Hi I am ')