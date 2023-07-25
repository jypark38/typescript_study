const number_5 = 5;
/*
리터럴 타입
특정 변수나 매개변수가 아니다
정확한 값을 갖는 타입이다.
호버하면 위 변수의 타입이 5 임을 알수 있따
변하지 않는 상수라서 할당된 값 자체로 타입이 추론된다.
*/

/*
문자열의 경우 특히 유용하게 쓰일 수 있다.
combine 함수가 인풋에 따라 다르게 합쳐지면서도 반환 결과가 어떻게 되어야 할지를 정의할 수 있도록 해서
인풋의 타입이 변환되도록 하려한다.
*/

// 이를 위해 resultType 을 문자열타입으로 매개변수로 추가한다

function CombineWithStringResultType(
  input1: number | string, 
  input2: number | string, 
  resultType: string){
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number'){
    result = input1 + input2;
  } else{
    result = input1.toString() + input2.toString()
  }
  if(resultType === 'as-number'){
    return +result;
  } else{
    return result.toString();
  }
}

const combinedAges = CombineWithStringResultType(30, 26, 'as-number')

const combinedStringAges = CombineWithStringResultType('30', '26', 'as-number') // 3026

const combinedNames = CombineWithStringResultType('Max', 'Anna', 'as-text')


// 다른 로직
function CombineWithStringResultType2(
  input1: number | string, 
  input2: number | string, 
  resultType: string){
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number'){
    result = +input1 + +input2;
  } else{
    result = input1.toString() + input2.toString()
  }
}

const combinedAges2 = CombineWithStringResultType2(30, 26, 'as-number')

const combinedStringAges2 = CombineWithStringResultType2('30', '26', 'as-number') // 56

const combinedNames2 = CombineWithStringResultType2('Max', 'Anna', 'as-text')

// 참고: 숫자로 변환될 수 없는 무언가를 숫자로 바꾸려 하면 NaN이 될거다

/*
본격적으로 리터럴 타입을 알아보자
resultType 을 문자열 타입으로 지정해 줬다
-> 단점 : 개발자가 값을 기억해야 함 ㅎ

enum으로 해결할 수도 있땅
근데 값이 두개니까 리터럴 타입의 사용을 고려할 수 있다.

문자열이 아닌 as-number이나 as-text가 되어야 한다고 할 수 있을 것임
아래 처럼 정의하면 resultType이 허용되는 문자열은 'as-number', 'as-text' 두 값 뿐이다.
*/

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

// 타입에 어긋나게 쓰면 알려준당
CombineWithLiteralResultType(1,2,'ab')