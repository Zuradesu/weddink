"use client";

import { motion } from "framer-motion";

export default function Quote() {
return ( <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#d8c29a] px-6 text-white">

```
  {/* =====================================================
      BACKGROUND IMAGE
  ====================================================== */}

  <motion.div
    className="absolute inset-0"
    initial={{ scale: 1.05 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/quote-bg.png')",
      }}
    />
  </motion.div>


  {/* =====================================================
      WARM OVERLAY
  ====================================================== */}

  {/* Soft cream overlay */}
  <div className="absolute inset-0 bg-[#5b4630]/25" />

  {/* Darker center overlay for text readability */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(65,45,25,0.48),rgba(65,45,25,0.12)_45%,rgba(30,20,12,0.38)_100%)]" />

  {/* Bottom atmospheric fade */}
  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#3b291b]/55 to-transparent" />


  {/* =====================================================
      SUBTLE MOVING LIGHT
  ====================================================== */}

  <motion.div
    className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
    animate={{
      scale: [1, 1.04, 1],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-white/10"
    animate={{
      y: [0, 15, 0],
      rotate: [0, 4, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="absolute -right-32 bottom-24 h-80 w-80 rounded-full border border-white/10"
    animate={{
      y: [0, -18, 0],
      rotate: [0, -4, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />


  {/* =====================================================
      CONTENT
  ====================================================== */}

  <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">

    {/* TOP ORNAMENT */}

    <motion.div
      initial={{
        opacity: 0,
        y: -15,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-8 flex items-center gap-4"
    >
      <div className="h-px w-12 bg-[#f5e7c8]/60" />

      <span className="text-xl text-[#f5e7c8]">
        ❦
      </span>

      <div className="h-px w-12 bg-[#f5e7c8]/60" />
    </motion.div>


    {/* SMALL INTRO */}

    <motion.p
      initial={{
        opacity: 0,
        y: 10,
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
      className="mb-6 text-[9px] uppercase tracking-[0.45em] text-[#f8ecd2]/75"
    >
      Sebuah kisah tentang cinta
    </motion.p>


    {/* QUOTE */}

    <motion.blockquote
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="font-serif text-[22px] font-light leading-[1.75] text-[#fffaf0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-3xl"
    >
      “Dan di antara tanda-tanda
      <br />
      kekuasaan-Nya ialah Dia
      <br />
      menciptakan untukmu
      <br />
      pasangan hidup...”
    </motion.blockquote>


    {/* SOURCE */}

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
        delay: 0.45,
      }}
      className="mt-8 text-[10px] uppercase tracking-[0.38em] text-[#f5e7c8]/80"
    >
      Q.S. Ar-Rum : 21
    </motion.p>


    {/* BOTTOM ORNAMENT */}

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
        duration: 0.9,
        delay: 0.7,
      }}
      className="mt-8 flex items-center gap-3"
    >
      <div className="h-px w-10 bg-[#f5e7c8]/50" />

      <span className="text-sm text-[#f5e7c8]/80">
        ✦
      </span>

      <div className="h-px w-10 bg-[#f5e7c8]/50" />
    </motion.div>

  </div>


  {/* =====================================================
      SCROLL INDICATOR
  ====================================================== */}

  <motion.div
    className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
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
    <span className="text-[8px] uppercase tracking-[0.4em] text-white/60">
      Scroll
    </span>

    <motion.div
      className="h-7 w-px bg-[#f5e7c8]/60"
      animate={{
        scaleY: [0.4, 1, 0.4],
        opacity: [0.3, 0.9, 0.3],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.div>

</section>
)};