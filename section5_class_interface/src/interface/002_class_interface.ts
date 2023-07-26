/*
왜 인터페이스를 씀?

그냥 사용자 정의 타입을 추가해도 똑같지 않을까?

인터페이스를 타입으로 바꾸더라도 똑같이 동작하긴 할거다
그럼 왜 인터페이스를 쓸까

-> 인터페이스와 사용자 정의 타입은 완전히 같진 않다.
종종 서로 바꿔가면서 쓰는 것도 가능하다

차이점
1. 인터페이스는 객체의 구조를 설명하기 위해서만 사용한다
    객체의 구조를 설명할때 타입을 사용할 수도 있지만, 유니온 타입 같은걸 저장할 수도 있다.
    타입은 유연한것 같지만, 인터페이스가 더 깔끔할 수 있다.
    인터페이스로 정의하는것은, 객체라는 것을 명시하는 행위다.

    실제로 객체 타입을 정의할 때, 사용자 정의 타입보다는 인터페이스를 더 자주 사용하는 경우가 흔합니다. 
    사용자 정의 타입으로 할 수 있는 모든 작업들은 클래스에서 인터페이스를 구현해서 할 수 있다.

    인터페이스를 자주 사용하는 이유는 클래스가 인터페이스를 준수해야 하는 약속처럼 사용할 수 있어서다.
*/

type PersonType = {
    name: string;
    age: number;

    greet(phrase: string): void;
}

interface PersonInterface {
    name: string;
    age: number;

    greet(phrase: string): void;
}

interface Greetable {
    name: string;

    greet(phrase: string): void;
}

let user1: Greetable;
// user1 = {
//    name: 'Max',
//    age : 30,
//    greet(phrase: string): void {
//        console.log(phrase + this.name)
//    }
// }

// 만약 user1이 Greetable 인터페이스를 따르게 해보면, 오류가 날거다.
// user1에는 더 많은 요소가 있으니까..

// 인터페이스를 사용하여 여러 클래스끼리 공유할 수 있다.
// 이 인터페이스를 준수하는 모든 클래스가 name과 greet 메서드를 가져야 하는거다.
// 클래스 이름 뒤에 implements 를 붙이고 준수할 인터페이스들을 적으면 된다.

/*
이렇게 하면, 인터페이스를 확장하여 사용할 수 있게 된다.
인터페이스는 서로 다른 클래스끼리 특성을 공유하기 위해 사용된다.

인터페이스 내에 구현이나 값을 입력하는게 아니라 구조와 클래스가 가져야할 특성을 입력해야 한다.

(추상클래스랑 비슷함)
추상클래스와의 차이
    인터페이스는 구현 세부 사항이 없다
    추상클래스는 오버라이드 해야하는 부분, 구체적인 구현 부분을 혼합한다.
*/


class PersonClass implements Greetable {
    age = 30;
    constructor(public name:string){}

    greet(phrase: string): void {
        console.log(phrase + this.name)
    }
}

// new 연산자로 생성
user1 = new PersonClass('Max')

user1.greet('Hi I am ')