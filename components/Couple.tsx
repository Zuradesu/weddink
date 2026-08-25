"use client";

import { motion } from "framer-motion";

export default function Couple() {
  return (
    <section
      id="couple"
      className="relative min-h-[100svh] w-full overflow-hidden px-6 py-24 text-white"
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,190,0.12),transparent_60%)]" />

      {/* =====================================================
          DECORATIVE CIRCLES
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full border border-[#e0c89c]/10"
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
        className="pointer-events-none absolute -right-32 bottom-32 h-80 w-80 rounded-full border border-[#e0c89c]/10"
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
          SIDE DECORATION - LEFT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute left-0 top-28 z-[1] opacity-60"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="relative h-56 w-28">
          <div className="absolute left-8 top-0 h-52 w-px rotate-[28deg] bg-[#d8c29a]/40" />

          <span className="absolute left-0 top-8 rotate-[-35deg] text-5xl text-[#d8c29a]/50">
            ❧
          </span>

          <span className="absolute left-7 top-24 rotate-[-10deg] text-4xl text-[#c3aa7e]/50">
            ❧
          </span>

          <span className="absolute left-0 top-40 rotate-[-45deg] text-3xl text-[#e1cda5]/40">
            ❀
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          SIDE DECORATION - RIGHT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute right-0 top-44 z-[1] opacity-60"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <div className="relative h-56 w-28">
          <div className="absolute right-8 top-0 h-52 w-px rotate-[-28deg] bg-[#d8c29a]/40" />

          <span className="absolute right-0 top-8 rotate-[35deg] scale-x-[-1] text-5xl text-[#d8c29a]/50">
            ❧
          </span>

          <span className="absolute right-7 top-24 rotate-[10deg] scale-x-[-1] text-4xl text-[#c3aa7e]/50">
            ❧
          </span>

          <span className="absolute right-0 top-40 rotate-[45deg] text-3xl text-[#e1cda5]/40">
            ❀
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          HEADER ORNAMENT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto mb-7 flex max-w-xs items-center gap-4"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d8c29a]/60" />

        <span className="font-serif text-xl text-[#e2cda2]">
          ❦
        </span>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d8c29a]/60" />
      </motion.div>

      {/* =====================================================
          HEADING
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 text-center"
      >
        <p className="text-[9px] uppercase tracking-[0.45em] text-[#e1d1b3]/70">
          The Bride & Groom
        </p>

        <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#fff8eb] drop-shadow-lg">
          Our Beloved Couple
        </h2>
      </motion.div>

      {/* =====================================================
          BRIDE
      ====================================================== */}

      <motion.div
        className="relative z-10 mx-auto mt-14 flex max-w-md flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Decorative frame behind photo */}

        <div className="relative">

          {/* Outer decorative lines */}
          <div className="pointer-events-none absolute -inset-4 border border-[#d8c29a]/20" />

          <div className="pointer-events-none absolute -inset-2 border border-[#d8c29a]/10" />

          {/* Corner ornaments */}

          <span className="pointer-events-none absolute -left-7 -top-5 text-xl text-[#d8c29a]/70">
            ❧
          </span>

          <span className="pointer-events-none absolute -right-7 -top-5 scale-x-[-1] text-xl text-[#d8c29a]/70">
            ❧
          </span>

          <span className="pointer-events-none absolute -bottom-5 -left-6 rotate-[-25deg] text-lg text-[#d8c29a]/60">
            ❀
          </span>

          <span className="pointer-events-none absolute -bottom-5 -right-6 rotate-[25deg] text-lg text-[#d8c29a]/60">
            ❀
          </span>

          {/* Photo */}

          <div className="relative h-64 w-48 overflow-hidden border border-[#ead5ad]/45 bg-black/20 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
            <img
              src="/images/1.png"
              alt="Bride"
              className="h-full w-full object-cover"
            />

            {/* Image cinematic overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-[#fff2d0]/10" />
          </div>
        </div>

        {/* Name */}

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#d8c29a]/40" />

            <span className="text-xs text-[#e0c89c]/70">
              ✦
            </span>

            <div className="h-px w-8 bg-[#d8c29a]/40" />
          </div>

          <h3 className="font-serif text-3xl font-light text-[#fff8eb] drop-shadow-lg">
            Aryaduta
          </h3>

          <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#d8c29a]/80">
            The Bride
          </p>

          <p className="mt-4 text-xs leading-relaxed text-white/70 drop-shadow-md">
            Putri pertama dari
            <br />
            Bapak Nama Ayah & Ibu Nama Ibu
          </p>
        </div>
      </motion.div>

      {/* =====================================================
          CENTER AMPERSAND
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="relative z-10 my-12 flex items-center justify-center gap-5"
      >
        <div className="h-px w-12 bg-[#d8c29a]/30" />

        <span className="font-serif text-4xl italic text-[#e4d0a8]/80 drop-shadow-md">
          &
        </span>

        <div className="h-px w-12 bg-[#d8c29a]/30" />
      </motion.div>

      {/* =====================================================
          GROOM
      ====================================================== */}

      <motion.div
        className="relative z-10 mx-auto flex max-w-md flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative">

          {/* Outer frame */}

          <div className="pointer-events-none absolute -inset-4 border border-[#d8c29a]/20" />

          <div className="pointer-events-none absolute -inset-2 border border-[#d8c29a]/10" />

          {/* Corner ornaments */}

          <span className="pointer-events-none absolute -left-7 -top-5 text-xl text-[#d8c29a]/70">
            ❧
          </span>

          <span className="pointer-events-none absolute -right-7 -top-5 scale-x-[-1] text-xl text-[#d8c29a]/70">
            ❧
          </span>

          <span className="pointer-events-none absolute -bottom-5 -left-6 rotate-[-25deg] text-lg text-[#d8c29a]/60">
            ❀
          </span>

          <span className="pointer-events-none absolute -bottom-5 -right-6 rotate-[25deg] text-lg text-[#d8c29a]/60">
            ❀
          </span>

          {/* Photo */}

          <div className="relative h-64 w-48 overflow-hidden border border-[#ead5ad]/45 bg-black/20 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
            <img
              src="/images/2.jpeg"
              alt="Groom"
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-[#fff2d0]/10" />
          </div>
        </div>

        {/* Name */}

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#d8c29a]/40" />

            <span className="text-xs text-[#e0c89c]/70">
              ✦
            </span>

            <div className="h-px w-8 bg-[#d8c29a]/40" />
          </div>

          <h3 className="font-serif text-3xl font-light text-[#fff8eb] drop-shadow-lg">
            Varisa
          </h3>

          <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#d8c29a]/80">
            The Groom
          </p>

          <p className="mt-4 text-xs leading-relaxed text-white/70 drop-shadow-md">
            Putra pertama dari
            <br />
            Bapak Nama Ayah & Ibu Nama Ibu
          </p>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM ORNAMENT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="relative z-10 mx-auto mt-14 flex max-w-sm items-center justify-center gap-3"
      >
        <span className="text-2xl text-[#d8c29a]/60">
          ❧
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8c29a]/40 to-transparent" />

        <span className="text-lg text-[#e4d0a8]/70">
          ✦
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8c29a]/40 to-transparent" />

        <span className="scale-x-[-1] text-2xl text-[#d8c29a]/60">
          ❧
        </span>
      </motion.div>

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <motion.div
        className="relative z-10 mt-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/45">
          Scroll
        </span>

        <motion.div
          className="h-7 w-px bg-[#d8c29a]/45"
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