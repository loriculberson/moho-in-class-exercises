//Promise Chains

// Don't worry too much about the next few lines, we just need a slowAdder function to call.
function slowAdder(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

// This is how we can chain promises together:
slowAdder(3, 5).
    then(first => slowAdder(first, 10)).
    then(second => slowAdder(second, 20)).
    then(third => console.log('Finally!', third));            // 38 (prints after 3 seconds)