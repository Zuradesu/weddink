"use client";

import { motion } from "framer-motion";

export default function WeddingIntro() {
  return (
    <section
      id="wedding-intro"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* ========================================
          VIDEO BACKGROUND
      ========================================= */}
      <motion.div
        className="absolute inset-0"
        initial={{
          opacity: 0,
          scale: 1.05,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/videos/videowdh.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* ========================================
          DARK OVERLAY
      ========================================= */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* ========================================
          CONTENT
      ========================================= */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 text-center text-white">
        <div className="flex flex-col items-center">

          {/* Small heading */}
          <motion.p
            className="text-[10px] uppercase tracking-[0.45em] text-white/80"
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
            The Wedding Of
          </motion.p>

          {/* Names */}
          <motion.h1
            className="mt-5 font-serif text-5xl font-light leading-none sm:text-6xl"
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
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Aryaduta
          </motion.h1>

          {/* Ampersand */}
          <motion.span
            className="my-2 font-serif text-3xl italic text-white/80"
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
              duration: 0.7,
              delay: 0.9,
            }}
          >
            &
          </motion.span>

          <motion.h1
            className="font-serif text-5xl font-light leading-none sm:text-6xl"
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
              delay: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Varisa
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="my-7 h-px w-12 bg-white/60"
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 48,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 1.3,
            }}
          />

          {/* Date */}
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-white/90"
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
              delay: 1.5,
            }}
          >
            28 December 2027
          </motion.p>
        </div>
      </div>

      {/* ========================================
          SCROLL INDICATOR
      ========================================= */}
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
          delay: 2,
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
          Scroll
        </span>

        <motion.div
          className="h-8 w-px bg-white/50"
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