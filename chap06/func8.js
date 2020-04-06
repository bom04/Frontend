function factory() {
    return function (msg) {
      console.log(msg)
    }
  }
  
  factory()("hello")
  