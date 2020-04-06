let person = { name: "홍길동", age: 16, 1: "도술", 0: "호형호제"  }

for (let key in person)
    console.log("%s: %s", key, person[key])
