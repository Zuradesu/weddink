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
      <div className="font-serif text-2xl font-light sm:text-3xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/40">
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
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#17130f] px-6 py-20 text-white"
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* Decorative lines */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.025]" />

      <motion.div
        className="absolute -left-32 top-20 h-64 w-64 rounded-full border border-white/[0.035]"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-32 bottom-20 h-72 w-72 rounded-full border border-white/[0.035]"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center text-center">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/45">
            Save The Date
          </p>

          <h2 className="mt-4 font-serif text-4xl font-light">
            Our Special Day
          </h2>
        </motion.div>

        {/* =========================
            DATE
        ========================== */}

        <motion.div
          className="mt-10"
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
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Sunday
          </p>

          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-white/20" />

            <span className="font-serif text-5xl font-light">
              20
            </span>

            <span className="h-px w-8 bg-white/20" />
          </div>

          <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/60">
            September 2026
          </p>
        </motion.div>

        {/* =========================
            COUNTDOWN
        ========================== */}

        <motion.div
          className="mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"
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

          <span className="text-white/20">:</span>

          <TimeBox
            value={timeLeft.hours}
            label="Hours"
          />

          <span className="text-white/20">:</span>

          <TimeBox
            value={timeLeft.minutes}
            label="Minutes"
          />

          <span className="text-white/20">:</span>

          <TimeBox
            value={timeLeft.seconds}
            label="Seconds"
          />
        </motion.div>

        {/* =========================
            DIVIDER
        ========================== */}

        <motion.div
          className="my-12 h-px w-16 bg-white/20"
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 64,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
        />

        {/* =========================
            EVENTS
        ========================== */}

        <div className="grid w-full gap-5">
          {/* AKAD */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-7 backdrop-blur-sm"
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
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/40">
              Akad Nikah
            </p>

            <h3 className="mt-3 font-serif text-2xl font-light">
              08.00 WIB
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-white/50">
              di kediaman mempelai wanita 
              <br />
            </p>
          </motion.div>

          {/* RESEPSI */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-7 backdrop-blur-sm"
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
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/40">
              Resepsi
            </p>

            <h3 className="mt-3 font-serif text-2xl font-light">
              11.00 WIB
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-white/50">
                Perumahan Graha Puntadewa Blok D2/17 
                <br />
                 Pakisjajar, Pakis, Kab. Malang, Jawa Timur, 65154
            </p>
          </motion.div>
        </div>

        {/* =========================
            MAP BUTTON
        ========================== */}

        <motion.a
          href="#"
          className="mt-7 rounded-full border border-white/25 px-7 py-3 text-[10px] uppercase tracking-[0.25em] text-white/80 transition-all duration-300 hover:bg-white hover:text-black"
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.3,
          }}
        >
          Google Maps
        </motion.a>
      </div>

      {/* =========================
          SCROLL
      ========================== */}

      <motion.div
        className="relative z-10 mt-14 flex flex-col items-center gap-2"
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
          delay: 0.8,
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Scroll
        </span>

        <motion.div
          className="h-7 w-px bg-white/20"
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
    </section>
  );
}