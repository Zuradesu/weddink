"use client";

import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/3.png",
    alt: "Wedding moment 1",
    className: "col-span-2 row-span-2 aspect-[4/5]",
  },
  {
    src: "/images/3.png",
    alt: "Wedding moment 2",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/3.png",
    alt: "Wedding moment 3",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/3.png",
    alt: "Wedding moment 4",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/3.png",
    alt: "Wedding moment 5",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/3.png",
    alt: "Wedding moment 6",
    className: "col-span-2 aspect-[16/9]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden px-5 py-24 text-white"
    >
      {/* =====================================================
          BACKGROUND OVERLAY
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/40" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,194,154,0.08),transparent_60%)]" />

      {/* =====================================================
          DECORATIVE ORNAMENT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-32 top-32 h-64 w-64 rounded-full border border-[#d8c29a]/10"
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
        className="pointer-events-none absolute -right-32 bottom-32 h-72 w-72 rounded-full border border-[#d8c29a]/10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-md">
        {/* =================================================
            HEADER
        ================================================== */}

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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center"
        >
          {/* Ornament */}

          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d8c29a]/50" />

            <span className="font-serif text-xl text-[#e2cda2]">
              ❦
            </span>

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d8c29a]/50" />
          </div>

          <p className="text-[11px] uppercase tracking-[0.45em] text-[#d8c29a]/70">
            Our Memories
          </p>

          <h2 className="mt-4 font-serif text-[2.7rem] font-light tracking-wide text-[#fff8eb] drop-shadow-lg">
            Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Beberapa momen yang kami abadikan
            <br />
            dalam perjalanan menuju hari istimewa.
          </p>
        </motion.div>

        {/* =================================================
            GALLERY
        ================================================== */}

        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className={`group relative overflow-hidden rounded-[2px] ${photo.className}`}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Image */}

              <img
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Warm overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-[#d8c29a]/5 opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

              {/* Border */}

              <div className="pointer-events-none absolute inset-0 border border-white/10" />

              {/* Corner ornament */}

              <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 right-0 h-px w-5 bg-[#e2cda2]/70" />

                <div className="absolute bottom-0 right-0 h-5 w-px bg-[#e2cda2]/70" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =================================================
            BOTTOM QUOTE
        ================================================== */}

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
            delay: 0.2,
          }}
          className="mt-14 text-center"
        >
          <div className="mx-auto mb-7 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d8c29a]/30" />

            <span className="text-sm text-[#d8c29a]/60">
              ✦
            </span>

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d8c29a]/30" />
          </div>

          <p className="font-serif text-xl font-light leading-relaxed text-[#fff8eb]/90">
            "Every picture tells
            <br />
            a story of us."
          </p>

          <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#d8c29a]/50">
            Aryaduta & Varisa
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL
      ====================================================== */}

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
          delay: 0.5,
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
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