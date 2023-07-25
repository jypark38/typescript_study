/*
특정 클래스에 대한 더 자세한 정보가 필요할 수 있다.
ex) 부서별 상세 정보 (관리자, 보고서 등등)

상속을 활용하자
*/

class OriginDepartment{
    // private readonly id: string
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
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

// base 클래스가 가진 모든것을 자동으로 가져온다.
// 상속받은 클래스에 고유 생성자를 추가하지 않는한 하위 클래스를 인스턴스화할 때 상위 클래스의 생성자가 자동으로 사용된다.

/*
고유 생성자를 추가한다면, super 키워드를 활용해서 상위 클래스의 생성자를 호출해주는것
그리고 super를 통해 상위 클래스의 생성자로 값을 전달한다.
*/
class ITDepartment extends OriginDepartment {
    // 축약도 가능하다.
    // this로 뭐 할거면 super가먼저 호출돼야 한다는 것을 보여주려고 늘려썼음
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends OriginDepartment {
    // 축약표현 사용
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string){
        this.reports.push(text);
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
accounting.addReport('something went wrong...')
accounting.printReports()