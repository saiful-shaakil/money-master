// code for calculate button

document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = income.value;
    const foodInput = food.value;
    const rentInput = rent.value;
    const clothesInput = clothes.value;
    document.getElementById('notifi').style.display = 'none';
    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    totalExpensesAmount.innerText = totalExpenses;
    balance.innerText = parseFloat(incomeInput) - totalExpenses;
    if (incomeInput == '' || foodInput == '' || rentInput == '' || clothesInput == '') {
        totalExpensesAmount.innerText = 0;
        balance.innerText = 0;
        document.getElementById('notifi').style.display = 'block';
    }
    if (incomeInput == '0' || foodInput == '0' || rentInput == '0' || clothesInput == '0') {
        totalExpensesAmount.innerText = 0;
        balance.innerText = 0;
        document.getElementById('notifi').style.display = 'block';
    }
    if (balance.innerText < 0 || incomeInput < 0) {
        document.getElementById('notifi').style.display = 'block';
        totalExpensesAmount.innerText = 0;
        balance.innerText = 0;
    }
    document.getElementById('message').style.display = 'none';
    /* income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = ''; */
});

//code for save button

document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = save.value;
    const incomeInput = income.value;
    document.getElementById('message').style.display = 'none';
    newSavingAmount = (parseFloat(incomeInput) / 100) * parseFloat(saveInput);
    newRemainingAmount = parseFloat(balance.innerText) - newSavingAmount;
    console.log(newRemainingAmount);
    savingAmount.innerText = newSavingAmount;
    remainingAmount.innerText = newRemainingAmount;


    if (savingAmount.innerText > balance.innerText || remainingAmount.innerText < 0 || balance.innerText < 0) {
        document.getElementById('message').style.display = 'block';
        remainingAmount.innerText = 0;
        savingAmount.innerText = 0;
    }
    else if ((save.value == '' && balance.innerText == 0) || save.value < 0) {
        alert('invalid number');
        remainingAmount.innerText = 0;
        savingAmount.innerText = 0;
    }
    else if (save.value == '') {
        alert('Please, insert a number.')
        remainingAmount.innerText = 0;
        savingAmount.innerText = 0;
    }
    document.getElementById('notifi').style.display = 'none';


});
// declaring
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const save = document.getElementById('save-input');
const totalExpensesAmount = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const savingAmount = document.getElementById('saving-amount');
const remainingAmount = document.getElementById('remaining-amount');