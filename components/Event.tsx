"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date("2026-09-18T08:00:00+07:00");

function getTimeLeft() {
  const difference = weddingDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex min-w-[58px] flex-col items-center">
      <div className="font-serif text-2xl font-light text-white sm:text-3xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/50">
        {label}
      </div>
    </div>
  );
}

export default function Event() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="event"
      className="relative w-full overflow-hidden bg-transparent text-white"
    >
      {/* =====================================================
          DARK OVERLAY
          Membuat video/background motion lebih gelap
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-black/45" />

      {/* =====================================================
          SOFT VIGNETTE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.25)_100%)]" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-3 py-20">

        {/* =====================================================
            SAVE THE DATE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
            Save The Date
          </p>

          <h2 className="mt-4 font-serif text-4xl font-light text-white drop-shadow-lg">
            Our Special Day
          </h2>
        </motion.div>

        {/* =====================================================
            DATE
        ====================================================== */}

        <motion.div
          className="mt-10 text-center"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Friday
          </p>

          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-white/30" />

            <span className="font-serif text-6xl font-light text-white drop-shadow-lg">
              18
            </span>

            <span className="h-px w-8 bg-white/30" />
          </div>

          <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/70">
            September 2026
          </p>
        </motion.div>

        {/* =====================================================
            COUNTDOWN
        ====================================================== */}

        <motion.div
          className="mt-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-4 backdrop-blur-md"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <TimeBox
            value={timeLeft.days}
            label="Days"
          />

          <span className="text-white/30">:</span>

          <TimeBox
            value={timeLeft.hours}
            label="Hours"
          />

          <span className="text-white/30">:</span>

          <TimeBox
            value={timeLeft.minutes}
            label="Minutes"
          />

          <span className="text-white/30">:</span>

          <TimeBox
            value={timeLeft.seconds}
            label="Seconds"
          />
        </motion.div>

        {/* =====================================================
            ORNAMENT
        ====================================================== */}

        <motion.div
          className="my-16 flex items-center gap-4"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="h-px w-10 bg-white/30" />

          <span className="font-serif text-xl text-white/70">
            ❦
          </span>

          <div className="h-px w-10 bg-white/30" />
        </motion.div>

        {/* =====================================================
            AKAD NIKAH
        ====================================================== */}

        <motion.div
          className="relative w-full"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* FRAME AKAD */}

          <img
            src="/images/sigma.PNG"
            alt="Frame Akad Nikah"
            className="block w-[98%] mx-auto object-contain rounded-[16px]"
          />

          {/* =================================================
              CONTENT AKAD
          ================================================= */}

          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">

            <p className="font-serif text-xl tracking-wide text-[#5b4935] sm:text-2xl pt-10">
              AKAD NIKAH
            </p>

            <div className="mt-4 h-px w-24 bg-[#806747]/50" />

            <p className="mt-8 font-serif text-3xl italic text-[#806747] sm:text-4xl">
              Jum'at
            </p>

            <p className="mt-1 font-serif text-6xl leading-none text-[#8b7048] sm:text-7xl">
              18
            </p>

            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#66533b] sm:text-xs">
              September 2026
            </p>

            <div className="mt-6 flex items-center gap-2 text-[#66533b]">
              <span className="text-sm">
                ◷
              </span>

              <span className="text-sm font-medium">
                08.00 WIB
              </span>
            </div>

            <p className="mt-7 font-serif text-lg text-[#5b4935] sm:text-xl">
              Akad Nikah
            </p>

            <p className="mt-2 max-w-[230px] text-[10px] leading-relaxed text-[#75634d] sm:text-xs">
              Di kediaman mempelai wanita
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SEPARATOR
        ====================================================== */}

        <motion.div
          className="my-20 flex flex-col items-center"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="font-serif text-2xl text-white/70">
            ✦
          </span>

          <div className="mt-3 h-10 w-px bg-white/20" />

          <span className="mt-3 font-serif text-lg text-white/60">
            ❦
          </span>
        </motion.div>

        {/* =====================================================
            RESEPSI
        ====================================================== */}

        <motion.div
          className="relative w-full"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* FRAME RESEPSI */}

          <img
            src="/images/sigma.PNG"
            alt="Frame Resepsi"
            className="block w-[94%] mx-auto object-contain rounded-[16px]"
          />

          {/* =================================================
              CONTENT RESEPSI
          ================================================= */}

          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">

            <p className="font-serif text-xl tracking-wide text-[#5b4935] sm:text-2xl pt-12">
              RESEPSI
            </p>

            <div className="mt-2 h-px w-24 bg-[#806747]/50" />

            <p className="mt-3 font-serif text-3xl italic text-[#806747] sm:text-4xl">
              Minggu
            </p>

            <p className="mt-1 font-serif text-6xl leading-none text-[#8b7048] sm:text-7xl">
              20
            </p>

            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#66533b] sm:text-xs">
              September 2026
            </p>

            <div className="mt-2 flex items-center gap-2 text-[#66533b]">
              <span className="text-sm">
                ◷
              </span>

              <span className="text-sm font-medium">
                11.00 WIB - Selesai
              </span>
            </div>

            <p className="mt-2 font-serif text-lg text-[#5b4935] sm:text-xl">
              Lokasi Acara
            </p>

            <p className="mt-4 max-w-[235px] text-[8px] leading-relaxed text-[#75634d] sm:text-xs">
              Perumahan Graha Puntadewa Blok D2/12
              <br />
              Pakisjajar, Pakis
              <br />
              Kab. Malang, Jawa Timur
              <br />
              65154
            </p>

            {/* MAP BUTTON */}

            <a
              href="https://maps.app.goo.gl/at2vXLe7TBvCKqf6A"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-full border border-[#806747] bg-[#806747]/10 px-5 py-2 text-[9px] uppercase tracking-[0.2em] text-[#5d4932] transition-all duration-300 hover:bg-[#806747] hover:text-white"
            >
              📍 Google Maps
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM ORNAMENT
        ====================================================== */}

        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="h-px w-10 bg-white/30" />

          <span className="font-serif text-xl text-white/70">
            ✦
          </span>

          <div className="h-px w-10 bg-white/30" />
        </motion.div>

        {/* =====================================================
            SCROLL
        ====================================================== */}

        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
            Scroll
          </span>

          <motion.div
            className="h-7 w-px bg-white/30"
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}