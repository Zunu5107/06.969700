from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.vd0bjci.mongodb.net/?retryWrites=true&w=majority')
dbjun = client.dbsparta 

@app.route('/')
def home():
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
   app.run('0.0.0.0', port=5000, debug=True)