const someObjectWithArray = {
  name: "Maximillian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// 문자열 배열 타입 선언
// 이렇게 명시해주면 문자열만 들어가는 배열이 만들어진다
let someArray: string[];
someArray = ["Sports"];

const stringTypeArray = ["Sports"];
// 위와 같이 해둬도 string[] 으로 추론된다

let anyTypeArray: any[]; // 여러 타입의 배열이다.
anyTypeArray = ["Sports", 1];

for (const hobby of someObjectWithArray.hobbies) {
  // hobby의 타입도 추론된다 -> string
  // 현재 순회하는 배열이 문자열 배열이라는걸 알기 때문에 hobby 의 타입이 문자열로 추론됨
  console.log(hobby.toUpperCase());

  // console.log(hobby.map()));
  // string에는 map이 없어서 에러가 난다.
}
