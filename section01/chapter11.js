// 함수선언
function getArea(width, height) {
  // width, height 매개변수
  // 함수 안에 함수 호출 가능 -> 중첩함수
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area; // 반환값
  console.log("return 에서 함수가 종료되기 때문에 해당 콘솔은 보여지지 않음");
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);
//getArea(10, 20); // 10, 20 인수
//getArea(30, 20);

// 호이스팅 -> 끌어올리다
// 선언문을 호출문보다 아래에 적어도, 정상적으로 자바스크립트가 적용될 수 있음.
