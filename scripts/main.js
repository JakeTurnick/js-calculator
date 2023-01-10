(function() {
    "use strict'"

    //set up for DOM elements
    const numBtn = document.querySelectorAll(".number");
    const opsBtn = document.querySelectorAll(".operator, .clear");
    const equals = document.querySelector(".equal-sign");
    const screen = document.querySelector(".calculator-screen");

    //collected inputs from user
    let calculation = [];

    numBtn.forEach(number => {
        number.addEventListener('click', (e) => {pushNumber(e)})
    });
    //Alerts the number pressed for each number button & adds to calculation
    function pushNumber(e) {
        alert(e.target.value);
        calculation.push(e.target.value);
        screen.value = e.target.value;
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


    const operators = ['*', '/', '+', '-'];
    let num1 = '', num2 = '', op = null;
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




        /* Much harder attempt ahead
        let num = 0;
        
        let operation = {};
        let opCount = 0;
        /* fills operation with concatenated numbers with operators to seperate them
            ex: x1: 123, x2: +, x3: 45, x4: -, x5: 6  FROM (123 + 45 - 6) 
        for (i = 0; i < calculation.length; i++) {
            // console.log(calculation[i], i);
            // console.log('calc length', calculate.length)
            // console.log(calculation[i], typeof(calculation[i]));
            if (!mathOps.hasOwnProperty(calculation[i])) { // concats numbers between operators
                if (i < 1) { //if first digit, num is starting digit
                    num = calculation[0];
                }  else { //concat
                    num += calculation[i];
                }
                if (i > calculation.length - 2) { //if last input is number, add to num and push to calc array
                    operation[i] = num;
                    opCount += 1;
                }
                
                // console.log(num)
            } else if (mathOps.hasOwnProperty(calculation[i])) {
                operation[i] = num;
                operation[i + 1] = calculation[i];
                num = 0;
                opCount += 1;
            };
            // console.log('opCount:', opCount)
        }
        
        //converts operation obj into arr for easier work
        //obj would have keys out of numerical order { 3: key, 4: key, 6: key ... etc}
        let opsArr = [];
        for (let properties in operation) {
            opsArr.push(operation[properties]);
        }
        console.log(operation)
        console.log('opsArr:',opsArr)
        for (let i = 0; i < opsArr.length; i++) {
            console.log("i ", i, 'for ops arr', opsArr[i])
            if (opsArr[i] == '*' || opsArr[i] == '/') {
                //test = result of multiply or divide, based on opsArr[i], with the previous (-1) and next (+1) values
                let test = mathOps[opsArr[i]](opsArr[i - 1], opsArr[i + 1]);
                console.log(test)
                //cuts original array into before test operation (-2) and after test operation (+2), recombines
                let opsBefore = opsArr.slice(0, (i-2));
                let opsAfter = opsArr.slice((i+2), opsArr.length);
                console.log(opsBefore, opsAfter)
                let recombined = opsBefore + test + opsAfter;
                console.log(recombined)
            } 
        } 
        */

        //Work graveyard, for references

            // let splitTest = calculation.join('');
            // console.log('joined', splitTest)
            // for (i = 0; i < Object.keys(mathOps).length; i++) {
            //     splitTest = calculation.join('');
            //     console.log('splitting by', Object.keys(mathOps)[i])
            //     splitTest = splitTest.split(Object.keys(mathOps)[i].toString());
            //     console.log('split type', typeof(Object.keys(mathOps)[i]))
            //     console.log(splitTest, typeof(splitTest))
            //     // splitTest = splitTest.join('')
            //     // console.log(splitTest)
            // }
            // console.log('split test', splitTest);

            // if (Object.keys(mathOps).includes(operation[properties])) {
            //     if (operation[properties] == '*' || operation[properties] == '/') {
            //         console.log("multi or divide", operation[properties])
            //     }
            //     // console.log('prop', properties, ' and op', operation[properties])
            // }
            // console.log('props', properties)
            // console.log('op at properties', properties, operation[properties])
            // if (Object.keys(operation)[properties]) {
            // }


        /* NOTES TO DO
            if I want to do PEMDAS I'll need to loop over the array calculation[inputs],
            scan for P -> E -> M & D -> A & S,
            then get numbers for +1 and -1 positions and do that operation first
            ex: [1 2 + 3 * 9 - 4] -> find 9
                12 + 3 * 9 - 4
            join everything in the array ''
            split at operators
        */
        /*
            joins user inputs to 1 string
            evaluates what the user inputted
            sets calculator screen to the evaluated value
        */
        // let equate = calculation.join(' ');
        // console.log(calculation, equate)
        //CANT USE EVAL - but it works
        // let equated = eval(equate);
        

        // return equated;

