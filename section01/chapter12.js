// 1. 함수 표현식

function funcA() {
  //console.log("funcA");
}

let varA = funcA;
varA();

// 익명함수
// 함수 선언문 없이
// 이름 없이 변수로 바로 호출된 함수
// 호이스팅 되지 않음
let varB = function () {
  //console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
