class OriginDepartment{
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

/*
lastReport : Private
메서드내에서 접근 되지만 점으로 표기해서 접근하는건 안된다.

게터로 접근하게 할 수 있따.
게터에서 값을 반환해서 캡슐화 할 수 있따.
공개적으로 적븐 가능하기 때문.

// 중요한건 게터는 메서드로 선언했지만 프로퍼티로 접근해야 한다.

세터는 게터와 비슷하다.
파라미터가 잇냐 없냐의 차이
파라미터에 값을 넘겨주는게 함수처럼 넘기는게 아니라 값 할당처럼 하면 된다.

 */

class AccountingDepartment extends OriginDepartment {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found')
    }

    // 게터랑 똑같이 선언하되, 인자를 받아야 한다.
    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
    addEmployees(name: string) {
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment('d2',[]);

// console.log(accounting.mostRecentReport);
// 중요한건 게터는 메서드로 선언했지만 프로퍼티로 접근해야 한다.
// 윗라인(86)은 런타임에 오류가 나도록 짜여진 코드다.

accounting.mostRecentReport = 'Year End Report'
// 세터도 게터랑 비슷하게 값처럼 접근해야한다.
// 빈문자열은 에러가 나게 짜여저 있따.

accounting.addReport('something went wrong...')

console.log(accounting.mostRecentReport);

accounting.addEmployees('Max')
accounting.addEmployees('Manu')

accounting.printReports()

accounting.printEmployeeInfomation();