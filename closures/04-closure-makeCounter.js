function makeCounter(initialValue = 0) {
    let _count = initialValue; // `count` is our bound (hidden) variable
    console.log('i am the count', _count)
    return {
      // return an object with methods that are closures
      inc: function () {
        _count += 1;
      }, // `inc`, `dec`, `reset`, and `get` are the API
      dec: function () {
        _count -= 1;
      }, // they provide controlled access to `_count`
      reset: function () {
        _count = 0;
      },
      get: function () {
        return _count;
      },
    };
  }
  
  const myCounter = makeCounter(7); // create a counter object
  myCounter.inc(); // `count` is now `8`
  console.log(myCounter.get()); // `8`
  
  // the following line of code attempts to modify `count`
  // but it only adds a harmless `count` property that is ignored by the closure
  myCounter._count = "banana";   //No no! 
  console.log(myCounter.get()); // `8`, our counter still uses the hidden (bound) `count` variable 😀.
  myCounter.inc(); // `count` is now `9`
  myCounter.inc(); // `count` is now `10`
  console.log(myCounter.get()); // `10`, our counter still uses the hidden (bound) `count` variable 😀.

