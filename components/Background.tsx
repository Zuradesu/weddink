"use client";

import { motion } from "framer-motion";

type BackgroundProps = {
  type: "image" | "video";
  src: string;
  overlay?: number;
};

export default function Background({
  type,
  src,
  overlay = 0.3,
}: BackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#2c241d]">
      {type === "image" ? (
        <motion.img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      ) : (
        <motion.video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <source src={src} type="video/mp4" />
        </motion.video>
      )}

      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlay }}
      />

      <div className="absolute inset-0 bg-[#5b4630]/20 mix-blend-multiply" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(25,18,12,0.35)_100%)]" />
    </div>
  );
}