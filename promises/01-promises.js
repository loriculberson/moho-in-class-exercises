/*
*** WHAT IS A PROMISE: an asynchoronous method that supplies a value at some point
      in the future. It does this without blocking other processes. 
 *  a Promise object represents the eventual completion
     (or failure) of an asynchronous operation and its resulting value
*/  

//Exampe 1:
/*
* a promise that resolves after 3 seconds

* resolve is what happens when the promise is fulfilled 
    it points to the callback function inside of the .then('I'm what the resolve will do!)
- return data
- execute a function or task
*/
const p = new Promise((resolve, reject) => {                // create a promise using the Promise constructor function
    setTimeout(() => resolve('this is some data'), 3000);     // call `resolve` when the data is ready
  });
  
  p.then(data => {                                            // `.then` is executed when the promise is resolved
    console.log(data);
  }).catch(error => {                                         // `.catch` is executed if the promise is rejected
    console.log(error);
  });



//Exampe 2:
const add = (x, y) => {
    return new Promise((resolve, reject) => {
        const error = false   //switch error to true. What happens?
        if (!error){
            setTimeout(() => resolve(console.log("hey y'all!", x + y)), 3000);
        } else {
            reject(console.log('No way!!!!'));
        }
    })
};
// add(7, 4)
// .then(console.log("Is it done?"))
// .then(data => data)
// .catch(error => error);                                         // `.catch` is executed if the promise is rejected


/*
* resolve is what happens when the promise is fulfilled 
    it points to the callback function inside of the .then('I'm what the resolve will do!)
- return data
- execute a function or task

* reject is what happens when the promise is not fulfilled
*/