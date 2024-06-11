let counter = 0;
let purchaseCount = 0;
let stamina = 3000;
const maxStamina = 3000;
let purchaseCost = 5;  // Начальная стоимость покупки
const recoveryTimeInMinutes = 60;  // Время восстановления в минутах

document.getElementById('counterButton').addEventListener('click', () => {
    if (stamina > 0) {
        counter++;
        stamina--;
        document.getElementById('counterButton').innerText = counter;
        document.getElementById('staminaDisplay').innerText = `Stamina: ${stamina}`;
    } else {
        alert("Недостаточно выносливости для клика. Подождите восстановления.");
    }
});

document.getElementById('rectButton').addEventListener('click', () => {
    if (counter >= purchaseCost) {
        counter -= purchaseCost;
        purchaseCount++;
        purchaseCost *= 2;  // Удваиваем стоимость покупки
        document.getElementById('counterButton').innerText = counter;
        document.getElementById('rectButton').innerText = `Купить X ${purchaseCount}`;
        document.getElementById('price').innerText = `Цена: ${purchaseCost}`;
    } else {
        alert("Недостаточно средств для покупки");
    }
});

// Восстановление выносливости каждые recoveryTimeInMinutes минут
function restoreStamina() {
    stamina = maxStamina;
    document.getElementById('staminaDisplay').innerText = `Stamina: ${stamina}`;
}

// Установить таймер для восстановления выносливости
setInterval(restoreStamina, recoveryTimeInMinutes * 60 * 1000); // Переводим минуты в миллисекунды
