"use client";
import NoteContainer from "../app/components/NoteContainer";
import { useEffect, useState } from "react";

export default function Home() {
  const [key, setKey] = useState("C Major");
  const [notes, setNotes] = useState([
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
  ]);

  const renderNotes = (notes: any) => {
    console.log("rerndering now", notes);
    return notes.map((note: string) => {
      return <NoteContainer note={note} />;
    });
  };

  useEffect(() => {
    // @ts-ignore
    console.log(key);
    // @ts-ignore
    setNotes(key.notes);
  }, [key]);

  const keys = [
    {
      key: "C Major",
      notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
    },
    {
      key: "A minor",
      notes: ["A4", "B4", "C4", "D4", "E4", "F4", "G4"],
    },
  ];

  return (
    <main className="flex flex-col w-full h-full">
      <div className="flex flex-col bg-slate-300 w-full">
        <div className="pl-4 pt-2 text-2xl text-center">Key:</div>
        <div className="flex flex-wrap w-full">
          {keys
            ? keys.map((key: object) => {
                return (
                  <div
                    // @ts-ignore
                    onClick={() => setKey(key)}
                    className="cursor-pointer p-4 hover:bg-red-400 w-1/2 text-center text-md"
                  >
                    {/* @ts-ignore */}
                    {key.key}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className="p-4 flex justify-around">
        {notes ? renderNotes(notes) : ""}
      </div>
    </main>
  );
}
