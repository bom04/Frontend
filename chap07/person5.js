function createPerson() {
    return { name: "홍길동", age: 16 }
  }
  
  let person1 = createPerson()
  let person2 = createPerson()
  
  person1.name = "임꺽정"
  person2.age = 20
  console.log(person1)
  console.log(person2)
  