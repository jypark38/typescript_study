function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

// 함수 타입 자체가 있었으면 어떨까
let combineValues; // any타입 변수
combineValues = add; // 함수 할당
console.log(combineValues(1, 2)); // 작동

/*
위 코드에서 중간에
combineValues = 5 를 추가했다면 
console.log(combineValues(1,2))가 작동하지 않았을거다

이런 일을 방지하려면?
combineValues가 함수를 지니게 된다고 명시하면 된다
*/

let combineValuesTypeFunction: Function;
combineValuesTypeFunction = add;
console.log(combineValuesTypeFunction(10, 10));
combineValuesTypeFunction = 5;

/*
완벽하진 않다.
함수여야 한다고 명시는 했는데 모양이 다른 함수가 재할당 된다면 또 문제가 생길거다

함수가 어떻게 동작해야 할지 정의할 수 있따면 좋겠찌
함수타입 이용
함수타입 : 매개변수와 반환값에 관련된 함수를 설명하는 타입
화살표 함수 표기법이랑 비슷하게 만들어진다.
*/

let combineValuesWithFunctionType: (a: number, b: number) => number;
// 이제 위에서 정의한 함수타입에 맞는 함수만 지정할수 있게 된다.
combineValuesWithFunctionType = add;
combineValuesWithFunctionType = printResult;
// printResult를 할당했더니 타입에러를 표시한다.

// 함수 타입을 사용하여 어떤 유형의 함수인지 설명할 수 있다.
