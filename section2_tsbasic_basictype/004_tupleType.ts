const someObjectWithArrays = {
  name: "Maximillian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
// roles 배열의 크기가 2이고 [number, string] 형태로 고정시키고 싶은 상황이다
// 그래서 원래라면 아래 코드들은 작동되면 안된다 (만약 타입을 선언하지 않았다면 크기가 고정되지도 않았고, 아직 union타입이라 작동할것이다.)
someObjectWithArrays.role.push("admin");
someObjectWithArrays.role[1] = 10;

// 그래서 튜플을 사용해야한다. 어떤 타입인지 명시적으로 설정해줘야 하는 상황이다.
const someObjectWithTuple: {
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

// role: [number, string] 크기가 2이고 숫자와 문자로 이뤄진 튜플 타입 지정
// push는 동작하긴 한다. 푸시는 튜플에서 예외적으로 허용된다.
someObjectWithTuple.role.push(1);

// 아래 처럼 작성하면 배열 요소 개수에 대한 제한은 준다, 근데 푸시만 예외적으로 허용해주는거다
someObjectWithTuple.role = [0, "admin", "user"];
