class OriginDepartment{
    // protected로 바꿔줘서 이제 서브클래스에서 employees 에 접근할 수 있따
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

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


class AccountingDepartment extends OriginDepartment {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    // 하위 클래스에서 상위 클래스의 메서드 오버라이드
    // employees 가 상위 클래스의 private 속성이라 상속받은 클래스에선 접근이 안된다.
    // 접근할 수 있도록 하면서 외부에서 변경 불가능하게 만들고 싶다면?
    // 상위 클래스의 키워드를 protected로 바꿔주면 된다.
    // 확장된 클래스에서도 사용 가능하다는 점이 private과 차이
    addEmployees(name: string) {
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment('d2',[]);

accounting.addReport('something went wrong...')

accounting.addEmployees('Max')

accounting.addEmployees('Manu')

accounting.printReports()

accounting.printEmployeeInfomation();