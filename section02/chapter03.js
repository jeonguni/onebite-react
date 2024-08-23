// 구조 분해 할당이란?
// -> 배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 한개씩 할당해주는 방식
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};
// 객체는 중괄호
let { name, age: myAge, hobby, extra = "hello" } = person;
// 키값을 기준으로 변수에다가 저장할 수 있음

// console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
