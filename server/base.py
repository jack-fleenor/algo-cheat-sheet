from flask import Flask;
api = Flask(__name__)

@api.route('/algos')
def algos():
    response_body = {
        "test": "value"
    }
    return response_body