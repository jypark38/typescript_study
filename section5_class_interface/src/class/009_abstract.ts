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

const it = new ITDepartment('d1',['Max'])

it.addEmployees('Max')
it.addEmployees('Manu')

it.describe();
it.name = 'NEW NAME'
it.printEmployeeInfomation();

console.log(it)

const accounting = new AccountingDepartment('d2',[]);

accounting.mostRecentReport = 'Year End Report'

accounting.addReport('something went wrong...')

console.log(accounting.mostRecentReport);

accounting.addEmployees('Max')
accounting.addEmployees('Manu')

accounting.printReports()

accounting.printEmployeeInfomation();