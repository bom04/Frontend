let a = [1, 3, 5, 7];

while (a.length > 0) {
  let value = a.pop();
  console.log("pop value=%d, array=[%s]", value, a.toString());
}
