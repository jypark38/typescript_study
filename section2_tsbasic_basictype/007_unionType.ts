// combine : 숫자와 문자열 모두 포함시켜서 더하기 연산 하려고 한다.
// 반환은 숫자일수도 있고 문자열일수도 있따.
function combine(input1: number, input2: number) {
  const result = input1 + input2;
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNamesError = combine("Max", "Anna");
// Error: 문자열이아니라 숫자여야 한다.

// 하고싶은건 문자열 연결도 되고, 숫자 연산도 되는 combine 함수를 작성하는것
// 즉, 숫자나 문자열 중 하나를 사용해도 된다고 유니언 타입으로 알려주는 방법이다.

function combineWithUnion(input1: number | string, input2: number | string) {
  const result = input1 + input2;
  return result;
}
// 그냥 파이프 기호로 타입 여러개를 지정만 하면 안된다
// 그냥 쓰면 "더하기 연산자는 string|number 타입에 적용할 수 없다"는 에러가 나타난다
// 유니언 타입을 이해만 하고 유니언 타입 내에 뭐가 있는지는 분석하지 못하기 때문이다

function fixCombineWithUnion(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// 위와 같이 고칠수 있을듯 하다
console.log(fixCombineWithUnion(30, 26));
console.log(fixCombineWithUnion("Max", "Anna"));
/*
  런타임에서 수행하는 타입검사는 유니언 타입을 사용하게 된다면 종종 필요하다고 한다.
  유니언 타입을 사용하면 코드에 적용한 매개변수를 보다 유연하게 사용할 수 있다고 한다.
  그래서 타입에 따라 함수 내에서 다른 로직을 적용할 수 있어서 함수가 여러 유형의 값으로 작동할 수 있다.
  타입에 따라 조금씩 달라지니까 유니언 타입으로 작업할 때 종종 런타입 타입 체크가 필요한 경우도 있고
  프로그램에 따라 런타임 타입 체크를 수행하지 않고도 유니언 타입을 사용할 수 있는 경우도 있다.
  */
