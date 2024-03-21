from chord_extractor.extractors import Chordino
import sys

SOURCE_FILE = sys.argv[1]

print ("Starting Chordino...")
print ("Source path: " + SOURCE_FILE)
# Setup Chordino with one of several parameters that can be passed
chordino = Chordino(roll_on=1)  

# Optional, only if we need to extract from a file that isn't accepted by librosa
# conversion_file_path = chordino.preprocess(SOURCE_FILE)

# Run extraction
chords = chordino.extract(SOURCE_FILE)
print(chords)
# => [  ChordChange(chord='N', timestamp=0.371519274), 
#       ChordChange(chord='C', timestamp=0.743038548), 
#       ChordChange(chord='Am7b5', timestamp=8.54494331),...]