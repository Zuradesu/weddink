"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/laguu.mp3");

    audio.loop = true;
    audio.volume = 0.45;

    audioRef.current = audio;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // 🔊 TERIMA PERINTAH PLAY DARI OPENING
    const handleStartMusic = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Audio gagal diputar:", error);
      }
    };

    window.addEventListener(
      "start-wedding-music",
      handleStartMusic
    );

    return () => {
      audio.pause();

      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);

      window.removeEventListener(
        "start-wedding-music",
        handleStartMusic
      );
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("Audio gagal diputar:", error);
      }
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <motion.button
      type="button"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      className="
        fixed
        right-5
        top-5
        z-[9999]
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-[#d8c29a]/40
        bg-black/30
        text-[#ead9b8]
        shadow-lg
        backdrop-blur-md
      "
      animate={{
        rotate: isPlaying ? 360 : 0,
      }}
      transition={{
        duration: 8,
        repeat: isPlaying ? Infinity : 0,
        ease: "linear",
      }}
    >
      <span className="text-lg">
        {isPlaying ? "♫" : "♪"}
      </span>
    </motion.button>
  );
}