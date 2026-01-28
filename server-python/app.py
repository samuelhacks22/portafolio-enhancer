from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/analytics', methods=['GET'])
def analytics():
    return jsonify({
        'data_points': [10, 20, 30, 40, 50],
        'summary': 'Positive trend'
    })

if __name__ == '__main__':
    app.run(debug=True)
