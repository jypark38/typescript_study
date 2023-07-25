// Never
// never는 함수가 반환할 수 있는 타입이다.

function generateError(message: string, code: number){
    throw {message: message, errorCode : code};
}

generateError('an error occured', 500);

// 위 함수는 단순히 void를 반환하는게 아니다.
// 아무것도 반환 안하니까 void를 적어줄 순 있따.
// 위 함수는 Never를 반환하고 반환 값을 만들지 않는다.
const result = generateError('an error occured', 500);
console.log(result)

// 함수가 아무것도 반환하지 않고 기본적으로 스크립트나 스크립트의 일부를 충돌시키거나
// 망가트리기 위한 것임을 명시하는 타입

/*
never 타입은 TypeScript에서 모든 타입의 하위 타입이기 때문에 다른 모든 타입에 할당할 수 있습니다. 
하지만 never 타입은 자기 자신과 다른 어떤 타입에도 할당할 수 없습니다. 
다시 말해, never 타입은 절대로 값을 가질 수 없는 타입이기 때문에 다른 타입과 호환되지 않습니다.

함수가 항상 예외를 던지거나 끝나지 않는 무한 루프일 경우 해당 함수의 반환 타입을 never로 지정합니다.
타입 가드(type guard)에서 더 이상 확장할 수 없는 경우 해당 타입 가드 함수의 반환 타입을 never로 지정합니다.
함수의 반환 타입을 never로 지정하여 함수가 항상 예외를 던지는 경우를 명시적으로 표현할 수 있습니다.
never 타입은 주로 런타임에서의 오류 처리나 불가능한 상황에 대한 명확한 타입 표현을 제공하기 위해 사용되며, 타입 체킹의 완성도를 높이는 데 도움을 줍니다.
*/

