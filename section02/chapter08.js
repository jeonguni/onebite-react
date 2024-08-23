// 5가지 요소 순회 및 탐색 메서드
// forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  // 내가한거
  // const doubleitems = item * 2;
  // doubledArr.push(doubleitems);
  // console.log(doubledArr);

  // 강의내용
  doubledArr.push(item * 2);
  // console.log(doubledArr);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);
// 존재하지 않는 인덱스를 찾아달라하면 -1 을 반환함
// 얕은비교, 배열에서 특정 객체값이 존재하는지 찾아낼 수 없음

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 2);

// console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "이정환");
console.log(finded);
