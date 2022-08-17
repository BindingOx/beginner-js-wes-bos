// functions are created/defined (say what it does) -> then called

// Function Definition
function calculateBill() {
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = 100 * 1.15;
    console.log(`🧾 ~ total:`, total);
    // NOTE: return just means I can capture it into a new variable. if you don't return, totalWithGf => NaN
    return total;
}

// Function Call
// console.log(`🧾 ~ calculateBill`, calculateBill); // shows info in browser
// calculateBill();

// FIXME: total is not defined. We need to capture the result of a function
const totalWithGf = calculateBill() * 2; // undefined without returning
console.log(`🧾 ~ totalWithGf:`, totalWithGf); // not defined outside the function unless you return it

// NOTE: just because we returned, doesn't mean we can access the variable now.
// console.log(total); //is still undefined
// const myTotal = total // and this doesn't work b/c total lives only inside the function

/* NOTE:
you can't access variables declared inside a function from outside a function. The variable belongs to the function's scope only, not the global scope.

Fortunately, functions inherit the scope of their caller. So the easiest way to make your variable accessible from outside the function is to first declare outside the function, then use it inside the function.
*/
