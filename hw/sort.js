let array=[];
for(let i=0;i<100;i++) {
    array[i]=Math.floor(Math.random()*100+1);
}
array.sort(); 
/*array에 저장된 요소의 타입은 number이지만 
sort로 하면 문자열 기준으로 정렬됨*/
console.log(array);
