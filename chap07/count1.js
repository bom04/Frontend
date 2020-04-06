const MAX = 1000, MIN = 1;
let count = [];

for (let i = 0; i < 100; ++i) {
  let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  if (typeof count[a] == "undefined") count[a] = 1;
  else count[a] += 1;
}

for (let i = 0; i < count.length; ++i)
  if (count[i] >= 2)
    console.log("%d %d", i, count[i]);

console.log("length = ", count.length);
