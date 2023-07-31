// 보통 제네릭과 유니언 타입의 차이에서 혼란을 많이 겪는다.

// 왜 혼동하게 될까?

// 다음 두 코드를 비교해보자
// 같은 동작을 할 것으로 예상이 된다

class DataStorageGeneric<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

class DataStorageUnion {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
    // 이거 왜 스프레드 문법?
  }
}
/* 이 방식엔 어떤 문제가 있을까?
  1. 동일한 결과를 얻을 수 있는 것처럼 보이는데, 실제로는 완전 다른 결과가 나타난다.
    Union을 이용한 방식은, 배열에 저장하는 요소의 타입이 Union이 된다.
    그래서 숫자의 배열, 문자열의 배열 이런식의 구분이 아니라 혼합된 배열이다.
    그럼 애초에 private data: string[] | number[] | boolean[] = [];
    로 작성한다면?
    addItem에서 문제가 발생한다. -> 지정되는 배열에 따라, 추가 가능한 데이터 타입이 달라져서 오류로 지적한다.
    예를 들어서 문자열 배열로 설정되면, 숫자는 추가할 수 없게 된다는 오류가 발생한다. 
    유니온타입이 문제라는거다
    데이터 타입을 하나 정해놓고 그거만 써야한다고 입력하는게 아니라 메서드를 호출할때마다 
    유니언에 지정된 타입들 중 아무거나 자유롭게 사용할 수 있다고 명시한거임

  2. 제네릭의 경우, 저장하려는 데이터 타입을 하나 선택하게 한거다.
*/

// 유니언타입은 함수를 호출할 때마다 타입들 중 하나로 호출할 수 있는 함수가 필요한 경우에 유용하다
// 즉, 모든 메서드나 함수 호출마다 다른 타입을 지정하고 싶은 경우에 유용하다

// 제네릭타입은 제네릭 타입을 사용하면, 함수나 클래스를 선언할 때 특정한 데이터 유형을 고정하지 않고,
// 대신 일반적인 타입 매개변수를 사용하여 추상화된 코드를 작성할 수 있습니다.
// 이렇게 하면 동일한 로직을 다양한 데이터 유형에 적용할 수 있고, 코드의 재사용성이 증가합니다.
// 그리고 한번 전달된 타입으로 고정된다

// 다양한 데이터 유형에 대한 재사용성: 함수나 클래스를 작성할 때, 특정한 데이터 유형에 국한되지 않고 여러 유형에서 동작하도록 하고 싶을 때 제네릭을 사용합니다.
// 예를 들어, 컨테이너(리스트, 스택, 큐 등)를 구현할 때, 제네릭을 사용하여 다양한 유형의 데이터를 저장할 수 있는 컨테이너를 만들 수 있습니다.
