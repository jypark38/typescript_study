// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Maximillian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};
// 배열 타입 선언
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
// 존재하지 않는 프로퍼티에 접근하면 에러로 알려준다
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
/*
person: {
    name: string;
    age: number;
}

타입스크립트가 추론한 객체 타입 (객체는 아님)
객체 타입은 객체랑 거의 비슷하게 작성된다.

타입으로 object를 설정해주는것 -> 타입을 {} 로 설정하는 것

빈 객체 안에 key: type 쌍을 지정해준다.

타입을 명시적으로 지정해주는것보단 타입을 추론하게끔 해주는게 낫다고 설명함
 */
