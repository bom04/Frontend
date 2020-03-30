let a = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];

for (let i = 0; i < a.length; ++i)
  for (let j = 0; j < a[i].length; ++j)
    for (let k = 0; k < a[i][j].length; ++k)
      console.log(a[i][j][k]);
