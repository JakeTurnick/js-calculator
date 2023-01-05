(function() {
    "use strict'"

    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator, .clear");
    const equals = document.querySelector(".equal-sign");

    let calculation = [];



    //Alerts the number pressed for each number button
    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            pushNumber(e);
            calculation.push(e.target.value);
            console.log(calculation);
        })
    });
    function pushNumber(e) {
        alert(e.target.value);
        // calculation.push(e.target.value);
        // console.log(calculation);
    }

    //Alerts for each operators
    operators.forEach(op => {
        op.addEventListener('click', (e) => {
            pushOperator(e);
        });
    })
    function pushOperator(e) {
        alert(e.target.value);
        calculation.push(e.target.value);
    }

    equals.addEventListener('click', (e) => {
        calculate(e);
    })
    function calculate(e) {
        alert(e.target.value);
        alert(calculation);
    }
})();