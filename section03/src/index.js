// const moduleData = require("./math");
// const { add, sub } = require("./math");

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

// import mul from "./math.js"; // 다른 모듈에서 불러올 때 줄괄호 없이 불러올 수 있음 
// import { add, sub } from "./math.js";

// import 문을 합치는것도 가능
import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));


import randomColor from "randomcolor";

const color = randomColor();
console.log(color);