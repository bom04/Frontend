let person = { name: "홍길동", age: 16 };

for (let key in person) {
  let value = person[key];
  console.log("%s: %s", key, value);
}
