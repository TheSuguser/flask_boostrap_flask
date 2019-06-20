from flask import Flask, render_template, session
import json 

main = Flask(__name__)

@main.route('/')
def index():
    PUBLIC_ROOMS = ['大厅', '游戏', '影视', '技术']
    r = session.get('room', '大厅')
    rs = json.loads(session.get('custom_rooms', '[]'))
    return render_template('chat.html', current_room=r, custom_rooms=rs, public_rooms=PUBLIC_ROOMS)

main.run(debug=True)

