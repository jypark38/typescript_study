class Department{
    name: string;
    employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department:' + this.name)
    }

    addEmployees(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting');

accounting.addEmployees('Max');
accounting.addEmployees('Manu');

accounting.describe()
accounting.printEmployeeInfomation()

accounting.employees[2] = 'Anna'
// 이 코드가 작동은 하는데 이런건 피해야한다.
// 규모가 큰 팀에서 일하면서 employee를 추가하는데, 사람마다 방식이 제각각이면 혼동이 있을것이다.
// 그래서 통일시키는게 좋다.
// 아무튼 클래스 외부에서 employees에 접근하는 것은 허용하지 말아야 한다.
// employees 에 private 키워드를 추가해서 private 필드로 바꾸자

class DepartmentWithPrivateEmpl{
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: DepartmentWithPrivateEmpl) {
        console.log('Department:' + this.name)
    }

    addEmployees(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accountingWithprivate = new DepartmentWithPrivateEmpl('Accounting');

accountingWithprivate.addEmployees('Max');
accountingWithprivate.addEmployees('Manu');

accountingWithprivate.describe()
accountingWithprivate.printEmployeeInfomation()

accountingWithprivate.employees[2] = 'Anna'
// 외부에서 접근하는건 막혔다
// employee를 추가하려면 이제 메서드로만 접근해야 한다.
// private 키워드로 선언된 필드라 그렇다.
// 기본 키워드는 public 이다.

// 자바스크립트로 컴파일 하면 문제없이 컴파일 되긴 한다.
// 최신에 도입된 키워드라 그러는데, 컴파일 수행 버전에 따라 인식하지 못할 수 있다.
