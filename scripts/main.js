const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");


numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        pushNumber(e);
        console.log(e.target.value);
    })
});
function pushNumber(e) {
    alert(e.target.value);
}
