let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];
  console.log(persons);
  
  persons[2] = persons[1];
  persons[1].age = 20;
  console.log(persons);
  