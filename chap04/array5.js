let a = [3];
console.log("최초 크기 : " + a.length);

a[5] = 456;
console.log("새 크기 : " + a.length);
for (let i = 0; i < a.length; ++i)
  console.log("a[%d] : %s", i, a[i]);
