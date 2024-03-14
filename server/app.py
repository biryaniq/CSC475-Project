from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.debug = True # only for development

CORS(app, origins=["http://localhost:3000"], methods=["POST"])

@app.post('/analyze')
def analyze():
  # extract chords from audio
  # audio = request.files['audio']

  return {'chords': ['A', 'B', 'C']}


