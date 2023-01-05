const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator, .clear");
console.log(operators)

//Alerts the number pressed for each number button
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        pushNumber(e);
        console.log(e.target.value);
    })
});
function pushNumber(e) {
    alert(e.target.value);
}

//Alerts for each operators
operators.forEach(op => {
    op.addEventListener('click', (e) => {
        pushOperator(e);
    });
})
function pushOperator(e) {
    alert(e.target.value);
}
