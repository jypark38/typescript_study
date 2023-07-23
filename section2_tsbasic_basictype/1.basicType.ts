function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // 바닐라 자바스크립트로 타입검사 하는 코드
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input");
  // }

  // 자바스크립트 : 동적 타입
  // 타입스크립트 : 정적 타입

  const result = n1 + n2;

  if (showResult) {
    // console.log(phrase + n1 + n2);
    // 이러면 버그가 나타남
    // phrase + n1 + n2 연산에서 모두 문자열로 인식됨
    // 그니까 n1+n2 숫자 연산만 따로 빼서 수행해줘야 올바른 결과가 나타난다.
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
let number1_1 = 5;
let number1_2: number;
number1_2 = 5;
// 7.8
// const number1 = "5";
// '52.8'

const number2 = 2.8;

const printResult = true;

const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// 타입 추론
// 특정 변수나 상수에 어떤 타입을 사용했는지 타입스크립트가 식별한다
// const number1 = 5 의 경우 식별되는 타입은 5라는 숫자다.
// let number1_1 = 5; 의 경우 식별되는 타입은 number다
// 타입을 명시하는 행위는 선언을 하면서 아무것도 할당하지 않는다면 어떤 값을 할당할지 알려주는게 좋다
// 값을 할당 하면 타입추론 기능이 있으니까 굳이 타입을 명시해주지 않는 것이 좋음
// 한번 값을 할당했다면 타입 추론으로 타입이 지정되니까 다른 타입을 재할당 할때 오류로 지적해준다.
