

function countAndDescribe<T>(element: T){
    let descriptionText = 'Got no value';
    if (element.length === 1){
        descriptionText = 'Got 1 element';
    }else if (element.length >1){
        descriptionText = 'Got' + element.length + 'elements';
    }
    return [element, descriptionText];
}
// 위처럼 작성하면 element가 지닌 length가 불명확하다고 한다.

// 그래서 아래처럼 제약을 추가해보자
interface Lengthy {
    length: number;
}
// 반환타입 튜플로 만듬
function countAndDescribeWithConstraints<T extends Lengthy>(element: T): [T,string]{
    let descriptionText = 'Got no value';
    if (element.length === 1){
        descriptionText = 'Got 1 element';
    }else if (element.length >1){
        descriptionText = 'Got' + element.length + 'elements';
    }
    return [element, descriptionText];
}
// 이렇게 수정하면, 반한되는 배열은 문자열이나 Lengthy를 지닌다는걸 알게된다.

console.log(countAndDescribeWithConstraints('Hi there'));

console.log(countAndDescribeWithConstraints(['Sports', 'Cooking']));

console.log(countAndDescribeWithConstraints([]))

console.log(countAndDescribeWithConstraints(1))
// length가 없어서 동작하지 않는다.

// 제네릭을 활용해서, length속성을 지니는 매개변수로 제한했다.
// 그래서 length만 갖는다면 어떤 데이터든 관계없이 모든 타입을 처리할 수 있다.
// 많은 오버로드를 만들 필요도 없고, 긴 유니언 타입을 만들 필요도 없다.
