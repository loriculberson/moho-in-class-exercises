// https://github.com/om-morehouse/web-programming-spring2021/blob/master/javascript/closures.md

function makeAdder(a) {
    return function (b) {
        return a + b;
    };
}

/* Let's play computer
1a. When makeAdder is invoked, what does it return?
const add3 = makeAdder(3)

1b. function makeAdder(3) {
        return function (b) {
            return 3 + b
        }
    }
1c. const add3 = function (b){
                    return 3 + b
                }
2a. When add3 is invoked, what does it return?
2b. add3(5) = function (5){
                return 3 + 5
            }
2c. add3(5) returns 8
*/
