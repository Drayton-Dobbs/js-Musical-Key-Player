"use client";

import React from "react";

const MusicalDiv: React.FC<{ note: string }> = ({ note }) => {
  const playNote = () => {
    console.log("fucccck", note);
    const audioContext = new window.AudioContext();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine"; // You can try different waveforms like 'sine', 'square', 'sawtooth', 'triangle', etc.
    oscillator.frequency.setValueAtTime(
      noteToFrequency(note),
      audioContext.currentTime
    );
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5); // Adjust the duration (in seconds) as needed
  };

  const noteToFrequency = (note: string) => {
    const noteMap: { [key: string]: number } = {
      A4: 440,
      "A#4": 466.16,
      B4: 440,
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392,
      // Add more notes here if needed
    };
    return noteMap[note] || 0;
  };

  return (
    <div
      className="cursor-pointer w-full text-5xl p-4 rounded-sm hover:bg-yellow-300 bg-cyan-400 m-2 text-center"
      onClick={() => playNote()}
    >
      {note}
    </div>
  );
};

export default MusicalDiv;
