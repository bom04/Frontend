let a1 = [1, 2, 3];
let a2 = [4, 5, 7];
let a3 = [7, 8, 9];
let a = [a1, a2, a3];

for (let i = 0; i < a.length; ++i)
  for (let j = 0; j < a[i].length; ++j)
    console.log(a[i][j]);
