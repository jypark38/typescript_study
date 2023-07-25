function add(n1: number, n2: number) {
  return n1 + n2;
}

/*
함수의 반환값의 타입도 중요하다
타입스크립트는 반환 타입도 추론한다
add에 호버해보면 반환타입을 알 수 있따. -> function add(n1: number, n2: number): number

두 입력값이 모두 number 이고 내부 연산을 체크하여 반환 타입을 number로 추론한거다
*/

function addString(n1: number, n2: number) {
  return n1.toString() + n2.toString();
}
// toString 을 추가했더니, 반환타입이 string으로 추론됨을 알 수 있따.

/*
그래서 반환 타입을 지정하고 싶으면, 아래처럼 반환하고자 하는 타입을 명시적으로 할당해주면 된다.
단 추론되는 타입과 동일해야한다. 그렇지 않으면 에러가 날거임
작성한 반환 타입이랑 계산이 안맞아서 그렇다.
*/
function addWithReturnType(n1: number, n2: number): number {
  return n1 + n2;
}

// function addWithReturnType2(n1:number, n2:number):string{
//   return n1+n2
// }

// 타입을 명시적으로 설정할 이유가 굳이 없다면 타입을 설정하는 대신 타입스크립트가 추론하게 하는게 낫다

// 타입스크립트에 생긴 void 타입
function printResult(num: number): void {
  console.log(num);
}
printResult(add(5, 12));
// printResult 함수의 반환이 없어서 void로 추론이 된다.
// console.log랑 같은 기능을 하고 잇는데, console.log는 Undefined를 반환한다.
// 진짜 아무것도 반환하지 않으면 void를 써야한다
// void를 쓰는건 의도적으로 반환문이 없다는걸 의미한다.
// undefined 타입으로 지정한다면, 타입스크립트는 값을 반환하지 않는 반환문이 있다고 추론할거다.

// 반환문은 있지만 반환하지 않는 함수
function printResultReturn_void(num: number): void {
  console.log(num);
  return;
}
printResultReturn_void(17);

// undefined를 반환하는 함수
function printResultReturn_undefined(num: number): undefined {
  console.log(num);
  return;
}
printResultReturn_undefined(18);

// 이건 안댐
// 반환문 없이 undefined 타입으로 지정해버리면 타입스크립트가 추론한 타입과 맞지 않아서 지적당한다.
function printResult_undefined(num: number): undefined {
  console.log(num);
}
