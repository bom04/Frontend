let persons1=[];
for(let i=0;i<10;i++) {
    persons1[i]={name:'홍길동',age:16+i};
}
// for(let i=0;i<10;i++) {
//     persons2[i]=Object.assign({},persons1[i]);
// }

function clone(persons1) {
    var target = [];
    for (let i in persons1) {
      if (persons1[i] != null && typeof persons1[i] === "object") {
        target[i] = clone(persons1[i]); // resursion
      } else {
        target[i] = persons1[i];
      }
    }
    return target;
  }
  
let persons2 = clone(persons1);
console.log(persons2);