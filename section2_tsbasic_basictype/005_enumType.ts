const someObjectWithLabel = {
  name: "Maximillian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: "READ ONLY USER",
};

// 위와 같이 role에 문자열 식별자를 넣고 프로그램을 작성하다보면
// role에 어떤 값을 넣었는지 정확히 기억할수 없을때가 있다.

if (someObjectWithLabel.role === "READ_ONLY_USER") {
  console.log("read only");
}

// 자바스크립트에선 그래서 전역 상수로 관리하는 방법을 기용하곤 한다.

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const someObjectWithNumberLabel = {
  name: "Maximillian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: ADMIN,
};
if (someObjectWithNumberLabel.role === ADMIN) {
  //...
}

/*
단점은 role이 number로 추론돼서, 모든 숫자가 저장될 수 있게 된다.
그리고 위 모든 const 선언을 관리해줘야 한다.

그래서 열거형을 쓰면 좋다
*/

enum Role {
  admin,
  read_only,
  author,
}
/*
선언할때 값을 지정해줄 수도 있다
ex
enum Role { ADMIN=6, READ_ONLY, AUTHOR};
필요에따라 특정 값을 할당해줄 수 있따
*/

const someObjectWithEnum = {
  name: "Maximillian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.admin,
};
