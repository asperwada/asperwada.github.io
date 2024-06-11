let counter = 0;
let purchaseCount = 0;
const purchaseCost = 5;  // Установите требуемую сумму для покупки

document.getElementById('counterButton').addEventListener('click', () => {
    counter++;
    document.getElementById('counterButton').innerText = counter;
});

document.getElementById('rectButton').addEventListener('click', () => {
    if (counter >= purchaseCost) {
        counter -= purchaseCost;
        purchaseCount++;
        document.getElementById('counterButton').innerText = counter;
        document.getElementById('rectButton').innerText = `Купить X ${purchaseCount}`;
    } else {
        alert("Недостаточно средств для покупки");
    }
});
