from flask import Flask, request
from flask_cors import CORS
import subprocess
import os
from werkzeug.utils import secure_filename

from utils.chordino_utils import chordino_output_to_chord_array

app = Flask(__name__)
app.debug = True # only for development
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')  # specify your upload folder here

CORS(app, origins=["http://localhost:3000"], methods=["POST"])

@app.post('/analyze')
def analyze():
  for file in request.files.values():
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    result = subprocess.run(['docker', 'run', '-v', filepath + ':/usr/a.mp3', 'chord-rec'], capture_output=True, text=True)
    return {'status': 'success', 'chordsUsed': chordino_output_to_chord_array(result.stdout)}, 200

  return {'status': 'success', 'chordsUsed': []}, 400


