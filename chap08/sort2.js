let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];
  
  persons.sort((p1, p2) => p1.name.localeCompare(p2.name)); // String을 비교할 때 이용
  console.log(persons);
  