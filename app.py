from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/thingzoo')
def thingzoo():
    return render_template('thingzoo.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)