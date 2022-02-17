document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = income.value;
    const foodInput = food.value;
    const rentInput = rent.value;
    const clothesInput = clothes.value;
    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    totalAmount.innerText = totalExpenses;
    balance.innerText = parseFloat(incomeInput) - totalExpenses;
    income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';


})



const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const save = document.getElementById('save-input');
const totalAmount = document.getElementById('total');
const balance = document.getElementById('balance');