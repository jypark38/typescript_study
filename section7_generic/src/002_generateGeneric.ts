// 제네릭 클래스와 함수를 만드는 방법

// 함수
// 기능 : 두 객체를 병합하고 새 객체를 반환하는 함수
function merge(objA: object, objB: object){
    return Object.assign(objA,objB)
}

console.log(merge({name:'Max'},{age:30}))
// 작동함

// 저장하려할때 문제가 발생할거다.
const mergedObj = merge({name:'Max'},{age:30});
mergedObj.name
mergedObj.age

// 위에 보이는것처럼 프로퍼티가 있다는걸 알고 있는데도 접근할 수 없다.
// 타입스크립트가 모르기때문이다.

// 타입스크립트가 객체를 반환하는 것으로 추론하기 때문
// 추가적인 정보가 들어가있진 않다.

// 형변환을 이용해서 name이랑 age 키를 지닌 객체라고 타입스크립트에게 알려줄 수 있다.
const mergedObj2 = merge({name:'Max'},{age:30}) as {name:string, age:number};
mergedObj2.name
mergedObj2.age
// 번거롭다.

// 이럴때 제네릭으로 바꿀 수 있따.
// 일반적으로 <> 안에 T, U 식별자를 넣는다.
// 첫번째 타입은 보통 T
// 두번째 타입은 그 다음 알파벳 U
function mergeWithGeneric<T, U>(objA: T, objB: U){
    return {...objA,...objB}
}
// 위 처럼 하면 함수가 T와 U의 인터섹션을 반환한다고 추론한다고 한다.
const mergedObj3 = mergeWithGeneric({name:'Max'},{age:30});
// 두 매개변수가 서로 다른 타입이 될 수 있다고 타입스크립트에 알려준다.
// 그리고 결과가 두 타입의 인터섹션이라고 인식할 수 있게 한다.
console.log(mergedObj3.age);
// 작동한다.

// 정확한 객체가 무엇인지 신경쓰지 않고 어떤 타입인지 지정하지 않고 싶을 때.
// 들어갈 타입이 고정적이지 않고 함수를 호출할 때 동적일 수 있도록 설정되었다.