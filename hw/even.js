let array=[];
for(let i=0;i<100;i++) {
    array[i]=Math.floor(Math.random()*100+1);
}

let i=0;
while(i<array.length) {
    if(array[i]%2==0) {
        array.splice(i,1);
    } else {
        i++;
    }
}
console.log(array);