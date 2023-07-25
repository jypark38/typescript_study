/*
정적 프로퍼티 & 정적 메서드
ES6 이상

클래스의 인스턴스에서 접근할 수 없는 속성과 메서드를 클래스에 추가한다.
인스턴스를 따로 만들지 않고도 클래스에 직접 접근하는거다.
ex) Math.PI : Math 클래스에 있는 정적 프로퍼티 PI에 접근함
ex2) Math.pow() : Math 클래스에 있는 정적 메서드 pow
Math의 인스턴스에서 접근하지 않는 메서드와 속성들
-> new Math 로 먼저 인스턴스를 만들지 않아도 되는거임
얘네는 Math 클래스 자체로 직접 접근하는 프로퍼티와 메서드들이다.

Department에 employees를 생성하는 메서드를 만들거임

메서드나 프로퍼티 앞에 Static을 붙이자

주의점 : 클래스에 추가할 때 정적이 아닌 부분들에서는 접근할 수 없다. 
예를 들어 생성자부분에서 this키워드로 fiscalYear에 접근하려 하면 작동하지 않을거다.

this.fiscalYear 의 this는 생성될 인스턴스를 참조하기 때문이다.

클래스 내에서 정적 속성이나 정적 메서드에 접근하고 싶으면, 클래스 이름을 통해 참조해야한다.
 */

class OriginDepartment{

    static fiscalYear = 2020;

    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        console.log(OriginDepartment.fiscalYear)
    }

    static createEmployee(name: string){
        return {name: name};
    }

    describe(this: OriginDepartment) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployees(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const employee1 = OriginDepartment.createEmployee('Max');
console.log(employee1);
console.log(OriginDepartment.fiscalYear)