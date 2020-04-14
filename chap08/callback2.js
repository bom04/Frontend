let obj = {
    count: 0,
    startTimer: function() {
      console.log(this.count);
      let callback = () => { console.log(this.count++); }; // 화살표 함수(람다 표현식)를 의미
      setInterval(callback, 1000)
    }
  }
  
  obj.startTimer();
  