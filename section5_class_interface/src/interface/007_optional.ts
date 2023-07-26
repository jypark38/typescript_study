/*
선택적 속성을 정의할 수 있다.

outputName이 문자열이어야 하는지의 여부를 선태적으로 하고싶다면 물음표를 추가하면 된다.
타입스크립트는, 해당 프로퍼티가 이 인터페이스를 구현하는 클래스 내에 있을 수 있지마느 반드시 그런건 아니라고 인식하게 된다.

선택사항이 되어서, outputName이 없더라도 오류가 나지 않는다.

name도 선택적으로 구현해보겠음
(n에 대한 값을 얻지 못할수도 있으니까.)

클래스에도 물음표를 추가할 수 있따.

매개변수에 물음표를 추가하면 필수적으로 받지 않아도 되게 된다.
*/

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

// class PersonClass implements Greetable, Named {
class PersonClass implements Greetable {
    name?: string
    age = 30;
    constructor(n?:string){
        if(n){
            this.name = n;
        }
    }

    greet(phrase: string): void {
        if(this.name){
            console.log(phrase + this.name)
        } else{
            console.log('Hi!');
        }
    }
}

let user1: Greetable;

user1 = new PersonClass();
user1.greet('Hi')