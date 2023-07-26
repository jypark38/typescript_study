/*
인터페이스 : 객체의 구조를 설명한다.

인터페이스는 함수 타입을 대체하여 함수 구조를 정의하는데도 사용할 수 있다.

함수타입은 사용자 정의 타입이나 타입 키워드로 정의할 수 있다.

인터페이스는 이 사용자 정의 타입의 대안으로 사용될 수 있다

함수도 객체니까 인터페이스로 함수 타입을 만들 수 있다.

앞선 예제에서 greet 부분과 비슷한데, 이름이 붙지 않는다는 차이가 있다.

사용자 정의 타입의 대안이다.
*/

type AddFn = (a:number, b: number) => number;

let add: AddFn;

add = (n1:number,n2:number) => {
    return n1+n2;
};

interface InterfaceAddFn {
    (a: number, b: number): number
}

let add2: InterfaceAddFn;

add2 = (n1:number,n2:number) => {
    return n1+n2;
};