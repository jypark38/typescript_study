/*
상속하는 방법 : extends

상위클래스로부터 상속받으면 하위 클래스의 인스턴스도 상위클래스의 메서드 같은걸 쓸수 있따.

오버라이드도 할 수 있따.
ex) describe를 AccountingDepartment에선 다르게 동작하게 만들수 있따.

우리는 IT 부서에서 describe 메서드를 오버라이드할 수도 있지만, 때로는 메서드를 오버라이드하는 옵션을 제공하고 싶지 않을 수도 있습니다. 
왜냐하면 해당 메서드는 이미 존재하기 때문입니다.

대신 특정 클래스를 사용하여 작업하거나, 그 특정 클래스를 확장시키는 개발자들이 특정 메서드를 구현하거나 오버라이드하도록 해야하는 경우가 있다.
그런 경우는, 기본 클래스를 기반으로 모든 클래스에서 특정 메서드를 사용할 수 있는지 확인하고 싶지만
동시에 정확한 구현이 특정 버전에 따라 달라진다는 것을 알고 있는 경우다.

그렇다면, 일반적인 메소드를 제공할 수 없지만 해당 메소드가 존재해야 한다고 강제하고 싶을 때, 이러한 방법이 있습니다. 
그러나 상속받는 클래스들은 자체적인 구현을 제공해야 합니다. 
왜냐하면 기본 구현을 제공할 수 없기 때문입니다. 
이러한 메소드는 기반 클래스에서 제공되지 않으며, 하위 클래스에서만 구현해야 하는 경우가 있습니다.

이런 경우, 빈 메서드를 기본 클래스에 입력하고, 이 기본 클래스 기반의 모든 클래스에 이 메서드를 추가하고 오버라이드하게 해야한다.

이런 작업은 abstract 키워드를 추가해서 구현한다.

abstract를 추가하면 추상 클래스에서만 사용할 수 있따고 에러가 날 수 있다.
그래서 메서드 앞에 abstract가 있는 메서드가 존재하는 클래스 앞에는 abstract를 추가해야 한다.

그 뒤에 추상메서드로 지정된 메서드는 세미콜론 앞에 중괄호 대신 콜론을넣고 반환 타입을 정해주면 된다.

그래서 이 메서드의 형태와 구조가 어떤지만 정의하고 있고 그 외에는 아무것도 정의하지 않은거다.

그리고 ITDepartment가 상속된 추상 멤버 describe를 구현하지 않는다고 에러가 나온다.
그래서 해당 메서드를 넣어줘야 한다.
이 메서드는 어떤 클래스로든 기본 클래스를 기반으로 구현되긴 해야하는거다.

이렇게 기본 클래스를 기반으로 하는, 서로 다른 클래스에서 같은 메서드를 각각의 방식으로 구현했다.

추상클래스 : 상위 클래스를 기반으로 하는 모든 클래스가 일부 공통 메서드나 속성을 공유하려할 때 유용하다

추상 클래스(Abstract)에서는 추상 속성(Abstract properties)을 가질 수 있습니다. 
동시에 추상 클래스에서는 구체적인 값을 제공하지 않아도 되며, 구체적인 구현과 기본 클래스를 제공하지 않고, 
대신 상속하는 클래스에서 모든 중요한 추상 클래스를 구현해야 합니다.

abstract 키워드로 표기된 클래스들은 자체적으로 인스턴스화 할 수 없다.

추상 클래스는 기본적으로 다른 클래스들이 상속 받을 수 있도록 존재하는 클래스입니다. 
상속받는 클래스들은 이 추상 클래스를 기반으로 생성될 수 있으며, 상속받는 클래스는 반드시 "describe" 메서드와 같이 구체적인 구현을 제공해야 합니다. 
이렇게 추상 클래스는 인스턴스화할 수 없고, 상속을 통해 하위 클래스에서만 구현이 가능합니다.
 */
abstract class OriginDepartment{
    static fiscalYear = 2020;

    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        console.log(OriginDepartment.fiscalYear)
    }

    static createEmployee(name: string){
        return {name: name};
    }

    abstract describe(this: OriginDepartment): void;

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

    describe() {
        console.log('IT Department - ID: ' + this.id)
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

    /*
    오버라이드한 describe 메서드에서 Id를 부를거면, 상위 클래스에서 private으로 돼있는걸
    protected로 바꾸자.
     */
    describe() {
        console.log('Accounting Department ID' + this.id)
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

accounting.describe()