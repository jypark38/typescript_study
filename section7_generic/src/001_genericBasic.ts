// Code goes here!
// 내장제네릭 & 제네릭이란
// 배열 : 제네릭

const names = ["Max", "Manuel"];
// 두 타입이 결합된거라고 볼 수 있다
const names2 = [];
// const names2: never[]

const names3: Array = [];
// interface Array<T>
// 'Array<T>' 제네릭 형식에 1 형식 인수가 필요합니다

// 제네릭 타입은 다른 타입과 연결된다.
// 다른 타입이 어떤 타입이어야 하는지는 크게 상관하지 않는다.

// 객체가 어떤 데이터를 지니게 될지 모르더라도 배열은 그 자체로 타입이고, 배열에 특정 타입의 데이터를 저장할 수 있다.
// 배열 타입은 어떤 타입의 데이터가 저장되든 상관하지 않는다
// 적어도 정보가 저장되는지에 대해서는 확인한다.
const names4: any[] = [];

// <> 안에 배열에 전달되어야 할 타입을 지정한다.
const names5: Array<string> = []; // string[] 와 동일

// 제네릭타입은 타입스크립트에 내장된 타입이고 다른 타입과 연결된다.
// 연결된 타입이 어떤 타입인지 알고 싶다면 타입스크립트가 도움될 수 있따.
// 위에 저장하는 데이터가 문자열임을 알고 있다면 배열 요소에 저장된 요소를 문자열로 작업할 수 있음.
// 타입스크립트가 배열이 문자열을 지닌단걸 알고 있으니까.
names5[0].split(" ");

// 배열은 제네릭의 한가지 예시
// 다른 함수로는 프로미스가 있음

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
// const promise: Promise<unknown>
// 프로미스가 결국에는 뭔가 resolve 시키기 때문.
// unknown : 뭘 resolve시키는건지 제대로 모르기 때문

// 그래도 프로미스가 문자열을 반환할 거라고 입력해준다면?
const promise2: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
// 메인타입: 프로미스 -> 근데 다른 타입이랑 같이 쓰임

// 이게 왜 유용함?
// 그냥 Promise 타입만 입력하면 허용되지 않는다.
const promise3: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});
// <any>로 지정하고 then 을 이용해서 다음 작업에 들어갈때 데이터를 넘긴다면, 데이터에 대해서 알 수 없다.
// 그러면 data에는 문자열 메서드를 호출할 수는 없다.
// 일단 any니까 split이 동작하는것 처럼 보이는데
// resolve를 바꿔서 숫자가 반환되게 하더라도 동작할거처럼 보일거다.
promise3.then((data) => {
  data.split(" ");
});
// 왜냐면 이 프로미스가 반환할 타입에 대한 정보가 없어서 그렇다.
// 제네릭타입을 이용하면 타입스크립트에게 정보를 준다.
// 그래서 반환할 타입에 대해 정보를 준다면, 에러를 표시해 줄거임

const promise4: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});
promise4.then((data) => {
  data.split(" ");
});

// 추가적인 타입 정보를 얻는데에는 제네릭 타입이 도움될거다.
// 더 복잡한 클래스나 함수를 사용해서 입력되는 데이터를 처리하는 경우, 데이터가 특정 타입인지 여부는 중요하지 않지만,
// 제네릭 타입을 사용해서 작업을 수행할때마다 타입스크립트의 도움을 받고싶으면
// 입력되는 타입의 정보에 대해서 저장해야함
