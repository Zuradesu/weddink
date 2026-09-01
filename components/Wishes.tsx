"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * UI ONLY — no backend yet.
 * RSVP and Wishes are separated into two boxes.
 * Supabase wiring comes in the next pass.
 */

type Attendance = "hadir" | "tidak_hadir" | null;

type Wish = {
  id: string;
  name: string;
  message: string;
};

type RSVP = {
  id: string;
  name: string;
  attendance: "hadir" | "tidak_hadir";
};

const DUMMY_WISHES: Wish[] = [
  {
    id: "1",
    name: "Fazaa",
    message: "Bagusss banget undangannya, murah lagii ❤️🥳🥳",
  },
  {
    id: "2",
    name: "Firman",
    message: "Masyaallahhhh cantiknyaaa 😍",
  },
  {
    id: "3",
    name: "Nindy",
    message:
      "Selamat menempuh hidup baru, semoga sakinah mawaddah warahmah 🤍",
  },
];

const DUMMY_RSVP: RSVP[] = [
  {
    id: "1",
    name: "Fazaa",
    attendance: "hadir",
  },
  {
    id: "2",
    name: "Firman",
    attendance: "hadir",
  },
];

export default function Wishes() {
  // =====================================================
  // WISHES STATE
  // =====================================================

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>(DUMMY_WISHES);

  // =====================================================
  // RSVP STATE
  // =====================================================

  const [rsvpName, setRsvpName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [rsvps, setRsvps] = useState<RSVP[]>(DUMMY_RSVP);

  // =====================================================
  // WISH SUBMIT
  // =====================================================

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    setWishes((prev) => [
      {
        id: crypto.randomUUID(),
        name: name.trim(),
        message: message.trim(),
      },
      ...prev,
    ]);

    setName("");
    setMessage("");
  };

  // =====================================================
  // RSVP SUBMIT
  // =====================================================

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!rsvpName.trim() || !attendance) return;

    setRsvps((prev) => [
      {
        id: crypto.randomUUID(),
        name: rsvpName.trim(),
        attendance,
      },
      ...prev,
    ]);

    setRsvpName("");
    setAttendance(null);
  };

  return (
    <section
      id="wishes"
      className="relative min-h-[100svh] w-full overflow-hidden px-4 py-20 sm:px-6"
    >
      {/* =====================================================
          FLOATING GOLD SPARKLES
      ====================================================== */}

      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#c99a4b]/50"
          style={{
            left: `${10 + i * 18}%`,
            top: `${8 + (i % 3) * 30}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto max-w-md">
        <div className="pointer-events-none absolute -inset-4 rounded-[48px] bg-[#c99a4b]/10 blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[48px] border-2 border-[#c99a4b]/70 bg-[#241a10]/78 px-6 py-14 shadow-[0_0_50px_rgba(201,154,75,0.15)] backdrop-blur-[3px] sm:px-9"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#241a10]/40 via-[#241a10]/70 to-[#241a10]/85" />

          <div className="relative z-10 flex flex-col items-center">

            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-center"
            >
              <h2 className="font-script text-5xl italic text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] sm:text-6xl">
                Wishes
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Berikan doa dan ucapan terbaik untuk kami.
              </p>
            </motion.div>

            {/* =================================================
                RSVP BOX
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-8 w-full rounded-3xl border border-[#c99a4b]/30 bg-white/[0.04] p-5"
            >
              <div className="text-center">
                <h3 className="font-script text-3xl italic text-white">
                  RSVP
                </h3>

                <p className="mt-1 text-xs text-white/50">
                  Konfirmasi kehadiran Anda.
                </p>
              </div>

              <form onSubmit={handleRsvpSubmit} className="mt-5">
                <input
                  type="text"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Nama"
                  className="w-full rounded-xl border border-[#c99a4b]/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#c99a4b]/70"
                />

                <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-white/50">
                  Konfirmasi Kehadiran
                </p>

                <div className="mt-3 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance("hadir")}
                    className={`flex-1 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                      attendance === "hadir"
                        ? "border-[#c99a4b] bg-[#c99a4b] text-[#241a10]"
                        : "border-[#c99a4b]/50 bg-transparent text-white/85 hover:border-[#c99a4b]"
                    }`}
                  >
                    ✓ Hadir
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance("tidak_hadir")}
                    className={`flex-1 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                      attendance === "tidak_hadir"
                        ? "border-[#c99a4b] bg-[#c99a4b] text-[#241a10]"
                        : "border-[#c99a4b]/50 bg-transparent text-white/85 hover:border-[#c99a4b]"
                    }`}
                  >
                    ✕ Tidak Hadir
                  </button>
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-full bg-gradient-to-r from-[#c99a4b] to-[#dcb872] py-3 text-sm font-semibold tracking-wide text-[#241a10] shadow-lg transition-transform active:scale-[0.98]"
                >
                  Kirim RSVP
                </button>
              </form>
            </motion.div>

            {/* =================================================
                WISHES BOX
            ================================================== */}

            <motion.form
              onSubmit={handleWishSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-6 w-full rounded-3xl border border-[#c99a4b]/30 bg-white/[0.04] p-5"
            >
              <div className="text-center">
                <h3 className="font-script text-3xl italic text-white">
                  Kartu Ucapan
                </h3>

                <p className="mt-1 text-xs text-white/50">
                  Berikan doa dan ucapan terbaik untuk kami.
                </p>
              </div>

              <div className="mt-5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama"
                  className="w-full rounded-xl border border-[#c99a4b]/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#c99a4b]/70"
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis ucapan & doa..."
                  rows={4}
                  className="mt-3 w-full resize-none rounded-xl border border-[#c99a4b]/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#c99a4b]/70"
                />

                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-gradient-to-r from-[#c99a4b] to-[#dcb872] py-3 text-sm font-semibold tracking-wide text-[#241a10] shadow-lg transition-transform active:scale-[0.98]"
                >
                  Kirim Ucapan
                </button>
              </div>
            </motion.form>

            {/* =================================================
                WISHES LIST
            ================================================== */}

            <div className="mt-8 flex w-full flex-col gap-3">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40">
                Ucapan & Doa
              </p>

              <AnimatePresence initial={false}>
                {wishes.map((wish) => (
                  <motion.div
                    key={wish.id}
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-[#c99a4b]/25 bg-white/[0.06] px-5 py-4 text-left"
                  >
                    <p className="text-sm font-semibold text-white">
                      {wish.name}
                    </p>

                    <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                      {wish.message}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}