import re

def chordino_output_to_chord_array(chordino_output):
  chord_array = []
  
  pattern = r"chord='(.*?)'"
  matches = re.findall(pattern, chordino_output)
  
  for match in matches:
    chord_array.append(match)
  
  return chord_array