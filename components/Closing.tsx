"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section
      id="closing"
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-20
        text-[#4b3b2a]
      "
    >
      {/* =====================================================
          SOFT OVERLAY
          Background motion/video tetap terlihat
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[#3d2b1c]/10" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-[#fff8eb]/10
          to-black/20
        "
      />

      {/* =====================================================
          DECORATIVE LIGHT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-64
          w-64
          rounded-full
          border
          border-[#e6c88b]/20
        "
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
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-1/4
          h-72
          w-72
          rounded-full
          border
          border-[#e6c88b]/20
        "
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

      {/* =====================================================
          MAIN FRAME
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-[32px]
          border
          border-[#b58a45]/50
          bg-[#fffaf0]/[0.82]
          px-7
          py-14
          shadow-[0_15px_60px_rgba(50,35,20,0.20)]
          backdrop-blur-[3px]
          sm:px-10
        "
      >
        {/* =================================================
            INNER FRAME
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-2
            rounded-[28px]
            border
            border-[#b58a45]/15
          "
        />

        {/* =================================================
            DECORATIVE CORNERS
        ================================================== */}

        <div className="pointer-events-none absolute left-5 top-5 h-10 w-10 border-l border-t border-[#b58a45]/40" />

        <div className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-[#b58a45]/40" />

        <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-b border-l border-[#b58a45]/40" />

        <div className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 border-b border-r border-[#b58a45]/40" />

        {/* =================================================
            TOP ORNAMENT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
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
          className="relative z-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-[#a47d43]/45" />

          <span className="font-serif text-xl text-[#a47d43]">
            ❦
          </span>

          <span className="h-px w-10 bg-[#a47d43]/45" />
        </motion.div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Small heading */}

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
              delay: 0.15,
            }}
            className="
              mt-8
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-[#92734b]
            "
          >
            Sampai Jumpa di Hari Bahagia
          </motion.p>

          {/* Main title */}

          <motion.h2
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
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              font-serif
              text-4xl
              font-light
              text-[#463628]
              sm:text-5xl
            "
          >
            Terima Kasih
          </motion.h2>

          {/* Divider */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 55,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="mt-5 h-px bg-[#b58a45]/60"
          />

          {/* Thank you text */}

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
            className="
              mt-7
              max-w-[280px]
              text-xs
              leading-[1.9]
              text-[#685542]
            "
          >
            Atas doa, kasih sayang, dan kehadiran
            <br />
            Bapak/Ibu/Saudara/i dalam
            <br />
            hari bahagia kami.
          </motion.p>

          {/* =================================================
              COUPLE NAME
          ================================================== */}

          <motion.div
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
              delay: 0.65,
            }}
            className="mt-10"
          >
            <h3 className="font-serif text-4xl font-light text-[#443528]">
              Aryaduta
            </h3>

            <div className="my-2 font-serif text-2xl italic text-[#a47d43]">
              &
            </div>

            <h3 className="font-serif text-4xl font-light text-[#443528]">
              Varisa
            </h3>
          </motion.div>

          {/* Date */}

          <motion.div
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
              delay: 0.8,
            }}
            className="mt-6"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b58a45]/40" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#806544]">
                20 September 2026
              </p>

              <span className="h-px w-8 bg-[#b58a45]/40" />
            </div>
          </motion.div>

          {/* =================================================
              QUOTE
          ================================================== */}

          <motion.div
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
              delay: 0.95,
            }}
            className="mt-10 max-w-[285px]"
          >
            <span className="font-serif text-xl text-[#a47d43]">
              “
            </span>

            <p className="font-serif text-sm italic leading-relaxed text-[#685542]">
              Semoga langkah kecil kami menjadi awal
              dari perjalanan panjang yang penuh
              cinta, keberkahan, dan kebahagiaan.
            </p>

            <span className="font-serif text-xl text-[#a47d43]">
              ”
            </span>
          </motion.div>

          {/* =================================================
              BOTTOM ORNAMENT
          ================================================== */}

          <motion.div
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
              delay: 1.1,
            }}
            className="mt-10 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-[#b58a45]/40" />

            <span className="font-serif text-lg text-[#a47d43]">
              ❧
            </span>

            <span className="h-px w-12 bg-[#b58a45]/40" />
          </motion.div>

          {/* Islamic closing */}

          <motion.div
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
              delay: 1.2,
            }}
            className="mt-8"
          >
            <p className="font-serif text-sm text-[#554332]">
              Wassalamu'alaikum
            </p>

            <p className="mt-1 font-serif text-sm text-[#554332]">
              Warahmatullahi Wabarakatuh
            </p>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM SMALL ORNAMENT
        ================================================== */}

        <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-[10px] text-[#b58a45]/50">
            ❦
          </span>
        </div>
      </motion.div>
    </section>
  );
}