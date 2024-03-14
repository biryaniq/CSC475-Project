import Head from "next/head";
import { analyzeFile } from "@/utils/apiUtils";
import { useMutation } from "react-query";
import { useState } from "react";

export default function Home() {
  const [chordsUsed, setChordsUsed] = useState<string[] | undefined>(undefined);

  const { mutate: analyzeFileMutation } = useMutation(
    async () => analyzeFile(/*File*/),
    {
      onSuccess: (data: any) => {
        console.log(data);
        setChordsUsed(data.chords);
      },
      onError: (error: any) => {
        console.error(error);
      },
    }
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={() => analyzeFileMutation()}>upload music!</button>
        <div>
          {chordsUsed && (
            <div>
              <h2>Chords used:</h2>
              <ul>
                {chordsUsed.map((chord) => (
                  <li key={chord}>{chord}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
