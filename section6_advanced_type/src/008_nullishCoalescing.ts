// 널 병합연산 (?? 연산자)
// null 데이터 처리에 도움을 준다

// 어떤 데이터나 입력값이 Null인지 undefined인지, 유효한 데이터인지 알 수 없는 경우를 생각해보자.
const userInput = null;
// 하드코딩하면 타입스크립트가 알거다
// 근데 dom api 같은거 이용해서 가져오면 확실하게 알진 못할거임

// null 같은 값이면 폴백값으로 처리하려고 함
const storedData = userInput || 'DEFAULT'
// 이렇게도 할 수 있따
// 문제점 : null이나 undefined가 아닌 빈 문자열이여도 falsy로 처리되어 기본 폴백값이 적용된다.

// 앞에 있는 값이 null이나 undefined 일때만 처리하고 싶다면 nullish 병합 연산을 써보자
const storedData2 = userInput ?? 'DEFAULT'
// 앞에 값이 null이나 undefined라면 폴백을 사용할 것이다.