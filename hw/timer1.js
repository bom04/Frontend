let count=1;
let id= setInterval(printTime, 1000, "1초 간격");
function printTime(msg) {
    console.log(msg, new Date(),count+'회');
    if(count == 10) {
        clearInterval(id);
    }
    count++;
  }
  
  
  

  