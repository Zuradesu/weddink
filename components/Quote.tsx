"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#2c241d] px-6 text-white">
      {/* =========================
          BACKGROUND
      ========================== */}

      {/* Soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Decorative circles */}
      <motion.div
        className="absolute -left-24 top-20 h-64 w-64 rounded-full border border-white/5"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-24 bottom-20 h-72 w-72 rounded-full border border-white/5"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center text-center">
        {/* Ornament */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
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
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-10 bg-white/30" />

          <span className="font-serif text-lg text-white/70">
            ❦
          </span>

          <div className="h-px w-10 bg-white/30" />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
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
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-2xl font-light leading-relaxed text-white/95 sm:text-3xl"
        >
          “Dan di antara tanda-tanda
          <br />
          kekuasaan-Nya ialah Dia
          <br />
          menciptakan untukmu
          <br />
          pasangan hidup...”
        </motion.blockquote>

        {/* Source */}
        <motion.p
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
            delay: 0.5,
          }}
          className="mt-8 text-xs uppercase tracking-[0.3em] text-white/60"
        >
          Q.S. Ar-Rum : 21
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{
            opacity: 0,
            width: 0,
          }}
          whileInView={{
            opacity: 1,
            width: 48,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-8 h-px bg-white/30"
        />
      </div>

      {/* =========================
          SCROLL
      ========================== */}

      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
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
          delay: 1,
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
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
    </section>
  );
}