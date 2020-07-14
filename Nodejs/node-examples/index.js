var rect = require('./rectangle');

function solveRect(l,b) {
    console.log(`Solving for rectangle with length l = ${l} and b = ${b}`);
    rect(l, b, (err,rectangle) => {
        if(err) {
            console.log("Error" + err.message);
        }
        else {
            console.log("Perimeter of rectangle is : " + rectangle.perimeter());
            console.log("Area of rectangle is " + rectangle.area());
        }
    })

    console.log("This statement after the call to rect()");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);