let a1 = [1, 2, 3, 4, 5]; 
let a2 = a1.slice(0);

console.log(a2);
console.log(a1 == a2);
console.log(a1.join() == a2.join()); // reference 타입이면 내용이 아니라 참조(주소) 비교,value타입이면 값 비교