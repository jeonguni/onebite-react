// math 모듈

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// CJS (Common JS 모듈 시스템)
// module.exports = {
//   add,
//   sub,
// };

// ESM (EX모듈 시스템) NEW!
// export { add, sub };

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply (a, b) { // math 모듈을 대표하는 단하나의 기본값
  return a * b;
}