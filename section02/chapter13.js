function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num 이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// then 메서드 -> 그 후에~
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     // catch 메서드 (실패 버전의 then)
//     console.log(error);
//   });

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
});
