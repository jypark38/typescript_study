/*
readonly 제어자

private이나 public도 아니고, 초기화후에 변경되어서도 안 되는 특정 필드
ex) id : 이런건 바뀌면 안되는거다
타입스크립트에만 있다.
특정 프로퍼티가 초기화되고나면 이후에는 변경되면 안된다는 점을 명확히 하기 위해 안정성을 더해주면서 의도를 명확하게 한다.
객체의 특정 속성에 대해 대체로 필수적으로 적용된다.

코드를 직접 쓰니까 의도치 않은 일이 생기지 않을수 있지만 명확히 해주는게 좋다
가독성면에서 좋다

메서드는 생상자 함수의 프로토타입에 추가된다.
*/

class Department{
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }


    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployees(employee: string){
        this.id = 'd2'
        // 읽기 전용인 프로퍼티를 변경하려는 시도라서 오류가 난다.
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting4 = new Department('1','accounting')