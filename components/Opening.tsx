"use client";

import { motion } from "framer-motion";

export default function Opening() {
  const handleOpenInvitation = () => {
    const section = document.getElementById("wedding-intro");

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      {/* =========================
          BACKGROUND
      ========================== */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/opening.png"
          alt="Wedding background"
          className="h-full w-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}
        />
      </motion.div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-md flex-col items-center justify-center px-6 pb-28 pt-16 text-center text-white">
        {/* The Wedding Of */}
        <motion.p
          className="text-[11px] uppercase tracking-[0.4em] text-white/90 sm:text-xs"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          The Wedding Of
        </motion.p>

        {/* Names */}
        <motion.h1
          className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Aryaduta{" "}
          <span className="mx-1 text-3xl italic text-white/80">
            &
          </span>{" "}
          Varisa
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          className="mt-6 h-px bg-white/60"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 48,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.4,
          }}
        />

        {/* =========================
            GUEST
        ========================== */}
        <motion.div
          className="mt-10"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-sm text-white/75">
            Kepada Yth.
          </p>

          <p className="mt-2 text-sm text-white/90">
            Bapak/Ibu/Saudara/i
          </p>

          <motion.h2
            className="mt-3 text-xl font-medium tracking-wide"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.8,
            }}
          >
            Tamu Undangan
          </motion.h2>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="mt-5 max-w-xs text-[11px] italic leading-relaxed text-white/60"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 2,
          }}
        >
          Mohon maaf jika ada kesalahan dalam
          <br />
          penulisan nama / gelar.
        </motion.p>

        {/* =========================
            OPEN INVITATION BUTTON
        ========================== */}
        <motion.button
          type="button"
          onClick={handleOpenInvitation}
          className="
            mt-9
            min-h-12
            rounded-full
            border
            border-white/40
            bg-white/10
            px-8
            py-3
            text-xs
            uppercase
            tracking-[0.22em]
            text-white
            backdrop-blur-md
            transition-all
            duration-500
            hover:bg-white
            hover:text-black
            active:scale-95
          "
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Buka Undangan
        </motion.button>
      </div>

      {/* =========================
          SCROLL HINT
          FIXED AT BOTTOM
      ========================== */}
      <motion.div
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          pointer-events-none
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2.8,
          duration: 1,
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
          Scroll
        </span>

        <motion.div
          className="h-7 w-px bg-white/40"
          animate={{
            scaleY: [0.5, 1, 0.5],
            opacity: [0.4, 1, 0.4],
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