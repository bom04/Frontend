let obj = {
    count: 0,
    startTimer: function() {
      console.log(this.count);
      let callback = function() { console.log(this.count++); };
      setInterval(callback, 1000);
    }
  }
  
  obj.startTimer();
  