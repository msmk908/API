arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2); // 1 2

arrC[0] = "hello"; // 배열 0 에 있는 값을 "hello" 로 수정
