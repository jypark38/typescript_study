// 형변환
// 타입스크립트가 직접 감지하지 못하는 특정 타입의 값을 타입스크립트에 알려준다
// ex) DOM에 있는 무언가

const paragraph = document.querySelector('p');
// const paragraph: HTMLParagraphElement | null
// paragraph임을 추론함

// 타입스크립트는 HTML 파일을 살펴보고 분석하는 행위를 못한다.
// 그래서 그냥 HTML요소라고만 추론한다.
const paragraph2 = document.getElementById('message-output');
// const paragraph2: HTMLElement | null
// 단순한 목적이라면 그냥 쓰면 된다

// 만약 사용자 입력이라면??
const userInputElement = document.getElementById('user-input')!;
// 타입스크립트는 이걸 알수가 없다.
// 그냥 HTML 요소라고만 추론한다

userInputElement.value = 'Hi there'
// 객체가 null일 수 있다는 에러 발생
// 이건 윗줄 마지막에 !를 붙여서 고쳐준다 

// value은 HTMLElement 타입에 존재하지 않는다는 에러가 남아있다.
// 일반적인 HTMLElement가 value를 모두 지원하진 않기 때문이다.

// 결론 : 위에서 선택한 요소가 null이 아니라, HTMLInputElement 타입임을 타입스크립트에게 알려줘야 한다.
// 형변환으로 해결하자

// 형변환 : 두가지 구문으로 구현가능
// 1. 변환하고자 하는 요소 앞이나 타입스크립트에 타입을 알려주고자 하는 위치 앞에 <원하는타입> 추가
const userInputElement2 = <HTMLInputElement>document.getElementById('user-input')!;
userInputElement2.value = 'Hi there'

// 2. 리액트의 jsx와의 충돌을 방지하기 위해 형변환 하고자 하는 타입 다음에 as 키워드 추가
const userInputElement3 = document.getElementById('user-input')! as HTMLInputElement;
userInputElement3.value = 'Hi there'

// 암거나 쓰면 되는데, 혼합해서 쓰진 말자

// 근데, 중요한건 표현식의 반환값이 해당 타입이 되는지 반드시 확인해주어야 한다.
// 지원되지 않는 방식으로 동작하려하면 런타임 에러가 발생하거나 예기치않은 동작이 일어난다.

// !: 느낌표 앞의 표현식을 null로 반환(yield) 하지 않겠다고 인식시킴
// !: 연산자는 컴파일러에게 "변수 x는 값이 무조건 값이 할당되어있으므로 걱정 말고 사용하면 된다."라고 주장합니다

// 위와 같은 형변환에 !가 필요할까?
// null이 반환되지 않음을 보장할 수 있으면 쓰면 된다.

// 근데 null이 반환되지 않을거라고 확신이 안들면 조건문을 쓰자
const userInputElement4 = document.getElementById('user-input');
// 대신 형변환은 조건문 안에 넣어주는게 맞다.
// 형변환을 위에서 쓰게되면, null이 안들어갈거란거를 타입스크립트에게 알려주는것이 됨
// 근데 지금 가정이 null이 반환되지 않는게 확신이 없는 상황이다.
if(userInputElement4){
    (userInputElement4 as HTMLInputElement).value = 'Hi there'
}