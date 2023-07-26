/*
인터페이스 내에 읽기전용 제어자도 추가할 수 있따.
근데 public, private 은 안된다

프로퍼티가 한번만 설정돼야하고, 그 이후에는 읽기 전용으로 설정해서 객체가 만들어지면 변경할 수 없도록 하는거다.
Type에도 쓸 수 있다

객체를 사용해서 작업을 수행할거면 인터페이스가 일반적이다.

이미 인터페이스에서 readonly로 설정했다면 클래스에서 따로 지정해주지 않아도 괜찮다.
바꾸려고 하면 에러가 날거다.

컴파일도 안될거다.

readonly를 추가하지 않아도, 클래스는 Greetable을 구현한다는 것을 인지하고 readonly 임을 자동으로 추론한다.
 */

interface Greetable {
    readonly name: string;

    greet(phrase: string): void;
}

class PersonClass implements Greetable {
    name: string
    age = 30;
    constructor(n:string){
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase + this.name)
    }
}

let user1: Greetable;

user1 = new PersonClass('Lee');
user1.name = 'Park'