// 타입가드 : 특성 프로퍼티나 메서드를 이용하기 전에 걔네가 존재하는지 확인하거나
// 타입을 사용하기 전에 이 타입으로 어떤 작업을 수행할 수 있는지를 확인하는 개념이나 방식
// 객체의 경우 instanceOf 나 in
// 다른타입의 경우 typeof

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 이는 유니온(Union) 타입으로, 문자열 또는 숫자를 포함합니다. 
// 유니온 타입은 유연성을 제공하지만 종종 런타임에서 어떤 정확한 타입을 얻어야 할지 알아야 
// 할 필요가 있기 때문에 타입 가드(Type Guards)가 도움이 됩니다.

function add(a: Combinable, b: Combinable){
    return a+b
}
// 작동하지 않는다.
// 추가적인 타입 검사를 해야하기 떄문이다.
function add2(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string' ){
        return a.toString()+b.toString()
    }
    return a+b;
}
// 이렇게 하면, 조건문 외에는 a와 b가 Number인것을 안다.
// 저 조건문을 타입가드라고 한다.
// 유니온 타입이 지닌 유연성을 활용할 수 있게 해주고, 런타임에 코드가 정확하게 작동하게 해준다.
// 여러 타입으로 작동하는 함수를 사용하는 경우가 많으니까 이런 경우 유니언 타입이 적당하다.
// 근데 값으로 어떤 작업을 수행하는지는 타입에 따라 다르다.
// 위 조건문은 typeof 를 사용하는 타입가드이고, 다른 타입가드도 있다.

type Admin = {
    name: string;
    privileges: string[];
};
    
type Employee = {
    name: string;
    startDate: Date;
};

type UnKnownEmployee = Employee | Admin;
// UnknownEmployee 는 둘중 하나가 된다

function printEmployeeInformation(emp: UnKnownEmployee){
    console.log('Name ' + emp.name);
    console.log('Privileges ' + emp.privileges)
}
// 그냥 privilege에 접근하려 하니 문제가 있따.
// UnknownEmployee 가 Admin만 가질 수 있는 privileges가 없는 그냥 Employee 일수도 있기 때문이다.
// 타입 가드를 사용해야 하는데 typeof로는 할수 없다
// typeof emp 는 그냥 object라고만 알려준다 -> 도움이 안됨 (사용자 정의 타입으로 알려주지 않는다.)

function printEmployeeInformationWithTypeguards(emp: UnKnownEmployee){
    console.log('Name ' + emp.name);
    if ('privileges' in emp){
        console.log('Privileges ' + emp.privileges)
    }
    if ('startDate' in emp){
        console.log('Start Date ' + emp.startDate)
    }
}
// emp 안에 프로퍼티가 있는지라도 확인하고 싶은데 접근이 막힌다.
// 이때 in 키워드를 사용할 수 있다. 프로퍼티가 객체에 있는지 없는지 알려준다

printEmployeeInformationWithTypeguards({name:'a',privileges:['1'],startDate:new Date()})
// 이거 왜됨?

// 클래스를 사용하여 작업하눈 경우 다른 유형의 타입 가드도 가능하다.
// in
// instanceof

class Car {
    drive(){
        console.log('Driving...')
    }
}

class Truck {
    drive(){
        console.log('Driving Truck')
    }

    loadCargo(amount: number){
        console.log('Loading cargo..' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicleUseIn(vehicle : Vehicle){
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(100001);
    }
}

useVehicleUseIn(v1)
useVehicleUseIn(v2);

// in 을 사용하는 방법은 오타의 위험이 있다.
// instanceOf는 클래스나 생성자함수의 인스턴스인지 확인해주는 타입가드
function useVehicleUseInstanceOf(vehicle : Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(100001);
    }
}
// 자바스크립트에서 클래스는 생성자 함수로 컴파일 될 수 있따.
// 그래서 Truck 생성자 함수를 기반으로 vehicle이 생성되었는지 알려준다.

// 인터페이스를 사용하면 instanceof를 사용할 수 없는데, 인터페이스는 자바스크립트 코드랑 비교할 수 없어서
// 런타입시에 인터페이스를 사용할 수 없기 때문이다.

// 자바스크립트가 클래스와 생성자함수가 있으니까 instanceOf 를 활용한 타입가드가 가능하다.

