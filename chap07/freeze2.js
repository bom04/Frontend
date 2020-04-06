let person = { name: "홍길동", age: 16 };
console.log(Object.isFrozen(person));

Object.freeze(person);
console.log(Object.isFrozen(person));
