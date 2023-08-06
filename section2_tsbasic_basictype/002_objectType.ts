// const someObject: {
//   name: string;
//   age: number;
// } = {
const someObject = {
  name: "Maximillian",
  age: 30,
};

/*
someObject: {
    name: string;
    age: number;
}

타입스크립트가 추론한 객체 타입 (객체는 아님)
객체 타입은 객체랑 거의 비슷하게 작성된다.
, 인지 ; 인지의 차이
*/

console.log(someObject.name);
// 존재하지 않는 프로퍼티에 접근하면 에러로 알려준다
console.log(someObject.nickname);

const emptyObject: {} = { name: "park" };
// 타입으로 object를 설정해주는것 -> 타입을 {} 로 설정하는 것

/*
빈 객체 안에 key: type 쌍을 지정해준다.

타입을 명시적으로 지정해주는것보단 타입을 추론하게끔 해주는게 낫다고 설명함
*/

const nestedObject: {
  id: string;
  price: number;
  tags: String[]; // 배열 안의 값이 무슨 타입인지 적어줌
  details: {
    title: string;
    description: string;
  }; // 객체 안에 객체 타입 다시 생성
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
