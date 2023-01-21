(function() {
    "use strict'"

    //set up for DOM elements
    const numBtn = document.querySelectorAll(".number");
    const opsBtn = document.querySelectorAll(".operator, .clear");
    const equals = document.querySelector(".equal-sign");
    const screen = document.querySelector(".calculator-screen");

    //collected inputs from user
    let calculation = [];
    const operators = ['*', '/', '+', '-'];
    let num1 = '', num2 = '', op = null;

    numBtn.forEach(number => {
        number.addEventListener('click', (e) => {
            pushNumber(e)
        })
    
    });
    //Alerts the number pressed for each number button & adds to calculation
    let newScreen = '';
    function pushNumber(e) {
        alert(e.target.value);
        calculation.push(e.target.value);
        screen.value += e.target.value;      
    }

    
    opsBtn.forEach(op => {
        op.addEventListener('click', (e) => {pushOperator(e)});
    })
    //Alerts for each operators & adds to calculation or clears
    function pushOperator(e) {
        alert(e.target.value);
        if (mathOps.hasOwnProperty(e.target.value) && e.target.value != 'clear') {
            screen.value = e.target.value;
            console.log(calculation);
            calculation.push(e.target.value);
        } else {
            screen.value = 0;
            calculation = [];
            num1 = '';
            num2 = '';
            op = null;
        }
        
    }
    const mathOps = { //math operations to reference
        '+': function(a,b) {return parseFloat(a) + parseFloat(b)},
        '-': function(a,b) {return parseFloat(a) - parseFloat(b)},
        '*': function(a,b) {return parseFloat(a) * parseFloat(b)},
        '/': function(a,b) {return parseFloat(a) / parseFloat(b)}
    }

    //Alerts = was pushed & fires off equation logic
    equals.addEventListener('click', (e) => {calculate(e)})



    function calculate(e) {
        //alert(e.target.value);
        
        while (mathOps.hasOwnProperty(calculation[0])) { //prevents operators coming before numbers
            calculation.shift();
        }
        while (mathOps.hasOwnProperty(calculation[calculation.length])) {
            console.log('last prop is not a number')
        }

        for (let i = 0; i < calculation.length; i++) {
            let char = calculation[i];
            if (operators.includes(char)) {
                op = char;
            } else if (!op) {
                num1 += char;
            } else {
                num2 += char
            }
            
        };

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch(op) {
            case '+': {
                let answer =  num1 + num2;
                answer = answer.toString()
                alert(`= ${answer}`);
                screen.value = answer;
                return(answer);
            }
            case '-': {
                let answer =  num1 - num2;
                alert(`= ${answer}`);
                screen.value = answer;
                return(answer);
            }
            case '*': {
                let answer =  num1 * num2;
                alert(`= ${answer}`);
                screen.value = answer;
                return(answer);
            }
            case '/': {
                let answer =  num1 / num2;
                alert(`= ${answer}`);
                screen.value = answer;
                return(answer);
            }
        }
    }
})();
