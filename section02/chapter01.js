// 참인지 거짓인지 상황에따라서 판단하는 자바스크립트의 특징

// 1. falsy 한 값
// 조건문에서는 거짓으로 판명된다.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if (!f1) {
//   // 거짓 + 거짓 = 참
//   console.log("falsy");
// }

// 2. Truth 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  //if (person === undefined || person === null) {
  if (!person) {
    console.log("person 의 값이 없음");
    return;
  }

  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
