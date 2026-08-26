"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Setiap baris berisi 2 foto: satu kecil (flex-[1]) dan satu lebar (flex-[2]).
// Urutan kecil/lebar dibalik tiap baris untuk bikin pola zigzag/bata selang-seling.
const photos = [
  { src: "/images/3.jpg", alt: "Wedding moment 1" },
  { src: "/images/4.jpg", alt: "Wedding moment 2" },
  { src: "/images/5.jpg", alt: "Wedding moment 3" },
  { src: "/images/6.jpg", alt: "Wedding moment 4" },
  { src: "/images/7.jpg", alt: "Wedding moment 5" },
  { src: "/images/8.jpg", alt: "Wedding moment 6" },
];

// Kelompokkan foto jadi baris berisi 2 foto masing-masing
const photoRows = photos.reduce<(typeof photos)[]>((rows, photo, i) => {
  if (i % 2 === 0) rows.push([photo]);
  else rows[rows.length - 1].push(photo);
  return rows;
}, []);

// Foto-foto yang ditampilkan di carousel highlight (bisa beda set dari grid)
const highlights = [
  { src: "/images/3.jpg", alt: "Highlight 1" },
  { src: "/images/5.jpg", alt: "Highlight 2" },
  { src: "/images/6.jpg", alt: "Highlight 3" },
  { src: "/images/8.jpg", alt: "Highlight 4" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ===================================================
  // LIGHTBOX HANDLERS
  // ===================================================

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % photos.length
    );
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + photos.length) % photos.length
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, showNext, showPrev]);

  // ===================================================
  // CAROUSEL AUTOPLAY
  // ===================================================

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % highlights.length);
    }, 3500);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const resumeAutoplay = () => {
    pauseAutoplay();
    autoplayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % highlights.length);
    }, 3500);
  };

  const goToSlide = (index: number) => {
    pauseAutoplay();
    setActiveSlide(index);
    resumeAutoplay();
  };

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d8c29a]/50" />
            <span className="font-serif text-xl text-[#e2cda2]">❦</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d8c29a]/50" />
          </div>

          {/* <p className="text-[11px] uppercase tracking-[0.45em] text-[#d8c29a]/70">
            Our Memories
          </p> */}

          <h2 className="mt-4 font-serif text-[2.7rem] font-light tracking-wide text-[#fff8eb] drop-shadow-lg">
            Our Moments
          </h2>

          {/* <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Beberapa momen yang kami abadikan
            <br />
            dalam perjalanan menuju hari istimewa.
          </p> */}
        </motion.div>

        {/* =================================================
            HIGHLIGHT CAROUSEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 overflow-hidden rounded-[2px]"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="relative aspect-[4/5] w-full">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={highlights[activeSlide].src + activeSlide}
                src={highlights[activeSlide].src}
                alt={highlights[activeSlide].alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full cursor-pointer object-cover"
                onClick={() => openLightbox(activeSlide)}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) {
                    goToSlide((activeSlide + 1) % highlights.length);
                  } else if (info.offset.x > 60) {
                    goToSlide(
                      (activeSlide - 1 + highlights.length) %
                        highlights.length
                    );
                  }
                }}
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

            {/* Ken Burns slow zoom ring, purely decorative */}
            <div className="pointer-events-none absolute inset-0 border border-white/10" />

            <p className="pointer-events-none absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.35em] text-white/60">
              Sorotan
            </p>
          </div>

          {/* Dots indicator */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {highlights.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goToSlide(i)}
                className="group relative h-2 w-2"
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    i === activeSlide
                      ? "scale-100 bg-[#e2cda2]"
                      : "scale-75 bg-white/30 group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            GALLERY GRID
        ================================================== */}

        <div className="flex flex-col gap-3">
          {photoRows.map((row, rowIndex) => {
            const isReversed = rowIndex % 2 === 1;

            return (
              <div
                key={rowIndex}
                className={`flex gap-3 ${isReversed ? "flex-row-reverse" : ""}`}
              >
                {row.map((photo, colIndex) => {
                  // colIndex 0 di baris genap = kecil, di baris ganjil = lebar (karena dibalik)
                  const isWide = colIndex === 1;
                  const flatIndex = rowIndex * 2 + colIndex;

                  return (
                    <motion.div
                      key={photo.src + flatIndex}
                      className={`group relative aspect-square cursor-pointer overflow-hidden rounded-[2px] ${
                        isWide ? "flex-[2]" : "flex-[1]"
                      }`}
                      initial={{ opacity: 0, y: 40, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.8,
                        delay: flatIndex * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => openLightbox(flatIndex)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading={flatIndex === 0 ? "eager" : "lazy"}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-[#d8c29a]/5 opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

                      <div className="pointer-events-none absolute inset-0 border border-white/10" />

                      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <div className="absolute bottom-0 right-0 h-px w-5 bg-[#e2cda2]/70" />
                        <div className="absolute bottom-0 right-0 h-5 w-px bg-[#e2cda2]/70" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM QUOTE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <div className="mx-auto mb-1 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d8c29a]/30" />
            <span className="text-sm text-[#d8c29a]/60">✦</span>
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
        className="relative z-10 mt-6 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
          Scroll
        </span>

        <motion.div
          className="h-7 w-px bg-[#d8c29a]/40"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10"
            >
              ✕
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 sm:left-6"
            >
              ‹
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 sm:right-6"
            >
              ›
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[80vh] max-w-full"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) showNext();
                else if (info.offset.x > 80) showPrev();
              }}
            >
              <img
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                className="max-h-[80vh] max-w-full rounded-sm object-contain"
              />

              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.35em] text-white/50">
                {lightboxIndex + 1} / {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}