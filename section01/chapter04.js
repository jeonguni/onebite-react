// 1. 변수
let age;
//변수 선언, 초기화
// console.log(age);

age = 30;
// console.log(age);

//let 변수는 같은 이름으로 구분되기 때문에, 중복된 이름으로 다시 선언은 불가능
//let age = 50 불가능

// 2. 상수
const birth = "1997.01.07";
// 초기화 없이 사용할 수 없음.
// 초기화 이후 값을 바꿀 수 없음.

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let _2name;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let let, let if

// 4. 변수 명명 가이드 (어떤걸 의미하는지 친절하게 작성하기)
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
