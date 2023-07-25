// Unknown

let unknownInput: unknown;

// any와는 다르다.
// 사용자가 뭘 입력할지 알 수 없기 때문에 unknown 이다 (숫자일지 문자열일지)
// 에러 발생 없이 어떤값이든 저장할 수 있다.
unknownInput = 5;
unknownInput = 'string';

// any 타입으로도 명시적으로 지정할 수 있다.
// 동작은 다르다

/*
다른 변수가 있고, unknown 타입 변수에 있는 값을 전달해보자.
unknown은 string에 할당할 수 없다는 에러가 발생한다.

왜냐면, unknown이라 어떤 값이든 전달될 수 있기 때문이다.
*/
let StringfromUnknownInput: string;
StringfromUnknownInput = unknownInput;

//근데 any로 바꾸면 에러가 사라진다
let anyInput: any;
StringfromUnknownInput = anyInput;
// any는 타입스크립트에서 타입체크를 수행하지 않게 하기 때문이다.
// unknown은 Any보다 더 제한적이다.
// unknown을 사용한다면 현재 저장된 타입을 확인해야 문자열을 원하는 변수에 할당할 수 있다.
// unknown을 사용해서 다른 곳에 전달하고 싶으면 추가적인 런타입 타입체크가 필요하다
// 어떤 타입의 값이 전달될지 알수 없는데, 타입에 따라 어떤 작업을 수행할지는 개발자가 알고 있음
// 그래서 추가적인 검사를 해서 어떤 작업을 수행할지 명시해서 할 수 없는 작업을 알 수 있도록 해준다는 점에서 any보다 낫다.
// 근데 어떤 타입인지 미리 알 수 있다면 다른 타입으로 명시하는게 나을거다.
if(typeof unknownInput==='string'){
    StringfromUnknownInput = unknownInput;
}