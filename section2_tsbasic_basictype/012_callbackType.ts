function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
}

function addAndHandle(n1: number, n2: number, cb:(num: number) => void){
    const result = n1 + n2;
    const a = cb(result);
}

// 콜백도 거의 비슷한 방식으로 동작한다.

addAndHandle(10, 20, (result) => {
    console.log(result)
});

// 함수 내에 콜백함수를 전달하면 타입스크립트는 result 가 number가 될거라고 추론할 수 있다.
// 콜백함수 매개변수에 타입을 지정하지 않아도 number 임을 알 수 있는건 위에 함수 정의에서 콜백함수 매개변수의 타입을 지정했기 때문이다.

addAndHandle(10, 20, (result) => {
    console.log(result)
    return result;
});

// return result를 입력하면 콜백이 반환한다. 반환 타입을 Void로 했는데도 이런 동작을 한다.
// 버그가 아니다.
// callback 타입에 void를 지정해서 기본적으로 반환할 수 있는 모든 결과를 무시하기 때문이다.
// 그래서 addAndHandle 에서 콜백 함수가 return 타입을 void로 지정해서, 아무 작업도 수행하지 않을 것이라고 지정한거다.
// 반환은 할 수 있다.
// callback 이 반환하는 값으로 아무 작업도 수행하지 않는다고 정의되어 있기 때문이다.
// 아무것도 반환하지 않는 콜백을 전달하도록 요구하는게 아니다.
// 반환할 수 있는 값이 사용되지 않도록 요구한다.

// 매개변수는 엄격하게 체크해야한다.
// 반환타입은 무언가를 리턴하는 것에 대해 그냥 무시할 수 없으니까 void로 명시하는게 좋다.
// 동작은 필요하지만, 반환값이 무시되어야 하는 상황을 허용하기 위해 이런 유연함을 택한것인듯?