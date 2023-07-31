function extractAndConvert(obj: object, key: string) {
  return "value:" + obj[key];
}
console.log(extractAndConvert({}, "name"));

// 전달되는 객체에 전달되는 키가 있는지 보장할 수 없다는 에러를 발생시킬거다.
// 그래서 이걸 보완시키려고 제네릭 타입을 쓰면 된다.

function extractAndConvertGeneric<T extends object, U extends keyof T>(obj: T, key: U) {
  return "value:" + obj[key];
}

console.log(extractAndConvertGeneric({}, "name"));
// T를 object로, U를 T의 키로 제한한 제네릭으로 지정해줌.
// 그래서 없는 키에 접근하면 에러가 난다.

console.log(extractAndConvertGeneric({ name: "Max" }, "name"));
// 정확한 구조를 전달하기 위해 유용하다
