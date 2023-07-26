/*
싱글톤 패턴은 특정 클래스에 대해 정확히 인스턴스 하나만 갖도록 한다.

이 패턴은 정적 메서드나 속성을 사용할 수 없거나 사용하지 않고자 하는 동시에
클래스를 기반으로 정확히 하나의 객체만 가질 수 있도록 할 때 유용하다

ex) AccountingDepartment는 하나로 구현하고 싶은 상황

생성자 앞에 private 키워드를 붙여서 private 생성자로 만든다.
이렇게 하면 외부에서 new를 호출할 수 없게 된다.

정적메서드를 만들어서 인스턴스를 생성하게 한다.
(클래스의 인스턴스가 이미 있는지 확인하고, 없다면 새 인스턴스를 반환하게 한다)
클래스 내부에 private static 프로퍼티로 인스턴스를 구현해놓는다.

유용할수 있긴 하다.
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

class ITDepartment extends OriginDepartment {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends OriginDepartment {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found')
    }

    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    protected constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
    
    static getInstance() {
        // 클래스에 인스턴스가 있는지 없는지 확인
        if(AccountingDepartment.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance;
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

// const accounting = new AccountingDepartment('d2',[]);
const accounting = AccountingDepartment.getInstance()
