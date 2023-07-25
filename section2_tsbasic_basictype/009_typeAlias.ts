function CombineWithLiteralResultType(
    input1: number | string, 
    input2: number | string, 
    resultType: 'as-number' | 'as-text'){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number'){
        result = +input1 + +input2;
    } else{
        result = input1.toString() + input2.toString()
    }
}

  // 위 코드에서 유니언 타입을 반복하는건 번거로운 일이다
  // 저 유니언 타입을 저장할 수 있는 새로운 타입을 만들면 좋겠지?
  // 이걸 타입알리어스(타입별칭)라고 한다.

  // 아래처럼 유니언타입을 타입 변수에 넣고 사용하면 유용할 수 있다.
  // 유니언 타입을 쓰는 대신 아래 Combinable 타입을 참조하게 하면 된다.
  // 재사용 가능한 타입을 선언한거다.
type Combinable = number | string;
type TypeDescriptor = 'as-number' | 'as-text'

function CombineWithTypeAlias(
    input1: Combinable, 
    input2: Combinable, 
    resultType: TypeDescriptor){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number'){
        result = +input1 + +input2;
    } else{
        result = input1.toString() + input2.toString()
    }
}

  // 타입 알리어스는 유용함
  // 복잡한 타입 정의를 원하는 자신만의 타입, 자신만의 타입 이름으로 인코딩할 수 있다.
  // 그리고 필요하면 사용할 수 있다.

  // 타입 알리어스를 사용하면 타입을 직접 생성할 수 있따.
  // 복잡할 수 있는 객체 타입에도 이런 알리어스를 붙일 수 있다.

type User = {
    name: string; 
    age: number;
}
const u1: User = {name:'Max', age: 30}

  // 이렇게 하면 불필요한 반복을 피하고 타입을 관리할 수 있다.

function greet(user: {name: string; age: number}){
    console.log(user.name)
}
function isOlder(user: {name: string; age: number}, checkAge:number){
    return checkAge > user.age
}

  // 위 처럼 돼있는걸 단순화 할 수 있음

function greetTypeAlias(user: User){
    console.log(user.name)
}
function isOlderTypeAlias(user: User, checkAge:number){
    return checkAge > user.age
}