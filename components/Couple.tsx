"use client";

import { motion } from "framer-motion";

/**
 * FLORAL ASSETS NEEDED (not included — see chat explanation):
 * Drop transparent PNGs at these paths for the full "referensi" look.
 * Without them, the layout still works, just less ornate.
 *
 *   /images/florals/bouquet-top.png     -> crystal + rose bouquet above title
 *   /images/florals/wreath-bride.png    -> floral wreath overlay around bride photo
 *   /images/florals/wreath-groom.png    -> floral wreath overlay around groom photo
 *   /images/florals/corner-bloom.png    -> small accent used near closing (optional)
 *
 * FONT: script text below uses `font-script`. Add a cursive Google Font
 * (e.g. Great Vibes / Alex Brush) and map it to that class for the exact
 * look — otherwise it falls back to italic serif, still readable.
 */

export default function Couple() {
  return (
    <section
      id="couple"
      className="relative min-h-[100svh] w-full overflow-hidden px-4 py-16 sm:px-6"
    >
      {/* =====================================================
          FLOATING GOLD SPARKLES
      ====================================================== */}

      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#c99a4b]/60"
          style={{ left: `${12 + i * 15}%`, top: `${8 + (i % 3) * 30}%` }}
          animate={{ opacity: [0, 1, 0], y: [0, -14, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================================================
          ARCH CARD — gold outline, translucent navy fill so
          your global video bg still shows through faintly
      ====================================================== */}

      <div className="relative mx-auto max-w-md">
        {/* soft gold glow behind the arch */}
        <div className="pointer-events-none absolute -inset-4 rounded-t-[260px] rounded-b-[80px] bg-[#c99a4b]/15 blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-t-[260px] rounded-b-[80px] border-2 border-[#c99a4b]/80 bg-[#241a10]/78 px-8 py-20 shadow-[0_0_50px_rgba(201,154,75,0.2)] backdrop-blur-[3px] sm:px-10"
        >
          {/* subtle inner vignette so text stays readable over video */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#241a10]/40 via-[#241a10]/70 to-[#241a10]/85" />

          <div className="relative z-10 flex flex-col items-center">

            {/* =========================================
                BOUQUET + TITLE
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="flex flex-col items-center text-center"
            >
              {/* Optional bouquet illustration — remove this img tag if you don't have the asset */}
              <img
                src="/images/florals/bouquet-top.png"
                alt=""
                aria-hidden="true"
                className="h-28 w-auto opacity-95 drop-shadow-[0_0_25px_rgba(120,170,255,0.25)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              <h2 className="font-script mt-4 text-5xl italic text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] sm:text-6xl">
                Bride &amp; Groom
              </h2>
            </motion.div>

            {/* =========================================
                OPENING MESSAGE
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-8 max-w-sm text-center"
            >
              <p className="text-base font-semibold leading-relaxed text-white">
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </p>

              <p className="mt-4 text-base leading-7 text-white/75">
                Maha Suci Allah yang telah menciptakan makhluk-Nya
                berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah
                mengiringi pernikahan kami.
              </p>
            </motion.div>

            {/* =========================================
                BRIDE
            ========================================== */}

            <motion.div
              className="mt-14 flex w-full flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="relative h-64 w-52 overflow-hidden rounded-full border-2 border-white/80 bg-[#2e2013] shadow-2xl">
                  <img
                    src="/images/1.png"
                    alt="Mempelai wanita"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Optional floral wreath overlay around the photo */}
                <img
                  src="/images/florals/wreath-bride.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <p className="font-script mt-8 text-3xl italic text-[#c99a4b]">
                Putra
              </p>

              <h3 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
                Aryaduta
              </h3>

              <p className="mt-3 text-base font-medium text-white/85">
                Putri Pertama dari
              </p>
              <p className="mt-1 text-base leading-relaxed text-white/75">
                Bapak Nama Ayah &amp; Ibu Nama Ibu
              </p>

              {/* Instagram chip */}
              <a
                href="https://instagram.com/user_ig_wanita"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c99a4b]/70 bg-[#c99a4b]/10 px-4 py-1.5 text-sm text-[#f3e2bb] transition-colors hover:bg-[#c99a4b]/20"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                user_ig_pria
              </a>
            </motion.div>

            {/* =========================================
                AMPERSAND
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="my-12 flex flex-col items-center"
            >
              <div className="h-8 w-px bg-gradient-to-b from-transparent to-[#d4af37]/50" />
              <span className="font-script my-2 text-5xl italic text-[#c99a4b]">
                &amp;
              </span>
              <div className="h-8 w-px bg-gradient-to-t from-transparent to-[#d4af37]/50" />
            </motion.div>

            {/* =========================================
                GROOM
            ========================================== */}

            <motion.div
              className="flex w-full flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="relative h-64 w-52 overflow-hidden rounded-full border-2 border-white/80 bg-[#2e2013] shadow-2xl">
                  <img
                    src="/images/2.jpeg"
                    alt="Mempelai pria"
                    className="h-full w-full object-cover"
                  />
                </div>

                <img
                  src="/images/florals/wreath-groom.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <p className="font-script mt-8 text-3xl italic text-[#c99a4b]">
                Putri
              </p>

              <h3 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
                Varisa
              </h3>

              <p className="mt-3 text-base font-medium text-white/85">
                Putra Pertama dari
              </p>
              <p className="mt-1 text-base leading-relaxed text-white/75">
                Bapak Nama Ayah &amp; Ibu Nama Ibu
              </p>

              <a
                href="https://instagram.com/user_ig_pria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c99a4b]/70 bg-[#c99a4b]/10 px-4 py-1.5 text-sm text-[#f3e2bb] transition-colors hover:bg-[#c99a4b]/20"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                user_ig_wanita
              </a>
            </motion.div>

            {/* =========================================
                CLOSING
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-14 flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-[#c99a4b]/40" />
                <span className="text-sm text-[#c99a4b]">❦</span>
                <div className="h-px w-10 bg-[#c99a4b]/40" />
              </div>

              <p className="mt-6 max-w-xs text-lg italic leading-relaxed text-white/85">
                Semoga Allah SWT senantiasa melimpahkan keberkahan dalam
                pernikahan kami.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        className="relative z-10 mt-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c99a4b]/80">
          Geser ke bawah
        </span>
        <motion.div
          className="h-7 w-px bg-[#c99a4b]/60"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}