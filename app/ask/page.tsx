"use client";
import { useState, useEffect, useRef } from "react";

export default function AskPage() {
  const [yesClicked, setYesClicked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const compliments = [
    "Ur cute",
    "Ur sweet",
    "Ur handsome",
    "Ur smart",
    "Ur kind",
    "Ur caring",
    "Ur loyal",
    "Ur listener (everything I say u listen without judging)",
    "Ur supporter",
    "In 1 word ur THE BEST"
  ];

  const handleYes = () => {
    setYesClicked(true);
    const sound = new Audio("/yes.mp3");
    sound.play();
  };

  const playMusic = () => audioRef.current?.play();

  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = "24px";
      heart.style.animation = "float 4s linear";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={playMusic}
      className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center p-4"
    >
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {!yesClicked ? (
        <>
          <h1 className="text-4xl font-bold mb-6">
            Will you be my Valentine? 💖
          </h1>
          <div className="space-x-4">
            <button
              onClick={handleYes}
              className="bg-pink-500 text-white px-6 py-2 rounded-xl text-lg"
            >
              Yes 💕
            </button>
            <button className="bg-gray-300 px-6 py-2 rounded-xl text-lg">
              No 😢
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-3">
          {compliments.map((c, i) => (
            <h1
              key={i}
              className="text-3xl font-bold text-red-500 animate-fade-in"
              style={{ animationDelay: `${i * 0.5}s`, animationFillMode: "forwards" }}
            >
              {c}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
}
