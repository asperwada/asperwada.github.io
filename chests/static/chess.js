const board = document.getElementById('chess-board');
let selectedPiece = null; // выбранная фигура
let currentPlayer = 'white'; // текущий игрок

// Функция для создания шахматной доски
function createChessBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('data-row', row);
            square.setAttribute('data-col', col);

            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }

            square.addEventListener('click', () => handleSquareClick(square));
            board.appendChild(square);
        }
    }
}

// Обработка кликов по клеткам
function handleSquareClick(square) {
    if (selectedPiece) {
        // Логика для перемещения фигуры
        movePiece(square);
    } else {
        // Логика для выбора фигуры
        selectPiece(square);
    }
}

// Выбор фигуры
function selectPiece(square) {
    // Здесь можно добавить логику для выбора фигуры игрока
    selectedPiece = square;
}

// Перемещение фигуры
function movePiece(square) {
    // Логика для перемещения фигуры
    if (isValidMove(selectedPiece, square)) {
        const moveData = {
            from: {
                row: selectedPiece.getAttribute('data-row'),
                col: selectedPiece.getAttribute('data-col')
            },
            to: {
                row: square.getAttribute('data-row'),
                col: square.getAttribute('data-col')
            }
        };

        socket.emit('move', moveData);  // Отправляем ход на сервер

        selectedPiece = null;
        switchPlayer();
    }
}

// Проверка корректности хода
function isValidMove(fromSquare, toSquare) {
    // Добавляем правила движения для фигур
    return true; // пока упрощено
}

// Переключение игроков
function switchPlayer() {
    currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
}

createChessBoard();

// Правильное подключение к серверу WebSocket
var socket = io.connect('http://localhost:63342' + document.domain + ':' + location.port);

// Обработка хода с сервера
socket.on('move', function(data) {
    const fromSquare = document.querySelector(`[data-row="${data.from.row}"][data-col="${data.from.col}"]`);
    const toSquare = document.querySelector(`[data-row="${data.to.row}"][data-col="${data.to.col}"]`);

    toSquare.innerHTML = fromSquare.innerHTML;
    fromSquare.innerHTML = '';
    switchPlayer();
});
