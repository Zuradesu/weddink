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
    <div className="flex min-w-[60px] flex-col items-center">
      <span className="font-serif text-3xl font-light text-[#fff8eb] sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#d8c29a]/60">
        {label}
      </span>
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
      className="relative min-h-[100svh] w-full overflow-hidden px-6 py-24 text-white"
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,200,155,0.10),transparent_60%)]" />

      {/* =====================================================
          DECORATIVE CIRCLES
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-36 top-24 h-72 w-72 rounded-full border border-[#d8c29a]/10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-36 bottom-20 h-80 w-80 rounded-full border border-[#d8c29a]/10"
        animate={{
          y: [0, -18, 0],
          rotate: [0, -4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SIDE ORNAMENT - LEFT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute left-0 top-32 opacity-60"
        initial={{
          opacity: 0,
          x: -15,
        }}
        whileInView={{
          opacity: 0.6,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="relative h-64 w-24">
          <span className="absolute left-1 top-5 rotate-[-30deg] text-5xl text-[#d8c29a]/35">
            ❧
          </span>

          <span className="absolute left-6 top-24 rotate-[-15deg] text-3xl text-[#d8c29a]/30">
            ❀
          </span>

          <span className="absolute left-1 top-40 rotate-[-40deg] text-2xl text-[#d8c29a]/30">
            ❧
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          SIDE ORNAMENT - RIGHT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute right-0 top-56 opacity-60"
        initial={{
          opacity: 0,
          x: 15,
        }}
        whileInView={{
          opacity: 0.6,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
        }}
      >
        <div className="relative h-64 w-24">
          <span className="absolute right-1 top-5 rotate-[30deg] scale-x-[-1] text-5xl text-[#d8c29a]/35">
            ❧
          </span>

          <span className="absolute right-6 top-24 rotate-[15deg] text-3xl text-[#d8c29a]/30">
            ❀
          </span>

          <span className="absolute right-1 top-40 rotate-[40deg] text-2xl text-[#d8c29a]/30">
            ❧
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center text-center">
        {/* =====================================================
            TOP ORNAMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -15,
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
          className="flex items-center gap-4"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d8c29a]/50" />

          <span className="font-serif text-xl text-[#e2cda2]">
            ❦
          </span>

          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d8c29a]/50" />
        </motion.div>

        {/* =====================================================
            HEADING
        ====================================================== */}

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
            duration: 0.9,
          }}
          className="mt-7"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#d8c29a]/70">
            Save The Date
          </p>

          <h2 className="mt-4 font-serif text-[2.65rem] font-light tracking-wide text-[#fff8eb] drop-shadow-lg sm:text-5xl">
            Our Special Day
          </h2>
        </motion.div>

        {/* =====================================================
            DATE
        ====================================================== */}

        <motion.div
          className="mt-12"
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
            delay: 0.15,
          }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#d8c29a]/70">
            Friday
          </p>

          <div className="mt-3 flex items-center justify-center gap-5">
            <div className="h-px w-12 bg-[#d8c29a]/40" />

            <span className="font-serif text-[5.5rem] font-light leading-none text-[#fff8eb] sm:text-8xl">
              18
            </span>

            <div className="h-px w-12 bg-[#d8c29a]/40" />
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-[#d8c29a]/70">
            September 2026
          </p>
        </motion.div>

        {/* =====================================================
            COUNTDOWN
        ====================================================== */}

        <motion.div
          className="mt-12 flex items-center justify-center gap-2"
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
            delay: 0.3,
          }}
        >
          <TimeBox
            value={timeLeft.days}
            label="Days"
          />

          <span className="mb-5 text-lg text-[#d8c29a]/40">
            :
          </span>

          <TimeBox
            value={timeLeft.hours}
            label="Hours"
          />

          <span className="mb-5 text-lg text-[#d8c29a]/40">
            :
          </span>

          <TimeBox
            value={timeLeft.minutes}
            label="Minutes"
          />

          <span className="mb-5 text-lg text-[#d8c29a]/40">
            :
          </span>

          <TimeBox
            value={timeLeft.seconds}
            label="Seconds"
          />
        </motion.div>

        {/* =====================================================
            ORNAMENT DIVIDER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="my-12 flex w-full max-w-xs items-center gap-3"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d8c29a]/30" />

          <span className="text-sm text-[#d8c29a]/70">
            ✦
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d8c29a]/30" />
        </motion.div>

        {/* =====================================================
            EVENTS
        ====================================================== */}

        <div className="w-full space-y-10">
          {/* =================================================
              AKAD
          ================================================= */}

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
              duration: 0.9,
            }}
            className="relative"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#d8c29a]/30" />

              <span className="text-sm text-[#d8c29a]/70">
                ❦
              </span>

              <div className="h-px w-10 bg-[#d8c29a]/30" />
            </div>

            <p className="text-[11px] uppercase tracking-[0.4em] text-[#d8c29a]/70">
              Akad Nikah
            </p>

            <h3 className="mt-3 font-serif text-4xl font-light text-[#fff8eb]">
              08.00 WIB
            </h3>

            <div className="mx-auto mt-4 h-px w-10 bg-[#d8c29a]/30" />

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Di kediaman mempelai wanita
            </p>
          </motion.div>

          {/* =================================================
              RESEPSI
          ================================================= */}

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
              duration: 0.9,
              delay: 0.15,
            }}
            className="relative"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#d8c29a]/30" />

              <span className="text-sm text-[#d8c29a]/70">
                ❦
              </span>

              <div className="h-px w-10 bg-[#d8c29a]/30" />
            </div>

            <p className="text-[11px] uppercase tracking-[0.4em] text-[#d8c29a]/70">
              Resepsi
            </p>

            <h3 className="mt-3 font-serif text-4xl font-light text-[#fff8eb]">
              11.00 WIB
            </h3>

            <div className="mx-auto mt-4 h-px w-10 bg-[#d8c29a]/30" />

            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Perumahan Graha Puntadewa Blok D2/17
              <br />
              Pakisjajar, Pakis
              <br />
              Kab. Malang, Jawa Timur
              <br />
              65154
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MAP BUTTON
        ====================================================== */}

        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Perumahan+Graha+Puntadewa+Blok+D2%2F17+Pakisjajar+Pakis+Malang"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 flex items-center gap-3 border border-[#d8c29a]/40 px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] text-[#ead9b8] transition-all duration-300 hover:bg-[#d8c29a] hover:text-[#211b16]"
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
          <span>View Location</span>

          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </motion.a>
      </div>

      {/* =====================================================
          BOTTOM ORNAMENT
      ====================================================== */}

      <motion.div
        className="relative z-10 mx-auto mt-16 flex max-w-xs items-center justify-center gap-3"
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
          delay: 0.5,
        }}
      >
        <span className="text-2xl text-[#d8c29a]/50">
          ❧
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8c29a]/30 to-transparent" />

        <span className="text-base text-[#d8c29a]/60">
          ✦
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8c29a]/30 to-transparent" />

        <span className="scale-x-[-1] text-2xl text-[#d8c29a]/50">
          ❧
        </span>
      </motion.div>

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <motion.div
        className="relative z-10 mt-10 flex flex-col items-center gap-2"
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
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
          Scroll
        </span>

        <motion.div
          className="h-7 w-px bg-[#d8c29a]/40"
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