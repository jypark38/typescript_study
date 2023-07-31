# typescript_study

## 모르겠는거 메모

### intersection 연산의 동작 원리

```ts
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
```

Universal : number

ElevatedEmployee : Admin과 Employee의 결합된 형태

원시타입끼리는 교집합인데 왜 객체끼리는 합쳐버림?

<hr>

### union 관련

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnKnownEmployee = Employee | Admin;

function printEmployeeInformationWithTypeguards(emp: UnKnownEmployee) {
  console.log("Name " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInformationWithTypeguards({ name: "a", privileges: ["1"], startDate: new Date() });
```

왜 오류로 지적하지 않는걸까?
