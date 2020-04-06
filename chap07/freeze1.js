let person1 = { name: "홍길동", age: 16 };
person1.age = 20;
person1.department = "소프";
console.log(person1);

let person2 = { name: "홍길동", age: 16 };
Object.freeze(person2);
person2.age = 20;
person2.department = "소프";
console.log(person2);
