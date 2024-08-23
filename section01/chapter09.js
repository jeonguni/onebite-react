// 1. if 조건문 (if문)
let num = 9;

if (num >= 10) {
  // console.log("num은 10 이상입니다.");
  // console.log("조건이 참 입니다!");
} else if (num >= 5) {
  // console.log("num은 5 이상입니다.");
} else {
  // console.log("num은 10 미만입니다.");
  // console.log("조건이 거짓입니다.");
}

// 2. switch 문
// -> if 문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if 보다 더 직관적이다.

let animal = "owl";
//animal 을 기준으로 다른 코드를 실행시키기 위함
// 위에서부터 일치하는 케이스 탐색을 시작
// 일치하는 케이스를 만나면 아래에 있는 모든 케이스를 실행시켜줌
// 그래서 break 를 달아서 if 문처럼 막아주어야 함
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  // 변수에 해당하는 조건이 없을 경우에 노출
  default: {
    console.log("그딴건 없어");
  }
}
