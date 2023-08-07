from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="frontend/build", static_url_path='')
CORS(app)


@app.route("/")
def hello_world():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/*")
def result():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)
