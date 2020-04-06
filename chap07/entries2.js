let person = { name: "홍길동", age: 16 };

for (let [key, value] of Object.entries(person))
  console.log("%s: %s", key, value);
