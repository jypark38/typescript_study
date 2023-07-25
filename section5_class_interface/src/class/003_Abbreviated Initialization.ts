/*
필드를 선언하고 생성자에 입력할 값을 얻은 다음 그 값을 생성자를 통해 필드에 저장한다.

근데 대부분 모든 프로퍼티나 필드가, 생성자에서 초기화되는 클래스가 많이 사용된다.

클래스 필드를 정의하고, 반복해서 생성자 매개변수에도 적어주고, 초기화 하는 과정이 일어난다.
약식초기화를 통해 필드 정의를 제거할 수 있다.

접근 제어자를 생성자 매개변수 앞에 추가해주면 된다
이렇게 하면 생성자 매개변수에서 프로퍼티 이름을 정함과 동시에 필드를 정의하면서, 동시에 값도 받아 저장하는 기능을 하게된다.

필드를 정의하고, constructor 에서 매개변수를 만들고, 내부적으로 값을 전달하는 행위를 한번에 처리하게 됨

이 과정은 일종의 축약 표현이다.
*/

class Department{
    // private id: string
    // private name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }


    describe(this: Department) {
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

const accounting = new Department('1','accounting')