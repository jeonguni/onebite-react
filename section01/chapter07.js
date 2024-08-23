// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

//console.log(num7);

// 4. 증감 연산자
let num8 = 10;
// console.log(num8);
// console.log(++num8); // 전위 연산: 한줄이 끝나기 전에 호출즉시 증감시킴
// console.log(num8++); // 후위 연산: 한줄이 끝나고 난 후에 증감시킴

// 5. 논리 연산자
let or = true || false; // 두개중에 하나만 참이어도 참인것

let and = true && false; // 두개의 값이 모두 참이어야 참인것

let not = !true; // 참이라면 거짓으로, 거짓이면 참으로 반전시켜줌

// console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
// console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
// console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
// console.log(comp5, comp6);
