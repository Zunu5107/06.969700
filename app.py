from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('url')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/thingzoo')
def thingzoo():
    return render_template('thingzoo.html')

@app.route('/thingzoo/guestbook', methods=["POST"])
def thing_guestbook_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']

    doc = {
        'name': name_receive,
        'comment': comment_receive,
    }

    db.guestbook.thingzoo.insert_one(doc)

    return jsonify({'msg': '등록 완료!'})

@app.route("/thingzoo/guestbook", methods=["GET"])
def thing_guestbook_get():
    comment_list = list(db.guestbook.thingzoo.find({}, {'_id': False}))
    return jsonify({'result': comment_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)