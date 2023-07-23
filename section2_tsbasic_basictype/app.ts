// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximillian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
// roles 배열의 크기가 2이고 [number, string] 형태로 고정시키고 싶음
// 그래서 아래 코드들은 작동되면 안된다 (크기가 고정되지도 않았고, 아직 union타입이라 작동함)
// person.roles.push("admin");
// person.roles[1] = 10;
// 그래서 튜플을 사용해야한다. 어떤 타입인지 명시적으로 설정해줘야 하는 상황이다.
// role: [number, string]
// push는 동작하긴 한다. 푸시는 튜플에서 예외적으로 허용된다.
// 아래 처럼 작성하면 배열 요소 개수에 대한 제한은 준다, 근데 푸시만 예외적으로 허용해주는거다
// person.role = [0, 'admin', 'user']

// 배열 타입 선언
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);
// 존재하지 않는 프로퍼티에 접근하면 에러로 알려준다

for (const hobby of person.hobbies) {
  // hobby의 타입도 추론된다
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()));
  // string에는 map이 없어서 에러가 난다.
}

/*
person: {
    name: string;
    age: number;
}

타입스크립트가 추론한 객체 타입 (객체는 아님)
객체 타입은 객체랑 거의 비슷하게 작성된다.
, 인지 ; 인지의 차이

타입으로 object를 설정해주는것 -> 타입을 {} 로 설정하는 것

빈 객체 안에 key: type 쌍을 지정해준다.

타입을 명시적으로 지정해주는것보단 타입을 추론하게끔 해주는게 낫다고 설명함

튜플

 */
