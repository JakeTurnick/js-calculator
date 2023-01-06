(function() {
    "use strict'"

    //set up for DOM elements
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator, .clear");
    const equals = document.querySelector(".equal-sign");
    const screen = document.querySelector(".calculator-screen");

    //collected inputs from user
    let calculation = [];

    //Alerts the number pressed for each number button
    numbers.forEach(number => {
        number.addEventListener('click', (e) => {pushNumber(e)})
    });

    function pushNumber(e) {
        alert(e.target.value);
        calculation.push(e.target.value);
        screen.value = e.target.value;
    }

    //Alerts for each operators
    operators.forEach(op => {
        op.addEventListener('click', (e) => {pushOperator(e)});
    })

    function pushOperator(e) {
        alert(e.target.value);
        calculation.push(e.target.value);
        if (e.target.value != 'clear') {
            screen.value = e.target.value;
        } else screen.value = 0;
        
    }

    //Alters = was pushed
    equals.addEventListener('click', (e) => {calculate(e)})

    function calculate(e) {
        alert(e.target.value);
        /*
            joins user inputs to 1 string
            evaluates what the user inputted
            sets calculator screen to the evaluated value
        */
        let equate = calculation.join(' ');
        let equated = eval(equate);
        
        screen.value = equated;
        return equated;
    }
})();

