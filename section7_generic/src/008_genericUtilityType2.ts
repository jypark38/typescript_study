//////////////
// ReadOnly //
//////////////

const names = ["Max", "Anna"];
// 위 배열은 타입스크립트가 문자열 배열이라고 추론해준다.
names.push("Manu");
// 작동한다

// 배열을 잠궈보고 싶다면?
const readOnlyNames: Readonly<string[]> = ["Max", "Anna"];
readOnlyNames.push("Manu");
readOnlyNames.pop();
// 배열의 타입을 읽기전용으로 바꿔버렸다.
// 그래서 뭔가 추가하거나 빼려고 하면 에러로 지적한다

// 객체에도 쓸수 있다.
// 이런 유틸리티타입들은 타입스크립트에만 있으니까 다른언어로 컴파일할 수 없다.
// 그러나 컴파일 단계에서 코드를 엄격하게 작성하고 확인단계를 추가하거나 특정 확인 단계를 생략할 수 잇게 해준다?

// 첨부된 문서를 통해 유틸리티 타입 목록을 볼 수 있는데 유용하니까 잘 보고 써보자
// 무언가에 제약조건을 설정해야 하거나 제약 조건을 부분적으로 해제할 때 사용할 수 잇으며,
// 여러 기능들이 있다

// https://www.typescriptlang.org/docs/handbook/utility-types.html
