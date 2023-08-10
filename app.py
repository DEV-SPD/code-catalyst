from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="frontend/build", static_url_path='')
CORS(app)


@app.route("/api/diabetes", methods=['POST'])
def post_data():
    if request.is_json:
        data = request.json  # Get the JSON data from the request
        # Process the data as needed (e.g., save it to a database)
        num = data.get('num')
        num = int(num)
        print(type(num))
        num = num * 2
        return jsonify({'num': num}), 201
    else:
        return jsonify({'num': -1}), 400


@app.route("/")
def hello_world():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/works")
def works():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/liver")
def liver():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/kidney")
def kidney():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/heart")
def heart():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/diabetes")
def diabetes():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/about")
def about():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/offer")
def offer():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/tech")
def tech():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/tech")
def result():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)
