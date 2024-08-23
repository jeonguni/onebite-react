// 단락 평가
// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// console.log(returnFalse() && returnTrue());
// 논리 연산식에서 첫 번재 피연산자의 값만으로도 이 연산의 결과를 확정할 수 있다면
// 그때는 두 번째 피연산자에는 접근조차 하지 않는 실행 방식
// && , || 등등...

// 단락 평가 활용 사례
function prinName(person) {
  // if (!person) {
  //   console.log("person에 값이 없음");
  //   return;
  // }
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

prinName();
prinName({ name: "aaaa" });
