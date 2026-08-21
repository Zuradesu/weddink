"use client";

import { motion } from "framer-motion";

export default function Couple() {
  return (
    <section
      id="couple"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#211b16] px-6 py-20 text-white"
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* Decorative circles */}
      <motion.div
        className="absolute -left-32 top-40 h-72 w-72 rounded-full border border-white/[0.04]"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-32 bottom-40 h-72 w-72 rounded-full border border-white/[0.04]"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">
            The Bride & Groom
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light">
            Our Beloved Couple
          </h2>
        </motion.div>

        {/* =========================
            BRIDE
        ========================== */}

        <motion.div
          className="mt-14 flex w-full flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Photo */}
          <div className="relative">
            {/* Ornament */}
            <div className="absolute -inset-3 rounded-t-full border border-white/10" />

            <div className="relative h-56 w-44 overflow-hidden rounded-t-full bg-white/10 sm:h-64 sm:w-48">
              <img
                src="/images/1.png"
                alt="Bride"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="mt-7 font-serif text-3xl font-light">
            Aryaduta
          </h3>

          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
            The Bride
          </p>

          <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/60">
            Putri pertama dari
            <br />
            Bapak Nama Ayah & Ibu Nama Ibu
          </p>
        </motion.div>

        {/* =========================
            AMPERSAND
        ========================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="my-10 font-serif text-4xl italic text-white/60"
        >
          &
        </motion.div>

        {/* =========================
            GROOM
        ========================== */}

        <motion.div
          className="flex w-full flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Photo */}
          <div className="relative">
            {/* Ornament */}
            <div className="absolute -inset-3 rounded-t-full border border-white/10" />

            <div className="relative h-56 w-44 overflow-hidden rounded-t-full bg-white/10 sm:h-64 sm:w-48">
              <img
                src="/images/2.jpeg"
                alt="Groom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="mt-7 font-serif text-3xl font-light">
            Varisa
          </h3>

          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
            The Groom
          </p>

          <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/60">
            Putra pertama dari
            <br />
            Bapak Nama Ayah & Ibu Nama Ibu
          </p>
        </motion.div>
      </div>

      {/* =========================
          SCROLL
      ========================== */}

      <motion.div
        className="relative z-10 mt-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
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