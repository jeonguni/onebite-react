// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// var1 초기화를 해주지 않았기 때문에 현재 null값임
// ?? 연산자로 null 병합을 해주었기 때문에, var4 는 10으로 저장되어 있음
// ?? -> undefined 가 아닌 값을 찾아주는 연산자

let var5 = var1 ?? var3; // -> null + 30
let var6 = var2 ?? var3; // 둘다 확인할 수 있는 값이 있다면, 앞에있는 값만 가져옴
// console.log(var4);
// console.log(var5);
// console.log(var6);

// 요구사항: 유저 이름을 보여주고, 이름이 없다면 닉네임을 보여주세요.
// 해결방안:
let userName;
let userNickName = "당근미워";
let displayUserName = userName ?? userNickName;

//console.log(displayUserName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = false;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환
let var8 = 13;

// 요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
