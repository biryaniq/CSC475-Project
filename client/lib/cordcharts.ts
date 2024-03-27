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
      [3, 2],
      [4, 2],
      [2, 2]
    ],
    "barres": [
    ]
  },
  "B": {
    "fingers": [
      [3, 4],
      [4, 4],
      [2, 4]
    ],
    "barres": [
      {
        "fromString": 5,
        "toString": 1,
        "fret": 2
      }
    ]
  },
  "C": {
    "fingers": [
      [2, 1],
      [4, 2],
      [5, 3]
    ],
    "barres": [
    ]
  },
  "D": {
    "fingers": [
      [1, 2],
      [2, 3],
      [3, 2]
    ],
    "barres": [
    ]
  },
  "E": {
    "fingers": [
      [5, 2],
      [4, 2],
      [3, 1]
    ],
    "barres": [
    ]
  },
  "F": {
    "fingers": [
      [5, 3],
      [4, 3],
      [3, 2]
    ],
    "barres": [
      {
        "fromString": 6,
        "toString": 1,
        "fret": 1
      }
    ]
  },
  "G": {
    "fingers": [
      [6, 3],
      [5, 2],
      [2, 3],
      [1, 3]
    ],
    "barres": [
    ]
  }
}

export const getChordChart = (chord: string) => {
  const chordchart: Chord = chordcharts[chord];
  return chordchart;
}