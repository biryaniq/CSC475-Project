export interface FingerOptions {
  text?: string
  color?: string
  textColor?: string
  strokeColor?: string
  strokeWidth?: number
  className?: string
}
export type SilentString = 'x'
export type OpenString = 0
export enum Shape {
  CIRCLE = 'circle',
  SQUARE = 'square',
  TRIANGLE = 'triangle',
  PENTAGON = 'pentagon',
}
export type Finger = [number, number | OpenString | SilentString, (string | FingerOptions)?]
export type Barre = {
  fromString: number
  toString: number
  fret: number
  text?: string
  shape?: Shape
  color?: string
  textColor?: string
  strokeWidth?: number
  strokeColor?: string
  className?: string
}
export type Chord = {
  /**
   * The fingers
   */
  fingers: Finger[]

  /**
   * The barre chords
   */
  barres: Barre[]
  /**
   * Position (defaults to 1). Can also be provided via {@link ChordSettings}.
   */
  position?: number
  /**
   * Title of the chart. Can also be provided via {@link ChordSettings}.
   */
  title?: string
}

interface ChordCharts {
  [key: string]: Chord
}

const chordcharts: ChordCharts = {
  "A": {
    "fingers": [
      [1, 0],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 0]
    ],
    "barres": [
    ],
    title: "A major"
  },
  "B": {
    "fingers": [
      [2, 4],
      [3, 4],
      [4, 4],
    ],
    "barres": [
      {
        "fromString": 5,
        "toString": 1,
        "fret": 2
      }
    ],
    title: "B major"

  },
  "C": {
    "fingers": [
      [1, 0],
      [2, 1],
      [3, 0],
      [4, 2],
      [5, 3]
    ],
    "barres": [
    ],
    title: "C major"

  },
  "D": {
    "fingers": [
      [1, 2],
      [2, 3],
      [3, 2],
      [4, 0]
    ],
    "barres": [
    ],
    title: "D major"

  },
  "E": {
    "fingers": [
      [1, 0],
      [2, 0],
      [3, 1],
      [4, 2],
      [5, 2],
      [6, 0]
    ],
    "barres": [
    ],
    title: "E major"

  },
  "F": {
    "fingers": [
      [3, 2],
      [4, 3],
      [5, 3]
    ],
    "barres": [
      {
        "fromString": 6,
        "toString": 1,
        "fret": 1
      }
    ],
    title: "F major"
  },
  "G": {
    "fingers": [
      [1, 3],
      [2, 3],
      [3, 0],
      [4, 0],
      [5, 2],
      [6, 3]
    ],
    "barres": [
    ],
    title: "G major"
  },

  // Minor Chords
  "Am": {
    "fingers": [
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 2],
      [5, 0]
    ],
    "barres": [
    ],
    title: "A minor"
  },
  "Bm": {
    "fingers": [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 4],
      [5, 2]
    ],
    "barres": [
      {
        "fromString": 5,
        "toString": 1,
        "fret": 2
      }
    ],
    title: "B minor"
  },
  "Cm": {
    "fingers": [
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 5],
      [5, 3]
    ],
    "barres": [
    ],
    title: "C minor"
  },
  "Dm": {
    "fingers": [
      [1, 1],
      [2, 3],
      [3, 2],
      [4, 0]
    ],
    "barres": [
    ],
    title: "D minor"
  },
  "Em": {
    "fingers": [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 2],
      [5, 2],
      [6, 0],

    ],
    "barres": [
    ]
  },
  "Fm": {
    "fingers": [
      [4, 3],
      [5, 3]
    ],
    "barres": [
      {
        "fromString": 6,
        "toString": 1,
        "fret": 1
      }
    ],
    title: "F minor"
  },
  "Gm": {
    "fingers": [
      [4, 5],
      [5, 5]
    ],
    "barres": [
      {
        "fromString": 6,
        "toString": 1,
        "fret": 3
      }
    ],
    title: "G minor"
  }

    // Minor accidentals Chords
  "A#m": {
    "fingers": [
      [2, 2],
      [3, 3],
      [4, 3],
    ],
    "barres": [
      "fromString" : 6,
      "toString": 1, 
      "fret": 1
    ],
    title: "A# minor (Bb minor)"
  },

// for B#m, just show Cm chord
  
  "B#m": {
    "fingers": [
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 5],
      [5, 3]
    ],
    "barres": [
    ],
    title: "B# minor (C minor)"
  },

  "C#m": {
    "fingers": [
      [2, 5],
      [3, 6],
      [4, 6],
    ],
    "barres": [
      "fromString" : 5,
      "toString": 1, 
      "fret": 4
    ],
    title: "C# minor (Db minor)"
  },
  "D#m": {
    "fingers": [
      [1, 2],
      [2, 4],
      [3, 3],
      [4, 1]
    ],
    "barres": [
    ],
    title: "D# minor (Eb minor)"
  },

  // return Fm for E#m 
  "E#m": {
    "fingers": [
      [4, 3],
      [5, 3]
    ],
    "barres": [
      {
        "fromString": 6,
        "toString": 1,
        "fret": 1
      }
    ],
    title: "E# minor (F minor)"
  },

  "F#m": {
    "fingers": [ 
      [4, 4],
      [5, 4]
    ],
    "barres": [
      "fromString": 5,
      "toString": 1,
      "fret": 2
    ],
    title: "F# minor (Gb minor)"
  },

  "G#m": {
    "fingers": [
      [4, 6],
      [5, 6]
    ],
    "barres": [
      {
        "fromString": 6,
        "toString": 1,
        "fret": 4
      }
    ],
    title: "G# minor"
  }


}

export const getChordChart = (chord: string) => {
  const chordchart: Chord = chordcharts[chord];
  return chordchart;
}
