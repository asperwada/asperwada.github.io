let counter = 0;
let purchaseCount = 0;
let stamina = 3000;
const maxStamina = 3000;
const purchaseCost = 5;  // Установите требуемую сумму для покупки
const recoveryTimeInMinutes = 60;  // Время восстановления в минутах

document.getElementById('counterButton').addEventListener('click', () => {
    if (stamina > 0) {
        counter++;
        stamina--;
        document.getElementById('counterButton').innerText = counter;
        document.getElementById('stamina').innerText = `Stamina: ${stamina}`;
        document.getElementById('staminaDisplay').innerText = `Stamina: ${stamina}`;
    } else {
        alert("Недостаточно выносливости для клика. Подождите восстановления.");
    }
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

// Восстановление выносливости каждые recoveryTimeInMinutes минут
function restoreStamina() {
    stamina = maxStamina;
    document.getElementById('stamina').innerText = `Stamina: ${stamina}`;
    document.getElementById('staminaDisplay').innerText = `Stamina: ${stamina}`;
}

// Установить таймер для восстановления выносливости
setInterval(restoreStamina, recoveryTimeInMinutes * 60 * 1000); // Переводим минуты в миллисекунды
