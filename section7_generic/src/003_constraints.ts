
function merge<T, U>(objA: T, objB: U){
    return {...objA,...objB}
}

const mergedObj = merge({name:'Max', hobbies: ['Sports']},{age:30});
console.log(mergedObj.age);

const mergedObj2 = merge({name:'Max', hobbies: ['Sports']},30);
// 만약 objB를 number형으로 바꾼다면?
mergedObj2.age;
// 오류 난다.
// 그냥 오류가 나는것도 아니고, 30이 처리된 결과를 뱉는것도 아니다.
// 30이 객체에 없을거다.
// 이렇게 되는 이유는 30이 객체가 아니라서 그렇다.

// U와 T가 어떤 객체인지는 상관 없어도 일단은 항상 객체라는것은 신경 써줘야한다.
// 어떤 타입이어야 하는지는 입력하지 않았따.
// 그래서 T와 U에 타입에 제약을 둬서 제네릭타입으로 지정하려 한다.
// 제네릭 타입의 경우, 타입에 대한 특정 제약 조건을 설정할 수 있다.
// 제한하고나 하는 타입에 extends를 입력하자

function mergeWithConstraints<T extends object,U extends object>(objA: T, objB: U){
    return {...objA,...objB}
}
// T가 어던 구조를 가지든 아무튼 객체여야 한다는 의미가 된다.
// 그래서 함수를 수정해서 확인해보면 숫자를 넣은 부분이 에러가 발생할거다.
const mergedObj3 = mergeWithConstraints({name:'Max', hobbies: ['Sports']},30);
const mergedObj4 = mergeWithConstraints({name:'Max', hobbies: ['Sports']},{age:30});
// 제약 조건에는, 객체가 아니더라도, string, 직접 만든타입 등 아무거나 둘수 있따.