let a1 = "1,2,3,4,5,6,7,8,9,10".split(",");
let a2 = a1.filter((e) => e % 2 === 0); // 숫자로 자동으로 변환해줌
console.log(a2);
