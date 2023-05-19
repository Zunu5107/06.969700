from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('url')
db = client.dbsparta

junclient = MongoClient('mongodb+srv://sparta:test@cluster0.vd0bjci.mongodb.net/?retryWrites=true&w=majority')
dbjun = junclient.dbsparta 

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

@app.route('/nayoung')
def nayoung():
    return render_template('nayoung.html')

@app.route('/nayoung/guestbook', methods=["POST"])
def nayoung_guestbook_post():
    
    comment_receive = request.form['comment_give']

    doc = {
        
        'comment': comment_receive
    }

    db.guestbook.nayoung.insert_one(doc)

    return jsonify({'msg': '등록 완료!'})

@app.route("/nayoung/guestbook", methods=["GET"])
def nayoung_guestbook_get():
    comment_list = list(db.guestbook.nayoung.find({}, {'_id': False}))
    return jsonify({'result': comment_list})

@app.route('/juns')
def juns():
   return render_template('JunHomepage.html')

@app.route("/juns/comment", methods=["POST"])
def guestbook_post():
    name_receive = request.form['id_give']
    comment_receive = request.form['msg_give']

    doc = {
        "name":name_receive,
        "comment":comment_receive
    }

    dbjun.jun.insert_one(doc)
    return jsonify({'msg': 'Save Complete'})

@app.route("/juns/comment", methods=["GET"])
def guestbook_get():
    all_comment = list(dbjun.jun.find({},{'_id':False}))
    return jsonify({'result': all_comment})


if __name__ == '__main__':
    app.run()
