/*
intersection
*/

// type Admin = {
interface Admin {
    name: string;
    privileges: string[];
};

// type Employee = {
interface Employee {
    name: string;
    startDate: Date;
};

// 위 두개가 합쳐진 타입
// 그냥 직접 다 써서 정의할수도 있다.
// 그러나 & 기호로 합쳐버릴 수 있다.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name:'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

// 두개를 합치는 방법은 두가지가 있다
// 인터섹션 타입은 인터페이스 상속과 관련이 있따
// Type 대신 interface 라고 해도 된다고 한다.
// 그래서 인터섹션 & 을 사용할수도 있고
// 위에서 만든 인터페이스로 새로운 인터페이스를 만들수도 있다.

interface ElevatedEmployeeInterface extends Employee, Admin {}

// 근데 인터섹션 타입이 코드가 더 단순해서 선호된다.

const e2: ElevatedEmployeeInterface = {
    name:'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

// 인터섹션 타입은 객체 타입이랑 같이 사용될 때 유용한데, 다른 타입이랑도 같이 사용할 수는 있따.

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 이렇게 하면, 타입스크립트는 Universal 을 숫자형 타입으로 여긴다
// 이 타입이 유일한 인터섹션 타입이기 때문이다.
// 두 유니언 타입이 교차하는 유니언 타입이 될 수도 있다.

// 인터섹션 연산자는 모든 타입과 사용할 수 있어서 타입들이 교차하도록 구현할 수 있다.