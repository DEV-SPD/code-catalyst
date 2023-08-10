from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
import pickle

app = Flask(__name__, static_folder="frontend/build", static_url_path='')
CORS(app) 

with open('diabetes','rb') as f:
 diabetes_model = pickle.load(f)


@app.route("/api/diabetes", methods=['POST'])
def post_data():     
        Pregnancies = int(request.json.get('preg'))
        Glucose = int(request.json.get('glu'))
        BloodPressure = int(request.json.get('bp'))
        SkinThickness = int(request.json.get('st'))
        Insulin = int(request.json.get('ins'))
        BMI = float(request.json.get('bmi'))
        DiabetesPedigreeFunction = float(request.json.get('dpf'))
        Age = int(request.json.get('age'))
        
        res = diabetes_model.predict([[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]]) 
        
        if(res[0]==0):
         return jsonify({'result':0})
        else:
         return jsonify({'result':1})
        
        


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
