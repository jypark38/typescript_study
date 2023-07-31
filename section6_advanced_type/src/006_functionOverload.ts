// 함수 오버로드
// 동일한 함수에 대해 여러 함수 시그니처를 정의할 수 있는 기능
// 다양한 매개변수를 지닌 함수를 호출하는 여러 가지 가능한 방법을 사용해서
// 함수 내에서 작업을 수행할 수 있게 해준다.

type Combinable = string | number;

function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string' ){
        return a.toString()+b.toString()
    }
    return a+b;
}
// 숫자를 전달하면 반환 타입은 항상 숫자가 된다
// 문자열을 하나라도 넘기면 문자열로 반환된다.

// 문제점
const result = add(1,5)
// 1,5를 전달하면 result는 Combinable 타입이다. -> 타입스크립트는 result가 문자열인지 숫자인지 모른다.

const result2 = add('Max', ' Schwartz')
// 위 상황도 작동은 하는데 계속 Combinable이 반환된다.
// 그러면 아래처럼 문자열메서드를 사용할수도 없다.
result2.split('')
// 형변환을 사용하면 해결이 되긴 한다.

// 그러나 함수 오버로드를 활용하자.
// 문법은 그냥 아래처럼 똑같은걸 바로 위에 반복해서 써주고, 타입을 입력해준다

function addWithOverload(a: number, b: number): number;
function addWithOverload(a: string, b: string): string;
function addWithOverload(a: number, b: string): string;
function addWithOverload(a: string, b: number): string;
function addWithOverload(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string' ){
        return a.toString()+b.toString()
    }
    return a+b;
}

const result3 = addWithOverload('Max', ' Schwartz')
result3.split('')
// 에러가 사라졌다..