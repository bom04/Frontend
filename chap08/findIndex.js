let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];
  
  let index = persons.findIndex(p => p.age == 18);
  console.log(index);
  