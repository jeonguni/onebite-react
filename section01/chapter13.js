// 1. 콜백함수
function main(value) {
  // console.log(1);
  // console.log(2);
  // 콜백함수는 메인함수가 원하는 언제든 실행시킬 수 있다.
  value();
  // console.log("end");
}

main(() => {
  // console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

repeat(5, (idx) => {
  console.log(idx);
});
// repeatDouble(5);

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
