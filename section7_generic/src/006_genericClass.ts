class DataStorage {
  private data = [];

  addItem(item) {
    this.data.push(item);
  }

  removeItem(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
    // 이거 왜 스프레드 문법?
  }
}

// 에러가 많이 난당
// 1. Storage 예약어 -> DataStorage 로 변경
// 2. data의 종류와, item의 타입을 지정하지 않았다
// 제네릭 클래스로 바꿀거다.

class DataStorageGeneric<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorageGeneric<string>();
// 제네릭 타입에 string으로 지정!
// 숫자를 넣으려 하면 에러가 발생할거다
// textStorage.addItem(10);
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// 제네릭 클래스를 왜 만들까??
// 타입스크립트에 추가적인 정보를 직접 입력하게 해서 유연하게 하려고?

// 지금 구현된 클래스에는 문제가 있다
const objStorage = new DataStorageGeneric<object>();
objStorage.addItem({ name: "Max" });
objStorage.addItem({ name: "Manu" });

objStorage.removeItem({ name: "Max" });
console.log(objStorage.getItems());
// 삭제가 동작하지 않는다
// 자바스크립트의 객체는 참조 타입이라서 이런 일이 발생한다.
// 삭제하는 로직을 바꿔야 한다.
// 객체는 참조타입이라 원시값을 비교하는 IndexOf 는 제대로 작동하지 않아서
// removeItem이 마지막 요소를 지울거다 (-1)

class DataStorageAdvanced<T> {
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
// 객체에 대해 삭제가 제대로 동작하게 하고 싶으면 객체를 저장한 변수를 전달하는 것

const objStorage2 = new DataStorageAdvanced<object>();
const maxObj = { name: "Max" };
objStorage.addItem(maxObj);
objStorage.addItem({ name: "Manu" });

objStorage.removeItem(maxObj);
console.log(objStorage.getItems());

// 다른 방법으론 extends 를 활용해서 제네릭의 타입을 원시타입으로만 제한시키는거다
// <T extends string | number | boolean>

// -> 원시타입하고만 작동하는 클래스를 만드는게 더 좋은 방안일 수 있따.

// 특정 메서드에 다른 제네릭타입이 필요하다면, 클래스 메서드에는 새로운 제네릭 타입을 이용해볼 수도 있다.
