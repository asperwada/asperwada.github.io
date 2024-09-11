from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

# Обработка соединения WebSocket
@socketio.on('connect')
def handle_connect():
    print('A player has connected')

# Обработка хода игрока
@socketio.on('move')
def handle_move(data):
    # Логика для обработки хода (например, проверка корректности хода)
    emit('move', data, broadcast=True)  # Отправляем ход всем игрокам

if __name__ == '__main__':
    socketio.run(app, debug=True, allow_unsafe_werkzeug=True)

