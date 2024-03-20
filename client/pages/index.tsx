import Head from "next/head";
import { analyzeFile } from "@/utils/apiUtils";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const [chordsUsed, setChordsUsed] = useState<string[] | undefined>(undefined);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (file) {
      analyzeFileMutation();
    }
  }, [file]);

  const { mutate: analyzeFileMutation } = useMutation(
    async () => analyzeFile(file),
    {
      onSuccess: (response: any) => {
        console.log(response);
        setChordsUsed(response.chordsUsed);
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
        <input type="file" accept=".mp3" onChange={handleFileChange} />
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
