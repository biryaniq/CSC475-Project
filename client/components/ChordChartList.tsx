"use client";

import { getChordChart } from "@/lib/cordcharts";
import { useCallback, useLayoutEffect } from "react";
import { SVGuitarChord } from "svguitar";
import { debounce } from "lodash";

interface ChordChartListProps {
  chordsUsed: string[];
}

const ChordChartList = ({ chordsUsed }: ChordChartListProps) => {
  const setChordCharts = async (chordsUsed: string[]) => {
    let index = 0;
    for (const chord of chordsUsed) {
      const cordchart = getChordChart(chord);
      if (cordchart === undefined) {
        console.log(`No chord chart found for ${chord}`);
      }
      console.log("chart" + index, cordchart);
      try {
        new SVGuitarChord("#chart" + index++)
          .chord(cordchart)
          .configure({ tuning: ["E", "A", "D", "G", "B", "E"] })
          .draw();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const debouncedSetChordCharts = useCallback(
    debounce((chords: string[]) => setChordCharts(chords), 300),
    []
  );

  useLayoutEffect(() => {
    console.log(chordsUsed);
    if (!chordsUsed) return;
    debouncedSetChordCharts(chordsUsed);
  }, [chordsUsed]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {chordsUsed.map((chord, index) => (
        <div
          key={index}
          id={"chart" + index}
          style={{ maxWidth: "300px", flex: 1 }}
        ></div>
      ))}
    </div>
  );
};

export default ChordChartList;
