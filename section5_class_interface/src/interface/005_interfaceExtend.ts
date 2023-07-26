/*
인터페이스의 상속을 구현해보자.
인터페이스를 분리하여 작성한 뒤 클래스가 둘을 따르도록 하게 하면 정상적으로 작동된다.

혹은, 만약 greetable에 name이 항상 필요하다는 것을 알고 잇따면 greetable가 named 인터페이스를 확장시킨 형태라고 보고
Greetable 을 따르는 클래스가 항상 name도 가지도록 인터페이스를 만들 수 있다.

확장된 인터페이스는 greet 메서드를 갖도록 요구하는데, Named 인터페이스의 내용을 요구하진 않는 것처럼 보인다.
근데 Named를 확장했기 때문에 실제로는 요구하는 형태로 동작한다.

왜 나눠야 할까?

애플리케이션을 작업할 때, 어던 객체에는 name만 필요하고 greet는 필요없을 수 있고
어떤 객체는 둘 다 필요할 수도 있다.
이런 상황엔 나눠지는게 낫다.

여러 인터페이스를 하나로 병합할 수 있도록, 둘 이상을 확장시킬수도 있다.

클래스 상속과 인터페이스 implementation의 차이
- 클래스 상속은 여러 클래스로부터 상속받을 수 없다
- 인터페이스는 여러개에 종속될 수 있다.
*/

interface Named {
    readonly name: string;
}

interface Greetable {
    greet(phrase: string): void;
}

interface ExtendNamed extends Named{
    greet(phrase: string): void;
}

// class PersonClass implements Greetable, Named {
class PersonClass implements ExtendNamed {
    name: string
    age = 30;
    constructor(n:string){
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase + this.name)
    }
}

let user1: ExtendNamed;

user1 = new PersonClass('Lee');
