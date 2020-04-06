function factory() {
    return function (msg) {
      console.log(msg)
    }
  }
  
  let f = factory()
  f("hello")
  