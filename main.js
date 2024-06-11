let counter = 0;

document.getElementById('counterButton').addEventListener('click', () => {
    counter++;
    document.getElementById('counterButton').innerText = counter;
});
